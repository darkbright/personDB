 import { ToolOutlined, UserSwitchOutlined, AuditOutlined, AlertOutlined, SettingOutlined } from '@ant-design/icons';
 import { Breadcrumb, Layout, Menu, Typography} from 'antd';
 import React from 'react';
 import Router from 'next/router';
 
 const { Header, Content, Sider } = Layout;
 const { Text } = Typography;
 const items2 = [ AuditOutlined, UserSwitchOutlined, ToolOutlined, SettingOutlined ].map((icon, index) => {
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
     key: "equipment",
     icon: React.createElement(ToolOutlined),
     label: '장비관리',
     children: [
       {key: 'equipment', label: '장비관리'},
       {key: 'terminal', label: '단말기관리'},
       {key: 'qrcode', label: 'QR코드관리'},
     ]
   },
   {
     key: "user",
     icon: React.createElement(UserSwitchOutlined),
     label: '사용자관리',
     children: [
       {key: 'admin', label: '관리자'},
       {key: 'user', label: '사용자관리'},
       {key: 'authority', label: '권한관리'},
     ]
   },
   {
    key: "organization",
    icon: React.createElement(AuditOutlined),
    label: '기관 / 제작업체관리',
    children: [
      {key: 'organization', label: '기관'},
      {key: 'vendor', label: '제작업체관리'},
    ]
  },
  {
    key: "accident",
    icon: React.createElement(AlertOutlined),
    label: '사고관리',
    children: [
      {key: 'accident', label: '사고관리'},
    ]
  },
  {
    key: "system",
    icon: React.createElement(SettingOutlined),
    label: '시스템관리',
    children: [
      {key: 'system', label: '시스템관리'},
    ]
  },
 ]
 
 const App = ( {children} ) => (
   <Layout>
     <Header className="header">
       {/* <div className="logo" /> */}
       <Text strong style={ {fontSize: '20px', color: 'white'} }> OO장비 관리 시스템</Text>
       {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
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