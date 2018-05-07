let tally = {
  excited: 0,
  happy: 0,
  okay: 0,
  sad: 0,
  verySad: 0
}

const results = {
  excited: {
    description: `<p>You love summer and summer loves you! Don’t stop, do you!</p><iframe width="560" height="315" src="https://www.youtube.com/embed/phXRX1p8woY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  happy: {
    description: `<p>You are the sun and summertime is your moon! You have everything you need to have fun this summer.</p><iframe width="560" height="315" src="https://www.youtube.com/embed/ll5ykbAumD4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  okay: {
    description: `<p>You need to learn to appreciate everything around you, let this song brighten everyday for you!</p><iframe width="560" height="315" src="https://www.youtube.com/embed/W_w95cjw40s?start=8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  sad: {
    description: `<p>Not in love with summer yet? Give it a chance, try something new, you may be surprised</p><iframe width="560" height="315" src="https://www.youtube.com/embed/XXyReeg_PMs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  },
  verySad: {
    description: `<p>Life’s too short! Don’t let your love of winter bring you down, grab a friend, go outside and dance!</p><iframe width="560" height="315" src="https://www.youtube.com/embed/ZgRnLM9Vi24" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
  }
}

$(function () {

  $('.question').hide();

  $('.button').on('click', function(e) {
    console.log(e);
    e.stopPropagation();
    e.preventDefault(); 

    $('.introduction').hide();
    $('.question1').fadeIn(800);
  }); // END OF BUTTON RESET
  
  $('.button1').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('.question1').hide();
    $('.question2').fadeIn(800);
  }); // END OF BUTTON RESET
 
  $('.button2').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('.question2').hide();
    $('.question3').fadeIn(800);
  }); // END OF BUTTON RESET

  $('.button3').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('.question3').hide();
    $('.question4').fadeIn(800);
  }); // END OF BUTTON RESET

  $('.button4').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('.question4').hide();
    $('.question5').fadeIn(800);
  }); // END OF BUTTON RESET

  $('.button5').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    $('.question5').hide();
    $('.question6').fadeIn(800);
  }); // END OF BUTTON RESET

  $('.reset').on('click', function (e) {
    e.preventDefault();
    console.log('reset');
    window.location.reload(true);

  }); //FORM RESET

  // FORM SUBMIT
  $('form').on('submit', function(e) {
    e.preventDefault();    

    $('.question6').hide();
    $('section').fadeIn(800);
      
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
    console.log(tallyResults);
    //This will push the results from the object tally into the empty array tallyResults
    for (let score in tally) {
      console.log(tally[score]);
      tallyResults.push([score, tally[score]]);
      console.log(tallyResults);
    }


    const winners = [];

    // To return the tallyResults in order of highest to lowest
    tallyResults.sort(function (a, b) {
      return b[1] - a[1];
      if (b[1] === a[1]) {
        winners.push();
      }
    });
    console.log(tallyResults);

    console.log(winners);
    
    // this gets the index number of the one with the most selections, the 4th index
    const finalResult = tallyResults[0];
    console.log(finalResult);
    
    const finalFinalResult = finalResult[0];
    console.log(finalFinalResult);

    // show results inside of results on html page, just the title of each
    $('.result').html(`<section class="result">${results[finalFinalResult].description}</section>`);

  }); // END OF FORM SUBMIT
  

}); // END OF DOCUMENT READY 


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

