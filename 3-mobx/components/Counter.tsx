import * as React from 'react'

interface ItemDescriptionProps {
    name: string;
    price: number;

}

const ItemDescription: React.FC<ItemDescriptionProps> = props => (
    <div>
        <p>商品名:{props.name}</p>
        <p>価格:{props.price}</p>
    </div>
);

interface ItemCountProps {
    count: number;
    fullPrice: number;
}

const ItemCount: React.FC<ItemCountProps> = props => (
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


