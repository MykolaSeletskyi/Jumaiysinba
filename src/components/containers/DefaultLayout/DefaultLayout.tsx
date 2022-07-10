import { Outlet } from "react-router";
import HeaderMenu from "./Header";

import { Layout, Breadcrumb } from 'antd';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReCaptcha from "../../common/ReCaptcha";

const { Content, Footer } = Layout;

const DefaultLayout = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        <Layout className="layout">
            <HeaderMenu />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {
                        !isAuth ? <ReCaptcha />
                            : <></>
                    }
                    <Outlet />
                </div>
            </Content>
            <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default DefaultLayout;