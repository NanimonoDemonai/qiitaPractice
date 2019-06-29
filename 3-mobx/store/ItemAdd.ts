import {action, computed, observable,configure} from "mobx";
import {ItemListController} from "./ItemList";
configure({enforceActions: "observed"});

export class ItemAdderController {
    @observable name: string;
    @observable price: string;
    private list: ItemListController;

    @computed get isNumberError(): boolean {
        return this.price == "";
    }

    @computed get isAddable(): boolean {
        return !this.isNumberError && this.name.length != 0;
    }

    constructor(list: ItemListController) {
        this.name = "";
        this.price = "0";
        this.list = list;
    }

    @action.bound
    onNameChange(text: string) {
        this.name = text;
    }

    @action.bound
    onNumberChange(text: string) {
        this.price = text;
    }

    @action.bound
    onAdd() {
        if (this.isAddable) {
            this.list.addItem({
                name: this.name,
                price: Number(this.price)
            });

            this.name = "";
            this.price = "0";
        }

    }


}