//Information
let sexArray = ["男生","女生"];
let gradeArray = ["大一","大二","大三","大四"];
let xyArray = ["计算机学院","机械学院","数理与土木工程学院","会金学院","工业自动化学院","商学院","艺院"];

//some selector
let sexResbar = document.querySelector("#sex");
let sexUl = document.querySelector("#sexlist");
let njResBar = document.querySelector("#grade");
let njUl = document.querySelector("#gradelist");
let xyResBar = document.querySelector("#xy");
let xyUl = document.querySelector("#xylist");

let disagree = document.querySelector("#disagree");
let agree = document.querySelector("#agree")
let lable = document.querySelector("#join");

//get Style
function getStyle(el,StyleName) {
    if (window.getComputedStyle){
        return window.getComputedStyle(el)[StyleName];
    }else {
        return el.currentStyle[StyleName];
    }
}

//getHeight
function getHeight(el) {
    var elHstr_px = getStyle(el,"height");
    var elHstr = elHstr_px.substr(0,elHstr_px.length-2);
    var elH = parseFloat(elHstr);
    return elH;
}


//show info
var infoBox = document.querySelector(".info");
var img = document.querySelector("#headimg");
var head = document.querySelector("header");
head.style.height=getHeight(img)+"px";
infoBox.style.height=getHeight(img)+"px";
$(head).click(function () {
    if($(infoBox).is(":hidden")){
        $(infoBox).slideDown(400);
    }else {
        $(infoBox).slideUp(400);
    }
});

//if wechat and phone-number is same
let opt = document.querySelector("#optional");
let showbtn = document.querySelector(".showWechat");


    $(showbtn).click(function () {

        if($(opt).is(":hidden")){
            showbtn.innerHTML="同步";
            $(opt).slideDown(200);
        }else {
            $(opt).slideUp(200);
            showbtn.innerHTML="不同步";
        }
    });




//add li to ul
function setList(dataArr,ul,cl) {
    for (var i=0;i<dataArr.length;i++){
        var item = document.createElement("li");
        item.value = String(i);
        item.className = "item"+cl;
        item.textContent = dataArr[i];
        ul.appendChild(item);
    }
}
setList(sexArray,sexUl,"Sex");
setList(xyArray,xyUl,"Xy");
setList(gradeArray,njUl,"Nj");
//show select-list
$("#xy").click(function () {
    $("#xylist").slideDown(300);
    this.setAttribute("class","checking");
});

$("#sex").click(function () {
    $("#sexlist").slideDown(300);
    this.setAttribute("class","checking");
});

$("#grade").click(function () {
    $("#gradelist").slideDown(300);
    this.setAttribute("class","checking");
});
//click li result-bar change value
function resBarChange(liClass,resBar,ul) {
    var liGroup = document.getElementsByClassName(liClass);
    for (var t=0;t<liGroup.length;t++){
        ClickMe(liGroup[t],liGroup,resBar,ul);
    }
}

function ClickMe(liItem,liGroup,resBar,ul) {
    liItem.onclick = function () {
        var val = this.innerHTML;
        resBar.innerHTML = val;
        resBar.value = String(val);
        resBar.removeAttribute("class","checking");
        for (var j=0;j<liGroup.length;j++){
            if(liGroup[j].getAttribute("class")){
                liGroup[j].removeAttribute("class","item");
            }
        }
        liItem.setAttribute("class","clickitem");
        $(ul).slideUp(300);
    }

}
resBarChange("itemSex",sexResbar,sexUl);
resBarChange("itemXy",xyResBar,xyUl);
resBarChange("itemNj",njResBar,njUl);

//check box
var setArr = [disagree,agree];

for(var x=0;x<setArr.length;x++){
    setArr[x].onclick = Selected;
}
// disagree.onclick = Checked;
// agree.onclick =Checked;
function Selected() {
    lable.setAttribute("class","ifJoin");
    for(var n=0;n<setArr.length;n++){
        if (setArr[n].getAttribute("class")){
            setArr[n].removeAttribute("class");
        }
    }
    this.setAttribute("class","selected");
}


