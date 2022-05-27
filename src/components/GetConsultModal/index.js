import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import Title from "../Title";
import InputMask from 'react-input-mask';
import { InfoCircleOutlined } from '@ant-design/icons';
import baseAPI from "../../api/baseAPI";
import { acceptTermsUrl, createConsultUrl } from '../../api/apiUrls';
import { useT } from "../../custom/hooks/useT";
import { Alert, Snackbar } from '@mui/material';
import { API_IMG_URL } from '../../constants';
import "./_style.scss";

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
				width={1157}
				onCancel={() => onCloseConsultModal()}
				centered
			>
				<div className="modal_left">
					<img className='modal_left-img' src={API_IMG_URL + img} alt="form" />
				</div>
				<div className="consult_form">
					<Title>{t(`getConsult.${lang}`)}</Title>
					<Form
						form={form}
						layout="vertical"
						onFinish={onHandleConsultForm}
					>
						<Form.Item
							label={t(`name.${lang}`)} required name="name" tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoCircleOutlined /> }}
						// rules={[
						// 	{
						// 		required: true,
						// 		message: 'Iltimos ismingizni kiriting!',
						// 	},
						// ]}
						>
							<Input placeholder={t(`name.${lang}`)} />
						</Form.Item>
						{getErrorMessages(name)}
						<Form.Item
							label={t(`email.${lang}`)}
							tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoCircleOutlined /> }}
							required
							name="email"
						// rules={[
						// 	{
						// 		type: 'email',
						// 		message: 'The input is not valid E-mail!',
						// 	},
						// 	{
						// 		required: true,
						// 		message: 'Iltimos elektron pochtangizni kiriting!',
						// 	},
						// ]}
						>
							<Input placeholder="E-mail" />
						</Form.Item>
						{getErrorMessages(email)}
						<Form.Item
							label={t(`telNumber.${lang}`)}
							tooltip={{ title: t(`requiredFile.${lang}`), icon: <InfoCircleOutlined /> }}
							required
							name={"tel_number"}
						// rules={[
						// 	{
						// 		required: true,
						// 		message: 'Iltimos telefon raqamingizni kiriting!',
						// 	},
						// ]}
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
							<Checkbox>
								<div dangerouslySetInnerHTML={{ __html: acceptTermsText }}></div>
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Button loading={loading} type="primary" htmlType='submit'>{t(`send.${lang}`)}</Button>
						</Form.Item>
					</Form>
				</div>
			</Modal>
			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					This is a success message!
				</Alert>
			</Snackbar>
		</>
	)
}

export default GetConsultModal