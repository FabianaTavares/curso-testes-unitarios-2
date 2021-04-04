/**
 * @description Fail:
 * Falha manual que permite interromper um teste lançando um erro.
 * O Jasmine possui a função "fail" para falhar manualmente um teste
 * Utilizamos a falha manual para certificar que a operação não desejada não seja executada.
 */
describe("Testa a função Fail de falha manual", function() {
  var operacao = function(deveExecutar, callBack){
    if(deveExecutar){
      callBack();
    }
  }

  it("Não deve executar a função de callBack", function(){
   operacao(false, function(){
     fail("função de callback foi executada.");
   })
  });
});