describe('ShoppingListItem', function () {

  it('should be a class', function () {

    expect(ShoppingListItem).to.be.a('function');
  });

  //Checks if name property exists
  describe('name', function () {

    it('should be a property in ShoppingListItem', function () {

      var nameCheck = new ShoppingListItem();
      expect(nameCheck).to.have.property('name');
    })
  })

  // Checks if description property exists
  describe('description', function () {

    it('should be a property in ShoppingListItem', function () {

      var describeCheck = new ShoppingListItem();
      expect(describeCheck).to.have.property('description');
    })
  })
});