function init() {
  $(".alinhaEtapa").click(function () {
    const idClick = $(this).attr("id");
    reset();
    $(`#${idClick} img`).attr("src", "assets/img/seta.png");
    $(`#g${idClick}`).addClass("active");
    stateManagement(idClick);
  });
  $(".lateralEsquerda").click(function () {
    const idClick = $(this).attr("id");
    reset();
    $(this).addClass("active");
    stateManagement(idClick);
  });
  $(".card-mural").click(function () {
    const idClick = $(this).attr("id");
    infoCard(idClick);
  });
  $(".cardbg").click(function () {
    closeModal();
  });
  $(".cardModal span").click(function () {
    closeModal();
  });
}

function reset() {
  $(".alinhaEtapa img").attr("src", "assets/img/circle.png");
  $(`.colGraf`).removeClass("active");
  $(".lateralEsquerda").removeClass("active");
  $(".card-mural").removeClass("active");
  $(".card-mural").removeClass("inative");
}

function stateManagement(id) {
  const { title, descricao, grupo, segments } = infos[id];
  $(".descricao h2").html(title);
  $(".descricao p").html(descricao);
  $(".setoresTags").html(grupo);
  for (const segment of segments) {
    $(`#${segment.id}`).addClass(segment.class);
  }
}

function infoCard(id) {
  const infoCard = infosCards.find((e) => e.id === id);
  $(".cardModal h2").html(`${infoCard.title}`);
  $(".cardModal p").html(`${infoCard.desc}`);
  $(`.cardModal`).addClass("active");
  $(`.cardbg`).addClass("active");
}

function closeModal() {
  $(".cardModal h2").html(``);
  $(".cardModal p").html(``);
  $(`.cardModal`).removeClass("active");
  $(`.cardbg`).removeClass("active");
}
