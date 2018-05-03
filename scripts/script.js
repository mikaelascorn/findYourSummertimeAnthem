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

    // I may need to store the options in an tally to filter through at the end in case of a tie? 
  const randomSelectionFromUserChoice = function (array) {
  const randomMood = Math.floor(Math.random() * array.length);
  return array[randomMood];
  }  // put that variable in the bottom to submit your answer
  
$(function () {
// preventDefault on submit
  $('form').on('submit', function(e) {
    e.preventDefault();
        
    // Gives the user answer to question
    let question1 = $('input[name=question1]:checked').val();
    let question2 = $('input[name=question2]:checked').val();
    let question3 = $('input[name=question3]:checked').val();
    let question4 = $('input[name=question4]:checked').val();
    let question5 = $('input[name=question5]:checked').val();
    let question6 = $('input[name=question6]:checked').val();
    console.log(question1, question2, question3, question4, question5, question6);

    question1 = tally[question1] + 1;
    question2 = tally[question2] + 1;
    question3 = tally[question3] + 1;
    question4 = tally[question4] + 1;
    question5 = tally[question5] + 1;
    question6 = tally[question6] + 1;
    console.log(question1);

    // for (let i = 0; i < choice.length; i = i + 1) {
    //   // console.log(choice[i]);
    //   const storedChoice = choice[i];
    //   if (storedChoice.price === price) {
    //     // console.log('price matches');
    //     // push results to new array
    //     finalOptions.push(storedChoice);
    //     // console.log(finalOptions);
    //   }
    // }

    // for (var i in question1) {
    //   question1.push(tally[i]);
    // }

  // show the user their final result
  // How to embed youtube???
  // $('.result').append(); randomMood

    // form submit checks the highest tally

  }); // END OF FORM SUBMIT

  $('button').on('click', function(e){
    e.preventDefault();
    
    $('.introduction').on('click').fadeOut();
    $('.question1').fadeIn();
    $('.question2').on('click').fadeOut();
    $('.question3').fadeIn();
    console.log(form);
    console.log(form);
    console.log('click');
   
  }); //PREVENT DEFAULT ON NEXT BUTTON 

  console.log(tally);

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

