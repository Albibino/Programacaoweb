var Distkms,LtsCombGst,VlrCombD,Autcarro,VlrCombVig

function calcViagem() {
  Distkms = parseFloat(CalcNum.DistKm.value);
  LtsCombGst = parseFloat(CalcNum.LtsComb.value);
  VlrCombD = parseFloat(CalcNum.VlrComb.value);
  Autcarro = Distkms / LtsCombGst;
  VlrCombVig = LtsCombGst * VlrCombD;

  alert("Valor gasto de combustivel =" + VlrCombVig)
}