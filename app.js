
$(document).ready(function () {
  //hides all workflow divs
  let divs = document.getElementsByClassName("container-main");
  $(divs).hide()

//changes displayed slider value when slider is moved
  $('.slider-emotion').on("change mousemove", function() {
    $(this).next().html($(this).val() + "%");
  });

//initializes workflow
  $(".btn-start").on("click", function() {
    $(".summarize").show();
  })

  //controls div shuffling system and updateNextSummary()
  var keyCounter = 0;

//controls back and next buttons to hide and show divs as well as update next summary
  $(".btn-next").on("click", function(e) {
    let parent = e.currentTarget.parentElement;
    let next = $(parent).next();

    let val = getInputVal(parent);
    localStorage.setItem(keyCounter, val);
    let summaryC = $(next).find(".container-summary");
    $(summaryC).html(updateNextSummary());

    keyCounter++;

    $(next).show();
    $(parent).hide();
  })

  $(".btn-back").on("click", function(e) {
    let parent = e.currentTarget.parentElement;
    let prev = $(parent).prev();
    $(parent).hide();
    $(prev).show();
    keyCounter--;
  })

//gets input value from parent div
  let getInputVal = function(ele) {
    let parentInput = $(ele).find(".input");
    if (parentInput.length !== 0) {
      return parentInput[0].value;
    }
  }


//gets local storage value
  let updateNextSummary = function() {
    let returnDiv = [];
    let summary = ["Summary", "Initial Feelings", "Main Thought", "Thought Distortions", "Modified Thoughts"];

    for (var i = 0; i <= keyCounter; i++) {
      returnDiv.push("<div><span>" + summary[i] + ": " + localStorage.getItem(i) + "</span></div></br>")
    }
    return returnDiv;
  }


});




//getter setter stuff
/*
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

  var makeKey = function () {
  var date = new Date();
  let time = date.getTime()
  return date.toDateString() + " " + time;
}
  */