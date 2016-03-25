describe('ShoppingListItem', function () {

  var SLI = null;

  beforeEach(function () {

    SLI = new ShoppingListItem();
  })

  it('should be a class', function () {

    expect(ShoppingListItem).to.be.a('function');
  });

  // Checks if name is a property
  it('should be a property in ShoppingListItem', function () {

    expect(SLI).to.have.property('name');
  });

  // Checks if description is a property  
  it('should be a property in ShoppingListItem', function () {

      expect(SLI).to.have.property('description');
    });

  //Checks if is_done is a property
  it('should be a property in ShoppingListItem', function () {

    expect(SLI).to.have.property('is_done');
   });


  // TESTING METHODS
  // Check constructor method
  describe('constructor method', function () {

    var constructorTest = new ShoppingListItem('pretzel', 'snack item');

    it('should accept name as an argument and set the name property using the passed in argument', function () {

      expect(constructorTest.name).to.equal('pretzel');
    });

    it('should accept description as an argument and set the description property using the passed in argument', function () {

      expect(constructorTest.description).to.equal('snack item');
    })
  });

  // Test check method
  describe('check method', function () {

    it('should be a method on ShoppingListItem', function () {

      expect(SLI.check).to.be.a('function');
    });

    it('should set is_done property to true', function () {

      expect(SLI.check()).to.be.true;
    })
  });

  // Test uncheck method
  describe('uncheck method', function () {

    it('should be a method on ShoppingListItem', function () {

      expect(SLI.uncheck).to.be.a('function');
    });

    it('should set is_done to false', function () {

      expect(SLI.uncheck()).to.be.false;
    });
  });

  //Test render method
  describe('render method', function () {

    it('should be a method on ShoppingListItem', function () {

      expect(SLI.render).to.be.a('function');
    });

    it('should construct and return an html formatted string', function () {

      var renderTest = new ShoppingListItem('Avocado', 'Must be eaten immediately.');
      renderTest.uncheck();

      expect(renderTest.render()).to.be.a('string');
      expect(renderTest.render()).to.equal("<ul> \
        <li class=\"completed_false\"> \
        <span>Avocado</span> \
        <span>Must be eaten immediately.</span> \
        </li> \
        <ul>");
    });
  });

});


describe('ShoppingList', function () {

  it('should be a class', function () {

    expect(ShoppingList).to.be.a('function');
  })
})