const fakten = [
  "Cola war ursprünglich braun, weil sie aus Karamellzucker hergestellt wurde.",
  "In einigen Ländern wird Cola auch heiß getrunken.",
  "Die erste Coca-Cola wurde für 5 Cent verkauft.",
  "Cola kann zur Reinigung von Münzen verwendet werden.",
  "Es gibt Cola mit Kaffeegeschmack!"
];

function zeigeFunFact() {
  const zufall = Math.floor(Math.random() * fakten.length);
  document.getElementById("funfact").textContent = fakten[zufall];
}
