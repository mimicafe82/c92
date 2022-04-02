player1_name = localstorage.getitem("player1_name");
player2_name = localstorage.getitem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementbyId("player1_name").innerHTML = player1_name + " : ";
document.getElementbyId("player2_name").innerHTML = player2_name + " : ";

document.getElementbyId("player1_score").innerHTML = player1_name ;
document.getElementbyId("player2_score").innerHTML = player2_name ;

document.getElementbyId("player_question").innerHTML = "question turn - " + player1_name;
document.getElementbyId("player_answer").innerHTML = "Answer turn - " + player2_name


function send()
{
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lowerCase = " + word);

CharAt1 = word.CharAt1(1);
console.log(CharAt1);

length_divide_2 = Math.floor(word.length/2);
CharAt2 = word.CharAt(length_divide_2);
console.log(CharAt2);

length_minus_1 = word.length - 1;
CharAt3 = word.CharAt(length_minus_1);
console.log(CharAt3);

remove_charAt1 = word.replace(CharAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value =""
}

question_turn = "player_1" ;
answer_turn = "player_2" ;







