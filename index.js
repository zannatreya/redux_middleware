const { createStore, combineReducers } = require("redux");

//product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//cart constants

const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//product state

const initialProductState={
    products:["salt","sugar"],
    numberOfProducts: 2,
};
//cart state

const initialCartState={
    cart:["sugar"],
    numberOfProducts: 1,
};

//product action

const getProductAction =()=>{
    return{
        type: GET_PRODUCTS,
    };
};
const addProductAction =(product)=>{
    return{
        type: ADD_PRODUCTS,
        payload: product,
    };
};
//cart action

const getCartAction =()=>{
    return{
        type: GET_CART_ITEMS,
    };
};
const addCartAction =(product)=>{
    return{
        type: ADD_CART_ITEMS,
        payload: product,
    };
};

//product reducer

const productsReducer =(state=initialProductState,action)=>{
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
        };
    case ADD_PRODUCTS:
        return{
            products: [...state.products,action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        };
        

    default:
    return state;
    }
}
//cart reducer

const cartReducer =(state=initialCartState,action)=>{
switch (action.type) {
    case GET_CART_ITEMS:
        return{
            ...state,
        };
    case ADD_CART_ITEMS:
        return{
            cart: [...state.cart,action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        };
        

    default:
    return state;
    }
};

const rootReducer = combineReducers({
productR: productsReducer,
cartR: cartReducer,
});

// store

// const store = createStore(productsReducer);
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("ata"));
store.dispatch(addProductAction("moida"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("suji"));