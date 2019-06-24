import * as React from "react";

export default () => (
    <>
        <h1>Hello World</h1>
        <img src="/static/kani.png" alt="" className="kani"/>
        <hr/>
        <p>こんにちは世界</p>
        <li>hoge</li>
        <li>fuga</li>
        <li>piyo</li>
        { /*language=CSS*/}
        <style jsx>{`
            .kani {
                max-width: 50px;
            }
        `}</style>
    </>
);