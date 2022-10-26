
const numberOne = document.querySelector('.number-one');
const numberTwo = document.querySelector('.number-two');
const numberThree = document.querySelector('.number-three');
const numberFour = document.querySelector('.number-four');
const numberFive = document.querySelector('.number-five');
const numberSix = document.querySelector('.number-six');
const numberSeven = document.querySelector('.number-seven');
const numberEight = document.querySelector('.number-eight');
const numberNine = document.querySelector('.number-nine');
const numberZero = document.querySelector('.number-zero');
const dot = document.querySelector('.dot');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const modulo = document.querySelector('.modulo');

const equal = document.querySelector('.equal');

const clearEl = document.querySelector('.clear');
const deleteEl = document.querySelector('.delete');

const screen = document.querySelector('.screen');
let output = document.querySelector('.output');

//Event Listeners for digits
numberOne.addEventListener('click', showOne);
numberTwo.addEventListener('click', showTwo);
numberThree.addEventListener('click', showThree);
numberFour.addEventListener('click', showFour);
numberFive.addEventListener('click', showFive);
numberSix.addEventListener('click', showSix);
numberSeven.addEventListener('click', showSeven);
numberEight.addEventListener('click', showEight);
numberNine.addEventListener('click', showNine);
numberZero.addEventListener('click', showZero);
dot.addEventListener('click', showDot);

//Event Listeners for operators
plus.addEventListener('click', showPlus);
minus.addEventListener('click', showMinus);
multiply.addEventListener('click', showMultiply);
divide.addEventListener('click', showDivide);
modulo.addEventListener('click', showModulo);

//Event Listener for Equal
equal.addEventListener('click', calculateResult);

//Event Listeners for Clear and Delete
clearEl.addEventListener('click', clearResult);
deleteEl.addEventListener('click', deleteValue);

output.textContent = '0';

let arr = [];
let helpArr = [];
let i = 0;

//Functions for Digits
function showOne(){
  output.textContent = ''
  screen.textContent += '1';
  arr.push('1');
  helpArr.push('1');
  cutLastValue();
}
function showTwo(){
  output.textContent = ''
  screen.textContent += '2';
  arr.push('2');
  helpArr.push('2');
  cutLastValue();
}
function showThree(){
  output.textContent = ''
  screen.textContent += '3';
  arr.push('3');
  helpArr.push('3');
  cutLastValue();
}
function showFour(){
  output.textContent = ''
  screen.textContent += '4';
  arr.push('4');
  helpArr.push('4');
  cutLastValue();
}
function showFive(){
  output.textContent = ''
  screen.textContent += '5';
  arr.push('5');
  helpArr.push('5');
  cutLastValue();
}
function showSix(){
  output.textContent = ''
  screen.textContent += '6';
  arr.push('6');
  helpArr.push('6');
  cutLastValue();
}
function showSeven(){
  output.textContent = ''
  screen.textContent += '7';
  arr.push('7');
  helpArr.push('7');
  cutLastValue();
}
function showEight(){
  output.textContent = ''
  screen.textContent += '8';
  arr.push('8');
  helpArr.push('8');
  cutLastValue();
}
function showNine(){
  output.textContent = ''
  screen.textContent += '9';
  arr.push('9');
  helpArr.push('9');
  cutLastValue();
}
function showZero(){
  output.textContent = ''
  screen.textContent += '0';
  arr.push('0');
  helpArr.push('0');
  cutLastValue();
}
function showDot(){
  output.textContent = ''
  screen.textContent += '.';
  arr.push('.');
  helpArr.push('.');
  cutLastValue();
}

//Functions for Operators
function showPlus(){
  output.textContent = '';
  screen.textContent += '+';
  arr.push('+');
  helpArr.push('+');
  cutLastValue();
}
function showMinus(){
  output.textContent = '';
  screen.textContent += '-';
  arr.push('-');
  helpArr.push('-');
  cutLastValue();
}
function showMultiply(){
  output.textContent = '';
  screen.textContent += '*';
  arr.push('*');
  helpArr.push('*');
  cutLastValue();
}
function showDivide(){
  output.textContent = '';
  screen.textContent += '/';
  arr.push('/');
  helpArr.push('/');
  cutLastValue();
}
function showModulo(){
  output.textContent = '';
  screen.textContent += '%';
  arr.push('%');
  helpArr.push('%');
  cutLastValue();
}

//Function for Equal
function calculateResult(){
  const txtVal = screen.textContent;
  const result = eval(txtVal)
  screen.textContent = result

  if(helpArr > 13){
    const joinedVal = helpArr.join('');
    const longResult = eval(joinedVal);
    screen.textContent = longResult; 
  }
}

//Functions for Clear and Delete
function clearResult(){
  screen.textContent = '';
  output.textContent = '0';
  arr = [];
  helpArr = [];
}

function deleteValue(){
   arr.pop()
   const joined = arr.join('');
   screen.textContent = joined;
   if(arr.length === 0){
    output.textContent = '0';
   }
}
  
function cutLastValue(){
  if(arr.length > 13){
    arr.shift()
    const joined = arr.join('');
    screen.textContent = joined;
  }
}

const width = document.body.clientWidth;

if(width >= 2560){
  divide.style.marginLeft = '15rem';
  divide.style.paddingLeft = '3rem';
  divide.style.paddingRight = '3rem';
}

 

