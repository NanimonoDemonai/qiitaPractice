import * as React from 'react'
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
    tytle: string;
}

export default (props: LayoutProps) => (
    <>
        <Head>
            <title>Titleは{props.tytle}</title>
        </Head>
        <h1>{props.tytle}</h1>
        <div>
            {props.children}
        </div>
    </>
);