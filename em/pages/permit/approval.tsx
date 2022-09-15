import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="준비중인 페이지 입니다."
    extra={<Button type="primary">Next</Button>}
  />
);

export default App;