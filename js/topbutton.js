const btt = document.querySelector("#back-to-top");
let scrollAmount;

window.addEventListener("scroll", function () {
  scrollAmount = this.scrollY;
  if (scrollAmount > scrollAmount / 2) {
    btt.classList.add("visible");
  } else {
    btt.classList.remove("visible");
  }
});
btt.addEventListener("click", function (e) {
  e.preventDefault();
  // document.querySelector(btt.getAttribute("href"))
  // .scrollIntoView({ behavior: "smooth" });

  window.scrollTo({ top: 0, behavior: "smooth" });
});



// 이미지 클릭시 아래로
$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});



