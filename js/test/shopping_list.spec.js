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


;});