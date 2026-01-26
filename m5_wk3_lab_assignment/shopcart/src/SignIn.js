import React, { useState } from 'react';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', { name, email });
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
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
            <button
              className="btn btn-primary w-100"
              style={{
                backgroundColor: '#4267B2',
                border: 'none',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase'
              }}
              onClick={handleFacebookLogin}
            >
              <span style={{ fontSize: '1.2rem' }}>f</span>
              LOGIN WITH FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
