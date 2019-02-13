
$(document).ready(function () {
  //hides all workflow divs
  let divs = document.getElementsByClassName("container-main");
  console.log(divs);
  $(divs).hide()

//changes displayed slider value when slider is moved
  $('.slider-emotion').on("change mousemove", function() {
    $(this).next().html($(this).val() + "%");
  });

//initializes workflow
  $(".btn-start").on("click", function() {
    $(".summarize").show();
  })

//controls back and next buttons to hide and show divs
  $(".btn-next").on("click", function(e) {
    let parent = e.currentTarget.parentElement;
    let next = $(parent).next();

    let val = getInputVal(parent);
    let key = getInputKey(parent);
    localStorage.setItem(key, val);

    $(next).show();
    $(parent).hide();
  })

  $(".btn-back").on("click", function(e) {
    let parent = e.currentTarget.parentElement;
    let prev = $(parent).prev();
    $(parent).hide();
    $(prev).show();
  })

//gets input value from parent div
  let getInputVal = function(ele) {
    let parentInput = $(ele).find(".input");
    if (parentInput.length !== 0) {
      return parentInput[0].value;
    }
  }

//gets input key name
  let getInputKey = function(ele) {
    let key = $(ele).find(".key");
    return key[0].textContent;
  }




$()
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