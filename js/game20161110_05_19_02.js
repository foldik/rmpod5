APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(40658, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.24, y: 298.89, round: 2, sonar: 'extended' },
        {x: 102.24, y: 298.89, round: 2, sonar: 'extended' },
        {x: 105.85, y: 295.43, round: 3, sonar: 'extended' },
        {x: 105.85, y: 295.43, round: 3, sonar: 'extended' },
        {x: 110.75, y: 289.75, round: 4, sonar: 'extended' },
        {x: 110.75, y: 289.75, round: 4, sonar: 'extended' },
        {x: 114.83, y: 286.86, round: 5, sonar: 'extended' },
        {x: 114.83, y: 286.86, round: 5, sonar: 'extended' },
        {x: 119.42, y: 284.87, round: 6, sonar: 'extended' },
        {x: 119.42, y: 284.87, round: 6, sonar: 'extended' },
        {x: 126.06, y: 281.38, round: 7, sonar: 'extended' },
        {x: 126.06, y: 281.38, round: 7, sonar: 'extended' },
        {x: 130.21, y: 278.59, round: 8, sonar: 'extended' },
        {x: 130.21, y: 278.59, round: 8, sonar: 'extended' },
        {x: 134.77, y: 276.55, round: 9, sonar: 'extended' },
        {x: 134.77, y: 276.55, round: 9, sonar: 'extended' },
        {x: 142.02, y: 274.62, round: 10, sonar: 'extended' },
        {x: 142.02, y: 274.62, round: 10, sonar: 'extended' },
        {x: 148.26, y: 270.45, round: 11, sonar: 'nonextended' },
        {x: 148.26, y: 270.45, round: 11, sonar: 'nonextended' },
        {x: 155.43, y: 268.26, round: 12, sonar: 'nonextended' },
        {x: 155.43, y: 268.26, round: 12, sonar: 'nonextended' },
        {x: 164.21, y: 263.48, round: 13, sonar: 'nonextended' },
        {x: 164.21, y: 263.48, round: 13, sonar: 'nonextended' },
        {x: 171.36, y: 256.49, round: 14, sonar: 'nonextended' },
        {x: 171.36, y: 256.49, round: 14, sonar: 'nonextended' },
        {x: 176.90, y: 251.43, round: 15, sonar: 'nonextended' },
        {x: 176.90, y: 251.43, round: 15, sonar: 'nonextended' },
        {x: 182.69, y: 246.67, round: 16, sonar: 'nonextended' },
        {x: 182.69, y: 246.67, round: 16, sonar: 'nonextended' },
        {x: 190.75, y: 240.74, round: 17, sonar: 'nonextended' },
        {x: 190.75, y: 240.74, round: 17, sonar: 'nonextended' },
        {x: 196.66, y: 232.68, round: 18, sonar: 'nonextended' },
        {x: 196.66, y: 232.68, round: 18, sonar: 'nonextended' },
        {x: 202.28, y: 224.40, round: 19, sonar: 'nonextended' },
        {x: 202.28, y: 224.40, round: 19, sonar: 'nonextended' },
        {x: 205.53, y: 217.65, round: 20, sonar: 'nonextended' },
        {x: 205.53, y: 217.65, round: 20, sonar: 'nonextended' },
        {x: 208.43, y: 210.73, round: 21, sonar: 'nonextended' },
        {x: 208.43, y: 210.73, round: 21, sonar: 'nonextended' },
        {x: 214.04, y: 202.45, round: 22, sonar: 'extended' },
        {x: 214.04, y: 202.45, round: 22, sonar: 'extended' },
        {x: 221.38, y: 195.66, round: 23, sonar: 'extended' },
        {x: 221.38, y: 195.66, round: 23, sonar: 'extended' },
        {x: 227.82, y: 191.82, round: 24, sonar: 'extended' },
        {x: 227.82, y: 191.82, round: 24, sonar: 'extended' },
        {x: 237.16, y: 188.24, round: 25, sonar: 'extended' },
        {x: 237.16, y: 188.24, round: 25, sonar: 'extended' },
        {x: 246.19, y: 183.94, round: 26, sonar: 'extended' },
        {x: 246.19, y: 183.94, round: 26, sonar: 'extended' },
        {x: 253.82, y: 177.48, round: 27, sonar: 'extended' },
        {x: 253.82, y: 177.48, round: 27, sonar: 'extended' },
        {x: 260.72, y: 174.54, round: 28, sonar: 'extended' },
        {x: 260.72, y: 174.54, round: 28, sonar: 'extended' },
        {x: 268.41, y: 168.15, round: 29, sonar: 'extended' },
        {x: 268.41, y: 168.15, round: 29, sonar: 'extended' },
        {x: 272.74, y: 162.03, round: 30, sonar: 'extended' },
        {x: 272.74, y: 162.03, round: 30, sonar: 'extended' },
        {x: 274.66, y: 157.41, round: 31, sonar: 'nonextended' },
        {x: 274.66, y: 157.41, round: 31, sonar: 'nonextended' },
        {x: 276.58, y: 150.16, round: 32, sonar: 'nonextended' },
        {x: 276.58, y: 150.16, round: 32, sonar: 'nonextended' },
        {x: 281.01, y: 141.19, round: 33, sonar: 'nonextended' },
        {x: 281.01, y: 141.19, round: 33, sonar: 'nonextended' },
        {x: 287.89, y: 133.94, round: 34, sonar: 'nonextended' },
        {x: 287.89, y: 133.94, round: 34, sonar: 'nonextended' },
        {x: 295.68, y: 127.67, round: 35, sonar: 'nonextended' },
        {x: 295.68, y: 127.67, round: 35, sonar: 'nonextended' },
        {x: 302.11, y: 123.81, round: 36, sonar: 'nonextended' },
        {x: 302.11, y: 123.81, round: 36, sonar: 'nonextended' },
        {x: 307.01, y: 122.81, round: 37, sonar: 'nonextended' },
        {x: 307.01, y: 122.81, round: 37, sonar: 'nonextended' },
        {x: 311.98, y: 123.34, round: 38, sonar: 'nonextended' },
        {x: 311.98, y: 123.34, round: 38, sonar: 'nonextended' },
        {x: 314.48, y: 123.50, round: 39, sonar: 'nonextended' },
        {x: 314.48, y: 123.50, round: 39, sonar: 'nonextended' },
        {x: 319.44, y: 122.92, round: 40, sonar: 'nonextended' },
        {x: 319.44, y: 122.92, round: 40, sonar: 'nonextended' },
        {x: 324.43, y: 123.27, round: 41, sonar: 'nonextended' },
        {x: 324.43, y: 123.27, round: 41, sonar: 'nonextended' },
        {x: 331.79, y: 124.74, round: 42, sonar: 'extended' },
        {x: 331.79, y: 124.74, round: 42, sonar: 'extended' },
        {x: 338.94, y: 126.98, round: 43, sonar: 'extended' },
        {x: 338.94, y: 126.98, round: 43, sonar: 'extended' },
        {x: 348.61, y: 129.54, round: 44, sonar: 'extended' },
        {x: 348.61, y: 129.54, round: 44, sonar: 'extended' },
        {x: 355.96, y: 131.04, round: 45, sonar: 'extended' },
        {x: 355.96, y: 131.04, round: 45, sonar: 'extended' },
        {x: 363.46, y: 130.93, round: 46, sonar: 'extended' },
        {x: 363.46, y: 130.93, round: 46, sonar: 'extended' },
        {x: 373.32, y: 132.58, round: 47, sonar: 'extended' },
        {x: 373.32, y: 132.58, round: 47, sonar: 'extended' },
        {x: 380.77, y: 131.75, round: 48, sonar: 'extended' },
        {x: 380.77, y: 131.75, round: 48, sonar: 'extended' },
        {x: 390.16, y: 128.31, round: 49, sonar: 'extended' },
        {x: 390.16, y: 128.31, round: 49, sonar: 'extended' },
        {x: 398.09, y: 122.21, round: 50, sonar: 'extended' },
        {x: 398.09, y: 122.21, round: 50, sonar: 'extended' },
        {x: 404.04, y: 114.17, round: 51, sonar: 'nonextended' },
        {x: 404.04, y: 114.17, round: 51, sonar: 'nonextended' },
        {x: 409.41, y: 108.94, round: 52, sonar: 'nonextended' },
        {x: 409.41, y: 108.94, round: 52, sonar: 'nonextended' },
        {x: 414.37, y: 100.25, round: 53, sonar: 'nonextended' },
        {x: 414.37, y: 100.25, round: 53, sonar: 'nonextended' },
        {x: 416.89, y: 93.19, round: 54, sonar: 'nonextended' },
        {x: 416.89, y: 93.19, round: 54, sonar: 'nonextended' },
        {x: 417.84, y: 85.75, round: 55, sonar: 'nonextended' },
        {x: 417.84, y: 85.75, round: 55, sonar: 'nonextended' },
        {x: 415.78, y: 75.97, round: 56, sonar: 'nonextended' },
        {x: 415.78, y: 75.97, round: 56, sonar: 'nonextended' },
        {x: 414.45, y: 66.06, round: 57, sonar: 'nonextended' },
        {x: 414.45, y: 66.06, round: 57, sonar: 'nonextended' },
        {x: 411.19, y: 59.30, round: 58, sonar: 'nonextended' },
        {x: 411.19, y: 59.30, round: 58, sonar: 'nonextended' },
        {x: 410.06, y: 54.43, round: 59, sonar: 'nonextended' },
        {x: 410.06, y: 54.43, round: 59, sonar: 'nonextended' },
        {x: 408.17, y: 47.17, round: 60, sonar: 'nonextended' },
        {x: 408.17, y: 47.17, round: 60, sonar: 'nonextended' },
        {x: 403.32, y: 38.43, round: 61, sonar: 'nonextended' },
        {x: 403.32, y: 38.43, round: 61, sonar: 'nonextended' },
        {x: 395.86, y: 31.77, round: 62, sonar: 'extended' },
        {x: 395.86, y: 31.77, round: 62, sonar: 'extended' },
        {x: 387.76, y: 25.91, round: 63, sonar: 'extended' },
        {x: 387.76, y: 25.91, round: 63, sonar: 'extended' },
        {x: 380.72, y: 23.31, round: 64, sonar: 'extended' },
        {x: 380.72, y: 23.31, round: 64, sonar: 'extended' },
        {x: 373.27, y: 22.48, round: 65, sonar: 'extended' },
        {x: 373.27, y: 22.48, round: 65, sonar: 'extended' },
        {x: 365.77, y: 22.26, round: 66, sonar: 'extended' },
        {x: 365.77, y: 22.26, round: 66, sonar: 'extended' },
        {x: 356.26, y: 25.34, round: 67, sonar: 'extended' },
        {x: 356.26, y: 25.34, round: 67, sonar: 'extended' },
        {x: 347.15, y: 29.47, round: 68, sonar: 'extended' },
        {x: 347.15, y: 29.47, round: 68, sonar: 'extended' },
        {x: 339.12, y: 35.43, round: 69, sonar: 'extended' },
        {x: 339.12, y: 35.43, round: 69, sonar: 'extended' },
        {x: 333.43, y: 43.66, round: 70, sonar: 'extended' },
        {x: 333.43, y: 43.66, round: 70, sonar: 'extended' },
        {x: 325.41, y: 49.63, round: 71, sonar: 'nonextended' },
        {x: 325.41, y: 49.63, round: 71, sonar: 'nonextended' },
        {x: 318.99, y: 57.29, round: 72, sonar: 'nonextended' },
        {x: 318.99, y: 57.29, round: 72, sonar: 'nonextended' },
        {x: 314.81, y: 66.38, round: 73, sonar: 'nonextended' },
        {x: 314.81, y: 66.38, round: 73, sonar: 'nonextended' },
        {x: 312.22, y: 73.42, round: 74, sonar: 'nonextended' },
        {x: 312.22, y: 73.42, round: 74, sonar: 'nonextended' },
        {x: 310.94, y: 83.33, round: 75, sonar: 'nonextended' },
        {x: 310.94, y: 83.33, round: 75, sonar: 'nonextended' },
        {x: 309.14, y: 93.17, round: 76, sonar: 'nonextended' },
        {x: 309.14, y: 93.17, round: 76, sonar: 'nonextended' },
        {x: 309.89, y: 100.63, round: 77, sonar: 'nonextended' },
        {x: 309.89, y: 100.63, round: 77, sonar: 'nonextended' },
        {x: 311.83, y: 105.24, round: 78, sonar: 'nonextended' },
        {x: 311.83, y: 105.24, round: 78, sonar: 'nonextended' },
        {x: 312.46, y: 107.66, round: 79, sonar: 'nonextended' },
        {x: 312.46, y: 107.66, round: 79, sonar: 'nonextended' },
        {x: 313.65, y: 109.86, round: 80, sonar: 'nonextended' },
        {x: 313.65, y: 109.86, round: 80, sonar: 'nonextended' },
        {x: 316.74, y: 113.79, round: 81, sonar: 'nonextended' },
        {x: 316.74, y: 113.79, round: 81, sonar: 'nonextended' },
        {x: 318.64, y: 118.42, round: 82, sonar: 'extended' },
        {x: 318.64, y: 118.42, round: 82, sonar: 'extended' },
        {x: 319.68, y: 125.84, round: 83, sonar: 'extended' },
        {x: 319.68, y: 125.84, round: 83, sonar: 'extended' },
        {x: 318.65, y: 135.79, round: 84, sonar: 'extended' },
        {x: 318.65, y: 135.79, round: 84, sonar: 'extended' },
        {x: 315.04, y: 145.12, round: 85, sonar: 'extended' },
        {x: 315.04, y: 145.12, round: 85, sonar: 'extended' },
        {x: 310.82, y: 154.18, round: 86, sonar: 'extended' },
        {x: 310.82, y: 154.18, round: 86, sonar: 'extended' },
        {x: 304.87, y: 162.22, round: 87, sonar: 'extended' },
        {x: 304.87, y: 162.22, round: 87, sonar: 'extended' },
        {x: 298.02, y: 169.50, round: 88, sonar: 'extended' },
        {x: 298.02, y: 169.50, round: 88, sonar: 'extended' },
        {x: 291.01, y: 176.64, round: 89, sonar: 'extended' },
        {x: 291.01, y: 176.64, round: 89, sonar: 'extended' },
        {x: 284.86, y: 184.52, round: 90, sonar: 'extended' },
        {x: 284.86, y: 184.52, round: 90, sonar: 'extended' },
        {x: 279.11, y: 192.70, round: 91, sonar: 'nonextended' },
        {x: 279.11, y: 192.70, round: 91, sonar: 'nonextended' },
        {x: 274.19, y: 201.41, round: 92, sonar: 'nonextended' },
        {x: 274.19, y: 201.41, round: 92, sonar: 'nonextended' },
        {x: 267.03, y: 208.39, round: 93, sonar: 'nonextended' },
        {x: 267.03, y: 208.39, round: 93, sonar: 'nonextended' },
        {x: 259.69, y: 215.18, round: 94, sonar: 'nonextended' },
        {x: 259.69, y: 215.18, round: 94, sonar: 'nonextended' },
        {x: 250.84, y: 219.83, round: 95, sonar: 'nonextended' },
        {x: 250.84, y: 219.83, round: 95, sonar: 'nonextended' },
        {x: 241.62, y: 223.72, round: 96, sonar: 'nonextended' },
        {x: 241.62, y: 223.72, round: 96, sonar: 'nonextended' },
        {x: 232.68, y: 228.18, round: 97, sonar: 'nonextended' },
        {x: 232.68, y: 228.18, round: 97, sonar: 'nonextended' },
        {x: 223.01, y: 230.74, round: 98, sonar: 'nonextended' },
        {x: 223.01, y: 230.74, round: 98, sonar: 'nonextended' },
        {x: 213.15, y: 232.41, round: 99, sonar: 'nonextended' },
        {x: 213.15, y: 232.41, round: 99, sonar: 'nonextended' },
        {x: 203.25, y: 233.83, round: 100, sonar: 'nonextended' },
        {x: 203.25, y: 233.83, round: 100, sonar: 'nonextended' },
        {x: 193.26, y: 233.28, round: 101, sonar: 'nonextended' },
        {x: 193.26, y: 233.28, round: 101, sonar: 'nonextended' },
        {x: 186.09, y: 231.09, round: 102, sonar: 'extended' },
        {x: 186.09, y: 231.09, round: 102, sonar: 'extended' },
        {x: 181.67, y: 228.76, round: 103, sonar: 'extended' },
        {x: 181.67, y: 228.76, round: 103, sonar: 'extended' },
        {x: 174.25, y: 227.67, round: 104, sonar: 'extended' },
        {x: 174.25, y: 227.67, round: 104, sonar: 'extended' },
        {x: 164.42, y: 229.54, round: 105, sonar: 'extended' },
        {x: 164.42, y: 229.54, round: 105, sonar: 'extended' },
        {x: 157.02, y: 228.36, round: 106, sonar: 'extended' },
        {x: 157.02, y: 228.36, round: 106, sonar: 'extended' },
        {x: 149.52, y: 228.30, round: 107, sonar: 'extended' },
        {x: 149.52, y: 228.30, round: 107, sonar: 'extended' },
        {x: 142.11, y: 227.13, round: 108, sonar: 'extended' },
        {x: 142.11, y: 227.13, round: 108, sonar: 'extended' },
        {x: 134.64, y: 227.80, round: 109, sonar: 'extended' },
        {x: 134.64, y: 227.80, round: 109, sonar: 'extended' },
        {x: 127.14, y: 228.05, round: 110, sonar: 'extended' },
        {x: 127.14, y: 228.05, round: 110, sonar: 'extended' },
        {x: 122.49, y: 229.89, round: 111, sonar: 'nonextended' },
        {x: 122.49, y: 229.89, round: 111, sonar: 'nonextended' },
        {x: 120.01, y: 230.15, round: 112, sonar: 'nonextended' },
        {x: 120.01, y: 230.15, round: 112, sonar: 'nonextended' },
        {x: 120.01, y: 230.15, round: 113, sonar: 'nonextended' },
        {x: 120.01, y: 230.15, round: 113, sonar: 'nonextended' },
        {x: 117.76, y: 231.25, round: 114, sonar: 'nonextended' },
        {x: 117.76, y: 231.25, round: 114, sonar: 'nonextended' },
        {x: 114.00, y: 234.54, round: 115, sonar: 'nonextended' },
        {x: 114.00, y: 234.54, round: 115, sonar: 'nonextended' },
        {x: 108.31, y: 239.43, round: 116, sonar: 'nonextended' },
        {x: 108.31, y: 239.43, round: 116, sonar: 'nonextended' },
        {x: 101.91, y: 247.12, round: 117, sonar: 'nonextended' },
        {x: 101.91, y: 247.12, round: 117, sonar: 'nonextended' },
        {x: 99.34, y: 254.16, round: 118, sonar: 'nonextended' },
        {x: 99.34, y: 254.16, round: 118, sonar: 'nonextended' },
        {x: 98.40, y: 259.07, round: 119, sonar: 'nonextended' },
        {x: 98.40, y: 259.07, round: 119, sonar: 'nonextended' },
        {x: 98.24, y: 266.57, round: 120, sonar: 'nonextended' },
        {x: 98.24, y: 266.57, round: 120, sonar: 'nonextended' },
        {x: 100.97, y: 276.19, round: 121, sonar: 'nonextended' },
        {x: 100.97, y: 276.19, round: 121, sonar: 'nonextended' },
        {x: 106.46, y: 284.54, round: 122, sonar: 'extended' },
        {x: 106.46, y: 284.54, round: 122, sonar: 'extended' },
        {x: 114.37, y: 290.67, round: 123, sonar: 'extended' },
        {x: 114.37, y: 290.67, round: 123, sonar: 'extended' },
        {x: 123.36, y: 295.04, round: 124, sonar: 'extended' },
        {x: 123.36, y: 295.04, round: 124, sonar: 'extended' },
        {x: 129.71, y: 299.04, round: 125, sonar: 'extended' },
        {x: 129.71, y: 299.04, round: 125, sonar: 'extended' },
        {x: 133.93, y: 301.71, round: 126, sonar: 'extended' },
        {x: 133.93, y: 301.71, round: 126, sonar: 'extended' },
        {x: 141.19, y: 303.62, round: 127, sonar: 'extended' },
        {x: 141.19, y: 303.62, round: 127, sonar: 'extended' },
        {x: 150.51, y: 307.24, round: 128, sonar: 'extended' },
        {x: 150.51, y: 307.24, round: 128, sonar: 'extended' },
        {x: 160.30, y: 309.30, round: 129, sonar: 'extended' },
        {x: 160.30, y: 309.30, round: 129, sonar: 'extended' },
        {x: 169.97, y: 311.84, round: 130, sonar: 'extended' },
        {x: 169.97, y: 311.84, round: 130, sonar: 'extended' },
        {x: 179.16, y: 315.76, round: 131, sonar: 'nonextended' },
        {x: 179.16, y: 315.76, round: 131, sonar: 'nonextended' },
        {x: 186.63, y: 316.47, round: 132, sonar: 'nonextended' },
        {x: 186.63, y: 316.47, round: 132, sonar: 'nonextended' },
        {x: 196.37, y: 318.76, round: 133, sonar: 'nonextended' },
        {x: 196.37, y: 318.76, round: 133, sonar: 'nonextended' },
        {x: 206.34, y: 318.03, round: 134, sonar: 'nonextended' },
        {x: 206.34, y: 318.03, round: 134, sonar: 'nonextended' },
        {x: 216.28, y: 316.96, round: 135, sonar: 'nonextended' },
        {x: 216.28, y: 316.96, round: 135, sonar: 'nonextended' },
        {x: 226.27, y: 317.49, round: 136, sonar: 'nonextended' },
        {x: 226.27, y: 317.49, round: 136, sonar: 'nonextended' },
        {x: 235.63, y: 320.99, round: 137, sonar: 'nonextended' },
        {x: 235.63, y: 320.99, round: 137, sonar: 'nonextended' },
        {x: 245.47, y: 322.81, round: 138, sonar: 'nonextended' },
        {x: 245.47, y: 322.81, round: 138, sonar: 'nonextended' },
        {x: 255.46, y: 322.51, round: 139, sonar: 'nonextended' },
        {x: 255.46, y: 322.51, round: 139, sonar: 'nonextended' },
        {x: 264.89, y: 319.18, round: 140, sonar: 'nonextended' },
        {x: 264.89, y: 319.18, round: 140, sonar: 'nonextended' },
        {x: 272.06, y: 316.98, round: 141, sonar: 'nonextended' },
        {x: 272.06, y: 316.98, round: 141, sonar: 'nonextended' },
        {x: 278.58, y: 313.28, round: 142, sonar: 'extended' },
        {x: 278.58, y: 313.28, round: 142, sonar: 'extended' },
        {x: 286.87, y: 307.68, round: 143, sonar: 'extended' },
        {x: 286.87, y: 307.68, round: 143, sonar: 'extended' },
        {x: 294.05, y: 305.49, round: 144, sonar: 'extended' },
        {x: 294.05, y: 305.49, round: 144, sonar: 'extended' },
        {x: 298.87, y: 304.19, round: 145, sonar: 'extended' },
        {x: 298.87, y: 304.19, round: 145, sonar: 'extended' },
        {x: 301.20, y: 303.26, round: 146, sonar: 'extended' },
        {x: 301.20, y: 303.26, round: 146, sonar: 'extended' },
        {x: 305.95, y: 301.70, round: 147, sonar: 'extended' },
        {x: 305.95, y: 301.70, round: 147, sonar: 'extended' },
        {x: 310.47, y: 299.57, round: 148, sonar: 'extended' },
        {x: 310.47, y: 299.57, round: 148, sonar: 'extended' },
        {x: 312.84, y: 298.77, round: 149, sonar: 'extended' },
        {x: 312.84, y: 298.77, round: 149, sonar: 'extended' },
    ]));
	mySubmarines.push(APP.submarine(40659, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.35, y: 274.16, round: 2, sonar: 'extended' },
        {x: 127.35, y: 274.16, round: 2, sonar: 'extended' },
        {x: 132.00, y: 272.30, round: 3, sonar: 'extended' },
        {x: 132.00, y: 272.30, round: 3, sonar: 'extended' },
        {x: 136.65, y: 270.48, round: 4, sonar: 'extended' },
        {x: 136.65, y: 270.48, round: 4, sonar: 'extended' },
        {x: 139.06, y: 269.81, round: 5, sonar: 'extended' },
        {x: 139.06, y: 269.81, round: 5, sonar: 'extended' },
        {x: 143.91, y: 268.58, round: 6, sonar: 'extended' },
        {x: 143.91, y: 268.58, round: 6, sonar: 'extended' },
        {x: 146.41, y: 268.49, round: 7, sonar: 'extended' },
        {x: 146.41, y: 268.49, round: 7, sonar: 'extended' },
        {x: 148.83, y: 267.87, round: 8, sonar: 'extended' },
        {x: 148.83, y: 267.87, round: 8, sonar: 'extended' },
        {x: 153.81, y: 267.49, round: 9, sonar: 'extended' },
        {x: 153.81, y: 267.49, round: 9, sonar: 'extended' },
        {x: 158.75, y: 266.67, round: 10, sonar: 'extended' },
        {x: 158.75, y: 266.67, round: 10, sonar: 'extended' },
        {x: 163.73, y: 267.07, round: 11, sonar: 'nonextended' },
        {x: 163.73, y: 267.07, round: 11, sonar: 'nonextended' },
        {x: 168.69, y: 267.67, round: 12, sonar: 'nonextended' },
        {x: 168.69, y: 267.67, round: 12, sonar: 'nonextended' },
        {x: 171.19, y: 267.62, round: 13, sonar: 'nonextended' },
        {x: 171.19, y: 267.62, round: 13, sonar: 'nonextended' },
        {x: 171.19, y: 267.62, round: 14, sonar: 'nonextended' },
        {x: 171.19, y: 267.62, round: 14, sonar: 'nonextended' },
        {x: 173.68, y: 267.84, round: 15, sonar: 'nonextended' },
        {x: 173.68, y: 267.84, round: 15, sonar: 'nonextended' },
        {x: 173.68, y: 267.84, round: 16, sonar: 'nonextended' },
        {x: 173.68, y: 267.84, round: 16, sonar: 'nonextended' },
        {x: 176.13, y: 267.31, round: 17, sonar: 'nonextended' },
        {x: 176.13, y: 267.31, round: 17, sonar: 'nonextended' },
        {x: 180.42, y: 264.74, round: 18, sonar: 'nonextended' },
        {x: 180.42, y: 264.74, round: 18, sonar: 'nonextended' },
        {x: 187.09, y: 261.31, round: 19, sonar: 'nonextended' },
        {x: 187.09, y: 261.31, round: 19, sonar: 'nonextended' },
        {x: 195.60, y: 256.06, round: 20, sonar: 'nonextended' },
        {x: 195.60, y: 256.06, round: 20, sonar: 'nonextended' },
        {x: 201.95, y: 252.07, round: 21, sonar: 'nonextended' },
        {x: 201.95, y: 252.07, round: 21, sonar: 'nonextended' },
        {x: 210.19, y: 246.41, round: 22, sonar: 'extended' },
        {x: 210.19, y: 246.41, round: 22, sonar: 'extended' },
        {x: 217.53, y: 239.62, round: 23, sonar: 'extended' },
        {x: 217.53, y: 239.62, round: 23, sonar: 'extended' },
        {x: 222.34, y: 230.85, round: 24, sonar: 'extended' },
        {x: 222.34, y: 230.85, round: 24, sonar: 'extended' },
        {x: 224.91, y: 221.19, round: 25, sonar: 'extended' },
        {x: 224.91, y: 221.19, round: 25, sonar: 'extended' },
        {x: 229.28, y: 212.19, round: 26, sonar: 'extended' },
        {x: 229.28, y: 212.19, round: 26, sonar: 'extended' },
        {x: 234.38, y: 203.59, round: 27, sonar: 'extended' },
        {x: 234.38, y: 203.59, round: 27, sonar: 'extended' },
        {x: 241.75, y: 196.83, round: 28, sonar: 'extended' },
        {x: 241.75, y: 196.83, round: 28, sonar: 'extended' },
        {x: 246.51, y: 191.03, round: 29, sonar: 'extended' },
        {x: 246.51, y: 191.03, round: 29, sonar: 'extended' },
        {x: 251.93, y: 182.63, round: 30, sonar: 'extended' },
        {x: 251.93, y: 182.63, round: 30, sonar: 'extended' },
        {x: 256.21, y: 173.59, round: 31, sonar: 'nonextended' },
        {x: 256.21, y: 173.59, round: 31, sonar: 'nonextended' },
        {x: 260.81, y: 167.67, round: 32, sonar: 'nonextended' },
        {x: 260.81, y: 167.67, round: 32, sonar: 'nonextended' },
        {x: 264.67, y: 161.24, round: 33, sonar: 'nonextended' },
        {x: 264.67, y: 161.24, round: 33, sonar: 'nonextended' },
        {x: 266.92, y: 156.78, round: 34, sonar: 'nonextended' },
        {x: 266.92, y: 156.78, round: 34, sonar: 'nonextended' },
        {x: 268.39, y: 152.00, round: 35, sonar: 'nonextended' },
        {x: 268.39, y: 152.00, round: 35, sonar: 'nonextended' },
        {x: 272.73, y: 145.88, round: 36, sonar: 'nonextended' },
        {x: 272.73, y: 145.88, round: 36, sonar: 'nonextended' },
        {x: 275.15, y: 141.50, round: 37, sonar: 'nonextended' },
        {x: 275.15, y: 141.50, round: 37, sonar: 'nonextended' },
        {x: 278.42, y: 137.72, round: 38, sonar: 'nonextended' },
        {x: 278.42, y: 137.72, round: 38, sonar: 'nonextended' },
        {x: 281.56, y: 133.83, round: 39, sonar: 'nonextended' },
        {x: 281.56, y: 133.83, round: 39, sonar: 'nonextended' },
        {x: 285.81, y: 131.20, round: 40, sonar: 'nonextended' },
        {x: 285.81, y: 131.20, round: 40, sonar: 'nonextended' },
        {x: 291.91, y: 126.84, round: 41, sonar: 'nonextended' },
        {x: 291.91, y: 126.84, round: 41, sonar: 'nonextended' },
        {x: 298.12, y: 122.62, round: 42, sonar: 'extended' },
        {x: 298.12, y: 122.62, round: 42, sonar: 'extended' },
        {x: 305.54, y: 115.93, round: 43, sonar: 'extended' },
        {x: 305.54, y: 115.93, round: 43, sonar: 'extended' },
        {x: 312.28, y: 108.54, round: 44, sonar: 'extended' },
        {x: 312.28, y: 108.54, round: 44, sonar: 'extended' },
        {x: 320.34, y: 102.61, round: 45, sonar: 'extended' },
        {x: 320.34, y: 102.61, round: 45, sonar: 'extended' },
        {x: 328.60, y: 96.98, round: 46, sonar: 'extended' },
        {x: 328.60, y: 96.98, round: 46, sonar: 'extended' },
        {x: 337.85, y: 93.18, round: 47, sonar: 'extended' },
        {x: 337.85, y: 93.18, round: 47, sonar: 'extended' },
        {x: 345.32, y: 92.48, round: 48, sonar: 'extended' },
        {x: 345.32, y: 92.48, round: 48, sonar: 'extended' },
        {x: 350.32, y: 92.44, round: 49, sonar: 'extended' },
        {x: 350.32, y: 92.44, round: 49, sonar: 'extended' },
        {x: 352.81, y: 92.33, round: 50, sonar: 'extended' },
        {x: 352.81, y: 92.33, round: 50, sonar: 'extended' },
        {x: 357.73, y: 91.40, round: 51, sonar: 'nonextended' },
        {x: 357.73, y: 91.40, round: 51, sonar: 'nonextended' },
        {x: 359.96, y: 90.27, round: 52, sonar: 'nonextended' },
        {x: 359.96, y: 90.27, round: 52, sonar: 'nonextended' },
        {x: 362.44, y: 89.95, round: 53, sonar: 'nonextended' },
        {x: 362.44, y: 89.95, round: 53, sonar: 'nonextended' },
        {x: 366.93, y: 87.75, round: 54, sonar: 'nonextended' },
        {x: 366.93, y: 87.75, round: 54, sonar: 'nonextended' },
        {x: 370.88, y: 84.68, round: 55, sonar: 'nonextended' },
        {x: 370.88, y: 84.68, round: 55, sonar: 'nonextended' },
        {x: 377.34, y: 80.87, round: 56, sonar: 'nonextended' },
        {x: 377.34, y: 80.87, round: 56, sonar: 'nonextended' },
        {x: 386.72, y: 77.40, round: 57, sonar: 'nonextended' },
        {x: 386.72, y: 77.40, round: 57, sonar: 'nonextended' },
        {x: 396.58, y: 75.78, round: 58, sonar: 'nonextended' },
        {x: 396.58, y: 75.78, round: 58, sonar: 'nonextended' },
        {x: 406.08, y: 72.63, round: 59, sonar: 'nonextended' },
        {x: 406.08, y: 72.63, round: 59, sonar: 'nonextended' },
        {x: 416.00, y: 71.37, round: 60, sonar: 'nonextended' },
        {x: 416.00, y: 71.37, round: 60, sonar: 'nonextended' },
        {x: 425.99, y: 71.09, round: 61, sonar: 'nonextended' },
        {x: 425.99, y: 71.09, round: 61, sonar: 'nonextended' },
        {x: 435.95, y: 72.04, round: 62, sonar: 'extended' },
        {x: 435.95, y: 72.04, round: 62, sonar: 'extended' },
        {x: 445.72, y: 69.93, round: 63, sonar: 'extended' },
        {x: 445.72, y: 69.93, round: 63, sonar: 'extended' },
        {x: 455.67, y: 68.93, round: 64, sonar: 'extended' },
        {x: 455.67, y: 68.93, round: 64, sonar: 'extended' },
        {x: 465.48, y: 70.91, round: 65, sonar: 'extended' },
        {x: 465.48, y: 70.91, round: 65, sonar: 'extended' },
        {x: 474.16, y: 75.87, round: 66, sonar: 'extended' },
        {x: 474.16, y: 75.87, round: 66, sonar: 'extended' },
        {x: 481.17, y: 83.00, round: 67, sonar: 'extended' },
        {x: 481.17, y: 83.00, round: 67, sonar: 'extended' },
        {x: 486.66, y: 91.36, round: 68, sonar: 'extended' },
        {x: 486.66, y: 91.36, round: 68, sonar: 'extended' },
        {x: 493.14, y: 98.97, round: 69, sonar: 'extended' },
        {x: 493.14, y: 98.97, round: 69, sonar: 'extended' },
        {x: 496.76, y: 108.30, round: 70, sonar: 'extended' },
        {x: 496.76, y: 108.30, round: 70, sonar: 'extended' },
        {x: 497.77, y: 118.25, round: 71, sonar: 'nonextended' },
        {x: 497.77, y: 118.25, round: 71, sonar: 'nonextended' },
        {x: 500.37, y: 127.90, round: 72, sonar: 'nonextended' },
        {x: 500.37, y: 127.90, round: 72, sonar: 'nonextended' },
        {x: 503.52, y: 137.39, round: 73, sonar: 'nonextended' },
        {x: 503.52, y: 137.39, round: 73, sonar: 'nonextended' },
        {x: 507.88, y: 146.39, round: 74, sonar: 'nonextended' },
        {x: 507.88, y: 146.39, round: 74, sonar: 'nonextended' },
        {x: 513.11, y: 154.92, round: 75, sonar: 'nonextended' },
        {x: 513.11, y: 154.92, round: 75, sonar: 'nonextended' },
        {x: 520.62, y: 161.52, round: 76, sonar: 'nonextended' },
        {x: 520.62, y: 161.52, round: 76, sonar: 'nonextended' },
        {x: 528.08, y: 168.17, round: 77, sonar: 'nonextended' },
        {x: 528.08, y: 168.17, round: 77, sonar: 'nonextended' },
        {x: 534.29, y: 176.02, round: 78, sonar: 'nonextended' },
        {x: 534.29, y: 176.02, round: 78, sonar: 'nonextended' },
        {x: 540.39, y: 183.94, round: 79, sonar: 'nonextended' },
        {x: 540.39, y: 183.94, round: 79, sonar: 'nonextended' },
        {x: 543.09, y: 190.94, round: 80, sonar: 'nonextended' },
        {x: 543.09, y: 190.94, round: 80, sonar: 'nonextended' },
        {x: 547.46, y: 199.93, round: 81, sonar: 'nonextended' },
        {x: 547.46, y: 199.93, round: 81, sonar: 'nonextended' },
        {x: 553.48, y: 207.91, round: 82, sonar: 'extended' },
        {x: 553.48, y: 207.91, round: 82, sonar: 'extended' },
        {x: 561.49, y: 213.90, round: 83, sonar: 'extended' },
        {x: 561.49, y: 213.90, round: 83, sonar: 'extended' },
        {x: 570.40, y: 218.44, round: 84, sonar: 'extended' },
        {x: 570.40, y: 218.44, round: 84, sonar: 'extended' },
        {x: 577.76, y: 219.86, round: 85, sonar: 'extended' },
        {x: 577.76, y: 219.86, round: 85, sonar: 'extended' },
        {x: 586.71, y: 224.34, round: 86, sonar: 'extended' },
        {x: 586.71, y: 224.34, round: 86, sonar: 'extended' },
        {x: 594.90, y: 230.07, round: 87, sonar: 'extended' },
        {x: 594.90, y: 230.07, round: 87, sonar: 'extended' },
        {x: 599.47, y: 236.02, round: 88, sonar: 'extended' },
        {x: 599.47, y: 236.02, round: 88, sonar: 'extended' },
        {x: 603.33, y: 245.24, round: 89, sonar: 'extended' },
        {x: 603.33, y: 245.24, round: 89, sonar: 'extended' },
        {x: 608.10, y: 254.03, round: 90, sonar: 'extended' },
        {x: 608.10, y: 254.03, round: 90, sonar: 'extended' },
        {x: 610.30, y: 263.78, round: 91, sonar: 'nonextended' },
        {x: 610.30, y: 263.78, round: 91, sonar: 'nonextended' },
        {x: 609.38, y: 271.23, round: 92, sonar: 'nonextended' },
        {x: 609.38, y: 271.23, round: 92, sonar: 'nonextended' },
        {x: 605.25, y: 280.34, round: 93, sonar: 'nonextended' },
        {x: 605.25, y: 280.34, round: 93, sonar: 'nonextended' },
        {x: 603.91, y: 290.25, round: 94, sonar: 'nonextended' },
        {x: 603.91, y: 290.25, round: 94, sonar: 'nonextended' },
        {x: 604.38, y: 300.24, round: 95, sonar: 'nonextended' },
        {x: 604.38, y: 300.24, round: 95, sonar: 'nonextended' },
        {x: 601.69, y: 309.87, round: 96, sonar: 'nonextended' },
        {x: 601.69, y: 309.87, round: 96, sonar: 'nonextended' },
        {x: 600.33, y: 317.24, round: 97, sonar: 'nonextended' },
        {x: 600.33, y: 317.24, round: 97, sonar: 'nonextended' },
        {x: 597.36, y: 324.13, round: 98, sonar: 'nonextended' },
        {x: 597.36, y: 324.13, round: 98, sonar: 'nonextended' },
        {x: 594.43, y: 328.18, round: 99, sonar: 'nonextended' },
        {x: 594.43, y: 328.18, round: 99, sonar: 'nonextended' },
        {x: 588.35, y: 332.56, round: 100, sonar: 'nonextended' },
        {x: 588.35, y: 332.56, round: 100, sonar: 'nonextended' },
        {x: 581.36, y: 335.28, round: 101, sonar: 'nonextended' },
        {x: 581.36, y: 335.28, round: 101, sonar: 'nonextended' },
        {x: 572.46, y: 339.85, round: 102, sonar: 'extended' },
        {x: 572.46, y: 339.85, round: 102, sonar: 'extended' },
        {x: 563.04, y: 343.20, round: 103, sonar: 'extended' },
        {x: 563.04, y: 343.20, round: 103, sonar: 'extended' },
        {x: 553.08, y: 344.11, round: 104, sonar: 'extended' },
        {x: 553.08, y: 344.11, round: 104, sonar: 'extended' },
        {x: 543.17, y: 342.74, round: 105, sonar: 'extended' },
        {x: 543.17, y: 342.74, round: 105, sonar: 'extended' },
        {x: 533.34, y: 340.95, round: 106, sonar: 'extended' },
        {x: 533.34, y: 340.95, round: 106, sonar: 'extended' },
        {x: 523.63, y: 338.52, round: 107, sonar: 'extended' },
        {x: 523.63, y: 338.52, round: 107, sonar: 'extended' },
        {x: 513.64, y: 338.33, round: 108, sonar: 'extended' },
        {x: 513.64, y: 338.33, round: 108, sonar: 'extended' },
        {x: 506.32, y: 339.98, round: 109, sonar: 'extended' },
        {x: 506.32, y: 339.98, round: 109, sonar: 'extended' },
        {x: 497.03, y: 343.68, round: 110, sonar: 'extended' },
        {x: 497.03, y: 343.68, round: 110, sonar: 'extended' },
        {x: 487.05, y: 344.39, round: 111, sonar: 'nonextended' },
        {x: 487.05, y: 344.39, round: 111, sonar: 'nonextended' },
        {x: 477.46, y: 347.23, round: 112, sonar: 'nonextended' },
        {x: 477.46, y: 347.23, round: 112, sonar: 'nonextended' },
        {x: 467.71, y: 349.42, round: 113, sonar: 'nonextended' },
        {x: 467.71, y: 349.42, round: 113, sonar: 'nonextended' },
        {x: 457.71, y: 349.42, round: 114, sonar: 'nonextended' },
        {x: 457.71, y: 349.42, round: 114, sonar: 'nonextended' },
        {x: 447.79, y: 348.12, round: 115, sonar: 'nonextended' },
        {x: 447.79, y: 348.12, round: 115, sonar: 'nonextended' },
        {x: 437.80, y: 347.71, round: 116, sonar: 'nonextended' },
        {x: 437.80, y: 347.71, round: 116, sonar: 'nonextended' },
        {x: 428.41, y: 344.28, round: 117, sonar: 'nonextended' },
        {x: 428.41, y: 344.28, round: 117, sonar: 'nonextended' },
        {x: 418.45, y: 343.40, round: 118, sonar: 'nonextended' },
        {x: 418.45, y: 343.40, round: 118, sonar: 'nonextended' },
        {x: 409.03, y: 340.04, round: 119, sonar: 'nonextended' },
        {x: 409.03, y: 340.04, round: 119, sonar: 'nonextended' },
        {x: 402.81, y: 335.85, round: 120, sonar: 'nonextended' },
        {x: 402.81, y: 335.85, round: 120, sonar: 'nonextended' },
        {x: 394.06, y: 331.02, round: 121, sonar: 'nonextended' },
        {x: 394.06, y: 331.02, round: 121, sonar: 'nonextended' },
        {x: 389.07, y: 325.41, round: 122, sonar: 'extended' },
        {x: 389.07, y: 325.41, round: 122, sonar: 'extended' },
        {x: 383.16, y: 320.80, round: 123, sonar: 'extended' },
        {x: 383.16, y: 320.80, round: 123, sonar: 'extended' },
        {x: 375.27, y: 314.65, round: 124, sonar: 'extended' },
        {x: 375.27, y: 314.65, round: 124, sonar: 'extended' },
        {x: 367.44, y: 308.43, round: 125, sonar: 'extended' },
        {x: 367.44, y: 308.43, round: 125, sonar: 'extended' },
        {x: 358.90, y: 303.24, round: 126, sonar: 'extended' },
        {x: 358.90, y: 303.24, round: 126, sonar: 'extended' },
        {x: 353.59, y: 297.94, round: 127, sonar: 'extended' },
        {x: 353.59, y: 297.94, round: 127, sonar: 'extended' },
        {x: 346.11, y: 291.31, round: 128, sonar: 'extended' },
        {x: 346.11, y: 291.31, round: 128, sonar: 'extended' },
        {x: 338.41, y: 284.93, round: 129, sonar: 'extended' },
        {x: 338.41, y: 284.93, round: 129, sonar: 'extended' },
        {x: 332.48, y: 280.34, round: 130, sonar: 'extended' },
        {x: 332.48, y: 280.34, round: 130, sonar: 'extended' },
        {x: 329.44, y: 276.36, round: 131, sonar: 'nonextended' },
        {x: 329.44, y: 276.36, round: 131, sonar: 'nonextended' },
        {x: 327.42, y: 271.79, round: 132, sonar: 'nonextended' },
        {x: 327.42, y: 271.79, round: 132, sonar: 'nonextended' },
        {x: 325.63, y: 267.12, round: 133, sonar: 'nonextended' },
        {x: 325.63, y: 267.12, round: 133, sonar: 'nonextended' },
        {x: 323.93, y: 262.42, round: 134, sonar: 'nonextended' },
        {x: 323.93, y: 262.42, round: 134, sonar: 'nonextended' },
        {x: 319.85, y: 256.13, round: 135, sonar: 'nonextended' },
        {x: 319.85, y: 256.13, round: 135, sonar: 'nonextended' },
        {x: 313.06, y: 248.79, round: 136, sonar: 'nonextended' },
        {x: 313.06, y: 248.79, round: 136, sonar: 'nonextended' },
        {x: 304.61, y: 243.44, round: 137, sonar: 'nonextended' },
        {x: 304.61, y: 243.44, round: 137, sonar: 'nonextended' },
        {x: 295.88, y: 238.56, round: 138, sonar: 'nonextended' },
        {x: 295.88, y: 238.56, round: 138, sonar: 'nonextended' },
        {x: 288.52, y: 231.79, round: 139, sonar: 'nonextended' },
        {x: 288.52, y: 231.79, round: 139, sonar: 'nonextended' },
        {x: 279.30, y: 227.92, round: 140, sonar: 'nonextended' },
        {x: 279.30, y: 227.92, round: 140, sonar: 'nonextended' },
        {x: 271.32, y: 221.90, round: 141, sonar: 'nonextended' },
        {x: 271.32, y: 221.90, round: 141, sonar: 'nonextended' },
        {x: 264.32, y: 219.19, round: 142, sonar: 'extended' },
        {x: 264.32, y: 219.19, round: 142, sonar: 'extended' },
        {x: 254.33, y: 218.96, round: 143, sonar: 'extended' },
        {x: 254.33, y: 218.96, round: 143, sonar: 'extended' },
        {x: 244.38, y: 217.96, round: 144, sonar: 'extended' },
        {x: 244.38, y: 217.96, round: 144, sonar: 'extended' },
        {x: 234.41, y: 217.12, round: 145, sonar: 'extended' },
        {x: 234.41, y: 217.12, round: 145, sonar: 'extended' },
        {x: 227.26, y: 214.86, round: 146, sonar: 'extended' },
        {x: 227.26, y: 214.86, round: 146, sonar: 'extended' },
        {x: 218.08, y: 210.91, round: 147, sonar: 'extended' },
        {x: 218.08, y: 210.91, round: 147, sonar: 'extended' },
        {x: 211.84, y: 206.73, round: 148, sonar: 'extended' },
        {x: 211.84, y: 206.73, round: 148, sonar: 'extended' },
        {x: 202.24, y: 203.94, round: 149, sonar: 'extended' },
        {x: 202.24, y: 203.94, round: 149, sonar: 'extended' },
    ]));

    torpedos.push(APP.waterObject(40672, [
        {x: 191.43, y: 253.35, round: 23 },
        {x: 172.68, y: 260.30, round: 24 },
        {x: 153.93, y: 267.25, round: 25 },
        {x: 135.17, y: 274.19, round: 26 },
    ]));
    torpedos.push(APP.waterObject(40673, [
        {x: 250.52, y: 197.20, round: 28 },
    ]));
    torpedos.push(APP.waterObject(40674, [
        {x: 242.47, y: 216.82, round: 29 },
        {x: 243.19, y: 236.80, round: 30 },
    ]));
    torpedos.push(APP.waterObject(40675, [
        {x: 316.70, y: 86.29, round: 74 },
        {x: 318.59, y: 106.20, round: 75 },
    ]));
    torpedos.push(APP.waterObject(40676, [
        {x: 377.89, y: 94.41, round: 81 },
        {x: 489.31, y: 138.97, round: 75 },
        {x: 470.74, y: 131.54, round: 76 },
    ]));
    torpedos.push(APP.waterObject(40677, [
        {x: 529.98, y: 175.83, round: 81 },
        {x: 516.88, y: 160.72, round: 82 },
        {x: 503.78, y: 145.61, round: 83 },
    ]));
    torpedos.push(APP.waterObject(40678, [
        {x: 335.11, y: 105.89, round: 82 },
        {x: 353.49, y: 98.00, round: 83 },
        {x: 371.86, y: 90.10, round: 84 },
        {x: 390.24, y: 82.20, round: 85 },
    ]));
    torpedos.push(APP.waterObject(40679, [
        {x: 594.46, y: 263.58, round: 88 },
        {x: 598.33, y: 283.20, round: 89 },
        {x: 602.21, y: 302.82, round: 90 },
        {x: 606.08, y: 322.44, round: 91 },
        {x: 609.95, y: 342.06, round: 92 },
        {x: 590.58, y: 243.96, round: 87 },
    ]));
    torpedos.push(APP.waterObject(40680, [
        {x: 587.15, y: 290.08, round: 96 },
        {x: 569.93, y: 279.92, round: 97 },
        {x: 552.70, y: 269.76, round: 98 },
    ]));
    torpedos.push(APP.waterObject(40681, [
        {x: 261.11, y: 228.20, round: 97 },
        {x: 280.61, y: 232.68, round: 98 },
    ]));
    torpedos.push(APP.waterObject(40682, [
        {x: 561.78, y: 331.19, round: 102 },
        {x: 542.20, y: 327.09, round: 103 },
        {x: 522.63, y: 323.00, round: 104 },
        {x: 503.05, y: 318.91, round: 105 },
        {x: 483.47, y: 314.81, round: 106 },
        {x: 463.90, y: 310.72, round: 107 },
        {x: 444.32, y: 306.63, round: 108 },
    ]));
    torpedos.push(APP.waterObject(40683, [
        {x: 172.99, y: 215.98, round: 103 },
        {x: 159.89, y: 200.87, round: 104 },
        {x: 146.78, y: 185.76, round: 105 },
    ]));
    torpedos.push(APP.waterObject(40684, [
        {x: 466.23, y: 321.07, round: 110 },
        {x: 447.09, y: 315.25, round: 111 },
        {x: 427.96, y: 309.43, round: 112 },
        {x: 408.82, y: 303.62, round: 113 },
        {x: 504.50, y: 332.70, round: 108 },
        {x: 485.36, y: 326.89, round: 109 },
    ]));
    torpedos.push(APP.waterObject(40685, [
        {x: 173.62, y: 202.50, round: 110 },
        {x: 157.87, y: 214.81, round: 109 },
    ]));
    torpedos.push(APP.waterObject(40686, [
        {x: 120.88, y: 278.09, round: 122 },
        {x: 140.79, y: 280.00, round: 123 },
        {x: 160.70, y: 281.90, round: 124 },
        {x: 180.61, y: 283.80, round: 125 },
        {x: 200.51, y: 285.70, round: 126 },
        {x: 220.42, y: 287.61, round: 127 },
        {x: 240.33, y: 289.51, round: 128 },
        {x: 260.24, y: 291.41, round: 129 },
        {x: 280.15, y: 293.31, round: 130 },
    ]));
    torpedos.push(APP.waterObject(40687, [
        {x: 374.36, y: 327.56, round: 122 },
        {x: 354.66, y: 324.10, round: 123 },
        {x: 334.96, y: 320.63, round: 124 },
        {x: 315.26, y: 317.17, round: 125 },
        {x: 295.57, y: 313.71, round: 126 },
        {x: 275.87, y: 310.25, round: 127 },
        {x: 256.17, y: 306.79, round: 128 },
        {x: 236.47, y: 303.33, round: 129 },
    ]));
    torpedos.push(APP.waterObject(40688, [
        {x: 253.63, y: 300.87, round: 132 },
        {x: 233.64, y: 301.46, round: 133 },
        {x: 213.65, y: 302.05, round: 134 },
        {x: 193.66, y: 302.63, round: 135 },
        {x: 173.67, y: 303.22, round: 136 },
        {x: 333.60, y: 298.53, round: 128 },
        {x: 313.61, y: 299.11, round: 129 },
        {x: 293.62, y: 299.70, round: 130 },
        {x: 273.63, y: 300.29, round: 131 },
    ]));
    torpedos.push(APP.waterObject(40689, [
        {x: 228.03, y: 287.49, round: 132 },
        {x: 247.41, y: 282.55, round: 133 },
        {x: 266.80, y: 277.62, round: 134 },
        {x: 286.18, y: 272.68, round: 135 },
        {x: 305.56, y: 267.74, round: 136 },
        {x: 324.94, y: 262.81, round: 137 },
        {x: 169.89, y: 302.30, round: 129 },
        {x: 189.27, y: 297.37, round: 130 },
        {x: 208.65, y: 292.43, round: 131 },
    ]));
    torpedos.push(APP.waterObject(40666, [
        {x: 117.89, y: 291.05, round: 2 },
        {x: 135.78, y: 282.11, round: 3 },
        {x: 153.66, y: 273.16, round: 4 },
        {x: 171.55, y: 264.22, round: 5 },
        {x: 189.44, y: 255.27, round: 6 },
        {x: 207.33, y: 246.33, round: 7 },
        {x: 225.22, y: 237.38, round: 8 },
        {x: 243.10, y: 228.44, round: 9 },
        {x: 260.99, y: 219.49, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40667, [
        {x: 143.98, y: 268.69, round: 2 },
        {x: 162.96, y: 262.38, round: 3 },
        {x: 181.93, y: 256.07, round: 4 },
        {x: 200.91, y: 249.76, round: 5 },
        {x: 219.89, y: 243.45, round: 6 },
        {x: 238.87, y: 237.14, round: 7 },
    ]));
    torpedos.push(APP.waterObject(40668, [
        {x: 226.04, y: 260.85, round: 11 },
        {x: 166.32, y: 266.58, round: 8 },
        {x: 186.22, y: 264.67, round: 9 },
        {x: 206.13, y: 262.76, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40669, [
        {x: 183.25, y: 232.46, round: 16 },
        {x: 189.60, y: 213.50, round: 17 },
    ]));
    torpedos.push(APP.waterObject(40670, [
        {x: 176.50, y: 248.04, round: 17 },
        {x: 179.31, y: 228.24, round: 18 },
    ]));
    torpedos.push(APP.waterObject(40671, [
        {x: 192.77, y: 223.17, round: 22 },
        {x: 177.11, y: 235.61, round: 23 },
        {x: 161.45, y: 248.05, round: 24 },
    ]));

    otherSubmarines.push(APP.waterObject(40660, [
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
    otherSubmarines.push(APP.waterObject(40661, [
        {x: 157.22, y: 174.39, round: 107 },
        {x: 186.77, y: 169.18, round: 110 },
        {x: 117.83, y: 181.33, round: 103 },
        {x: 147.37, y: 176.12, round: 106 },
        {x: 107.98, y: 183.07, round: 102 },
        {x: 127.68, y: 179.60, round: 104 },
        {x: 176.92, y: 170.92, round: 109 },
        {x: 98.13, y: 184.81, round: 101 },
        {x: 167.07, y: 172.65, round: 108 },
        {x: 137.53, y: 177.86, round: 105 },
    ]));
    otherSubmarines.push(APP.waterObject(40662, [
        {x: 626.49, y: 315.46, round: 107 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 662.94, y: 309.03, round: 103 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 613.83, y: 300.37, round: 109 },
        {x: 667.94, y: 300.37, round: 102 },
        {x: 672.94, y: 291.71, round: 101 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 635.89, y: 318.88, round: 106 },
    ]));
    otherSubmarines.push(APP.waterObject(40663, [
        {x: 333.31, y: 114.42, round: 78 },
        {x: 267.86, y: 252.61, round: 29 },
        {x: 248.55, y: 247.43, round: 31 },
        {x: 360.50, y: 101.75, round: 81 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 258.20, y: 250.02, round: 30 },
        {x: 324.24, y: 118.65, round: 77 },
        {x: 316.16, y: 265.55, round: 24 },
        {x: 287.99, y: 135.55, round: 73 },
        {x: 306.12, y: 127.10, round: 75 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 315.18, y: 122.88, round: 76 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 297.05, y: 131.33, round: 74 },
        {x: 287.18, y: 257.79, round: 27 },
        {x: 342.37, y: 110.20, round: 79 },
        {x: 351.43, y: 105.97, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(40664, [
        {x: 253.16, y: 155.98, round: 104 },
        {x: 244.10, y: 151.75, round: 103 },
        {x: 225.97, y: 143.30, round: 101 },
        {x: 235.04, y: 147.53, round: 102 },
    ]));
    otherSubmarines.push(APP.waterObject(40665, [
        {x: 506.27, y: 293.70, round: 101 },
        {x: 207.50, y: 250.00, round: 3 },
        {x: 245.00, y: 250.00, round: 7 },
        {x: 629.04, y: 300.54, round: 88 },
        {x: 468.08, y: 297.12, round: 105 },
        {x: 200.00, y: 250.00, round: 1 },
        {x: 268.08, y: 297.12, round: 125 },
        {x: 265.00, y: 250.00, round: 9 },
        {x: 288.08, y: 297.12, round: 123 },
        {x: 225.00, y: 250.00, round: 5 },
        {x: 600.85, y: 290.28, round: 91 },
        {x: 610.24, y: 293.70, round: 90 },
        {x: 487.48, y: 300.54, round: 103 },
        {x: 248.08, y: 297.12, round: 127 },
        {x: 298.08, y: 297.12, round: 122 },
        {x: 215.00, y: 250.00, round: 4 },
        {x: 553.26, y: 276.60, round: 96 },
        {x: 639.04, y: 300.54, round: 87 },
        {x: 543.86, y: 280.02, round: 97 },
        {x: 202.50, y: 250.00, round: 2 },
        {x: 648.43, y: 297.12, round: 86 },
        {x: 448.08, y: 297.12, round: 107 },
        {x: 308.08, y: 297.12, round: 121 },
        {x: 255.00, y: 250.00, round: 8 },
        {x: 235.00, y: 250.00, round: 6 },
        {x: 477.48, y: 300.54, round: 104 },
        {x: 591.45, y: 286.86, round: 92 },
        {x: 582.05, y: 283.44, round: 93 },
        {x: 428.08, y: 297.12, round: 109 },
        {x: 228.08, y: 297.12, round: 129 },
        {x: 278.08, y: 297.12, round: 124 },
        {x: 496.88, y: 297.12, round: 102 },
        {x: 563.26, y: 276.60, round: 95 },
        {x: 657.83, y: 293.70, round: 85 },
        {x: 438.08, y: 297.12, round: 108 },
        {x: 238.08, y: 297.12, round: 128 },
        {x: 458.08, y: 297.12, round: 106 },
        {x: 418.08, y: 297.12, round: 110 },
        {x: 572.66, y: 280.02, round: 94 },
        {x: 258.08, y: 297.12, round: 126 },
        {x: 534.47, y: 283.44, round: 98 },
        {x: 619.64, y: 297.12, round: 89 },
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
        APP.put(myScores, {score: 350, round: 25})
        APP.put(myScores, {score: 350, round: 26})
        APP.put(myScores, {score: 350, round: 27})
        APP.put(myScores, {score: 350, round: 28})
        APP.put(myScores, {score: 350, round: 29})
        APP.put(myScores, {score: 350, round: 30})
        APP.put(myScores, {score: 450, round: 31})
        APP.put(myScores, {score: 450, round: 32})
        APP.put(myScores, {score: 450, round: 33})
        APP.put(myScores, {score: 450, round: 34})
        APP.put(myScores, {score: 450, round: 35})
        APP.put(myScores, {score: 450, round: 36})
        APP.put(myScores, {score: 450, round: 37})
        APP.put(myScores, {score: 450, round: 38})
        APP.put(myScores, {score: 450, round: 39})
        APP.put(myScores, {score: 450, round: 40})
        APP.put(myScores, {score: 450, round: 41})
        APP.put(myScores, {score: 450, round: 42})
        APP.put(myScores, {score: 450, round: 43})
        APP.put(myScores, {score: 450, round: 44})
        APP.put(myScores, {score: 450, round: 45})
        APP.put(myScores, {score: 450, round: 46})
        APP.put(myScores, {score: 450, round: 47})
        APP.put(myScores, {score: 450, round: 48})
        APP.put(myScores, {score: 450, round: 49})
        APP.put(myScores, {score: 450, round: 50})
        APP.put(myScores, {score: 450, round: 51})
        APP.put(myScores, {score: 450, round: 52})
        APP.put(myScores, {score: 450, round: 53})
        APP.put(myScores, {score: 450, round: 54})
        APP.put(myScores, {score: 450, round: 55})
        APP.put(myScores, {score: 450, round: 56})
        APP.put(myScores, {score: 450, round: 57})
        APP.put(myScores, {score: 450, round: 58})
        APP.put(myScores, {score: 450, round: 59})
        APP.put(myScores, {score: 450, round: 60})
        APP.put(myScores, {score: 450, round: 61})
        APP.put(myScores, {score: 450, round: 62})
        APP.put(myScores, {score: 450, round: 63})
        APP.put(myScores, {score: 450, round: 64})
        APP.put(myScores, {score: 450, round: 65})
        APP.put(myScores, {score: 450, round: 66})
        APP.put(myScores, {score: 450, round: 67})
        APP.put(myScores, {score: 450, round: 68})
        APP.put(myScores, {score: 450, round: 69})
        APP.put(myScores, {score: 450, round: 70})
        APP.put(myScores, {score: 450, round: 71})
        APP.put(myScores, {score: 450, round: 72})
        APP.put(myScores, {score: 450, round: 73})
        APP.put(myScores, {score: 450, round: 74})
        APP.put(myScores, {score: 450, round: 75})
        APP.put(myScores, {score: 550, round: 76})
        APP.put(myScores, {score: 550, round: 77})
        APP.put(myScores, {score: 550, round: 78})
        APP.put(myScores, {score: 550, round: 79})
        APP.put(myScores, {score: 550, round: 80})
        APP.put(myScores, {score: 550, round: 81})
        APP.put(myScores, {score: 700, round: 82})
        APP.put(myScores, {score: 700, round: 83})
        APP.put(myScores, {score: 700, round: 84})
        APP.put(myScores, {score: 700, round: 85})
        APP.put(myScores, {score: 700, round: 86})
        APP.put(myScores, {score: 700, round: 87})
        APP.put(myScores, {score: 700, round: 88})
        APP.put(myScores, {score: 700, round: 89})
        APP.put(myScores, {score: 700, round: 90})
        APP.put(myScores, {score: 700, round: 91})
        APP.put(myScores, {score: 700, round: 92})
        APP.put(myScores, {score: 700, round: 93})
        APP.put(myScores, {score: 700, round: 94})
        APP.put(myScores, {score: 700, round: 95})
        APP.put(myScores, {score: 700, round: 96})
        APP.put(myScores, {score: 700, round: 97})
        APP.put(myScores, {score: 700, round: 98})
        APP.put(myScores, {score: 700, round: 99})
        APP.put(myScores, {score: 700, round: 100})
        APP.put(myScores, {score: 700, round: 101})
        APP.put(myScores, {score: 700, round: 102})
        APP.put(myScores, {score: 700, round: 103})
        APP.put(myScores, {score: 700, round: 104})
        APP.put(myScores, {score: 700, round: 105})
        APP.put(myScores, {score: 800, round: 106})
        APP.put(myScores, {score: 800, round: 107})
        APP.put(myScores, {score: 800, round: 108})
        APP.put(myScores, {score: 900, round: 109})
        APP.put(myScores, {score: 900, round: 110})
        APP.put(myScores, {score: 900, round: 111})
        APP.put(myScores, {score: 900, round: 112})
        APP.put(myScores, {score: 1000, round: 113})
        APP.put(myScores, {score: 1000, round: 114})
        APP.put(myScores, {score: 1100, round: 115})
        APP.put(myScores, {score: 1100, round: 116})
        APP.put(myScores, {score: 1100, round: 117})
        APP.put(myScores, {score: 1100, round: 118})
        APP.put(myScores, {score: 1100, round: 119})
        APP.put(myScores, {score: 1100, round: 120})
        APP.put(myScores, {score: 1100, round: 121})
        APP.put(myScores, {score: 1100, round: 122})
        APP.put(myScores, {score: 1100, round: 123})
        APP.put(myScores, {score: 1100, round: 124})
        APP.put(myScores, {score: 1100, round: 125})
        APP.put(myScores, {score: 1100, round: 126})
        APP.put(myScores, {score: 1100, round: 127})
        APP.put(myScores, {score: 1100, round: 128})
        APP.put(myScores, {score: 1100, round: 129})
        APP.put(myScores, {score: 1250, round: 130})
        APP.put(myScores, {score: 1250, round: 131})
        APP.put(myScores, {score: 1250, round: 132})
        APP.put(myScores, {score: 1250, round: 133})
        APP.put(myScores, {score: 1250, round: 134})
        APP.put(myScores, {score: 1250, round: 135})
        APP.put(myScores, {score: 1250, round: 136})
        APP.put(myScores, {score: 1250, round: 137})
        APP.put(myScores, {score: 1250, round: 138})
        APP.put(myScores, {score: 1250, round: 139})
        APP.put(myScores, {score: 1250, round: 140})
        APP.put(myScores, {score: 1250, round: 141})
        APP.put(myScores, {score: 1250, round: 142})
        APP.put(myScores, {score: 1250, round: 143})
        APP.put(myScores, {score: 1250, round: 144})
        APP.put(myScores, {score: 1250, round: 145})
        APP.put(myScores, {score: 1250, round: 146})
        APP.put(myScores, {score: 1250, round: 147})
        APP.put(myScores, {score: 1250, round: 148})
        APP.put(myScores, {score: 1250, round: 149})

	return {
		gameId: 'game20161110_05_19_02',
		gameTime: '2016-11-10 05:19:02',
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