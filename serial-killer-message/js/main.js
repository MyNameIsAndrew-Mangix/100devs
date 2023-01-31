document.querySelector('#yell').addEventListener('click', run);

var alphabetMap = new Map();

alphabetMap.set('a', 'https://www.artiestick.com/toons/alphabet/ralph/arg-a-5O-tRyA.gif');
alphabetMap.set('b', 'https://www.artiestick.com/toons/alphabet/ralph/arg-B-5O-tganz2x4vs-stolen.gif');
alphabetMap.set('c', 'https://www.artiestick.com/toons/alphabet/ralph/arg-c-50-trans-url.gif');
alphabetMap.set('d', 'https://www.artiestick.com/toons/alphabet/ralph/arg-d-50-trans.gif');
alphabetMap.set('e', 'https://www.artiestick.com/toons/alphabet/ralph/arg-e-5O-trans-killing-our-serverload.gif');
alphabetMap.set('f', 'https://www.artiestick.com/toons/alphabet/ralph/arg-f-5O-tr.gif');
alphabetMap.set('g', 'https://www.artiestick.com/toons/alphabet/ralph/arg-g-50-trans.gif');
alphabetMap.set('h', 'https://www.artiestick.com/toons/alphabet/ralph/arg-h-5O-tr.gif');
alphabetMap.set('i', 'https://www.artiestick.com/toons/alphabet/ralph/arg-i-50-trans.gif');
alphabetMap.set('j', 'https://www.artiestick.com/toons/alphabet/ralph/arg-j-50-trans.gif');
alphabetMap.set('k', 'https://www.artiestick.com/toons/alphabet/ralph/arg-k-50-trans.gif');
alphabetMap.set('l', 'https://www.artiestick.com/toons/alphabet/ralph/arg-l-50-trans.gif');
alphabetMap.set('m', 'https://www.artiestick.com/toons/alphabet/ralph/arg-m-50-trans.gif');
alphabetMap.set('n', 'https://www.artiestick.com/toons/alphabet/ralph/arg-n-50-trans.gif');
alphabetMap.set('o', 'https://www.artiestick.com/toons/alphabet/ralph/arg-o-5O-tRr-a-pl0ase-ns.gif');
alphabetMap.set('p', 'https://www.artiestick.com/toons/alphabet/ralph/arg-p-50-trans.gif');
alphabetMap.set('q', 'https://www.artiestick.com/toons/alphabet/ralph/arg-q-50-4frame-trans.gif');
alphabetMap.set('r', 'https://www.artiestick.com/toons/alphabet/ralph/arg-r-50-trans.gif');
alphabetMap.set('s', 'https://www.artiestick.com/toons/alphabet/ralph/arg-s-5O-tr.gif');
alphabetMap.set('t', 'https://www.artiestick.com/toons/alphabet/ralph/arg-t-5O-tr.gif');
alphabetMap.set('u', 'https://www.artiestick.com/toons/alphabet/ralph/arg-u-5O-tr.gif');
alphabetMap.set('v', 'https://www.artiestick.com/toons/alphabet/ralph/arg-v-50-trans.gif');
alphabetMap.set('w', 'https://www.artiestick.com/toons/alphabet/ralph/arg-w-50-trans.gif');
alphabetMap.set('x', 'https://www.artiestick.com/toons/alphabet/ralph/arg-x-50-trans.gif');
alphabetMap.set('y', 'https://www.artiestick.com/toons/alphabet/ralph/arg-y-50-trans.gif');
alphabetMap.set('z', 'https://www.artiestick.com/toons/alphabet/ralph/arg-z-50-trans.gif');


function run() {
  const message = document.querySelector('#message').value.toLowerCase();
  const container = document.querySelector('#placeToThreaten');
  
  container.hasChildNodes() ? replaceMessage(container, message) : createMessage(container, message);
}

function createMessage(container, message) {
  let newContent;

  for (let i = 0; i < message.length; i++) {
    const c = message[i];
    {
      if (c === ' ')
        changeWhitespace(container, message[i], false);
      else
      {
        newContent = document.createElement("img");
        newContent.src = alphabetMap.get(c);
        container.appendChild(newContent);
      }
    }
  }
}

function replaceMessage(container, message) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createMessage(container, message);
}


function changeWhitespace(container, c, hasChildren) {
  const whitespace = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0');
    if (!hasChildren) {
      container.appendChild(whitespace);
    }
    else {
      container.replaceChild(whitespace, c);
    }
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
