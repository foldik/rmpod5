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
					var result = states[roundSubmarineCount];
					roundSubmarineCount++;
					return result;
				},
				sonarState: function() {
					var result = states[roundSonarCount];
					roundSonarCount++;
					return result;
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