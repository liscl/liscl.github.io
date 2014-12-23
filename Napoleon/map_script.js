
function drawmap(){ 


     
//basemap
    berezina = d3.json("json/berezina.geojson", function (error, data){
      g.append("g")
      .attr("class", "berezina")
      .selectAll("path")
      .data(data.features)
      .enter().append("path")
      .attr("d", path)
	  
	  
	   bridge = d3.json("json/bridge.geojson", function (error, data){
        g.append("g")
        .attr("class", "bridge")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)
		
			  bridge2 = d3.json("json/bridge2.geojson", function (error, data){
        g.append("g")
        .attr("class", "bridge2")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)

		
  
		
// corps_path		
			corps_path = d3.json("json/corps_path.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps_path")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)
		
			arrows = d3.json("json/arrows.geojson", function (error, data){
        g.append("g")
        .attr("class", "arrows")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)
	
// corps_before
		corps1_4_before = d3.json("json/corps1_4_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps1_4_before")
	    .selectAll("path")
        .data(data.features)
         .enter()
        	  .append("path")
                .attr("class", "corps1_4_before")
                .attr("d", path)
				
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps1_4_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll(); 
                })
			


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		corps2_before = d3.json("json/corps2_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps2_before")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "corps2_before")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
						clickCorps2_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
				 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		corps3_5_before = d3.json("json/corps3_5_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps3_5_before")
        .selectAll("path")
        .data(data.features)
         .enter()
        	  .append("path")
                .attr("class", "corps3_5_before")
                .attr("d", path)
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps3_5_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll(); 
                })
			


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});

	corps9_before_dummy = d3.json("json/corps9_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps9_before_dummy")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps9_before_dummy")
                .attr("d", path)
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps9_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					 clearAll(); 
                })
				 
				


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		corps9_before = d3.json("json/corps9_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps9_before")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps9_before")
                .attr("d", path)
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps9_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					 clearAll(); 
                })
				 
				


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		imperial_guard_old_before = d3.json("json/imperial_guard_old_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_old_before")
        .selectAll("path")
        .data(data.features)
         .enter()
        	  .append("path")
                .attr("class", "imperial_guard_old_before")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickImperial_Guard_Old_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
				  


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		imperial_guard_young_before = d3.json("json/imperial_guard_young_before.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_young_before")
        .selectAll("path")
        .data(data.features)
         .enter()
        	  .append("path")
                .attr("class", "imperial_guard_young_before")
                .attr("d", path)
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickImperial_Guard_Young_before();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll(); 
                })
				 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
	
// corps_after
		corps1_4_after = d3.json("json/corps1_4_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps1_4_after")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps1_4_after")
                .attr("d", path)
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps1_4_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll(); 
                })
				 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		corps2_after = d3.json("json/corps2_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps2_after")
        .selectAll("path")
        .data(data.features)
      .enter()
        	  .append("path")
                .attr("class", "corps2_after")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps2_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
			 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		corps3_5_after = d3.json("json/corps3_5_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps3_5_after")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps3_5_after")
                .attr("d", path)
				
				 

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps3_5_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
			 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});

		corps9_after = d3.json("json/corps9_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps9_after")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps9_after")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps9_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
			


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		imperial_guard_old_after = d3.json("json/imperial_guard_old_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_old_after")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "imperial_guard_old_after")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					
				clickImperial_Guard_Old_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
						clearAll();
                })
			 


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
		imperial_guard_young_after = d3.json("json/imperial_guard_young_after.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_young_after")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "imperial_guard_young_after")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickImperial_Guard_Young_after();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
		
	/* corps1_4_crossing = d3.json("json/corps1_4_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps1_4_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps1_4_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps1_4_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");

		
		corps2_crossing = d3.json("json/corps2_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps2_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps2_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps2_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");

		
		corps3_5_crossing = d3.json("json/corps3_5_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps3_5_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps3_5_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps3_5_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");


		corps9_crossing = d3.json("json/corps9_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "corps9_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "corps9_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickCorps9_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");

		
		imperial_guard_old_crossing = d3.json("json/imperial_guard_old_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_old_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "imperial_guard_old_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickImperial_Guard_Old_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");

		
		imperial_guard_young_crossing = d3.json("json/imperial_guard_young_crossing.geojson", function (error, data){
        g.append("g")
        .attr("class", "imperial_guard_young_crossing")
        .selectAll("path")
        .data(data.features)
       .enter()
        	  .append("path")
                .attr("class", "imperial_guard_young_crossing")
                .attr("d", path)
				

           
		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.name)
                        .style("left", (d3.event.pageX + 10) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
					clickImperial_Guard_Young_crossing();
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
					clearAll();
                })
		


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");


 */

        // call walk function to include walk here
        drawwalk();
	});
	});
	});
	});
	});


	


  borderPath = svg.append("rect")
    .attr("height", height)
    .attr("width", width)
    .attr("id", "borderPath");
};




