import { Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

export default function MainHeader() {
  return (
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
  );
}
