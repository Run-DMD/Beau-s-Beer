"use strict";

//main object
const beausBeers = {

};

//LCBO API Key
beausBeers.apiKey = 'MDpiMzJiZTJiYy0yMzU4LTExZTYtYjc2YS1lYjM1ZTNhY2NmN2U6Rk5DQ2ZjQUJlRElHVnM5YTBhWFBUNlQwWWhQR0RSSW9ydENF';
// console.log(beausBeers.apiKey);

//creating our beer Array in our main object. Beers returned from the ajax call will be stored here

beausBeers.beerArray = [];

const beerDetails = [
	{
		name: "Best of Beau's 2015",
		description: "The 'Best of Beau's' Mix is a holiday mix pack featuring an eclectic mix of our most sought after one-off creations. All four beers were chosen through popular vote, by those who know best – our fans!",
		image: "../images/best-of-beaus-2015-web.jpg"
	},
	{
		name: "Beau's Bog Water Gruit",
		description: "Bog Water gruit is brewed with hand-harvested organic bog myrtle (a deciduous shrub native to Northern Ontario and Québec.) The bog myrtle contributes a sweet aroma, balanced bitterness, and herbal, spicy notes suggestive of a digestif. A Belgian yeast profile makes Bog Water a very complex and contemplative winter ale.",
		image: "../images/bog-water-gruit.jpg"
	},
		{
		name: "Beaus Bush Fire Keg",
		description: "Bush Fire is a flame-coloured ale infused with teas made from two plants native to South Africa, rooibos and honeybush. Spicy, earthy, and with a gentle touch of sweetness, this aromatic creation brings together two of the world’s most popular brews – tea and beer!",
		image: "../images/bush-fire-keg.jpg"
	},
		{
		name: "Beau's Farm Table 80 Shilling",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. 80 Shilling is dry, toasty Scottish-style ale. This malt-focused sessionable ale is a deep-copper-colour, with mild-to-moderate caramel flavour and balanced hop presence.",
		image: "../images/farm-table-80-shillling.jpg"
	},
		{
		name: "Beau's Farm Table Grisette",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. Farm Table: Grisette is a sessionable 4.9% – expect mild saison character and great drinkability from this golden ale.",
		image: "../images/farm-table-grisette-web.jpg"
	},
		{
		name: "Beaus Farm Table Helles",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. Farm Table Helles is a brilliant straw-coloured blond lager. A bona fide Bavarian beer garden classic, the Helles style balances a mildly bready, malt-accented flavour with subtle and delicate hops that linger to enjoy.",
		image: "../images/farm-table-helles.jpg"
	},
		{
		name: "Beau's Farm Table IPA",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. Farm Table: I.P.A. is an assertive yet-very-drinkable India Pale Ale that marries typical flavour profiles of the British and American interpretations of this style. Farm Table: I.P.A. is unfiltered, and dry-hopped in our conditioning tanks to amplify the hop aromas.",
		image: "../images/farm-table-ipa.jpg"
	},
		{
		name: "Beau's Farm Table Marzen",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. Märzen is the traditional Oktoberfest style of beer. This orangey-amber, malty lager has just the right amount of hops to balance the Munich malts, and features an ultra-clean finish to complete the package.",
		image: "../images/farm-table-marzen.jpg"
	},
		{
		name: "Beau's Farm Table Patersbier",
		description: "Farm Table Series are sessionable beers inspired by tradition and brewed true to a classic style. Patersbier is a Belgian-style ale. Expect a great drinkable beer, with traditional Belgian yeast character.",
		image: "../images/farm-table-patersbier.jpg"
	},
		{
		name: "Beaus Haters Gonna Hate",
		description: "Haters Gonna Hate is an extra-strong interpretation of our flagship beer Lug Tread, which is a Kölsch-style lagered ale.",
		image: "../images/haters-gonna-hate.jpg"
	},
		{
		name: "Beau's Koru Belgian Ale",
		description: "Koru Belgian-Style Pale Ale boasts interesting spicy, peppery yeast notes, with tropical fruit inflections from New Zealand nelson sauvin and rakau hops. Complex and tasty, with a dry finish.",
		image: "../images/koru-belgian-ale.jpg"
	},
		{
		name: "Kremlock Keg",
		description: "Rye malt and rare Polish hops lends peppery notes and an herbal earthiness to this roggenbier, which blend harmoniously with hints of clove and banana contributed by the weizen yeast. Kremlock is part of the Pro-Am Series… cheers to Michel Lecavalier, who won the 2014 Beau’s Oktoberfest homebrew contest, earning the prize of brewing his beer in the Beau’s brewhouse for 2015!",
		image: "../images/kremlock-keg.jpg"
	},
		{
		name: "Beau's Le Coeur Noir Black IPA",
		description: "Le Cœur Noir Black I.P.A. was designed and brewed collaboratively with Jordan Rainhard of Toronto’s Rainhard Brewing  (www.rainhardbrewing.com). Nearly opaque, this black I.P.A. offers up aromas of citrusy, piney hops with malt intonations, toast and restrained mocha.",
		image: "../images/le-coeur-noir-black-ipa.jpg"
	},
		{
		name: "Beau's Maddaddamites Noobroo",
		description: "From its elusive, intriguing aroma to its subtle yet celebratory aftertaste, this light but substantial beer has mysterious undertones of rosehips, elderberries, and mountain herbs, with a deeper tone of roots and woodsy bark. Fresh and spring-like, confident and down-to-earth yet inspirational, rooted in the wild world of foraging and gathering, NooBroo is everything the MaddAddamites would wish an all natural beer to be. Saint Euell Gibbons himself would applaud it! –- Margaret Atwood",
		image: "../images/maddaddamites-noobroo.jpg"
	},
		{
		name: "One Ping Only Keg",
		description: "Dark as the stormy Baltic sea, with thick, chewy malts that satisfy, and rich aromas of chocolate, raisins and caramel. Barley and rye malts, oats, blended ale and lager yeasts and some rare Polish Marynka hops create layers upon layers of complexity.",
		image: "../images/one-ping-only-keg.jpg"
	},
		{
		name: "Beaus Original Gruit",
		description: "Original Gruit harkens back to the roots of gruit production by employing three of the most common historical ingredients in the brew: Labrador tea, bog myrtle and yarrow.",
		image: "../images/original-gruit.jpg"
	},
];

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

	for(let x = 0; x < beausBeers.beerArray.length; x++){
		for(let i = 0; i < beerDetails.length; i++){
			if(beausBeers.beerArray[x].name === beerDetails[i].name){
				beausBeers.beerArray[x].description = beerDetails[i].description,
				beausBeers.beerArray[x].image = beerDetails[i].image
			};
		};
	};
	
	console.log(beausBeers.beerArray);
	beausBeers.fillSelectors();
	beausBeers.templates();
};

beausBeers.fillSelectors = function(){
	//filling selectors by putting all option and pushing our unique properties for style and type
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

	// console.log(beausBeers.uniqueBeerType);
	for(let i = 0; i < beausBeers.uniqueBeerType.length; i++){
		$('#beer-type').append(('<option value"' + beausBeers.uniqueBeerType[i] + '">' + beausBeers.uniqueBeerType[i] + '</option>'));
		// console.log('working');
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