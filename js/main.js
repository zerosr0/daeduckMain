const gnbLi = document.querySelectorAll('.basicMenu > ul > li')
const gnbMenu2 = document.querySelectorAll('.basicMenu > ul > .subMenu2')

const snbBtn = document.querySelector(".logoMenu .category");
const snbMenu = document.querySelector("#pWrapSnb");
const iframe = document.querySelector('main .container');

const listTitle = document.querySelector('.listTitle');
const sec = document.querySelector('section');

//topmenu (header gnb) mobile 버전일 때 
//submenu 누르면 하위메뉴 펼쳐지게 설정
gnbLi.forEach((el, idx) => {
  el.addEventListener(("click"), (e) => {
    e.preventDefault();
    gnbLi[idx].classList.toggle('active');
    gnbMenu2[idx].classList.toggle('active');
  })
})

// device size 1200px 이상 : 카테고리버튼이 생성되지 않고 sidemenu 가 항상 표시
// device size 1200px 이하 : 카테고리버튼 생성, 버튼 누를 때 마다 sidemenu가 toggle 됨

// 1200px 이하 카테고리 버튼 클릭 시 leftmenu toggle
snbBtn.onclick = (e) => {
  e.preventDefault();
  snbBtn.classList.toggle('active');
  snbMenu.classList.toggle('active');
  //sidemenu가 활성화 되어 있으면 main 태그의 container부분이 왼쪽으로 밀려나게,
  //그렇지 않으면 화면에 꽉 차게 설정 
  snbMenu.classList.contains('active') ? iframe.classList.add('active') : iframe.classList.remove('active');
};

//1200px이상이면 leftmenu 다시 나타남
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    snbBtn.classList.remove('active');
    snbMenu.classList.remove('active');
    iframe.classList.remove('active');
  }
})

window.onload = () => {
  sec.style.paddingTop = `${listTitle.clientHeight}px`;
}
window.addEventListener("resize", () => {
  sec.style.paddingTop = `${listTitle.clientHeight}px`;
})

