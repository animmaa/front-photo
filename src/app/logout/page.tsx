'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './logout.scss';

interface FormValues {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  phone?: string;
  address: string;
  postalcode: number;
  city: string;
  country: string;
}

export default function logout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/user/logout`,
        values
      );
      toast(response.data.message);
    } catch (error) {
      toast("une erreur s'est produite");
    }
  };

  return (
    <div className="logout">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <input id="email" {...register('email')} />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input id="password" {...register('password')} />
        </label>
        <label htmlFor="lastname">
          Nom
          <input id="lastname" {...register('lastname')} />
        </label>
        <label htmlFor="firstname">
          Prénom
          <input id="firstname" {...register('firstname')} />
        </label>
        <label htmlFor="phone">
          Téléphone
          <input id="phone" {...register('phone')} />
        </label>
        <label htmlFor="address">
          Adresse
          <input id="address" {...register('address')} />
        </label>
        <label htmlFor="postalcode">
          Code postal
          <input id="postalcode" {...register('postalcode')} />
        </label>
        <label htmlFor="city">
          Ville
          <input id="city" {...register('city')} />
        </label>
        <label htmlFor="country">
          Pays
          <input id="country" {...register('country')} />
        </label>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
}
