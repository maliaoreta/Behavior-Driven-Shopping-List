var ShoppingList = function () {

  this.items = [];
};

ShoppingList.prototype.addItem = function (shoppingListItem) {
  
  if (shoppingListItem instanceof ShoppingListItem === false) {
    throw new Error('Please enter a ShoppingListItem!');
  }
  else {
    return this.items.push(shoppingListItem);
  }
};

ShoppingList.prototype.removeItem = function (shoppingListItem) {

  if (shoppingListItem instanceof ShoppingListItem === false && shoppingListItem !== undefined) {

    throw new Error('Please enter a ShoppingListItem!');
  }
  else if (this.items.includes(shoppingListItem) === false && shoppingListItem !== undefined) {
   
    return "That item is not in your items array!";
  }
  else if (shoppingListItem === undefined && this.items.length > 0) {
    
    return this.items.splice(this.items.length-1, 1);
  }
  else {

    var indexToRemove = this.items.indexOf(shoppingListItem);
    return this.items.splice(indexToRemove, 1);
  }
};

ShoppingList.prototype.render = function () {

  
}