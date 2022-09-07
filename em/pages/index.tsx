import { Space, Table, Tag, Input, Select, Divider, Col, Row, Card, Progress } from 'antd';
import React from 'react';
const columns = [
  {
    title: '번호',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '장비일련번호',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '장비명',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '승인상태',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 3 ? 'geekblue' : 'green';

          if (tag === '승인') {
            color = 'green';
          }

          if (tag === '미승인') {
            color = 'geekblue';
          }

          if (tag === '승인요청') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: '수리상태',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '수발상태',
    key: 'action',
    dataIndex: 'action',
  },
  {
    title: '증명서',
    dataIndex: 'cert',
    key: 'cert',
  },  
];
const data = [
  {
    key: '1',
    number: 1,
    name: 'NEU-14-0001',
    age: 'OO장비 A',
    address: '양호',
    tags: ['승인'],
    action: 'O',
    cert: 'O',
  },
  {
    key: '2',
    number: 2,
    name: 'NEU-14-0002',
    age: 'OO장비 B',
    address: '양호',
    tags: ['승인요청'],
    action: 'O',
    cert: 'O',
  },
  {
    key: '3',
    number: 3,
    name: 'NEU-14-0003',
    age: 'OO장비 C',
    address: '양호',
    tags: ['미승인'],
    action: 'O',
    cert: 'O',
  },
];

const { Option } = Select;

const style: React.CSSProperties = { outlineStyle: 'solid', outlineWidth: 0, padding: '2px 0' };

const App = () => (
  <>
    <Card title="Dashboard">
      <Space wrap size='middle'>      
        <Card title="부서별 보유대수" style={{ width: 200 }}>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </Card>
        <Card title="수리상태 현황" style={{ width: 200 }}>
          <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} type="circle" percent={75} />
        </Card>
        <Card title="승인상태 현황" style={{ width: 200 }}>
          <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} type="circle" percent={63} />
        </Card>
        <Card title="사용 현황" style={{ width: 200 }}>
          <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} type="circle" percent={73.2} />
        </Card>
        <Card title="제작 현황" style={{ width: 200 }}>
          <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} type="circle" percent={58.2} />
        </Card>
        <Card title="파기 현황" style={{ width: 200 }}>
          <Progress strokeColor={{'0%': '#108ee9','100%': '#87d068',}} type="circle" percent={54.2} />
        </Card>
      </Space>
    </Card>  
    <br/>
    <Row>
      <Col span={24}></Col>
    </Row>  
    <Input.Group compact style={style}>
      <Select defaultValue="일련번호">
        <Option value="일련번호">일련번호</Option>
        <Option value="승인상태">승인상태</Option>
      </Select>      
      <Input.Search allowClear style={{ width: '20%' }} defaultValue="" />
    </Input.Group>
    <br/>
    <Table columns={columns} dataSource={data} />
  </>
);

export default App;