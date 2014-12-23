function drawUncertaintyCharts (error,data) {
//chart uncertaity before


var marginUncertainty = {top: 23, right: 10, bottom: 30, left: 60},
    widthUncertainty = 570 - marginUncertainty.left - marginUncertainty.right,
    heightUncertainty = 300 - marginUncertainty.top - marginUncertainty.bottom;

var xUncertainty = d3.scale.ordinal()
    .rangeRoundBands([0, widthUncertainty], .1);

var y0Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y1Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y2Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y3Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y4Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y5Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y6Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]),
y7Uncertainty = d3.scale.linear().domain([0, 19000]).range([heightUncertainty, 0]);

var xAxisUncertainty = d3.svg.axis()
    .scale(xUncertainty)
    .orient("bottom");
	
// create left yAxis
var yAxisUncertainty = d3.svg.axis().scale(y0Uncertainty).orient("left");

var yAxisGrid = d3.svg.axis().scale(y0Uncertainty).orient("left").ticks(19).tickSize(-widthUncertainty, 0, 0).tickFormat("");

var svgUncertainty = d3.select("#Uncertainty").append("svg").attr("border", 3)
    .attr("width", widthUncertainty + marginUncertainty.left + marginUncertainty.right)
    .attr("height", heightUncertainty + marginUncertainty.top + marginUncertainty.bottom)
	 .append("g")
    .attr("class", "graph")
    .attr("transform", "translate(" + marginUncertainty.left + "," + marginUncertainty.top + ")");

	var borderPath2 = svgUncertainty.append("rect")
	.attr("x", -45)
	.attr("y", -22)
    .attr("height", 295)
    .attr("width", 550)
    .attr("id", "borderPath2");
	
 // Add Y Axis grid lines
    svgUncertainty.append("g")         
      .attr("class", "grid")
      .call(yAxisGrid);	
	
d3.tsv("uncertainty.tsv", type, function(error, data) {
  xUncertainty.domain(data.map(function(d) { return d.name; }));
  y0Uncertainty.domain([0, d3.max(data, function(d) { return d.Chambray_before; })]);
  

  svgUncertainty.append("g")
      .attr("class", "x axisUncertainty")
      .attr("transform", "translate(0," + heightUncertainty + ")")
      .call(xAxisUncertainty);

  svgUncertainty.append("g")
	  .attr("class", "y axis axisUncertainty")
	  .attr("transform", "translate(0,0)")
	  .call(yAxisUncertainty)
	.append("text")
	  .attr("y", 10)
	  .attr("dy", "-2em")
	  .style("text-anchor", "end")
	  .style("text-anchor", "end")
	  .text("Soldiers");
	  
  // Add Y Axis grid lines
    svgUncertainty.append("g")         
      .attr("class", "y axis axisUncertainty")
      .call(yAxisGrid);

 
var barWidth = widthUncertainty / data.length;
 var barsUncertainty = svgUncertainty.selectAll(".bar").data(data).enter();

  barsUncertainty.append("rect")
      .attr("class", "bar1")
      .attr("x", function(d) { return xUncertainty(d.name); })
      .attr("width", xUncertainty.rangeBand()/4)
      .attr("y", function(d) { return y0Uncertainty(d.Chambray_before); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y0Uncertainty(d.Chambray_before); }); 

  barsUncertainty.append("rect")
      .attr("class", "bar2")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/2; })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y1Uncertainty(d.Wilson_before); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y1Uncertainty(d.Wilson_before); }); 
	  
	barsUncertainty.append("rect")
      .attr("class", "bar3")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/4; })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y2Uncertainty(d.Fain_before); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y2Uncertainty(d.Fain_before); }); 
	  
	  barsUncertainty.append("rect")
      .attr("class", "bar4")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/(1.34); })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y3Uncertainty(d.Gourgaud_before); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y3Uncertainty(d.Gourgaud_before); }); 
	  
	  barsUncertainty.append("rect")
      .attr("class", "bar5")
      .attr("x", function(d) { return xUncertainty(d.name); })
      .attr("width", xUncertainty.rangeBand()/4)
      .attr("y", function(d) { return y4Uncertainty(d.Chambray_after); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y4Uncertainty(d.Chambray_after); }); 

  barsUncertainty.append("rect")
      .attr("class", "bar6")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/2; })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y5Uncertainty(d.Wilson_after); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y5Uncertainty(d.Wilson_after); }); 
	  
	barsUncertainty.append("rect")
      .attr("class", "bar7")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/4; })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y6Uncertainty(d.Fain_after); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y6Uncertainty(d.Fain_after); }); 
	  
	  barsUncertainty.append("rect")
      .attr("class", "bar8")
      .attr("x", function(d) { return xUncertainty(d.name) + xUncertainty.rangeBand()/(1.34); })
      .attr("width", xUncertainty.rangeBand() / 4)
      .attr("y", function(d) { return y7Uncertainty(d.Gourgaud_after); })
	  .attr("height", function(d,i,j) { return heightUncertainty - y7Uncertainty(d.Gourgaud_after); }); 
	  
						   	 
var legendNamesUncertainty = d3.keys(data[0]).filter(function (key) {
    return key !== "name" && key !== "Chambray_after" && key !== "Wilson_after" && key !== "Fain_after" && key !== "Gourgaud_after";
});	  

