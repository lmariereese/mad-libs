// Add click event listener on .btn-submit
//  stores string values of text inputs in variables
//  then inserts those variables into a random mad lib
//  hides the form
//  prints the random mad lib onto the page
//    should also add new button to start over with new form

// const madlibs = [
//   `A ${noun} in a ${adjective} hat ${verb} an octopus.`,
//   ``
//
// ];



const storyForm = document.querySelector('#madlib-form');
const mainContent = document.querySelector('.main-content');
const storyDisplay = document.querySelector('.story');
// const button = document.querySelector('.button');
// const submitInput = document.querySelector('input.btn-submit');



function insertWords (userInput) {
  let sentence =  `A ${userInput.userNoun} in a ${userInput.userAdjective} hat ${userInput.userVerb} an octopus.`;
  return sentence;
}
//
// function addToPage() {
//
// }


storyForm.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className == 'btn-submit') {
    let nounInput = document.querySelector('[name=noun]');
    // userInput.userNoun = nounInput.value;
    let verbInput = document.querySelector('[name=verb]');
    // userInput.userVerb = verbInput.value;
    let adjectiveInput = document.querySelector('[name=adjective]');
    // userInput.userAdjective = adjectiveInput.value;

    var userInput = {
      userNoun: nounInput.value,
      userVerb: verbInput.value,
      userAdjective: adjectiveInput.value
    };

    // Probs can move code for adding div and paragraph to a function outside the event handler
    let newP = document.createElement('p');
    newP.textContent = insertWords(userInput);
    storyDisplay.append(newP)
    nounInput.value = '';
    verbInput.value = '';
    adjectiveInput.value = '';
    // // Hides the form
    // storyForm.style.display = "none";
  }
  return false;
});

// addDiv.innerHTML = htmlString;

// TODOs:
// - redesign the layout of the page
//    - DONE add div to html in .main-content
//    - DONE change flex-direction of .main-content
//    - DONE rewrite code for appending paragraph to page
//    - make form look less shitty lol
// - collect more words from user
//    - add more input fields in html
//    - add corresponding expressions in existing template literal
//    - add corresponding properties in userInput object
// - add more mad lib stories
//    - create array of ML stories
//    - create random # generator
//    - make ML stories not repeat
