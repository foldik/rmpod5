APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(40955, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.50, y: 299.87, round: 2, sonar: 'extended' },
        {x: 102.50, y: 299.87, round: 2, sonar: 'extended' },
        {x: 107.40, y: 300.86, round: 3, sonar: 'extended' },
        {x: 107.40, y: 300.86, round: 3, sonar: 'extended' },
        {x: 112.40, y: 300.96, round: 4, sonar: 'extended' },
        {x: 112.40, y: 300.96, round: 4, sonar: 'extended' },
        {x: 119.52, y: 298.62, round: 5, sonar: 'extended' },
        {x: 119.52, y: 298.62, round: 5, sonar: 'extended' },
        {x: 128.08, y: 293.45, round: 6, sonar: 'extended' },
        {x: 128.08, y: 293.45, round: 6, sonar: 'extended' },
        {x: 133.44, y: 288.20, round: 7, sonar: 'extended' },
        {x: 133.44, y: 288.20, round: 7, sonar: 'extended' },
        {x: 139.08, y: 283.26, round: 8, sonar: 'extended' },
        {x: 139.08, y: 283.26, round: 8, sonar: 'extended' },
        {x: 147.46, y: 277.79, round: 9, sonar: 'extended' },
        {x: 147.46, y: 277.79, round: 9, sonar: 'extended' },
        {x: 155.19, y: 271.45, round: 10, sonar: 'extended' },
        {x: 155.19, y: 271.45, round: 10, sonar: 'extended' },
        {x: 160.77, y: 266.44, round: 11, sonar: 'nonextended' },
        {x: 160.77, y: 266.44, round: 11, sonar: 'nonextended' },
        {x: 164.06, y: 262.68, round: 12, sonar: 'nonextended' },
        {x: 164.06, y: 262.68, round: 12, sonar: 'nonextended' },
        {x: 169.84, y: 257.90, round: 13, sonar: 'nonextended' },
        {x: 169.84, y: 257.90, round: 13, sonar: 'nonextended' },
        {x: 174.04, y: 255.19, round: 14, sonar: 'nonextended' },
        {x: 174.04, y: 255.19, round: 14, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 15, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 15, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 16, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 16, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 17, sonar: 'nonextended' },
        {x: 176.24, y: 254.00, round: 17, sonar: 'nonextended' },
        {x: 178.29, y: 252.56, round: 18, sonar: 'nonextended' },
        {x: 178.29, y: 252.56, round: 18, sonar: 'nonextended' },
        {x: 183.01, y: 250.90, round: 19, sonar: 'nonextended' },
        {x: 183.01, y: 250.90, round: 19, sonar: 'nonextended' },
        {x: 187.40, y: 248.52, round: 20, sonar: 'nonextended' },
        {x: 187.40, y: 248.52, round: 20, sonar: 'nonextended' },
        {x: 194.78, y: 247.18, round: 21, sonar: 'nonextended' },
        {x: 194.78, y: 247.18, round: 21, sonar: 'nonextended' },
        {x: 204.69, y: 248.55, round: 22, sonar: 'extended' },
        {x: 204.69, y: 248.55, round: 22, sonar: 'extended' },
        {x: 211.40, y: 251.90, round: 23, sonar: 'extended' },
        {x: 211.40, y: 251.90, round: 23, sonar: 'extended' },
        {x: 221.30, y: 253.31, round: 24, sonar: 'extended' },
        {x: 221.30, y: 253.31, round: 24, sonar: 'extended' },
        {x: 231.03, y: 255.60, round: 25, sonar: 'extended' },
        {x: 231.03, y: 255.60, round: 25, sonar: 'extended' },
        {x: 240.05, y: 259.92, round: 26, sonar: 'extended' },
        {x: 240.05, y: 259.92, round: 26, sonar: 'extended' },
        {x: 246.27, y: 264.11, round: 27, sonar: 'extended' },
        {x: 246.27, y: 264.11, round: 27, sonar: 'extended' },
        {x: 250.50, y: 266.77, round: 28, sonar: 'extended' },
        {x: 250.50, y: 266.77, round: 28, sonar: 'extended' },
        {x: 252.38, y: 268.42, round: 29, sonar: 'extended' },
        {x: 252.38, y: 268.42, round: 29, sonar: 'extended' },
        {x: 257.00, y: 270.32, round: 30, sonar: 'extended' },
        {x: 257.00, y: 270.32, round: 30, sonar: 'extended' },
        {x: 259.49, y: 270.60, round: 31, sonar: 'nonextended' },
        {x: 259.49, y: 270.60, round: 31, sonar: 'nonextended' },
        {x: 264.49, y: 270.72, round: 32, sonar: 'nonextended' },
        {x: 264.49, y: 270.72, round: 32, sonar: 'nonextended' },
        {x: 271.98, y: 271.07, round: 33, sonar: 'nonextended' },
        {x: 271.98, y: 271.07, round: 33, sonar: 'nonextended' },
        {x: 279.40, y: 272.17, round: 34, sonar: 'nonextended' },
        {x: 279.40, y: 272.17, round: 34, sonar: 'nonextended' },
        {x: 289.22, y: 274.04, round: 35, sonar: 'nonextended' },
        {x: 289.22, y: 274.04, round: 35, sonar: 'nonextended' },
        {x: 296.38, y: 276.26, round: 36, sonar: 'nonextended' },
        {x: 296.38, y: 276.26, round: 36, sonar: 'nonextended' },
        {x: 306.00, y: 279.02, round: 37, sonar: 'nonextended' },
        {x: 306.00, y: 279.02, round: 37, sonar: 'nonextended' },
        {x: 315.80, y: 280.99, round: 38, sonar: 'nonextended' },
        {x: 315.80, y: 280.99, round: 38, sonar: 'nonextended' },
        {x: 325.76, y: 281.88, round: 39, sonar: 'nonextended' },
        {x: 325.76, y: 281.88, round: 39, sonar: 'nonextended' },
        {x: 335.58, y: 280.00, round: 40, sonar: 'nonextended' },
        {x: 335.58, y: 280.00, round: 40, sonar: 'nonextended' },
        {x: 343.00, y: 281.12, round: 41, sonar: 'nonextended' },
        {x: 343.00, y: 281.12, round: 41, sonar: 'nonextended' },
        {x: 351.79, y: 285.88, round: 42, sonar: 'extended' },
        {x: 351.79, y: 285.88, round: 42, sonar: 'extended' },
        {x: 361.50, y: 288.29, round: 43, sonar: 'extended' },
        {x: 361.50, y: 288.29, round: 43, sonar: 'extended' },
        {x: 371.48, y: 287.67, round: 44, sonar: 'extended' },
        {x: 371.48, y: 287.67, round: 44, sonar: 'extended' },
        {x: 381.33, y: 289.40, round: 45, sonar: 'extended' },
        {x: 381.33, y: 289.40, round: 45, sonar: 'extended' },
        {x: 390.85, y: 292.46, round: 46, sonar: 'extended' },
        {x: 390.85, y: 292.46, round: 46, sonar: 'extended' },
        {x: 399.85, y: 296.81, round: 47, sonar: 'extended' },
        {x: 399.85, y: 296.81, round: 47, sonar: 'extended' },
        {x: 409.60, y: 299.03, round: 48, sonar: 'extended' },
        {x: 409.60, y: 299.03, round: 48, sonar: 'extended' },
        {x: 419.22, y: 301.77, round: 49, sonar: 'extended' },
        {x: 419.22, y: 301.77, round: 49, sonar: 'extended' },
        {x: 427.87, y: 306.79, round: 50, sonar: 'extended' },
        {x: 427.87, y: 306.79, round: 50, sonar: 'extended' },
        {x: 435.00, y: 313.80, round: 51, sonar: 'nonextended' },
        {x: 435.00, y: 313.80, round: 51, sonar: 'nonextended' },
        {x: 442.24, y: 320.70, round: 52, sonar: 'nonextended' },
        {x: 442.24, y: 320.70, round: 52, sonar: 'nonextended' },
        {x: 448.73, y: 324.45, round: 53, sonar: 'nonextended' },
        {x: 448.73, y: 324.45, round: 53, sonar: 'nonextended' },
        {x: 458.39, y: 327.01, round: 54, sonar: 'nonextended' },
        {x: 458.39, y: 327.01, round: 54, sonar: 'nonextended' },
        {x: 465.77, y: 328.38, round: 55, sonar: 'nonextended' },
        {x: 465.77, y: 328.38, round: 55, sonar: 'nonextended' },
        {x: 472.84, y: 330.87, round: 56, sonar: 'nonextended' },
        {x: 472.84, y: 330.87, round: 56, sonar: 'nonextended' },
        {x: 480.34, y: 331.11, round: 57, sonar: 'nonextended' },
        {x: 480.34, y: 331.11, round: 57, sonar: 'nonextended' },
        {x: 485.33, y: 331.49, round: 58, sonar: 'nonextended' },
        {x: 485.33, y: 331.49, round: 58, sonar: 'nonextended' },
        {x: 487.77, y: 330.97, round: 59, sonar: 'nonextended' },
        {x: 487.77, y: 330.97, round: 59, sonar: 'nonextended' },
        {x: 492.77, y: 330.84, round: 60, sonar: 'nonextended' },
        {x: 492.77, y: 330.84, round: 60, sonar: 'nonextended' },
        {x: 500.03, y: 328.97, round: 61, sonar: 'nonextended' },
        {x: 500.03, y: 328.97, round: 61, sonar: 'nonextended' },
        {x: 507.50, y: 328.31, round: 62, sonar: 'extended' },
        {x: 507.50, y: 328.31, round: 62, sonar: 'extended' },
        {x: 512.32, y: 326.95, round: 63, sonar: 'extended' },
        {x: 512.32, y: 326.95, round: 63, sonar: 'extended' },
        {x: 514.73, y: 326.30, round: 64, sonar: 'extended' },
        {x: 514.73, y: 326.30, round: 64, sonar: 'extended' },
        {x: 519.61, y: 325.21, round: 65, sonar: 'extended' },
        {x: 519.61, y: 325.21, round: 65, sonar: 'extended' },
        {x: 527.10, y: 324.78, round: 66, sonar: 'extended' },
        {x: 527.10, y: 324.78, round: 66, sonar: 'extended' },
        {x: 532.07, y: 324.25, round: 67, sonar: 'extended' },
        {x: 532.07, y: 324.25, round: 67, sonar: 'extended' },
        {x: 537.04, y: 323.69, round: 68, sonar: 'extended' },
        {x: 537.04, y: 323.69, round: 68, sonar: 'extended' },
        {x: 539.48, y: 323.14, round: 69, sonar: 'extended' },
        {x: 539.48, y: 323.14, round: 69, sonar: 'extended' },
        {x: 539.48, y: 323.14, round: 70, sonar: 'extended' },
        {x: 539.48, y: 323.14, round: 70, sonar: 'extended' },
        {x: 541.92, y: 322.62, round: 71, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 71, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 72, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 72, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 73, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 73, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 74, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 74, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 75, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 75, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 76, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 76, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 77, sonar: 'nonextended' },
        {x: 541.92, y: 322.62, round: 77, sonar: 'nonextended' },
        {x: 544.30, y: 323.39, round: 78, sonar: 'nonextended' },
        {x: 544.30, y: 323.39, round: 78, sonar: 'nonextended' },
        {x: 544.30, y: 323.39, round: 79, sonar: 'nonextended' },
        {x: 544.30, y: 323.39, round: 79, sonar: 'nonextended' },
        {x: 546.68, y: 324.17, round: 80, sonar: 'nonextended' },
        {x: 546.68, y: 324.17, round: 80, sonar: 'nonextended' },
        {x: 546.68, y: 324.17, round: 81, sonar: 'nonextended' },
        {x: 546.68, y: 324.17, round: 81, sonar: 'nonextended' },
        {x: 546.68, y: 324.17, round: 82, sonar: 'extended' },
        {x: 546.68, y: 324.17, round: 82, sonar: 'extended' },
        {x: 548.62, y: 325.74, round: 83, sonar: 'extended' },
        {x: 548.62, y: 325.74, round: 83, sonar: 'extended' },
        {x: 550.72, y: 327.09, round: 84, sonar: 'extended' },
        {x: 550.72, y: 327.09, round: 84, sonar: 'extended' },
        {x: 550.72, y: 327.09, round: 85, sonar: 'extended' },
        {x: 550.72, y: 327.09, round: 85, sonar: 'extended' },
        {x: 552.63, y: 328.71, round: 86, sonar: 'extended' },
        {x: 552.63, y: 328.71, round: 86, sonar: 'extended' },
        {x: 556.52, y: 331.85, round: 87, sonar: 'extended' },
        {x: 556.52, y: 331.85, round: 87, sonar: 'extended' },
        {x: 563.52, y: 334.54, round: 88, sonar: 'extended' },
        {x: 563.52, y: 334.54, round: 88, sonar: 'extended' },
        {x: 571.01, y: 334.81, round: 89, sonar: 'extended' },
        {x: 571.01, y: 334.81, round: 89, sonar: 'extended' },
        {x: 575.82, y: 336.19, round: 90, sonar: 'extended' },
        {x: 575.82, y: 336.19, round: 90, sonar: 'extended' },
        {x: 578.07, y: 337.28, round: 91, sonar: 'nonextended' },
        {x: 578.07, y: 337.28, round: 91, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(40956, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.12, y: 273.68, round: 2, sonar: 'extended' },
        {x: 127.12, y: 273.68, round: 2, sonar: 'extended' },
        {x: 129.36, y: 272.57, round: 3, sonar: 'extended' },
        {x: 129.36, y: 272.57, round: 3, sonar: 'extended' },
        {x: 134.23, y: 271.41, round: 4, sonar: 'extended' },
        {x: 134.23, y: 271.41, round: 4, sonar: 'extended' },
        {x: 141.70, y: 270.78, round: 5, sonar: 'extended' },
        {x: 141.70, y: 270.78, round: 5, sonar: 'extended' },
        {x: 149.15, y: 271.61, round: 6, sonar: 'extended' },
        {x: 149.15, y: 271.61, round: 6, sonar: 'extended' },
        {x: 156.31, y: 273.85, round: 7, sonar: 'extended' },
        {x: 156.31, y: 273.85, round: 7, sonar: 'extended' },
        {x: 161.31, y: 274.00, round: 8, sonar: 'extended' },
        {x: 161.31, y: 274.00, round: 8, sonar: 'extended' },
        {x: 168.77, y: 273.26, round: 9, sonar: 'extended' },
        {x: 168.77, y: 273.26, round: 9, sonar: 'extended' },
        {x: 176.09, y: 271.62, round: 10, sonar: 'extended' },
        {x: 176.09, y: 271.62, round: 10, sonar: 'extended' },
        {x: 183.05, y: 268.83, round: 11, sonar: 'nonextended' },
        {x: 183.05, y: 268.83, round: 11, sonar: 'nonextended' },
        {x: 190.13, y: 266.34, round: 12, sonar: 'nonextended' },
        {x: 190.13, y: 266.34, round: 12, sonar: 'nonextended' },
        {x: 194.52, y: 263.95, round: 13, sonar: 'nonextended' },
        {x: 194.52, y: 263.95, round: 13, sonar: 'nonextended' },
        {x: 199.06, y: 261.86, round: 14, sonar: 'nonextended' },
        {x: 199.06, y: 261.86, round: 14, sonar: 'nonextended' },
        {x: 202.89, y: 258.65, round: 15, sonar: 'nonextended' },
        {x: 202.89, y: 258.65, round: 15, sonar: 'nonextended' },
        {x: 209.21, y: 254.61, round: 16, sonar: 'nonextended' },
        {x: 209.21, y: 254.61, round: 16, sonar: 'nonextended' },
        {x: 216.44, y: 252.59, round: 17, sonar: 'nonextended' },
        {x: 216.44, y: 252.59, round: 17, sonar: 'nonextended' },
        {x: 220.86, y: 250.26, round: 18, sonar: 'nonextended' },
        {x: 220.86, y: 250.26, round: 18, sonar: 'nonextended' },
        {x: 226.96, y: 245.90, round: 19, sonar: 'nonextended' },
        {x: 226.96, y: 245.90, round: 19, sonar: 'nonextended' },
        {x: 235.60, y: 240.85, round: 20, sonar: 'nonextended' },
        {x: 235.60, y: 240.85, round: 20, sonar: 'nonextended' },
        {x: 242.92, y: 239.25, round: 21, sonar: 'nonextended' },
        {x: 242.92, y: 239.25, round: 21, sonar: 'nonextended' },
        {x: 252.52, y: 236.45, round: 22, sonar: 'extended' },
        {x: 252.52, y: 236.45, round: 22, sonar: 'extended' },
        {x: 262.52, y: 236.78, round: 23, sonar: 'extended' },
        {x: 262.52, y: 236.78, round: 23, sonar: 'extended' },
        {x: 272.40, y: 235.23, round: 24, sonar: 'extended' },
        {x: 272.40, y: 235.23, round: 24, sonar: 'extended' },
        {x: 281.82, y: 231.90, round: 25, sonar: 'extended' },
        {x: 281.82, y: 231.90, round: 25, sonar: 'extended' },
        {x: 291.77, y: 230.83, round: 26, sonar: 'extended' },
        {x: 291.77, y: 230.83, round: 26, sonar: 'extended' },
        {x: 301.71, y: 231.88, round: 27, sonar: 'extended' },
        {x: 301.71, y: 231.88, round: 27, sonar: 'extended' },
        {x: 308.50, y: 235.08, round: 28, sonar: 'extended' },
        {x: 308.50, y: 235.08, round: 28, sonar: 'extended' },
        {x: 315.19, y: 238.47, round: 29, sonar: 'extended' },
        {x: 315.19, y: 238.47, round: 29, sonar: 'extended' },
        {x: 323.06, y: 244.63, round: 30, sonar: 'extended' },
        {x: 323.06, y: 244.63, round: 30, sonar: 'extended' },
        {x: 330.32, y: 251.51, round: 31, sonar: 'nonextended' },
        {x: 330.32, y: 251.51, round: 31, sonar: 'nonextended' },
        {x: 337.06, y: 254.81, round: 32, sonar: 'nonextended' },
        {x: 337.06, y: 254.81, round: 32, sonar: 'nonextended' },
        {x: 343.99, y: 257.68, round: 33, sonar: 'nonextended' },
        {x: 343.99, y: 257.68, round: 33, sonar: 'nonextended' },
        {x: 350.40, y: 261.56, round: 34, sonar: 'nonextended' },
        {x: 350.40, y: 261.56, round: 34, sonar: 'nonextended' },
        {x: 358.33, y: 267.66, round: 35, sonar: 'nonextended' },
        {x: 358.33, y: 267.66, round: 35, sonar: 'nonextended' },
        {x: 365.27, y: 270.49, round: 36, sonar: 'nonextended' },
        {x: 365.27, y: 270.49, round: 36, sonar: 'nonextended' },
        {x: 372.24, y: 273.27, round: 37, sonar: 'nonextended' },
        {x: 372.24, y: 273.27, round: 37, sonar: 'nonextended' },
        {x: 380.58, y: 278.79, round: 38, sonar: 'nonextended' },
        {x: 380.58, y: 278.79, round: 38, sonar: 'nonextended' },
        {x: 389.14, y: 283.96, round: 39, sonar: 'nonextended' },
        {x: 389.14, y: 283.96, round: 39, sonar: 'nonextended' },
        {x: 396.23, y: 286.39, round: 40, sonar: 'nonextended' },
        {x: 396.23, y: 286.39, round: 40, sonar: 'nonextended' },
        {x: 402.43, y: 290.62, round: 41, sonar: 'nonextended' },
        {x: 402.43, y: 290.62, round: 41, sonar: 'nonextended' },
        {x: 408.91, y: 298.24, round: 42, sonar: 'extended' },
        {x: 408.91, y: 298.24, round: 42, sonar: 'extended' },
        {x: 416.83, y: 304.34, round: 43, sonar: 'extended' },
        {x: 416.83, y: 304.34, round: 43, sonar: 'extended' },
        {x: 425.95, y: 308.43, round: 44, sonar: 'extended' },
        {x: 425.95, y: 308.43, round: 44, sonar: 'extended' },
        {x: 435.83, y: 310.00, round: 45, sonar: 'extended' },
        {x: 435.83, y: 310.00, round: 45, sonar: 'extended' },
        {x: 442.89, y: 312.52, round: 46, sonar: 'extended' },
        {x: 442.89, y: 312.52, round: 46, sonar: 'extended' },
        {x: 447.89, y: 312.54, round: 47, sonar: 'extended' },
        {x: 447.89, y: 312.54, round: 47, sonar: 'extended' },
        {x: 455.09, y: 310.43, round: 48, sonar: 'extended' },
        {x: 455.09, y: 310.43, round: 48, sonar: 'extended' },
        {x: 462.59, y: 310.22, round: 49, sonar: 'extended' },
        {x: 462.59, y: 310.22, round: 49, sonar: 'extended' },
        {x: 467.49, y: 309.24, round: 50, sonar: 'extended' },
        {x: 467.49, y: 309.24, round: 50, sonar: 'extended' },
        {x: 469.99, y: 309.28, round: 51, sonar: 'nonextended' },
        {x: 469.99, y: 309.28, round: 51, sonar: 'nonextended' },
        {x: 474.94, y: 309.98, round: 52, sonar: 'nonextended' },
        {x: 474.94, y: 309.98, round: 52, sonar: 'nonextended' },
        {x: 477.29, y: 310.84, round: 53, sonar: 'nonextended' },
        {x: 477.29, y: 310.84, round: 53, sonar: 'nonextended' },
        {x: 482.00, y: 312.53, round: 54, sonar: 'nonextended' },
        {x: 482.00, y: 312.53, round: 54, sonar: 'nonextended' },
        {x: 488.52, y: 316.22, round: 55, sonar: 'nonextended' },
        {x: 488.52, y: 316.22, round: 55, sonar: 'nonextended' },
        {x: 493.77, y: 321.58, round: 56, sonar: 'nonextended' },
        {x: 493.77, y: 321.58, round: 56, sonar: 'nonextended' },
        {x: 498.21, y: 323.87, round: 57, sonar: 'nonextended' },
        {x: 498.21, y: 323.87, round: 57, sonar: 'nonextended' },
        {x: 500.34, y: 325.18, round: 58, sonar: 'nonextended' },
        {x: 500.34, y: 325.18, round: 58, sonar: 'nonextended' },
        {x: 505.12, y: 326.65, round: 59, sonar: 'nonextended' },
        {x: 505.12, y: 326.65, round: 59, sonar: 'nonextended' },
        {x: 509.99, y: 327.77, round: 60, sonar: 'nonextended' },
        {x: 509.99, y: 327.77, round: 60, sonar: 'nonextended' },
        {x: 512.48, y: 328.04, round: 61, sonar: 'nonextended' },
        {x: 512.48, y: 328.04, round: 61, sonar: 'nonextended' },
        {x: 512.48, y: 328.04, round: 62, sonar: 'extended' },
        {x: 512.48, y: 328.04, round: 62, sonar: 'extended' },
        {x: 514.90, y: 328.67, round: 63, sonar: 'extended' },
        {x: 514.90, y: 328.67, round: 63, sonar: 'extended' },
        {x: 517.40, y: 328.79, round: 64, sonar: 'extended' },
        {x: 517.40, y: 328.79, round: 64, sonar: 'extended' },
        {x: 517.40, y: 328.79, round: 65, sonar: 'extended' },
        {x: 517.40, y: 328.79, round: 65, sonar: 'extended' },
        {x: 519.79, y: 329.52, round: 66, sonar: 'extended' },
        {x: 519.79, y: 329.52, round: 66, sonar: 'extended' },
        {x: 522.00, y: 330.69, round: 67, sonar: 'extended' },
        {x: 522.00, y: 330.69, round: 67, sonar: 'extended' },
        {x: 526.74, y: 332.29, round: 68, sonar: 'extended' },
        {x: 526.74, y: 332.29, round: 68, sonar: 'extended' },
        {x: 533.38, y: 335.77, round: 69, sonar: 'extended' },
        {x: 533.38, y: 335.77, round: 69, sonar: 'extended' },
        {x: 538.09, y: 337.45, round: 70, sonar: 'extended' },
        {x: 538.09, y: 337.45, round: 70, sonar: 'extended' },
        {x: 543.02, y: 338.29, round: 71, sonar: 'nonextended' },
        {x: 543.02, y: 338.29, round: 71, sonar: 'nonextended' },
        {x: 545.52, y: 338.14, round: 72, sonar: 'nonextended' },
        {x: 545.52, y: 338.14, round: 72, sonar: 'nonextended' },
        {x: 548.01, y: 338.34, round: 73, sonar: 'nonextended' },
        {x: 548.01, y: 338.34, round: 73, sonar: 'nonextended' },
        {x: 548.01, y: 338.34, round: 74, sonar: 'nonextended' },
        {x: 548.01, y: 338.34, round: 74, sonar: 'nonextended' },
        {x: 550.43, y: 338.98, round: 75, sonar: 'nonextended' },
        {x: 550.43, y: 338.98, round: 75, sonar: 'nonextended' },
        {x: 555.35, y: 339.85, round: 76, sonar: 'nonextended' },
        {x: 555.35, y: 339.85, round: 76, sonar: 'nonextended' },
        {x: 559.73, y: 342.26, round: 77, sonar: 'nonextended' },
        {x: 559.73, y: 342.26, round: 77, sonar: 'nonextended' },
        {x: 567.02, y: 344.02, round: 78, sonar: 'nonextended' },
        {x: 567.02, y: 344.02, round: 78, sonar: 'nonextended' },
        {x: 571.83, y: 345.40, round: 79, sonar: 'nonextended' },
        {x: 571.83, y: 345.40, round: 79, sonar: 'nonextended' },
        {x: 574.12, y: 346.39, round: 80, sonar: 'nonextended' },
        {x: 574.12, y: 346.39, round: 80, sonar: 'nonextended' },
        {x: 574.12, y: 346.39, round: 81, sonar: 'nonextended' },
        {x: 574.12, y: 346.39, round: 81, sonar: 'nonextended' },
        {x: 574.12, y: 346.39, round: 82, sonar: 'extended' },
        {x: 574.12, y: 346.39, round: 82, sonar: 'extended' },
        {x: 574.12, y: 346.39, round: 83, sonar: 'extended' },
        {x: 574.12, y: 346.39, round: 83, sonar: 'extended' },
        {x: 575.54, y: 348.45, round: 84, sonar: 'extended' },
        {x: 575.54, y: 348.45, round: 84, sonar: 'extended' },
        {x: 575.54, y: 348.45, round: 85, sonar: 'extended' },
        {x: 575.54, y: 348.45, round: 85, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 86, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 86, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 87, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 87, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 88, sonar: 'extended' },
        {x: 575.87, y: 350.93, round: 88, sonar: 'extended' },
        {x: 575.11, y: 353.31, round: 89, sonar: 'extended' },
        {x: 575.11, y: 353.31, round: 89, sonar: 'extended' },
        {x: 575.11, y: 353.31, round: 90, sonar: 'extended' },
        {x: 575.11, y: 353.31, round: 90, sonar: 'extended' },
        {x: 575.11, y: 353.31, round: 91, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 91, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 92, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 92, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 93, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 93, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 94, sonar: 'nonextended' },
        {x: 575.11, y: 353.31, round: 94, sonar: 'nonextended' },
        {x: 573.53, y: 355.25, round: 95, sonar: 'nonextended' },
        {x: 573.53, y: 355.25, round: 95, sonar: 'nonextended' },
        {x: 573.53, y: 355.25, round: 96, sonar: 'nonextended' },
        {x: 573.53, y: 355.25, round: 96, sonar: 'nonextended' },
        {x: 571.21, y: 356.17, round: 97, sonar: 'nonextended' },
        {x: 571.21, y: 356.17, round: 97, sonar: 'nonextended' },
        {x: 568.96, y: 357.27, round: 98, sonar: 'nonextended' },
        {x: 568.96, y: 357.27, round: 98, sonar: 'nonextended' },
        {x: 565.19, y: 360.55, round: 99, sonar: 'nonextended' },
        {x: 565.19, y: 360.55, round: 99, sonar: 'nonextended' },
        {x: 558.67, y: 364.26, round: 100, sonar: 'nonextended' },
        {x: 558.67, y: 364.26, round: 100, sonar: 'nonextended' },
        {x: 550.77, y: 370.39, round: 101, sonar: 'nonextended' },
        {x: 550.77, y: 370.39, round: 101, sonar: 'nonextended' },
        {x: 542.31, y: 375.73, round: 102, sonar: 'extended' },
        {x: 542.31, y: 375.73, round: 102, sonar: 'extended' },
        {x: 532.73, y: 378.58, round: 103, sonar: 'extended' },
        {x: 532.73, y: 378.58, round: 103, sonar: 'extended' },
        {x: 523.03, y: 381.03, round: 104, sonar: 'extended' },
        {x: 523.03, y: 381.03, round: 104, sonar: 'extended' },
        {x: 513.14, y: 382.49, round: 105, sonar: 'extended' },
        {x: 513.14, y: 382.49, round: 105, sonar: 'extended' },
        {x: 503.24, y: 383.91, round: 106, sonar: 'extended' },
        {x: 503.24, y: 383.91, round: 106, sonar: 'extended' },
        {x: 493.76, y: 387.09, round: 107, sonar: 'extended' },
        {x: 493.76, y: 387.09, round: 107, sonar: 'extended' },
        {x: 483.77, y: 387.41, round: 108, sonar: 'extended' },
        {x: 483.77, y: 387.41, round: 108, sonar: 'extended' },
        {x: 473.77, y: 387.41, round: 109, sonar: 'extended' },
        {x: 473.77, y: 387.41, round: 109, sonar: 'extended' },
        {x: 464.13, y: 384.74, round: 110, sonar: 'extended' },
        {x: 464.13, y: 384.74, round: 110, sonar: 'extended' },
        {x: 457.75, y: 380.80, round: 111, sonar: 'nonextended' },
        {x: 457.75, y: 380.80, round: 111, sonar: 'nonextended' },
        {x: 452.19, y: 375.77, round: 112, sonar: 'nonextended' },
        {x: 452.19, y: 375.77, round: 112, sonar: 'nonextended' },
        {x: 447.77, y: 369.71, round: 113, sonar: 'nonextended' },
        {x: 447.77, y: 369.71, round: 113, sonar: 'nonextended' },
        {x: 445.39, y: 365.31, round: 114, sonar: 'nonextended' },
        {x: 445.39, y: 365.31, round: 114, sonar: 'nonextended' },
        {x: 443.68, y: 358.01, round: 115, sonar: 'nonextended' },
        {x: 443.68, y: 358.01, round: 115, sonar: 'nonextended' },
        {x: 439.67, y: 348.85, round: 116, sonar: 'nonextended' },
        {x: 439.67, y: 348.85, round: 116, sonar: 'nonextended' },
        {x: 437.78, y: 339.03, round: 117, sonar: 'nonextended' },
        {x: 437.78, y: 339.03, round: 117, sonar: 'nonextended' },
        {x: 436.75, y: 331.60, round: 118, sonar: 'nonextended' },
        {x: 436.75, y: 331.60, round: 118, sonar: 'nonextended' },
        {x: 438.01, y: 321.68, round: 119, sonar: 'nonextended' },
        {x: 438.01, y: 321.68, round: 119, sonar: 'nonextended' },
        {x: 441.81, y: 312.43, round: 120, sonar: 'nonextended' },
        {x: 441.81, y: 312.43, round: 120, sonar: 'nonextended' },
        {x: 445.47, y: 305.88, round: 121, sonar: 'nonextended' },
        {x: 445.47, y: 305.88, round: 121, sonar: 'nonextended' },
        {x: 449.74, y: 299.72, round: 122, sonar: 'extended' },
        {x: 449.74, y: 299.72, round: 122, sonar: 'extended' },
        {x: 455.68, y: 295.14, round: 123, sonar: 'extended' },
        {x: 455.68, y: 295.14, round: 123, sonar: 'extended' },
        {x: 464.62, y: 290.66, round: 124, sonar: 'extended' },
        {x: 464.62, y: 290.66, round: 124, sonar: 'extended' },
        {x: 470.63, y: 286.17, round: 125, sonar: 'extended' },
        {x: 470.63, y: 286.17, round: 125, sonar: 'extended' },
        {x: 480.18, y: 283.19, round: 126, sonar: 'extended' },
        {x: 480.18, y: 283.19, round: 126, sonar: 'extended' },
        {x: 488.33, y: 277.40, round: 127, sonar: 'extended' },
        {x: 488.33, y: 277.40, round: 127, sonar: 'extended' },
        {x: 497.67, y: 273.82, round: 128, sonar: 'extended' },
        {x: 497.67, y: 273.82, round: 128, sonar: 'extended' },
        {x: 507.58, y: 272.47, round: 129, sonar: 'extended' },
        {x: 507.58, y: 272.47, round: 129, sonar: 'extended' },
        {x: 517.57, y: 272.87, round: 130, sonar: 'extended' },
        {x: 517.57, y: 272.87, round: 130, sonar: 'extended' },
        {x: 524.89, y: 274.48, round: 131, sonar: 'nonextended' },
        {x: 524.89, y: 274.48, round: 131, sonar: 'nonextended' },
        {x: 534.34, y: 277.77, round: 132, sonar: 'nonextended' },
        {x: 534.34, y: 277.77, round: 132, sonar: 'nonextended' },
        {x: 543.86, y: 280.83, round: 133, sonar: 'nonextended' },
        {x: 543.86, y: 280.83, round: 133, sonar: 'nonextended' },
        {x: 552.77, y: 285.36, round: 134, sonar: 'nonextended' },
        {x: 552.77, y: 285.36, round: 134, sonar: 'nonextended' },
        {x: 560.66, y: 291.51, round: 135, sonar: 'nonextended' },
        {x: 560.66, y: 291.51, round: 135, sonar: 'nonextended' },
        {x: 566.94, y: 299.29, round: 136, sonar: 'nonextended' },
        {x: 566.94, y: 299.29, round: 136, sonar: 'nonextended' },
        {x: 575.03, y: 305.17, round: 137, sonar: 'nonextended' },
        {x: 575.03, y: 305.17, round: 137, sonar: 'nonextended' },
        {x: 582.31, y: 312.02, round: 138, sonar: 'nonextended' },
        {x: 582.31, y: 312.02, round: 138, sonar: 'nonextended' },
        {x: 591.44, y: 316.11, round: 139, sonar: 'nonextended' },
        {x: 591.44, y: 316.11, round: 139, sonar: 'nonextended' },
        {x: 601.09, y: 318.72, round: 140, sonar: 'nonextended' },
        {x: 601.09, y: 318.72, round: 140, sonar: 'nonextended' },
        {x: 611.09, y: 318.43, round: 141, sonar: 'nonextended' },
        {x: 611.09, y: 318.43, round: 141, sonar: 'nonextended' },
        {x: 621.06, y: 317.69, round: 142, sonar: 'extended' },
        {x: 621.06, y: 317.69, round: 142, sonar: 'extended' },
        {x: 630.65, y: 314.85, round: 143, sonar: 'extended' },
        {x: 630.65, y: 314.85, round: 143, sonar: 'extended' },
        {x: 640.47, y: 312.99, round: 144, sonar: 'extended' },
        {x: 640.47, y: 312.99, round: 144, sonar: 'extended' },
        {x: 649.70, y: 309.14, round: 145, sonar: 'extended' },
        {x: 649.70, y: 309.14, round: 145, sonar: 'extended' },
        {x: 657.19, y: 308.73, round: 146, sonar: 'extended' },
        {x: 657.19, y: 308.73, round: 146, sonar: 'extended' },
        {x: 664.56, y: 307.36, round: 147, sonar: 'extended' },
        {x: 664.56, y: 307.36, round: 147, sonar: 'extended' },
        {x: 673.39, y: 302.67, round: 148, sonar: 'extended' },
        {x: 673.39, y: 302.67, round: 148, sonar: 'extended' },
        {x: 682.06, y: 297.68, round: 149, sonar: 'extended' },
        {x: 682.06, y: 297.68, round: 149, sonar: 'extended' },
    ]));

    torpedos.push(APP.waterObject(40963, [
        {x: 117.81, y: 290.89, round: 2 },
        {x: 135.61, y: 281.79, round: 3 },
        {x: 153.42, y: 272.68, round: 4 },
        {x: 171.22, y: 263.57, round: 5 },
        {x: 189.03, y: 254.46, round: 6 },
        {x: 206.84, y: 245.36, round: 7 },
        {x: 224.64, y: 236.25, round: 8 },
        {x: 242.45, y: 227.14, round: 9 },
        {x: 260.26, y: 218.04, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40964, [
        {x: 144.02, y: 268.82, round: 2 },
        {x: 163.04, y: 262.64, round: 3 },
        {x: 182.06, y: 256.46, round: 4 },
        {x: 201.08, y: 250.28, round: 5 },
        {x: 220.11, y: 244.10, round: 6 },
        {x: 239.13, y: 237.92, round: 7 },
        {x: 258.15, y: 231.74, round: 8 },
    ]));
    torpedos.push(APP.waterObject(40965, [
        {x: 212.51, y: 276.03, round: 11 },
        {x: 232.28, y: 272.98, round: 12 },
        {x: 252.04, y: 269.94, round: 13 },
        {x: 271.81, y: 266.89, round: 14 },
        {x: 153.21, y: 285.16, round: 8 },
        {x: 172.98, y: 282.12, round: 9 },
        {x: 192.74, y: 279.07, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40966, [
        {x: 235.47, y: 262.24, round: 11 },
        {x: 255.25, y: 259.34, round: 12 },
        {x: 176.10, y: 270.95, round: 8 },
        {x: 195.89, y: 268.05, round: 9 },
        {x: 215.68, y: 265.15, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40967, [
        {x: 182.32, y: 234.94, round: 17 },
    ]));
    torpedos.push(APP.waterObject(40968, [
        {x: 195.66, y: 239.91, round: 17 },
        {x: 182.10, y: 225.20, round: 18 },
    ]));
    torpedos.push(APP.waterObject(40969, [
        {x: 185.02, y: 252.16, round: 23 },
        {x: 165.35, y: 255.78, round: 24 },
    ]));
    torpedos.push(APP.waterObject(40970, [
        {x: 269.71, y: 246.68, round: 23 },
        {x: 286.89, y: 256.91, round: 24 },
    ]));
    torpedos.push(APP.waterObject(40971, [
        {x: 288.68, y: 237.74, round: 29 },
        {x: 268.86, y: 240.41, round: 30 },
    ]));
    torpedos.push(APP.waterObject(40972, [
        {x: 246.67, y: 261.63, round: 33 },
        {x: 228.85, y: 252.55, round: 34 },
    ]));
    torpedos.push(APP.waterObject(40973, [
        {x: 407.38, y: 315.30, round: 44 },
        {x: 425.33, y: 324.12, round: 45 },
        {x: 443.27, y: 332.94, round: 46 },
        {x: 461.22, y: 341.77, round: 47 },
        {x: 479.17, y: 350.59, round: 48 },
        {x: 497.12, y: 359.42, round: 49 },
        {x: 353.53, y: 288.83, round: 41 },
        {x: 371.48, y: 297.65, round: 42 },
        {x: 389.43, y: 306.47, round: 43 },
    ]));
    torpedos.push(APP.waterObject(40974, [
        {x: 453.55, y: 300.71, round: 46 },
        {x: 471.26, y: 291.43, round: 47 },
        {x: 488.98, y: 282.15, round: 48 },
    ]));
    torpedos.push(APP.waterObject(40976, [
        {x: 462.23, y: 320.28, round: 53 },
    ]));
    torpedos.push(APP.waterObject(40977, [
        {x: 479.81, y: 316.04, round: 58 },
        {x: 461.41, y: 308.21, round: 59 },
        {x: 443.01, y: 300.37, round: 60 },
    ]));
    torpedos.push(APP.waterObject(40978, [
        {x: 470.59, y: 317.97, round: 59 },
        {x: 455.86, y: 304.44, round: 60 },
        {x: 441.12, y: 290.92, round: 61 },
        {x: 426.39, y: 277.39, round: 62 },
    ]));
    torpedos.push(APP.waterObject(40979, [
        {x: 569.92, y: 321.47, round: 85 },
        {x: 589.11, y: 315.84, round: 86 },
        {x: 608.30, y: 310.22, round: 87 },
    ]));
    torpedos.push(APP.waterObject(40980, [
        {x: 618.36, y: 306.42, round: 88 },
        {x: 589.81, y: 334.44, round: 86 },
        {x: 604.09, y: 320.43, round: 87 },
    ]));
    torpedos.push(APP.waterObject(40981, [
        {x: 577.30, y: 316.24, round: 91 },
        {x: 578.77, y: 296.30, round: 92 },
    ]));
    torpedos.push(APP.waterObject(40983, [
        {x: 666.31, y: 287.44, round: 148 },
        {x: 668.05, y: 267.52, round: 149 },
    ]));

    otherSubmarines.push(APP.waterObject(40960, [
        {x: 267.86, y: 252.61, round: 29 },
        {x: 248.55, y: 247.43, round: 31 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 258.20, y: 250.02, round: 30 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 219.57, y: 239.67, round: 34 },
        {x: 238.89, y: 244.85, round: 32 },
        {x: 316.16, y: 265.55, round: 24 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 229.23, y: 242.26, round: 33 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 345.14, y: 273.32, round: 21 },
        {x: 287.18, y: 257.79, round: 27 },
    ]));
    otherSubmarines.push(APP.waterObject(40961, [
        {x: 451.79, y: 318.72, round: 41 },
        {x: 644.47, y: 202.05, round: 148 },
        {x: 401.39, y: 287.68, round: 47 },
        {x: 635.41, y: 197.82, round: 147 },
        {x: 419.52, y: 296.13, round: 45 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 653.53, y: 206.28, round: 149 },
        {x: 392.33, y: 283.45, round: 48 },
        {x: 374.20, y: 275.00, round: 50 },
        {x: 383.27, y: 279.22, round: 49 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 428.58, y: 300.36, round: 44 },
        {x: 460.85, y: 322.95, round: 40 },
        {x: 410.46, y: 291.90, round: 46 },
    ]));
    otherSubmarines.push(APP.waterObject(40962, [
        {x: 207.50, y: 250.00, round: 3 },
        {x: 245.00, y: 250.00, round: 7 },
        {x: 629.04, y: 300.54, round: 88 },
        {x: 200.00, y: 250.00, round: 1 },
        {x: 255.00, y: 250.00, round: 8 },
        {x: 235.00, y: 250.00, round: 6 },
        {x: 265.00, y: 250.00, round: 9 },
        {x: 225.00, y: 250.00, round: 5 },
        {x: 667.23, y: 290.28, round: 84 },
        {x: 600.85, y: 290.28, round: 91 },
        {x: 591.45, y: 286.86, round: 92 },
        {x: 610.24, y: 293.70, round: 90 },
        {x: 215.00, y: 250.00, round: 4 },
        {x: 657.83, y: 293.70, round: 85 },
        {x: 639.04, y: 300.54, round: 87 },
        {x: 202.50, y: 250.00, round: 2 },
        {x: 648.43, y: 297.12, round: 86 },
        {x: 275.00, y: 250.00, round: 10 },
        {x: 619.64, y: 297.12, round: 89 },
    ]));
    otherSubmarines.push(APP.waterObject(40957, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 155.04, y: 244.96, round: 23 },
        {x: 147.97, y: 252.03, round: 24 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 176.26, y: 223.74, round: 20 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
        {x: 169.19, y: 230.81, round: 21 },
        {x: 162.11, y: 237.89, round: 22 },
    ]));
    otherSubmarines.push(APP.waterObject(40958, [
        {x: 508.19, y: 285.90, round: 50 },
        {x: 457.90, y: 312.36, round: 57 },
        {x: 518.45, y: 257.71, round: 47 },
        {x: 501.35, y: 304.70, round: 52 },
        {x: 476.41, y: 319.10, round: 55 },
        {x: 466.56, y: 317.36, round: 56 },
        {x: 494.92, y: 312.36, round: 53 },
        {x: 451.48, y: 304.70, round: 58 },
        {x: 511.61, y: 276.51, round: 49 },
        {x: 442.82, y: 299.70, round: 59 },
        {x: 521.87, y: 248.32, round: 46 },
        {x: 486.26, y: 317.36, round: 54 },
        {x: 432.97, y: 297.96, round: 60 },
        {x: 504.77, y: 295.30, round: 51 },
        {x: 515.03, y: 267.11, round: 48 },
        {x: 525.29, y: 238.92, round: 45 },
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
        APP.put(myScores, {score: 100, round: 18})
        APP.put(myScores, {score: 200, round: 19})
        APP.put(myScores, {score: 200, round: 20})
        APP.put(myScores, {score: 200, round: 21})
        APP.put(myScores, {score: 200, round: 22})
        APP.put(myScores, {score: 200, round: 23})
        APP.put(myScores, {score: 200, round: 24})
        APP.put(myScores, {score: 450, round: 25})
        APP.put(myScores, {score: 450, round: 26})
        APP.put(myScores, {score: 450, round: 27})
        APP.put(myScores, {score: 450, round: 28})
        APP.put(myScores, {score: 450, round: 29})
        APP.put(myScores, {score: 450, round: 30})
        APP.put(myScores, {score: 550, round: 31})
        APP.put(myScores, {score: 550, round: 32})
        APP.put(myScores, {score: 550, round: 33})
        APP.put(myScores, {score: 550, round: 34})
        APP.put(myScores, {score: 700, round: 35})
        APP.put(myScores, {score: 700, round: 36})
        APP.put(myScores, {score: 700, round: 37})
        APP.put(myScores, {score: 700, round: 38})
        APP.put(myScores, {score: 700, round: 39})
        APP.put(myScores, {score: 700, round: 40})
        APP.put(myScores, {score: 700, round: 41})
        APP.put(myScores, {score: 700, round: 42})
        APP.put(myScores, {score: 700, round: 43})
        APP.put(myScores, {score: 700, round: 44})
        APP.put(myScores, {score: 700, round: 45})
        APP.put(myScores, {score: 700, round: 46})
        APP.put(myScores, {score: 800, round: 47})
        APP.put(myScores, {score: 800, round: 48})
        APP.put(myScores, {score: 900, round: 49})
        APP.put(myScores, {score: 900, round: 50})
        APP.put(myScores, {score: 900, round: 51})
        APP.put(myScores, {score: 900, round: 52})
        APP.put(myScores, {score: 900, round: 53})
        APP.put(myScores, {score: 1000, round: 54})
        APP.put(myScores, {score: 1000, round: 55})
        APP.put(myScores, {score: 1000, round: 56})
        APP.put(myScores, {score: 1000, round: 57})
        APP.put(myScores, {score: 1000, round: 58})
        APP.put(myScores, {score: 1000, round: 59})
        APP.put(myScores, {score: 1000, round: 60})
        APP.put(myScores, {score: 1150, round: 61})
        APP.put(myScores, {score: 1150, round: 62})
        APP.put(myScores, {score: 1150, round: 63})
        APP.put(myScores, {score: 1150, round: 64})
        APP.put(myScores, {score: 1150, round: 65})
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
        APP.put(myScores, {score: 1250, round: 88})
        APP.put(myScores, {score: 1350, round: 89})
        APP.put(myScores, {score: 1350, round: 90})
        APP.put(myScores, {score: 1350, round: 91})
        APP.put(myScores, {score: 1350, round: 92})
        APP.put(myScores, {score: 1500, round: 93})
        APP.put(myScores, {score: 1500, round: 94})
        APP.put(myScores, {score: 1500, round: 95})
        APP.put(myScores, {score: 1500, round: 96})
        APP.put(myScores, {score: 1500, round: 97})
        APP.put(myScores, {score: 1500, round: 98})
        APP.put(myScores, {score: 1500, round: 99})
        APP.put(myScores, {score: 1500, round: 100})
        APP.put(myScores, {score: 1500, round: 101})
        APP.put(myScores, {score: 1500, round: 102})
        APP.put(myScores, {score: 1500, round: 103})
        APP.put(myScores, {score: 1500, round: 104})
        APP.put(myScores, {score: 1500, round: 105})
        APP.put(myScores, {score: 1500, round: 106})
        APP.put(myScores, {score: 1500, round: 107})
        APP.put(myScores, {score: 1500, round: 108})
        APP.put(myScores, {score: 1500, round: 109})
        APP.put(myScores, {score: 1500, round: 110})
        APP.put(myScores, {score: 1500, round: 111})
        APP.put(myScores, {score: 1500, round: 112})
        APP.put(myScores, {score: 1500, round: 113})
        APP.put(myScores, {score: 1500, round: 114})
        APP.put(myScores, {score: 1500, round: 115})
        APP.put(myScores, {score: 1500, round: 116})
        APP.put(myScores, {score: 1500, round: 117})
        APP.put(myScores, {score: 1500, round: 118})
        APP.put(myScores, {score: 1500, round: 119})
        APP.put(myScores, {score: 1500, round: 120})
        APP.put(myScores, {score: 1500, round: 121})
        APP.put(myScores, {score: 1500, round: 122})
        APP.put(myScores, {score: 1500, round: 123})
        APP.put(myScores, {score: 1500, round: 124})
        APP.put(myScores, {score: 1500, round: 125})
        APP.put(myScores, {score: 1500, round: 126})
        APP.put(myScores, {score: 1500, round: 127})
        APP.put(myScores, {score: 1500, round: 128})
        APP.put(myScores, {score: 1500, round: 129})
        APP.put(myScores, {score: 1500, round: 130})
        APP.put(myScores, {score: 1500, round: 131})
        APP.put(myScores, {score: 1500, round: 132})
        APP.put(myScores, {score: 1500, round: 133})
        APP.put(myScores, {score: 1500, round: 134})
        APP.put(myScores, {score: 1500, round: 135})
        APP.put(myScores, {score: 1500, round: 136})
        APP.put(myScores, {score: 1500, round: 137})
        APP.put(myScores, {score: 1500, round: 138})
        APP.put(myScores, {score: 1500, round: 139})
        APP.put(myScores, {score: 1500, round: 140})
        APP.put(myScores, {score: 1500, round: 141})
        APP.put(myScores, {score: 1500, round: 142})
        APP.put(myScores, {score: 1500, round: 143})
        APP.put(myScores, {score: 1500, round: 144})
        APP.put(myScores, {score: 1500, round: 145})
        APP.put(myScores, {score: 1500, round: 146})
        APP.put(myScores, {score: 1500, round: 147})
        APP.put(myScores, {score: 1500, round: 148})
        APP.put(myScores, {score: 1500, round: 149})

	return {
		gameId: 'game20161110_06_59_02',
		gameTime: '2016-11-10 06:59:02',
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