import { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Card from '../components/Card'
import { Space } from 'antd'

const cardsDefault = [
  {"id":1,"korName":"장원영","engName":"Jang Wonyoung","category":"가수","imageUrl":"https://www.me-u.co.kr/data/profile/thumb-profile_1809_190x190.jpg","enneagram":"3w2","mbti":"ESFP","birthday":"2004-08-31"},
  {"id":2,"korName":"박은빈","engName":"Park Eunbin","category":"배우","imageUrl":"https://www.me-u.co.kr/data/profile/thumb-profile_1190_190x190.png","enneagram":"9w1","mbti":"INFP","birthday":"1992-09-04"},
  {"id":3,"korName":"유나","engName":"YUNA","category":"가수","imageUrl":"https://www.me-u.co.kr/data/profile/thumb-profile_216_190x190.png","enneagram":"7w6","mbti":"ENFJ","birthday":"2003-12-09"},
  {"id":4,"korName":"손석구","engName":"Park Eunbin","category":"배우","imageUrl":"https://www.me-u.co.kr/data/profile/thumb-profile_216_190x190.png","enneagram":"8w9","mbti":"ISFP","birthday":"1983-02-07"}
];

const App = ({ data }) => {
  return (
    <>
      <Space wrap size='middle'>
      {data.map((card, key) => 
        <Link key={key} href={`/profile/${card.id}`} passHref>
          <a>
              <Card { ...card} />
          </a>
        </Link>
      )}
      </Space>
    </>
  )
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://darkbright.gabia.io/api/profile`)
  const data = await res.json()

  return { props: { data }};
}

export default App;