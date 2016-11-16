APP.games.forEach(function(game) {
	var svg = d3.select('#' + game.gameId + 'svg');
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var scoreLabelSelector = d3.select('#score' + game.gameId.replace('game', ''));

	game.mySubmarines.forEach(function(submarine) {
		var submarineSelector = svg.append('circle')
			.attr('id', 'submarine' + submarine.id)
			.attr('class', 'my-submarine')
			.attr('cx', submarine.position.firstPosition().x)
			.attr('cy', submarine.position.firstPosition().y)
			.attr('r', game.submarineSize);

		var sonarSelector = svg.append('circle')
			.attr('id', 'sonar' + submarine.id)
			.attr('class', 'sonar')
			.attr('cx', submarine.position.firstPosition().x)
			.attr('cy', submarine.position.firstPosition().y)
			.attr('r', game.simpleSonarSize);

		mySubmarines.push({
			submarine: submarine,
			submarineSelector: submarineSelector,
			sonarSelector:sonarSelector
		});
	});

	game.torpedos.forEach(function(torpedo) {
        var torpedoSelector = svg.append('circle')
            .attr('id', 'torpedo' + torpedo.id)
            .attr('class', 'torpedo');
        if (torpedo.position.firstPosition()) {
            torpedoSelector
                .attr('cx', torpedo.position.firstPosition().x)
                .attr('cy', torpedo.position.firstPosition().y)
                .attr('r', 3);
        }
        torpedos.push({
            torpedo: torpedo,
            torpedoSelector: torpedoSelector
        });
    });

    game.otherSubmarines.forEach(function(otherSubmarine) {
        var otherSubmarineSelector = svg.append('circle')
            .attr('id', 'otherSubmarine' + otherSubmarine.id)
            .attr('class', 'other-submarine');
        if (otherSubmarine.position.firstPosition()) {
            otherSubmarineSelector
                .attr('cx', otherSubmarine.position.firstPosition().x)
                .attr('cy', otherSubmarine.position.firstPosition().y)
                .attr('r', game.submarineSize);
        }
        otherSubmarines.push({
            otherSubmarine: otherSubmarine,
            otherSubmarineSelector: otherSubmarineSelector
        });
    });

	var flag = 1;
	svg.on('click', function() {
		if (flag === 1) {
			flag = 0;
			var timePeriod = 50;
			mySubmarines.forEach(function(element) {
				element.submarineSelector.transition()
					.duration(timePeriod)
					.on('end', function moveMySubmarine() {
						var submarineState = element.submarine.position.submarineState();
						if(submarineState) {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('cx', submarineState.x)
                                .attr('cy', submarineState.y)
                                .attr('r', game.submarineSize)
                                .on('end', moveMySubmarine);
						} else {
						    d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('r', 0);
						}
				});

				element.sonarSelector.transition()
					.duration(timePeriod)
					.on('end', function moveSonar() {
						var sonarState = element.submarine.position.sonarState();
                        if(sonarState) {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('cx', sonarState.x)
                                .attr('cy', sonarState.y)
                                .attr('r', sonarState.sonar === 'extended' ? game.simpleSonarSize : game.extendedSonarSize)
                                .on('end', moveSonar);
                        } else {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('r', 0);
                        }
				});
			});

			torpedos.forEach(function(element) {
                element.torpedoSelector.transition()
                    .duration(timePeriod)
                    .on('end', function moveTorpedo() {
                        var state = element.torpedo.position.state();
                        if(state) {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('cx', state.x)
                                .attr('cy', state.y)
                                .attr('r', 3)
                                .on('end', moveTorpedo);
                        } else {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('r', 0)
                                .on('end', moveTorpedo);
                        }
                });
            });

            otherSubmarines.forEach(function(element) {
                element.otherSubmarineSelector.transition()
                    .duration(timePeriod)
                    .on('end', function moveOtherSubmarine() {
                        var state = element.otherSubmarine.position.state();
                        if(state) {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('cx', state.x)
                                .attr('cy', state.y)
                                .attr('r', game.submarineSize)
                                .on('end', moveOtherSubmarine);
                        } else {
                            d3.select(this)
                                .transition()
                                .duration(timePeriod)
                                .attr('r', 0)
                                .on('end', moveOtherSubmarine);
                        }
                });
            });

            scoreLabelSelector.transition()
                .delay(timePeriod)
                .on('end', function nextScore() {
                    var next = game.scores.nextScore();
                    if (next) {
                        scoreLabelSelector.transition()
                            .delay(timePeriod)
                            .text('Score: ' + next.score)
                            .on('end', nextScore);
                    } else {
                        scoreLabelSelector.transition()
                            .delay(timePeriod)
                            .on('end', nextScore);
                    }
                });

		} else {
			flag = 1;
			mySubmarines.forEach(function(element) {
				element.submarineSelector.transition();
				element.sonarSelector.transition();
			});

			torpedos.forEach(function(element) {
                element.torpedoSelector.transition();
            });

            otherSubmarines.forEach(function(element) {
                element.otherSubmarineSelector.transition();
            });
            scoreLabelSelector.transition();
		}
	});
	
})
