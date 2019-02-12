/*
Init app
interact with DOM
interact with localstorage

 */

 //generates dynamic key so no value is ever overwritten


var makeKey = function () {
  var date = new Date();
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

//generates dynamic date-range for x-axis -- today's date + 1 week;

var renderRangeObj = function() {
  let date = new Date();
  let today = date.getTime();
  let month = date.getMonth() + 1;
  let day = date.getDate(today) ;

  let oneDay = 86400000;

  let returnDates = {};
  let i = 0;

  while(i < 7) {
  let newDate = new Date(date.getTime() + oneDay);
  let tomorrowDay = newDate.getDate();
  let tomorrowMonth = newDate.getMonth() + 1;

  returnDates[tomorrowDay] = tomorrowMonth;
  
  oneDay += 86400000;
  i++;
  }

  return returnDates;
}

//creates the actual array that c3 accepts
var createXRange = function(range) {
  var returnDates = [];
  for (var prop in range) {
    returnDates.push(parseInt(prop));
  }

  return returnDates;
}

var xRange = createXRange(renderRangeObj())
console.log(xRange[0])
//C3 stuff

var graph = c3.generate({
  bindto: '.container-graph',
  data: {
    columns: [
     ["dates", 5, 4, 6, 7, 3, 6, 5]
    ],
  },
  axis: {
    y: {
      padding: {top: 3},
      max: 10,
      min: 1,
    },
    x: {
      max: 10,
      min: 1
    }
  }
});

$(document).ready(function () {
  //messing with c3



  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


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