import { useContext } from 'react'
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import { Keyboard } from 'react-native';


export const Register = () => {

  const { singUp } = useContext(AuthContext);


  const { nombre, email, password, onChange } = useForm({
    nombre: '',
    email: '',
    password: '',
});

  const onRegister = () => {
    singUp({ correo: email, nombre, password })
    Keyboard.dismiss();
  }

  return {
      onRegister,
      onChange,
      nombre,
      email,
      password,
    }
}
