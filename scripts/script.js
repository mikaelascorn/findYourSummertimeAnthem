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
  // put that variable in the bottom to submit your answer
}

$(function() {
  console.log('hello');
  // preventDefault on submit
  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log(e);
    console.log('submitted');

    // To return the value of what is selected for each variable
    const excited = $('input[value=excited]:checked').val();
    const happy = $('input[value=happy]:checked').val();
    const okay = $('input[value=okay]:checked').val();
    const sad = $('input[value=sad]:checked').val();
    const verySad = $('input[value=verySad]:checked').val();

    // To make sure one option is selected
    if ('input[type=radio]' !== '') {
      const listItem = `<li>
          <i class="fa fa-square"></i>
          ${toDoItem}
          <button>Remove</button>
          </li>`;
      // This will do a reset of value in the text
      console.log(listItem);

      // We want to append to the page
      $('ul').append(listItem);
    }
      
    // if there are duplicates go through and select a random one
    
    // on submit remember users choice and go to the next question

    // Link the value on selected with the tally

    // show the user their final result
    // How to embed youtube???
    // $('.result').html();

  }); // END OF FORM SUBMIT

}); // END OF DOCUMENT READY

// Figure out how to add aProgress bar if theres time