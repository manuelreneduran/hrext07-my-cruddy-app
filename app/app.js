/*
Init app
interact with DOM
interact with localstorage

 */

var makeKey = function () {
 
  let date = new Date();
  let time = date.getTime()
  return date.toDateString() + " " + time;
}

//limits the range of value from 1-10

var limitValRange = function (num) {
  if (num > 10) {
    return 10;
  } else if (num < 1) {
    return 1;
  }
  return num;
}

$(document).ready(function () {
  //messing with c3



  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?

  //Dynamic key generator function

  /*
  INPUT: nothing
  OUTPUT: a formatted time and date

  var makeKey = function()
    //create new date object
    //format time and date
    //return formatted t and d
  */






  $('.btn-add').on('click', function (e) {
    console.log(e);
    var keyData = makeKey();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, limitValRange(valueData));
    // read from db
    
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
  // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.display-data-item', function (e) {
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function () {
    localStorage.clear();
    $('.container-data').text('');
  });

});