import { Layout, Menu } from "antd";
const { Header } = Layout;

export default function MainHeader() {
  const items = new Array(3).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "end",
      }}
    >
      <div className="demo-logo">Logooooooo</div>
      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </div>
    </Header>
  );
}
