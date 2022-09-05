
import { useRouter } from 'next/router'
import { Image, Space, Button } from 'antd';

const Profile = () => {
  const router = useRouter();
  const { id, korName ,engName, imageUrl,category,birthday,mbti,enneagram } = router.query;
  
  return (
    <>
     <Space align="start" direction="horizontal" size="middle" style={{ display: 'flex' }}>
        <div className="container d-flex justifyContent space-around">
            <div className="center" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
              <div className="profile-img">
                <Image
                  style={{borderRadius: '50%'}}
                  src={"https://www.me-u.co.kr/data/profile/thumb-profile_216_190x190.png"}
                />
              </div>
              <div className="profile-txt" style={{ alignItems: 'center', justifyContent: 'center' ,listStyle: 'none'}}>
                <h3>💜{id}</h3>
                <span className="mr-2">U-na{engName}</span>
                <span className='group'>ITZY</span>
                <ul className='category' style={{listStyle: 'none', marginTop: '10px', fontWeight: 'bold'}}>
                  <li>연예인{category}</li>
                  <li>가수</li>
                  <li>생일{birthday}</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="right" style={{fontSize: '80px', color:'tomato' ,letterSpacing: '20px',fontWeight: 'bold'}}>
          {/* <span className='mr-2'>M</span>
          <span className='mr-2'>B</span>
          <span className='mr-2'>T</span>
          <span className='mr-2'>I</span> */}
          <span className='mr-2'>MBTI</span>
        </div>
        <div className="right">
          <Image 
            style={{borderRadius: '50%', width:'130px', height:'120px'}}
            src={"https://img.favpng.com/14/23/8/the-enneagram-enneagram-of-personality-personality-type-enneagram-3-paths-to-wholeness-png-favpng-cwnAWYKL7xmhrZeGR17Deaeii.jpg"}
          />
        </div>
     </Space>
    </>
    
  )
};

export default Profile;