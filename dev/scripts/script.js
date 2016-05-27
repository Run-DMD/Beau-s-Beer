"use strict";

//main object
const beausBeers = {

};

//LCBO API Key
beausBeers.apiKey = 'MDpiMzJiZTJiYy0yMzU4LTExZTYtYjc2YS1lYjM1ZTNhY2NmN2U6Rk5DQ2ZjQUJlRElHVnM5YTBhWFBUNlQwWWhQR0RSSW9ydENF';
// console.log(beausBeers.apiKey);

//creating our beer Array in our main object. Beers returned from the ajax call will be stored here
beausBeers.beerArray = [];

//Beer properties (from object returned from ajax call)
beausBeers.beerStyle = [];

beausBeers.uniqueBeerStyle = [];

beausBeers.beerStrength = {
	All: 'All',
	Light: 'Light',
	Strong: 'Strong'
};

beausBeers.beerType = [];

beausBeers.uniqueBeerType = [];

//init function
beausBeers.init = function(){
	beausBeers.getData();
};

//ajax call to the LCBO API
beausBeers.getData = function(){
	// console.log('this is working');
	$.ajax({
		url:'https://lcboapi.com/products',
		headers: { 'Authorization': ' Token ' + beausBeers.apiKey},
		data: {
			q:"Beau's",
			where: 'is_seasonal',
			where_not: 'is_dead',
			where_not: 'is_discontinued'
		}
	})
	.then(function(lcboObjects){
		// console.log(lcboObjects);
		let beerResult = lcboObjects.result;
		beausBeers.dataArray(beerResult);
	});
};

beausBeers.dataArray = function(beerResult){
	for(let i = 0; i < beerResult.length; i++){
		beausBeers.beerArray[i] = {
			name: beerResult[i].name,
			style: beerResult[i].style,
			price: '$' + (beerResult[i].price_in_cents/100),
			alcohol_content: (beerResult[i].alcohol_content/100) + '%',
			volume: beerResult[i].volume_in_milliliters + ' ml' + ' ' + beerResult[i].package_unit_type,
			// secondary_category: beerResult[i].secondary_category,
			tertiary_category:beerResult[i].tertiary_category,
		};
		if (beerResult[i].style !== null){
			beausBeers.beerStyle.push(beerResult[i].style);
		};
		if (beerResult[i].tertiary_category !== null){
			beausBeers.beerType.push(beerResult[i].tertiary_category)
		};
	};
	// console.log('Working');
	// console.log(beausBeers.beerArray);
	// console.log(beausBeers.beerStyle);
	// console.log(beausBeers.beerType);

	$.each(beausBeers.beerStyle, function(b, el){
	    if($.inArray(el, beausBeers.uniqueBeerStyle) === -1) beausBeers.uniqueBeerStyle.push(el);
		// console.log(beausBeers.uniqueBeerStyle);
	});

	$.each(beausBeers.beerType, function(b, el){
	    if($.inArray(el, beausBeers.uniqueBeerType) === -1) beausBeers.uniqueBeerType.push(el);
		// console.log(beausBeers.uniqueBeerType);
	});

	beausBeers.fillSelectors();
	beausBeers.templates();
};

beausBeers.fillSelectors = function(){
	$('#beer-style').empty();
	$('#beer-strength').empty();
	$('#beer-type').empty();

	beausBeers.uniqueBeerStyle.unshift('All');
	beausBeers.uniqueBeerStyle.sort();
	beausBeers.uniqueBeerType.unshift('All');
	beausBeers.uniqueBeerType.sort();
	// console.log(beausBeers.uniqueBeerStyle);
	for(let i = 0; i < beausBeers.uniqueBeerStyle.length; i++){
		$('#beer-style').append(('<option value"' + beausBeers.uniqueBeerStyle[i] + '">' + beausBeers.uniqueBeerStyle[i] + '</option>'))
	};
	
	for(let Strength in beausBeers.beerStrength){
		$('#beer-strength').append(('<option value"' + Strength + '">' + Strength + '</option>'));
	};

	console.log(beausBeers.uniqueBeerType);
	for(let i = 0; i < beausBeers.uniqueBeerType.length; i++){
		$('#beer-type').append(('<option value"' + beausBeers.uniqueBeerType[i] + '">' + beausBeers.uniqueBeerType[i] + '</option>'));
		console.log('working');
	};
};

beausBeers.templates = function() {
	var desktopTemplate = $("#desktopTemplate").html();
	var compiledDT = Handlebars.compile(desktopTemplate);
	beausBeers.beerArray.forEach(function(beer) {
		var filledDT = compiledDT(beer);
		$("#beers-desktop").append(filledDT);
	});

	var mobileTemplate = $("#mobileTemplate").html();
	var compiledMT = Handlebars.compile(mobileTemplate);
	beausBeers.beerArray.forEach(function(beer) {
		var filledMT = compiledMT(beer);
		$("#beers-mobile").append(filledMT);
	});
};

$(document).ready(function(){
	beausBeers.init();
});