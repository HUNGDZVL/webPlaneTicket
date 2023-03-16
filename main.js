const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnClick = $("#btn--click");
const product = $("#js-product");
const btnChange = $("#change--page");

const checkIcon = $(".checkp");
const checkIcon1 = $(".checkp1");

const btnheaderShow = $("#js-home");

const btnclosePD = $("#js--closePD");

const closePd = $("#js--closepd");

const backhome = $("#js--backhome");

//show product hidden home when click two btn in home
function handleClickbtn() {
  product.classList.toggle("open");
  btnheaderShow.classList.toggle("open")

}




// event click
closePd.addEventListener("click", handleClickbtn);
backhome.addEventListener("click", handleClickbtn);
btnclosePD.addEventListener("click",handleClickbtn)
btnChange.addEventListener("click", handleClickbtn);
btnClick.addEventListener("click", handleClickbtn);


//event check icon
checkIcon.addEventListener("click", () => {
  checkIcon.classList.toggle("disablecheck");
});
checkIcon1.addEventListener("click", () => {
  checkIcon1.classList.toggle("disablecheck");
});

const itemList = $$("ul li");
console.log(itemList);
for( let i = 0; i < itemList.length; i++){
    const item = itemList[i];
    item.addEventListener("click",handleClickbtn);
}