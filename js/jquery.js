
$(function () {
  //topmenu 메뉴명 클릭시 세부메뉴 나타남
  $('.sub-menu1 ul li').on("click", function () {
    $(this).next('.sub-menu2').slideToggle();
  })

  //화면 로드 시 MYJOB 부분은 펼쳐있고, MYJOB현황은 open2 스타일적용 
  // $('ul.step02').eq(0).show();
  $('li.step02 a').eq(0).addClass('open2');

  //첫번째 메뉴를 클릭하면 open 스타일 적용되게, open 스타일이 적용되어 있다면 그 하위메뉴 펼쳐지게
  $('li.step01 a').on("click", function () {
    $('li.step02 a').removeClass('open2');
    $(this).next().stop().slideToggle(150);
    $(this).parent('li.step01').siblings('li.step01').children('ul.step02').slideUp();
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
  $('.main-gnb > ul > li').on("click", function () {
    let index = $(this).index();
    $('.side-menu > li > ul').eq(index).slideDown(150);
    $('.side-menu > li > ul').not($('.side-menu > li > ul').eq(index)).slideUp(150);
    $('.container').addClass('active');
    $('.slide-btn').addClass('active');
  })

  //slide-btn 누르면 leftmenu 숨김처리
  $('.slide-btn').on("click", function () {
    $('.container').removeClass('active');
  })
})

