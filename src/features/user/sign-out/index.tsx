import { message } from 'antd';
import { getAuth, signOut as signOutFirebase } from 'firebase/auth';
import { ReactNode } from 'react';
import { useAppDispatch } from '~/app/hooks';
import { signOut } from '../userSlice';

export interface Props {
	children: ReactNode;
}
const SignOut = ({ children }: Props) => {
	const dispatch = useAppDispatch();
	const auth = getAuth();
	const handlerSignOut = async () => {
		try {
			dispatch(signOut());
			await signOutFirebase(auth);
			message.success('Đăng xuất thành công');
		} catch (error) {
			console.log(error);
		}
	};
	return <div onClick={handlerSignOut}>{children}</div>;
};
export default SignOut;
