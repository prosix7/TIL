var input = parseInt(prompt("숫자를 입력하세요."));
var output = 1; 
var counter = 0;

for(output = 1; output <= input; output++) {
    if(output > input) {
        break;
    }
    else if(output % 3 == 0 & output+3 <= input) {
        counter++;
        document.write(output + ", ");
    }
    else if(output % 3 == 0 & output+3 >= input) {
        counter++;
        document.write(output);
    }
}
document.write("<p>" + input + "까지 3의 배수의 개수 : " + counter) + "</p>";