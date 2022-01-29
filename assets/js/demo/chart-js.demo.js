/*
Template Name: ASPSTUDIO - Responsive Bootstrap 4 Admin Template
Version: 1.1.0
Author: Sean Ngu
Website: http://www.seantheme.com/asp-studio/
*/

var handleRenderChartJs = function() {
	Chart.defaults.global.defaultFontFamily = FONT_FAMILY;
	Chart.defaults.global.defaultFontColor = COLOR_GRAY_900;
	Chart.defaults.global.tooltips.xPadding = 8;
	Chart.defaults.global.tooltips.yPadding = 8;
	Chart.defaults.global.tooltips.multiKeyBackground = 'transparent';
	Chart.defaults.scale.gridLines.color = COLOR_GRAY_200;
	Chart.defaults.scale.gridLines.zeroLineColor = COLOR_GRAY_300;
	Chart.defaults.scale.ticks.beginAtZero = true;
	Chart.defaults.global.tooltips.backgroundColor = hexToRgba(COLOR_GRAY_900, .95);
	Chart.defaults.global.tooltips.titleFontFamily = FONT_FAMILY;
	Chart.defaults.global.tooltips.titleFontStyle = 600;
	Chart.defaults.global.tooltips.footerFontFamily = FONT_FAMILY;
	
	var ctx = document.getElementById('lineChart');
	var lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			datasets: [{
				color: COLOR_BLUE,
				backgroundColor: hexToRgba(COLOR_BLUE, .2),
				borderColor: COLOR_BLUE,
				borderWidth: 1.5,
				pointBackgroundColor: COLOR_WHITE,
				pointBorderWidth: 1.5,
				pointRadius: 4,
				pointHoverBackgroundColor: COLOR_BLUE,
				pointHoverBorderColor: COLOR_WHITE,
				pointHoverRadius: 7,
				label: 'Total Sales',
				data: [12, 19, 4, 5, 2, 3]
			}]
		}
	});
	
	var ctx2 = document.getElementById('barChart');
	var barChart = new Chart(ctx2, {
		type: 'bar',
		data: {
			labels: ['Jan','Feb','Mar','Apr','May','Jun'],
			datasets: [{
				label: 'Total Visitors',
				data: [37,31,36,34,43,31],
				backgroundColor: hexToRgba(COLOR_BLUE, .2),
				borderColor: COLOR_BLUE,
				borderWidth: 1.5
			},{
				label: 'New Visitors',
				data: [12,16,20,14,23,21],
				backgroundColor: hexToRgba(COLOR_GRAY_500, .2),
				borderColor: COLOR_GRAY_500,
				borderWidth: 1.5
			}]
		}
	});
	
	var ctx3 = document.getElementById('radarChart');
	var radarChart = new Chart(ctx3, {
		type: 'radar',
		data: {
			labels: ['United States', 'Canada', 'Australia', 'Netherlands', 'Germany', 'New Zealand', 'Singapore'],
			datasets: [
				{
					label: 'Mobile',
					backgroundColor: hexToRgba(COLOR_BLUE, .2),
					borderColor: COLOR_BLUE,
					pointBackgroundColor: COLOR_WHITE,
					pointBorderColor: COLOR_BLUE,
					pointHoverBackgroundColor: COLOR_BLUE,
					pointHoverBorderColor: COLOR_WHITE,
					data: [65, 59, 90, 81, 56, 55, 40],
					borderWidth: 1.5
				},
				{
					label: 'Desktop',
					backgroundColor: hexToRgba(COLOR_GRAY_500, .2),
					borderColor: COLOR_GRAY_500,
					pointBackgroundColor: COLOR_WHITE,
					pointBorderColor: COLOR_GRAY_500,
					pointHoverBackgroundColor: COLOR_GRAY_500,
					pointHoverBorderColor: COLOR_WHITE,
					data: [28, 48, 40, 19, 96, 27, 100],
					borderWidth: 1.5
				}
			]
		}
	});
	
	var ctx4 = document.getElementById('polarAreaChart');
	var polarAreaChart = new Chart(ctx4, {
		type: 'polarArea',
		data: {
			datasets: [{
				data: [11, 16, 7, 3, 14],
				backgroundColor: [hexToRgba(COLOR_BLUE, .85), hexToRgba(COLOR_INDIGO, .85), hexToRgba(COLOR_AQUA, .85), hexToRgba(COLOR_GRAY_500, .85), hexToRgba(COLOR_GRAY_800, .85)],
				borderWidth: 0
			}],
			labels: ['IE', 'Safari', 'Chrome', 'Firefox', 'Opera']
		}
	});
	
	var ctx5 = document.getElementById('pieChart');
	var pieChart = new Chart(ctx5, {
		type: 'pie',
		data: {
			labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [COLOR_BLUE, COLOR_INDIGO, COLOR_GRAY_900],
				hoverBackgroundColor: [COLOR_BLUE, COLOR_INDIGO, COLOR_GRAY_900],
				borderWidth: 0
			}]
		}
	});
	
	var ctx6 = document.getElementById('doughnutChart');
	var doughnutChart = new Chart(ctx6, {
		type: 'doughnut',
		data: {
			labels: ['Total Visitor', 'New Visitor', 'Returning Visitor'],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [COLOR_BLUE, COLOR_INDIGO, COLOR_GRAY_900],
				hoverBackgroundColor: [COLOR_BLUE, COLOR_INDIGO, COLOR_GRAY_900],
				borderWidth: 0
			}]
		}
	});
};

/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderChartJs();
});