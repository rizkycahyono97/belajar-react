import { useNavigate } from 'react-router';
import { userLogout } from '../../lib/api/UserApi';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { alertError } from '../../lib/alert';

export default function UserLogout() {
  const [token, setToken] = useLocalStorage('token', '');
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await userLogout(token);
    const responBody = response.json();
    console.log(responBody);

    if (response.status == 200) {
      setToken('');
      await navigate({
        pathname: '/login'
      });
    } else {
      alertError(responBody.errors);
    }
  }

  useEffectOnce(() => {
    handleLogout().then(() => console.log('User logged successfully'));
  });

  return <></>;
}
