const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");
const imgC = document.getElementById("imgC");
const imgD = document.getElementById("imgD");
const imgE = document.getElementById("imgE");
const imgF = document.getElementById("imgF");
const imgG = document.getElementById("imgG");
const imgH = document.getElementById("imgH");
const imgI = document.getElementById("imgI");
const imgJ = document.getElementById("imgJ");
const imgK = document.getElementById("imgK");
const imgL = document.getElementById("imgL");
const imgM = document.getElementById("imgM");
const imgN = document.getElementById("imgN");
const imgO = document.getElementById("imgO");
const imgP = document.getElementById("imgP");

var click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

var selectedFruits = [];

var sumCost = 0;

const checkA = document.createElement("img");
checkA.src = "/fruits/check.jpg";
checkA.style.width = "200px";

const checkB = document.createElement("img");
checkB.src = "/fruits/check.jpg";
checkB.style.width = "200px";

const checkC = document.createElement("img");
checkC.src = "/fruits/check.jpg";
checkC.style.width = "200px";

const checkD = document.createElement("img");
checkD.src = "/fruits/check.jpg";
checkD.style.width = "200px";

const checkE = document.createElement("img");
checkE.src = "/fruits/check.jpg";
checkE.style.width = "200px";

const checkF = document.createElement("img");
checkF.src = "/fruits/check.jpg";
checkF.style.width = "200px";

const checkG = document.createElement("img");
checkG.src = "/fruits/check.jpg";
checkG.style.width = "200px";

const checkH = document.createElement("img");
checkH.src = "/fruits/check.jpg";
checkH.style.width = "200px";

const checkI = document.createElement("img");
checkI.src = "/fruits/check.jpg";
checkI.style.width = "200px";

const checkJ = document.createElement("img");
checkJ.src = "/fruits/check.jpg";
checkJ.style.width = "200px";

const checkK = document.createElement("img");
checkK.src = "/fruits/check.jpg";
checkK.style.width = "200px";

const checkL = document.createElement("img");
checkL.src = "/fruits/check.jpg";
checkL.style.width = "200px";

const checkM = document.createElement("img");
checkM.src = "/fruits/check.jpg";
checkM.style.width = "200px";

const checkN = document.createElement("img");
checkN.src = "/fruits/check.jpg";
checkN.style.width = "200px";

const checkO = document.createElement("img");
checkO.src = "/fruits/check.jpg";
checkO.style.width = "200px";

const checkP = document.createElement("img");
checkP.src = "/fruits/check.jpg";
checkP.style.width = "200px";

function boxOn(obj) {
    obj.style.border = "3px solid red"; 
    obj.style.cursor = "pointer";
}

function boxOut(obj) {
    obj.style.border = "3px solid black";
    obj.style.cursor = "Default";
}

function selectA() {
    var box = document.getElementById("boxA");

   if(click[0] == 0) {   
        box.appendChild(checkA);
        box.replaceChild(checkA, imgA);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[0].innerHTML);

        click[0] = 1;
        return;
   }  
   if(click[0] == 1) {
        box.appendChild(imgA);
        box.replaceChild(imgA, checkA);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[0].innerHTML);

        click[0] = 0;
        return;
   }
}

function selectB() {
    var box = document.getElementById("boxB");

   if(click[1] == 0) {   
        box.appendChild(checkB);
        box.replaceChild(checkB, imgB);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[1].innerHTML);

        click[1] = 1;
        return;
   }  
   if(click[1] == 1) {
        box.appendChild(imgB);
        box.replaceChild(imgB, checkB);
        box.childNodes[3].style.backgroundColor = "white";
        //selectedFruits.pop(document.getElementsByClassName("name")[1].innerHTML);
        sumCost-=parseInt(document.getElementsByClassName("cost")[1].innerHTML);

        click[1] = 0;
        return;
   }
}

function selectC() {
    var box = document.getElementById("boxC");

   if(click[2] == 0) {   
        box.replaceChild(checkC, imgC);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[2].innerHTML);

        click[2] = 1;
        return;
   }  
   if(click[2] == 1) {
        box.replaceChild(imgC, checkC);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[2].innerHTML);

        click[2] = 0;
        return;
   }
}

function selectD() {
    var box = document.getElementById("boxD");
    
   if(click[3] == 0) {   
        box.replaceChild(checkD, imgD);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[3].innerHTML);

        click[3] = 1;
        return;
   }  
   if(click[3] == 1) {
        box.replaceChild(imgD, checkD);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[3].innerHTML);

        click[3] = 0;
        return;
   }
}

function selectE() {
    var box = document.getElementById("boxE");
    
   if(click[4] == 0) {   
        box.replaceChild(checkE, imgE);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[4].innerHTML);

        click[4] = 1;
        return;
   }  
   if(click[4] == 1) {
        box.replaceChild(imgE, checkE);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[4].innerHTML);

        click[4] = 0;
        return;
   }
}

