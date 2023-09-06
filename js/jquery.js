//leftmenu accordion
$(function () {
  //my job 부분은 보이게
  $('ul.step02').eq(0).show();

  $('li.step01').on("click", function () {
    $(this).children('ul.step02').slideToggle(150);
    $(this).children('a').toggleClass('open');
    // $(!this).children('ul.step02').hide();
    // $(this).parent('.step01').slideUp();
    // $(this).next().stop().slideToggle();
  })
  $('li.step02').on("click", function () {
    $(this).children('ul.step03').slideToggle();
  })

  let sec_height = $('.tableFrame .tableSection').height;
  let td_height = $('.tableFrame .tableSection .td').height;


  $('.tableFrame .tableSection .th').css('height', sec_height + 'px');

  //대메뉴 클릭시 왼쪽 사이드 메뉴 하위메뉴 toggle
  $('.main-gnb ul li:nth-of-type(1) > a').on("click", function () {
    $('.step01.myjob').children('ul.step02').slideToggle(150);
    $('.myjob > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(2)').on("click", function () {
    $('.step01.dev-request').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-request > a').toggleClass('open');
    //$('.side-menu').not($('.product-info > a')).removeClass('open');
  })
  $('.main-gnb ul li:nth-of-type(3)').on("click", function () {
    $('.step01.dev-quality').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-quality > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(4)').on("click", function () {
    $('.step01.open-issue').children('ul.step02').slideToggle(150);
    $('.side-menu .open-issue > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(5)').on("click", function () {
    $('.step01.past-quality').children('ul.step02').slideToggle(150);
    $('.side-menu .past-quality > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(6)').on("click", function () {
    $('.step01.change-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .change-manage > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(7)').on("click", function () {
    $('.step01.review-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .review-manage > a').toggleClass('open');
  })
  $('.main-gnb ul li:nth-of-type(8)').on("click", function () {
    $('.step01.dev-standard-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-standard-manage > a').toggleClass('open');
  })
})

