export const initialState = {
  productsData: [],
  skip: 0,
  loading: false,
  total: 0,
  isCartOpen: false,
  cartContent: [],
  limit: 10,
};

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "FETCH_PRODUCT_DATA":
      return {
        ...state,
        productsData: [...state.productsData, ...payload.products],
        total: payload.total,
      };
    case "SET_SKIP":
      return {
        ...state,
        skip: state.skip + 10,
      };
    case "RESET_DATA":
      return {
        ...state,
        productsData: [],
      };
    case "CHANGE_LIMIT":
      return {
        ...state,
        limit: payload,
        productsData: [],
      };

    default:
      return state;
  }
};
