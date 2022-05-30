import React, { useState } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Layout, Menu } from 'antd';
import style from "../styles/homepage.module.css"
import { Link,useNavigate } from "react-router-dom";
import { Select } from 'antd';
import { Button } from 'antd'
import { Tabs } from 'antd';
import { Drawer, Form, Col, Row, Input, DatePicker, Space } from 'antd';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


const HomePage = () => {

    const { Header, Content, Footer, Sider } = Layout;
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { Dragger } = Upload

    const [visible, setVisible] = useState(false);

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      
        onChange(info) {
          const { status } = info.file;
      
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
      
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };
      
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

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
            <Drawer
                title="New Note"
                width={350}
                onClose={onClose}
                visible={visible}
                bodyStyle={{
                paddingBottom: 80,
                fontFamily:"'Plus Jakarta Sans', sans-serif"
                }}
            >
                <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={24}>
                    <Form.Item
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter user name',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="Title" />
                    </Form.Item>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                    <Form.Item
                        name="owner"
                        rules={[
                        {
                            required: true,
                            message: 'Please select an owner',
                        },
                        ]}
                    >
                        <Select size="large" placeholder="Please select an owner">
                        <Option value="xiao">Xiaoxiao Fu</Option>
                        <Option value="mao">Maomao Zhou</Option>
                        </Select>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                    <Form.Item
                        name="approver"
                        rules={[
                        {
                            required: true,
                            message: 'Please choose the approver',
                        },
                        ]}
                    >
                        <Select size="large" placeholder="Category">
                        <Option value="jack">Jack Ma</Option>
                        <Option value="tom">Tom Liu</Option>
                        </Select>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginBottom:"30px"}}>
                    <Col span={24}>
                    <Dragger {...props} >
                        <p className="ant-upload-drag-icon">
                            <img src='/assets/cloud-upload.svg' alt='notification icon'/>
                        </p>
                        <p className="ant-upload-text">Drag and Drop to Upload</p>
                        <p className="ant-upload-hint">Or click to browse file</p>
                    </Dragger>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                    <Form.Item
                        name="description"
                        rules={[
                        {
                            required: true,
                            message: 'please enter url description',
                        },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="Add your note here" />
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Button size='large' style={{background:'white',color:"#5141A4",width:"100%"}}>Cancel</Button>
                    </Col>
                    <Col span={12}>
                        <Button size='large' style={{background:'#5141A4',color:"white",width:"100%"}}>Create note</Button>
                    </Col>
                </Row>
                </Form>
            </Drawer>
            <div className={style['sec-con']} >
                <div className={style['first-inner-con']}>
                    <h2 style={{fontWeight:"bold"}}>Notes</h2>
                    <div>
                        <Select defaultValue="Last added" style={{ width: 120 }} >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button onClick={showDrawer} style={{background:'#5141A4',color:"white",marginLeft:"10px"}}>Add New Note</Button>
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
                    <Button onClick={showDrawer} size='large' style={{background:'#5141A4',color:"white",marginLeft:"10px",borderRadius:"5px"}}>Create my first note</Button>
                </div>
            </div>
        </Content>
        </Layout>
    </Layout>
  )
}

export default HomePage