import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [emailInput, setEmailInput] = useState(false);

  const handleChangeEmail = (e) => {
    let emailValue = e.target.value;
    setUser({ ...user, email: emailValue });
    if (validator.isEmail(user.email) && emailInput === false) {
      setUser({
        ...user,
        email: emailValue,
        username: emailValue.slice(0, user.email.indexOf('@')),
      });
    } else {
      null;
    }
  };

  const handleChangeUsername = (e) => {
    setEmailInput(true);
    setUser({ ...user, username: e.target.value });
  };

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(user.password);
    if (validator.isStrongPassword(user.password)) {
      console.log('Heslo je silné');
    } else {
      console.log('Heslo je slabé');
    }
  };

  const handleConfirmPassword = (e) => {
    setUser({ ...user, passwordConfirm: e.target.value });
    if (user.passwordConfirm === user.password) {
      console.log('Hesla se shodují');
    } else {
      console.log('Hesla se neshodují');
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Registration</h1>

      <form className="registration_container">
        <div className="circle"></div>
        <div className="inner_circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <input
            type="email"
            value={user.email}
            onChange={handleChangeEmail}
            id="email"
            placeholder="Email Adress"
          />
        </div>
        <input
          type="username"
          value={user.username}
          onChange={handleChangeUsername}
          id="username"
          placeholder="User Name"
        />
        <input
          type="password"
          value={user.password}
          onChange={handleChangePassword}
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          value={user.passwordConfirm}
          onChange={handleConfirmPassword}
          id="confirm-password"
          placeholder="Confirm Password"
        />
        <button
          className="registration_button"
          type="submit"
          onClick={handleInput}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
