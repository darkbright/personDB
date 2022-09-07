import { useRouter } from 'next/router';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Profile: {id}</p>;
}

export default Edit;