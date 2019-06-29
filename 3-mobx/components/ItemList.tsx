import * as React from "react";
import {Observer} from "mobx-react-lite";
import {ItemListController} from "../store/ItemList";
import {Item} from "./Item";
import {createContext} from "react";

export const ItemListControllerContext = createContext<ItemListController>(new ItemListController([]));
export const ItemList: React.FC<{ controller: ItemListController; }> = props => (
    <div>
        <ItemListControllerContext.Provider value={props.controller}>
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
        </ItemListControllerContext.Provider>
    </div>
);