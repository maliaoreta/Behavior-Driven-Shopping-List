var ShoppingList = function () {

  this.items = [];
}

ShoppingList.prototype.addItem = function (shoppingListItem) {
 
  return this.items.push(shoppingListItem);
}