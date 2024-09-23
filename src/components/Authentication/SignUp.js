import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { loginUser } from '../../redux/userReducer';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Firebase Authentication to create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch action to update the Redux store
      dispatch(loginUser({ email: user.email, uid: user.uid }));

      alert('Sign Up successful!');
    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
