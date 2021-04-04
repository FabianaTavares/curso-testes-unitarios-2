/**
 * @description createSpyObj
 * createSpyObj: é uma função global javascript do Jasmine.
 * Serve para  criar um objeto spy do zero.
 * Ele possui todos os atributos de um objeto spy comum.
 * Recebe como parametro o nome do objeto a ser criado, assim como seus metodos em formato de array.
 * Deve ser utilizado quando precisa de um objeto que não se tem acesso direto a ele.
 * createSpyObj permite a utilização de todos os elementos "end." estudados anteriormente.
 */

describe("Spies-mocks createSpyObj", function() {

  var calculadora = jasmine.createSpyObj("calculadora", ["somar", "subtrair"])

  calculadora.somar.and.returnValue(10);

  it ("deve validar o uso do jasmine.createSpyObj", function(){
    expect(calculadora.somar(1, 2)).toEqual(10);
    expect(calculadora.somar).toHaveBeenCalled();
    expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
    expect(calculadora.somar.calls.mostRecent().args[0]).toEqual(1);
  });

});