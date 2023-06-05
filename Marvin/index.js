//Bsic ex1
var numbers= [1,7,-3,9];
var highestNum = 0;
document.write("1,7,-3,9 <br>")
for(n = 0; n < numbers.length; n++){
    if(numbers[n] > highestNum){
        highestNum = numbers[n];
    }
}
document.write("the highest number is " + highestNum + "<hr>");
//Bsic ex2
let temperature = (Math.random()*(35 - -10)-10);
var bg = document.getElementsByClassName("temp");
console.log(temperature);
if(temperature <= -5){
    document.getElementsByTagName("p")[0].innerHTML="The weather is very cold";
    bg[0].style.backgroundImage  = "url('https://cdn.pixabay.com/photo/2014/02/07/10/19/winter-260817_1280.jpg')";
}
else if(temperature <= 10){
    document.getElementsByTagName("p")[0].innerHTML="The weather is cold";
    bg[0].style.backgroundImage  = "url('https://cdn.pixabay.com/photo/2014/08/09/15/45/clouds-414198_1280.jpg')";
}
else if(temperature <= 25){
    document.getElementsByTagName("p")[0].innerHTML="The weather is moderate";
    bg[0].style.backgroundImage  = "url('https://cdn.pixabay.com/photo/2018/07/20/13/52/sunflower-3550693_1280.jpg')";
}
else{
    document.getElementsByTagName("p")[0].innerHTML="The weather is hot";
    bg[0].style.backgroundImage  = "url('https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg')";
}
//Intermediate ex1
let martin = [76,64,81,57,94];
let thomas = [85,49,81,72,55];
let klaus = [69,91,84,67,85];
let maria = [93,70,81,64,84];
let david = [81,99,71,100,69];
let mg = 0;
let tg = 0;
let kg = 0;
let mrg = 0;
let dg = 0;
for(ag = 0; ag<martin.length;ag++){
    mg += martin[ag];
    tg += thomas[ag];
    kg += klaus[ag];
    mrg += maria[ag];
    dg += david[ag];
}
document.write("Martin's average points are " + mg / martin.length + "<br>");
document.write("Thomas average points are " + tg / thomas.length + "<br>");
document.write("Klaus average points are " + kg / klaus.length + "<br>");
document.write("Maria's average points are " + mrg / maria.length + "<br>");
document.write("David's average points are " + dg / david.length + "<br>");
let classAvrg = 0;
classAvrg = ((dg / david.length) + (mrg / maria.length) + (kg / klaus.length) + (tg / thomas.length) + (mg / martin.length)) / 5;
document.write("The Class average points are " + classAvrg + "<br><br>");
var grades = [mg / martin.length, tg / thomas.length, kg / klaus.length, mrg / maria.length, dg / david.length, classAvrg];
var names= ["Martin", "Thomas", "Klaus", "Maria", "David", "Class Average"];
for(g = 0; g < grades.length; g++){
    if(grades[g] < 60){
        grades[g] = "F";
    }
    else if(grades[g] < 70){
        grades[g] = "D"
    }
    else if(grades[g] < 80){
        grades[g] = "C"
    }
    else if(grades[g] < 90){
        grades[g] = "B"
    }
    else if(grades[g] < 100){
        grades[g] = "A"
    }
    document.write(names[g] + ": " + grades[g] + "<br>")
}
document.write("<hr>")
//Intermediate ex2
function logFizzBuzz(count){

    for (let i = 1; i <= count; i++) {
      let out = '';
      if (i % 3 === 0 && i % 5 !== 0){
        out += 'Fizz <br>';
      }
      if (i % 5 === 0 && i % 3 !== 0){
        out += 'Buzz <br>';
      }
      if (i % 5 === 0 && i % 3 === 0){
        out += 'FizzBuzz <br>';
      }
      document.write(out || i + "<br>");
    }
}; 
  
  
  logFizzBuzz(100);
  document.write("<hr>")
//Intermediate ex3
let msg="";
for(i = 0; i < 6; i++){
    msg += "&#9733;";
    document.write(msg);
    document.write("<br>");
}
document.write("<hr>");
//Challange
var Students = ["John", "Jane", "Max","Nik","Adam"];
var MathGrades = [70,85,100,59,63];
var result = prompt("Type your name");
for(x = 0; x<Students.length;x++){
    if(Students[x] == result){
        if(MathGrades[x] < 60){
            document.write("<font color=\"red\"> "+ Students[x] + ": " + MathGrades[x] + " </font>");
        }
        else if(MathGrades[x] < 70){
            document.write("<font color=\"yellow\"> "+ Students[x] + ": " + MathGrades[x] + " </font>");
        }
        else if(MathGrades[x] < 100){
            document.write("<font color=\"green\"> "+ Students[x] + ": " + MathGrades[x] + " </font>");
        }
        else if(MathGrades[x] == 100){
            document.write("<font color=\"blue\"> "+ Students[x] + ": " + MathGrades[x] + " </font>");
        }
    }
}
