import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
    alert("Temporary doesn't work");
  };
  return (
    <>
      <div>
        <h1>LoginPage</h1>
        <button onClick={handleLogin}> Login</button>
        
      </div>
    </>
  );
}
export default Login;
