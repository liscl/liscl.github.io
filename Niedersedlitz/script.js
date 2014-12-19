
function drawmap(){ 

    green = d3.json("data/landuse.geojson", function (error, data){
      g.append("g")
      .attr("class", "green")
      .selectAll("path")
      .data(data.features)
      .enter().append("path")
      .attr("d", path)

buildings = d3.json("data/building.geojson", function (error, data){
    g.append("g")
    .attr("class", "buildings")
    .selectAll ("path")
    .data(data.features)
    .enter().append("path")
    .attr ("d", path)

      water = d3.json("data/river.geojson", function (error, data){
        g.append("g")
        .attr("class", "water")
        .selectAll("path")
        .data(data.features)
       .enter().append("path")
        .attr("d", path)

	
      road = d3.json("data/road.geojson", function (error, data){
        g.append("g")
        .attr("class", "road")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
	
	railway = d3.json("data/railway.geojson", function (error, data){
        g.append("g")
        .attr("class", "railway")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)


 


	

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

amt = d3.json("data/amt.geojson", function (error, data){
        g.append("g")
        .attr("class", "amt")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poiamt")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                }); 



kinder = d3.json("data/kinder.geojson", function (error, data){
        g.append("g")
        .attr("class", "kinder")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poikinder")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                }); 


dienst = d3.json("data/dienst.geojson", function (error, data){
        g.append("g")
        .attr("class", "dienst")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poidienst")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                }); 

essen = d3.json("data/essen.geojson", function (error, data){
        g.append("g")
        .attr("class", "essen")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poiessen")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                    
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                }); 

einzelhandel = d3.json("data/einzelhandel.geojson", function (error, data){
        g.append("g")
        .attr("class", "einzelhandel")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poieinzelhandel")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                    
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                }); 

 supermarkt = d3.json("data/supermarkt.geojson", function (error, data){
        g.append("g")
        .attr("class", "supermarkt")
        .selectAll("path")
        .data(data.features)
        .enter()
        	  .append("path")
                .attr("class", "poisupermarkt")
                .attr("d", path)
                .on("click", clicked)

		// tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                   
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                });


uebernachtung = d3.json("data/uebernachtung.geojson", function (error, data){
            g.append("g")
            .attr("class", "uebernachtung")
            .selectAll("path")
            .data(data.features)
            .enter()
                .append("path")
                .attr("class", "poi")
                .attr("d", path)
                .on("click", clicked)

                // tooltip is defined here:
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div.html(d.properties.title)
                        .style("left", (d3.event.pageX + 28) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                    
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(100)
                        .style("opacity", 0);
                });  


		 g.append("g")
            .attr("class", "label")
            .selectAll("text")
            .data(data.features)
            .enter()
            .append("text")
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("dy", ".35em")
            .text(function(d) { return d.properties.name; })
            .style("pointer-events", "none")
            .append("title")
            .text(function(d) { return d.properties.title; })
            .style("pointer-events", "none");
	
	});
	});
	});
	});
	});
	});
    });
}



// click on poi
function clicked(d) {

    div.transition()
        .duration(100)
        .style("opacity", 0);

    var x, y, k;

    if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
    } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
    }

    g.selectAll("path")
    .classed("active", centered && function(d) { 
        return d === centered; 
    });

    g.transition()
        .duration(750)
        .attr("transform","translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");

    // write the desciption in the text container
    
    var description = d3.select("div#description").selectAll("p")
     g.append("g")
        .data(data.features)
        .enter()
        .append("p")
        .text(function(d) { return d.properties.name; });                                    
}



// Zooooooom
function zoomed() {
    g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");

   
  }

