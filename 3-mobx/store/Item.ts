import {computed, observable} from "mobx";

export interface ItemData {
    readonly name: string;//商品名
    readonly price: number;//値段
    readonly count: number;//個数
}

export interface ItemModel extends ItemData {
    readonly fullPrice: number;//合計
    readonly decrementable: boolean;
}

export const defaultItemData: ItemData = {
    name: "未定義",
    price: 0,
    count: 0
};

export class ItemController implements ItemModel {
    readonly name: string;
    readonly price: number;
    @observable count: number;
    //@observable decrementable: boolean;

    //decrementable操作のための内部Observer
    //private readonly decremantableHandler: () => void;

    constructor(data: Partial<ItemData> = {}) {
        const initializer: ItemData = {...defaultItemData, ...data};
        this.name = initializer.name;
        this.price = initializer.price;
        this.count = initializer.count;
        if (this.count < 0) {
            this.count = 0;
        }
        /*
        this.decrementable = this.count >= 1;

        this.decremantableHandler = autorun(() => {
            if (this.decrementable) {
                if (this.count <= 0)
                    this.decrementable = false;
            } else {
                if (this.count > 0)
                    this.decrementable = true;
            }
        })
         */
    }

    @computed get decrementable() {
        return this.count > 0;
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

    /*
    //不要になったら呼ぶもの
    dispose() {
        this.decremantableHandler();
    }
    */
}