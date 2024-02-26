import './Login.css';

function handleSubmition(event) {
  event.preventDefault();
  const userData = {
    username: event.target.username.value,
    password: event.target.password.value,
  };
  alert(JSON.stringify(userData));
}

function Login() {
  return (
    <section>
      <h1>Login form</h1>
      <form onSubmit={handleSubmition}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">LogIn</button>
      </form>
    </section>
  );
}

export default Login;