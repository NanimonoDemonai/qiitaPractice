import * as React from 'react'
import {Observer} from "mobx-react-lite";
import {AbstractColorAPI, ColorAPI1, ColorAPI2, ColorAPI3, ColorTypeStatus} from "../store/colorStore";
import {FC} from "react";

const api1 = new ColorAPI1();
const api2 = new ColorAPI2();
const api3 = new ColorAPI3();

const APIViewer: FC<{ controller: AbstractColorAPI; }> = props => (
    <Observer>{() =>
        <div>
            <p style={{
                color: props.controller.color.value
            }}
            >██████ {props.controller.color.value} ██████</p>
            <p>{props.controller.status}</p>
            <button disabled={props.controller.status != ColorTypeStatus.init} onClick={props.controller.fetchColor}>
                おす
            </button>
            <button disabled={props.controller.status != ColorTypeStatus.fetched} onClick={props.controller.refetch}>
                再取得
            </button>
        </div>
    }</Observer>
);

const Index = () => (
    <div>
        <APIViewer controller={api1}/>
        <APIViewer controller={api2}/>
        <APIViewer controller={api3}/>
    </div>
);

export default Index;