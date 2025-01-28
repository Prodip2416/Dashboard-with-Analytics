import { Layout, Menu, Typography } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="80"
        style={{
          background: "#001529",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "16px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          MyApp
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Dashboard
          </Title>
          <div>
            <span style={{ marginRight: "16px" }}>Welcome, Admin</span>
          </div>
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: "16px",
            padding: "16px",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </Content>

        {/* Footer */}
        <Footer
          style={{
            textAlign: "center",
            background: "#001529",
            color: "white",
            padding: "16px 0",
          }}
        >
          MyApp ©2025 Created by Your Name
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
