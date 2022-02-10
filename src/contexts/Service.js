import apiBaseUrl from "../config.json";
import Axios from "axios";
export const getProducts = async (
  setProducts,
  setLoading,
  setBrands,
  setHashMapProducts
) => {
  setLoading(true);
  Axios.get(apiBaseUrl?.apiBaseUrl)
    .then((res) => {
      //for production use
      if (!res.error) {
        setLoading(false);
        setProducts(res.data);
        let arr = [];
        let map1 = new Map();
        // this part is preprocessing the data to make the app is more efficient


        // set all unique brand names and set hash map to brandName -> arr of products
        res?.data?.forEach((product) => {
          const found = arr.find((b) => product.brand_name === b);
          if (!found) {
            //first time brand
            map1.set(product.brand_name, [product]);
            if (arr && arr?.length) {
              arr = [...arr, product.brand_name];
            } else {
              arr = [product.brand_name];
            }
          } else {
            //not first time brand
            let tmpArr = map1.get(product.brand_name);
            map1.set(product.brand_name, [...tmpArr, product]);
          }
        });
        setBrands(arr);
        setHashMapProducts(map1);
      } else {
        //console.log("ash");
        throw Error(res?.error);
      }
    })
    .catch(() => {
      //console.log("ash");
    });
};
