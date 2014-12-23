function drawErrorBarChart (error, data){


var margin = {
    top: 30,
    right: 10,
    bottom: 30,
    left: 40
},
width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var x2 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x3 = d3.scale.ordinal();

var y0 = d3.scale.linear()
    .range([height, 0]);

var y1 = d3.scale.linear()
    .range([height, 0]);
	
var y2 = d3.scale.linear()
    .range([height, 0]);

var y3 = d3.scale.linear()
    .range([height, 0]);
	

var color = d3.scale.ordinal()
    .range(["#377eb8", "#e41a1c"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y0)
    .orient("left")
    .tickFormat(d3.format(""));
	
var yAxisGrid = d3.svg.axis().scale(y0).orient("left").ticks(13).tickSize(-width, 0, 0).tickFormat("");

var svg = d3.select("#ErrorbarChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

JSONdata = [{
    "State": "Corps II",
        "before": 8113,
         "after": 4057,
		"moe": 1187,
		"moe2": 1113,
		"moe3": 594,
		"moe4": 557,
		"max": 9300,
		"min": 7000,
		"max2": 4651,
		"min2": 3500
		
},{
    "State": "Corps III & V",
        "before": 4300,
        "after": 2150,
	    "moe": 1100,
		"moe2": 1300,
		"moe3": 550,
		"moe4": 650,
		"max": 5400,
		"min": 3000,
		"max2": 2700,
		"min2": 1500
},{
    "State": "Imp. Guard old",
        "before": 5306,
        "after": 2653,
		"moe": 639,
		"moe2": 426,
		 "moe3": 320,
		"moe4": 213,
		"max": 5945,
		"min": 4880,
		"max2": 2973,
		"min2": 2440
},{
    "State": "Imp. Guard young",
        "before": 2225,
        "after": 1113,
	    "moe": 775,
		"moe2": 725,
		"moe3": 388,
		"moe4": 363,
		"max": 3000,
		"min": 1500,
		"max2": 1501,
		"min2": 750
},{
 "State": "Corps I & IV",
        "before": 2475,
         "after": 1238,
        "moe": 625,
		"moe2": 275,
		"moe3": 313,
		"moe4": 138,
		"max": 3100,
		"min": 2200,
		"max2": 1551,
		"min2": 1100
		
},{
    "State": "Corps IX",
        "before": 13250,
        "after": 6625,
        "moe": 5500,
		"moe2": 3250,
		"moe3": 2750,
		"moe4": 1625,
		"max": 18800,
		"min": 10000,
		"max2": 9375,
		"min2": 5000
}]

//d3.json(JSONdata, function(error, data) {
data = JSONdata;
var ageNames = d3.keys(data[0]).filter(function (key) {
    return key == "before" ;
});

var ageNames2 = d3.keys(data[0]).filter(function (key) {
    return key == "after" ;
});


data.forEach(function (d) {
    d.moe = +d.moe
	d.moe2 = +d.moe2
	d.moe3 = +d.moe3
	d.moe4 = +d.moe4
    d.ages = ageNames.map(function (name) {
        return {
            name: name,
            value: d.before,
            moe: d.moe, 
			moe2: d.moe2, 
			max: d.max,
			min: d.min
            //add the margin of error to each individual
            //data object
        };
    })
	d.ages2 = ageNames2.map(function (name) {
        return {
            name: name,
            value2: d.after,
            moe3: d.moe3, 
			moe4: d.moe4,
			max2: d.max2,
			min2: d.min2
            //add the margin of error to each individual
            //data object
        };
    });
	
});

x0.domain(data.map(function (d) {
    return d.State;
}));
x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
x2.domain(data.map(function (d) {
    return d.State;
}));
x3.domain(ageNames2).rangeRoundBands([0, x2.rangeBand()]);
y0.domain([0, 19000]);
y1.domain([0, d3.max(data, function (d) {
    return d3.max(d.ages, function (d) {
        return d.value;
    });
})]);
y2.domain([0, d3.max(data, function (d) {
    return d3.max(d.ages2, function (d) {
        return d.value2;
    });
})]);
y3.domain([0, d3.max(data, function (d) {
    return d3.max(d.ages2, function (d) {
        return d.value2;
    });
})]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    //.attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-2em")
    .style("text-anchor", "end")
    .text("Soldiers");
	
 // Add Y Axis grid lines
    svg.append("g")         
      .attr("class", "y axis axisLeft")
      .call(yAxisGrid);

var state = svg.selectAll(".state")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

var state2 = svg.selectAll(".state2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});


state.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "barC")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.value);
    })
    .attr("height", function (d) {
        return height - y0(d.value);
    });

	
state2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "barD")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.value2);
    })
    .attr("height", function (d) {
        return height - y0(d.value2);
    });
	


var errorBarArea = d3.svg.area()
    .x(function (d) {
        return x1(d.name) +x1.rangeBand()/4;
    })
    .y0(function (d) {
        return y0(d.value + +d.moe );
    })
    .y1(function (d) {
        return y0(d.value - +d.moe2);
    })	
	
