APP.games.forEach(function(game) {
	d3.select('.container')
		.append('div')
		.attr('id', game.gameId)
		.attr('class', 'diagram-container');

	d3.select('#' + game.gameId)
		.append('div')
		.attr('class', 'date-label')
		.text(game.gameTime);

	var svg = d3.select('#' + game.gameId)
				.append('svg');

	svg.attr('id', game.gameId + 'svg')
		.attr('class', 'diagram')
		.attr('width', 850)
		.attr('height', 400);

	game.mySubmarines.forEach(function(submarine) {
		var submarineSelector = svg.append('circle')
			.attr('id', 'submarine' + submarine.id)
			.attr('class', 'my-submarine')
			.attr('cx', submarine.position.firstPosition().x)
			.attr('cy', submarine.position.firstPosition().y)
			.attr('r', 7.5);

		var sonarSelector = svg.append('circle')
			.attr('id', 'sonar' + submarine.id)
			.attr('class', 'sonar')
			.attr('cx', submarine.position.firstPosition().x)
			.attr('cy', submarine.position.firstPosition().y)
			.attr('r', 75);

		submarineSelector.transition().duration(200)
			.on('start', function moveSubmarine() {
				var submarineState = submarine.position.submarineState();
				d3.active(this)
					.attr('cx', submarineState.x)
					.attr('cy', submarineState.y)
					.transition()
					.on('start', moveSubmarine)
		});

		sonarSelector.transition().duration(200)
			.on('start', function moveSonar() {
				var sonarState = submarine.position.sonarState();
				d3.active(this)
					.attr('cx', sonarState.x)
					.attr('cy', sonarState.y)
					.attr('r', sonarState.sonar === 'extended' ? 115 : 75)
					.transition()
					.on('start', moveSonar)
		});
		
	})
})
