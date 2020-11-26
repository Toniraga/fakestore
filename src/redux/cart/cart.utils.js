/** @format */

// This takes in the cartItems state and incoming cartItem to calculate new cartItems and price.
export const addItem = (cartItems, newCartItem) => {
  const getSelectedId = (data) => {
    if (data.id) {
      return data.id || false;
    } else {
      return true;
    }
  };

  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === newCartItem.id &&
      getSelectedId(cartItem) === getSelectedId(newCartItem)
  );

  if (!existingCartItem) {
		let price;
		price = newCartItem.price * newCartItem.quantity;
		newCartItem.price = price;
	}

  if (existingCartItem) {
    cartItems.forEach((item) => {
      let price;
      if (
        item.id === newCartItem.id &&
        getSelectedId(item) === getSelectedId(newCartItem)
      ) {
        item.quantity += newCartItem.quantity;
        price = newCartItem.price * newCartItem.quantity;
        item.price += price;
      }
    });
    return cartItems;
  }

  return [...cartItems, newCartItem];
};

export const subtractItem = (cartItems, newCartItem) => {

	return [...cartItems, newCartItem];
};

// Calculates the total price of items in the cartItems
export const getSubTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    // let addonPrice = item.selectedAddon.price
    const addonTotal = item.price;
    total += addonTotal;
  });
  return total;
};
