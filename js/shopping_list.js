var ShoppingList = function () {

  this.items = [];
};

ShoppingList.prototype.addItem = function (shoppingListItem) {
  

  if (shoppingListItem instanceof ShoppingListItem === false) {
    throw new Error('Not a ShoppingListItem');
  }
  else {
    return this.items.push(shoppingListItem);
  }
};

ShoppingList.prototype.removeItem = function (shoppingListItem) {

  if (!this.items[0]) {

    return "The items array is empty! There is nothing to remove!";
  }
  else {

    var indexToRemove = this.items.indexOf(shoppingListItem);
    return this.items.splice(indexToRemove, 1);
  }



};