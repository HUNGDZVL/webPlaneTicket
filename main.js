const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnClick = $("#btn--click");
const product = $("#js-product");
const btnChange = $("#change--page");

const checkIcon = $(".checkp");
const checkIcon1 = $(".checkp1");

function handleClickbtn() {
  product.classList.toggle("open");
}
btnChange.addEventListener("click", handleClickbtn);
btnClick.addEventListener("click", handleClickbtn);

checkIcon.addEventListener("click", () => {
  checkIcon.classList.toggle("disablecheck");
});
checkIcon1.addEventListener("click", () => {
  checkIcon1.classList.toggle("disablecheck");
});

const itemClick = $$(".fix--menu li");
console.log(itemClick);
for (var i of itemClick) {
  console.log(i);
  i.onclick = function () {
    console.log('test');
  };
}
