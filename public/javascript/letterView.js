let letter = [];
let currentIndex = 1;


for (let i = 1; i <= document.getElementById('letter-wrap-content').childElementCount; i++) {
    letter[i - 1] = document.getElementById('letter' + String(i)).innerHTML;
    document.getElementById('letter' + String(i)).innerHTML = "";
    var li = document.getElementById(String(i));
    li.addEventListener('click', function () {
        let currentNum = parseInt(event.srcElement.id);
        let next = document.getElementById(currentNum);
        document.getElementById('letter-wrap-content').innerHTML = letter[currentNum - 1];
        let prev = document.getElementById(String(currentIndex));
        prev.style.backgroundColor = '#E8E8E8';
        prev.style.color = '#909090';
        let change = document.getElementById(String(currentNum));
        change.style.backgroundColor = '#4353a1';
        change.style.color = '#ffffff';
        currentIndex = currentNum;
        replaceArrow();
        //className 변경해서 .checked 로 수정할려고 했는데 안먹혀서 이런 식으로 구현..
    });

}

document.getElementById(currentIndex).className = "letter-number checked";
replaceArrow();
document.getElementById("letter" + String(currentIndex)).innerHTML = letter[currentIndex - 1];


function prevBtn() {
    if (currentIndex > 1) {
        replaceNum(false);
    }
}

function nextBtn() {
    if (currentIndex < letter.length) {
        replaceNum(true);
    }
}

function replaceNum(direction) {
    let prev = document.getElementById(String(currentIndex));
    prev.style.backgroundColor = '#E8E8E8';
    prev.style.color = '#909090';
    if (direction) {
        currentIndex += 1;
    }
    else {
        currentIndex -= 1;
    }
    document.getElementById('letter-wrap-content').innerHTML = letter[currentIndex - 1];
    let change = document.getElementById(String(currentIndex));
    change.style.backgroundColor = '#4353a1';
    change.style.color = '#ffffff';
    replaceArrow();
    checkChar(currentIndex - 1);
}

function replaceArrow() {
    if (letter.length > 1) {
        if (letter.length == 2) {
            currentIndex == 1 ? replacePrev() : replaceNext();
        } else {
            if (currentIndex == 2) {
                document.getElementById('prev').src = "/images/icons/chevron-back-outline-blue.svg";
                document.getElementById('next').src = "/images/icons/chevron-forward-outline-blue.svg";
            } else if (currentIndex == 1) {
                replacePrev();
            } else {
                replaceNext();
            }
        }
    } else {
        document.getElementById(String(currentIndex)).style.marginLeft = "30px";
    }
    checkChar(currentIndex - 1);
}
function replacePrev() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline-blue.svg";
}

function replaceNext() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline-blue.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline.svg";
}

function checkChar(index) {
    let button = document.getElementsByClassName('button');
    if (letter[index].length < 450) {
        button[0].style.marginTop = "3%";
        button[1].style.marginTop = "3%";
        document.getElementById('letter-bottom').style.marginTop = "120px";
        document.getElementById('envelope').style.marginTop = "20%";
        return 0;
    } else if (letter[index].length > 2000) {
        button[0].style.marginTop = "25%";
        button[1].style.marginTop = "25%";
        document.getElementById('letter-bottom').style.marginTop = "0";
        document.getElementById('envelope').style.marginTop = String(document.getElementById('letter-wrap-content').scrollHeight + 55) + "px";
    } else {
        button[0].style.marginTop = "9%";
        button[1].style.marginTop = "9%";
        document.getElementById('envelope').style.marginTop = String(5 + document.getElementById(currentIndex).scrollHeight+15) + "vw";
    }
    document.getElementById('letter-bottom').style.marginTop = "0";

}
