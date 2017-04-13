/*
Name    : Muhammad Ali
Section : 4.1
ID #    : 4110
Lab     : Friday 2:30-5:30
*/

/***************************       Question 1    ***********************************/

//Display the message Hello World 5 Times
for(var i=0; i < 5; i++){
    alert('Hello World');
}

/***************************       Question 1    ***********************************/





/***************************       Question 2    ***********************************/
/*
//print numeric counting from 1 to 10
for(var i=1; i <= 10; i++){
    document.write(i + '</br>');
}
*/
/***************************       Question 2    ***********************************/





/***************************       Question 3    ***********************************/
/*
//print multiplication table of any number
var numTable = prompt('Enter a number to print its multiplication table');
var lengthTable = prompt('Enter length of multiplication table');
document.write('Multiplication table of '+ numTable+'</br>');
document.write('Length '+ lengthTable+'</br></br>');
for(var i=1; i <= lengthTable; i++){
    document.write(numTable+'x'+i+'='+(numTable*i)+'</br>');
}
*/
/***************************       Question 3    ***********************************/






/***************************       Question 4    ***********************************/
/*
//write each element on a new line with the help of FOR LOOP
var A = ['Nokia','Samsung','Apple','Sony','Huawei'];
for(var i=0; i < A.length; i++){
    document.write(A[i] + '</br>');
}
*/
/***************************       Question 4    ***********************************/






/***************************       Question 5    ***********************************/
/*
//print items of an array
var fruits = ['apple','banana','mango','orange','strawberry'];
for(var i=0; i < fruits.length; i++){   
    document.write(fruits[i]+'</br>');
}
document.write('</br>');
    for(var j=0; j < fruits.length; j++){   
    document.write('Element at index '+j+' is '+fruits[j]+'</br>');
}
*/
/***************************       Question 5    ***********************************/





/***************************       Question 6    ***********************************/
/*
var numItems = prompt('Enter number of Items');
var items = [];
items[0] = prompt('Enter value for index 0');
items[1] = prompt('Enter value for index 1');
items[2] = prompt('Enter value for index 2');
items[3] = prompt('Enter value for index 3');
document.write('Number of Items: '+ numItems+'</br>');
document.write('Items: '+'</br></br>');
for(var i=0; i < 4; i++){
    document.write(items[i]+'</br>');
}
*/
/***************************       Question 6    ***********************************/






/***************************       Question 7    ***********************************/
/*
//counting
document.write('<b>Counting:</b></br></br>');
for(var i=1; i <= 15; i++){
    document.write(i+', ');
}
//reverse counting
document.write('<b></br></br>Reverse counting:</b></br></br>');
for(var i=10; i >= 1; i--){
    document.write(i+', ');
}
//even
document.write('<b></br></br>Even:</b></br></br>');
for(var i=0; i <= 20; i++){
    if (i%2===0){
    document.write(i+', ');
}
}
//odd
document.write('<b></br></br>Odd:</b></br></br>');
for(var i=0; i <= 20; i++){
    if (i%2!==0){
    document.write(i+', ');
}
}
//series
document.write('<b></br></br>Series:</b></br></br>');
for(var i=2; i <= 20; i++){
    if (i%2===0){
    document.write(i+'k, ');
}
}
*/
/***************************       Question 7    ***********************************/





/***************************       Question 8    ***********************************/
/*
var A = ['cake','apple pie','cookie','chips','patties'];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var matchFound = false;
for(var i=0; i < 5; i++){
    if(search===A[i]){
        matchFound = true;
        document.write(search + ' is available at index ' + [i] + ' in our bakery');
        break;
    }
}
    if(matchFound === false){
        document.write('We are sorry. ' + search + ' is not available in our bakery');
}
*/
/***************************       Question 8    ***********************************/








/***************************       Question 9    ***********************************/
/*
//Identify the largest number
var A = ['24','53','78','91','12'];

document.write('<b>Array Items: ');
for(var i=0; i < 5; i++){
document.write(A[i]+',');
}
var largeNum = Math.max('24','53','78','91','12');
document.write('</br></br>The largest number is ' + largeNum +'</b>');
*/
/***************************       Question 9    ***********************************/









/***************************       Question 10    ***********************************/
/*
//Identify the smallest number
var A = ['24','53','78','91','12'];
document.write('<b>Array Items: ');
for(var i=0; i < 5; i++){
document.write(A[i]+',');
}
var smallNum = Math.min('24','53','78','91','12');
document.write('</br></br>The smallest number is ' + smallNum +'</b>');
*/
/***************************       Question 10    ***********************************/









