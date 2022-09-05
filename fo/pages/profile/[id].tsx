import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Image, Space, Progress } from 'antd';

const profileDefault = {
  "id":1,
  "korName":"장원영",
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
     <Space 
      align="start" 
      direction="horizontal"  
      style={{ 
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        padding:'3%', 
        border:'3px dashed #f3caf9', 
        borderRadius:'25px' 
      }}
     >
        <div className="container d-flex">
            <div className="center" 
              style={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center'}}
              >
              <div className="profile-img">
                <Image
                  style={{borderRadius: '50%', border:'6px solid navy'}}
                  src={profile.imageUrl}
                />
              </div>
              <div 
                className="profile-txt" 
                style={{ 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold', 
                  listStyle: 'none',
                  color:'#240666'}}
              >
                <p className='korName'>{profile.korName}</p>
                <p className="engName">{profile.engName}</p>
                <ul className='category' 
                  style={{
                    listStyle: 'none', 
                    marginTop: '10px', 
                    fontWeight: 'bold', 
                    paddingLeft:'0px'
                  }}
                >
                  <li>{profile.category}</li>
                  <li></li>
                  <li>생일 {profile.birthday}</li>
                </ul>
              </div>
            </div>
        </div>
        <div 
          className="right" 
          style={{
            fontSize: '20px',
            color: 'navy',
            fontWeight: 'bold'
          }}
        > MBTI__
          <span 
            className='mbtiType'
            style={{
              fontSize: '80px', 
              color:'tomato',
              letterSpacing: '20px',
              fontWeight: 'bold',
              fontFamily:'serif',
            }}
          >{profile.mbti}</span>
          <p
            className='mbtiType' 
            style={{
              fontSize: '13px', 
              color:'navy',
              fontWeight: 'bold',
              fontFamily:'serif',
            }}
          >
            중재자(INFP)는 언뜻 보기에 조용하고 <br/>자신을 내세우지 않는 것처럼 보이지만, <br/>
            사실은 에너지와 열정이 넘치는 마음을 지닌 성격입니다. <br/>
            이들은 창의적이고 상상력이 뛰어나며 몽상을 즐기는 성격으로, <br/>
            머릿속에서 수많은 이야기를 만들어 내곤 합니다.  <br/>
            또한 음악과 예술과 자연에 대한 감수성이 뛰어나며 <br/>
            다른 사람의 감정을 빠르게 알아차리곤 합니다.
          </p>
        </div>
        <div 
          className="right"
          style={{
            fontSize: '20px',
            color: 'navy',
            fontWeight: 'bold'
          }}
        > ENNEARGRAM_
          <span
            style={{
              fontSize: '80px', 
              color:'#ffc700',
              letterSpacing: '20px',
              fontWeight: 'bold',
              fontFamily:'serif',
            }}
          >
            {profile.enneagram}
          </span>
          <p
            className='mbtiType' 
            style={{
              fontSize: '13px', 
              color:'navy',
              fontWeight: 'bold',
              fontFamily:'serif',
            }}
          >
            일상적, 도덕적인 행동을 추구함 <br/>
            낙관적이며 질서정연한 성격 <br/>
            차분하고 겸손해 보이지만 완벽 주의적 기질 <br/>
            내면의 평화 추구 <br/>
            오랜 신념과 전통을 버리기는 어려움 <br/>
          </p>
        </div>
     </Space>
     </>
  )
};

export default Profile;