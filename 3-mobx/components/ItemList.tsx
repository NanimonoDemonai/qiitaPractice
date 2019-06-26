import * as React from "react";
import {Observer} from "mobx-react-lite";
import {ItemListController} from "../store/ItemList";
import {Item} from "./Item";

export const ItemList: React.FC<{ controller: ItemListController; }> = props => (
    <div>
        <Observer>{() =>
            <div>
                {props.controller.items.map(e => <Item controller={e} key={e.name}/>)}
            </div>
        }</Observer>
        <hr/>

        <p>合計金額総和:
            <Observer>{() =>
                <span className={"goukei"}>{props.controller.fullPrice}</span>
            }</Observer>
        </p>
        {/* language=CSS*/}
        <style jsx>{`
            .goukei {
                padding-left: 1em;
                color: red;
            }
        `}</style>
    </div>
);