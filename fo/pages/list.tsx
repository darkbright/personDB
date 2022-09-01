import Link from 'next/link'
import Card from '../components/Card'
import { Space } from 'antd'

const App = () => {
  const cards = [
    {
      key: 1,
      title: "나일 호란", 
      description: "해외인물 / 가수", 
      url: "https://www.me-u.co.kr/data/profile/profile_4568.jpg"
    },  
    {
      key: 2,
      title: "유나", 
      description: "가수", 
      url: "https://www.me-u.co.kr/data/profile/thumb-profile_216_190x190.png"
    },  
    {
      key: 3,
      title: "손석구", 
      description: "배우", 
      url: "https://www.me-u.co.kr/data/profile/thumb-profile_3875_190x190.jpg"
    },  
    {
      key: 4,
      title: "김유연", 
      description: "가수", 
      url: "https://www.me-u.co.kr/data/profile/thumb-profile_4372_190x190.png"
    },  
  ];
  
  return (
    <>
      <Space wrap size='middle'>
      {cards.map((card, key) => 
        <Link key={key} href={`/profile/${encodeURIComponent(card.title)}`} passHref>
          <a>
              <Card { ...card} />
          </a>
        </Link>
      )}
      </Space>
    </>
  )
};

export default App;