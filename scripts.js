// console.log('bird is primed and ready');
var clicks = 0;

//create button on DOM 'generate'
//append new container with two buttons
//one button = delete
//one button = change
//text for number of times generate clicked

//create button function
$(document).ready(function () {
  $('#birdButton').on('click', function(){
clicks++;//for remembering clicks
//create new container
var newCont = document.createElement('div');
newCont.className = 'container';
newCont.id = 'row' + clicks;
//set default background to yellow
$('.container').css({"background-color": "yellow"});

//create delete and change buttons
//Delete
var delButton = document.createElement('button');
delButton.textContent = 'Delete';
delButton.className = 'delete';
//append delete button
newCont.appendChild( delButton );
$('body').append (newCont);

//change
var changeButton = document.createElement('button');
changeButton.textContent = 'Change';
changeButton.className = 'change';
//append delete button
newCont.appendChild( changeButton );
$('body').append (newCont);

//insert text for times clicked
var newText = document.createElement('p');
newCont.appendChild( newText );
$('body').append (newCont);
$('p').text(clicks);

});
//Delete button functionality to remove parent cont
$(document).on('click', '.delete', function(){
  var delParent = $(this).parent();
  delParent.remove();
  // console.log('plez remove');
});

//change button functionality
$(document).on('click', '.change', function(){
//
   var colParent = $(this).parent();
var parentClass = colParent.attr('class');
if( parentClass == 'red'){
  colParent.removeClass().addClass('yellow');
  colParent.css("background-color", "yellow");
}else{
  colParent.removeClass().addClass('red');
  colParent.css("background-color", "red");
}

});

// console.log('color please');
});
