import { PRODUCT_DATA,SEARCH_DATA } from "./constant";

export const productData =() => {
    return {
        type: PRODUCT_DATA,
    }
}
export const searchData =(query) => {
    return {
        type: SEARCH_DATA,
        query,
    }
}