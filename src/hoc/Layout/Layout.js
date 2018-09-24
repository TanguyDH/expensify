import React from 'react';
import Header from '../../component/Navigation/Header/Header';
 
const Layout = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;