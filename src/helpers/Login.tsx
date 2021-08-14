import { useContext } from 'react'
import { Keyboard } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

export const Login = () => {

  const { singIn } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
});

  const onLogin = () => {
    singIn({ correo: email, password });
    Keyboard.dismiss();
  }

  return {
      onLogin,
      onChange,
      email,
      password,
    }
}
