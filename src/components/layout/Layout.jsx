import { Layout } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "../../scss/layout.scss";
import ContentBoard from "./content/ContentBoard";
import SiderButtons from "./side/SiderButtons";
const { Header, Footer, Sider, Content } = Layout;

export default () => {

  const [selectedId, setSelected] = useState();

  return (
    <Layout className="kdash-app-layout">
      <Sider className="kdash-app-layout__sider">
        <SiderButtons selectedId={selectedId}/>
      </Sider>
      <Layout className="kdash-app-layout__layout">
        <Header className="kdash-app-layout__header">Header</Header>
        <Content className="kdash-app-layout__content">
          <ContentBoard selectedId={selectedId} setSelected={setSelected}/>
        </Content>
        <Footer className="kdash-app-layout__footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};
