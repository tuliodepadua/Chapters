const Utils = {
  destructWord(wordsPath) {
    for (const wordPath of wordsPath) {
      let elementWord = document.querySelector(wordPath);
      elementWord.innerHTML = elementWord.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }
  },
};

export { Utils };
