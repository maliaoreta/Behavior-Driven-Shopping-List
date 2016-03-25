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
      SL.addItem(itemTest);
      expect(SL.items).to.include(itemTest);
    });

    it('should throw an error if argument is not a ShoppingListItem', function () {

      expect(function () { SL.addItem('not an item'); }).to.throw(Error);
    });

  });
});