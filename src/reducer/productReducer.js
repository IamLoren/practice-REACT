export const initialState = {
    productsData: [],
    skip: 0,
    loading: false,
    total: 0,
    isCartOpen: false,
    cartContent: [],
}

export const productReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: payload,
            }
        case 'FETCH_PRODUCT_DATA':
            return {
                ...state,
                productsData: [...state.productsData, ...payload.products],
                total: payload.total
            }
        case 'SET_SKIP':
            return {
                ...state,
                skip: state.skip + 10
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartContent: [...state.cartContent, payload]
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                cartContent: state.cartContent.filter(product => product.id !== payload)
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        default:
            return state
    }
}
