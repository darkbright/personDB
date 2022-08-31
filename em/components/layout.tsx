/**
 * https://ant.design/components/layout/
 * Header Sider 2 참고
 */

 import { LaptopOutlined, SettingTwoTone, ToolTwoTone,NotificationOutlined, UserOutlined } from '@ant-design/icons';
 import { Breadcrumb, Layout, Menu } from 'antd';
 import React from 'react';
 const { Header, Content, Sider } = Layout;
 const items1 = ['1', '2', '3'].map((key) => ({
   key,
   label: `nav ${key}`,
 }));
 const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined,ToolTwoTone,SettingTwoTone].map((icon, index) => {
   const key = String(index + 1);
   return {
     key: `sub${key}`,
     icon: React.createElement(icon),
     label: `subnav ${key}`,
     children: new Array(4).fill(null).map((_, j) => {
       const subKey = index * 4 + j + 1;
       return {
         key: subKey,
         label: `option${subKey}`,
       };
     }),
   };
 });
 
 const itemsSide = [
   {
     key: "sub1",
     icon: React.createElement(UserOutlined),
     label: '장비관리',
     children: [
       {key: '01', label: '장비관리'},
       {key: '02', label: '단말기관리'},
       {key: '03', label: 'QR코드관리'},
    //    {key: '04', label: '논란중인'},
     ]
   },
   {
     key: "sub2",
     icon: React.createElement(LaptopOutlined),
     label: '사용자관리',
     children: [
       {key: '11', label: '관리자'},
       {key: '12', label: '사용자관리'},
       {key: '13', label: '권한관리'},
     ]
   },
   {
    key: "sub3",
    icon: React.createElement(UserOutlined),
    label: '기관/제작업체관리',
    children: [
      {key: '01', label: '기관'},
      {key: '02', label: '제작업체관리'},
    ]
  },
  {
    key: "sub4",
    icon: React.createElement(ToolTwoTone),
    label: '사고관리',
    children: [
      {key: '01', label: '사고관리'},
    ]
  },
  {
    key: "sub5",
    icon: React.createElement(SettingTwoTone),
    label: '시스템관리',
    children: [
      {key: '01', label: '시스템관리'},
    ]
  },
 ]
 
 const App = ( {children} ) => (
   <Layout>
     <Header className="header">
       <div className="logo" />
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
     </Header>
     <Layout>
       <Sider width={200} className="site-layout-background">
         <Menu
           mode="inline"
           defaultSelectedKeys={['01']}
           defaultOpenKeys={['sub1']}
           style={{
             height: '100%',
             borderRight: 0,
           }}
           items={itemsSide}
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