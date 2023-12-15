import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchProduct, fetchProductByQuery } from "../Services/api";
import { initialState, productReducer } from "../reducer/productReducer";
import { LoadMoreBtn } from "../components/LoadMoreBtn/LoadMoreBtn";
import { Loader } from "../components/Loader/Loader";
import { Products } from "../components/Products/Products";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { productsData, skip, loading, total } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const getData = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { products, total } = query
        ? await fetchProductByQuery(query)
        : await fetchProduct({
            limit: 10,
            skip,
          });

      dispatch({ type: "FETCH_PRODUCT_DATA", payload: { products, total } });
    } catch (error) {
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [skip, query]);

  useEffect(() => {
    getData();
  }, [getData, skip]);

  const handleLoadMore = () => {
    dispatch({ type: "SET_SKIP" });
  };

  const handleSetQuery = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    dispatch({ type: "RESET_DATA" });
    setSearchParams(value ? { query: value } : {});
  };
  return (
    <div>
      <div>
        <input onChange={handleSetQuery} value={value} type="text" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Products products={productsData} />
      {total > productsData.length ? (
        <LoadMoreBtn click={handleLoadMore} />
      ) : null}

      {loading ? <Loader /> : null}
    </div>
  );
};

export default ProductsPage;
