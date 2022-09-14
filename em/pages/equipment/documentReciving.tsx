import { Badge, Descriptions } from 'antd';
import React from 'react';

const App = () => (
  <>
    <Descriptions title="장비일반정보" bordered column={1}>
      <Descriptions.Item label="장비일련번호" labelStyle={{ width: 200 }}>
        <Badge status="processing" text="NEU-14-0001" />
      </Descriptions.Item>
      <Descriptions.Item label="장비명">
        OO장비 A
      </Descriptions.Item>
      <Descriptions.Item label="키워드/해쉬태그">
        #키워드 #해시태그
      </Descriptions.Item>
    </Descriptions>
    <br/><br/>
    <Descriptions title="사용승인관리" bordered column={2}>
      <Descriptions.Item label="형식승인명" labelStyle={{ width: 200 }}>
        &nbsp;
      </Descriptions.Item>
      <Descriptions.Item label="암호키 관리방법" labelStyle={{ width: 200 }}>
        &nbsp;
      </Descriptions.Item>
      <Descriptions.Item label="통상명칭">
      </Descriptions.Item>
      <Descriptions.Item label="프로그램 관리방법">
      </Descriptions.Item>
    </Descriptions>
  </>
);

export default App;