let store = [
  {name: 'bread', completed: false},
  {name: 'milk', completed: false},
  {name: 'apples', completed: false},
  {name: 'oranges', completed: false}
]

function addItem() {
  $('#js-shopping-list-form').submit(function (e){
    e.preventDefault();
      let listItem = $('#shopping-list-entry').val();
      store.push({name:listItem, completed:false});
      renderShoppingList();
  })
}

function renderShoppingList() {
  let html = '';
  for (let i = 0; i < store.length; i++) {
    html += generateListItem(store[i]);
  }
  $('.shopping-list').html(html);
}

function generateListItem(item) {
  return `<li>
    <span class="shopping-item">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
       <span class="button-label">check</span>
      </button>
      <button class="shoping-item-delete">
       <span class="button-label">delete</span>
      </button>
    </div>
    </li>` 
}

function markItem() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function (e){
    $(this)
      .closest(".shopping-item-controls")
      .siblings(".shopping-item")
      .toggleClass("shopping-item_checked")
  })
}

function removeItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function(e){
    $(this).closest("li").remove()
  })
}

$(markItem)
$(removeItem)
$(addItem)
$(generateListItem)
  