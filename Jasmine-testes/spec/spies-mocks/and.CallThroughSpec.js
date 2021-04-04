/**
 * @description and.callThrough
 * and.callThrough serve para ao spy que o método original deve ser executado.
 * and.callThrough deve ser aplicado ao objeto spy
 * Neste caso o metodo original será executado, e todos os recursos do spy serão mantidos e estarao disponiveis para verificação.
 */

describe("Spies-mocks and.callThrough", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    },
    subtrair: function(n1, n2){
      return n1 - n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar").and.callThrough();
    spyOn(calculadora, "subtrair");
  });

  it ("deve validar o uso do and.callThrough", function(){
    expect(calculadora.somar(1, 1)).toEqual(2);
    expect(calculadora.subtrair(2, 2)).toBeUndefined();
    expect(calculadora.somar).toHaveBeenCalledTimes(1);
  });

});