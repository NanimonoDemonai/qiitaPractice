import * as React from 'react'
import {ItemData} from "../store/Item";
import {ItemListController} from "../store/ItemList";
import {ItemList} from "../components/ItemList";
import {ItemAdder} from "../components/ItemAdd";
import {ItemAdderController} from "../store/ItemAdd";

const dummyData1: ItemData = {
    name: "ダミー",
    price: 50,
};
const dummyData2: ItemData = {
    name: "ダミー2",
    price: 50,
};
const controller = new ItemListController([]);
const adderController = new ItemAdderController(controller);
controller.addItem(dummyData1);
controller.addItem(dummyData2);
const Index = () => (
    <div>
        <ItemAdder controller={adderController}/>
        <ItemList controller={controller}/>
    </div>
);

export default Index;