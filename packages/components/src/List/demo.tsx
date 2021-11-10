import React, { useState } from 'react';
import { List } from 'xun-components';

const img =
  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

const users = [
  {
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
  },
];

const Demo = () => {
  const [visible, setVisible] = useState(false);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <List.Item
          icon={
            <img
              alt=""
              src={user.avatar}
              style={{ width: 40, height: 40, borderRadius: '20px' }}
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      );
    });
  };

  return (
    <div className="demo-page">
      <header>
        <h3 className="demo-page-title">列表</h3>
      </header>
      <div className="demo-block">
        <div className="demo-title">基本</div>
        <div className="demo-body white">
          <List>
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item clickable onClick={() => alert('click')}>
              3
            </List.Item>
          </List>
        </div>
      </div>

      <div className="demo-block">
        <div className="demo-title">标题/图标/内容</div>
        <div className="demo-body white">
          <List>
            <List.Item title="标题1">1</List.Item>
            <List.Item
              title="标题2"
              icon={<img alt="" src={img} style={{ width: 30, height: 30 }} />}
            >
              2
            </List.Item>
            <List.Item clickable onClick={() => alert('click')}>
              3
            </List.Item>
          </List>
        </div>
      </div>
      <div className="demo-block">
        <div className="demo-title">用户列表</div>
        <div className="demo-body white">
          <List>{renderUsers()}</List>
        </div>
      </div>
    </div>
  );
};

export default Demo;
