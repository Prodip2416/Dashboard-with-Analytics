import { Space, Table, Tag } from "antd";

const UserDataTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 120
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 80
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 150
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      width: 120,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
      width: 120
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Joe White",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "5",
      name: "Joe Red",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "6",
      name: "Jane Blue",
      age: 32,
      address: "Paris No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "7",
      name: "Jack Yellow",
      age: 42,
      address: "Tokyo No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "8",
      name: "Jill Green",
      age: 32,
      address: "New York No. 2 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "9",
      name: "James White",
      age: 32,
      address: "London No. 2 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "10",
      name: "Julia Black",
      age: 32,
      address: "Sydney No. 2 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "11",
      name: "Jasmine Red",
      age: 32,
      address: "Paris No. 2 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "12",
      name: "Jeff Blue",
      age: 42,
      address: "Tokyo No. 2 Lake Park",
      tags: ["loser"],
    },
    {
      key: "13",
      name: "Jennifer Yellow",
      age: 32,
      address: "New York No. 3 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "14",
      name: "Jerry Purple",
      age: 32,
      address: "London No. 3 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "15",
      name: "Jessica Pink",
      age: 32,
      address: "Sydney No. 3 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "16",
      name: "Jude Gray",
      age: 32,
      address: "Paris No. 3 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "17",
      name: "Jocelyn Orange",
      age: 42,
      address: "Tokyo No. 3 Lake Park",
      tags: ["loser"],
    },
    {
      key: "18",
      name: "Joel Teal",
      age: 32,
      address: "New York No. 4 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "19",
      name: "Joyce Silver",
      age: 32,
      address: "London No. 4 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "20",
      name: "Jared Gold",
      age: 32,
      address: "Sydney No. 4 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "21",
      name: "Jade Maroon",
      age: 32,
      address: "Paris No. 4 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "22",
      name: "Jaxon Lime",
      age: 42,
      address: "Tokyo No. 4 Lake Park",
      tags: ["loser"],
    },
    {
      key: "23",
      name: "Janet Navy",
      age: 32,
      address: "New York No. 5 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "24",
      name: "Jasper Aqua",
      age: 32,
      address: "London No. 5 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "25",
      name: "Jenna Olive",
      age: 32,
      address: "Sydney No. 5 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "26",
      name: "Jett Cyan",
      age: 32,
      address: "Paris No. 5 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "27",
      name: "Joan Magenta",
      age: 42,
      address: "Tokyo No. 5 Lake Park",
      tags: ["loser"],
    },
    {
      key: "28",
      name: "Jodi Indigo",
      age: 32,
      address: "New York No. 6 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "29",
      name: "Jolene Violet",
      age: 32,
      address: "London No. 6 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "30",
      name: "Jonah Ruby",
      age: 32,
      address: "Sydney No. 6 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "31",
      name: "Josie Emerald",
      age: 32,
      address: "Paris No. 6 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "32",
      name: "Juan Sapphire",
      age: 42,
      address: "Tokyo No. 6 Lake Park",
      tags: ["loser"],
    },
    {
      key: "33",
      name: "Judith Amber",
      age: 32,
      address: "New York No. 7 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "34",
      name: "Jules Bronze",
      age: 32,
      address: "London No. 7 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "35",
      name: "June Crimson",
      age: 32,
      address: "Sydney No. 7 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "36",
      name: "Juno Fuchsia",
      age: 32,
      address: "Paris No. 7 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "37",
      name: "Justice Honeydew",
      age: 42,
      address: "Tokyo No. 7 Lake Park",
      tags: ["loser"],
    },
    {
      key: "38",
      name: "Justin Ivory",
      age: 32,
      address: "New York No. 8 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "39",
      name: "Kai Khaki",
      age: 32,
      address: "London No. 8 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "40",
      name: "Karen Lavender",
      age: 32,
      address: "Sydney No. 8 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "41",
      name: "Karl Maroon",
      age: 32,
      address: "Paris No. 8 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "42",
      name: "Kate Mint",
      age: 42,
      address: "Tokyo No. 8 Lake Park",
      tags: ["loser"],
    },
    {
      key: "43",
      name: "Kathy Navy",
      age: 32,
      address: "New York No. 9 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "44",
      name: "Katie Olive",
      age: 32,
      address: "London No. 9 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "45",
      name: "Kayla Peru",
      age: 32,
      address: "Sydney No. 9 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "46",
      name: "Keith Plum",
      age: 32,
      address: "Paris No. 9 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "47",
      name: "Kelly Salmon",
      age: 42,
      address: "Tokyo No. 9 Lake Park",
      tags: ["loser"],
    },
    {
      key: "48",
      name: "Ken Tan",
      age: 32,
      address: "New York No. 10 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "49",
      name: "Kevin Tomato",
      age: 32,
      address: "London No. 10 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "50",
      name: "Kim Turquoise",
      age: 32,
      address: "Sydney No. 10 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl">Users</p>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 6,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} items`,
        }}
        scroll={{x:800}}
      />
    </div>
  );
};

export default UserDataTable;
