// initial state
export const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

//REducer functionality
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state, // create a new object to ensure immutabiolity
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart[action.payload.index];
      const updatedCart = state.cart.filter(
        (_, index) => index !== action.payload.index,
      );
      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - itemToRemove.price,
      };
    default:
      throw new Error('Unknown action');
  }
};