function drawwalk(error, data){
data = d3.json("json/places.geojson", function (error, data){

var places = svg.selectAll(".places")
      .data(data.features)
    .enter().append("g")
      .attr("class", "places")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  places.append("rect")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
      .attr("width", 11)
      .attr("height", 11)
      .style("fill", "#737373");

  places.append("text")
      .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
     .attr("dx", "1.1em")
			.attr("dy", "1.6em")
      .style("text-anchor", "front")
       .text(function(d) { return d.properties.name; })
	  .style("font-size", "12px");
	
});
	}

function drawlegend(error, data) {

	 var color_domain = [50, 150, 350, 750, 1500, 3000]
	 var ext_color_domain = [0, 50, 150, 350, 750, 1500]
  var legend_labels_relative = ["Corps IX", "Corps I & IV", "Imp. Guard young",  "Imp. Guard old", "Corps III & V", "Corps II"]
   var color = d3.scale.threshold()
  .domain(color_domain)
  .range(["#756bb1", "#ef3b2c", "#8c510a", "#1a9850", "#f768a1", "#2171b5"]);
		

	//Adding legend for map

  
  
var legend_relative = svg.selectAll("g.legend_relative")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative");
  
  var legend_relative2 = svg.selectAll("g.legend_relative2")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative2");
  
  var legend_relative3 = svg.selectAll("g.legend_relative3")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative3");
  
  var legend_relative4 = svg.selectAll("g.legend_relative4")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative4");
  
  var legend_relative5 = svg.selectAll("g.legend_relative5")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative5");
  
  var legend_relative6 = svg.selectAll("g.legend_relative6")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend_relative6");

  var ls_w2 = 15, ls_h2 = 25;

  legend_relative.append("path")
  .attr("x", 20)
  .attr("y", function(d, i){ return height - (i*ls_h2) - 2*ls_h2 ;})
  .attr("width", ls_w2)
  .attr("height", ls_h2)
  .style("fill", function(d, i) { return color(d); })
  .style("fill-opacity", .7);


  legend_relative.append("text")
  .attr("x", 108)
  .attr("y", 348)
  .text("3000");  
  
   legend_relative2.append("text")
  .attr("x", 30)
  .attr("y", 343)
  .text("6000");  
  
   legend_relative3.append("text")
  .attr("x", 108)
  .attr("y", 339)
  .text("9000");  
  
   legend_relative4.append("text")
  .attr("x", 25)
  .attr("y", 332)
  .text("12000");  
  
   legend_relative5.append("text")
  .attr("x", 108)
  .attr("y", 328)
  .text("15000");  
  
   legend_relative6.append("text")
  .attr("x", 25)
  .attr("y", 321)
  .text("18000");  

 
 legend_c14 = d3.json("json/legend142.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "27" )
		.attr("visibility", "visible")
	

	
	legend_c14_dummy = d3.json("json/legend142.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "white"  )
		.style("stroke", "white"  )
		.style("stroke-width", "25" )
		.attr("visibility", "visible")
	

	
	legend_c2 = d3.json("json/legend22.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "22.5" )
		.attr("visibility", "visible")
	

	
	legend_c2_dummy = d3.json("json/legend22.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "white"  )
		.style("stroke", "white"  )
		.style("stroke-width", "20.5" )
		.attr("visibility", "visible")
	

	
	legend_c35 = d3.json("json/legend352.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "18" )
		.attr("visibility", "visible")
	

	
	legend_c35_dummy = d3.json("json/legend352.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "white"  )
		.style("stroke", "white"  )
		.style("stroke-width", "16" )
		.attr("visibility", "visible")
	
	
	legend_c9 = d3.json("json/legend92.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
	.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "13.5" )
		.attr("visibility", "visible")
	

	
	legend_c9_dummy = d3.json("json/legend92.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
	.style("fill", "white"  )
		.style("stroke", "white"  )
		.style("stroke-width", "11.5" )
		.attr("visibility", "visible")
	

	
	legend_cIGO = d3.json("json/legendIGO2.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "9" )
		.attr("visibility", "visible")
	
	
	
		legend_cIGO_dummy = d3.json("json/legendIGO2.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "white"  )
		.style("stroke", "white"  )
		.style("stroke-width", "7" )
		.attr("visibility", "visible")
	

	
	legend_cIGY = d3.json("json/legendIGY2.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "#cccccc" )
		.style("stroke", "#cccccc" )
		.style("stroke-width", "4.5" )
		.attr("visibility", "visible")
	

	
	legend_cIGY_dummy = d3.json("json/legendIGY2.geojson", function (error, data){
        g.append("g")
      // .attr("class", "legend")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
		.style("fill", "white" )
		.style("stroke", "white" )
		.style("stroke-width", "2.5" )
		.attr("visibility", "visible")
		
		 lines = d3.json("json/legend_lines2.geojson", function (error, data){
        g.append("g")
        .attr("class", "legend_lines")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)
		
		});
	
	});
	});
	});
	});
	});
	});
	});
	});
    });
	});
	});
	});
 
  
  d3.select(".legend_relative")
  .append("text")
  .attr("x", 30)             
  .attr("y", 300)
  .attr("text-anchor", "front")  
  .text("Soldiers:")
  .style("font-size", "10px");
 
 

  
}	
