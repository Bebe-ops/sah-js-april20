// Third part

//$('h1').text('This is done by <em>JavaScript-text</em>');                         //  $('css selector').modify('action');
$('h1').html('This is done by <em>Javasript-html</em>');
$('h2').toggleClass('blue');			//on the class blue	
$('h2').toggleClass('blue');			//of the class blue

myLittleFunction();									//function use	
myLittleFunction();									// repeat function
myLittleFunction();									// repeat function

function myLittleFunction() {							// function name() {any kind of javascript commands}
	//	condition:number of paragraphs smaller than 5
	if ($('p').length< 5) {
		$('main').append('<p>A p is appended in the main</p>');
	} else {
		console.log('We reached the maximum paragraph number');
	}
	
	$('p').css('border', '1px solid grey');
	$('p').css('padding', '10px');
}

// $('#add').click(here is the function);  
$('#add').click(myLittleFunction);							// if you click-->add paragraph
$('#remove').click(function () {							// if you click-->remove paragraph
	$('p:last-child').remove();								// $('p').remove(); --> remove all paragraph.
});

// Fourth part

// if (condition that true or false) {
	//condition is true
//} else {
	//condition is false
//} 


let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[0]);			//colors[0]='orange'
// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[1]);	
// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[2]);	
// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[3]);
// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[4]);

colors.forEach(function (color) {
	$('#box-container').append('<div class="box"></div>');
	$('.box:last-child').css('background', color);
});

//for (let index = 0; index < array.length; index++) {
//	const element = array[index];	
//}

for (let i = 0; i < 20; i++) {							//i=i+1  =  i++
	console.log('loki');
}

//First part
console.log("Sript file is loaded.");				//write in display


//Single line comment
/*Multiple 
lines
of comments*/
