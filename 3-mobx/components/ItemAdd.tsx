import {FC} from "react";
import {Observer} from "mobx-react-lite";
import {ItemAdderController} from "../store/ItemAdd";


export const ItemAdder: FC<{ controller: ItemAdderController }> = props => (
    <>
        <Observer>{() =>
            <p>商品名:<input type="text"
                          onChange={
                              event1 => {
                                  props.controller.onNameChange(event1.target.value)
                              }
                          }
                          value={props.controller.name}
            /></p>
        }</Observer>
        <Observer>{() =>
            <p>値段:<input type="number"
                         onChange={
                             event1 => {
                                 props.controller.onNumberChange(event1.target.value)
                             }
                         }
                         value={props.controller.price}
            />
                {props.controller.isNumberError&&<span style={{color:"red"}}>入力エラー(数値を入力してください)</span>}
            </p>
        }</Observer>
        <Observer>{() =>
            <button disabled={!props.controller.isAddable}
                    onClick={props.controller.onAdd}
            >
                作成
            </button>
        }</Observer>
    </>
);