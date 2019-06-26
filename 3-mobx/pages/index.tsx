import * as React from 'react'
import {Item} from "../components/Item";
import {ItemController, ItemData} from "../store/Item";

const dummyData: Partial<ItemData> = {
    name: "ダミー",
    price: 50,
};

const controller = new ItemController(dummyData);
const Index = () => (
    <div>
        <Item controller={controller}/>
    </div>
);

export default Index;