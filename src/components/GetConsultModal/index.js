import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import Title from "../Title";
import InputMask from 'react-input-mask';
import { InfoCircleOutlined } from '@ant-design/icons';
import baseAPI from "../../api/baseAPI";
import "./_style.scss";
import { createConsultUrl } from '../../api/apiUrls';
import { Alert, Snackbar } from '@mui/material';

const InputTel = (props) => (
  <InputMask mask="+\9\98 (99) 999-99-99" value={props.value} onChange={props.onChange}>
    {(inputProps) => (
      <Input placeholder="input placeholder" {...inputProps} />
    )
    }
  </InputMask>
);

const GetConsultModal = (props) => {
  const [open, setOpen] = useState(false);

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

  const createConsult = (formData) => {
    baseAPI.create(createConsultUrl, formData)
      .then((res) => {
        console.log("res", res.data)
      })
      .catch((e) => console.log("e", e))
      .finally(() => {

      })
  }

  const onHandleConsultForm = (values) => {
    createConsult(JSON.stringify(values))
    form.resetFields();
    onCloseConsultModal();
  };

  return (
    <>
      <Modal visible={isOpenConsultModal} className="get_consult_modal" footer={null} width={1157} onCancel={() => onCloseConsultModal()}>
        <div className="modal_left">
          <img src="/assets/img/form_img.png" alt="form" width="100%" height="100%" />
        </div>
        <div className="consult_form">
          <Title>Konsultatsiya olish</Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={onHandleConsultForm}
          >
            <Form.Item label="Ism" required name="name" tooltip={{ title: 'This is a required field', icon: <InfoCircleOutlined /> }}
              rules={[
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="input placeholder" type="tel" />
            </Form.Item>
            <Form.Item
              label="Elektron pochta"
              tooltip={{ title: 'This is a required field', icon: <InfoCircleOutlined /> }}
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Tel raqami"
              required
              tooltip={{ title: 'This is a required field', icon: <InfoCircleOutlined /> }}
              name="tel_number"
              rules={[
                {
                  required: true,
                  message: 'This is a required field',
                },
              ]}
            >
              <InputTel />
            </Form.Item>
            <Form.Item required name="agreement" valuePropName="checked" rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            >
              <Checkbox>
                Men <a href="http://" target="_blank" rel="noopener noreferrer">shartlarga
                </a> roziman
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType='submit'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default GetConsultModal