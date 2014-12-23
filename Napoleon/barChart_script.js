
//Bar chart	soldiers before and after
function chartBeforeAfter (error, data) {
	
var marginChart = {top: 30, right: 20, bottom: 40, left: 110},
    widthChart = 650 - marginChart.left - marginChart.right,
    heightChart = 310 - marginChart.top - marginChart.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, widthChart], .1);

var y0 = d3.scale.linear().domain([0, 13000]).range([heightChart, 0]),
y1 = d3.scale.linear().domain([0, 13000]).range([heightChart, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
	
// create left yAxis
var yAxisLeft = d3.svg.axis().scale(y0).tickFormat(d3.format("")).ticks(9).orient("left");

var yAxisGridChart = d3.svg.axis().scale(y0).orient("left").ticks(13).tickSize(-widthChart, 0, 0).tickFormat("");


var svgChart = d3.select("#BarChart").append("svg")
    .attr("width", widthChart + marginChart.left + marginChart.right)
    .attr("height", heightChart + marginChart.top + marginChart.bottom)
  .append("g")
    .attr("class", "chartBeforeAfter")
    .attr("transform", "translate(" + marginChart.left + "," + marginChart.top + ")");
	
d3.tsv("data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.nameC; }));
  y0.domain([0, d3.max(data, function(d) { return d.before; })]);
  
  svgChart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + heightChart + ")")
	  .style("font-size", "11px")
      .call(xAxis);

  svgChart.append("g")
	  .attr("class", "y axis axisLeft")
	  .attr("transform", "translate(0,0)")
	  .call(yAxisLeft)
	.append("text")
	  .attr("y", 6)
	  .attr("dy", "-2em")
	  .style("text-anchor", "end")
	  .style("text-anchor", "end")
	  .text("Soldiers");
	  
	     // Add Y Axis grid lines
    svgChart.append("g")         
      .attr("class", "y axis axisLeft")
      .call(yAxisGridChart);
	   
var barWidth = widthChart / data.length;
 var bars = svgChart.selectAll(".bar").data(data).enter();

  bars.append("rect")
      .attr("class", "barA")
      .attr("x", function(d) { return x(d.nameC); })
      .attr("width", x.rangeBand()/2)
      .attr("y", function(d) { return y0(d.before); })
	  .attr("height", function(d,i,j) { return heightChart - y0(d.before); }); 

  bars.append("rect")
      .attr("class", "barB")
      .attr("x", function(d) { return x(d.nameC) + x.rangeBand()/2; })
      .attr("width", x.rangeBand() / 2)
      .attr("y", function(d) { return y1(d.after); })
	  .attr("height", function(d,i,j) { return heightChart - y1(d.after); }); 
	  
  var legendNamesChart = d3.keys(data[0]).filter(function (key) {
    return key == "before";
});	

 var legendNamesChart2 = d3.keys(data[0]).filter(function (key) {
    return key == "before";
});	  


 var legendChart = svgChart.selectAll(".legendChart")
      .data(legendNamesChart.slice())
    .enter().append("g")
      .attr("class", "legendChart")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
	  
	  var legendChart2 = svgChart.selectAll(".legendChart2")
      .data(legendNamesChart2.slice())
    .enter().append("g")
      .attr("class", "legendChart2")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legendChart.append("text")
      .attr("x", widthChart - 405)
      .attr("y", 20)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("left bar: before")
	  .style("font-size", "12px");
	  
	  legendChart2.append("text")
      .attr("x", widthChart - 405)
      .attr("y", 40)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("right bar: after")
	  .style("font-size", "12px");
	  
	d3.select(".legendChart")
  .append("text")
  .attr("x", widthChart - 420)             
  .attr("y", 5)
  .attr("text-anchor", "front")  
  .text("Before/after the crossing:")
  .style("font-size", "12px");
	 
//filter for mouseover
//before	
var c14 = svgChart.selectAll(".barA").filter(function(d) { return d.before == "2475"; }).attr("class", "blue0");
c14.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2 = svgChart.selectAll(".barA").filter(function(d) { return d.before == "8113"; }).attr("class", "blue1");
c2.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35 = svgChart.selectAll(".barA").filter(function(d) { return d.before == "4300"; }).attr("class", "blue2");
c35.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9 = svgChart.selectAll(".barA").filter(function(d) { return d.before == "13250"; }).attr("class", "blue3");
c9.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGO = svgChart.selectAll(".barA").filter(function(d) { return d.before == "5306"; }).attr("class", "blue4");
cIGO.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGY = svgChart.selectAll(".barA").filter(function(d) { return d.before == "2225"; }).attr("class", "blue5");
cIGY.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);	

//after
var c14a = svgChart.selectAll(".barB").filter(function(d) { return d.after == "1238"; }).attr("class", "red0");
c14a.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2a = svgChart.selectAll(".barB").filter(function(d) { return d.after == "4057"; }).attr("class", "red1");
c2a.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35a = svgChart.selectAll(".barB").filter(function(d) { return d.after == "2150"; }).attr("class", "red2");
c35a.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9a = svgChart.selectAll(".barB").filter(function(d) { return d.after == "6625"; }).attr("class", "red3");
c9a.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOa = svgChart.selectAll(".barB").filter(function(d) { return d.after == "2653"; }).attr("class", "red4");
cIGOa.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYa = svgChart.selectAll(".barB").filter(function(d) { return d.after == "1113"; }).attr("class", "red5");
cIGYa.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	



	 
	  
});

function type(d) {
  d.before = +d.before;
  return d;
}



}

//end bar chart soldiers before & after
//--------------------------------------------------------------------------------------




