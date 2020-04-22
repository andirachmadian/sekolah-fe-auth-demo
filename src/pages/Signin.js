import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Signin = (props) => {
  const alert = useAlert();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChangeLogin = (e, field) => {
    const newData = Object.assign({}, loginData);
    newData[field] = e.target.value;

    setLoginData(newData);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://service-st-subee.tabspace.xyz/external/users/signin', loginData);
      alert.success('berhasil login');
    } catch (error) {
      alert.error('login galal');
    }
  };

  return (
    <div className='container'>
      <h1>Halaman Login</h1>
      <form onSubmit={onSubmitLogin}>
        <div className='form-group'>
          <label className='control-label'>Email</label>
          <input className='form-control' value={loginData.email} onChange={(e) => onChangeLogin(e, 'email')} />
        </div>
        <div className='form-group'>
          <label className='control-label'>Password</label>
          <input className='form-control' type='password' value={loginData.password} onChange={(e) => onChangeLogin(e, 'password')} />
        </div>
        <button className='btn-primary' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default withRouter(Signin);
