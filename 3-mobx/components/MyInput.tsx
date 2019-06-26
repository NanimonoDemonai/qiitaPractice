import * as React from 'react'

interface MyInputProps {
    text: string,
    setText: (text: string) => void
}

const MyInput: React.FC<MyInputProps> = (props) => (
    <input type="text" value={props.text} onChange={event => {
        props.setText(event.target.value)
    }}/>
);

export default MyInput;