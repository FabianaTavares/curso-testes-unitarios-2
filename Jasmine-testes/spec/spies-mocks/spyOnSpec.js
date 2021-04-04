/**
 * @description spyOn
 * spyOn serve para criar um mock (objeto falso) a ser utilizado nos testes
 * Um objeto spy contém uma série de atributos que serão estudados ao longo do capítulo.
 * A função spyOn recebe como parametros o nome do objeto e do método a serem utilizados como mock.
 *
 */

describe("Spies-mocks SpyOn", function() {

  var calculadora = {
    somar: function(n1, n2){
      return n1 + n2;
    }
  };

  beforeEach(function(){
    spyOn(calculadora, "somar");
  });

  it ("deve possuir método somar como não definido", function(){
    expect(calculadora.somar(1, 1)).toBeUndefined();
  });

});