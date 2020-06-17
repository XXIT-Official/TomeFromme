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
}
function replacePrev() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline-blue.svg";
}

function replaceNext() {
    document.getElementById('prev').src = "/images/icons/chevron-back-outline-blue.svg";
    document.getElementById('next').src = "/images/icons/chevron-forward-outline.svg";
}

