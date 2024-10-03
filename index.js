const selectFontSize = document.getElementById("selectFontSize");
const selectBGcolor = document.getElementById("selectBGcolor");
const resetButton = document.getElementById("rsestButton");
const mainElement = document.querySelector("main");

const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBGcolor.value = bgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = bgColor;
};
// local storage value

const initialSetUp = () => {
  const bgColor = localStorage.getItem("bgColor");
  const fontSize = localStorage.getItem("fontSize");
  if (bgColor && fontSize) {
    setValues(fontSize, bgColor);
  }
  if (!bgColor && !fontSize) {
    setValues("16px", "aqua");
  }
  if (bgColor && !fontSize) {
    setValues("16px", bgColor);
  }
  if (!bgColor && fontSize) {
    setValues(fontSize, "aqua");
  }
};

// change font size
const changefontSize = (event) => {
  const selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};
// change background color
const changeBGcolor = (event) => {
  const selectedBGcolor = event.target.value;
  mainElement.style.backgroundColor = selectedBGcolor;
  localStorage.setItem("bgColor", selectedBGcolor);
};

// clear local storage
const clearLocalStorage = () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  setValues("16px", "aqua");
};

// add evet listener
selectFontSize.addEventListener("change", changefontSize);
selectBGcolor.addEventListener("change", changeBGcolor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetUp();
