// Third part

//$('h1').text('This is done by <em>JavaScript-text</em>');                         //  $('css selector').modify('action');
$('h1').html('This is done by <em>Javasript-html</em>');
$('h2').toggleClass('blue');			//on the class blue	
$('h2').toggleClass('blue');			//of the class blue



function myLittleFunction() {								//function name() {any kind of javascript commands}
	$('main').append('<p>A p is appended in the main</p>');
	$('p').css('border', '1px solid grey');
	$('p').css('padding', '10px');
}

myLittleFunction();									//function use	
myLittleFunction();									//repeat function
myLittleFunction();									//repeat function

//   $('#add').click(here is the function);  
$('#add').click(myLittleFunction);						//if you click-->add paragraph
$('#remove').click(function() {							//if you click-->remove paragraph
$('p:last-child').remove();								//$('p').remove(); --> remove all paragraph.
});

//First part
console.log("Sript file is loaded.");


//Single line comment
/*Multiple 
lines
of comments*/
