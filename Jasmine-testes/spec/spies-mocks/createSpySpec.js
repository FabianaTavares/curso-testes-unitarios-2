/**
 * @description createSpy
 * createSpy: é uma função global javascript do Jasmine.
 * Serve para  criar um spy do zero.
 * Ele possui todos os atributos de um objeto spy comum.
 * Recebe como parametro o nome da função a ser criado o spy.
 * Deve ser utilizado quando precisa de um objeto que não se tem acesso direto a ele.
 * createSp possui a limitação de não permitir implementar o método declarado, assim como somente permite a criação de um método.
 */

describe("Spies-mocks createSpy", function() {

  var somar =  jasmine.createSpy("somar"); // é tipo o mockito do Java.

  it ("deve validar o uso do jasmine.createSpy", function(){
    somar(1, 2);
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenCalledWith(1, 2);
    expect(somar.calls.mostRecent().args[0]).toEqual(1);
  });

});