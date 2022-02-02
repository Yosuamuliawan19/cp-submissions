import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  Nav,
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  List,
} from '@douyinfe/semi-ui';
import {
  IconUser,
  IconStar,
  IconSetting,
  IconSearch,
  IconMoon,
  IconVigoLogo,
  IconSemiLogo,
} from '@douyinfe/semi-icons';
import Card from '@douyinfe/semi-ui/lib/es/card';
import { Layout } from '@douyinfe/semi-ui';
interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const OnSwitchDarkMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      // Notify our site to update current mode
      // window.setMode('light');
    } else {
      body.setAttribute('theme-mode', 'dark');
      // Notify our site to update current mode
      // window.setMode('dark');
    }
  };
  const [isVisible, setVisible] = React.useState(false);
  const camera_movements = [
    'Static Shots',
    'Pan',
    'Whip Pan',
    'Tilt',
    'Push In',
    'Pull Out',
    'Zoom',
    'Crash Zoom',
    'Dolly Zoom',
    'Camera Roll',
    'Tracking',
    'Trucking',
    'Arc',
    'Boom',
    'Random Movement',
  ];

  const CustomHeader = () => {
    return (
      <Space
        spacing={'medium'}
        style={{
          padding: 12,
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          flex: 1,
          color: 'var(--semi-color-text-2)',
        }}
      >
        Camera movements
        <Input prefix={<IconSearch />} showClear></Input>
        <Button onClick={OnSwitchDarkMode}>
          <IconMoon />
        </Button>
        <Button>Create shelf</Button>
      </Space>
    );
  };
  const CustomContent = () => {
    return (
      <Row gutter={[24, 24]}>
        {camera_movements.map((data) => {
          return (
            <Col span={8} style={{ fontSize: 14 }}>
              <div
                style={{
                  marginBottom: 4,
                  color: 'var(--semi-color-text-1)',
                  fontWeight: 'bold',
                }}
              >
                {data}
              </div>
              <div
                style={{ marginBottom: 4, color: 'var(--semi-color-text-1)' }}
              >
                Static shots are commonly captured by locking the camera to a
                tripod in a fixed position.The result is a shot with zero camera
                movement
              </div>

              <div
                style={{ marginBottom: 12, color: 'var(--semi-color-text-1)' }}
              >
                It is great for capturing dialogs
              </div>

              <img
                style={{
                  borderRadius: 12,
                  // width: '80%',
                }}
                src={
                  'https://res.cloudinary.com/yosuam19/image/upload/v1605700961/space-destroyer_ikah7s.gif'
                }
              />
            </Col>
          );
        })}
      </Row>
    );
    return (
      <List
        dataSource={camera_movements}
        split={false}
        renderItem={(item) => (
          <List.Item
            main={
              <div>
                <p style={{ marginTop: 4, color: 'var(--semi-color-text-1)' }}>
                  {item}
                </p>
                <div
                  style={{ marginBottom: 4, color: 'var(--semi-color-text-1)' }}
                >
                  Static shots are commonly captured by locking the camera to a
                  tripod in a fixed position.The result is a shot with zero
                  camera movement
                </div>

                <div
                  style={{ marginBottom: 4, color: 'var(--semi-color-text-1)' }}
                >
                  It is great for capturing dialogs
                </div>

                <img
                  style={{
                    borderRadius: 12,
                  }}
                  src={
                    'https://res.cloudinary.com/yosuam19/image/upload/v1605700961/space-destroyer_ikah7s.gif'
                  }
                />
              </div>
            }
          />
        )}
      />
    );
  };
  return (
    <Layout
      style={{
        margin: 0,
        padding: 0,
        height: '100vh',
        backgroundColor: 'var(--semi-color-bg-1)',
      }}
    >
      {/* <Header></Header> */}
      <Modal
        header={null}
        visible={isVisible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <h3
          style={{
            textAlign: 'center',
            fontSize: 24,
            margin: 40,
            color: 'var(--semi-color-text-1)',
          }}
        >
          Semi Design New Features
        </h3>

        <List
          dataSource={camera_movements}
          split={false}
          renderItem={(item) => (
            <List.Item
              main={
                <div>
                  <p
                    style={{ marginTop: 4, color: 'var(--semi-color-text-1)' }}
                  >
                    {item}
                  </p>
                </div>
              }
            />
          )}
        />
      </Modal>
      <Layout style={{ height: '100vh' }}>
        {/* <Sider style={{ height: '100vh' }}>
          {' '}
          <Nav
            Body
            Style={{ height: '100vh' }}
            items={[
              { itemKey: 'user', text: 'Your pages', icon: <IconUser /> },
              { itemKey: 'union', text: 'Templates', icon: <IconStar /> },
              {
                text: 'Explore',
                icon: <IconSetting />,
                itemKey: 'job',
                items: ['Task Management', 'User Task Query'],
              },
            ]}
            onSelect={(data) => console.log('trigger onSelect: ', data)}
            onClick={(data) => console.log('trigger onClick: ', data)}
          />
        </Sider> */}
        <Content>
          <CustomHeader />
          <CustomContent />
        </Content>
      </Layout>
    </Layout>
  );
}

render(<App />, document.getElementById('root'));
