var ShoppingListItem = function (name, description) {

 this.name = name; 
 this.description = description;
 this.is_done = null;
}

ShoppingListItem.prototype.check = function () {

  return this.is_done = true;
}

ShoppingListItem.prototype.uncheck = function () {

  return this.is_done = false;
}

ShoppingListItem.prototype.render = function () {

  var htmlOutput = "<ul> \
        <li class=\"completed_false\"> \
        <span>Avocado</span> \
        <span>Must be eaten immediately.</span> \
        </li> \
        <ul>";

  return htmlOutput;
}
