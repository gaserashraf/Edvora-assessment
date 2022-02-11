import apiBaseUrl from "../config.json";
import Axios from "axios";
export const getProducts = async (
  setProducts,
  setLoading,
  setBrands,
  setHashMapProducts,
  setFilterBrands,
  setStates,
  setCities,
  setFilterStates,
  setFilterCities
) => {
  setLoading(true);
  Axios.get(apiBaseUrl?.apiBaseUrl)
    .then((res) => {
      //for production use
      if (!res.error) {
        setLoading(false);
        setProducts(res.data);
        let arrProducts = [];
        let arrStates = [];
        let arrCities = [];
        // this part is preprocessing the data to make the app is more efficient

        // set all unique brand names and set hash map to brandName -> arr of products
        res?.data?.forEach((product) => {
          const found = arrProducts.find((b) => product.brand_name === b);
          if (!found) {
            //first time brand
            if (arrProducts && arrProducts?.length) {
              arrProducts = [...arrProducts, product.brand_name];
            } else {
              arrProducts = [product.brand_name];
            }
          }

          //get uniqe cities and states
          const found1 = arrStates.find((b) => product?.address?.state === b);
          if (!found1) arrStates.push(product?.address?.state);
          const found2 = arrCities.find((b) => product?.address?.city === b);
          if (!found2) arrCities.push(product?.address?.city);
        });
        setBrands(arrProducts);
        setFilterBrands(arrProducts);
        setHashMapProducts(productsToMap(res?.data));
        setCities(arrCities);
        setStates(arrStates);
        setFilterCities(arrCities);
        setFilterStates(arrStates);
        //console.log(arrStates[0]);
      } else {
        //console.log("ash");
        throw Error(res?.error);
      }
    })
    .catch(() => {
      //console.log("ash");
    });
};
export const productsToMap = (products) => {
  let map1 = new Map();
  products?.forEach((product) => {
    let tmpArr = map1.get(product.brand_name);
    if (tmpArr && tmpArr?.length)
      map1.set(product.brand_name, [...tmpArr, product]);
    else map1.set(product.brand_name, [product]);
  });
  return map1;
};
