var input = parseInt(prompt("숫자를 입력하세요."));
var msg ="";

if(input % 4 == 0) {
    msg = "4의 배수입니다.";
}
else {
    msg = "4의 배수가 아닙니다.";
}

document.write(msg);