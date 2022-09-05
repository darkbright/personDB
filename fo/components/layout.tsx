/**
 * https://ant.design/components/layout/
 * Header Sider 2 참고
 */

import Router from 'next/router';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const itemsSide = [
  {
    key: "sub1",
    icon: React.createElement(UserOutlined),
    label: 'Hot',
    children: [
      {key: '01', label: '신규등록'},
      {key: '02', label: '최근뜨는'},
      {key: '03', label: '인기있는'},
      {key: '04', label: '논란중인'},
    ]
  },
  {
    key: "sub2",
    icon: React.createElement(LaptopOutlined),
    label: '카테고리',
    children: [
      {key: '11', label: '가수'},
      {key: '12', label: '배우'},
      {key: '13', label: '방송인'},
      {key: '14', label: '희극인'},
      {key: '15', label: '예술인'},
      {key: '16', label: '스포츠선수'},
      {key: '17', label: '인플루언서'},
      {key: '18', label: '기업가'},
      {key: '19', label: '정치인'},
      {key: '20', label: '종교인'},
      {key: '21', label: '학자'},
      {key: '22', label: '역사인물'},
      {key: '23', label: '해외인물'},
      {key: '24', label: '캐릭터'},
    ]
  },
]

const App = ( {children} ) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={[]}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={itemsSide}
          onClick={({keyPath})=> {
            console.log(keyPath);
            Router.push("/list");
          }}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;