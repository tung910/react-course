import { Checkbox, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import Button from '~/components/Button';
import Dialog from '~/components/Dialog';

const { Title } = Typography;
type Props = {
	show: boolean;
	setShow: any;
};

const SignUpPage = ({ show, setShow }: Props) => {
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setShow(false);
		onFinish();
	};

	const handleCancel = () => {
		setShow(false);
	};
	const onFinish = (values?: any) => {
		console.log('Success:', values);
		setTimeout(() => {
			setConfirmLoading(false);
		}, 2000);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Dialog
			title={<Title level={4}>Đăng kí</Title>}
			visible={show}
			handleOk={handleOk}
			handleCancel={handleCancel}
			confirmLoading={confirmLoading}
		>
			<Form
				layout='vertical'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 32 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				size='large'
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input type='email' />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Button
					color={'#fff'}
					bgColor='#D70018'
					bgHover='#D70018'
					size='16px'
					padding='0.8em'
				>
					Đăng nhập
				</Button>
				<Button
					color={'#fff'}
					bgColor='#0050b3'
					bgHover='#0050b3'
					size='16px'
					className=' my-4'
					padding='0.8em'
				>
					Đăng nhập với tài khoản Google
				</Button>
			</Form>
		</Dialog>
	);
};

export default SignUpPage;
