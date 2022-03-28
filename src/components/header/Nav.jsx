

import React, { useState } from "react";
import { Layout, Menu} from 'antd';

const { Header} = Layout;


const Nav = () => {
 
  return (
    <div>
  <Layout className="layoutsss">
    <Header>
      {/* <div className="logo" > sssss</div> */}
      <Menu theme="dark" mode="horizontal" className="tolu" >
        <Menu.Item key="1">MyTestApp</Menu.Item>
        
      </Menu>
    </Header>
    
  </Layout>
    </div>
  )
}

export default Nav