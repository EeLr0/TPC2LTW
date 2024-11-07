import { useState } from 'react';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const invalidLabel = "text-label-invalid block text-xs font-bold uppercase text-stone-300 mb-2 text-xs tracking-widest"
  const validLabel = "block text-xs font-bold uppercase text-stone-300 mb-2 tracking-widest"

  const invalidInput = "text-input-invalid w-full px-3 py-2 p-3 p-4 leading-normal bg-white rounded border border-red-500";

  const validInput = "w-full px-3 py-2 p-3 p-4 leading-normal bg-white text-label-custom rounded border"


  return (
    <div className="size-full max-w-md p-8 m-auto rounded-lg shadow-custom bg-custom-gradient ">
      <div className="flex flex-col gap-2 mb-6">
        {/* <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p> */}
        <Input label={'Email'}type="email" invlabel={emailNotValid ? invalidLabel:validLabel} 
        className={emailNotValid ? invalidInput : validInput} onChange={(event) => 
        handleInputChange('email', event.target.value)}/>
        {/* <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
        <Input label={'Password'} type="password" invlabel= {passwordNotValid ? invalidLabel : validLabel}className={passwordNotValid ? invalidInput : validInput}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }/>
      </div>
      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-white font-medium">
          Create a new account
        </button>
        <button className='pb-4 pt-4 pl-8 pr-8 font-semibold uppercase border- rounded-md text-label-custom bg-yellow-500' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
