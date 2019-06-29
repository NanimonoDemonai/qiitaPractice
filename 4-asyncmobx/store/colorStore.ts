import {observable, configure, flow, action, runInAction} from "mobx";
import axios from "axios";

configure({enforceActions: "observed"});


export interface ColorType {
    "value": string | "null"
}

export interface ColorResponse {
    "colors": ColorType[]
}

export enum ColorTypeStatus {
    init = "初期値",
    fetching = "フェッチ中",
    fetched = "フェッチ終了"
}

const noopAPI = axios.create({
    baseURL: "https://api.noopschallenge.com",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

/*
const MockAdapter = async (config) => {


    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockData: ColorResponse = {
        colors: [{
            value: "#bbbbbb"
        }]
    };

    const response = {
        data: mockData,
        status: 200,
        statusText: "",
        headers: "",
        config: config,
    };

    return response;
};
 */
export abstract class AbstractColorAPI {
    @observable color: ColorType = {value: "null"};
    @observable status: ColorTypeStatus = ColorTypeStatus.init;
    static readonly API = noopAPI;

    constructor() {
        this.color = {value: "null"};
        this.status = ColorTypeStatus.init;
    }

    abstract fetchColor(): void;

    @action.bound
    refetch() {
        this.status = ColorTypeStatus.init;
        this.fetchColor();
    }
}

export class ColorAPI1 extends AbstractColorAPI {
    @action.bound
    async fetchColor() {
        if (this.status != ColorTypeStatus.init) {
            throw new Error("フェッチ中か、フェッチ終わっとるわ");
        }
        this.status = ColorTypeStatus.fetching;


        const response: { data: ColorResponse } = await AbstractColorAPI.API.get("/hexbot");
        console.log(JSON.stringify(response));
        runInAction(() => {
            this.status = ColorTypeStatus.fetched;
            this.color = {value: response.data.colors[0].value}
        })
    };
}

export class ColorAPI2 extends AbstractColorAPI {
    @action.bound
    async fetchColor() {
        if (this.status != ColorTypeStatus.init) {
            throw new Error("フェッチ中か、フェッチ終わっとるわ");
        }
        this.setStatus(ColorTypeStatus.fetching);


        const response: { data: ColorResponse } = await AbstractColorAPI.API.get("/hexbot");
        this.setStatus(ColorTypeStatus.fetched);
        this.setColor({value: response.data.colors[0].value});
    };

    @action.bound
    private setColor(color: ColorType) {
        this.color = color;
    }

    @action.bound
    private setStatus(status: ColorTypeStatus) {
        this.status = status;
    }

}

export class ColorAPI3 extends AbstractColorAPI {
    fetchColor = flow(function* (this: ColorAPI3) {
        if (this.status != ColorTypeStatus.init) {
            throw new Error("フェッチ中か、フェッチ終わっとるわ");
        }
        this.status = ColorTypeStatus.fetching;


        const response: { data: ColorResponse } = yield AbstractColorAPI.API.get("/hexbot");

        this.status = ColorTypeStatus.fetched;
        this.color = {value: response.data.colors[0].value}
    }).bind(this);
}
