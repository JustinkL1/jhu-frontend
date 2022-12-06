describe('favedish', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return Terriyaki Chicken', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/SP/menu_items/1.json').respond({'short_name':'SP2', 'name':'Teriyaki Chicken'});
    menuservice.getFaveMenuItem('SP', '1').then(function(response) {
      expect(response).toEqual({'short_name':'SP2', 'name':'Teriyaki Chicken'});
    });
    $httpBackend.flush();
  });

});