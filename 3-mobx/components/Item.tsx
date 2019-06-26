import * as React from 'react'
import {ItemController} from "../store/Item";
import {Observer} from "mobx-react-lite";

export interface ItemDescriptionProps {
    name: string;
    price: number;

}

export const ItemDescription: React.FC<ItemDescriptionProps> = props => (
    <div>
        <p>商品名:{props.name}</p>
        <p>価格:{props.price}</p>
    </div>
);

export interface ItemCountProps {
    count: number;
    fullPrice: number;
}

export const ItemCount: React.FC<ItemCountProps> = props => (
    <div>
        <span className={"count"}>個数:{props.count}</span>
        <span>合計金額:<b>{props.fullPrice}</b></span>

        { /*language=CSS*/}
        <style jsx>{`
            .count {
                padding-right: 2em;
            }
        `}</style>
    </div>
);

export const Item: React.FC<{ controller: ItemController; }> = props => (
    <div className={"item"}>
        <ItemDescription name={props.controller.name} price={props.controller.price}/>
        <hr/>
        <Observer>{() =>
            <ItemCount count={props.controller.count} fullPrice={props.controller.fullPrice}/>
        }</Observer>
        <button onClick={
            () => {
                props.controller.increment()
            }
        }>
            +
        </button>
        <Observer>{() =>
            <button
                onClick={
                    () => {
                        props.controller.decrement()
                    }
                }
                disabled={!props.controller.decrementable}
            >
                -
            </button>
        }</Observer>
        {/* language=CSS*/}
        <style jsx>{`            
            .item{
                border: double;
                padding: 1em;
                margin: 1em;
            }
        `}</style>
    </div>
);