var colorUncertainty = d3.scale.ordinal()
    .range(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"]);

 var legendUncertainty = svgUncertainty.selectAll(".legendUncertainty")
      .data(legendNamesUncertainty.slice())
    .enter().append("g")
      .attr("class", "legendUncertainty")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legendUncertainty.append("rect")
      .attr("x", widthUncertainty - 420)
	  .attr("y", 14)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", colorUncertainty);

  legendUncertainty.append("text")
      .attr("x", widthUncertainty - 405)
      .attr("y", 18)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text(function(d) { return d; })
	  .style("font-size", "11px");

	 d3.select(".legendUncertainty")
  .append("text")
  .attr("x", widthUncertainty - 420)             
  .attr("y", 3)
  .attr("text-anchor", "front")  
  .text("Uncertainty Sources:")
  .style("font-size", "11px"); 
	  

var legendNamesUncertainty2 = d3.keys(data[0]).filter(function (key) {
    return key !== "name" && key !== "Chambray_before" && key !== "Wilson_before" && key !== "Fain_before" && key !== "Gourgaud_before";
});	  

 var legendUncertainty2 = svgUncertainty.selectAll(".legendUncertainty2")
      .data(legendNamesUncertainty2.slice())
    .enter().append("g")
      .attr("class", "legendUncertainty2")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legendUncertainty2.append("rect")
      .attr("x", widthUncertainty - 420)
	   .attr("y", 14)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", colorUncertainty);

  legendUncertainty2.append("text")
      .attr("x", widthUncertainty - 405)
      .attr("y", 18)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text(function(d) { return d; })
	  .style("font-size", "11px");
	  
	 d3.select(".legendUncertainty2")
  .append("text")
  .attr("x", widthUncertainty - 420)             
  .attr("y", 3)
  .attr("text-anchor", "front")  
  .text("Uncertainty Sources:")
  .style("font-size", "11px"); 

d3.selectAll(".legendUncertainty2").attr("visibility", "hidden");	  
	

//filter for mouseover
//before	
var c14bar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Corps I & IV"; });
c14bar1.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	
var c14bar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Corps I & IV"; });
c14bar2.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	
var c14bar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Corps I & IV"; });
c14bar3.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	
var c14bar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Corps I & IV"; });
c14bar4.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2bar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Corps II"; });
c2bar1.on("mouseover", clickCorps2_before).on("mouseout", clearAll);
var c2bar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Corps II"; });
c2bar2.on("mouseover", clickCorps2_before).on("mouseout", clearAll);
var c2bar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Corps II"; });
c2bar3.on("mouseover", clickCorps2_before).on("mouseout", clearAll);
var c2bar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Corps II"; });
c2bar4.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35bar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Corps III & V"; });
c35bar1.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	
var c35bar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Corps III & V"; });
c35bar2.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	
var c35bar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Corps III & V"; });
c35bar3.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	
var c35bar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Corps III & V"; });
c35bar4.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9bar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Corps IX"; });
c9bar1.on("mouseover", clickCorps9_before).on("mouseout", clearAll);
var c9bar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Corps IX"; });
c9bar2.on("mouseover", clickCorps9_before).on("mouseout", clearAll);
var c9bar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Corps IX"; });
c9bar3.on("mouseover", clickCorps9_before).on("mouseout", clearAll);
var c9bar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Corps IX"; });
c9bar4.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGObar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGObar1.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	
var cIGObar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGObar2.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	
var cIGObar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGObar3.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	
var cIGObar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGObar4.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGYbar1 = svgUncertainty.selectAll(".bar1").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYbar1.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);
var cIGYbar2 = svgUncertainty.selectAll(".bar2").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYbar2.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);
var cIGYbar3 = svgUncertainty.selectAll(".bar3").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYbar3.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);
var cIGYbar4 = svgUncertainty.selectAll(".bar4").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYbar4.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);	

//after
var c14abar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Corps I & IV"; });
c14abar1.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	
var c14abar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Corps I & IV"; });
c14abar2.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	
var c14abar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Corps I & IV"; });
c14abar3.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	
var c14abar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Corps I & IV"; });
c14abar4.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2abar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Corps II";; });
c2abar1.on("mouseover", clickCorps2_after).on("mouseout", clearAll);
var c2abar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Corps II";; });
c2abar2.on("mouseover", clickCorps2_after).on("mouseout", clearAll);
var c2abar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Corps II";; });
c2abar3.on("mouseover", clickCorps2_after).on("mouseout", clearAll);
var c2abar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Corps II";; });
c2abar3.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35abar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Corps III & V";; });
c35abar1.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	
var c35abar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Corps III & V";; });
c35abar2.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	
var c35abar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Corps III & V";; });
c35abar3.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	
var c35abar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Corps III & V";; });
c35abar4.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9abar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Corps IX"; });
c9abar1.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	
var c9abar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Corps IX"; });
c9abar2.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	
var c9abar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Corps IX"; });
c9abar3.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	
var c9abar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Corps IX"; });
c9abar4.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOabar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGOabar1.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);
var cIGOabar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGOabar2.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);
var cIGOabar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGOabar3.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);
var cIGOabar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Imp. Guard old"; });
cIGOabar4.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYabar1 = svgUncertainty.selectAll(".bar5").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYabar1.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	
var cIGYabar2 = svgUncertainty.selectAll(".bar6").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYabar2.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	
var cIGYabar3 = svgUncertainty.selectAll(".bar7").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYabar3.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	
var cIGYabar4 = svgUncertainty.selectAll(".bar8").filter(function(d) { return d.name == "Imp. Guard young"; });
cIGYabar4.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	




	
});

function type(d) {
  d.Chambray_before = +d.Chambray_before;
  return d;
}	



//end chart uncertainty
}
