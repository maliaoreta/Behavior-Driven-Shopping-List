describe('ShoppingList', function () {

  var SL = new ShoppingList();

  it('should be a class', function () {

    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property named items', function () {

    expect(SL).to.have.property('items');
  });

  //Test constructor method
  describe('constructor method', function () {

    it('should initialize the items property as an empty Array', function () {

      expect(SL.items).to.be.a('array');
      expect(SL.items).to.be.empty;
    });
  });

  //Test addItem method
  describe('addItem method', function () {

    it('should be a method in ShoppingList', function () {

      expect(SL.addItem).to.be.a('function');
    });

    it('should accept a single ShoppingListItem object as an argument and add it to the items array', function () {

      var itemTest = new ShoppingListItem('coffee', 'required to function');
      var addItemTest = new ShoppingList();
      addItemTest.addItem(itemTest);
      expect(addItemTest.items).to.include(itemTest);
    });

    it('should throw an error if argument is not a ShoppingListItem', function () {

      expect(function () { SL.addItem('not an item'); }).to.throw(Error);
    });
  });

  //Test removeItem method
  describe('removeItem method', function () {

    it('should be a method in ShoppingList', function () {

      expect(SL.removeItem).to.be.a('function');
    });

    it('should accept a ShoppingListItem as an argument and remove it from the items array', function () {

      // Removes item when it's the only item in items array
      var testItem = new ShoppingListItem('pretzel', 'snack');
      var removeOnlyItemTest = new ShoppingList();
      removeOnlyItemTest.addItem(testItem);
      removeOnlyItemTest.removeItem(testItem);
      expect(removeOnlyItemTest.items).to.be.empty;

      // removes first item when there are two in the array
      var testItem1 = new ShoppingListItem('grape', 'fruit');
      var testItem2 = new ShoppingListItem('apple', 'red fruit');
      var removeFirstItemTest = new ShoppingList();
      removeFirstItemTest.addItem(testItem1);
      removeFirstItemTest.addItem(testItem2);
      removeFirstItemTest.removeItem(testItem1);
      expect(removeFirstItemTest.items).to.not.include.members([testItem1]);
    })
  })
});