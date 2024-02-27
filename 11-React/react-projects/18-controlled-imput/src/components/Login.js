import { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmition(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1>Login form</h1>
      <form onSubmit={handleSubmition}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </label>
        </div>
        <button type="submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;
