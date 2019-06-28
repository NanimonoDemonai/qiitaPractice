import {ItemController, ItemData, ItemModel} from "./Item";
import {action, computed, configure, observable} from "mobx";
configure({enforceActions: true});

export interface ItemListModel {
    readonly items: ItemModel[];
    readonly fullPrice: number;
}

export class ItemListController implements ItemListModel {
    @observable items: ItemController[];

    constructor(items: ItemController[]) {
        this.items = items;
    }

    @computed get fullPrice() {
        return this.items.reduce((acc, cur) => acc + cur.fullPrice, 0)
    }

    @action.bound
    addItem(data: Partial<ItemData>) {
        this.items.push(new ItemController(data));
    }
}