var chart = null;
$.getJSON('http://10.131.239.236:8080/api/getDappsAmountByMonth', function (data) {
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
	chart = Highcharts.chart('chart-DApps-month', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: 'New DApps per Month',
		},
		subtitle: {
			//text: document.ontouchstart === undefined ?
			// '鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				 text:null,
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: 'DApps',
			data: data
		}]
	});
});

var chart = null;
$.getJSON('http://10.131.239.236:8080/api/getDappsAmountByMonth', function (data) {
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
	chart = Highcharts.chart('chart-24h-Users', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: 'Daily Users of All DApps',
		},
		subtitle: {
			//text: document.ontouchstart === undefined ?
			// '鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				 text:null,
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: 'Users',
			data: data
		}]
	});
});


// var chart = null;
// $.getJSON('',function(data){
// 	chart = Highcharts.chart('chart-24h-volume-Tx', {
// 		chart: {
// 			zoomType: 'xy'
// 		},
// 		title: {
// 			text: '24h Volume & Tx of All DApps'
// 		},
// 		// subtitle: {
// 		// 	text: '数据来源: WorldClimate.com'
// 		// },
// 		// xAxis: [{
// 		// 	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// 		// 				 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// 		// 	crosshair: true
// 		// }],
// 		xAxis: {
// 			type: 'datetime',
// 			dateTimeLabelFormats: {
// 				millisecond: '%H:%M:%S.%L',
// 				second: '%H:%M:%S',
// 				minute: '%H:%M',
// 				hour: '%H:%M',
// 				day: '%m-%d',
// 				week: '%m-%d',
// 				month: '%Y-%m',
// 				year: '%Y'
// 			}
// 		},
// 		tooltip: {
// 			dateTimeLabelFormats: {
// 				millisecond: '%H:%M:%S.%L',
// 				second: '%H:%M:%S',
// 				minute: '%H:%M',
// 				hour: '%H:%M',
// 				day: '%Y-%m-%d',
// 				week: '%m-%d',
// 				month: '%Y-%m',
// 				year: '%Y'
// 			}
// 		},
// 		yAxis: [{ // Primary yAxis
// 			labels: {
// 				//format: '{value}°C',
// 				style: {
// 					color: Highcharts.getOptions().colors[1]
// 				}
// 			},
// 			title: {
// 				text: 'Tx',
// 				style: {
// 					color: Highcharts.getOptions().colors[1]
// 				}
// 			}
// 		}, { // Secondary yAxis
// 			title: {
// 				text: 'Volume',
// 				style: {
// 					color: Highcharts.getOptions().colors[0]
// 				}
// 			},
// 			labels: {
// 				format: '{value} eth',
// 				style: {
// 					color: Highcharts.getOptions().colors[0]
// 				}
// 			},
// 			opposite: true
// 		}],
// 		tooltip: {
// 			shared: true
// 		},
// 		legend: {
// 			layout: 'vertical',
// 			align: 'left',
// 			x: 120,
// 			verticalAlign: 'top',
// 			y: 100,
// 			floating: true,
// 			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
// 		},
// 		series: [{
// 			name: 'Volume',
// 			type: 'column',
// 			yAxis: 1,
// 			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
// 			tooltip: {
// 				valueSuffix: ' mm'
// 			}
// 		}, {
// 			name: 'Tx',
// 			type: 'spline',
// 			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
// 			tooltip: {
// 				valueSuffix: '°C'
// 			}
// 		}]
// 	});	
// });

var chart = Highcharts.chart('chart-24h-volume-Tx', {
	chart: {
		zoomType: 'xy'
	},
	title: {
		text: 'Daily Volume & Tx of All DApps'
	},
	// subtitle: {
	// 	text: '数据来源: WorldClimate.com'
	// },
	xAxis: [{
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		crosshair: true
	}],
	yAxis: [{ // Primary yAxis
		labels: {
			//format: '{value}°C',
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		},
		title: {
			text: null,
			style: {
				color: Highcharts.getOptions().colors[1]
			}
		}
	}, { // Secondary yAxis
		title: {
			text: null,
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		},
		labels: {
			format: '{value} eth',
			style: {
				color: Highcharts.getOptions().colors[0]
			}
		},
		opposite: true
	}],
	tooltip: {
		shared: true
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		x: 120,
		verticalAlign: 'top',
		y: 100,
		floating: true,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	series: [{
		name: 'Volume',
		type: 'column',
		yAxis: 1,
		data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		tooltip: {
			valueSuffix: ' mm'
		}
	}, {
		name: 'Tx',
		type: 'spline',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
		tooltip: {
			valueSuffix: '°C'
		}
	}]
});


