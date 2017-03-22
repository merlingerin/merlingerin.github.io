// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
})



.controller('myCtrl', function($scope,  $ionicModal, $http){

  $scope.input = {};
	$scope.tableRow = 8;
	$scope.tableTh = 15;
 	$scope.flats = new Array(),
	$scope.powers = new Array();
	$scope.input.power;
	$scope.input.flatVal;
	$scope.flatMin;
	$scope.flatMax;
	$scope.powerRow;
	$scope.minFlat;
	$scope.maxFlat;
	$scope.minPower;
	$scope.maxPower;
	$scope.result1=0;
	$scope.result2=0;
	$scope.interpolation = function(powerRow, flatMin){
		var minTh = flatMin,
			maxTh = $scope.flatMax,
			minFlat = Number($('.'+0).find('.'+minTh).text()),
			maxFlat = Number($('.'+0).find('.'+maxTh).text()),
			row = powerRow,
			minPower = Number($('.'+row).find('.'+minTh).text()),
			maxPower = Number($('.'+row).find('.'+maxTh).text()),

			//COUNTING INTERPOLATION//
			flatD = minFlat - maxFlat,
			powerD = minPower - maxPower;
			kvt = powerD / flatD * (-1),
			flt = Number($scope.input.flatVal) - minFlat,
			kvtForFlatVal = kvt * flt,
			result1 = minPower - kvtForFlatVal,
			result2 = result1 * Number($scope.input.flatVal),
			$scope.result1 = result1,
			$scope.result2 = result2;
			console.log(minFlat);
			console.log(maxFlat);
			console.log(minPower);
			console.log(maxPower);
			
			console.log(flatD);
			console.log(powerD);
			console.log(kvt);
			console.log(flt);
			console.log(kvtForFlatVal);
			console.log(result1);

	}

	$scope.findRow = function(power) {
		$scope.powerRow = undefined;
		for( var i = 0; i < $scope.powers.length; i++ ) {
			power == Number($scope.powers[i]) ? $scope.powerRow = i+1 : false 
		}
		$scope.powerRow == undefined ? alert('Не верно задана мощность') : false
		console.log($scope.powerRow );
	}
	$scope.findMin = function(flatVal){
		if (flatVal > 1000) { 
			$scope.flatMin = 0;
			$scope.flatMax = 14;
			$scope.input.flatVal = 1000;
			console.log('wordk');
		}
		else if (flatVal < 1){
			$scope.flatMin = 0;
			$scope.flatMax = 1;
			$scope.input.flatVal = 1;			
		}
		else {
			for ( var i = 0; i < $scope.flats.length; i++ ) {
				if ( flatVal >= Number($scope.flats[i-1]) && flatVal < Number($scope.flats[i]) ) {
					$scope.flatMin = i-1;
					$scope.flatMax = i;
				}
				else {
					false
				}
			}
		}

   		console.log(Number(flatVal));
		console.log($scope.flatMin);
		console.log($scope.flatMax);
	}
	
	$scope.data = [{
		"flat": 1,
		"first": 5.00,
		"second": 6.50,
		"third": 10.00,
		"fourth": 12.00,
		"fifth": 3.50,
		"sixth": 9.00,
		"seventh": 16.00
	},
	{
		"flat": 3,
		"first": 3.85,
		"second": 5.01,
		"third": 8.19,
		"fourth": 9.83,
		"fifth": 2.84,
		"sixth": 6.33,
		"seventh": 13.05
	},
	{
		"flat": 6,
		"first": 3.23,
		"second": 4.20,
		"third": 5.56,
		"fourth": 6.67,
		"fifth": 1.91,
		"sixth": 5.29,
		"seventh": 8.34
	},
	{
		"flat": 9,
		"first": 2.72,
		"second": 3.53,
		"third": 4.44,
		"fourth": 5.33,
		"fifth": 1.47,
		"sixth": 4.36,
		"seventh": 6.41
	},
	{
		"flat": 12,
		"first": 2.36,
		"second": 3.07,
		"third": 3.76,
		"fourth": 4.51,
		"fifth": 1.22,
		"sixth": 3.72,
		"seventh": 5.39
	},
	{
		"flat": 15,
		"first": 2.10,
		"second": 2.73,
		"third": 3.33,
		"fourth": 3.99,
		"fifth": 1.07,
		"sixth": 3.26,
		"seventh": 4.77
	},
	{
		"flat": 18,
		"first": 1.91,
		"second": 2.48,
		"third": 3.05,
		"fourth": 3.66,
		"fifth": 0.96,
		"sixth": 2.94,
		"seventh": 4.36
	},
	{
		"flat": 24,
		"first": 1.65,
		"second": 2.15,
		"third": 2.72,
		"fourth": 3.26,
		"fifth": 0.83,
		"sixth": 2.51,
		"seventh": 3.83
	},
	{
		"flat": 40,
		"first": 1.31,
		"second": 1.70,
		"third": 2.35,
		"fourth": 2.82,
		"fifth": 0.66,
		"sixth": 2.00,
		"seventh": 3.18
	},
	{
		"flat": 60,
		"first": 1.14,
		"second": 1.48,
		"third": 2.10,
		"fourth": 2.52,
		"fifth": 0.58,
		"sixth": 1.78,
		"seventh": 2.83
	},
	{
		"flat": 100,
		"first": 1.00,
		"second": 3.07,
		"third": 3.76,
		"fourth": 4.51,
		"fifth": 1.22,
		"sixth": 3.72,
		"seventh": 5.39
	},
	{
		"flat": 200,
		"first": 0.87,
		"second": 1.12,
		"third": 1.38,
		"fourth": 1.65,
		"fifth": 0.48,
		"sixth": 1.47,
		"seventh": 2.16
	},
	{
		"flat": 400,
		"first": 0.74,
		"second": 0.96,
		"third": 1.31,
		"fourth": 1.58,
		"fifth": 0.47,
		"sixth": 1.24,
		"seventh": 1.88
	},
	{
		"flat": 600,
		"first": 0.66,
		"second": 0.86,
		"third": 1.19,
		"fourth": 1.43,
		"fifth": 0.46,
		"sixth": 1.08,
		"seventh": 1.77
	},
	{
		"flat": 1000,
		"first": 0.60,
		"second": 0.78,
		"third": 1.10,
		"fourth": 1.32,
		"fifth": 0.41,
		"sixth": 0.99,
		"seventh": 1.76
	}]



	$scope.table = function (tableRow, tableTh ) {
			var row = $scope.tableRow,
				th = $scope.tableTh,
				body = $('body'),
				table = '<table class="table"></table>';


				//MAKE TABLE///////////////////////////////////////////
				$(body).find('.table_wrapper').append(table);
				for (var i = 0; i < row; i++) {

					$('.table').append('<tr class="'+ [i] +'"></tr>');
					
					for ( var j = 0; j < th; j++) {
						$('.table:last-child').find('tr:last-child').append('<th class="'+ [j] +'"></th>');
						

					}
				}

				var tablerow = $('tr');

				for ( var j = 0; j < 1; j++ ){

					for ( var i = 0; i < $scope.data.length; i++ ){
						var x = $('tr'),
							y = $('th');

						$(x[0]).find(y[i]).text($scope.data[i].flat);

					}
				}

				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[1]).find('th');
					$(tablecell[i]).text($scope.data[i].first);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[2]).find('th');
					$(tablecell[i]).text($scope.data[i].second);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[3]).find('th');
					$(tablecell[i]).text($scope.data[i].third);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[4]).find('th');
					$(tablecell[i]).text($scope.data[i].fourth);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[5]).find('th');
					$(tablecell[i]).text($scope.data[i].fifth);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[6]).find('th');
					$(tablecell[i]).text($scope.data[i].sixth);
				}
				for ( var i = 0; i < $scope.data.length; i++ ) {
					var tablecell = $(tablerow[7]).find('th');
					$(tablecell[i]).text($scope.data[i].seventh);
				}


				for (var i = 0; i < $(tablerow[0]).find('th').length; i++) {
					var tablecell = $(tablerow[0]).find('th'),
						value = $(tablecell[i]).text();

					$scope.flats.push(value);
				}
				for (var i = 0; i < $(tablerow).length - 1; i++) {
					var tablecell = $(tablerow[i+1]).find('th').first(),
						value = $(tablecell).text();

					$scope.powers.push(value);
				}
		}

})




