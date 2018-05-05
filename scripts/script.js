let tally = {
  excited: 0,
  happy: 0,
  okay: 0,
  sad: 0,
  verySad: 0
}
console.log(tally);

const results = {
  excited: {
    description: `You love summer and summer loves you! Don’t stop, be yourself! <iframe width="560" height="315" src="https://www.youtube.com/embed/phXRX1p8woY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  happy: {
    description: `You are the sun and summertime is your moon! You have everything you need to have fun. <iframe width="560" height="315" src="https://www.youtube.com/embed/ll5ykbAumD4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  okay: {
    description: `You need to learn to appreciate everything around you, let this song brighten everyday for you! <iframe width="560" height="315" src="https://www.youtube.com/embed/W_w95cjw40s?start=8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  sad: {
    description: `Not in love with summer yet? Give it a chance, try something new, you may be surprised <iframe width="560" height="315" src="https://www.youtube.com/embed/XXyReeg_PMs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  verySad: {
    description: `Life’s too short! Don’t let your love of winter bring you down, grab a friend, go outside and dance! <iframe width="560" height="315" src="https://www.youtube.com/embed/ZgRnLM9Vi24" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
  }
}

$(function () {
 
  $('button').on('click', function(e) {
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  }); // END OF BUTTON RESET

// PreventDefault on submit
  $('form').on('submit', function(e) {
    e.preventDefault();    
      
    // Gives the user answer to question
    question1 = $('input[name=question1]:checked').val();
    question2 = $('input[name=question2]:checked').val();
    question3 = $('input[name=question3]:checked').val();
    question4 = $('input[name=question4]:checked').val();
    question5 = $('input[name=question5]:checked').val();
    question6 = $('input[name=question6]:checked').val();
    // console.log(question1, question2, question3, question4, question5, question6);

    // for each question, we want the val of the user input value
    // its in an array because we needed to put it through a for loop and use .length
    let question = [
      $('input[name=question1]:checked').val(),
      $('input[name=question2]:checked').val(),
      $('input[name=question3]:checked').val(),
      $('input[name=question4]:checked').val(),
      $('input[name=question5]:checked').val(),
      $('input[name=question6]:checked').val(),
    ]

    //this is to loop through the number of questions and updates the tally
    for (let i = 0; i < question.length; i++) {
     if (question[i] === 'excited') {    
        tally.excited++;
      }    
     else if (question[i] === 'happy') 
      {
        tally.happy++;
      }
     else if (question[i] === 'okay') 
     {
        tally.okay++;
     }
     else if (question[i] === 'sad') {
        tally.sad++;
     }
     else if (question[i] === 'verySad') {
        tally.verySad++;
      }
    }

    const tallyResults = [];
    //This will push the results from the object tally into the empty array tallyResults
    for (let score in tally) {
      console.log(tally[score]);
      tallyResults.push([score, tally[score]]);
      console.log(tallyResults);
    }
    
    // To return the tallyResults in order of highest to lowest
    tallyResults.sort(function (a, b) {
      return b[1] - a[1];
    });
    console.log(tallyResults);

    // this gets the index number of the one with the most selections, the 4th index
    const finalResult = tallyResults[0];

    //console.log(finalResult);
    const finalFinalResult = finalResult[0];
    // show results inside of results on html page, just the title of each
    // $('section').append(${ tallyResults });
    $('.result').html(`<section class="result">${results[finalFinalResult].description}</section>`);

  }); // END OF FORM SUBMIT

}); // END OF DOCUMENT READY FORM SUBMIT


  //  < !--TWITTER WIDGET -->
  window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "twitter-wjs"));

