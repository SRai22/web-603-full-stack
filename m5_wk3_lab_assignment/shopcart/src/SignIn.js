import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', { name, email });

    // Call the onLogin callback with user data
    if (onLogin) {
      onLogin({ name, email });
    }

    // Navigate to home after successful login
    navigate('/');
  };

  const responseFacebook = (response) => {
    console.log('Facebook login response:', response);
    if (response.accessToken) {
      // Successfully logged in with Facebook
      console.log('User logged in:', response.name, response.email);

      // Call the onLogin callback with Facebook user data
      if (onLogin) {
        onLogin({
          name: response.name,
          email: response.email,
          picture: response.picture?.data?.url,
          facebookId: response.userID
        });
      }

      // Navigate to home after successful Facebook login
      navigate('/');
    } else {
      console.log('Facebook login failed or cancelled');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem' }}>
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
          <h2 className="mb-0">Sign In</h2>
        </div>
        <div className="card-body" style={{ padding: '2rem' }}>
          <h5 className="mb-4">Please login using one of the following:</h5>

          <div style={{ maxWidth: '300px' }}>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-success"
                style={{
                  padding: '0.5rem 1.5rem',
                  fontWeight: '500'
                }}
              >
                Login
              </button>
            </form>
          </div>

          <div style={{ marginTop: '3rem', maxWidth: '300px' }}>
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="btn btn-primary w-100"
              icon="fa-facebook"
              textButton="LOGIN WITH FACEBOOK"
              buttonStyle={{
                backgroundColor: '#4267B2',
                border: 'none',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '0.375rem'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
