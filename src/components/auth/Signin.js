"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    console.log('Sign In attempted with:', { email, username, password });
    if (email && password) {
      console.log("Simulating traditional sign-in success. Redirecting to home page.");
      router.push('/');
    } else {
      setError("Please fill in email and password.");
    }
  };

  const handleGoogleSignIn = () => {
    setError('');
    console.log('Google Sign-In attempted (simulated). Redirecting to home page.');
    router.push('/');
  };

  const shouldLabelFloat = (isFocused, value) => isFocused || value.length > 0;

  const colors = {
    backgroundPrimary: '#F8F8F8',
    backgroundSecondary: '#FFFFFF',
    textPrimary: '#333333',
    textSecondary: '#888888',
    accentGold: '#DAA520',
    border: '#E0E0E0',
    errorBackground: '#FFF0F0',
    errorText: '#D32F2F',
  };

  const inputBaseStyle = {
    padding: "20px 0 10px 0",
    fontSize: "1em",
    borderRadius: "0",
    border: 'none',
    borderBottom: `1px solid ${colors.border}`,
    backgroundColor: 'transparent',
    color: colors.textPrimary,
    outline: "none",
    boxShadow: `none`,
    transition: "border-color 0.3s ease, border-bottom-width 0.3s ease",
    width: "100%",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    borderColor: colors.accentGold,
    borderBottomWidth: '2px',
    boxShadow: `none`,
  };

  const labelBaseStyle = {
    position: "absolute",
    left: "0",
    top: "15px",
    color: colors.textSecondary,
    fontSize: "1em",
    pointerEvents: "none",
    transition: "top 0.3s ease, font-size 0.3s ease, color 0.3s ease, background-color 0.3s ease",
    zIndex: 1,
  };

  const labelFloatStyle = {
    top: "-10px",
    fontSize: "0.8em",
    color: colors.accentGold,
    backgroundColor: colors.backgroundSecondary,
    padding: "0 5px",
    left: "-5px",
  };

  const buttonBaseStyle = {
    padding: '16px 32px',
    fontSize: '1.15em',
    fontWeight: '600',
    cursor: 'pointer',
    border: `1px solid ${colors.accentGold}`,
    borderRadius: '10px',
    background: 'transparent',
    color: colors.accentGold,
    marginTop: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s ease, color 0.3s ease, transform 0.2s ease-out, box-shadow 0.3s ease-out',
    width: '100%',
  };

  const buttonHoverStyle = {
    background: colors.accentGold,
    color: colors.backgroundSecondary,
    transform: 'translateY(-2px) scale(1.01)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  };

  const buttonActiveStyle = {
    transform: 'translateY(1px) scale(0.99)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const googleButtonBaseStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '16px 1.5rem',
    fontSize: '1.1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '10px',
    background: 'transparent',
    border: '1px solid #4285F4',
    color: '#4285F4',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
    transition: 'background 0.3s ease, color 0.3s ease, transform 0.2s ease',
  };

  const googleButtonHoverStyle = {
    background: '#4285F4',
    color: colors.backgroundSecondary,
    transform: 'translateY(-1px) scale(1.005)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  };

  const googleButtonActiveStyle = {
    transform: 'translateY(0.5px) scale(0.995)',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <style>
        {`
          .signin-container {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          @media (max-width: 768px) {
            .full-page-container { flex-direction: column; }
            .left-panel {
              min-height: 250px !important;
              width: 100%;
              flex: none !important;
              border-radius: 0;
              box-shadow: none;
            }
            .right-panel { padding: 1.5rem !important; }
            .form-container { padding: 30px !important; }
            .heading { font-size: 2em !important; margin-bottom: 20px !important; }
          }
          @media (min-width: 640px) { .form-container { max-width: 28rem; } }
          @media (min-width: 768px) {
            .form-container { max-width: 32rem; padding: 2.5rem; }
            .heading { font-size: 3.2em; }
          }
        `}
      </style>

      <div className="full-page-container signin-container" style={{
        minHeight: '100vh',
        paddingTop: '96px',
        backgroundColor: colors.backgroundPrimary,
        display: 'flex',
        fontWeight: "500",
        letterSpacing: "0.025em",
        color: colors.textPrimary,
      }}>
        <div className="left-panel" style={{
          flex: '1.2',
          backgroundColor: colors.backgroundSecondary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: 'calc(100vh - 96px)',
          overflow: 'hidden',
          borderRadius: '0 15px 15px 0',
          boxShadow: '5px 0 20px rgba(0,0,0,0.05)',
          borderRight: `1px solid ${colors.border}`,
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `repeating-linear-gradient(
              45deg,
              ${colors.accentGold}08,
              ${colors.accentGold}08 10px,
              transparent 10px,
              transparent 20px
            )`,
            opacity: 0.8,
            zIndex: 0,
          }}></div>
          <img
            src="/authimg.png"
            alt="Authentication"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
            }}
          />
        </div>

        <div className="right-panel" style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem',
          backgroundColor: colors.backgroundPrimary,
        }}>
          <h1 className="heading" style={{
            fontWeight: "500", // font-medium like navbar navigation
            letterSpacing: "0.025em", // tracking-wide
            fontSize: '3.5em',
            marginBottom: '40px',
            color: colors.textPrimary,
            fontWeight: '700',
            letterSpacing: '-0.5px',
            textAlign: 'center',
          }}>
            Welcome Back!
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '35px',
              padding: '50px',
              maxWidth: '500px',
              width: '100%',
              backgroundColor: colors.backgroundSecondary,
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: `1px solid ${colors.border}`,
            }}
            className="form-container"
          >
            {error && (
              <div style={{ backgroundColor: colors.errorBackground, color: colors.errorText, padding: '0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', textAlign: 'center', border: `1px solid ${colors.errorText}20` }}>
                {error}
              </div>
            )}

            <div style={{ position: 'relative', width: '100%' }}>
              <label
                htmlFor="email"
                style={{
                  ...labelBaseStyle,
                  ...(shouldLabelFloat(isEmailFocused, email) ? labelFloatStyle : {}),
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                style={{
                  ...inputBaseStyle,
                  ...(isEmailFocused ? inputFocusStyle : {}),
                }}
              />
            </div>

            <div style={{ position: 'relative', width: '100%' }}>
              <label
                htmlFor="username"
                style={{
                  ...labelBaseStyle,
                  ...(shouldLabelFloat(isUsernameFocused, username) ? labelFloatStyle : {}),
                }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setIsUsernameFocused(true)}
                onBlur={() => setIsUsernameFocused(false)}
                style={{
                  ...inputBaseStyle,
                  ...(isUsernameFocused ? inputFocusStyle : {}),
                }}
              />
            </div>

            <div style={{ position: 'relative', width: '100%' }}>
              <label
                htmlFor="password"
                style={{
                  ...labelBaseStyle,
                  ...(shouldLabelFloat(isPasswordFocused, password) ? labelFloatStyle : {}),
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                style={{
                  ...inputBaseStyle,
                  ...(isPasswordFocused ? inputFocusStyle : {}),
                }}
              />
            </div>

            <button
              type="submit"
              style={buttonBaseStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonBaseStyle)}
              onMouseDown={(e) => Object.assign(e.currentTarget.style, buttonActiveStyle)}
              onMouseUp={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
            >
              Sign In
            </button>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '1.5rem 0',
            }}>
              <div style={{ flexGrow: 1, borderTop: `1px solid ${colors.border}` }}></div>
              <span style={{ flexShrink: 0, margin: '0 1rem', color: colors.textSecondary, fontWeight: '500' }}>OR</span>
              <div style={{ flexGrow: 1, borderTop: `1px solid ${colors.border}` }}></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              style={googleButtonBaseStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, googleButtonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, googleButtonBaseStyle)}
              onMouseDown={(e) => Object.assign(e.currentTarget.style, googleButtonActiveStyle)}
              onMouseUp={(e) => Object.assign(e.currentTarget.style, googleButtonHoverStyle)}
            >
              Sign in with Google
            </button>

            <div style={{
              marginTop: '30px',
              fontSize: '0.98em',
              color: colors.textSecondary,
              textAlign: 'center',
            }}>
              New to our exclusive platform?{" "}
              <button
                type="button"
                onClick={() => router.push('/auth/signup')}
                style={{
                  color: colors.accentGold,
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'color 0.2s ease',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C59A30')}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.accentGold)}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
