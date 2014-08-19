console.log('run scene 3');

/** VARIABLES **/
var code;

//////////////////////////////////////////////////////////////////////
/** RUN ON DOCUMENT READY **/
$(document).ready(function() {

  /** Events **/
  $('.container').on('click', '#lock', function (event) {
    event.preventDefault();
    console.log('click lock start');
    $(this).siblings('form').fadeIn();
  });

  $('.container').on('click', '#submit', function (event) {
    event.preventDefault();
    console.log('submit start');
    code = $(this).siblings('#enterNum').val().toString();
    console.log(code);
    if (code === '7257') {
      stop = true;
      Tick();
      alert('You\'ve made it out alive, with a score of ' + simpleStorage.get('finalScore') + '!!  See if you can best your score in another run!!');
      stop = false;
      window.location.href = 'scene1.html';
    }
    else {
      alert('WRONG. YOU ARE STUCK HERE FOREVER!');
      console.log('back to level 1');
      window.location.href = 'index.html';
    }
  });

});
