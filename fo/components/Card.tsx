import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;


const App = ( xxx: {title : string; description: string; url: string} ) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={xxx.url} />}
  >
    <Meta title={xxx.title} description={xxx.description} />
  </Card>
);

export default App;