
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <>
      {id}
    </>
  )
};

export default Profile;