var errorBarArea2 = d3.svg.area()
    .x(function (d) {
        return x3(d.name) +x3.rangeBand()/(1.35);
    })
    .y0(function (d) {
        return y0(d.value2 + +d.moe3 );
    })
    .y1(function (d) {
        return y0(d.value2 - +d.moe4);
    })	
	


var errorBars = state.selectAll("path.errorBar")
    .data(function (d) {
        return d.ages; //one error line for each data bar
    });


	
errorBars.enter().append("path").attr("class", "errorBar");

errorBars.attr("d", function (d) {
        return errorBarArea([d]);
    //turn the data into a one-element array 
    //and pass it to the area function
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);
	

var errorBars2 = state2.selectAll("path.errorBar2")
    .data(function (d) {
        return d.ages2; //one error line for each data bar
    });

errorBars2.enter().append("path").attr("class", "errorBar2");

errorBars2.attr("d", function (d) {
        return errorBarArea2([d]);
    //turn the data into a one-element array 
    //and pass it to the area function
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);
	
	
//horizontal lines
var median = svg.selectAll(".median")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

median.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "median")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.value) ;
    })
    .attr("height",1);


var median2 = svg.selectAll(".median2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});

median2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "median")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.value2) ;
    })
    .attr("height",1);
	
	
	
	
	var line_top = svg.selectAll(".line_top")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

line_top.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "line")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.max) ;
    })
    .attr("height",1);
	
	
	var line_bottom = svg.selectAll(".line_bottom")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

line_bottom.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "line2")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.min) ;
    })
    .attr("height",1);
	

	
	
	
var line_top2 = svg.selectAll(".line_top2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});

line_top2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "line")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.max2) ;
    })
    .attr("height",1);
	
	
	var line_bottom2 = svg.selectAll(".line_bottom2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});

line_bottom2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "line2")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.min2) ;
    })
    .attr("height",1);	
	
	
	
	
	

    var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("text")
      .attr("x", width - 430)
      .attr("y", 25)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("left bar: before")
	  .style("font-size", "12px");
	  
	d3.select(".legend")
  .append("text")
  .attr("x", width - 430)             
  .attr("y", 5)
  .attr("text-anchor", "front")  
  .text("Number of soldiers before/after the crossing:")
  .style("font-size", "12px");


  var legend2 = svg.selectAll(".legend2")
      .data(ageNames2.slice().reverse())
    .enter().append("g")
      .attr("class", "legend2")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend2.append("text")
      .attr("x", width - 430)
      .attr("y", 48)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("right bar: after")
	  .style("font-size", "12px");
	  
	var legend3 = svg.selectAll(".legend3")
      .data(ageNames2.slice().reverse())
    .enter().append("g")
      .attr("class", "legend2")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend3.append("rect")
      .attr("x", width - 423)
	  .attr("y", 64)
      .attr("width", 2)
      .attr("height", 15)
      .style("fill", "black");

  legend3.append("text")
      .attr("x", width - 405)
      .attr("y", 71)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("Uncertainty range (number of soldiers)")
	  .style("font-size", "12px");

	  
	  var legend4 = svg.selectAll(".legend3")
      .data(ageNames2.slice().reverse())
    .enter().append("g")
      .attr("class", "legend2")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend4.append("rect")
      .attr("x", width - 432)
	  .attr("y", 90)
      .attr("width", 20)
      .attr("height", 2)
      .style("fill", "black");

  legend4.append("text")
      .attr("x", width - 405)
      .attr("y", 91)
      .attr("dy", ".35em")
      .style("text-anchor", "front")
      .text("Uncertainty indicator (min, average, max)")
	  .style("font-size", "12px");

//filter for mouseover
//before	
var c14 = state.selectAll(".barC").filter(function(d) { return d.moe == "625"; }).attr("class", "before0_relative");
c14.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2 = state.selectAll(".barC").filter(function(d) { return d.moe == "1187"; }).attr("class", "before1_relative");
c2.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35 = state.selectAll(".barC").filter(function(d) { return d.moe == "1100"; }).attr("class", "before2_relative");
c35.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9 = state.selectAll(".barC").filter(function(d) { return d.moe == "5500"; }).attr("class", "before3_relative");
c9.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGO = state.selectAll(".barC").filter(function(d) { return d.moe == "639"; }).attr("class", "before4_relative");
cIGO.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGY = state.selectAll(".barC").filter(function(d) { return d.moe == "775"; }).attr("class", "before5_relative");
cIGY.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);	


//after
var c14a = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "313"; }).attr("class", "after0_relative");
c14a.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2a = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "594"; }).attr("class", "after1_relative");
c2a.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35a = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "550"; }).attr("class", "after2_relative");
c35a.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9a = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "2750"; }).attr("class", "after3_relative");
c9a.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOa = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "320"; }).attr("class", "after4_relative");
cIGOa.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYa = state2.selectAll(".barD").filter(function(d) { return d.moe3 == "388"; }).attr("class", "after5_relative");
cIGYa.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	


}