/***************************       Question 11    ***********************************/
/*
//Identify the largest and smallest number
var A = ['24','53','78','91','12'];
document.write('<b>Array Items: ');
for(var i=0; i < 5; i++){
document.write(A[i]+',');
}
var largeNum = Math.max('24','53','78','91','12');
document.write('</br></br>The largest number is ' + largeNum);
var smallNum = Math.min('24','53','78','91','12');
document.write('</br></br>The smallest number is ' + smallNum +'</b>');
*/  
/***************************       Question 11    ***********************************/










/***************************       Question 12    ***********************************/
/*
//Multiple of 5 ranging from 1 to 100
for(i=1; i <=20 ; i++){
    document.write(5*i+', ');
}
*/
/***************************       Question 12    ***********************************/










/***************************       Question 13    ***********************************/
/*
var students = ['Ali','Sami','Taha','Inam'];
var scores = [58,73,89,90];
document.write('<b><table border="1"><tr><td>Students</td><td>Scores</td></tr>');
for(i=0; i<4; i++){
    document.write('<tr><td>'+students[i]+'</td><td>'+scores[i]+'</td></tr></b>');
}
*/
/***************************       Question 13    ***********************************/









/***************************       Question 14    ***********************************/
/*
var scores  = ['12', '45', '3', '22', '34', '50'];
var stopValue = prompt('Enter stop value');
var matchFound = false;
for(i=0; i < scores.length; i++){
    if(stopValue === scores[i]){
        matchFound = true;
        var requiredValues = scores.slice(0,i+1);
        document.write(requiredValues);
        break;
    }
}

    if(matchFound===false){
        document.write('It is not on the list');
    }
*/
/***************************       Question 14    ***********************************/






/***************************       Question 15    ***********************************/
/*
var A = [[1,2,3],[4,5,6],[7,8,9]];
A[0] = [1,2,3];
A[1] = [4,5,6];
A[2] = [7,8,9];
for(i=0; i < 3; i++){
    for(j=0; j < 3; j++){
    document.write('<b>' + A[i][j] + ' </b>');
}
document.write('</br>')
}
*/
/***************************       Question 15    ***********************************/





/***************************       Question 16    ***********************************/
/*
//repeatedly print the value of num
var num = prompt('Enter the value');
document.write(num);
var newnum = num;
for(i=0; i < (num*2); i++){
newnum=newnum-0.5;
document.write(', '+newnum);
}
*/
/***************************       Question 16    ***********************************/






/***************************       Question 17    ***********************************/
/*
//odd and even reporter
for(i=0; i <=20; i++){
    if(i%2===0){
        document.write(i + ' is even</br>');
    }
    else{
        document.write(i + ' is odd</br>')
    }
}
*/
/***************************       Question 17    ***********************************/





/***************************       Question 18    ***********************************/
/*
//product of odd integers from 1 to 7
var product = 1;
for(i=1; i<=7; i++){
    if(i%2 !== 0){
         product = product*i; 
    }
}
document.write('The product of odd integers from 1 to 7 is ' + product);
*/
/***************************       Question 18    ***********************************/





/***************************       Question 19    ***********************************/
/*
var stars = '*******';
var numLines = prompt('Enter number of lines', 7);
for (i=0; i < numLines; i++){
    document.write(stars.slice(i) + '</br>');    
}
*/
/***************************       Question 19    ***********************************/











/***************************       Question 20    ***********************************/
/***************************       Question 20 a  ***********************************/
/*
var stars = '*****';
var numLines = prompt('Enter number of lines', '4');
for (i=0; i < numLines; i++){
    document.write(stars + '</br>');    
}
*/
/***************************       Question 20 a  ***********************************/













/***************************       Question 20 b  ***********************************/
/*
var stars = '*****';
var numLines = prompt('Enter number of lines','5');
for (i = numLines; i >= 0; i--){
    document.write(stars.slice(i) + '</br>');    
}
*/
/***************************       Question 20 b  ***********************************/













/***************************       Question 20 c  ***********************************/
/*
var stars = '*****';
var numLines = prompt('Enter number of lines','5');
for (i=0; i < numLines; i++){
    document.write(stars.slice(i) + '</br>');    
}
*/
/***************************       Question 20 c  ***********************************/
/***************************       Question 20    ***********************************/