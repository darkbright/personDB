 import { ToolOutlined,CloudServerOutlined, UserSwitchOutlined,ControlOutlined, AuditOutlined, ApartmentOutlined,ThunderboltOutlined,SettingOutlined } from '@ant-design/icons';
 import { Breadcrumb, Layout, Menu, Typography} from 'antd';
 import React from 'react';
 import Router from 'next/router';
 import Link from 'next/link';
 
 const { Header, Content, Sider } = Layout;
 const { Text } = Typography;

 const itemsSide = [
  {
    key: "user",
    icon: React.createElement(UserSwitchOutlined),
    label: '사용자관리',
    children: [
      {key: 'admin',      label: '관리자 관리'},
      {key: 'user',       label: '사용자관리'},
      {key: 'authority',  label: '권한관리'},
    ]
  },
  {
     key: "equipment",
     icon: React.createElement(CloudServerOutlined),
     label: '암호장비 관리',
     children: [
       {key: 'info',        label: '장비 정보'},
       {key: 'status',      label: '상태 정보'},
       {key: 'tracking',    label: '장비 추적'},
       {key: 'possession',  label: '보유 현황'},
       {key: 'user',        label: '수발 관리'},
       {key: 'produce',     label: '장비 정비 이력'},
       {key: 'certificate', label: '보안사고정보관리'},
    ]
  },
   {
    key: "terminal",
    icon: React.createElement(ControlOutlined),
    label: '암호자재 관리',
    children: [
      {key: 'info',         label: '증명서 관리'},
      {key: 'distribution', label: '관리 기록부'},
    ]
  },
  {
    key: "qrcode",
    icon: React.createElement(AuditOutlined),
    label: '승인 관리',
    children: [
      {key: 'info',     label: '사용 승인'},
      {key: 'approval', label: '제작 승인'},
      {key: 'approval', label: '파기 승인'},
    ]
  },
  {
    key: "vendor",
    icon: React.createElement(ThunderboltOutlined),
    label: '개발 관리',
    children: [
      {key: 'appoint',  label: '개발 과제'},
      {key: 'status',   label: '이슈 관리'},
      {key: 'analysis', label: '시험정보 관리'},
      {key: 'security', label: '평가정보 관리'},
    ]
  },
  {
    key: "develop",
    icon: React.createElement(ToolOutlined),
    label: '제작업체 관리',
    children: [
      {key: 'need',         label: '제작업체 관리'},
    ]
  },  
  {
    key: "organiztion",
    icon: React.createElement(ApartmentOutlined),
    label: '유관기관 관리',
    children: [
      {key: 'status',   label: '유관기관 관리'},

    ]
  },  
  {
    key: "accident",
    icon: React.createElement(SettingOutlined),
    label: '시스템 관리',
    children: [
      {key: 'info', label: '사용자 관리'},
      {key: 'info', label: '단말기 관리'},
      {key: 'info', label: '데이터 관리'},
    ]
  },
 ]
 
 const App = ( {children} ) => (
   <Layout>
     <Header className="header">
       {/* <div className="logo" /> */}
       <Link href="/"><a><Text strong style={ {fontSize: '20px', color: 'white'} }>OO장비 관리 시스템</Text></a></Link>
       {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
     </Header>
     <Layout>
       <Sider width={200} className="site-layout-background">
         <Menu
           mode="inline"
           defaultSelectedKeys={['01']}
           defaultOpenKeys={[]}
           style={{
             height: '100%',
             borderRight: 0,
           }}
           items={itemsSide}
           onClick={({keyPath})=>{
            const pathname = '/' + keyPath[1] + '/' + keyPath[0];
            Router.push({pathname})
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
           <Breadcrumb.Item href="..">장비관리</Breadcrumb.Item>
           <Breadcrumb.Item href="./table">Table</Breadcrumb.Item>
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