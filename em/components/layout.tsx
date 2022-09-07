 import { ToolOutlined, UserSwitchOutlined, AuditOutlined, AlertOutlined, SettingOutlined } from '@ant-design/icons';
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
     icon: React.createElement(ToolOutlined),
     label: '장비관리',
     children: [
       {key: 'info',        label: 'OO장비 정보'},
       {key: 'user',        label: '사용자 승인정보'},
       {key: 'produce',     label: '제작 승인정보'},
       {key: 'status',      label: 'OO장비 상태정보'},
       {key: 'possession',  label: '보유현황 정보'},
       {key: 'tracking',    label: 'OO장비 추적'},
       {key: 'certificate', label: '증명서 정보'},
       {key: 'management',  label: '전자 관리기록부'},
       {key: 'proof',       label: '전자증명서'},
       {key: 'approval',    label: '승인업무 처리'},
     ]
   },
   {
    key: "terminal",
    icon: React.createElement(AuditOutlined),
    label: '단말기 관리',
    children: [
      {key: 'info',         label: '단말기 정보'},
      {key: 'distribution', label: '단말기 배부'},
    ]
  },
  {
    key: "qrcode",
    icon: React.createElement(AuditOutlined),
    label: 'QR코드 관리',
    children: [
      {key: 'info',     label: 'QR코드 정보'},
      {key: 'approval', label: 'QR코드 승인'},
      {key: 'approval', label: 'QR코드 인쇄'},
    ]
  },
  {
    key: "vendor",
    icon: React.createElement(AuditOutlined),
    label: '제작업체 관리',
    children: [
      {key: 'appoint',  label: '제작업체 지정'},
      {key: 'status',   label: '제작업체 현황'},
      {key: 'analysis', label: '제작업체 분석'},
      {key: 'security', label: '제작업체 보안측정'},
    ]
  },
  {
    key: "develop",
    icon: React.createElement(ToolOutlined),
    label: 'OO장비 개발정보 관리',
    children: [
      {key: 'need',         label: '개발과제 소요관리'},
      {key: 'issue',        label: '개발과제 이슈관리'},
      {key: 'request',      label: '개발과제 요구사항 관리'},
      {key: 'charge',       label: '개발담당 관리'},
      {key: 'test',         label: '시험정보 관리'},
      {key: 'evaluation',   label: '평가정보 관리'},
      {key: 'verification', label: '검정정보 관리'},
    ]
  },  
  {
    key: "organiztion",
    icon: React.createElement(AuditOutlined),
    label: '유관기관 관리',
    children: [
      {key: 'status',   label: '유관기관 현황'},
      {key: 'council',  label: '협의회 관리'},
    ]
  },  
  {
    key: "accident",
    icon: React.createElement(AlertOutlined),
    label: '사고관리',
    children: [
      {key: 'info', label: '사고정보 관리'},
    ]
  },
  {
    key: "system",
    icon: React.createElement(SettingOutlined),
    label: '시스템관리',
    children: [
      {key: 'upload',   label: '데이터 업로드'},
      {key: 'download', label: '데이터 다운로드'},
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