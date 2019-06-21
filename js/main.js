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
			},
			floor: 0
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
$.getJSON('http://10.131.239.236:8080/api/getUsersAmountByDay', function (data) {
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

$.getJSON('http://10.131.239.236:8080/api/getVolumesByDay', function (data) {
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
	chart = Highcharts.chart('chart-24h-volume', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: 'Daily Volumes of All DApps',
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
			},
			floor: 0
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

$.getJSON('http://10.131.239.236:8080/api/getTxAmountByDay', function (data) {
//$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
	chart = Highcharts.chart('chart-24h-tx', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: 'Daily Txs of All DApps',
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
			},
			floor: 0
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