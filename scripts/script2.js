let tally = {
  excited: 0,
  happy: 0,
  okay: 0,
  sad: 0,
  verySad: 0
}

const results = {
  excited: {
    description: `You love summer and summer loves you! Don’t stop, be yourself!`,
    song: `<a href="https://www.youtube.com/watch?v=phXRX1p8woY"></a>`
  },
  happy: {
    description: `You are the sun and summertime is your moon! You have everything you need to have fun.`,
    song: `<a href="https://www.youtube.com/watch?v=ll5ykbAumD4"></a>`
  },
  okay: {
    description: `You need to learn to appreciate everything around you, let this song brighten everyday for you!`,
    song: `<a href="https://www.youtube.com/watch?v=W_w95cjw40s"></a>`
  },
  sad: {
    description: `Not in love with summer yet? Give it a chance, try something new, you may be surprised`,
    song: `<a href="https://www.youtube.com/watch?v=XXyReeg_PMs"></a>`
  },
  verySad: {
    description: `Life’s too short! Don’t let your love of winter bring you down, grab a friend, go outside and dance!`,
    song: `<a href="https://www.youtube.com/watch?v=ZgRnLM9Vi24"></a>`
  }
}

// I may need to store the options in an array to filter through at the end in case of a tie? 
const randomSelectionFromUserChoice = function (array) {
  const randomMood = Math.floor(Math.random() * array.length);
  return array[randomMood];
}  // put that variable in the bottom to submit your answer

$(function () {
  // preventDefault on submit
  $('form').on('submit', function (e) {
    e.preventDefault();

    // To return the value of what is selected for each variable
    const excited = $('input[value=excited]:checked').val();
    const happy = $('input[value=happy]:checked').val();
    const okay = $('input[value=okay]:checked').val();
    const sad = $('input[value=sad]:checked').val();
    const verySad = $('input[value=verySad]:checked').val();

    // i need to filter the above? to find the highest score or tie? put in random number and then put in tally
    const highestScore = tally.filter((value) => {
      return value.length;
    });

    // empty array for results ?
    const finalMoods = [];

    let userChoice = $('submit').find('input:radio:checked'); //and link to above selection to tally

    // if ('input[type=radio]' !== '') {
    //   // const userSelection = 
    //   // update variable above
    //   // make an empty array
    // } else {

    // What do i need to loop through and put to tally 
    for (let i = 0; i < finalMoods.length; i = i + 1) {
      console.log(finalMoods[i]);
      // input results to empty array
    }


    // on submit remember users choice and go to the next question

    // show the user their final result
    // How to embed youtube???

    // $('.result').html(); randomMood

  }); // END OF FORM SUBMIT

}); // END OF DOCUMENT READY


// Figure out how to add aProgress bar if theres time

