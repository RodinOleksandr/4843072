var counter = 0;
var counter2 = 0;
var button = document.getElementById('button');
var textarea = document.getElementById('comment');

var askName = function (){//asking cstomer`s name
  return prompt('Представтесь, пожалуйста','noname');
}


var date = function(){//makeing actual date
  var dt = new Date();
  var month = dt.getMonth()+1;
  var day = dt.getDate();
  var year = dt.getFullYear();
  return (day + '-' + month + '-' + year);
}

function countLikes() {//Counting amount of likes
  counter++;
  var amount = document.getElementById('plusLike');
  amount.textContent = counter;
}

function countReview() {//Counting amount of comments
  counter2++;
  var amount = document.getElementById('plusCom');
  amount.textContent = counter2;
}

sendCom = function (askName, date,countReview) {//Making blocks with comments, date, name
  var commList = document.getElementById('commList');
  var comment = document.getElementById('comment').value;
  if (!comment) {
    alert('Введите сообщение');
  }
  else {
    var cont = document.createElement('div');
    var newComment = document.createElement('div');
    var newName = document.createElement('div');
    var newDate = document.createElement('div');
    document.getElementById('comment').value = '';

    newComment.textContent = comment;
    newName.textContent = askName();
    newDate.textContent = date();
    commList.appendChild(cont);
    cont.appendChild(newName);
    cont.appendChild(newDate);
    cont.appendChild(newComment);
    cont.className = "cont";
    countReview();
}
}


textarea.addEventListener("keydown", function() {
    if (event.keyCode == 13 && event.ctrlKey)
      sendCom(askName, date,countReview);
  });
button.addEventListener("click", function () {
sendCom(askName, date,countReview);
});
