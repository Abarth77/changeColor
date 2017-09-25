(function() {

	'use strict';

	var changeColorLib = {

		generateColor: function(colorIsRGB, colorIsHEX) {
			/* 
				#1 - Generate the color in either RGB or HEX 
			*/
			if ( colorIsRGB ) {
				let red 	= Math.floor(Math.random() * 256);
				let green	= Math.floor(Math.random() * 256);
				let blue 	= Math.floor(Math.random() * 256);
				return 'rgb(' + red +',' + green + ',' + blue + ')';
			}
			else if ( colorIsHEX ) {
				let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				return hex;
			}
		},

		addColor: function(colorIsRGB, colorIsHEX, className, repeatIsActive) {

			/*
				#1 - Instantiate the const and let variables
			*/
			const colorObjects = document.querySelectorAll('.'+className);

			/* 
				#2 - Check if the color should be repeatedly changed 
			*/
			if ( repeatIsActive && colorIsRGB ) {
				setInterval(() => {
					for ( let i = 0; i < colorObjects.length; i++ ) {
						colorObjects[i].style.backgroundColor = changeColorLib.generateColor(true, false);
					}
				}, 500);
			}
			else if ( !repeatIsActive && colorIsRGB ) {
				for ( let i = 0; i < colorObjects.length; i++ ) {
					colorObjects[i].style.backgroundColor = changeColorLib.generateColor(true, false);
				}
			}
			/* ---------------------------------- */
			else if ( repeatIsActive && colorIsHEX ) {
				setInterval(() => {
					for ( let i = 0; i < colorObjects.length; i++ ) {
						colorObjects[i].style.backgroundColor = changeColorLib.generateColor(false, true);
					}
				}, 500);
			}
			else if ( !repeatIsActive && colorIsHEX ) {
				for ( let i = 0; i < colorObjects.length; i++ ) {
					colorObjects[i].style.backgroundColor = changeColorLib.generateColor(false, true);
				}
			}
		}
	}

});