const changeParagraphColor = () => {
  paragraphElement = document.querySelectorAll("p");

  for (i = 0; i < paragraphElement.length; i++) {
    paragraphElement[i].style.backgroundColor = "yellow";
    paragraphElement[i].style.fontWeight = "900";
  }

};

changeParagraphColor();