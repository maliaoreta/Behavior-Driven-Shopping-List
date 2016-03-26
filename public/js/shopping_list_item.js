var ShoppingListItem = function (name, description) {

 this.name = name; 
 this.description = description;
 this.is_done = null;
};

ShoppingListItem.prototype.check = function () {

  return this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function () {

  return this.is_done = false;
};

ShoppingListItem.prototype.render = function () {

  var htmlOutput = "<li class=\"completed_" + this.is_done + "\"> \n<span>" + this.name + "</span> \n<span>" + this.description + "</span> \n</li>";

  return htmlOutput;
};