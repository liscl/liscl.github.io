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
			w = 800 - m[1] - m[3],
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
									.tickSize(-miniHeight, 0)
									.ticks(24)
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
				

			
			
		var mini2 = chart.append("g")
					.attr("transform", "translate(" + m[3] + "," + (mainHeight + m[0]) + ")")
					.attr("width", w)
					.attr("height", miniHeight)
					.attr("class", "mini");
		
	
		
		//mini lanes and texts
		mini2.append("g").selectAll(".laneLines")
			.data(data)
			.enter().append("line")
			.attr("x1", m[1])
			.attr("y1", function(d) {return y2(d.lane);})
			.attr("x2", w)
			.attr("y2", function(d) {return y2(d.lane);})
			.attr("stroke", "lightgray");

		mini2.append("g").selectAll(".laneText")
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
		mini2.append("g").selectAll("miniItems")
			.data(data)
			.enter().append("rect")
			.attr("class", function(d) {return "miniItem" + d.lane;})
			.attr("x", function(d) {return x(d.start);})
			.attr("y", function(d) {return y2(d.lane + .5) - 5;})
			.attr("width", function(d) {return x(d.end) -x(d.start);})
			.attr("height", 10);
			

		//mini labels
		mini2.append("g").selectAll(".miniLabels")
			.data(items)
			.enter().append("text")
			.text(function(d) {return d.id;})
			.attr("x", function(d) {return x(d.start);})
			.attr("y", function(d) {return y2(d.lane + .5);})
			.attr("dy", ".5ex")
			.attr("class", "miniLabels_text");


		mini2.append("g")
			.attr("class", "x brush")
			//.call(brush)
			.selectAll("rect")
			.attr("y", 1)
			.attr("height", miniHeight - 1);
			
		
			
	
//filter for mouseover	
//click Timeline before



//click Timeline before_relative
var c14r = mini2.selectAll(".miniItem4").filter(function(d) { return d.id == "before"; }).attr("class", "before0_relative");
c14r.on("mouseover", clickCorps1_4_before).on("mouseout", clearAll);	

var c2r = mini2.selectAll(".miniItem0").filter(function(d) { return d.id == "before"; }).attr("class", "before1_relative");
c2r.on("mouseover", clickCorps2_before).on("mouseout", clearAll);	

var c35r = mini2.selectAll(".miniItem1").filter(function(d) { return d.id == "before"; }).attr("class", "before2_relative");
c35r.on("mouseover", clickCorps3_5_before).on("mouseout", clearAll);	

var c9r = mini2.selectAll(".miniItem5").filter(function(d) { return d.id == "before"; }).attr("class", "before3_relative");
c9r.on("mouseover", clickCorps9_before).on("mouseout", clearAll);	

var cIGOr = mini2.selectAll(".miniItem2").filter(function(d) { return d.id == "before"; }).attr("class", "before4_relative");
cIGOr.on("mouseover", clickImperial_Guard_Old_before).on("mouseout", clearAll);	

var cIGYr = mini2.selectAll(".miniItem3").filter(function(d) { return d.id == "before"; }).attr("class", "before5_relative");
cIGYr.on("mouseover", clickImperial_Guard_Young_before).on("mouseout", clearAll);

//click Timeline after_relative	
var c14ar = mini2.selectAll(".miniItem4").filter(function(d) { return d.id == "after"; }).attr("class", "after0_relative");
c14ar.on("mouseover", clickCorps1_4_after).on("mouseout", clearAll);	

var c2ar = mini2.selectAll(".miniItem0").filter(function(d) { return d.id == "after"; }).attr("class", "after1_relative");
c2ar.on("mouseover", clickCorps2_after).on("mouseout", clearAll);	

var c35ar = mini2.selectAll(".miniItem1").filter(function(d) { return d.id == "after"; }).attr("class", "after2_relative");
c35ar.on("mouseover", clickCorps3_5_after).on("mouseout", clearAll);	

var c9ar = mini2.selectAll(".miniItem5").filter(function(d) { return d.id == "after"; }).attr("class", "after3_relative");
c9ar.on("mouseover", clickCorps9_after).on("mouseout", clearAll);	

var cIGOar = mini2.selectAll(".miniItem2").filter(function(d) { return d.id == "after"; }).attr("class", "after4_relative");
cIGOar.on("mouseover", clickImperial_Guard_Old_after).on("mouseout", clearAll);	

var cIGYar = mini2.selectAll(".miniItem3").filter(function(d) { return d.id == "after"; }).attr("class", "after5_relative");
cIGYar.on("mouseover", clickImperial_Guard_Young_after).on("mouseout", clearAll);


//click Timeline crossing	
var c14c = mini2.selectAll(".miniItem4").filter(function(d) { return d.id == "bridge"; });
c14c.on("mouseover", clickCorps1_4_crossing).on("mouseout", clearAll);	

var c2c = mini2.selectAll(".miniItem0").filter(function(d) { return d.id == "bridge"; });
c2c.on("mouseover", clickCorps2_crossing).on("mouseout", clearAll);	

var c35c = mini2.selectAll(".miniItem1").filter(function(d) { return d.id == "bridge"; });
c35c.on("mouseover", clickCorps3_5_crossing).on("mouseout", clearAll);	

var c9c = mini2.selectAll(".miniItem5").filter(function(d) { return d.id == "bridge"; });
c9c.on("mouseover", clickCorps9_crossing).on("mouseout", clearAll);	

var cIGOc = mini2.selectAll(".miniItem2").filter(function(d) { return d.id == "bridge"; });
cIGOc.on("mouseover", clickImperial_Guard_Old_crossing).on("mouseout", clearAll);	

var cIGYc = mini2.selectAll(".miniItem3").filter(function(d) { return d.id == "bridge"; });
cIGYc.on("mouseover", clickImperial_Guard_Young_crossing).on("mouseout", clearAll);


	}
