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
    });

    
    it('if given item is not in array, return a string that says so', function () {

      var notInArray = new ShoppingListItem('brownie', 'dessert');
      var existsTest = new ShoppingList();
      expect(existsTest.removeItem(notInArray)).to.be.a('string');
    });

    it('should remove the last item in the items array if no parameter is provided', function () {

      var testItem = new ShoppingListItem('pretzel', 'snack');
      var testItem1 = new ShoppingListItem('grape', 'fruit');
      var testItem2 = new ShoppingListItem('apple', 'red fruit');
      var removeLastItemTest = new ShoppingList();
      
      // removes last item when no parameter given
      removeLastItemTest.addItem(testItem);
      removeLastItemTest.addItem(testItem1);
      removeLastItemTest.addItem(testItem2);
      removeLastItemTest.removeItem();
      expect(removeLastItemTest.items).to.deep.equal([testItem, testItem1]);
    });

    it('if given item is not a ShoppingListItem, throw an error', function () {

      var SL1 = new ShoppingList();
      expect(SL1.removeItem.bind(SL1, 'not an item')).to.throw(Error);
    });
  });
});