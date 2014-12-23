function drawErrorBarChart (error, data){


var margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 40
},
width = 600 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

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

var svg = d3.select("#Uncertainty").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

JSONdata = [{
    "State": "Corps II",
        "top": 8588,
        "low": 7600,
		"moe": 712,
		"moe2": 600,
		"median": 8075,
		"max": 9300,
		"min": 7000,
		"top2": 4294,
        "low2": 3800,
		"moe3": 356,
		"moe4": 300,
		"median_after": 4038,
		"max_after": 4650,
		"min_after": 3500
		
		
},{
    "State": "Corps III & V",
        "top": 5400,
        "low": 3300,
	    "moe": 0,
		"moe2": 300,
		"median": 4400,
		"max": 5400,
		"min": 3000,
		"top2": 2700,
        "low2": 1650,
	    "moe3": 0,
		"moe4": 150,
		"median_after": 2200,
		"max_after": 2700,
		"min_after": 1500
},{
    "State": "Imp. Guard old",
        "top": 5611,
        "low": 4895,
		"moe": 334,
		"moe2": 15,
		"median": 5200,
		"max": 5945,
		"min": 4880,
		"top2": 2806,
        "low2": 2448,
		"moe3": 167,
		"moe4": 8,
		"median_after": 2600,
		"max_after": 2973,
		"min_after": 2440
},{
    "State": "Imp. Guard young",
        "top": 2400,
        "low": 2025,
	    "moe": 600,
		"moe2": 525,
		"median": 2200,
		"max": 3000,
		"min": 1500,
		"top2": 1200,
        "low2": 1013,
	    "moe3": 300,
		"moe4": 263,
		"median_after": 1100,
		"max_after": 1500,
		"min_after": 750
},{
 "State": "Corps I & IV",
        "top": 2575,
        "low": 2200,
        "moe": 525,
		"moe2": 0,
		"median": 2300,
		"max": 3100,
		"min": 2200,
		"top2": 1288,
        "low2": 1100,
        "moe3": 262,
		"moe4": 0,
		"median_after": 1150,
		"max_after": 1550,
		"min_after": 1100
		
		
},{
    "State": "Corps IX",
        "top": 14600,
        "low": 10750,
        "moe": 4200,
		"moe2": 750,
		"median": 12100,
		"max": 18800,
		"min": 10000,
		"top2": 7300,
        "low2": 5375,
        "moe3": 2100,
		"moe4": 375,
		"median_after": 6050,
		"max_after": 9400,
		"min_after": 5000
}]

//d3.json(JSONdata, function(error, data) {
data = JSONdata;
var ageNames = d3.keys(data[0]).filter(function (key) {
    return key == "top" ;
});

var ageNames2 = d3.keys(data[0]).filter(function (key) {
    return key == "top2" ;
});


data.forEach(function (d) {
     d.moe = +d.moe
	d.moe2 = +d.moe2
	d.moe3 = +d.moe3
	d.moe4 = +d.moe4
    d.ages = ageNames.map(function (name) {
        return {
            name: name,
            top: d.top,
			low: d.low,
            moe: d.moe, 
			moe2: d.moe2, 
			median: d.median,
			max: d.max,
			min: d.min
            //add the margin of error to each individual
            //data object
        };
    })
	d.ages2 = ageNames2.map(function (name) {
        return {
          name: name,
            top2: d.top2,
			low2: d.low2,
            moe3: d.moe3, 
			moe4: d.moe4, 
			median_after: d.median_after,
			max_after: d.max_after,
			min_after: d.min_after
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
        return d.top;
    });
})]);
y2.domain([0, 19000]);
y3.domain([0, d3.max(data, function (d) {
    return d3.max(d.ages2, function (d) {
        return d.top2;
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

var errorBarArea = d3.svg.area()
    .x(function (d) {
        return x1(d.name) +x1.rangeBand()/4;
    })
    .y0(function (d) {
        return y0(d.top + +d.moe);
    })
    .y1(function (d) {
        return y0(d.low - +d.moe2);
    })	
	
var errorBarArea2 = d3.svg.area()
    .x(function (d) {
        return x3(d.name) +x3.rangeBand()/(1.35);
    })
    .y0(function (d) {
        return y0(d.top2 + d.moe3);
    })
    .y1(function (d) {
        return y0(d.low2 - d.moe4);
    })	
	

var errorBars = state.selectAll("path.errorBar")
    .data(function (d) {
        return d.ages; //one error line for each data bar
    });
	
var errorBars2 = state2.selectAll("path.errorBar2")
    .data(function (d) {
        return d.ages2; //one error line for each data bar
    });
	
errorBars.enter().append("path").attr("class", "errorBar");

errorBars2.enter().append("path").attr("class", "errorBar2");

errorBars.attr("d", function (d) {
        return errorBarArea([d]);
    //turn the data into a one-element array 
    //and pass it to the area function
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);

errorBars2.attr("d", function (d) {
        return errorBarArea2([d]);
    //turn the data into a one-element array 
    //and pass it to the area function
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1.5);
	

state.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "barC_before")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.top) ;
    })
    .attr("height", function (d) {
        return y0(d.low) - y0(d.top);
    });
	
state2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "barD_after")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/(2);
    })
    .attr("y", function (d) {
        return y0(d.top2) ;
    })
    .attr("height", function (d) {
        return y0(d.low2) - y0(d.top2);
    });


	
	
	
	
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
        return y0(d.median) ;
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
	.attr("class", "median2")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.median_after) ;
    })
    .attr("height",1);
	
	
	
	
	var whisker_top = svg.selectAll(".whisker_top")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

