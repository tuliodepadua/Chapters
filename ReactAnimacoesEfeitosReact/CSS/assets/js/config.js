const infos = {
  e1: {
    title: "Gestão reativa",
    descricao: "Gestão reativa",
    grupo: `<div class='col s4 setoresTag'>Operacional</div>`,
    segments: [
      { id: "c1", class: "active" },
      { id: "c2", class: "active" },
      { id: "f1", class: "active" },
    ],
  },
  e2: {
    title: "Gestão Normativa",
    descricao: "Gestão Normativa",
    grupo: `<div class='col s2 offset-s2 setoresTag'>Tático</div>`,
    segments: [
      { id: "c1", class: "inative" },
      { id: "c2", class: "active" },
      { id: "c3", class: "active" },
      { id: "c4", class: "active" },
      { id: "c5", class: "active" },
      { id: "c6", class: "active" },
      { id: "c7", class: "active" },
      { id: "c8", class: "active" },
      { id: "c9", class: "active" },
      { id: "f1", class: "active" },
    ],
  },
  e3: {
    title: "Gestão Proativa",
    descricao: "Gestão Proativa",
    grupo: `<div class='col s3 offset-s4 setoresTag'>Gerencial</div>
            <div class='col s3 setoresTag'>Estratégico</div>`,
    segments: [
      { id: "c1", class: "inative" },
      { id: "c2", class: "inative" },
      { id: "c3", class: "inative" },
      { id: "c4", class: "inative" },
      { id: "c5", class: "inative" },
      { id: "c6", class: "inative" },
      { id: "c7", class: "inative" },
      { id: "c8", class: "inative" },
      { id: "c9", class: "inative" },
      { id: "c10", class: "active" },
      { id: "c11", class: "active" },
      { id: "c12", class: "active" },
      { id: "f1", class: "active" },
      { id: "f2", class: "active" },
    ],
  },
  e4: {
    title: "Gestão Proativa",
    descricao: "Gestão Proativa",
    grupo: `<div class='col s6 offset-s6 setoresTag'>Estratégico</div>`,
    segments: [
      { id: "c1", class: "inative" },
      { id: "c2", class: "inative" },
      { id: "c3", class: "inative" },
      { id: "c4", class: "inative" },
      { id: "c5", class: "inative" },
      { id: "c6", class: "inative" },
      { id: "c7", class: "inative" },
      { id: "c8", class: "inative" },
      { id: "c9", class: "inative" },
      { id: "c10", class: "active" },
      { id: "c11", class: "active" },
      { id: "c12", class: "active" },
      { id: "c13", class: "active" },
      { id: "c14", class: "active" },
      { id: "f1", class: "active" },
      { id: "f2", class: "active" },
      { id: "f3", class: "active" },
      { id: "f4", class: "active" },
    ],
  },
  f1: {
    title: "Gestão Proativa",
    descricao: "Gestão Proativa",
    grupo: `<div class='col s2 setoresTag'>Operacional</div>
    <div class='col s2 setoresTag'>Tático</div>
    <div class='col s2 setoresTag'>Gerencial</div>
    <div class='col s2 setoresTag'>Estratégico</div>`,
    segments: [
      { id: "c1", class: "active" },
      { id: "c2", class: "active" },
      { id: "c3", class: "active" },
      { id: "c4", class: "active" },
      { id: "c5", class: "active" },
      { id: "c6", class: "active" },
      { id: "c7", class: "active" },
      { id: "c8", class: "active" },
      { id: "c9", class: "active" },
      { id: "c10", class: "active" },
      { id: "c11", class: "active" },
    ],
  },
  f2: {
    title: "Gestão Proativa",
    descricao: "Gestão Proativa",
    grupo: `<div class='col s3 offset-s4 setoresTag'>Gerencial</div>
            <div class='col s3 setoresTag'>Estratégico</div>`,
    segments: [
      { id: "c10", class: "active" },
      { id: "c11", class: "active" },
      { id: "c12", class: "active" },
    ],
  },
  f3: {
    title: "Gestão Proativa",
    descricao: "Gestão Proativa",
    grupo: `<div class='col s2 offset-s8 setoresTag'>Estratégico</div>`,
    segments: [{ id: "c13", class: "active" }],
  },
  f4: {
    title: "Pesquisa, Desenvolvimento e Inovação (PD&I)",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
      mauris sem sit amet mauris. Phasellus velit felis, pellentesque quis vestibulum congue, hendrerit vitae risus. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Pellentesque posuere porta cursus. Mauris sit amet pretium est. Mauris at
      nunc sollicitudin, vestibulum mauris eget, iaculis orci. Praesent non urna ut tellus mattis consequat. Maecenas cursus mauris vitae
      mi tempus sodales. Quisque interdum dui a dolor egestas, convallis facilisis orci congue.`,
    grupo: `<div class='col s2 offset-s10 setoresTag'>Estratégico</div>`,
    segments: [{ id: "c14", class: "active" }],
  },
};

const infosCards = [
  {
    id: "c1",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c2",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c3",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c4",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c5",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c6",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c7",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c8",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c9",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c10",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c11",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c12",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c13",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
  {
    id: "c14",
    title: "Title",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, justo et egestas dictum, orci urna gravida arcu, in imperdiet
        mauris sem sit amet mauris.`,
  },
];