function selectF() {
    var box = document.getElementById("boxF");
    
   if(click[5] == 0) {   
        box.replaceChild(checkF, imgF);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[5].innerHTML);

        click[5] = 1;
        return;
   }  
   if(click[5] == 1) {
        box.replaceChild(imgF, checkF);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[5].innerHTML);

        click[5] = 0;
        return;
   }
}

function selectG() {
    var box = document.getElementById("boxG");
    
   if(click[6] == 0) {   
        box.replaceChild(checkG, imgG);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[6].innerHTML);

        click[6] = 1;
        return;
   }  
   if(click[6] == 1) {
        box.replaceChild(imgG, checkG);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[6].innerHTML);

        click[6] = 0;
        return;
   }
}

function selectH() {
    var box = document.getElementById("boxH");
    
   if(click[7] == 0) {   
        box.replaceChild(checkH, imgH);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[7].innerHTML);

        click[7] = 1;
        return;
   }  
   if(click[7] == 1) {
        box.replaceChild(imgH, checkH);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[7].innerHTML);

        click[7] = 0;
        return;
   }
}

function selectI() {
    var box = document.getElementById("boxI");
    
   if(click[8] == 0) {   
        box.replaceChild(checkI, imgI);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[8].innerHTML);

        click[8] = 1;
        return;
   }  
   if(click[8] == 1) {
        box.replaceChild(imgI, checkI);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[8].innerHTML);

        click[8] = 0;
        return;
   }
}

function selectJ() {
    var box = document.getElementById("boxJ");
    
   if(click[9] == 0) {   
        box.replaceChild(checkJ, imgJ);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[9].innerHTML);

        click[9] = 1;
        return;
   }  
   if(click[9] == 1) {
        box.replaceChild(imJI, checkJ);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[9].innerHTML);

        click[9] = 0;
        return;
   }
}

function selectK() {
    var box = document.getElementById("boxK");
    
   if(click[10] == 0) {   
        box.replaceChild(checkK, imgK);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[10].innerHTML);

        click[10] = 1;
        return;
   }  
   if(click[10] == 1) {
        box.replaceChild(imgK, checkK);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[10].innerHTML);

        click[10] = 0;
        return;
   }
}

function selectL() {
    var box = document.getElementById("boxL");
    
   if(click[11] == 0) {   
        box.replaceChild(checkL, imgL);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[11].innerHTML);

        click[11] = 1;
        return;
   }  
   if(click[11] == 1) {
        box.replaceChild(imgL, checkL);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[11].innerHTML);

        click[11] = 0;
        return;
   }
}

function selectM() {
    var box = document.getElementById("boxM");
    
   if(click[12] == 0) {   
        box.replaceChild(checkM, imgM);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[12].innerHTML);

        click[12] = 1;
        return;
   }  
   if(click[12] == 1) {
        box.replaceChild(imgM, checkM);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[12].innerHTML);

        click[12] = 0;
        return;
   }
}

function selectN() {
    var box = document.getElementById("boxN");
    
   if(click[13] == 0) {   
        box.replaceChild(checkN, imgN);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[13].innerHTML);

        click[13] = 1;
        return;
   }  
   if(click[13] == 1) {
        box.replaceChild(imgN, checkN);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[13].innerHTML);

        click[13] = 0;
        return;
   }
}

function selectO() {
    var box = document.getElementById("boxO");
    
   if(click[14] == 0) {   
        box.replaceChild(checkO, imgO);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[14].innerHTML);

        click[14] = 1;
        return;
   }  
   if(click[14] == 1) {
        box.replaceChild(imgO, checkO);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[14].innerHTML);

        click[14] = 0;
        return;
   }
}

function selectP() {
    var box = document.getElementById("boxP");
    
   if(click[15] == 0) {   
        box.replaceChild(checkP, imgP);
        box.childNodes[3].style.backgroundColor = "red";
        sumCost+=parseInt(document.getElementsByClassName("cost")[15].innerHTML);

        click[15] = 1;
        return;
   }  
   if(click[15] == 1) {
        box.replaceChild(imgP, checkP);
        box.childNodes[3].style.backgroundColor = "white";
        sumCost-=parseInt(document.getElementsByClassName("cost")[15].innerHTML);

        click[15] = 0;
        return;
   }
}

function buy() {
    if(sumCost==0) {
        alert("Please select item!");
    }
    else {
        for(var i=0; i<16; i++) {
            if(click[i]==1) {
                selectedFruits.push(document.getElementsByClassName("name")[i].innerHTML);
            }
        }
        var output = selectedFruits + " is(are) selected!\n\n" + "Total : " + sumCost + "$";
        alert(output);
        selectedFruits = [];
    }
}

function logout() {
    location.href = "Login.html";
}