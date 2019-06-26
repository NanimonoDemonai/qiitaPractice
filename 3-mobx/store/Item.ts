import {autorun, computed, observable} from "mobx";

export interface ItemModel {
    readonly name: string;//商品名
    readonly price: number;//値段
    readonly count: number;//個数
    readonly fullPrice: number;//合計
    readonly decrementable: boolean;
}

export class ItemController implements ItemModel {
    readonly name: string;
    readonly price: number;
    @observable count: number;
    @observable decrementable: boolean;

    //decrementable操作のための内部Observer
    private readonly decremantableHandler: () => void;

    constructor(name: string = "未定義", price: number = 0, count: number = 0) {
        this.name = name;
        this.price = price;
        this.count = count;
        if (count < 0) {
            this.count = 0;
        }
        this.decrementable = count >= 1;


        this.decremantableHandler = autorun(() => {
            if (this.decrementable) {
                if (this.count <= 0)
                    this.decrementable = false;
            } else {
                if (this.count >= 0)
                    this.decrementable = true;
            }
        })
    }

    @computed get fullPrice() {
        return this.price * this.count;
    }


    increment() {
        this.count++;
    }

    decrement() {
        if (this.count >= 0)
            this.count--;
    }

    //不要
    dispose(){
        this.decremantableHandler();
    }
}