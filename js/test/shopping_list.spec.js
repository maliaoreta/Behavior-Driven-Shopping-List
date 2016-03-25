describe('ShoppingListItem', function () {

  it('should be a class', function () {

    expect(ShoppingListItem).to.be.a('function');
  });

  describe('name', function () {

    it('should be a property in Shopping', function () {

      var nameCheck = new ShoppingListItem();
      expect(nameCheck).to.have.property('name');
    })
  })
});