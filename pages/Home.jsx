import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={goToLogin}> To Login page</button>
    </>
  );
}
export default Home;
