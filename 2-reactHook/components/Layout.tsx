import * as React from 'react'
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
}

export default (props: LayoutProps) => (
    <>
        <Head>
            <title>TitleはHelloWorld</title>
        </Head>
        {props.children}
    </>
);