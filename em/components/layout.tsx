 import { ToolOutlined,CloudServerOutlined,ControlOutlined, AuditOutlined, ApartmentOutlined,ThunderboltOutlined,SettingOutlined } from '@ant-design/icons';
 import { Breadcrumb, Layout, Menu, Typography} from 'antd';
 import React from 'react';
 import Router, { useRouter } from 'next/router';
 import Link from 'next/link';
 
 const { Header, Content, Sider } = Layout;
 const { Text } = Typography;

 const itemsSide = [
  {
     key: "equipments",
     icon: React.createElement(CloudServerOutlined),
     label: '암호장비 관리',
     children: [
       {  key: 'equipment',     
          label: '장비 정보',
          children:[{key: 'info', label: '장비/제작정보'}]
        },
       {key: 'status',      label: '상태 정보'},
       {key: 'tracking',    label: '장비 추적'},
       {key: 'holding',     label: '보유 현황'},
       {key: 'document',    label: '수발 관리'},
       {key: 'maintenance', label: '장비 정비 이력'},
       {key: 'security',    label: '보안사고정보관리'},
    ]
  },
  {
    key: "documents",
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
    key: "productions",
    icon: React.createElement(ToolOutlined),
    label: '제작업체 관리',
    children: [{key: 'production',   label: '제작업체 관리'},]
  },  
  {
    key: "organizations",
    icon: React.createElement(ApartmentOutlined),
    label: '유관기관 관리',
    children: [{key: 'organization', label: '유관기관 관리'},]
  },  
  {
    key: "system",
    icon: React.createElement(SettingOutlined),
    label: '시스템 관리',
    children: [
      {
        key: 'admin',   
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
          {key: 'object', label: '단말기 관리'},
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
 
 const App = ( {children} ) => {

  // Breadcrumb 구현을 위해 URL에 따른 메뉴 데이터 구하기
  const router = useRouter();
  const paths = router.pathname.split('/');

  // 1 Depth 메뉴 정보
  const menu1 = itemsSide.find((element) => element.key === paths[1]);
  let menu2 = menu1;

  // 2 Depth 메뉴 정보
  if (menu1?.children)
    menu2 = menu1.children.find((element) => element.key === paths[2]);
  else 
    menu2 = {};

  // 3 Depth 메뉴 정보
  let menu3 = menu2;
  if (menu2?.children)
    menu3 = menu2.children.find((element) => element.key === paths[3]);
  else 
    menu3 = {};

  return (
   <Layout>
     <Header className="header">   
       <Link href="/"><a><Text strong style={ {fontSize: '20px', color: 'white'} }>OO장비 관리 시스템</Text></a></Link>
     </Header>
     <Layout>
       <Sider width={240} className="site-layout-background">
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
            let pathname = '';
            keyPath.reverse();
            keyPath.map((path) => pathname += '/' + path);
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
           <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
           <Breadcrumb.Item href="..">{menu1?.label}</Breadcrumb.Item>
           <Breadcrumb.Item href={menu2?.key}>{menu2?.label}</Breadcrumb.Item>
           <Breadcrumb.Item href={menu3?.key}>{menu3?.label}</Breadcrumb.Item>
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