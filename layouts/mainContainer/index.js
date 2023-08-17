import React from 'react';
import {Header,Footer} from "@/layouts";
import {useRouter} from "next/router";

export const MainContainer = ({children}) => {

    const router = useRouter();
    if (router.pathname === "/404") {
        return children;
    }

    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
