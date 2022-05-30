import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Layout, Menu } from 'antd';
import style from "../styles/homepage.module.css"
import { Link,useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { Button } from 'antd'
import { Tabs } from 'antd';


const HomePage = () => {

    const { Header, Content, Footer, Sider } = Layout;
    const { Option } = Select;
    const { TabPane } = Tabs;

  return (
    <Layout style={{height:"100vh",padding:"10px"}}>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
        style={{background:"#110C35",borderRadius:"10px"}}
        >
        <div className="logo" />
        </Sider>
        <Layout>
        <Header
            className="site-layout-sub-header-background"
            style={{
            padding: 0,
            background:"#E5E5E5",
            height:"auto"
            }}
        >
            <div className={style['header-con']}>
                <div className={style['navigation-con']}>
                    <img src='/assets/Vector (1).svg' alt='navigation icon'/>
                    <span className={style['steps']}><Link to="/">Home</Link><img src='/assets/Vector.svg ' alt='next icon'/><Link to="/">Productivity</Link><img src='/assets/Vector.svg' alt='next icon'/><Link to="/">Notes</Link></span>
                </div>
                <div className={style['profile-con']}>
                    <img src='/assets/Vector (2).svg' alt='notification icon'/>
                    <Avatar size={44} style={{marginLeft:"20px"}} icon={<UserOutlined />} />
                </div>
            </div>

        </Header>
        <Content
            style={{
            margin: '24px 16px 0',
            }}
        >
            <div className={style['sec-con']} >
                <div className={style['first-inner-con']}>
                    <h2 style={{fontWeight:"bold"}}>Notes</h2>
                    <div>
                        <Select defaultValue="Last added" style={{ width: 120 }} >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button style={{background:'#5141A4',color:"white",marginLeft:"10px"}}>Add New Note</Button>
                    </div>
                </div>
                <div className={style['inner-con']}>
                   <p style={{borderBottom:"3px solid #5141A4",paddingBottom:"10px",color:"#5141A4",fontWeight:"bold"}}>All Notes</p>
                   <div>
                    <img src='/assets/rounded1.svg' alt='notification icon'/>
                    <img src='/assets/rounded.svg' alt='notification icon'/>
                   </div>
                </div>
            </div>
            <div className={style['main-con']}>
                <div className={style['no-notes-con']}>
                    <img src='/assets/undraw_no_data_re_kwbl 1.svg' alt='notification icon'/>
                    <p>You haven’t saved any note yet. Add your first note and never lose important information, it’s quite easy.</p>
                    <Button size='large' style={{background:'#5141A4',color:"white",marginLeft:"10px",borderRadius:"5px"}}>Create my first note</Button>
                </div>
            </div>
        </Content>
        </Layout>
    </Layout>
  )
}

export default HomePage