//leftmenu accordion
$(function () {
  //화면 로드 시 MYJOB 부분은 펼쳐있고, MYJOB현황은 open2 스타일적용 
  $('ul.step02').eq(0).show();
  $('li.step02 a').eq(0).addClass('open2');

  //첫번째 메뉴를 클릭하면 open 스타일 적용되게, open 스타일이 적용되어 있다면 그 하위메뉴 펼쳐지게
  $('li.step01 a').on("click", function () {
    $('li.step02 a').removeClass('open2');
    $(this).next().stop().slideToggle(150);
    $(this).parent('li.step01').siblings('li.step01').children('ul.step02').slideUp(150);
    $(this).addClass('open');
    $(this).parent('li.step01').siblings('li.step01').children('a').removeClass('open');
  })

  //두번째 메뉴를 클릭하면 open2 스타일 적용되고 그 하위메뉴 펼쳐지게
  $('li.step02 a').on("click", function () {
    $('li.step03 a').removeClass('open3');
    $('li.step02 a').eq(0).removeClass('open2');
    $(this).parent('li.step02').siblings('li.step02').children('ul.step03').slideUp(150);
    $(this).addClass('open2');
    $(this).parent('li.step02').siblings('li.step02').children('a').removeClass('open2');
  })

  //세번째 메뉴를 클릭하면 open3 스타일 적용
  $('li.step03 a').on("click", function () {
    $(this).addClass('open3');
    $(this).parent('li.step03').siblings('li.step03').children('a').removeClass('open3');
  })

  let sec_height = $('.tableFrame .tableSection').height;
  let td_height = $('.tableFrame .tableSection .td').height;


  $('.tableFrame .tableSection .th').css('height', sec_height + 'px');

  //대메뉴 클릭시 왼쪽 사이드 메뉴 하위메뉴 toggle
  $('.main-gnb ul li:nth-of-type(1) > a').on("click", function () {
    $('.step01.myjob').children('ul.step02').slideToggle(150);
    $('.myjob > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(2)').on("click", function () {
    $('.step01.dev-request').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-request > a').toggleClass('open');
    $('.container').toggleClass('active');
    //$('.side-menu').not($('.product-info > a')).removeClass('open');
  })
  $('.main-gnb ul li:nth-of-type(3)').on("click", function () {
    $('.step01.dev-quality').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-quality > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(4)').on("click", function () {
    $('.step01.open-issue').children('ul.step02').slideToggle(150);
    $('.side-menu .open-issue > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(5)').on("click", function () {
    $('.step01.past-quality').children('ul.step02').slideToggle(150);
    $('.side-menu .past-quality > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(6)').on("click", function () {
    $('.step01.change-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .change-manage > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(7)').on("click", function () {
    $('.step01.review-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .review-manage > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
  $('.main-gnb ul li:nth-of-type(8)').on("click", function () {
    $('.step01.dev-standard-manage').children('ul.step02').slideToggle(150);
    $('.side-menu .dev-standard-manage > a').toggleClass('open');
    $('.container').toggleClass('active');
  })
})

