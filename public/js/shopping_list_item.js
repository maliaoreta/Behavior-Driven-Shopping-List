function ShoppingListItem (name, description) {

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

  var idx = shopping_list.items.indexOf(this);
  var checkbox = "checkbox" + idx;
  var checked;

  if (this.is_done === true) {

    checked = "checked";
  }
  else {
    checked = '';
  }

  var htmlOutput = "<li class=\"completed_" + this.is_done + "\"> \n<span>" + this.name + "</span> \n<span>" + this.description + "</span> <input type=\"checkbox\" id=\"checkbox" + idx + "\" onchange=\"changeCheckedStatus(" + idx + ", " + checkbox + ")\" " + checked + "> <button onclick=\"removeItemButtonClicked(" + idx + ")\">x</button> \n</li>";

  return htmlOutput;
};