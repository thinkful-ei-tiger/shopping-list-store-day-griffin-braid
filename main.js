let store = {
  items: [ {id: cuid(), name: 'bread', completed: false},
           {id: cuid(), name: 'milk', completed: false},
           {id: cuid(), name: 'apples', completed: false},
           {id: cuid(), name: 'oranges', completed: false} ],
  hideCheckedItems: false,

}

const generateItemElement = function (item) {
  let itemTitle = `<span class='shopping-item shopping-item__checked'>${item.name}</span>`;
  if (!item.checked) {
    itemTitle = `<span class='shopping-item'>${item.name}</span>`;
  }
  
  return `
    <li class='js-item-element' data-item-id='${item.id}'>
      ${itemTitle}
      <div class='shopping-item-controls'>
        <button class='shopping-item-toggle js-item-toggle'>
          <span class='button-label'>Check</span>
        </button>
        <button class='shopping-item-delete js-item-delete'>
          <span class='button-label'>Delete</span>
        </button>
        <input type='text' placeholder='New item name' class='shopping-item-rename'></input>
        <button class='shopping-item-rename js-item-rename'>
          <span class='button-label'>Rename</span>
        </button>
      </div>
    </li>`;
};

const generateShoppingItemsString = function (shoppingList) {
  const items = shoppingList.map((item) => generateItemElement(item));
  return items.join('');
}

const renderList = function () {
  let items = [...store.items];
  if (store.hideCheckedItems) {
    items = items.filter(item => !item.checked);
  }

  const shoppingListItemsString = generateShoppingItemsString(items)
  $('.js-shopping-list').html(shoppingListItemsString);
}

const addItemToList = function (itemName) {
  store.items.push({id: cuid(), name: itemName, checked: false});
}

const handleNewItemSubmit = function () {
  $('#js-shopping-list-form').submit(function (evt) {
    evt.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToList(newItemName);
    renderList();
  })
}

const toggleCheckedForListItem = function (id) {
  const foundItem = store.items.find(item => item.id === id);
  foundItem.checked = !foundItem.checked;
}

const handleItemCheckClicked = function () {
  $('.js-shopping-list').on('click', '.js-item-toggle', evt => {
    const id = getItemIdFromElement(evt.currentTarget);
    toggleCheckedForListItem();
    renderList();
  })
}

const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.js-item-element')
    .data('item-id')
}

const deleteListItem = function (id) {
  const index = store.items.findIndex(item => item.id === id);
  store.items.splice(index, 1);
}

const handleDeleteItemClicked = function () {
  $('.js-shopping-list').on('click', '.js-item-delete', evt => {
    const id = getItemIdFromElement(evt.currentTarget);
    deleteListItem(id);
    renderList();
  })
}

const renameListItem = function (id, newName) {
  const index = store.items.findIndex(item => item.id === id);
  store.items[index].name = newName;
}

const handleRenameItemClicked = function () {
  $('.js-shopping-list').on('click', '.js-item-rename', evt => {
    const id = getItemIdFromElement(evt.currentTarget);
    let newName = $('.shopping-item-rename').val();
    renameListItem(id, newName);
    renderList();
  })
}

const toggleCheckedItemsFilter = function () {
  store.hideCheckedItems = !store.hideCheckedItems;
}

const handleToggleFilterClick = function () {
  $('.js-filter-checked').click(() => {
    toggleCheckedItemsFilter();
    renderList();
  })
}

const runShoppingList = function () {
  renderList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleRenameItemClicked();
  handleToggleFilterClick();
}

$(runShoppingList);