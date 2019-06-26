import * as React from 'react'
import {Item} from "../components/Item";
import {ItemController, ItemData} from "../store/Item";
import {ItemListController} from "../store/ItemList";
import {ItemList} from "../components/ItemList";

const dummyData1: Partial<ItemData> = {
    name: "ダミー",
    price: 50,
};
const dummyData2: Partial<ItemData> = {
    name: "ダミー2",
    price: 50,
};
const controller = new ItemListController([]);
controller.addItem(dummyData1);
controller.addItem(dummyData2);
const Index = () => (
    <div>
        <ItemList controller={controller}/>
    </div>
);

export default Index;