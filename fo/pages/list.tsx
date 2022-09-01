import Card from '../components/Card'

const App = () => {
  const cards = [
    {
      title: "나일 호란", 
      description: "해외인물 / 가수", 
      url: "https://www.me-u.co.kr/data/profile/profile_4568.jpg"
    },  
    {
      title: "유나", 
      description: "가수", 
      url: "https://www.me-u.co.kr/data/profile/thumb-profile_216_190x190.png"
    },  
    {
      title: "손석구", 
      description: "배우", 
      url: "https://www.me-u.co.kr/data/profile/thumb-profile_3875_190x190.jpg"
    },  
  ];
  
  
  return (
    <>
      <div>
        <Card { ...cards[0] } />
        <Card { ...cards[1] } />
        <Card { ...cards[2] } />
      </div>
    </>
  )
};

export default App;