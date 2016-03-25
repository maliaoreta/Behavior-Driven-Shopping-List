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

  // Check constructor method
  describe('constructor method', function () {

    var constructorTest = new ShoppingListItem('pretzel', 'snack item');

    it('should accept name as an argument and set it using the passed in argument', function () {

      expect(constructorTest.name).to.equal('pretzel');
    })
  })

;});