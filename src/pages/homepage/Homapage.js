import {addProduct} from "../../redux/slices/product";
import React from "react";
import {useDispatch} from "react-redux";

export const Homepage = () => {
    const dispatch = useDispatch()
    return (
        <p align={'center'} onClick={() => dispatch(addProduct({name: 'Product 1'}))}><button>add product</button></p>
    )
}