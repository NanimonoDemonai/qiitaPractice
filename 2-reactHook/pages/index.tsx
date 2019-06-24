import * as React from 'react'
import Layout from "../components/Layout";
import MyInput from "../components/MyInput";

const Index: React.FC<void> = () => {
    const [text, setText] = React.useState("");
    return (
        <Layout title={"カニ"}>
            <li>hoge</li>
            <li>fuga</li>
            <li>piyo</li>

            <MyInput text={text} setText={setText}/>
            <p className="textDisplay">{text}</p>
            { /*language=CSS*/}
            <style jsx>{`
                .textDisplay {
                    font-size: 2em;
                }
            `}</style>
        </Layout>
    )
};
export default Index;