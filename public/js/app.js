var shopping_list = new ShoppingList();

var renderedList = shopping_list.render();
document.getElementById('content').innerHTML = renderedList;

function add_to_shopping_list () {

  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);

  shopping_list.addItem(new_shopping_list_item);
  renderedList = shopping_list.render();
}