var ShoppingList = function () {

  this.items = [];
}

ShoppingList.prototype.addItem = function (shoppingListItem) {
  

  if (shoppingListItem instanceof ShoppingListItem === false) {
    throw new Error('Not a ShoppingListItem');
  }
  else {
    return this.items.push(shoppingListItem);
  }
}