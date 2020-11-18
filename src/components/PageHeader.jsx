﻿import React from "react";
import { Layout, Menu } from 'antd';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";




const {Header} = Layout;

class PageHeader extends React.Component {
    render() {
        return (
            <Header style={{ color: "black", backgroundColor: "lightblue", borderStyle: "solid", borderWidth: "1px" }}>
                
                    
                    
                    <LoginButton />
                    <LogoutButton />
                    
                
            </Header>
        );
    }
}

export default PageHeader