/**
 * @description jasmine.clock
 * jasmine.clock: Serve para tornar sincrono as chamadas de setTimeout e setInterval.
 * Deve ser instalado ants da chamda com jasmine.clock().install
 * Deve ser removido ao termino do teste/ suite com jasmine.clock().uninstall
 * Executa a operação de chamada com jasmine.clock().tick, recebendo como parametro o numero de milissegundos.
 */

describe("Spies-mocks jasmine.clock", function() {

  var somar;

  beforeEach(function(){
    somar = jasmine.createSpy("somar");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it ("deve validar a chamada do 'setTimeout' sincronamente", function(){
    setTimeout(function() { somar(); }, 200);
    jasmine.clock().tick(100);
    expect(somar).not.toHaveBeenCalled();
    jasmine.clock().tick(200);
    expect(somar).toHaveBeenCalled();
  });

  it ("deve validar a chamada do 'setInterval' sincronamente", function(){
    setInterval(function() { somar(); }, 100);
    jasmine.clock().tick(100);
    expect(somar).toHaveBeenCalled();
  });

});