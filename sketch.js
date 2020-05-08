//Intiating variables
var input, button, greeting,btn;

function setup() {
  // create canvas
  createCanvas(560, 350);
// for user to type their name
  input = createInput();
  input.position(190, 175);
//Sumbitting
  button = createButton('Submit');
  button.position(input.x + input.width, 175);
  button.mousePressed(q1);
//User's info
  greeting = createElement('h2', 'What is your name?');
  greeting.position(170,120);

  textAlign(CENTER);
  textSize(35);
}
function draw(){
  background("yellow");
  //Heading of the survey
  text("What Do You Think?",270,40);
  text("----------------------------",270,60)
}
function q1() {
  greeting.html('1) Is time travel possible?');
  greeting.position(120,120);
 btn =createButton('Yes');
 btn.position(260,175);
 btn1 =createButton('No');
 btn1.position(310,175)
//changes question
 btn.mousePressed(q2);
 btn1.mousePressed(q2);
//hides input and sumbit button
input.hide();
button.hide();
}
//creates QUESTION 2
 function q2(){
   greeting.html('2) Will we ever colonize space?');
   greeting.position(120,120);
  
 btn.mousePressed(q3);
 btn1.mousePressed(q3);
 }
 //creates QUESTION 3
 function q3(){
  greeting.html('3)Would guitar sound the same on the space station?');
  greeting.position(5,120);
 
btn.mousePressed(q4);
btn1.mousePressed(q4);
}
//creates QUESTION 4
function q4(){
  greeting.html('4) What is at the bottom of a "BLACK HOLE"?');
  greeting.position(50,120);
  input = createInput();
  input.position(190, 175);
//to answer the reason
  btn2 = createButton('Submit');
  btn2.position(input.x + input.width, 175);
  //changes the question
  btn2.mousePressed(q5);
}
//CREATES QUESTION 5
function q5(){
  greeting.html('5) Have Alliens ever visited Earth?');
  greeting.position(100,120);
  //creates YES/NO buttons
btn3 =createButton('Yes');
 btn3.position(260,175);
 btn4 =createButton('No');
 btn4.position(310,175)
 btn3.mousePressed(q6);
btn4.mousePressed(q6);
//hides unnecessary options
input.hide();
btn2.hide();
}
 //QUESTION 6
function q6(){
  greeting.html('6) Is there an edge of the Universe?');
  greeting.position(100,120);
  btn3.mousePressed(ls);
  btn4.mousePressed(ls);
}
//Last slide 
function ls(){
  greeting.html('THANK YOU!');
  greeting.position(200,100);
  btn4.hide();
  btn3.hide();
  btn.hide();
  btn1.hide();
  btn2.hide();
}
