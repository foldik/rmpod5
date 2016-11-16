APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(41006, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 2, sonar: 'extended' },
        {x: 100.00, y: 300.00, round: 2, sonar: 'extended' },
        {x: 102.44, y: 299.45, round: 3, sonar: 'extended' },
        {x: 102.44, y: 299.45, round: 3, sonar: 'extended' },
        {x: 107.12, y: 297.70, round: 4, sonar: 'extended' },
        {x: 107.12, y: 297.70, round: 4, sonar: 'extended' },
        {x: 114.33, y: 295.63, round: 5, sonar: 'extended' },
        {x: 114.33, y: 295.63, round: 5, sonar: 'extended' },
        {x: 120.41, y: 291.24, round: 6, sonar: 'extended' },
        {x: 120.41, y: 291.24, round: 6, sonar: 'extended' },
        {x: 125.96, y: 286.19, round: 7, sonar: 'extended' },
        {x: 125.96, y: 286.19, round: 7, sonar: 'extended' },
        {x: 130.53, y: 284.17, round: 8, sonar: 'extended' },
        {x: 130.53, y: 284.17, round: 8, sonar: 'extended' },
        {x: 137.94, y: 283.02, round: 9, sonar: 'extended' },
        {x: 137.94, y: 283.02, round: 9, sonar: 'extended' },
        {x: 147.06, y: 278.90, round: 10, sonar: 'extended' },
        {x: 147.06, y: 278.90, round: 10, sonar: 'extended' },
        {x: 152.66, y: 273.92, round: 11, sonar: 'nonextended' },
        {x: 152.66, y: 273.92, round: 11, sonar: 'nonextended' },
        {x: 157.16, y: 271.74, round: 12, sonar: 'nonextended' },
        {x: 157.16, y: 271.74, round: 12, sonar: 'nonextended' },
        {x: 164.26, y: 269.33, round: 13, sonar: 'nonextended' },
        {x: 164.26, y: 269.33, round: 13, sonar: 'nonextended' },
        {x: 169.13, y: 268.19, round: 14, sonar: 'nonextended' },
        {x: 169.13, y: 268.19, round: 14, sonar: 'nonextended' },
        {x: 171.53, y: 267.49, round: 15, sonar: 'nonextended' },
        {x: 171.53, y: 267.49, round: 15, sonar: 'nonextended' },
        {x: 175.98, y: 265.21, round: 16, sonar: 'nonextended' },
        {x: 175.98, y: 265.21, round: 16, sonar: 'nonextended' },
        {x: 180.30, y: 262.69, round: 17, sonar: 'nonextended' },
        {x: 180.30, y: 262.69, round: 17, sonar: 'nonextended' },
        {x: 182.64, y: 261.81, round: 18, sonar: 'nonextended' },
        {x: 182.64, y: 261.81, round: 18, sonar: 'nonextended' },
        {x: 184.99, y: 260.96, round: 19, sonar: 'nonextended' },
        {x: 184.99, y: 260.96, round: 19, sonar: 'nonextended' },
        {x: 189.97, y: 260.51, round: 20, sonar: 'nonextended' },
        {x: 189.97, y: 260.51, round: 20, sonar: 'nonextended' },
        {x: 194.92, y: 261.18, round: 21, sonar: 'nonextended' },
        {x: 194.92, y: 261.18, round: 21, sonar: 'nonextended' },
        {x: 201.96, y: 263.79, round: 22, sonar: 'extended' },
        {x: 201.96, y: 263.79, round: 22, sonar: 'extended' },
        {x: 206.69, y: 265.41, round: 23, sonar: 'extended' },
        {x: 206.69, y: 265.41, round: 23, sonar: 'extended' },
        {x: 208.73, y: 266.85, round: 24, sonar: 'extended' },
        {x: 208.73, y: 266.85, round: 24, sonar: 'extended' },
        {x: 212.24, y: 270.41, round: 25, sonar: 'extended' },
        {x: 212.24, y: 270.41, round: 25, sonar: 'extended' },
        {x: 216.92, y: 276.27, round: 26, sonar: 'extended' },
        {x: 216.92, y: 276.27, round: 26, sonar: 'extended' },
        {x: 223.04, y: 280.61, round: 27, sonar: 'extended' },
        {x: 223.04, y: 280.61, round: 27, sonar: 'extended' },
        {x: 229.41, y: 284.56, round: 28, sonar: 'extended' },
        {x: 229.41, y: 284.56, round: 28, sonar: 'extended' },
        {x: 235.69, y: 288.67, round: 29, sonar: 'extended' },
        {x: 235.69, y: 288.67, round: 29, sonar: 'extended' },
        {x: 240.46, y: 290.17, round: 30, sonar: 'extended' },
        {x: 240.46, y: 290.17, round: 30, sonar: 'extended' },
        {x: 247.76, y: 291.86, round: 31, sonar: 'nonextended' },
        {x: 247.76, y: 291.86, round: 31, sonar: 'nonextended' },
        {x: 255.25, y: 292.25, round: 32, sonar: 'nonextended' },
        {x: 255.25, y: 292.25, round: 32, sonar: 'nonextended' },
        {x: 265.12, y: 290.64, round: 33, sonar: 'nonextended' },
        {x: 265.12, y: 290.64, round: 33, sonar: 'nonextended' },
        {x: 272.46, y: 289.08, round: 34, sonar: 'nonextended' },
        {x: 272.46, y: 289.08, round: 34, sonar: 'nonextended' },
        {x: 277.06, y: 287.13, round: 35, sonar: 'nonextended' },
        {x: 277.06, y: 287.13, round: 35, sonar: 'nonextended' },
        {x: 281.88, y: 285.79, round: 36, sonar: 'nonextended' },
        {x: 281.88, y: 285.79, round: 36, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 37, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 37, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 38, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 38, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 39, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 39, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 40, sonar: 'nonextended' },
        {x: 284.38, y: 285.80, round: 40, sonar: 'nonextended' },
        {x: 286.87, y: 285.61, round: 41, sonar: 'nonextended' },
        {x: 286.87, y: 285.61, round: 41, sonar: 'nonextended' },
        {x: 291.74, y: 284.46, round: 42, sonar: 'extended' },
        {x: 291.74, y: 284.46, round: 42, sonar: 'extended' },
        {x: 298.69, y: 281.65, round: 43, sonar: 'extended' },
        {x: 298.69, y: 281.65, round: 43, sonar: 'extended' },
        {x: 308.41, y: 279.31, round: 44, sonar: 'extended' },
        {x: 308.41, y: 279.31, round: 44, sonar: 'extended' },
        {x: 316.99, y: 274.16, round: 45, sonar: 'extended' },
        {x: 316.99, y: 274.16, round: 45, sonar: 'extended' },
        {x: 325.83, y: 269.50, round: 46, sonar: 'extended' },
        {x: 325.83, y: 269.50, round: 46, sonar: 'extended' },
        {x: 335.72, y: 267.99, round: 47, sonar: 'extended' },
        {x: 335.72, y: 267.99, round: 47, sonar: 'extended' },
        {x: 345.64, y: 269.23, round: 48, sonar: 'extended' },
        {x: 345.64, y: 269.23, round: 48, sonar: 'extended' },
        {x: 355.59, y: 268.20, round: 49, sonar: 'extended' },
        {x: 355.59, y: 268.20, round: 49, sonar: 'extended' },
        {x: 362.98, y: 266.94, round: 50, sonar: 'extended' },
        {x: 362.98, y: 266.94, round: 50, sonar: 'extended' },
        {x: 370.48, y: 267.16, round: 51, sonar: 'nonextended' },
        {x: 370.48, y: 267.16, round: 51, sonar: 'nonextended' },
        {x: 380.25, y: 265.06, round: 52, sonar: 'nonextended' },
        {x: 380.25, y: 265.06, round: 52, sonar: 'nonextended' },
        {x: 390.00, y: 262.82, round: 53, sonar: 'nonextended' },
        {x: 390.00, y: 262.82, round: 53, sonar: 'nonextended' },
        {x: 400.00, y: 263.01, round: 54, sonar: 'nonextended' },
        {x: 400.00, y: 263.01, round: 54, sonar: 'nonextended' },
        {x: 409.79, y: 261.00, round: 55, sonar: 'nonextended' },
        {x: 409.79, y: 261.00, round: 55, sonar: 'nonextended' },
        {x: 419.79, y: 260.84, round: 56, sonar: 'nonextended' },
        {x: 419.79, y: 260.84, round: 56, sonar: 'nonextended' },
        {x: 429.53, y: 263.11, round: 57, sonar: 'nonextended' },
        {x: 429.53, y: 263.11, round: 57, sonar: 'nonextended' },
        {x: 436.17, y: 266.59, round: 58, sonar: 'nonextended' },
        {x: 436.17, y: 266.59, round: 58, sonar: 'nonextended' },
        {x: 443.06, y: 273.84, round: 59, sonar: 'nonextended' },
        {x: 443.06, y: 273.84, round: 59, sonar: 'nonextended' },
        {x: 448.27, y: 282.37, round: 60, sonar: 'nonextended' },
        {x: 448.27, y: 282.37, round: 60, sonar: 'nonextended' },
        {x: 451.61, y: 291.80, round: 61, sonar: 'nonextended' },
        {x: 451.61, y: 291.80, round: 61, sonar: 'nonextended' },
        {x: 457.34, y: 300.00, round: 62, sonar: 'extended' },
        {x: 457.34, y: 300.00, round: 62, sonar: 'extended' },
        {x: 463.83, y: 307.61, round: 63, sonar: 'extended' },
        {x: 463.83, y: 307.61, round: 63, sonar: 'extended' },
        {x: 470.43, y: 315.11, round: 64, sonar: 'extended' },
        {x: 470.43, y: 315.11, round: 64, sonar: 'extended' },
        {x: 473.21, y: 322.08, round: 65, sonar: 'extended' },
        {x: 473.21, y: 322.08, round: 65, sonar: 'extended' },
        {x: 474.21, y: 326.98, round: 66, sonar: 'extended' },
        {x: 474.21, y: 326.98, round: 66, sonar: 'extended' },
        {x: 473.67, y: 331.95, round: 67, sonar: 'extended' },
        {x: 473.67, y: 331.95, round: 67, sonar: 'extended' },
        {x: 471.67, y: 339.18, round: 68, sonar: 'extended' },
        {x: 471.67, y: 339.18, round: 68, sonar: 'extended' },
        {x: 470.63, y: 344.07, round: 69, sonar: 'extended' },
        {x: 470.63, y: 344.07, round: 69, sonar: 'extended' },
        {x: 467.19, y: 350.73, round: 70, sonar: 'extended' },
        {x: 467.19, y: 350.73, round: 70, sonar: 'extended' },
        {x: 459.89, y: 357.57, round: 71, sonar: 'nonextended' },
        {x: 459.89, y: 357.57, round: 71, sonar: 'nonextended' },
        {x: 455.22, y: 366.42, round: 72, sonar: 'nonextended' },
        {x: 455.22, y: 366.42, round: 72, sonar: 'nonextended' },
        {x: 448.21, y: 373.54, round: 73, sonar: 'nonextended' },
        {x: 448.21, y: 373.54, round: 73, sonar: 'nonextended' },
        {x: 442.73, y: 378.66, round: 74, sonar: 'nonextended' },
        {x: 442.73, y: 378.66, round: 74, sonar: 'nonextended' },
        {x: 436.94, y: 383.43, round: 75, sonar: 'nonextended' },
        {x: 436.94, y: 383.43, round: 75, sonar: 'nonextended' },
        {x: 427.94, y: 387.79, round: 76, sonar: 'nonextended' },
        {x: 427.94, y: 387.79, round: 76, sonar: 'nonextended' },
        {x: 420.54, y: 388.98, round: 77, sonar: 'nonextended' },
        {x: 420.54, y: 388.98, round: 77, sonar: 'nonextended' },
        {x: 413.04, y: 389.15, round: 78, sonar: 'nonextended' },
        {x: 413.04, y: 389.15, round: 78, sonar: 'nonextended' },
        {x: 405.54, y: 388.82, round: 79, sonar: 'nonextended' },
        {x: 405.54, y: 388.82, round: 79, sonar: 'nonextended' },
        {x: 395.99, y: 385.88, round: 80, sonar: 'nonextended' },
        {x: 395.99, y: 385.88, round: 80, sonar: 'nonextended' },
        {x: 387.82, y: 380.11, round: 81, sonar: 'nonextended' },
        {x: 387.82, y: 380.11, round: 81, sonar: 'nonextended' },
        {x: 380.11, y: 373.75, round: 82, sonar: 'extended' },
        {x: 380.11, y: 373.75, round: 82, sonar: 'extended' },
        {x: 374.67, y: 365.35, round: 83, sonar: 'extended' },
        {x: 374.67, y: 365.35, round: 83, sonar: 'extended' },
        {x: 369.78, y: 356.63, round: 84, sonar: 'extended' },
        {x: 369.78, y: 356.63, round: 84, sonar: 'extended' },
        {x: 367.20, y: 346.97, round: 85, sonar: 'extended' },
        {x: 367.20, y: 346.97, round: 85, sonar: 'extended' },
        {x: 367.35, y: 336.97, round: 86, sonar: 'extended' },
        {x: 367.35, y: 336.97, round: 86, sonar: 'extended' },
        {x: 369.49, y: 329.78, round: 87, sonar: 'extended' },
        {x: 369.49, y: 329.78, round: 87, sonar: 'extended' },
        {x: 371.30, y: 322.50, round: 88, sonar: 'extended' },
        {x: 371.30, y: 322.50, round: 88, sonar: 'extended' },
        {x: 374.07, y: 312.89, round: 89, sonar: 'extended' },
        {x: 374.07, y: 312.89, round: 89, sonar: 'extended' },
        {x: 374.90, y: 305.44, round: 90, sonar: 'extended' },
        {x: 374.90, y: 305.44, round: 90, sonar: 'extended' },
        {x: 376.93, y: 295.65, round: 91, sonar: 'nonextended' },
        {x: 376.93, y: 295.65, round: 91, sonar: 'nonextended' },
        {x: 377.69, y: 288.19, round: 92, sonar: 'nonextended' },
        {x: 377.69, y: 288.19, round: 92, sonar: 'nonextended' },
        {x: 376.43, y: 278.27, round: 93, sonar: 'nonextended' },
        {x: 376.43, y: 278.27, round: 93, sonar: 'nonextended' },
        {x: 373.51, y: 268.70, round: 94, sonar: 'nonextended' },
        {x: 373.51, y: 268.70, round: 94, sonar: 'nonextended' },
        {x: 370.31, y: 261.92, round: 95, sonar: 'nonextended' },
        {x: 370.31, y: 261.92, round: 95, sonar: 'nonextended' },
        {x: 364.65, y: 253.68, round: 96, sonar: 'nonextended' },
        {x: 364.65, y: 253.68, round: 96, sonar: 'nonextended' },
        {x: 358.88, y: 245.51, round: 97, sonar: 'nonextended' },
        {x: 358.88, y: 245.51, round: 97, sonar: 'nonextended' },
        {x: 351.85, y: 238.39, round: 98, sonar: 'nonextended' },
        {x: 351.85, y: 238.39, round: 98, sonar: 'nonextended' },
        {x: 347.07, y: 229.61, round: 99, sonar: 'nonextended' },
        {x: 347.07, y: 229.61, round: 99, sonar: 'nonextended' },
        {x: 343.78, y: 220.17, round: 100, sonar: 'nonextended' },
        {x: 343.78, y: 220.17, round: 100, sonar: 'nonextended' },
        {x: 341.34, y: 210.47, round: 101, sonar: 'nonextended' },
        {x: 341.34, y: 210.47, round: 101, sonar: 'nonextended' },
        {x: 338.81, y: 203.41, round: 102, sonar: 'extended' },
        {x: 338.81, y: 203.41, round: 102, sonar: 'extended' },
        {x: 337.48, y: 193.50, round: 103, sonar: 'extended' },
        {x: 337.48, y: 193.50, round: 103, sonar: 'extended' },
        {x: 337.44, y: 183.50, round: 104, sonar: 'extended' },
        {x: 337.44, y: 183.50, round: 104, sonar: 'extended' },
        {x: 334.04, y: 174.10, round: 105, sonar: 'extended' },
        {x: 334.04, y: 174.10, round: 105, sonar: 'extended' },
        {x: 333.91, y: 164.10, round: 106, sonar: 'extended' },
        {x: 333.91, y: 164.10, round: 106, sonar: 'extended' },
        {x: 335.42, y: 156.75, round: 107, sonar: 'extended' },
        {x: 335.42, y: 156.75, round: 107, sonar: 'extended' },
        {x: 334.11, y: 146.84, round: 108, sonar: 'extended' },
        {x: 334.11, y: 146.84, round: 108, sonar: 'extended' },
        {x: 335.26, y: 139.42, round: 109, sonar: 'extended' },
        {x: 335.26, y: 139.42, round: 109, sonar: 'extended' },
        {x: 339.10, y: 130.19, round: 110, sonar: 'extended' },
        {x: 339.10, y: 130.19, round: 110, sonar: 'extended' },
        {x: 343.80, y: 121.37, round: 111, sonar: 'nonextended' },
        {x: 343.80, y: 121.37, round: 111, sonar: 'nonextended' },
        {x: 347.83, y: 112.21, round: 112, sonar: 'nonextended' },
        {x: 347.83, y: 112.21, round: 112, sonar: 'nonextended' },
        {x: 350.89, y: 102.69, round: 113, sonar: 'nonextended' },
        {x: 350.89, y: 102.69, round: 113, sonar: 'nonextended' },
        {x: 351.12, y: 92.70, round: 114, sonar: 'nonextended' },
        {x: 351.12, y: 92.70, round: 114, sonar: 'nonextended' },
        {x: 349.95, y: 82.76, round: 115, sonar: 'nonextended' },
        {x: 349.95, y: 82.76, round: 115, sonar: 'nonextended' },
        {x: 346.09, y: 73.54, round: 116, sonar: 'nonextended' },
        {x: 346.09, y: 73.54, round: 116, sonar: 'nonextended' },
        {x: 339.62, y: 65.91, round: 117, sonar: 'nonextended' },
        {x: 339.62, y: 65.91, round: 117, sonar: 'nonextended' },
        {x: 331.00, y: 60.85, round: 118, sonar: 'nonextended' },
        {x: 331.00, y: 60.85, round: 118, sonar: 'nonextended' },
        {x: 324.09, y: 53.62, round: 119, sonar: 'nonextended' },
        {x: 324.09, y: 53.62, round: 119, sonar: 'nonextended' },
        {x: 315.49, y: 48.52, round: 120, sonar: 'nonextended' },
        {x: 315.49, y: 48.52, round: 120, sonar: 'nonextended' },
        {x: 306.18, y: 44.87, round: 121, sonar: 'nonextended' },
        {x: 306.18, y: 44.87, round: 121, sonar: 'nonextended' },
        {x: 298.69, y: 44.50, round: 122, sonar: 'extended' },
        {x: 298.69, y: 44.50, round: 122, sonar: 'extended' },
        {x: 288.79, y: 45.92, round: 123, sonar: 'extended' },
        {x: 288.79, y: 45.92, round: 123, sonar: 'extended' },
        {x: 278.88, y: 44.57, round: 124, sonar: 'extended' },
        {x: 278.88, y: 44.57, round: 124, sonar: 'extended' },
        {x: 271.39, y: 44.92, round: 125, sonar: 'extended' },
        {x: 271.39, y: 44.92, round: 125, sonar: 'extended' },
        {x: 261.77, y: 47.65, round: 126, sonar: 'extended' },
        {x: 261.77, y: 47.65, round: 126, sonar: 'extended' },
        {x: 253.32, y: 53.00, round: 127, sonar: 'extended' },
        {x: 253.32, y: 53.00, round: 127, sonar: 'extended' },
        {x: 246.73, y: 60.52, round: 128, sonar: 'extended' },
        {x: 246.73, y: 60.52, round: 128, sonar: 'extended' },
        {x: 239.73, y: 67.66, round: 129, sonar: 'extended' },
        {x: 239.73, y: 67.66, round: 129, sonar: 'extended' },
        {x: 232.10, y: 74.13, round: 130, sonar: 'extended' },
        {x: 232.10, y: 74.13, round: 130, sonar: 'extended' },
        {x: 226.01, y: 82.06, round: 131, sonar: 'nonextended' },
        {x: 226.01, y: 82.06, round: 131, sonar: 'nonextended' },
        {x: 222.94, y: 91.57, round: 132, sonar: 'nonextended' },
        {x: 222.94, y: 91.57, round: 132, sonar: 'nonextended' },
        {x: 217.12, y: 99.71, round: 133, sonar: 'nonextended' },
        {x: 217.12, y: 99.71, round: 133, sonar: 'nonextended' },
        {x: 211.23, y: 107.79, round: 134, sonar: 'nonextended' },
        {x: 211.23, y: 107.79, round: 134, sonar: 'nonextended' },
        {x: 204.27, y: 114.97, round: 135, sonar: 'nonextended' },
        {x: 204.27, y: 114.97, round: 135, sonar: 'nonextended' },
        {x: 195.85, y: 120.36, round: 136, sonar: 'nonextended' },
        {x: 195.85, y: 120.36, round: 136, sonar: 'nonextended' },
        {x: 186.31, y: 123.36, round: 137, sonar: 'nonextended' },
        {x: 186.31, y: 123.36, round: 137, sonar: 'nonextended' },
        {x: 179.34, y: 126.14, round: 138, sonar: 'nonextended' },
        {x: 179.34, y: 126.14, round: 138, sonar: 'nonextended' },
        {x: 169.81, y: 129.15, round: 139, sonar: 'nonextended' },
        {x: 169.81, y: 129.15, round: 139, sonar: 'nonextended' },
        {x: 160.06, y: 131.37, round: 140, sonar: 'nonextended' },
        {x: 160.06, y: 131.37, round: 140, sonar: 'nonextended' },
        {x: 150.33, y: 133.68, round: 141, sonar: 'nonextended' },
        {x: 150.33, y: 133.68, round: 141, sonar: 'nonextended' },
        {x: 140.37, y: 134.59, round: 142, sonar: 'extended' },
        {x: 140.37, y: 134.59, round: 142, sonar: 'extended' },
        {x: 130.44, y: 135.82, round: 143, sonar: 'extended' },
        {x: 130.44, y: 135.82, round: 143, sonar: 'extended' },
        {x: 120.54, y: 134.42, round: 144, sonar: 'extended' },
        {x: 120.54, y: 134.42, round: 144, sonar: 'extended' },
        {x: 113.07, y: 133.81, round: 145, sonar: 'extended' },
        {x: 113.07, y: 133.81, round: 145, sonar: 'extended' },
        {x: 105.57, y: 133.82, round: 146, sonar: 'extended' },
        {x: 105.57, y: 133.82, round: 146, sonar: 'extended' },
        {x: 95.84, y: 136.14, round: 147, sonar: 'extended' },
        {x: 95.84, y: 136.14, round: 147, sonar: 'extended' },
        {x: 87.14, y: 141.07, round: 148, sonar: 'extended' },
        {x: 87.14, y: 141.07, round: 148, sonar: 'extended' },
        {x: 79.30, y: 147.27, round: 149, sonar: 'extended' },
        {x: 79.30, y: 147.27, round: 149, sonar: 'extended' },
    ]));
	mySubmarines.push(APP.submarine(41007, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.21, y: 273.84, round: 2, sonar: 'extended' },
        {x: 127.21, y: 273.84, round: 2, sonar: 'extended' },
        {x: 131.75, y: 271.74, round: 3, sonar: 'extended' },
        {x: 131.75, y: 271.74, round: 3, sonar: 'extended' },
        {x: 135.37, y: 268.29, round: 4, sonar: 'extended' },
        {x: 135.37, y: 268.29, round: 4, sonar: 'extended' },
        {x: 139.66, y: 265.72, round: 5, sonar: 'extended' },
        {x: 139.66, y: 265.72, round: 5, sonar: 'extended' },
        {x: 146.73, y: 263.21, round: 6, sonar: 'extended' },
        {x: 146.73, y: 263.21, round: 6, sonar: 'extended' },
        {x: 151.33, y: 261.26, round: 7, sonar: 'extended' },
        {x: 151.33, y: 261.26, round: 7, sonar: 'extended' },
        {x: 155.78, y: 258.98, round: 8, sonar: 'extended' },
        {x: 155.78, y: 258.98, round: 8, sonar: 'extended' },
        {x: 163.17, y: 257.71, round: 9, sonar: 'extended' },
        {x: 163.17, y: 257.71, round: 9, sonar: 'extended' },
        {x: 170.67, y: 257.67, round: 10, sonar: 'extended' },
        {x: 170.67, y: 257.67, round: 10, sonar: 'extended' },
        {x: 178.08, y: 258.84, round: 11, sonar: 'nonextended' },
        {x: 178.08, y: 258.84, round: 11, sonar: 'nonextended' },
        {x: 182.97, y: 259.87, round: 12, sonar: 'nonextended' },
        {x: 182.97, y: 259.87, round: 12, sonar: 'nonextended' },
        {x: 187.53, y: 261.94, round: 13, sonar: 'nonextended' },
        {x: 187.53, y: 261.94, round: 13, sonar: 'nonextended' },
        {x: 190.01, y: 262.25, round: 14, sonar: 'nonextended' },
        {x: 190.01, y: 262.25, round: 14, sonar: 'nonextended' },
        {x: 190.01, y: 262.25, round: 15, sonar: 'nonextended' },
        {x: 190.01, y: 262.25, round: 15, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 16, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 16, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 17, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 17, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 18, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 18, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 19, sonar: 'nonextended' },
        {x: 192.03, y: 263.72, round: 19, sonar: 'nonextended' },
        {x: 191.87, y: 266.22, round: 20, sonar: 'nonextended' },
        {x: 191.87, y: 266.22, round: 20, sonar: 'nonextended' },
        {x: 190.37, y: 270.99, round: 21, sonar: 'nonextended' },
        {x: 190.37, y: 270.99, round: 21, sonar: 'nonextended' },
        {x: 186.43, y: 277.37, round: 22, sonar: 'extended' },
        {x: 186.43, y: 277.37, round: 22, sonar: 'extended' },
        {x: 183.35, y: 281.31, round: 23, sonar: 'extended' },
        {x: 183.35, y: 281.31, round: 23, sonar: 'extended' },
        {x: 181.33, y: 282.78, round: 24, sonar: 'extended' },
        {x: 181.33, y: 282.78, round: 24, sonar: 'extended' },
        {x: 176.79, y: 284.89, round: 25, sonar: 'extended' },
        {x: 176.79, y: 284.89, round: 25, sonar: 'extended' },
        {x: 170.40, y: 288.81, round: 26, sonar: 'extended' },
        {x: 170.40, y: 288.81, round: 26, sonar: 'extended' },
        {x: 165.87, y: 290.92, round: 27, sonar: 'extended' },
        {x: 165.87, y: 290.92, round: 27, sonar: 'extended' },
        {x: 163.43, y: 291.49, round: 28, sonar: 'extended' },
        {x: 163.43, y: 291.49, round: 28, sonar: 'extended' },
        {x: 160.93, y: 291.46, round: 29, sonar: 'extended' },
        {x: 160.93, y: 291.46, round: 29, sonar: 'extended' },
        {x: 158.43, y: 291.43, round: 30, sonar: 'extended' },
        {x: 158.43, y: 291.43, round: 30, sonar: 'extended' },
        {x: 153.49, y: 290.70, round: 31, sonar: 'nonextended' },
        {x: 153.49, y: 290.70, round: 31, sonar: 'nonextended' },
        {x: 150.99, y: 290.55, round: 32, sonar: 'nonextended' },
        {x: 150.99, y: 290.55, round: 32, sonar: 'nonextended' },
        {x: 146.16, y: 289.27, round: 33, sonar: 'nonextended' },
        {x: 146.16, y: 289.27, round: 33, sonar: 'nonextended' },
        {x: 141.31, y: 288.06, round: 34, sonar: 'nonextended' },
        {x: 141.31, y: 288.06, round: 34, sonar: 'nonextended' },
        {x: 136.31, y: 288.09, round: 35, sonar: 'nonextended' },
        {x: 136.31, y: 288.09, round: 35, sonar: 'nonextended' },
        {x: 131.52, y: 286.66, round: 36, sonar: 'nonextended' },
        {x: 131.52, y: 286.66, round: 36, sonar: 'nonextended' },
        {x: 129.06, y: 286.19, round: 37, sonar: 'nonextended' },
        {x: 129.06, y: 286.19, round: 37, sonar: 'nonextended' },
        {x: 126.86, y: 285.00, round: 38, sonar: 'nonextended' },
        {x: 126.86, y: 285.00, round: 38, sonar: 'nonextended' },
        {x: 126.86, y: 285.00, round: 39, sonar: 'nonextended' },
        {x: 126.86, y: 285.00, round: 39, sonar: 'nonextended' },
        {x: 125.03, y: 283.30, round: 40, sonar: 'nonextended' },
        {x: 125.03, y: 283.30, round: 40, sonar: 'nonextended' },
        {x: 121.43, y: 279.83, round: 41, sonar: 'nonextended' },
        {x: 121.43, y: 279.83, round: 41, sonar: 'nonextended' },
        {x: 116.51, y: 274.17, round: 42, sonar: 'extended' },
        {x: 116.51, y: 274.17, round: 42, sonar: 'extended' },
        {x: 111.59, y: 265.46, round: 43, sonar: 'extended' },
        {x: 111.59, y: 265.46, round: 43, sonar: 'extended' },
        {x: 108.49, y: 255.96, round: 44, sonar: 'extended' },
        {x: 108.49, y: 255.96, round: 44, sonar: 'extended' },
        {x: 106.48, y: 248.73, round: 45, sonar: 'extended' },
        {x: 106.48, y: 248.73, round: 45, sonar: 'extended' },
        {x: 106.73, y: 241.24, round: 46, sonar: 'extended' },
        {x: 106.73, y: 241.24, round: 46, sonar: 'extended' },
        {x: 105.78, y: 233.80, round: 47, sonar: 'extended' },
        {x: 105.78, y: 233.80, round: 47, sonar: 'extended' },
        {x: 104.16, y: 226.47, round: 48, sonar: 'extended' },
        {x: 104.16, y: 226.47, round: 48, sonar: 'extended' },
        {x: 100.17, y: 220.13, round: 49, sonar: 'extended' },
        {x: 100.17, y: 220.13, round: 49, sonar: 'extended' },
        {x: 96.30, y: 213.70, round: 50, sonar: 'extended' },
        {x: 96.30, y: 213.70, round: 50, sonar: 'extended' },
        {x: 94.54, y: 209.02, round: 51, sonar: 'nonextended' },
        {x: 94.54, y: 209.02, round: 51, sonar: 'nonextended' },
        {x: 92.24, y: 204.58, round: 52, sonar: 'nonextended' },
        {x: 92.24, y: 204.58, round: 52, sonar: 'nonextended' },
        {x: 89.96, y: 197.44, round: 53, sonar: 'nonextended' },
        {x: 89.96, y: 197.44, round: 53, sonar: 'nonextended' },
        {x: 88.97, y: 187.49, round: 54, sonar: 'nonextended' },
        {x: 88.97, y: 187.49, round: 54, sonar: 'nonextended' },
        {x: 87.81, y: 180.08, round: 55, sonar: 'nonextended' },
        {x: 87.81, y: 180.08, round: 55, sonar: 'nonextended' },
        {x: 88.76, y: 175.17, round: 56, sonar: 'nonextended' },
        {x: 88.76, y: 175.17, round: 56, sonar: 'nonextended' },
        {x: 89.46, y: 172.77, round: 57, sonar: 'nonextended' },
        {x: 89.46, y: 172.77, round: 57, sonar: 'nonextended' },
        {x: 89.46, y: 172.77, round: 58, sonar: 'nonextended' },
        {x: 89.46, y: 172.77, round: 58, sonar: 'nonextended' },
        {x: 90.41, y: 170.45, round: 59, sonar: 'nonextended' },
        {x: 90.41, y: 170.45, round: 59, sonar: 'nonextended' },
        {x: 93.36, y: 166.42, round: 60, sonar: 'nonextended' },
        {x: 93.36, y: 166.42, round: 60, sonar: 'nonextended' },
        {x: 99.11, y: 161.60, round: 61, sonar: 'nonextended' },
        {x: 99.11, y: 161.60, round: 61, sonar: 'nonextended' },
        {x: 104.82, y: 156.74, round: 62, sonar: 'extended' },
        {x: 104.82, y: 156.74, round: 62, sonar: 'extended' },
        {x: 108.41, y: 153.26, round: 63, sonar: 'extended' },
        {x: 108.41, y: 153.26, round: 63, sonar: 'extended' },
        {x: 113.31, y: 147.58, round: 64, sonar: 'extended' },
        {x: 113.31, y: 147.58, round: 64, sonar: 'extended' },
        {x: 119.20, y: 142.94, round: 65, sonar: 'extended' },
        {x: 119.20, y: 142.94, round: 65, sonar: 'extended' },
        {x: 126.79, y: 136.43, round: 66, sonar: 'extended' },
        {x: 126.79, y: 136.43, round: 66, sonar: 'extended' },
        {x: 133.92, y: 129.42, round: 67, sonar: 'extended' },
        {x: 133.92, y: 129.42, round: 67, sonar: 'extended' },
        {x: 142.44, y: 124.19, round: 68, sonar: 'extended' },
        {x: 142.44, y: 124.19, round: 68, sonar: 'extended' },
        {x: 151.03, y: 119.06, round: 69, sonar: 'extended' },
        {x: 151.03, y: 119.06, round: 69, sonar: 'extended' },
        {x: 159.82, y: 114.29, round: 70, sonar: 'extended' },
        {x: 159.82, y: 114.29, round: 70, sonar: 'extended' },
        {x: 169.69, y: 112.69, round: 71, sonar: 'nonextended' },
        {x: 169.69, y: 112.69, round: 71, sonar: 'nonextended' },
        {x: 179.60, y: 113.99, round: 72, sonar: 'nonextended' },
        {x: 179.60, y: 113.99, round: 72, sonar: 'nonextended' },
        {x: 188.92, y: 117.62, round: 73, sonar: 'nonextended' },
        {x: 188.92, y: 117.62, round: 73, sonar: 'nonextended' },
        {x: 196.15, y: 119.61, round: 74, sonar: 'nonextended' },
        {x: 196.15, y: 119.61, round: 74, sonar: 'nonextended' },
        {x: 205.68, y: 122.65, round: 75, sonar: 'nonextended' },
        {x: 205.68, y: 122.65, round: 75, sonar: 'nonextended' },
        {x: 215.49, y: 124.59, round: 76, sonar: 'nonextended' },
        {x: 215.49, y: 124.59, round: 76, sonar: 'nonextended' },
        {x: 225.39, y: 125.97, round: 77, sonar: 'nonextended' },
        {x: 225.39, y: 125.97, round: 77, sonar: 'nonextended' },
        {x: 234.41, y: 130.30, round: 78, sonar: 'nonextended' },
        {x: 234.41, y: 130.30, round: 78, sonar: 'nonextended' },
        {x: 242.35, y: 136.37, round: 79, sonar: 'nonextended' },
        {x: 242.35, y: 136.37, round: 79, sonar: 'nonextended' },
        {x: 249.42, y: 143.44, round: 80, sonar: 'nonextended' },
        {x: 249.42, y: 143.44, round: 80, sonar: 'nonextended' },
        {x: 258.29, y: 148.06, round: 81, sonar: 'nonextended' },
        {x: 258.29, y: 148.06, round: 81, sonar: 'nonextended' },
        {x: 268.05, y: 150.24, round: 82, sonar: 'extended' },
        {x: 268.05, y: 150.24, round: 82, sonar: 'extended' },
        {x: 275.06, y: 152.91, round: 83, sonar: 'extended' },
        {x: 275.06, y: 152.91, round: 83, sonar: 'extended' },
        {x: 284.32, y: 156.68, round: 84, sonar: 'extended' },
        {x: 284.32, y: 156.68, round: 84, sonar: 'extended' },
        {x: 293.79, y: 159.92, round: 85, sonar: 'extended' },
        {x: 293.79, y: 159.92, round: 85, sonar: 'extended' },
        {x: 302.09, y: 165.48, round: 86, sonar: 'extended' },
        {x: 302.09, y: 165.48, round: 86, sonar: 'extended' },
        {x: 306.87, y: 171.26, round: 87, sonar: 'extended' },
        {x: 306.87, y: 171.26, round: 87, sonar: 'extended' },
        {x: 314.23, y: 178.04, round: 88, sonar: 'extended' },
        {x: 314.23, y: 178.04, round: 88, sonar: 'extended' },
        {x: 319.78, y: 186.35, round: 89, sonar: 'extended' },
        {x: 319.78, y: 186.35, round: 89, sonar: 'extended' },
        {x: 326.59, y: 193.68, round: 90, sonar: 'extended' },
        {x: 326.59, y: 193.68, round: 90, sonar: 'extended' },
        {x: 334.51, y: 199.79, round: 91, sonar: 'nonextended' },
        {x: 334.51, y: 199.79, round: 91, sonar: 'nonextended' },
        {x: 341.66, y: 206.77, round: 92, sonar: 'nonextended' },
        {x: 341.66, y: 206.77, round: 92, sonar: 'nonextended' },
        {x: 348.46, y: 214.10, round: 93, sonar: 'nonextended' },
        {x: 348.46, y: 214.10, round: 93, sonar: 'nonextended' },
        {x: 353.30, y: 219.84, round: 94, sonar: 'nonextended' },
        {x: 353.30, y: 219.84, round: 94, sonar: 'nonextended' },
        {x: 358.47, y: 228.39, round: 95, sonar: 'nonextended' },
        {x: 358.47, y: 228.39, round: 95, sonar: 'nonextended' },
        {x: 360.88, y: 235.50, round: 96, sonar: 'nonextended' },
        {x: 360.88, y: 235.50, round: 96, sonar: 'nonextended' },
        {x: 366.15, y: 244.00, round: 97, sonar: 'nonextended' },
        {x: 366.15, y: 244.00, round: 97, sonar: 'nonextended' },
        {x: 373.24, y: 251.05, round: 98, sonar: 'nonextended' },
        {x: 373.24, y: 251.05, round: 98, sonar: 'nonextended' },
        {x: 381.84, y: 256.16, round: 99, sonar: 'nonextended' },
        {x: 381.84, y: 256.16, round: 99, sonar: 'nonextended' },
        {x: 390.42, y: 261.29, round: 100, sonar: 'nonextended' },
        {x: 390.42, y: 261.29, round: 100, sonar: 'nonextended' },
        {x: 397.77, y: 262.76, round: 101, sonar: 'nonextended' },
        {x: 397.77, y: 262.76, round: 101, sonar: 'nonextended' },
        {x: 406.83, y: 267.00, round: 102, sonar: 'extended' },
        {x: 406.83, y: 267.00, round: 102, sonar: 'extended' },
        {x: 412.44, y: 271.98, round: 103, sonar: 'extended' },
        {x: 412.44, y: 271.98, round: 103, sonar: 'extended' },
        {x: 415.50, y: 275.93, round: 104, sonar: 'extended' },
        {x: 415.50, y: 275.93, round: 104, sonar: 'extended' },
        {x: 420.70, y: 281.33, round: 105, sonar: 'extended' },
        {x: 420.70, y: 281.33, round: 105, sonar: 'extended' },
        {x: 425.69, y: 290.00, round: 106, sonar: 'extended' },
        {x: 425.69, y: 290.00, round: 106, sonar: 'extended' },
        {x: 428.76, y: 296.85, round: 107, sonar: 'extended' },
        {x: 428.76, y: 296.85, round: 107, sonar: 'extended' },
        {x: 430.41, y: 301.57, round: 108, sonar: 'extended' },
        {x: 430.41, y: 301.57, round: 108, sonar: 'extended' },
        {x: 431.91, y: 308.91, round: 109, sonar: 'extended' },
        {x: 431.91, y: 308.91, round: 109, sonar: 'extended' },
        {x: 432.12, y: 316.41, round: 110, sonar: 'extended' },
        {x: 432.12, y: 316.41, round: 110, sonar: 'extended' },
        {x: 434.15, y: 326.20, round: 111, sonar: 'nonextended' },
        {x: 434.15, y: 326.20, round: 111, sonar: 'nonextended' },
        {x: 434.76, y: 336.18, round: 112, sonar: 'nonextended' },
        {x: 434.76, y: 336.18, round: 112, sonar: 'nonextended' },
        {x: 432.62, y: 345.95, round: 113, sonar: 'nonextended' },
        {x: 432.62, y: 345.95, round: 113, sonar: 'nonextended' },
        {x: 430.97, y: 355.82, round: 114, sonar: 'nonextended' },
        {x: 430.97, y: 355.82, round: 114, sonar: 'nonextended' },
        {x: 430.50, y: 363.30, round: 115, sonar: 'nonextended' },
        {x: 430.50, y: 363.30, round: 115, sonar: 'nonextended' },
        {x: 427.54, y: 370.19, round: 116, sonar: 'nonextended' },
        {x: 427.54, y: 370.19, round: 116, sonar: 'nonextended' },
        {x: 424.30, y: 374.00, round: 117, sonar: 'nonextended' },
        {x: 424.30, y: 374.00, round: 117, sonar: 'nonextended' },
        {x: 418.96, y: 379.27, round: 118, sonar: 'nonextended' },
        {x: 418.96, y: 379.27, round: 118, sonar: 'nonextended' },
        {x: 409.91, y: 383.52, round: 119, sonar: 'nonextended' },
        {x: 409.91, y: 383.52, round: 119, sonar: 'nonextended' },
        {x: 400.87, y: 387.80, round: 120, sonar: 'nonextended' },
        {x: 400.87, y: 387.80, round: 120, sonar: 'nonextended' },
        {x: 390.93, y: 388.82, round: 121, sonar: 'nonextended' },
        {x: 390.93, y: 388.82, round: 121, sonar: 'nonextended' },
        {x: 380.99, y: 387.69, round: 122, sonar: 'extended' },
        {x: 380.99, y: 387.69, round: 122, sonar: 'extended' },
        {x: 371.67, y: 384.07, round: 123, sonar: 'extended' },
        {x: 371.67, y: 384.07, round: 123, sonar: 'extended' },
        {x: 363.54, y: 378.24, round: 124, sonar: 'extended' },
        {x: 363.54, y: 378.24, round: 124, sonar: 'extended' },
        {x: 357.60, y: 370.20, round: 125, sonar: 'extended' },
        {x: 357.60, y: 370.20, round: 125, sonar: 'extended' },
        {x: 352.03, y: 361.89, round: 126, sonar: 'extended' },
        {x: 352.03, y: 361.89, round: 126, sonar: 'extended' },
        {x: 348.79, y: 352.43, round: 127, sonar: 'extended' },
        {x: 348.79, y: 352.43, round: 127, sonar: 'extended' },
        {x: 344.27, y: 343.51, round: 128, sonar: 'extended' },
        {x: 344.27, y: 343.51, round: 128, sonar: 'extended' },
        {x: 342.62, y: 333.65, round: 129, sonar: 'extended' },
        {x: 342.62, y: 333.65, round: 129, sonar: 'extended' },
        {x: 343.07, y: 323.66, round: 130, sonar: 'extended' },
        {x: 343.07, y: 323.66, round: 130, sonar: 'extended' },
        {x: 346.63, y: 314.31, round: 131, sonar: 'nonextended' },
        {x: 346.63, y: 314.31, round: 131, sonar: 'nonextended' },
        {x: 349.90, y: 304.86, round: 132, sonar: 'nonextended' },
        {x: 349.90, y: 304.86, round: 132, sonar: 'nonextended' },
        {x: 351.49, y: 294.99, round: 133, sonar: 'nonextended' },
        {x: 351.49, y: 294.99, round: 133, sonar: 'nonextended' },
        {x: 355.16, y: 285.68, round: 134, sonar: 'nonextended' },
        {x: 355.16, y: 285.68, round: 134, sonar: 'nonextended' },
        {x: 358.30, y: 276.19, round: 135, sonar: 'nonextended' },
        {x: 358.30, y: 276.19, round: 135, sonar: 'nonextended' },
        {x: 360.78, y: 266.50, round: 136, sonar: 'nonextended' },
        {x: 360.78, y: 266.50, round: 136, sonar: 'nonextended' },
        {x: 361.36, y: 256.52, round: 137, sonar: 'nonextended' },
        {x: 361.36, y: 256.52, round: 137, sonar: 'nonextended' },
        {x: 360.85, y: 249.04, round: 138, sonar: 'nonextended' },
        {x: 360.85, y: 249.04, round: 138, sonar: 'nonextended' },
        {x: 359.93, y: 239.08, round: 139, sonar: 'nonextended' },
        {x: 359.93, y: 239.08, round: 139, sonar: 'nonextended' },
        {x: 361.50, y: 229.20, round: 140, sonar: 'nonextended' },
        {x: 361.50, y: 229.20, round: 140, sonar: 'nonextended' },
        {x: 362.14, y: 219.22, round: 141, sonar: 'nonextended' },
        {x: 362.14, y: 219.22, round: 141, sonar: 'nonextended' },
        {x: 363.97, y: 209.39, round: 142, sonar: 'extended' },
        {x: 363.97, y: 209.39, round: 142, sonar: 'extended' },
        {x: 362.79, y: 199.46, round: 143, sonar: 'extended' },
        {x: 362.79, y: 199.46, round: 143, sonar: 'extended' },
        {x: 361.64, y: 189.53, round: 144, sonar: 'extended' },
        {x: 361.64, y: 189.53, round: 144, sonar: 'extended' },
        {x: 363.05, y: 182.17, round: 145, sonar: 'extended' },
        {x: 363.05, y: 182.17, round: 145, sonar: 'extended' },
        {x: 367.63, y: 173.28, round: 146, sonar: 'extended' },
        {x: 367.63, y: 173.28, round: 146, sonar: 'extended' },
        {x: 374.11, y: 165.66, round: 147, sonar: 'extended' },
        {x: 374.11, y: 165.66, round: 147, sonar: 'extended' },
        {x: 381.25, y: 158.66, round: 148, sonar: 'extended' },
        {x: 381.25, y: 158.66, round: 148, sonar: 'extended' },
        {x: 385.65, y: 149.68, round: 149, sonar: 'extended' },
        {x: 385.65, y: 149.68, round: 149, sonar: 'extended' },
    ]));

    torpedos.push(APP.waterObject(41024, [
        {x: 152.78, y: 188.42, round: 44 },
        {x: 157.97, y: 169.10, round: 45 },
        {x: 163.15, y: 149.79, round: 46 },
        {x: 132.05, y: 265.69, round: 40 },
        {x: 137.23, y: 246.37, round: 41 },
        {x: 142.41, y: 227.05, round: 42 },
        {x: 147.60, y: 207.74, round: 43 },
    ]));
    torpedos.push(APP.waterObject(41025, [
        {x: 126.46, y: 249.52, round: 46 },
        {x: 146.45, y: 250.31, round: 47 },
        {x: 166.43, y: 251.10, round: 48 },
        {x: 186.41, y: 251.89, round: 49 },
    ]));
    torpedos.push(APP.waterObject(41026, [
        {x: 345.30, y: 274.10, round: 47 },
        {x: 364.76, y: 278.69, round: 48 },
    ]));
    torpedos.push(APP.waterObject(41027, [
        {x: 114.37, y: 211.62, round: 52 },
        {x: 134.20, y: 214.23, round: 53 },
        {x: 154.03, y: 216.83, round: 54 },
    ]));
    torpedos.push(APP.waterObject(41028, [
        {x: 350.95, y: 254.15, round: 55 },
        {x: 370.47, y: 258.48, round: 54 },
    ]));
    torpedos.push(APP.waterObject(41029, [
        {x: 108.41, y: 166.35, round: 58 },
        {x: 127.35, y: 159.94, round: 59 },
        {x: 146.29, y: 153.52, round: 60 },
    ]));
    torpedos.push(APP.waterObject(41030, [
        {x: 437.80, y: 295.73, round: 63 },
        {x: 418.26, y: 291.46, round: 64 },
        {x: 398.72, y: 287.19, round: 65 },
    ]));
    torpedos.push(APP.waterObject(41031, [
        {x: 157.71, y: 187.45, round: 66 },
        {x: 174.15, y: 198.85, round: 67 },
        {x: 190.58, y: 210.25, round: 68 },
        {x: 124.85, y: 164.66, round: 64 },
        {x: 141.28, y: 176.06, round: 65 },
    ]));
    torpedos.push(APP.waterObject(41032, [
        {x: 414.52, y: 273.70, round: 102 },
        {x: 431.27, y: 284.63, round: 103 },
        {x: 448.01, y: 295.56, round: 104 },
        {x: 464.76, y: 306.50, round: 105 },
        {x: 481.51, y: 317.43, round: 106 },
        {x: 498.25, y: 328.37, round: 107 },
        {x: 515.00, y: 339.30, round: 108 },
        {x: 531.75, y: 350.23, round: 109 },
    ]));
    torpedos.push(APP.waterObject(41033, [
        {x: 425.34, y: 337.99, round: 110 },
        {x: 436.16, y: 354.81, round: 111 },
        {x: 349.62, y: 220.23, round: 103 },
        {x: 360.44, y: 237.06, round: 104 },
        {x: 371.26, y: 253.88, round: 105 },
        {x: 382.07, y: 270.70, round: 106 },
        {x: 392.89, y: 287.52, round: 107 },
        {x: 403.71, y: 304.35, round: 108 },
        {x: 414.53, y: 321.17, round: 109 },
    ]));
    torpedos.push(APP.waterObject(41034, [
        {x: 339.84, y: 186.42, round: 110 },
        {x: 336.98, y: 166.63, round: 109 },
    ]));
    torpedos.push(APP.waterObject(41035, [
        {x: 416.90, y: 316.09, round: 112 },
        {x: 399.64, y: 305.98, round: 113 },
    ]));
    torpedos.push(APP.waterObject(41036, [
        {x: 313.00, y: 63.67, round: 122 },
        {x: 319.82, y: 82.47, round: 123 },
        {x: 326.64, y: 101.27, round: 124 },
    ]));
    torpedos.push(APP.waterObject(41037, [
        {x: 332.82, y: 356.32, round: 127 },
        {x: 313.62, y: 350.75, round: 128 },
        {x: 294.41, y: 345.18, round: 129 },
        {x: 275.20, y: 339.61, round: 130 },
    ]));
    torpedos.push(APP.waterObject(41038, [
        {x: 273.30, y: 53.91, round: 128 },
        {x: 293.28, y: 54.82, round: 129 },
        {x: 313.26, y: 55.73, round: 130 },
    ]));
    torpedos.push(APP.waterObject(41039, [
        {x: 93.20, y: 160.13, round: 149 },
    ]));
    torpedos.push(APP.waterObject(41014, [
        {x: 117.89, y: 291.06, round: 2 },
        {x: 135.78, y: 282.11, round: 3 },
        {x: 153.67, y: 273.17, round: 4 },
        {x: 171.55, y: 264.22, round: 5 },
        {x: 189.44, y: 255.28, round: 6 },
        {x: 207.33, y: 246.33, round: 7 },
        {x: 225.22, y: 237.39, round: 8 },
        {x: 243.11, y: 228.45, round: 9 },
        {x: 261.00, y: 219.50, round: 10 },
    ]));
    torpedos.push(APP.waterObject(41015, [
        {x: 144.01, y: 268.78, round: 2 },
        {x: 163.01, y: 262.55, round: 3 },
        {x: 182.02, y: 256.33, round: 4 },
        {x: 201.03, y: 250.10, round: 5 },
        {x: 220.03, y: 243.88, round: 6 },
        {x: 239.04, y: 237.65, round: 7 },
        {x: 258.05, y: 231.43, round: 8 },
    ]));
    torpedos.push(APP.waterObject(41016, [
        {x: 205.05, y: 274.15, round: 11 },
        {x: 224.82, y: 271.14, round: 12 },
        {x: 244.59, y: 268.14, round: 13 },
        {x: 264.37, y: 265.13, round: 14 },
        {x: 145.73, y: 283.18, round: 8 },
        {x: 165.50, y: 280.17, round: 9 },
        {x: 185.28, y: 277.16, round: 10 },
    ]));
    torpedos.push(APP.waterObject(41017, [
        {x: 231.23, y: 257.25, round: 11 },
        {x: 251.20, y: 256.25, round: 12 },
        {x: 171.30, y: 260.26, round: 8 },
        {x: 191.28, y: 259.25, round: 9 },
        {x: 211.25, y: 258.25, round: 10 },
    ]));
    torpedos.push(APP.waterObject(41018, [
        {x: 180.60, y: 242.69, round: 18 },
    ]));
    torpedos.push(APP.waterObject(41019, [
        {x: 184.69, y: 245.12, round: 18 },
        {x: 177.35, y: 226.51, round: 19 },
    ]));
    torpedos.push(APP.waterObject(41020, [
        {x: 186.75, y: 266.96, round: 24 },
        {x: 166.81, y: 268.52, round: 25 },
        {x: 146.87, y: 270.07, round: 26 },
    ]));
    torpedos.push(APP.waterObject(41021, [
        {x: 166.09, y: 271.20, round: 24 },
        {x: 148.83, y: 261.09, round: 25 },
        {x: 131.58, y: 250.98, round: 26 },
        {x: 114.32, y: 240.87, round: 27 },
        {x: 97.06, y: 230.76, round: 28 },
        {x: 79.80, y: 220.65, round: 29 },
    ]));
    torpedos.push(APP.waterObject(41022, [
        {x: 239.41, y: 269.02, round: 30 },
    ]));
    torpedos.push(APP.waterObject(41023, [
        {x: 177.36, y: 280.05, round: 30 },
        {x: 193.79, y: 268.65, round: 31 },
        {x: 210.21, y: 257.24, round: 32 },
    ]));

    otherSubmarines.push(APP.waterObject(41008, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 155.04, y: 244.96, round: 23 },
        {x: 147.97, y: 252.03, round: 24 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 133.83, y: 266.17, round: 26 },
        {x: 176.26, y: 223.74, round: 20 },
        {x: 197.47, y: 202.53, round: 17 },
        {x: 140.90, y: 259.10, round: 25 },
        {x: 169.19, y: 230.81, round: 21 },
        {x: 162.11, y: 237.89, round: 22 },
    ]));
    otherSubmarines.push(APP.waterObject(41009, [
        {x: 336.02, y: 118.55, round: 126 },
        {x: 457.90, y: 312.36, round: 57 },
        {x: 373.88, y: 287.54, round: 66 },
        {x: 318.70, y: 128.55, round: 124 },
        {x: 327.36, y: 123.55, round: 125 },
        {x: 310.04, y: 133.55, round: 123 },
        {x: 466.56, y: 317.36, round: 56 },
        {x: 344.68, y: 113.55, round: 127 },
        {x: 451.48, y: 304.70, round: 58 },
        {x: 442.82, y: 299.70, round: 59 },
        {x: 432.97, y: 297.96, round: 60 },
        {x: 423.12, y: 296.23, round: 61 },
        {x: 413.27, y: 294.49, round: 62 },
        {x: 301.38, y: 138.55, round: 122 },
        {x: 403.42, y: 292.75, round: 63 },
        {x: 292.72, y: 143.55, round: 121 },
        {x: 393.58, y: 291.02, round: 64 },
        {x: 383.73, y: 289.28, round: 65 },
    ]));
    otherSubmarines.push(APP.waterObject(41010, [
        {x: 457.37, y: 135.97, round: 143 },
    ]));
    otherSubmarines.push(APP.waterObject(41011, [
        {x: 77.48, y: 182.44, round: 50 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 258.20, y: 250.02, round: 30 },
        {x: 128.60, y: 149.50, round: 57 },
        {x: 219.57, y: 239.67, round: 34 },
        {x: 238.89, y: 244.85, round: 32 },
        {x: 78.35, y: 172.47, round: 51 },
        {x: 158.49, y: 146.88, round: 60 },
        {x: 80.07, y: 192.10, round: 49 },
        {x: 229.23, y: 242.26, round: 33 },
        {x: 108.68, y: 151.24, round: 55 },
        {x: 103.66, y: 208.61, round: 46 },
        {x: 161.61, y: 224.14, round: 40 },
        {x: 148.52, y: 147.76, round: 59 },
        {x: 287.18, y: 257.79, round: 27 },
        {x: 142.29, y: 218.96, round: 42 },
        {x: 89.65, y: 156.34, round: 53 },
        {x: 267.86, y: 252.61, round: 29 },
        {x: 248.55, y: 247.43, round: 31 },
        {x: 85.81, y: 200.29, round: 48 },
        {x: 98.71, y: 152.11, round: 54 },
        {x: 138.56, y: 148.63, round: 58 },
        {x: 151.95, y: 221.55, round: 41 },
        {x: 113.32, y: 211.20, round: 45 },
        {x: 316.16, y: 265.55, round: 24 },
        {x: 132.63, y: 216.38, round: 43 },
        {x: 94.00, y: 206.02, round: 47 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 118.64, y: 150.37, round: 56 },
        {x: 171.27, y: 226.73, round: 39 },
        {x: 82.58, y: 163.41, round: 52 },
        {x: 122.98, y: 213.79, round: 44 },
    ]));
    otherSubmarines.push(APP.waterObject(41012, [
        {x: 365.14, y: 270.77, round: 51 },
        {x: 419.52, y: 296.13, round: 45 },
        {x: 356.08, y: 266.55, round: 52 },
        {x: 347.02, y: 262.32, round: 53 },
        {x: 392.33, y: 283.45, round: 48 },
        {x: 374.20, y: 275.00, round: 50 },
        {x: 401.39, y: 287.68, round: 47 },
        {x: 383.27, y: 279.22, round: 49 },
        {x: 337.95, y: 258.09, round: 54 },
        {x: 410.46, y: 291.90, round: 46 },
    ]));
    otherSubmarines.push(APP.waterObject(41013, [
        {x: 506.27, y: 293.70, round: 101 },
        {x: 207.50, y: 250.00, round: 3 },
        {x: 245.00, y: 250.00, round: 7 },
        {x: 468.08, y: 297.12, round: 105 },
        {x: 200.00, y: 250.00, round: 1 },
        {x: 408.08, y: 297.12, round: 111 },
        {x: 265.00, y: 250.00, round: 9 },
        {x: 225.00, y: 250.00, round: 5 },
        {x: 487.48, y: 300.54, round: 103 },
        {x: 248.08, y: 297.12, round: 127 },
        {x: 81.03, y: 250.26, round: 148 },
        {x: 215.00, y: 250.00, round: 4 },
        {x: 388.08, y: 297.12, round: 113 },
        {x: 202.50, y: 250.00, round: 2 },
        {x: 448.08, y: 297.12, round: 107 },
        {x: 255.00, y: 250.00, round: 8 },
        {x: 235.00, y: 250.00, round: 6 },
        {x: 477.48, y: 300.54, round: 104 },
        {x: 88.69, y: 243.83, round: 149 },
        {x: 428.08, y: 297.12, round: 109 },
        {x: 496.88, y: 297.12, round: 102 },
        {x: 398.08, y: 297.12, round: 112 },
        {x: 438.08, y: 297.12, round: 108 },
        {x: 458.08, y: 297.12, round: 106 },
        {x: 418.08, y: 297.12, round: 110 },
        {x: 258.08, y: 297.12, round: 126 },
        {x: 275.00, y: 250.00, round: 10 },
    ]));

        APP.put(myScores, {score: 0, round: 1})
        APP.put(myScores, {score: 0, round: 2})
        APP.put(myScores, {score: 0, round: 3})
        APP.put(myScores, {score: 0, round: 4})
        APP.put(myScores, {score: 0, round: 5})
        APP.put(myScores, {score: 0, round: 6})
        APP.put(myScores, {score: 0, round: 7})
        APP.put(myScores, {score: 0, round: 8})
        APP.put(myScores, {score: 0, round: 9})
        APP.put(myScores, {score: 0, round: 10})
        APP.put(myScores, {score: 0, round: 11})
        APP.put(myScores, {score: 0, round: 12})
        APP.put(myScores, {score: 0, round: 13})
        APP.put(myScores, {score: 0, round: 14})
        APP.put(myScores, {score: 0, round: 15})
        APP.put(myScores, {score: 0, round: 16})
        APP.put(myScores, {score: 0, round: 17})
        APP.put(myScores, {score: 0, round: 18})
        APP.put(myScores, {score: 100, round: 19})
        APP.put(myScores, {score: 200, round: 20})
        APP.put(myScores, {score: 200, round: 21})
        APP.put(myScores, {score: 200, round: 22})
        APP.put(myScores, {score: 200, round: 23})
        APP.put(myScores, {score: 200, round: 24})
        APP.put(myScores, {score: 200, round: 25})
        APP.put(myScores, {score: 200, round: 26})
        APP.put(myScores, {score: 350, round: 27})
        APP.put(myScores, {score: 350, round: 28})
        APP.put(myScores, {score: 350, round: 29})
        APP.put(myScores, {score: 350, round: 30})
        APP.put(myScores, {score: 450, round: 31})
        APP.put(myScores, {score: 450, round: 32})
        APP.put(myScores, {score: 550, round: 33})
        APP.put(myScores, {score: 550, round: 34})
        APP.put(myScores, {score: 550, round: 35})
        APP.put(myScores, {score: 550, round: 36})
        APP.put(myScores, {score: 550, round: 37})
        APP.put(myScores, {score: 550, round: 38})
        APP.put(myScores, {score: 550, round: 39})
        APP.put(myScores, {score: 550, round: 40})
        APP.put(myScores, {score: 550, round: 41})
        APP.put(myScores, {score: 550, round: 42})
        APP.put(myScores, {score: 550, round: 43})
        APP.put(myScores, {score: 550, round: 44})
        APP.put(myScores, {score: 550, round: 45})
        APP.put(myScores, {score: 550, round: 46})
        APP.put(myScores, {score: 550, round: 47})
        APP.put(myScores, {score: 550, round: 48})
        APP.put(myScores, {score: 650, round: 49})
        APP.put(myScores, {score: 650, round: 50})
        APP.put(myScores, {score: 650, round: 51})
        APP.put(myScores, {score: 650, round: 52})
        APP.put(myScores, {score: 650, round: 53})
        APP.put(myScores, {score: 650, round: 54})
        APP.put(myScores, {score: 650, round: 55})
        APP.put(myScores, {score: 650, round: 56})
        APP.put(myScores, {score: 750, round: 57})
        APP.put(myScores, {score: 750, round: 58})
        APP.put(myScores, {score: 750, round: 59})
        APP.put(myScores, {score: 750, round: 60})
        APP.put(myScores, {score: 1050, round: 61})
        APP.put(myScores, {score: 1050, round: 62})
        APP.put(myScores, {score: 1050, round: 63})
        APP.put(myScores, {score: 1050, round: 64})
        APP.put(myScores, {score: 1050, round: 65})
        APP.put(myScores, {score: 1150, round: 66})
        APP.put(myScores, {score: 1150, round: 67})
        APP.put(myScores, {score: 1150, round: 68})
        APP.put(myScores, {score: 1150, round: 69})
        APP.put(myScores, {score: 1150, round: 70})
        APP.put(myScores, {score: 1150, round: 71})
        APP.put(myScores, {score: 1150, round: 72})
        APP.put(myScores, {score: 1150, round: 73})
        APP.put(myScores, {score: 1150, round: 74})
        APP.put(myScores, {score: 1150, round: 75})
        APP.put(myScores, {score: 1150, round: 76})
        APP.put(myScores, {score: 1150, round: 77})
        APP.put(myScores, {score: 1150, round: 78})
        APP.put(myScores, {score: 1150, round: 79})
        APP.put(myScores, {score: 1150, round: 80})
        APP.put(myScores, {score: 1150, round: 81})
        APP.put(myScores, {score: 1150, round: 82})
        APP.put(myScores, {score: 1150, round: 83})
        APP.put(myScores, {score: 1150, round: 84})
        APP.put(myScores, {score: 1150, round: 85})
        APP.put(myScores, {score: 1150, round: 86})
        APP.put(myScores, {score: 1150, round: 87})
        APP.put(myScores, {score: 1150, round: 88})
        APP.put(myScores, {score: 1150, round: 89})
        APP.put(myScores, {score: 1150, round: 90})
        APP.put(myScores, {score: 1150, round: 91})
        APP.put(myScores, {score: 1150, round: 92})
        APP.put(myScores, {score: 1150, round: 93})
        APP.put(myScores, {score: 1150, round: 94})
        APP.put(myScores, {score: 1150, round: 95})
        APP.put(myScores, {score: 1150, round: 96})
        APP.put(myScores, {score: 1150, round: 97})
        APP.put(myScores, {score: 1150, round: 98})
        APP.put(myScores, {score: 1150, round: 99})
        APP.put(myScores, {score: 1150, round: 100})
        APP.put(myScores, {score: 1150, round: 101})
        APP.put(myScores, {score: 1150, round: 102})
        APP.put(myScores, {score: 1150, round: 103})
        APP.put(myScores, {score: 1150, round: 104})
        APP.put(myScores, {score: 1150, round: 105})
        APP.put(myScores, {score: 1150, round: 106})
        APP.put(myScores, {score: 1150, round: 107})
        APP.put(myScores, {score: 1150, round: 108})
        APP.put(myScores, {score: 1150, round: 109})
        APP.put(myScores, {score: 1150, round: 110})
        APP.put(myScores, {score: 1150, round: 111})
        APP.put(myScores, {score: 1150, round: 112})
        APP.put(myScores, {score: 1150, round: 113})
        APP.put(myScores, {score: 1250, round: 114})
        APP.put(myScores, {score: 1250, round: 115})
        APP.put(myScores, {score: 1350, round: 116})
        APP.put(myScores, {score: 1350, round: 117})
        APP.put(myScores, {score: 1350, round: 118})
        APP.put(myScores, {score: 1350, round: 119})
        APP.put(myScores, {score: 1350, round: 120})
        APP.put(myScores, {score: 1350, round: 121})
        APP.put(myScores, {score: 1350, round: 122})
        APP.put(myScores, {score: 1350, round: 123})
        APP.put(myScores, {score: 1350, round: 124})
        APP.put(myScores, {score: 1450, round: 125})
        APP.put(myScores, {score: 1450, round: 126})
        APP.put(myScores, {score: 1450, round: 127})
        APP.put(myScores, {score: 1450, round: 128})
        APP.put(myScores, {score: 1450, round: 129})
        APP.put(myScores, {score: 1450, round: 130})
        APP.put(myScores, {score: 1450, round: 131})
        APP.put(myScores, {score: 1450, round: 132})
        APP.put(myScores, {score: 1450, round: 133})
        APP.put(myScores, {score: 1450, round: 134})
        APP.put(myScores, {score: 1450, round: 135})
        APP.put(myScores, {score: 1450, round: 136})
        APP.put(myScores, {score: 1450, round: 137})
        APP.put(myScores, {score: 1450, round: 138})
        APP.put(myScores, {score: 1450, round: 139})
        APP.put(myScores, {score: 1450, round: 140})
        APP.put(myScores, {score: 1450, round: 141})
        APP.put(myScores, {score: 1450, round: 142})
        APP.put(myScores, {score: 1450, round: 143})
        APP.put(myScores, {score: 1450, round: 144})
        APP.put(myScores, {score: 1450, round: 145})
        APP.put(myScores, {score: 1450, round: 146})
        APP.put(myScores, {score: 1450, round: 147})
        APP.put(myScores, {score: 1450, round: 148})
        APP.put(myScores, {score: 1450, round: 149})

	return {
		gameId: 'game20161110_07_19_02',
		gameTime: '2016-11-10 07:19:02',
		submarineSize: '7.50',
		simpleSonarSize: '75.00',
		extendedSonarSize: '115.00',
		mySubmarines: mySubmarines,
		torpedos: torpedos,
		otherSubmarines: otherSubmarines,
		scores: (function() {
		   var actualRound = 1;
		   return {
		        nextScore: function() {
		            return myScores[actualRound++];
		        }
		   }
		}())
	}
}()));