import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { loginUser } from '../../redux/userReducer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase Authentication to sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dispatch action to update the Redux store
      dispatch(loginUser({ email: user.email, uid: user.uid }));

      alert('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
