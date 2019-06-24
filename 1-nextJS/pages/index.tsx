import * as React from "react";
import Head from "next/head";

export default () => (
    <>
        <Head>
            <title>TitleはHelloWorld</title>
        </Head>
        <h1>Hello World</h1>
        <hr/>
        <p>こんにちは世界<br/>こんばんはカニ</p>
        <img src="/static/kani.png" alt="" className="kani"/>

        <p>1+1={1 + 1}</p>

        {<ruby>世界<rt>World</rt></ruby>}

        {[<li>hoge</li>, <li>fuga</li>, <li>piyo</li>]}

        { /*language=CSS*/}
        <style jsx>{`
            .kani {
                max-width: 50px;
            }
        `}</style>
    </>
);