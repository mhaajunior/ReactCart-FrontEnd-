export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const addedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const addingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let isAddingCartItem = false;
      let addingCartItem = {};
      if (addingCartItemIndex !== -1) {
        isAddingCartItem = true;
        addingCartItem = state.items[addingCartItemIndex];
      }
      let addedItems;

      if (isAddingCartItem) {
        const addedItem = {
          ...addingCartItem,
          amount: addingCartItem.amount + action.payload.amount,
          total: addingCartItem.total + action.payload.total,
        };
        addedItems = [...state.items];
        addedItems[addingCartItemIndex] = addedItem;
      } else {
        addedItems = state.items.concat(action.payload);
      }

      return {
        items: addedItems,
        totalAmount: addedTotalAmount,
      };

    case 'REMOVE':
      const removedTotalAmount =
        state.totalAmount - action.payload.removedTotal;
      const removingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let removingCartItem = state.items[removingCartItemIndex];

      let removedItems;

      const removedItem = {
        ...removingCartItem,
        amount: removingCartItem.amount - action.payload.removedAmount,
        total: removingCartItem.total - action.payload.removedTotal,
      };
      removedItems = [...state.items];
      if (removedItem.amount === 0) {
        removedItems.splice(removingCartItemIndex, 1);
      } else {
        removedItems[removingCartItemIndex] = removedItem;
      }

      return {
        items: removedItems,
        totalAmount: removedTotalAmount,
      };

    case 'EMPTY':
      return {
        items: [],
        totalAmount: 0,
      };

    case 'ADDONE':
      const addedOneTotalAmount = state.totalAmount + action.payload.price;
      const addingOneCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const addingOneCartItem = state.items[addingOneCartItemIndex];

      let addedOneItems;

      const addedOneItem = {
        ...addingOneCartItem,
        amount: addingOneCartItem.amount + 1,
        total: addingOneCartItem.total + action.payload.price,
      };
      addedOneItems = [...state.items];
      addedOneItems[addingOneCartItemIndex] = addedOneItem;
      return {
        items: addedOneItems,
        totalAmount: addedOneTotalAmount,
      };

    case 'REMOVEONE':
      const removedOneTotalAmount = state.totalAmount - action.payload.price;
      const removedOneCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const removingOneCartItem = state.items[removedOneCartItemIndex];

      let removedOneItems;

      const removedOneItem = {
        ...removingOneCartItem,
        amount: removingOneCartItem.amount - 1,
        total: removingOneCartItem.total - action.payload.price,
      };

      removedOneItems = [...state.items];
      if (removedOneItem.amount === 0) {
        removedOneItems.splice(removedOneCartItemIndex, 1);
      } else {
        removedOneItems[removedOneCartItemIndex] = removedOneItem;
      }
      return {
        items: removedOneItems,
        totalAmount: removedOneTotalAmount,
      };

    case 'DELETE':
      const deletedTotalAmount = state.totalAmount - action.payload.total;
      const remainItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        items: remainItems,
        totalAmount: deletedTotalAmount,
      };

    default:
      return state;
  }
};
