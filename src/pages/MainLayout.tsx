import { Fragment, useState } from "react"
import { NavBar } from "./components/NavBar"
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content } from "antd/lib/layout/layout";
import { ReactNode } from "react";
import "./MainLayoutStyle.css"
import { Header } from "./components/Header";


interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    return (
        <Fragment>
            <Layout>
                <Header setIsNavbarOpen={setIsNavbarOpen} isNavbarOpen={isNavbarOpen} />
                <Layout className="main-layout">
                    <Sider width={300} className={isNavbarOpen ? "main-sider" : 'main-sider main-sider-active'}>
                        <NavBar/>
                    </Sider>
                    <Layout >
                        <Content className={isNavbarOpen ? "main-content": 'main-content main-content-active'}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Fragment>
    )
}
