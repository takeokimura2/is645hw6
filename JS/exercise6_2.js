const displayText400 = () => {
  let fourhundredlevel = document.getElementsByClassName("400level");

  for (i = 0; i < fourhundredlevel.length; i++) {
    console.log(fourhundredlevel[i].textContent)
  }
};

displayText400();