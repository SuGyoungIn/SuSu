//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length + 1;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function () {


  /*****************
   BUILD THE SLIDER
  *****************/
  //set width to be 'x' times the number of slides
  $('#slider').width(sliderWidth * totalSlides);

  //next slide  
  $('#next').click(function () {
    slideRight();
  });

  //previous slide
  $('#previous').click(function () {
    slideLeft();
  });



  /*************************
   //*> OPTIONAL SETTINGS
  ************************/

  //for each slide 
  $.each($('#slider-wrap ul li'), function () {

    //create a pagination
    var li = document.createElement('li');
    $('#pagination-wrap ul').append(li);
  });

  //counter
  countSlides();

  //pagination
  pagination();




}); //DOCUMENT READY



/***********
 SLIDE LEFT
************/
function slideLeft() {
  pos--;
  if (pos == -1) {
    pos = totalSlides - 2;
  }
  $('#slider').css('left', -(sliderWidth * pos));

  //*> optional
  countSlides();
  pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight() {
  pos++;
  if (pos == totalSlides - 1) {
    pos = 0;
  }
  $('#slider').css('left', -(sliderWidth * pos));

  //*> optional 
  countSlides();
  pagination();
}


/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides() {
  $('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}


$('#thumbnail1').click(function () {
  $('#slider').css('left', sliderWidth * 0);
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq(0)').addClass('active');
})

$('#thumbnail2').click(function () {
  $('#slider').css('left', -(sliderWidth * 1));
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq(1)').addClass('active');
})

$('#thumbnail3').click(function () {
  $('#slider').css('left', -(sliderWidth * 2));
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq(2)').addClass('active');
})

$('#thumbnail4').click(function () {
  $('#slider').css('left', -(sliderWidth * 3));
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq(3)').addClass('active');
})

$(function () {
  $('#send').click(function () {


    let new_comment = $('#comment_box').val();
    console.log(new_comment);

    if(new_comment == "") {
      return null;
    }

    let bubble = $('#comment').clone(true);
    bubble.removeProp('id');

    bubble.find('.comments').empty();
    bubble.find('.comments').text(new_comment);

    $('.comment-list').append(bubble);

    $('#comment_box').val("");

    count();
  })

  $('#comment_box').keypress(function (e) {
    console.log(e.keyCode);

    if (e.keyCode == 13) {
      $('#send').click();
    }
  })


})

function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;
}

$('#bookmark_btn').click(function(){
  $('#bookmark_btn').toggleClass('active-btn');
  $('#bookmark_btn > p').toggleClass('active-btn-text')

  if($('#bookmark_btn').hasClass('active-btn')){
    $('#bookmark').empty();
    $('#bookmark').html('<i class="fas fa-bookmark"></i>')
  } else {
    $('#bookmark').empty();
    $('#bookmark').html('<i class="far fa-bookmark"></i>')
  }
})

$('#heart_btn').click(function(){
  $('#heart_btn').toggleClass('active-btn');
  $('#heart_btn > p').toggleClass('active-btn-text')

  if($('#heart_btn').hasClass('active-btn')){
    $('#heart').empty();
    $('#heart').html('<i class="fas fa-heart"></i>')
  } else {
    $('#heart').empty();
    $('#heart').html('<i class="far fa-heart"></i>')
  }
})