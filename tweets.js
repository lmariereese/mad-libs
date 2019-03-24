// When the page loads, it should:
//  - Randomly select a viral Tweet from array
//  - Generate label and input name attribute html based on the words for that specific tweet
//  - Append the form to the page

const templates = [
  {
    labelName: ['Emotion, noun', 'Verb, gerund', 'Insult, plural'],
    getTweet: function(userInput) {
      return `once I learn how to express ${userInput[0]} without ${userInput[1]} it's over for you ${userInput[2]}`;
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">once i learn how to express anger without crying it&#39;s over for you hoes</p>&mdash; Hannah Giorgis (@ethiopienne) <a href="https://twitter.com/ethiopienne/status/1004132930732609536?ref_src=twsrc%5Etfw">June 5, 2018</a></blockquote>`
  },
  {
    labelName: ['Pronoun', 'An adjective that describes an emotion (e.g. embarrassed)', 'Noun, plural'],
    getTweet: function(userInput) {
      return `please add "and ${userInput[0]} was ${userInput[1]} the whole time" when listing my ${userInput[2]}`;
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">please add “and he was depressed the whole time” when listing my accomplishments</p>&mdash; Solomon Georgio (@solomongeorgio) <a href="https://twitter.com/solomongeorgio/status/1063589501266587648?ref_src=twsrc%5Etfw">November 17, 2018</a></blockquote>`
  },
  {
    labelName: ['Adjective', 'A thing you can send', 'An activity you do (e.g. chores)'],
    getTweet: function(userInput) {
      return `Yall ever sent a ${userInput[0]} ${userInput[1]} & you so scared you start doing ${userInput[2]}`;
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Yall ever sent a risky text &amp; you so scared you start doing chores😂😭</p>&mdash; Instagram: S.grate (@sgrate_) <a href="https://twitter.com/sgrate_/status/1061074784077910016?ref_src=twsrc%5Etfw">November 10, 2018</a></blockquote>`
  },
  {
    labelName: ['Any animal', 'Something you do to hair, verb (e.g. shave)', 'A different animal'],
    getTweet: function(userInput) {
      return `every ${userInput[0]}'s haircut has an initial 24 hour period of looking like "we have to ${userInput[1]} the ${userInput[2]} in summer, otherwise he overheats"`;
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">every men&#39;s haircut has an initial 24 hour period of looking like &quot;we have to shave the dog in summer, otherwise he overheats&quot;</p>&mdash; monica heisey (@monicaheisey) <a href="https://twitter.com/monicaheisey/status/1057634697583321089?ref_src=twsrc%5Etfw">October 31, 2018</a></blockquote>`
  },
  {
    labelName: ['A thing you own', 'Another thing you own', 'A thing you want to keep secret or private'],
    getTweet: function(userInput) {
      return `Take your husband's last ${userInput[0]}. Take his first ${userInput[0]}. Take his ${userInput[1]}. Assume his identity. Hide ${userInput[2]} in a closet. You're the husband now.`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Take your husband’s last name. Take his first name. Take his social. Assume his identity. Hide the body in a closet. You’re the husband now.</p>&mdash; Danielle Grace (@danimgrace) <a href="https://twitter.com/danimgrace/status/598204691374280704?ref_src=twsrc%5Etfw">May 12, 2015</a></blockquote>`
  },
  {
    labelName: ['The name of a politician', 'The state or nationality of the politician, plural (e.g. French, Ohioans, etc.)', 'A silly phrase'],
    getTweet: function(userInput) {
      return `[${userInput[0]} hits me with a phone book] you will respect the ${userInput[1]}<br/>
me [tied to chair]: ${userInput[2]}<br/>
[${userInput[0]} hits me again] you will show respect for the ${userInput[1]}<br/>
me [bleeding from mouth]: ${userInput[2]}`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">[macron hits me with a phone book] you will respect the french<br><br>me [tied to chair]: hon hon hon<br><br>[macron hits me again] you will show respect for the people of france<br><br>me [bleeding from mouth]: hon hon hon</p>&mdash; Lauren (@LLW90210) <a href="https://twitter.com/LLW90210/status/1019967350328528896?ref_src=twsrc%5Etfw">July 19, 2018</a></blockquote>`
  },
  {
    labelName: [`Fictional or mythical animal`, `Abstract noun (e.g. time)`,`Type of institution (e.g. hospital)`],
    getTweet: function(userInput) {
      return `${userInput[0]}: wow you've captured the legendary creature, a power as old as ${userInput[1]} itself<br/>
me: it lives in a computer at the ${userInput[2]} now`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">pokemon: wow you&#39;ve captured the legendary creature, a power as old as time itself<br>me: it lives in a computer at the hospital now</p>&mdash; Keith J Carberry (@KeithJCarberry) <a href="https://twitter.com/KeithJCarberry/status/1024497158718980096?ref_src=twsrc%5Etfw">August 1, 2018</a></blockquote>`
  },
  {
    labelName: ['Name of a celebrity', 'Comma separated list of positive adjectives', 'A physical characteristic of a person, adjective'],
    getTweet: function(userInput) {
      return `${userInput[0]} had to learn the hard way what all women find out eventually: that sometimes you think a guy is ${userInput[1]} and sexy, but it turns out he's just ${userInput[2]}`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ariana had to learn the hard way what all women find out eventually: that sometimes you think a guy is amazing and funny and loving and sexy, but it turns out he’s just tall</p>&mdash; katie, but seasonal (@katefeetie) <a href="https://twitter.com/katefeetie/status/1051947379224666119?ref_src=twsrc%5Etfw">October 15, 2018</a></blockquote>`
  },
  {
    labelName: ['Your friend\'s name', 'Subject matter', 'Your name'],
    getTweet: function(userInput) {
      return `${userInput[0].toUpperCase()}: I am wiser than this man; he fancies he knows ${userInput[1]}, although he knows nothing- <br/>
${userInput[2].toUpperCase()}, ${userInput[0].toUpperCase()}'S FRIEND: fuck him up ${userInput[0]}`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">SOCRATES: I am wiser than this man; he fancies he knows something, although he knows nothing—<br>DARRYL, SOCRATES&#39; FRIEND: fuck him up socrates</p>&mdash; leon (@leyawn) <a href="https://twitter.com/leyawn/status/585859882869469184?ref_src=twsrc%5Etfw">April 8, 2015</a></blockquote>`
  },
  {
    labelName: ['Land mammals', 'A family member', 'Another land mammal, also plural'],
    getTweet: function(userInput) {
      return `I'm sorry Ms. Jackson (Oooooo)/ I am four ${userInput[0]}/ Never meant to make your ${userInput[1]} cry/ I am several ${userInput[2]} and not a guy`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m sorry Ms. Jackson (Oooooo)/ I am four eels/ Never meant to make your daughter cry/ I am several fish and not a guy</p>&mdash; joshh0))) (@JNalv) <a href="https://twitter.com/JNalv/status/304345341535338496?ref_src=twsrc%5Etfw">February 20, 2013</a></blockquote>`
  },
  {
    labelName: ['Positive physical description, adjective', 'Cartoon character', 'Insult'],
    getTweet: function(userInput) {
      return `ME: I look ${userInput[0]}<br/>
MIRRORS: you look ${userInput[0]}<br/>
STORE WINDOWS: you look ${userInput[0]}<br/>
OTHER PEOPLE: you look ${userInput[0]}<br/>
IPHONE FORWARD-FACING CAMERA: what's up you ${userInput[1]}-lookin bag of ${userInput[2]}`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">ME: I look cute<br>MIRRORS: you look cute<br>STORE WINDOWS: you look cute<br>OTHER PEOPLE: you look cute<br>IPHONE FORWARD-FACING CAMERA: what’s up you Shrek-lookin bag of bitch</p>&mdash; katie, but seasonal (@katefeetie) <a href="https://twitter.com/katefeetie/status/1005640180521406464?ref_src=twsrc%5Etfw">June 10, 2018</a></blockquote>`
  },
  {
    labelName: ['Adjective', 'Adverb', 'Year in the future'],
    getTweet: function(userInput) {
      return `"AH YES, THE ${userInput[0].toUpperCase()} YEAR IS NEARLY OVER" I SAID ${userInput[1].toUpperCase()} FOR THE FOURTH YEAR IN A ROW, UNAWARE OF WHAT FRESH HORRORS ${userInput[2].toUpperCase()} WOULD BRING`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;AH YES, THE BAD YEAR IS NEARLY OVER&quot; I SAID FOOLISHLY FOR THE FOURTH YEAR IN A ROW, UNAWARE OF WHAT FRESH HORRORS 2019 WOULD BRING</p>&mdash; NOT A WOLF (@SICKOFWOLVES) <a href="https://twitter.com/SICKOFWOLVES/status/1072260861031460865?ref_src=twsrc%5Etfw">December 10, 2018</a></blockquote>`
  },
  {
    labelName: ['A profession, noun', 'Synonym for "speaking" or "saying"', 'A location that scares you, noun'],
    getTweet: function(userInput) {
      return `ONCE AGAIN REMOVED FROM THE ${userInput[0].toUpperCase()} MEETING FOR ${userInput[1].toUpperCase()} "${userInput[2].toUpperCase()} COMES FOR US ALL" WHEN ASKED ABOUT THE TIMELINE FOR MY PROJECT'S COMPLETION`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">ONCE AGAIN REMOVED FROM THE BUSINESS MEETING FOR SAYING &quot;THE GRAVE COMES FOR US ALL&quot; WHEN ASKED ABOUT THE TIMELINE FOR MY PROJECT&#39;S COMPLETION</p>&mdash; NOT A WOLF (@SICKOFWOLVES) <a href="https://twitter.com/SICKOFWOLVES/status/1008799140317294592?ref_src=twsrc%5Etfw">June 18, 2018</a></blockquote>`
  },
  {
    labelName: ['A creature that disgusts you', 'Something you think of as easily frightened, noun', 'An adjective that describes an emotion (e.g. embarrassed)'],
    getTweet: function(userInput) {
      return `OMG I opened the door to let the dog in and there was a ${userInput[0]} on the door AND IT GOT ON MY HAND SO I SCREAMED LIKE A ${userInput[1].toUpperCase()} AND THE DOG ATE IT TO PROTECT ME. And now we are both ${userInput[2]}.`
    },
    embedOriginal: `<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">OMG I opened the door to let the dog in and there was a slug on the door AND IT GOT ON MY HAND SO I SCREAMED LIKE A TODDLER AND THE DOG ATE IT TO PROTECT ME. And now we are both embarrassed.</p>&mdash; Cat Herder (@echo262) <a href="https://twitter.com/echo262/status/1039831003773263877?ref_src=twsrc%5Etfw">September 12, 2018</a></blockquote>`
  }
];
const mainContent = document.querySelector('.main-content');
let madlibForm;
let currentMadlib;

function getRandomMadlib() {
  let random = Math.floor(Math.random() * Math.floor(templates.length));
  currentMadlib = templates[random];
}

function createForm() {
  getRandomMadlib();
  // Create the form and add id and class
  madlibForm = document.createElement('form');
  madlibForm.setAttribute('id', 'madlib-form');
  madlibForm.setAttribute('class', 'item');
  // Use currentMadlib.labelName.length to determine how many form-item divs to create
  for (let i = 0; i < currentMadlib.labelName.length; i += 1) {
    let formDiv = document.createElement('div');
    let itemLabel = document.createElement('label');
    let itemInput = document.createElement('input');
    let labelContent = currentMadlib.labelName[i];
    itemLabel.textContent = labelContent;
    formDiv.setAttribute('class', 'form-item');
    itemInput.setAttribute('type', 'text');
    // TO DO - rewrite this to be better
    if (i == 0) {
      itemInput.setAttribute('name', 'one');
      itemLabel.setAttribute('for', 'one');
    } else if (i == 1) {
      itemInput.setAttribute('name', 'two');
      itemLabel.setAttribute('for', 'two');
    } else if (i == 2) {
      itemInput.setAttribute('name', 'three');
      itemLabel.setAttribute('for', 'three');
    } else {
      itemInput.setAttribute('name', 'four');
      itemLabel.setAttribute('for', 'four');
    };
    formDiv.append(itemLabel);
    formDiv.append(itemInput);
    madlibForm.append(formDiv);
  }
  // create button div and give it classes, then create button and give it a class and text content
  let buttonDiv = document.createElement('div');
  let btnSubmit = document.createElement('button');
  buttonDiv.setAttribute('class', 'form-item button');
  btnSubmit.setAttribute('class', 'btn-submit');
  btnSubmit.textContent = "Submit";
  // append the button to the button div, append the button div to the form, and then append the form to .main-content
  buttonDiv.append(btnSubmit);
  madlibForm.append(buttonDiv);
  // Event listener for submit button
  madlibForm.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.className == 'btn-submit') {
      let inputOne = document.querySelector('[name=one]');
      let inputTwo = document.querySelector('[name=two]');
      let inputThree = document.querySelector('[name=three]');
      let userInput = [
        inputOne.value.toLowerCase(),
        inputTwo.value.toLowerCase(),
        inputThree.value.toLowerCase()
      ];
      // create elements
      let resultsWrapperDiv = document.createElement('div');
      let ogTweetWrapperDiv = document.createElement('div');
      let resultsTweetDiv = document.createElement('div');
      let originalTweetDiv = document.createElement('div');
      let resultsTweetHeaderDiv = document.createElement('div');
      let avatar = document.createElement('img');
      let authorDiv = document.createElement('div');
      let displayName = document.createElement('span');
      let displayUsername = document.createElement('span');
      let twitterIcon = document.createElement('div');
      let newP = document.createElement('p');
      let resultsH2 = document.createElement('h2');
      let originalH2 = document.createElement('h2');
      let playAgainBtn = document.createElement('button');
      let playAgainDiv = document.createElement('div');
      resultsWrapperDiv.setAttribute('class', 'tweets');
      ogTweetWrapperDiv.setAttribute('class', 'tweets');
      resultsTweetDiv.setAttribute('class', 'results-tweet-div');
      originalTweetDiv.setAttribute('class', 'original-tweet-div');
      // Tweet header for results tweet: avatar div, author div w/two spans, tweet brand div
      resultsTweetHeaderDiv.setAttribute('class', 'results-tweet-header');
      avatar.setAttribute('src', 'avatar.png');
      avatar.setAttribute('class', 'avatar');
      authorDiv.setAttribute('class', 'author');
      displayName.setAttribute('class', 'results-name author-items');
      displayUsername.setAttribute('class', 'display-username author-items');
      displayUsername.textContent = "@viraltweetmadlibs";
      twitterIcon.setAttribute('class', 'twitter-icon');
      newP.setAttribute('class', 'madlib-tweet');
      displayName.textContent = 'you, a genius';
      newP.innerHTML = currentMadlib.getTweet(userInput);
      //code to append stuff from above!!!!
      resultsTweetHeaderDiv.append(avatar);
      authorDiv.append(displayName);
      authorDiv.append(displayUsername);
      resultsTweetHeaderDiv.append(authorDiv);
      resultsTweetHeaderDiv.append(twitterIcon);
      resultsH2.textContent = "Your Results";
      resultsWrapperDiv.append(resultsH2);
      resultsTweetDiv.append(resultsTweetHeaderDiv);
      resultsTweetDiv.append(newP);
      resultsWrapperDiv.append(resultsTweetDiv);
      mainContent.append(resultsWrapperDiv);
      originalH2.textContent = "Original Tweet";
      ogTweetWrapperDiv.append(originalH2);
      originalTweetDiv.innerHTML = currentMadlib.embedOriginal;
      ogTweetWrapperDiv.append(originalTweetDiv);
      mainContent.append(ogTweetWrapperDiv);
      twttr.widgets.load();
      // Remove the form, then create a new button that says "Play Again", and append that button to the page.
      mainContent.removeChild(madlibForm);
      playAgainDiv.setAttribute('class', 'play-again');
      playAgainBtn.setAttribute('class', 'play-again-btn');
      playAgainBtn.textContent = "Play Again";
      playAgainDiv.append(playAgainBtn);
      mainContent.append(playAgainDiv);
    };
  });
  mainContent.prepend(madlibForm);
}

createForm();

twttr.ready((twttr) => {
  twttr.events.bind('loaded', (event) => {

  });
});

// create an event listener for a button that will be created in above event listener
mainContent.addEventListener('click', (event) => {
  // event.preventDefault();
  if (event.target.className == 'play-again-btn'){
    // Remove "Play Again" button and tweet divs
    let tweetContent = document.querySelectorAll('.tweets');
    let playAgain = document.querySelector('.play-again')
    mainContent.removeChild(tweetContent[0]);
    mainContent.removeChild(tweetContent[1]);
    mainContent.removeChild(playAgain);
    // Generate a new form which appends the form to the page as a child of mainContent
    createForm();
  };
});


//if twitter lets you add event listener for when tweet has loaded, i could hide tweet div until it's loaded
//https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/javascript-api

//add animation in css, that's best way, b/c css allows browser to optimize animation. uses graphics card (gpu) instead of cpu (which is bad at it)
