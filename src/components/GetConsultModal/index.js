import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import Title from "../Title";
import InputMask from 'react-input-mask';
import baseAPI from "../../api/baseAPI";
import { acceptTermsUrl, createConsultUrl } from '../../api/apiUrls';
import { useT } from "../../custom/hooks/useT";
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import { API_IMG_URL } from '../../constants';
import "./_style.scss";
import { InfoOutlined } from '@mui/icons-material';
import { ColorModeContext } from '../../static';

const InputTel = (props) => (
	<InputMask mask="+\9\98 (99) 999-99-99" placeholder='+998' value={props.value} onChange={props.onChange}>
		{(inputProps) => (
			<Input placeholder="input placeholder" {...inputProps} />
		)}
	</InputMask>
);

const GetConsultModal = (props) => {
	const { t, lang } = useT()
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState({})
	const [acceptTerms, setAcceptTerms] = useState({})
	const [loading, setLoading] = useState(false);
	const { mode, setMode } = useContext(ColorModeContext)

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const [form] = Form.useForm();
	const { isOpenConsultModal, onOpenConsultModal, onCloseConsultModal } = props;

	const getAcceptTerms = useCallback(() => {
		baseAPI.fetchAll(acceptTermsUrl)
			.then((res) => {
				if (res.data.success) {
					setAcceptTerms(res.data.data)
				}
			})
			.catch((e) => console.log(e));
	}, [])

	useEffect(() => {
		getAcceptTerms()
	}, [getAcceptTerms])

	const createConsult = (formData) => {
		setLoading(true);
		baseAPI.create(createConsultUrl, formData)
			.then((res) => {
				if (res.data.status === 200) {
					form.resetFields();
					onCloseConsultModal();
					handleClick();
					setMessages({})
				}
				else if (res.data.status === 403) {
					setMessages(res.data["message"])
				}

			})
			.catch((e) => console.log("e", e))
			.finally(() => {
				setLoading(false);
			})
	}

	const onHandleConsultForm = (values) => {
		let { tel_number } = values;
		tel_number = tel_number.replace(/\s/g, '');
		tel_number = tel_number.replaceAll("-", "");
		tel_number = tel_number.replaceAll("(", "");
		tel_number = tel_number.replaceAll(")", "")
		createConsult(JSON.stringify({ ...values, tel_number }));
	};

	const { name = [], email = [], tel = [] } = messages;
	const { file, img } = acceptTerms;
	const getErrorMessages = (error = []) => {
		if (!error[0]) {
			return null;
		} else {
			return (<span style={{ color: "#ff4d4f", display: "block", marginTop: "-20px" }}>{error[0]}</span>);
		}
	}

	const acceptTermsText = lang === "uz" ? `Men <a href=${API_IMG_URL + file} target="_blank" rel="noopener noreferrer">shartlarga
</a> roziman` : lang === "ru" ? `Я согласен с <a href=${API_IMG_URL + file} target="_blank" rel="noopener noreferrer">условиями</a>` : `I agree to <a href=${API_IMG_URL + file} target="_blank" rel="noopener noreferrer">the terms</a>`

	return (
		<>
			<Modal
				visible={isOpenConsultModal}
				className="get_consult_modal"
				footer={null}
				width={1100}
				onCancel={() => onCloseConsultModal()}
				centered
			>
				<div className="modal_left">
					<img className='modal_left-img' src={API_IMG_URL + img} alt="form" />
				</div>
				<Stack bgcolor='background.default' className="consult_form">
					<Title>{t(`getConsult.${lang}`)}</Title>
					<Form
						form={form}
						layout="vertical"
						onFinish={onHandleConsultForm}
					>
						<Form.Item
							label={<Typography color='info.light'>{t(`name.${lang}`)}</Typography>} required name="name"
							tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoOutlined sx={{ fill: mode['color'] === 'dark' ? '#fff' : '#252C34' }} fontSize='20px' /> }}
						>
							<Input placeholder={t(`name.${lang}`)} />
						</Form.Item>
						{getErrorMessages(name)}
						<Form.Item
							label={<Typography color='info.light'>{t(`email.${lang}`)}</Typography>}
							tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoOutlined sx={{ fill: mode['color'] === 'dark' ? '#fff' : '#252C34' }} fontSize='20px' /> }}
							required
							name="email"
						>
							<Input placeholder="E-mail" />
						</Form.Item>
						{getErrorMessages(email)}
						<Form.Item
							label={<Typography color='info.light'>{t(`telNumber.${lang}`)}</Typography>}
							tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoOutlined sx={{ fill: mode['color'] === 'dark' ? '#fff' : '#252C34' }} fontSize='20px' /> }}
							required
							name={"tel_number"}
						>
							<InputTel />
						</Form.Item>
						{getErrorMessages(tel)}
						<Form.Item required name="agreement" valuePropName="checked" rules={[
							{
								validator: (_, value) =>
									value ? Promise.resolve() : Promise.reject(new Error(t(`youMustAcceptTerms.${lang}`))),
							},
						]}
						>
							<Checkbox style={{ color: mode['color'] === 'dark' ? '#fff' : '#000' }}>
								<div dangerouslySetInnerHTML={{ __html: acceptTermsText }}></div>
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Button loading={loading} type="primary" htmlType='submit'>{t(`send.${lang}`)}</Button>
						</Form.Item>
					</Form>
				</Stack>
			</Modal>
			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					{t(`thanksFormSent.${lang}`)}
				</Alert>
			</Snackbar>
		</>
	)
}

export default GetConsultModal