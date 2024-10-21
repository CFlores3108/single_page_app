import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './styles/SignUp.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Tu registro ha sido exitoso.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      reset();
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register('firstName', { required: 'First Name is required' })} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name</label>
          <input {...register('lastName', { required: 'Last Name is required' })} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
          })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Birthday</label>
          <input type="date" {...register('birthday', { required: 'Birthday is required' })} />
          {errors.birthday && <p>{errors.birthday.message}</p>}
        </div>
        <div>
          <label>Username</label>
          <input {...register('username', { required: 'Username is required' })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password', { 
            required: 'Password is required', 
            minLength: { value: 6, message: 'Password must be at least 6 characters' } 
          })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
