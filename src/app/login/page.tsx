'use client'

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValues {
  email: string;
  password: string;
}

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
      console.log(values)
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/user/login`,
        values
      );
      toast("vous etes maintenant connecté");
    } catch (error) {
      toast("une erreur s'est produite");
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...register('email')}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            placeholder="Mot de passe"
            id="password"
            {...register('password')}
          />
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}
