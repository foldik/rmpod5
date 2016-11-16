APP.put = function (map, obj) {
	map[obj.round] = obj;
}

APP.submarine = function (submerineId, positions) {
	return {
		id: submerineId,
		position: (function() {
			var roundSubmarineCount = 1;
			var roundSonarCount = 1;
			var states = [];
			positions.forEach(function(element) {
				APP.put(states, element);
			})
			return {
				submarineState: function() {
					return states[roundSubmarineCount++];
				},
				sonarState: function() {
					return states[roundSonarCount++];
				},
				firstPosition: function() {
					return states[1];
				},
				reset: function () {
					roundSubmarineCount = 1;
					roundSonarCount = 1;
				}
			}
		}())
	}
}

APP.waterObject = function (id, positions) {
	return {
		id: id,
		position: (function() {
			var actualRound = 1;
			var states = [];
			positions.forEach(function(element) {
				APP.put(states, element);
			})
			return {
				state: function() {
					return states[actualRound++];
				},
				firstPosition: function() {
					return states[1];
				},
				reset: function () {
					actualRound = 1;
				}
			}
		}())
	}
}
