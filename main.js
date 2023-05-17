myRange1.oninput = () => {
  rangeValue1.textContent = myRange1.value;
  circle1.style.animation = `circleRotate-1 ${myRange1.value}ms linear infinite`
};

myRange2.oninput = () => {
  rangeValue2.textContent = myRange2.value;
  circle2.style.animation = `circleRotate-2 ${myRange2.value}ms linear infinite`
};

myRange3.oninput = () => {
  rangeValue3.textContent = myRange3.value;
  circle3.style.animation = `circleRotate-3 ${myRange3.value}ms linear infinite`
};


colorPicker1.oninput = () => {
  circle1.style.backgroundColor = colorPicker1.value;
};

colorPicker2.oninput = () => {
  circle2.style.backgroundColor = colorPicker2.value;
};

colorPicker3.oninput = () => {
  circle3.style.backgroundColor = colorPicker3.value;
};