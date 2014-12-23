	function drawTimeline (error, data) {
	
	
	var lanes = ["Corps II", "Corps III & V", "Imp. Guard old", "Imp. Guard young", "Corps I & IV", "Corps IX"],
		laneLength = lanes.length,
		items = [{"lane": 0, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-26T10:00:00Z"},
				{"lane": 0, "id": "bridge", "start": "1812-11-26T12:00:00Z", "end": "1812-11-26T16:00:00Z"},
				{"lane": 0, "id": "after", "start": "1812-11-26T18:00:00Z", "end": "1812-11-29T04:00:00Z"},
				{"lane": 1, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-26T18:00:00Z"},
				{"lane": 1, "id": "bridge", "start": "1812-11-26T20:00:00Z", "end": "1812-11-27T00:00:00Z"},
				{"lane": 1, "id": "after", "start": "1812-11-27T02:00:00Z", "end": "1812-11-29T04:00:00Z"},
				{"lane": 2, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-27T08:00:00Z"},
				{"lane": 2, "id": "bridge", "start": "1812-11-27T10:00:00Z", "end": "1812-11-27T14:00:00Z"},
				{"lane": 2, "id": "after", "start": "1812-11-27T16:00:00Z", "end": "1812-11-29T04:00:00Z"},
				{"lane": 3, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-27T10:00:00Z"},
				{"lane": 3, "id": "bridge", "start": "1812-11-27T12:00:00Z", "end": "1812-11-27T16:00:00Z"},
				{"lane": 3, "id": "after", "start": "1812-11-27T18:00:00Z", "end": "1812-11-29T04:00:00Z"},
				{"lane": 4, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-27T16:00:00Z"},
				{"lane": 4, "id": "bridge", "start": "1812-11-27T18:00:00Z", "end": "1812-11-27T22:00:00Z"},
				{"lane": 4, "id": "after", "start": "1812-11-28T00:00:00Z", "end": "1812-11-29T04:00:00Z"},
				{"lane": 5, "id": "before", "start": "1812-11-26T06:00:00Z", "end": "1812-11-28T16:30:00Z"},
				{"lane": 5, "id": "bridge", "start": "1812-11-28T18:30:00Z", "end": "1812-11-28T22:30:00Z"},
				{"lane": 5, "id": "after", "start": "1812-11-29T00:30:00Z", "end": "1812-11-29T04:00:00Z"}];
	var	timeBegin = "1812-11-26T06:00:00Z",
		timeEnd = "1812-11-29T04:00:00Z";
		
		var m = [-25, 25, 0, 150], //top right bottom left
			w = 760 - m[1] - m[3],
			h = 500 - m[0] - m[2],
			miniHeight = (laneLength * 12) + 50,
			mainHeight = miniHeight;
			
		data = items;
		
		var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%SZ").parse;				
		
	data.forEach(function(d) {
    d.start = parseDate(String(d.start));
    d.end = parseDate(String(d.end));
    d.lane = +d.lane;
	
});



		//scales
		var x = d3.time.scale()
				.domain([parseDate(timeBegin), parseDate(timeEnd)])
				.range([0, w]);
		var x1 = d3.time.scale()
				.domain([parseDate(timeBegin), parseDate(timeEnd)])
				.range([0, w]);
		var y1 = d3.scale.linear()
				.domain([0, laneLength])
				.range([0, mainHeight]);
		var y2 = d3.scale.linear()
				.domain([0, laneLength])
				.range([0, miniHeight]);
				
 
		var xAxis = d3.svg.axis()
					.scale(x)
					.orient("top")
					.ticks(14)
					.tickFormat(d3.time.format("%d.%m. - %H:%M"));
					
		var xAxisGrid = d3.svg.axis().scale(x)
									.orient("top")
									.ticks(24)
									.tickSize(-miniHeight, 0)
									.tickFormat("");
									
				
		var chart = d3.select("#Timeline")
					.append("svg")
					.attr("width", w + m[1] + m[3])
					.attr("height", miniHeight + m[0] + m[2] + 150)
					.attr("class", "chart");
		
		chart.append("defs").append("clipPath")
			.attr("id", "clip")
			.append("rect")
			.attr("width", w)
			.attr("height", mainHeight);
			
		chart.append("g")
      .attr("class", "x axisTime")
      .attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
      .call(xAxis)
	  .selectAll("text")  
             .style("text-anchor", "end")
			.style("font-size", "12px")
            .attr("dx", "7.2em")
            .attr("dy", "1em")
            .attr("transform", function(d) {
                return "rotate(-70)" 
                });

		chart.append("g")         
      .attr("class", "x axis Gridline")
	  .attr("transform", "translate(" + m[3] + "," + (miniHeight + m[0]) + ")")
	  .call(xAxisGrid);		
				
		var mini = chart.append("g")
					.attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
					.attr("width", w)
					.attr("height", miniHeight)
					.attr("class", "mini");
		
	
		
		//mini lanes and texts
		mini.append("g").selectAll(".laneLines")
			.data(data)
			.enter().append("line")
			.attr("x1", m[1])
			.attr("y1", function(d) {return y2(d.lane);})
			.attr("x2", w)
			.attr("y2", function(d) {return y2(d.lane);})
			.attr("stroke", "lightgray");

		mini.append("g").selectAll(".laneText")
			.data(lanes)
			.enter().append("text")
			.text(function(d) {return d;})
			.attr("x", -m[1])
			.attr("y", function(d, i) {return y2(i + .5);})
			.attr("dy", ".5ex")
			.attr("text-anchor", "end")
			.style("font-size", "10px")
			.attr("class", "laneText");

			
		//mini item rects
		mini.append("g").selectAll("miniItems")
			.data(data)
			.enter().append("rect")
			.attr("class", function(d) {return "miniItem" + d.lane;})
			.attr("x", function(d) {return x(d.start);})
			.attr("y", function(d) {return y2(d.lane + .5) - 5;})
			.attr("width", function(d) {return x(d.end) -x(d.start);})
			.attr("height", 10);
			

		//mini labels
		mini.append("g").selectAll(".miniLabels")
			.data(items)
			.enter().append("text")
			.text(function(d) {return d.id;})
			.attr("x", function(d) {return x(d.start);})
			.attr("y", function(d) {return y2(d.lane + .5);})
			.attr("dy", ".5ex")
			.attr("class", "miniLabels_text");


		mini.append("g")
			.attr("class", "x brush")
			//.call(brush)
			.selectAll("rect")
			.attr("y", 1)
			.attr("height", miniHeight - 1);

//filter for mouseover			
//click Timeline before
var c14 = mini.selectAll(".miniItem4").filter(function(d) { return d.id == "before"; }).attr("class", "blue0");
c14.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2 = mini.selectAll(".miniItem0").filter(function(d) { return d.id == "before"; }).attr("class", "blue1");
c2.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35 = mini.selectAll(".miniItem1").filter(function(d) { return d.id == "before"; }).attr("class", "blue2")
c35.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9 = mini.selectAll(".miniItem5").filter(function(d) { return d.id == "before"; }).attr("class", "blue3");
c9.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGO = mini.selectAll(".miniItem2").filter(function(d) { return d.id == "before"; }).attr("class", "blue4");
cIGO.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGY = mini.selectAll(".miniItem3").filter(function(d) { return d.id == "before"; }).attr("class", "blue5");
cIGY.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);

//click Timeline after	
var c14a = mini.selectAll(".miniItem4").filter(function(d) { return d.id == "after"; }).attr("class", "red0");
c14a.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2a = mini.selectAll(".miniItem0").filter(function(d) { return d.id == "after"; }).attr("class", "red1");
c2a.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35a = mini.selectAll(".miniItem1").filter(function(d) { return d.id == "after"; }).attr("class", "red2");
c35a.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9a = mini.selectAll(".miniItem5").filter(function(d) { return d.id == "after"; }).attr("class", "red3");
c9a.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOa = mini.selectAll(".miniItem2").filter(function(d) { return d.id == "after"; }).attr("class", "red4");
cIGOa.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYa = mini.selectAll(".miniItem3").filter(function(d) { return d.id == "after"; }).attr("class", "red5");
cIGYa.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);

//click Timeline crossing	
var c14c = mini.selectAll(".miniItem4").filter(function(d) { return d.id == "bridge"; });
c14c.on("mouseover", clickCorps1_4_crossing).on("mouseout", clearAll);	

var c2c = mini.selectAll(".miniItem0").filter(function(d) { return d.id == "bridge"; });
c2c.on("mouseover", clickCorps2_crossing).on("mouseout", clearAll);	

var c35c = mini.selectAll(".miniItem1").filter(function(d) { return d.id == "bridge"; });
c35c.on("mouseover", clickCorps3_5_crossing).on("mouseout", clearAll);	

var c9c = mini.selectAll(".miniItem5").filter(function(d) { return d.id == "bridge"; });
c9c.on("mouseover", clickCorps9_crossing).on("mouseout", clearAll);	

var cIGOc = mini.selectAll(".miniItem2").filter(function(d) { return d.id == "bridge"; });
cIGOc.on("mouseover", clickImperial_Guard_Old_crossing).on("mouseout", clearAll);	

var cIGYc = mini.selectAll(".miniItem3").filter(function(d) { return d.id == "bridge"; });
cIGYc.on("mouseover", clickImperial_Guard_Young_crossing).on("mouseout", clearAll);


	}
