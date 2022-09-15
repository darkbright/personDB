 import {PieChartOutlined, ToolOutlined,CloudServerOutlined, UserSwitchOutlined,ControlOutlined, AuditOutlined, ApartmentOutlined,ThunderboltOutlined,SettingOutlined } from '@ant-design/icons';
 import { Breadcrumb, Layout, Menu, Typography} from 'antd';
 import React from 'react';
 import Router from 'next/router';
 import Link from 'next/link';
 
 const { Header, Content, Sider } = Layout;
 const { Text } = Typography;

 const itemsSide = [

  {
     key: "equipment",
     icon: React.createElement(CloudServerOutlined),
     label: '암호장비 관리',
     children: [
       {  key: 'equipmentInfo',     
          label: '장비 정보',
          children:[{key: 'equipmentInfo', label: '장비/제작정보'}]
        },
       {key: 'status',        label: '상태 정보'},
       {key: 'tracking',          label: '장비 추적'},
       {key: 'holding',     label: '보유 현황'},
       {key: 'document', label: '수발 관리'},
       {key: 'maintenance',label: '장비 정비 이력'},
       {key: 'security',   label: '보안사고정보관리'},
    ]
  },
   {
    key: "document",
    icon: React.createElement(ControlOutlined),
    label: '암호자재 관리',
    children: [
      {key: 'certificate',    label: '증명서 관리'},
      {key: 'administration', label: '관리 기록부'},
      {key: 'inspection',     label: '점검 기록부'},
    ]
  },
  {
    key: "permit",
    icon: React.createElement(AuditOutlined),
    label: '승인 관리',
    children: [
      {key: 'approval',     label: '사용 승인'},
      {key: 'manufacture',  label: '제작 승인'},
      {key: 'disposal',     label: '파기 승인'},
    ]
  },
  {
    key: "development",
    icon: React.createElement(ThunderboltOutlined),
    label: '개발 관리',
    children: [
      { key: 'assignment',  
        label: '개발 과제',
        children:[
          {key: 'duration',    label: '개발과제/소요이력정보'},
          {key: 'requirement', label: '요구사항관리'},
        ]
      },
      {key: 'issues',  label: '이슈 관리'},
      {
        key: 'test',         
        label: '시험정보 관리',
        children:[
          {key: 'general',   label: '일반 시험'},
          {key: 'workplace', label: '현장 시험'},
        ]
      },
      {key: 'rating',  label: '평가정보 관리'},
      {key: 'verify',  label: '안정성 검증 관리'},
      {key: 'charge',  label: '개발담당 관리'},
    ]
  },
  {
    key: "production",
    icon: React.createElement(ToolOutlined),
    label: '제작업체 관리',
    children: [{key: 'production',   label: '제작업체 관리'},]
  },  
  {
    key: "organizations",
    icon: React.createElement(ApartmentOutlined),
    label: '유관기관 관리',
    children: [{key: 'organizations', label: '유관기관 관리'},]
  },  
  {
    key: "accident",
    icon: React.createElement(SettingOutlined),
    label: '시스템 관리',
    children: [
      {
        key: 'system',   
        label: '사용자 관리',
        children:[
          {key: 'manager', label: '관리자 관리'},
          {key: 'user', label: '사용자 관리'},
        ]
      },
      {
        key: 'terminal', 
        label: '단말기 관리',
        children:[
          {key: 'qr', label: 'QR코드 정보'},
          {key: 'workplace', label: '단말기 관리'},
        ]
      },
        
      {
        key: 'data',     
        label: '데이터 관리',
        children:[{key: 'upload', label: '데이터업로드/다운로드'},]
      },
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