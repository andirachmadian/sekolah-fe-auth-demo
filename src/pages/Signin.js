import React from 'react';

const Signin = () => {
  return (
    <div className='container'>
      <h1>Halaman Login</h1>
      <div className='form-group'>
        <label className='control-label'>Email</label>
        <input className='form-control' />
      </div>
      <div className='form-group'>
        <label className='control-label'>Password</label>
        <input className='form-control' type='password' />
      </div>
      <button className='btn-primary' type='submit'>
        Sign in
      </button>
    </div>
  );
};

export default Signin;
