import { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h2>Profile Address</h2>
      <p>Alamant {profile}</p>
    </>
  );
}
