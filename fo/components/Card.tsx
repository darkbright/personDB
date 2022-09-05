import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;


const App = ( xxx: {korName : string; category: string; imageUrl: string} ) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={xxx.imageUrl} />}
  >
    <Meta title={xxx.korName} description={xxx.category} />
  </Card>
);

export default App;