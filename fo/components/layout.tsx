/**
 * https://ant.design/components/layout/
 * Header Sider 2 참고
 */

import Router from 'next/router';
import { useEffect, useState } from "react";
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
    key: "main",
    icon: React.createElement(UserOutlined),
    label: '메인',
    children: [
      {key: 'new', label: '신규등록'},
      {key: 'latest', label: '최근뜨는'},
      {key: 'popular', label: '인기있는'},
      {key: 'controversial', label: '논란중인'},
    ]
  },
  {
    key: "category",
    icon: React.createElement(LaptopOutlined),
    label: '카테고리',
    children: [
      {key: 'singer', label: '가수'},
      {key: 'actor', label: '배우'},
      {key: 'broadcaster', label: '방송인'},
      {key: 'comedian', label: '희극인'},
      {key: 'artist', label: '예술인'},
      {key: 'sports', label: '스포츠선수'},
      {key: 'influencer', label: '인플루언서'},
      {key: 'entrepreneur', label: '기업가'},
      {key: 'politician', label: '정치인'},
      {key: 'religious', label: '종교인'},
      {key: 'scholar', label: '학자'},
      {key: 'historical', label: '역사인물'},
      {key: '23', label: '해외인물'},
      {key: '24', label: '캐릭터'},
    ]
  },
]

const menuDefault = {
  depth1: "Menu1",
  depth2: "Menu2"
}

const App = ( {children} ) => {
  const [menus, setMenus] = useState(menuDefault);
  useEffect(() => {
    const menu = {
      depth1: "Hot",
      depth2: "신규등록"
    };
    setMenus(menu);
  }, []);

  return (
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
          defaultOpenKeys={['main']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={itemsSide}
          onClick={(p)=> {
            console.log(p);
            if (p.keyPath[1] === "category") {
              Router.push(`/category/${p.keyPath[0]}`);
            } else {
              Router.push(`/profile/${p.keyPath[0]}`);
            }
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
          <Breadcrumb.Item>{menus.depth1}</Breadcrumb.Item>
          <Breadcrumb.Item>{menus.depth2}</Breadcrumb.Item>
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
  )
};

export default App;