whisker_top.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "whisker")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.max) ;
    })
    .attr("height",1);
	
	
	var whisker_bottom = svg.selectAll(".whisker_bottom")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x0(d.State) + ",0)";
});

whisker_bottom.selectAll("rect")
    .data(function (d) {
    return d.ages;
})
    .enter().append("rect")
	.attr("class", "whisker")
    .attr("width", x1.rangeBand()/2)
    .attr("x", function (d) {
        return x1(d.name) + x1.rangeBand()/1000;
    })
    .attr("y", function (d) {
        return y0(d.min) ;
    })
    .attr("height",1);
	

	
	
	
var whisker_top2 = svg.selectAll(".whisker_top2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});

whisker_top2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "whisker2")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.max_after) ;
    })
    .attr("height",1);
	
	
	var whisker_bottom2 = svg.selectAll(".whisker_bottom2")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function (d) {
    return "translate(" + x2(d.State) + ",0)";
});

whisker_bottom2.selectAll("rect")
    .data(function (d) {
    return d.ages2;
})
    .enter().append("rect")
	.attr("class", "whisker2")
    .attr("width", x3.rangeBand()/2)
    .attr("x", function (d) {
        return x3(d.name) + x3.rangeBand()/2;
    })
    .attr("y", function (d) {
        return y0(d.min_after) ;
    })
    .attr("height",1);
	
	

    var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("text")
      .attr("x", width - 458)
      .attr("y", 50)
      .attr("dy", ".35em")
	  .attr("class", "before")
      .style("text-anchor", "front")
      .text("left: before")
	  .style("font-size", "12px");
	  
	  legend.append("text")
      .attr("x", width - 458)
      .attr("y", 70)
      .attr("dy", ".35em")
	  .attr("class", "after")
      .style("text-anchor", "front")
      .text("right: after")
	  .style("font-size", "12px");
	  
	d3.select(".legend")
  .append("text")
  .attr("x", width - 475)             
  .attr("y", 35)
  .attr("text-anchor", "front")  
  .text("Uncertainty ranges relating to the number of soldiers")
  .style("font-size", "12px");


//filter for mouseover
//before	
var c14 = state.selectAll(".barC_before").filter(function(d) { return d.moe == "525"; }).attr("class", "boxblue0");
c14.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2 = state.selectAll(".barC_before").filter(function(d) { return d.moe == "712"; }).attr("class", "boxblue1");
c2.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35 = state.selectAll(".barC_before").filter(function(d) { return d.moe == "0"; }).attr("class", "boxblue2");
c35.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9 = state.selectAll(".barC_before").filter(function(d) { return d.moe == "4200"; }).attr("class", "boxblue3");
c9.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGO = state.selectAll(".barC_before").filter(function(d) { return d.moe == "334"; }).attr("class", "boxblue4");
cIGO.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGY = state.selectAll(".barC_before").filter(function(d) { return d.moe == "600"; }).attr("class", "boxblue5");
cIGY.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);	


//after
var c14a = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "262"; }).attr("class", "boxred0");
c14a.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2a = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "356"; }).attr("class", "boxred1");
c2a.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35a = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "0"; }).attr("class", "boxred2");
c35a.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9a = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "2100"; }).attr("class", "boxred3");
c9a.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOa = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "167"; }).attr("class", "boxred4");
cIGOa.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYa = state2.selectAll(".barD_after").filter(function(d) { return d.moe3 == "300"; }).attr("class", "boxred5");
cIGYa.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);	 

}


