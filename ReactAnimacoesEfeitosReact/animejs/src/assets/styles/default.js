const cor = {
  cinzab: "#969393",
  cinza: "#E8E8E8",
  branco: "#FFFFFF",
  preto: "#000000",
  azul: "#00d600",
  laranja: "#00d600",
};

const breackPoint1 = "994px";
const breackPoint2 = "1539px";
const breackPoint3 = "1280px";

const dist = {
  w: () => (window.innerWidth < 900 ? "20px" : "124px"),
  h: "124px",
  minM: "670px  !important",
  minD: "540px  !important",
  maxD: "1280px  !important",
};

const fonts = {
  NeuePlakCR: "NeuePlakCR",
  NeuePlakCompressedBold: "NeuePlakCompressedBold",
  NeuePlakRegular: "NeuePlakRegular",
  proximaNova: "proxima-nova",
  NeuePlakCondensedBold: "NeuePlakCondensedBold",
  NeuePlakBold: "NeuePlakBold",
  NeuePlakExtraBlack: "NeuePlakExtraBlack",
  HelveticaNeueCyrMedium: "HelveticaNeueCyrMedium",
};

const transicao = (valor = ".3") =>
  `transition:all ${valor}s linear !important;
      -webkit-transition:all ${valor}s linear !important;
      -moz-transition:all ${valor}s linear !important;`;

export {
  cor,
  dist,
  transicao,
  fonts,
  breackPoint1,
  breackPoint2,
  breackPoint3,
};
