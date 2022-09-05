import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Image, Space, Button } from 'antd';

const profileDefault = {
  "id":1,
  "korName":"유나",
  "engName":"Jang Wonyoung",
  "category":"가수",
  "imageUrl":"",
  "enneagram":"3w2",
  "mbti":"",
  "birthday":"2004-08-31"
}

const Profile = () => {
  const router = useRouter();
  const { query = {} } = router || {};
  const { id = 0 } = query || {};

  const [profile, setProfile] = useState(profileDefault);
  useEffect(() => {
    if (id) {
      (async () => {
        console.log(`id = ${id}`);
        const response = await fetch(`/api/profile/${id}`);
        const json = await response.json();
        setProfile(json);
        console.log(json);
      })();
    }
  }, [id]);
  
  return (
    <>
     <Space align="start" direction="horizontal" size="middle" style={{ display: 'flex' }}>
        <div className="container d-flex justifyContent space-around">
            <div className="center" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
              <div className="profile-img">
                <Image
                  style={{borderRadius: '50%'}}
                  src={profile.imageUrl}
                />
              </div>
              <div className="profile-txt" style={{ alignItems: 'center', justifyContent: 'center' ,listStyle: 'none'}}>
                <h3>💜{id}</h3>
                <span className="mr-2">U-na{profile.engName}</span>
                <span className='group'>ITZY</span>
                <ul className='category' style={{listStyle: 'none', marginTop: '10px', fontWeight: 'bold'}}>
                  <li>연예인{profile.category}</li>
                  <li>가수</li>
                  <li>생일{profile.birthday}</li>
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
            src={profile.imageUrl}
          />
        </div>
     </Space>
     </>
  )
};

export default Profile;