var shopping_list = new ShoppingList();

var renderedList = shopping_list.render();
document.getElementById('content').innerHTML = renderedList;

document.getElementById('form').addEventListener('click', function (event) {

  event.preventDefault();
});

function add_to_shopping_list () {

  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  
  shopping_list.addItem(new_shopping_list_item);
  renderedList = shopping_list.render();
  document.getElementById('content').innerHTML = renderedList;
};

function changeCheckedStatus (idx, checkbox) {
 
  if (checkbox.checked === true) {

    shopping_list.items[idx].check();
    renderedList = shopping_list.render();
    checkbox.checked = true;
    document.getElementById('content').innerHTML = renderedList;
  }
  else {
    shopping_list.items[idx].uncheck();
  }
};

function removeItemButtonClicked (idx) {

  shopping_list.removeItem(shopping_list.items[idx]);
  renderedList = shopping_list.render();
  document.getElementById('content').innerHTML = renderedList;
}