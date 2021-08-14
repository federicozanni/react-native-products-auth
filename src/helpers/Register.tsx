import { useContext } from 'react'
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import { Keyboard } from 'react-native';


export const Register = () => {

  const { singUp } = useContext(AuthContext);


  const { name, email, password, onChange } = useForm({
    name: '',
    email: '',
    password: '',
});

  const onRegister = () => {
    singUp({ correo: email, nombre: name, password })
    Keyboard.dismiss();
  }

  return {
      onRegister,
      onChange,
      name,
      email,
      password,
    }
}
