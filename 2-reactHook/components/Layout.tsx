import * as React from 'react'
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

export default (props: LayoutProps) => (
    <>
        <Head>
            <title>Titleは{props.title}</title>
        </Head>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.children}
        </div>
    </>
);