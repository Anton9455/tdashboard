import { Layout } from "antd";
import "antd/dist/antd.css";
import "../scss/layout.scss"
import ContentBoard from "./ContentBoard";
import SliderButtons from './SiderButtons'
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <Layout className="kdash-app-layout">
      <Sider className="kdash-app-layout__sider"> <SliderButtons/></Sider>
      <Layout className="kdash-app-layout__layout">
        <Header className="kdash-app-layout__header">Header</Header>
        <Content className="kdash-app-layout__content"> <ContentBoard/> </Content>
        <Footer className="kdash-app-layout__footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};
