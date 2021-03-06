APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(40887, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.25, y: 298.90, round: 2, sonar: 'extended' },
        {x: 102.25, y: 298.90, round: 2, sonar: 'extended' },
        {x: 106.66, y: 296.55, round: 3, sonar: 'extended' },
        {x: 106.66, y: 296.55, round: 3, sonar: 'extended' },
        {x: 113.61, y: 293.73, round: 4, sonar: 'extended' },
        {x: 113.61, y: 293.73, round: 4, sonar: 'extended' },
        {x: 120.93, y: 292.11, round: 5, sonar: 'extended' },
        {x: 120.93, y: 292.11, round: 5, sonar: 'extended' },
        {x: 130.56, y: 289.41, round: 6, sonar: 'extended' },
        {x: 130.56, y: 289.41, round: 6, sonar: 'extended' },
        {x: 138.99, y: 284.03, round: 7, sonar: 'extended' },
        {x: 138.99, y: 284.03, round: 7, sonar: 'extended' },
        {x: 146.88, y: 277.89, round: 8, sonar: 'extended' },
        {x: 146.88, y: 277.89, round: 8, sonar: 'extended' },
        {x: 154.97, y: 272.01, round: 9, sonar: 'extended' },
        {x: 154.97, y: 272.01, round: 9, sonar: 'extended' },
        {x: 162.29, y: 265.20, round: 10, sonar: 'extended' },
        {x: 162.29, y: 265.20, round: 10, sonar: 'extended' },
        {x: 169.16, y: 262.19, round: 11, sonar: 'nonextended' },
        {x: 169.16, y: 262.19, round: 11, sonar: 'nonextended' },
        {x: 177.23, y: 256.28, round: 12, sonar: 'nonextended' },
        {x: 177.23, y: 256.28, round: 12, sonar: 'nonextended' },
        {x: 181.46, y: 250.09, round: 13, sonar: 'nonextended' },
        {x: 181.46, y: 250.09, round: 13, sonar: 'nonextended' },
        {x: 185.95, y: 244.09, round: 14, sonar: 'nonextended' },
        {x: 185.95, y: 244.09, round: 14, sonar: 'nonextended' },
        {x: 187.56, y: 239.35, round: 15, sonar: 'nonextended' },
        {x: 187.56, y: 239.35, round: 15, sonar: 'nonextended' },
        {x: 187.99, y: 231.86, round: 16, sonar: 'nonextended' },
        {x: 187.99, y: 231.86, round: 16, sonar: 'nonextended' },
        {x: 189.12, y: 221.93, round: 17, sonar: 'nonextended' },
        {x: 189.12, y: 221.93, round: 17, sonar: 'nonextended' },
        {x: 192.16, y: 215.07, round: 18, sonar: 'nonextended' },
        {x: 192.16, y: 215.07, round: 18, sonar: 'nonextended' },
        {x: 196.79, y: 209.17, round: 19, sonar: 'nonextended' },
        {x: 196.79, y: 209.17, round: 19, sonar: 'nonextended' },
        {x: 200.96, y: 206.41, round: 20, sonar: 'nonextended' },
        {x: 200.96, y: 206.41, round: 20, sonar: 'nonextended' },
        {x: 208.18, y: 204.38, round: 21, sonar: 'nonextended' },
        {x: 208.18, y: 204.38, round: 21, sonar: 'nonextended' },
        {x: 213.17, y: 204.71, round: 22, sonar: 'extended' },
        {x: 213.17, y: 204.71, round: 22, sonar: 'extended' },
        {x: 220.63, y: 205.52, round: 23, sonar: 'extended' },
        {x: 220.63, y: 205.52, round: 23, sonar: 'extended' },
        {x: 230.60, y: 204.83, round: 24, sonar: 'extended' },
        {x: 230.60, y: 204.83, round: 24, sonar: 'extended' },
        {x: 240.50, y: 203.44, round: 25, sonar: 'extended' },
        {x: 240.50, y: 203.44, round: 25, sonar: 'extended' },
        {x: 247.97, y: 204.18, round: 26, sonar: 'extended' },
        {x: 247.97, y: 204.18, round: 26, sonar: 'extended' },
        {x: 252.51, y: 206.27, round: 27, sonar: 'extended' },
        {x: 252.51, y: 206.27, round: 27, sonar: 'extended' },
        {x: 256.80, y: 208.84, round: 28, sonar: 'extended' },
        {x: 256.80, y: 208.84, round: 28, sonar: 'extended' },
        {x: 261.80, y: 214.43, round: 29, sonar: 'extended' },
        {x: 261.80, y: 214.43, round: 29, sonar: 'extended' },
        {x: 266.35, y: 223.33, round: 30, sonar: 'extended' },
        {x: 266.35, y: 223.33, round: 30, sonar: 'extended' },
        {x: 271.82, y: 228.47, round: 31, sonar: 'nonextended' },
        {x: 271.82, y: 228.47, round: 31, sonar: 'nonextended' },
        {x: 274.70, y: 232.55, round: 32, sonar: 'nonextended' },
        {x: 274.70, y: 232.55, round: 32, sonar: 'nonextended' },
        {x: 276.67, y: 234.10, round: 33, sonar: 'nonextended' },
        {x: 276.67, y: 234.10, round: 33, sonar: 'nonextended' },
        {x: 276.67, y: 234.10, round: 34, sonar: 'nonextended' },
        {x: 276.67, y: 234.10, round: 34, sonar: 'nonextended' },
        {x: 278.23, y: 236.05, round: 35, sonar: 'nonextended' },
        {x: 278.23, y: 236.05, round: 35, sonar: 'nonextended' },
        {x: 281.67, y: 239.68, round: 36, sonar: 'nonextended' },
        {x: 281.67, y: 239.68, round: 36, sonar: 'nonextended' },
        {x: 283.89, y: 240.83, round: 37, sonar: 'nonextended' },
        {x: 283.89, y: 240.83, round: 37, sonar: 'nonextended' },
        {x: 288.46, y: 242.85, round: 38, sonar: 'nonextended' },
        {x: 288.46, y: 242.85, round: 38, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 39, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 39, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 40, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 40, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 41, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 41, sonar: 'nonextended' },
        {x: 290.75, y: 243.85, round: 42, sonar: 'extended' },
        {x: 290.75, y: 243.85, round: 42, sonar: 'extended' },
        {x: 290.75, y: 243.85, round: 43, sonar: 'extended' },
        {x: 290.75, y: 243.85, round: 43, sonar: 'extended' },
        {x: 292.74, y: 242.33, round: 44, sonar: 'extended' },
        {x: 292.74, y: 242.33, round: 44, sonar: 'extended' },
        {x: 294.32, y: 240.39, round: 45, sonar: 'extended' },
        {x: 294.32, y: 240.39, round: 45, sonar: 'extended' },
        {x: 295.27, y: 238.08, round: 46, sonar: 'extended' },
        {x: 295.27, y: 238.08, round: 46, sonar: 'extended' },
        {x: 295.46, y: 235.59, round: 47, sonar: 'extended' },
        {x: 295.46, y: 235.59, round: 47, sonar: 'extended' },
        {x: 295.07, y: 233.12, round: 48, sonar: 'extended' },
        {x: 295.07, y: 233.12, round: 48, sonar: 'extended' },
        {x: 293.13, y: 228.51, round: 49, sonar: 'extended' },
        {x: 293.13, y: 228.51, round: 49, sonar: 'extended' },
        {x: 292.76, y: 226.04, round: 50, sonar: 'extended' },
        {x: 292.76, y: 226.04, round: 50, sonar: 'extended' },
        {x: 292.23, y: 221.07, round: 51, sonar: 'nonextended' },
        {x: 292.23, y: 221.07, round: 51, sonar: 'nonextended' },
        {x: 292.51, y: 213.57, round: 52, sonar: 'nonextended' },
        {x: 292.51, y: 213.57, round: 52, sonar: 'nonextended' },
        {x: 291.73, y: 208.63, round: 53, sonar: 'nonextended' },
        {x: 291.73, y: 208.63, round: 53, sonar: 'nonextended' },
        {x: 291.58, y: 206.14, round: 54, sonar: 'nonextended' },
        {x: 291.58, y: 206.14, round: 54, sonar: 'nonextended' },
        {x: 291.73, y: 203.64, round: 55, sonar: 'nonextended' },
        {x: 291.73, y: 203.64, round: 55, sonar: 'nonextended' },
        {x: 291.24, y: 198.67, round: 56, sonar: 'nonextended' },
        {x: 291.24, y: 198.67, round: 56, sonar: 'nonextended' },
        {x: 290.31, y: 191.23, round: 57, sonar: 'nonextended' },
        {x: 290.31, y: 191.23, round: 57, sonar: 'nonextended' },
        {x: 286.26, y: 182.09, round: 58, sonar: 'nonextended' },
        {x: 286.26, y: 182.09, round: 58, sonar: 'nonextended' },
        {x: 281.21, y: 176.54, round: 59, sonar: 'nonextended' },
        {x: 281.21, y: 176.54, round: 59, sonar: 'nonextended' },
        {x: 275.22, y: 172.02, round: 60, sonar: 'nonextended' },
        {x: 275.22, y: 172.02, round: 60, sonar: 'nonextended' },
        {x: 268.23, y: 169.31, round: 61, sonar: 'nonextended' },
        {x: 268.23, y: 169.31, round: 61, sonar: 'nonextended' },
        {x: 259.02, y: 165.42, round: 62, sonar: 'extended' },
        {x: 259.02, y: 165.42, round: 62, sonar: 'extended' },
        {x: 251.72, y: 163.67, round: 63, sonar: 'extended' },
        {x: 251.72, y: 163.67, round: 63, sonar: 'extended' },
        {x: 241.73, y: 164.01, round: 64, sonar: 'extended' },
        {x: 241.73, y: 164.01, round: 64, sonar: 'extended' },
        {x: 231.85, y: 165.56, round: 65, sonar: 'extended' },
        {x: 231.85, y: 165.56, round: 65, sonar: 'extended' },
        {x: 222.63, y: 169.43, round: 66, sonar: 'extended' },
        {x: 222.63, y: 169.43, round: 66, sonar: 'extended' },
        {x: 214.33, y: 175.01, round: 67, sonar: 'extended' },
        {x: 214.33, y: 175.01, round: 67, sonar: 'extended' },
        {x: 208.80, y: 180.07, round: 68, sonar: 'extended' },
        {x: 208.80, y: 180.07, round: 68, sonar: 'extended' },
        {x: 203.75, y: 188.71, round: 69, sonar: 'extended' },
        {x: 203.75, y: 188.71, round: 69, sonar: 'extended' },
        {x: 199.46, y: 197.74, round: 70, sonar: 'extended' },
        {x: 199.46, y: 197.74, round: 70, sonar: 'extended' },
        {x: 198.14, y: 207.65, round: 71, sonar: 'nonextended' },
        {x: 198.14, y: 207.65, round: 71, sonar: 'nonextended' },
        {x: 200.07, y: 217.46, round: 72, sonar: 'nonextended' },
        {x: 200.07, y: 217.46, round: 72, sonar: 'nonextended' },
        {x: 203.86, y: 226.72, round: 73, sonar: 'nonextended' },
        {x: 203.86, y: 226.72, round: 73, sonar: 'nonextended' },
        {x: 207.76, y: 233.12, round: 74, sonar: 'nonextended' },
        {x: 207.76, y: 233.12, round: 74, sonar: 'nonextended' },
        {x: 208.85, y: 238.00, round: 75, sonar: 'nonextended' },
        {x: 208.85, y: 238.00, round: 75, sonar: 'nonextended' },
        {x: 208.99, y: 240.50, round: 76, sonar: 'nonextended' },
        {x: 208.99, y: 240.50, round: 76, sonar: 'nonextended' },
        {x: 208.42, y: 242.93, round: 77, sonar: 'nonextended' },
        {x: 208.42, y: 242.93, round: 77, sonar: 'nonextended' },
        {x: 208.85, y: 247.92, round: 78, sonar: 'nonextended' },
        {x: 208.85, y: 247.92, round: 78, sonar: 'nonextended' },
        {x: 210.69, y: 255.19, round: 79, sonar: 'nonextended' },
        {x: 210.69, y: 255.19, round: 79, sonar: 'nonextended' },
        {x: 215.75, y: 263.81, round: 80, sonar: 'nonextended' },
        {x: 215.75, y: 263.81, round: 80, sonar: 'nonextended' },
        {x: 223.18, y: 270.51, round: 81, sonar: 'nonextended' },
        {x: 223.18, y: 270.51, round: 81, sonar: 'nonextended' },
        {x: 229.23, y: 278.47, round: 82, sonar: 'extended' },
        {x: 229.23, y: 278.47, round: 82, sonar: 'extended' },
        {x: 237.61, y: 283.93, round: 83, sonar: 'extended' },
        {x: 237.61, y: 283.93, round: 83, sonar: 'extended' },
        {x: 247.11, y: 287.04, round: 84, sonar: 'extended' },
        {x: 247.11, y: 287.04, round: 84, sonar: 'extended' },
        {x: 256.91, y: 289.05, round: 85, sonar: 'extended' },
        {x: 256.91, y: 289.05, round: 85, sonar: 'extended' },
        {x: 265.93, y: 293.35, round: 86, sonar: 'extended' },
        {x: 265.93, y: 293.35, round: 86, sonar: 'extended' },
        {x: 274.44, y: 298.61, round: 87, sonar: 'extended' },
        {x: 274.44, y: 298.61, round: 87, sonar: 'extended' },
        {x: 281.61, y: 300.80, round: 88, sonar: 'extended' },
        {x: 281.61, y: 300.80, round: 88, sonar: 'extended' },
        {x: 288.54, y: 303.69, round: 89, sonar: 'extended' },
        {x: 288.54, y: 303.69, round: 89, sonar: 'extended' },
        {x: 298.09, y: 306.63, round: 90, sonar: 'extended' },
        {x: 298.09, y: 306.63, round: 90, sonar: 'extended' },
        {x: 308.08, y: 307.02, round: 91, sonar: 'nonextended' },
        {x: 308.08, y: 307.02, round: 91, sonar: 'nonextended' },
        {x: 317.81, y: 304.67, round: 92, sonar: 'nonextended' },
        {x: 317.81, y: 304.67, round: 92, sonar: 'nonextended' },
        {x: 325.27, y: 303.96, round: 93, sonar: 'nonextended' },
        {x: 325.27, y: 303.96, round: 93, sonar: 'nonextended' },
        {x: 335.02, y: 301.74, round: 94, sonar: 'nonextended' },
        {x: 335.02, y: 301.74, round: 94, sonar: 'nonextended' },
        {x: 345.02, y: 302.08, round: 95, sonar: 'nonextended' },
        {x: 345.02, y: 302.08, round: 95, sonar: 'nonextended' },
        {x: 354.91, y: 300.65, round: 96, sonar: 'nonextended' },
        {x: 354.91, y: 300.65, round: 96, sonar: 'nonextended' },
        {x: 363.74, y: 295.95, round: 97, sonar: 'nonextended' },
        {x: 363.74, y: 295.95, round: 97, sonar: 'nonextended' },
        {x: 373.54, y: 293.94, round: 98, sonar: 'nonextended' },
        {x: 373.54, y: 293.94, round: 98, sonar: 'nonextended' },
        {x: 383.46, y: 295.14, round: 99, sonar: 'nonextended' },
        {x: 383.46, y: 295.14, round: 99, sonar: 'nonextended' },
        {x: 393.13, y: 297.70, round: 100, sonar: 'nonextended' },
        {x: 393.13, y: 297.70, round: 100, sonar: 'nonextended' },
        {x: 402.69, y: 300.64, round: 101, sonar: 'nonextended' },
        {x: 402.69, y: 300.64, round: 101, sonar: 'nonextended' },
        {x: 408.95, y: 304.76, round: 102, sonar: 'extended' },
        {x: 408.95, y: 304.76, round: 102, sonar: 'extended' },
        {x: 415.09, y: 309.08, round: 103, sonar: 'extended' },
        {x: 415.09, y: 309.08, round: 103, sonar: 'extended' },
        {x: 424.52, y: 312.39, round: 104, sonar: 'extended' },
        {x: 424.52, y: 312.39, round: 104, sonar: 'extended' },
        {x: 431.92, y: 313.62, round: 105, sonar: 'extended' },
        {x: 431.92, y: 313.62, round: 105, sonar: 'extended' },
        {x: 441.81, y: 312.16, round: 106, sonar: 'extended' },
        {x: 441.81, y: 312.16, round: 106, sonar: 'extended' },
        {x: 451.52, y: 309.74, round: 107, sonar: 'extended' },
        {x: 451.52, y: 309.74, round: 107, sonar: 'extended' },
        {x: 461.09, y: 306.85, round: 108, sonar: 'extended' },
        {x: 461.09, y: 306.85, round: 108, sonar: 'extended' },
        {x: 471.09, y: 306.77, round: 109, sonar: 'extended' },
        {x: 471.09, y: 306.77, round: 109, sonar: 'extended' },
        {x: 480.95, y: 308.45, round: 110, sonar: 'extended' },
        {x: 480.95, y: 308.45, round: 110, sonar: 'extended' },
        {x: 490.27, y: 312.08, round: 111, sonar: 'nonextended' },
        {x: 490.27, y: 312.08, round: 111, sonar: 'nonextended' },
        {x: 498.69, y: 317.47, round: 112, sonar: 'nonextended' },
        {x: 498.69, y: 317.47, round: 112, sonar: 'nonextended' },
        {x: 504.43, y: 322.29, round: 113, sonar: 'nonextended' },
        {x: 504.43, y: 322.29, round: 113, sonar: 'nonextended' },
        {x: 511.10, y: 329.74, round: 114, sonar: 'nonextended' },
        {x: 511.10, y: 329.74, round: 114, sonar: 'nonextended' },
        {x: 519.46, y: 335.23, round: 115, sonar: 'nonextended' },
        {x: 519.46, y: 335.23, round: 115, sonar: 'nonextended' },
        {x: 528.21, y: 340.07, round: 116, sonar: 'nonextended' },
        {x: 528.21, y: 340.07, round: 116, sonar: 'nonextended' },
        {x: 537.61, y: 343.47, round: 117, sonar: 'nonextended' },
        {x: 537.61, y: 343.47, round: 117, sonar: 'nonextended' },
        {x: 547.59, y: 344.12, round: 118, sonar: 'nonextended' },
        {x: 547.59, y: 344.12, round: 118, sonar: 'nonextended' },
        {x: 557.59, y: 344.14, round: 119, sonar: 'nonextended' },
        {x: 557.59, y: 344.14, round: 119, sonar: 'nonextended' },
        {x: 567.55, y: 343.20, round: 120, sonar: 'nonextended' },
        {x: 567.55, y: 343.20, round: 120, sonar: 'nonextended' },
        {x: 577.32, y: 345.34, round: 121, sonar: 'nonextended' },
        {x: 577.32, y: 345.34, round: 121, sonar: 'nonextended' },
        {x: 587.32, y: 345.45, round: 122, sonar: 'extended' },
        {x: 587.32, y: 345.45, round: 122, sonar: 'extended' },
        {x: 597.12, y: 343.49, round: 123, sonar: 'extended' },
        {x: 597.12, y: 343.49, round: 123, sonar: 'extended' },
        {x: 607.12, y: 343.65, round: 124, sonar: 'extended' },
        {x: 607.12, y: 343.65, round: 124, sonar: 'extended' },
        {x: 616.71, y: 346.47, round: 125, sonar: 'extended' },
        {x: 616.71, y: 346.47, round: 125, sonar: 'extended' },
        {x: 626.71, y: 346.70, round: 126, sonar: 'extended' },
        {x: 626.71, y: 346.70, round: 126, sonar: 'extended' },
        {x: 636.60, y: 348.22, round: 127, sonar: 'extended' },
        {x: 636.60, y: 348.22, round: 127, sonar: 'extended' },
        {x: 646.56, y: 347.37, round: 128, sonar: 'extended' },
        {x: 646.56, y: 347.37, round: 128, sonar: 'extended' },
        {x: 655.75, y: 343.43, round: 129, sonar: 'extended' },
        {x: 655.75, y: 343.43, round: 129, sonar: 'extended' },
        {x: 663.52, y: 337.14, round: 130, sonar: 'extended' },
        {x: 663.52, y: 337.14, round: 130, sonar: 'extended' },
        {x: 668.80, y: 328.65, round: 131, sonar: 'nonextended' },
        {x: 668.80, y: 328.65, round: 131, sonar: 'nonextended' },
        {x: 673.68, y: 319.91, round: 132, sonar: 'nonextended' },
        {x: 673.68, y: 319.91, round: 132, sonar: 'nonextended' },
        {x: 677.23, y: 310.57, round: 133, sonar: 'nonextended' },
        {x: 677.23, y: 310.57, round: 133, sonar: 'nonextended' },
        {x: 679.93, y: 300.94, round: 134, sonar: 'nonextended' },
        {x: 679.93, y: 300.94, round: 134, sonar: 'nonextended' },
        {x: 682.80, y: 291.36, round: 135, sonar: 'nonextended' },
        {x: 682.80, y: 291.36, round: 135, sonar: 'nonextended' },
        {x: 683.55, y: 281.39, round: 136, sonar: 'nonextended' },
        {x: 683.55, y: 281.39, round: 136, sonar: 'nonextended' },
        {x: 686.69, y: 271.89, round: 137, sonar: 'nonextended' },
        {x: 686.69, y: 271.89, round: 137, sonar: 'nonextended' },
        {x: 692.66, y: 263.87, round: 138, sonar: 'nonextended' },
        {x: 692.66, y: 263.87, round: 138, sonar: 'nonextended' },
        {x: 700.90, y: 258.20, round: 139, sonar: 'nonextended' },
        {x: 700.90, y: 258.20, round: 139, sonar: 'nonextended' },
        {x: 706.89, y: 250.20, round: 140, sonar: 'nonextended' },
        {x: 706.89, y: 250.20, round: 140, sonar: 'nonextended' },
        {x: 713.16, y: 242.40, round: 141, sonar: 'nonextended' },
        {x: 713.16, y: 242.40, round: 141, sonar: 'nonextended' },
        {x: 720.76, y: 235.90, round: 142, sonar: 'extended' },
        {x: 720.76, y: 235.90, round: 142, sonar: 'extended' },
        {x: 729.02, y: 230.28, round: 143, sonar: 'extended' },
        {x: 729.02, y: 230.28, round: 143, sonar: 'extended' },
        {x: 737.27, y: 224.61, round: 144, sonar: 'extended' },
        {x: 737.27, y: 224.61, round: 144, sonar: 'extended' },
        {x: 746.76, y: 221.48, round: 145, sonar: 'extended' },
        {x: 746.76, y: 221.48, round: 145, sonar: 'extended' },
        {x: 754.26, y: 221.27, round: 146, sonar: 'extended' },
        {x: 754.26, y: 221.27, round: 146, sonar: 'extended' },
        {x: 764.21, y: 222.27, round: 147, sonar: 'extended' },
        {x: 764.21, y: 222.27, round: 147, sonar: 'extended' },
        {x: 773.31, y: 226.41, round: 148, sonar: 'extended' },
        {x: 773.31, y: 226.41, round: 148, sonar: 'extended' },
        {x: 779.21, y: 231.04, round: 149, sonar: 'extended' },
        {x: 779.21, y: 231.04, round: 149, sonar: 'extended' },
    ]));
	mySubmarines.push(APP.submarine(40888, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.15, y: 273.72, round: 2, sonar: 'extended' },
        {x: 127.15, y: 273.72, round: 2, sonar: 'extended' },
        {x: 131.98, y: 272.42, round: 3, sonar: 'extended' },
        {x: 131.98, y: 272.42, round: 3, sonar: 'extended' },
        {x: 139.44, y: 271.66, round: 4, sonar: 'extended' },
        {x: 139.44, y: 271.66, round: 4, sonar: 'extended' },
        {x: 144.05, y: 269.73, round: 5, sonar: 'extended' },
        {x: 144.05, y: 269.73, round: 5, sonar: 'extended' },
        {x: 148.42, y: 267.31, round: 6, sonar: 'extended' },
        {x: 148.42, y: 267.31, round: 6, sonar: 'extended' },
        {x: 150.52, y: 265.95, round: 7, sonar: 'extended' },
        {x: 150.52, y: 265.95, round: 7, sonar: 'extended' },
        {x: 152.25, y: 264.14, round: 8, sonar: 'extended' },
        {x: 152.25, y: 264.14, round: 8, sonar: 'extended' },
        {x: 154.82, y: 259.85, round: 9, sonar: 'extended' },
        {x: 154.82, y: 259.85, round: 9, sonar: 'extended' },
        {x: 158.54, y: 253.34, round: 10, sonar: 'extended' },
        {x: 158.54, y: 253.34, round: 10, sonar: 'extended' },
        {x: 163.33, y: 247.57, round: 11, sonar: 'nonextended' },
        {x: 163.33, y: 247.57, round: 11, sonar: 'nonextended' },
        {x: 171.43, y: 241.71, round: 12, sonar: 'nonextended' },
        {x: 171.43, y: 241.71, round: 12, sonar: 'nonextended' },
        {x: 178.17, y: 238.42, round: 13, sonar: 'nonextended' },
        {x: 178.17, y: 238.42, round: 13, sonar: 'nonextended' },
        {x: 185.32, y: 236.15, round: 14, sonar: 'nonextended' },
        {x: 185.32, y: 236.15, round: 14, sonar: 'nonextended' },
        {x: 190.08, y: 234.60, round: 15, sonar: 'nonextended' },
        {x: 190.08, y: 234.60, round: 15, sonar: 'nonextended' },
        {x: 197.24, y: 232.38, round: 16, sonar: 'nonextended' },
        {x: 197.24, y: 232.38, round: 16, sonar: 'nonextended' },
        {x: 203.64, y: 228.46, round: 17, sonar: 'nonextended' },
        {x: 203.64, y: 228.46, round: 17, sonar: 'nonextended' },
        {x: 207.71, y: 225.56, round: 18, sonar: 'nonextended' },
        {x: 207.71, y: 225.56, round: 18, sonar: 'nonextended' },
        {x: 209.16, y: 223.52, round: 19, sonar: 'nonextended' },
        {x: 209.16, y: 223.52, round: 19, sonar: 'nonextended' },
        {x: 211.76, y: 219.25, round: 20, sonar: 'nonextended' },
        {x: 211.76, y: 219.25, round: 20, sonar: 'nonextended' },
        {x: 213.25, y: 217.25, round: 21, sonar: 'nonextended' },
        {x: 213.25, y: 217.25, round: 21, sonar: 'nonextended' },
        {x: 214.19, y: 214.93, round: 22, sonar: 'extended' },
        {x: 214.19, y: 214.93, round: 22, sonar: 'extended' },
        {x: 216.48, y: 210.48, round: 23, sonar: 'extended' },
        {x: 216.48, y: 210.48, round: 23, sonar: 'extended' },
        {x: 219.86, y: 203.79, round: 24, sonar: 'extended' },
        {x: 219.86, y: 203.79, round: 24, sonar: 'extended' },
        {x: 222.45, y: 199.51, round: 25, sonar: 'extended' },
        {x: 222.45, y: 199.51, round: 25, sonar: 'extended' },
        {x: 227.20, y: 193.71, round: 26, sonar: 'extended' },
        {x: 227.20, y: 193.71, round: 26, sonar: 'extended' },
        {x: 231.21, y: 190.73, round: 27, sonar: 'extended' },
        {x: 231.21, y: 190.73, round: 27, sonar: 'extended' },
        {x: 233.34, y: 189.42, round: 28, sonar: 'extended' },
        {x: 233.34, y: 189.42, round: 28, sonar: 'extended' },
        {x: 237.70, y: 186.96, round: 29, sonar: 'extended' },
        {x: 237.70, y: 186.96, round: 29, sonar: 'extended' },
        {x: 245.00, y: 185.24, round: 30, sonar: 'extended' },
        {x: 245.00, y: 185.24, round: 30, sonar: 'extended' },
        {x: 252.45, y: 184.43, round: 31, sonar: 'nonextended' },
        {x: 252.45, y: 184.43, round: 31, sonar: 'nonextended' },
        {x: 259.88, y: 183.36, round: 32, sonar: 'nonextended' },
        {x: 259.88, y: 183.36, round: 32, sonar: 'nonextended' },
        {x: 264.88, y: 183.38, round: 33, sonar: 'nonextended' },
        {x: 264.88, y: 183.38, round: 33, sonar: 'nonextended' },
        {x: 267.31, y: 183.96, round: 34, sonar: 'nonextended' },
        {x: 267.31, y: 183.96, round: 34, sonar: 'nonextended' },
        {x: 272.25, y: 184.73, round: 35, sonar: 'nonextended' },
        {x: 272.25, y: 184.73, round: 35, sonar: 'nonextended' },
        {x: 279.24, y: 187.46, round: 36, sonar: 'nonextended' },
        {x: 279.24, y: 187.46, round: 36, sonar: 'nonextended' },
        {x: 285.05, y: 192.19, round: 37, sonar: 'nonextended' },
        {x: 285.05, y: 192.19, round: 37, sonar: 'nonextended' },
        {x: 288.62, y: 195.70, round: 38, sonar: 'nonextended' },
        {x: 288.62, y: 195.70, round: 38, sonar: 'nonextended' },
        {x: 292.14, y: 202.32, round: 39, sonar: 'nonextended' },
        {x: 292.14, y: 202.32, round: 39, sonar: 'nonextended' },
        {x: 293.59, y: 207.11, round: 40, sonar: 'nonextended' },
        {x: 293.59, y: 207.11, round: 40, sonar: 'nonextended' },
        {x: 294.87, y: 214.50, round: 41, sonar: 'nonextended' },
        {x: 294.87, y: 214.50, round: 41, sonar: 'nonextended' },
        {x: 293.73, y: 224.43, round: 42, sonar: 'extended' },
        {x: 293.73, y: 224.43, round: 42, sonar: 'extended' },
        {x: 291.49, y: 231.59, round: 43, sonar: 'extended' },
        {x: 291.49, y: 231.59, round: 43, sonar: 'extended' },
        {x: 286.00, y: 239.94, round: 44, sonar: 'extended' },
        {x: 286.00, y: 239.94, round: 44, sonar: 'extended' },
        {x: 280.07, y: 244.55, round: 45, sonar: 'extended' },
        {x: 280.07, y: 244.55, round: 45, sonar: 'extended' },
        {x: 273.58, y: 248.30, round: 46, sonar: 'extended' },
        {x: 273.58, y: 248.30, round: 46, sonar: 'extended' },
        {x: 267.08, y: 252.04, round: 47, sonar: 'extended' },
        {x: 267.08, y: 252.04, round: 47, sonar: 'extended' },
        {x: 263.25, y: 255.26, round: 48, sonar: 'extended' },
        {x: 263.25, y: 255.26, round: 48, sonar: 'extended' },
        {x: 258.70, y: 257.33, round: 49, sonar: 'extended' },
        {x: 258.70, y: 257.33, round: 49, sonar: 'extended' },
        {x: 253.24, y: 262.47, round: 50, sonar: 'extended' },
        {x: 253.24, y: 262.47, round: 50, sonar: 'extended' },
        {x: 246.81, y: 270.13, round: 51, sonar: 'nonextended' },
        {x: 246.81, y: 270.13, round: 51, sonar: 'nonextended' },
        {x: 243.60, y: 276.91, round: 52, sonar: 'nonextended' },
        {x: 243.60, y: 276.91, round: 52, sonar: 'nonextended' },
        {x: 240.49, y: 280.82, round: 53, sonar: 'nonextended' },
        {x: 240.49, y: 280.82, round: 53, sonar: 'nonextended' },
        {x: 239.32, y: 283.03, round: 54, sonar: 'nonextended' },
        {x: 239.32, y: 283.03, round: 54, sonar: 'nonextended' },
        {x: 239.32, y: 283.03, round: 55, sonar: 'nonextended' },
        {x: 239.32, y: 283.03, round: 55, sonar: 'nonextended' },
        {x: 239.21, y: 285.53, round: 56, sonar: 'nonextended' },
        {x: 239.21, y: 285.53, round: 56, sonar: 'nonextended' },
        {x: 239.67, y: 287.98, round: 57, sonar: 'nonextended' },
        {x: 239.67, y: 287.98, round: 57, sonar: 'nonextended' },
        {x: 241.22, y: 292.74, round: 58, sonar: 'nonextended' },
        {x: 241.22, y: 292.74, round: 58, sonar: 'nonextended' },
        {x: 244.30, y: 296.68, round: 59, sonar: 'nonextended' },
        {x: 244.30, y: 296.68, round: 59, sonar: 'nonextended' },
        {x: 248.18, y: 303.09, round: 60, sonar: 'nonextended' },
        {x: 248.18, y: 303.09, round: 60, sonar: 'nonextended' },
        {x: 255.95, y: 309.39, round: 61, sonar: 'nonextended' },
        {x: 255.95, y: 309.39, round: 61, sonar: 'nonextended' },
        {x: 262.44, y: 313.14, round: 62, sonar: 'extended' },
        {x: 262.44, y: 313.14, round: 62, sonar: 'extended' },
        {x: 271.70, y: 316.93, round: 63, sonar: 'extended' },
        {x: 271.70, y: 316.93, round: 63, sonar: 'extended' },
        {x: 281.61, y: 318.24, round: 64, sonar: 'extended' },
        {x: 281.61, y: 318.24, round: 64, sonar: 'extended' },
        {x: 289.06, y: 317.38, round: 65, sonar: 'extended' },
        {x: 289.06, y: 317.38, round: 65, sonar: 'extended' },
        {x: 298.09, y: 313.08, round: 66, sonar: 'extended' },
        {x: 298.09, y: 313.08, round: 66, sonar: 'extended' },
        {x: 306.55, y: 307.75, round: 67, sonar: 'extended' },
        {x: 306.55, y: 307.75, round: 67, sonar: 'extended' },
        {x: 316.32, y: 305.62, round: 68, sonar: 'extended' },
        {x: 316.32, y: 305.62, round: 68, sonar: 'extended' },
        {x: 326.19, y: 304.01, round: 69, sonar: 'extended' },
        {x: 326.19, y: 304.01, round: 69, sonar: 'extended' },
        {x: 336.15, y: 304.92, round: 70, sonar: 'extended' },
        {x: 336.15, y: 304.92, round: 70, sonar: 'extended' },
        {x: 345.85, y: 302.50, round: 71, sonar: 'nonextended' },
        {x: 345.85, y: 302.50, round: 71, sonar: 'nonextended' },
        {x: 355.84, y: 302.03, round: 72, sonar: 'nonextended' },
        {x: 355.84, y: 302.03, round: 72, sonar: 'nonextended' },
        {x: 363.34, y: 302.16, round: 73, sonar: 'nonextended' },
        {x: 363.34, y: 302.16, round: 73, sonar: 'nonextended' },
        {x: 370.37, y: 304.76, round: 74, sonar: 'nonextended' },
        {x: 370.37, y: 304.76, round: 74, sonar: 'nonextended' },
        {x: 378.41, y: 310.71, round: 75, sonar: 'nonextended' },
        {x: 378.41, y: 310.71, round: 75, sonar: 'nonextended' },
        {x: 386.34, y: 316.81, round: 76, sonar: 'nonextended' },
        {x: 386.34, y: 316.81, round: 76, sonar: 'nonextended' },
        {x: 395.58, y: 320.62, round: 77, sonar: 'nonextended' },
        {x: 395.58, y: 320.62, round: 77, sonar: 'nonextended' },
        {x: 403.75, y: 326.39, round: 78, sonar: 'nonextended' },
        {x: 403.75, y: 326.39, round: 78, sonar: 'nonextended' },
        {x: 411.41, y: 332.82, round: 79, sonar: 'nonextended' },
        {x: 411.41, y: 332.82, round: 79, sonar: 'nonextended' },
        {x: 419.03, y: 339.29, round: 80, sonar: 'nonextended' },
        {x: 419.03, y: 339.29, round: 80, sonar: 'nonextended' },
        {x: 426.95, y: 345.40, round: 81, sonar: 'nonextended' },
        {x: 426.95, y: 345.40, round: 81, sonar: 'nonextended' },
        {x: 436.34, y: 348.85, round: 82, sonar: 'extended' },
        {x: 436.34, y: 348.85, round: 82, sonar: 'extended' },
        {x: 446.23, y: 350.33, round: 83, sonar: 'extended' },
        {x: 446.23, y: 350.33, round: 83, sonar: 'extended' },
        {x: 456.10, y: 348.71, round: 84, sonar: 'extended' },
        {x: 456.10, y: 348.71, round: 84, sonar: 'extended' },
        {x: 466.10, y: 348.77, round: 85, sonar: 'extended' },
        {x: 466.10, y: 348.77, round: 85, sonar: 'extended' },
        {x: 475.54, y: 345.47, round: 86, sonar: 'extended' },
        {x: 475.54, y: 345.47, round: 86, sonar: 'extended' },
        {x: 485.22, y: 342.99, round: 87, sonar: 'extended' },
        {x: 485.22, y: 342.99, round: 87, sonar: 'extended' },
        {x: 495.18, y: 342.00, round: 88, sonar: 'extended' },
        {x: 495.18, y: 342.00, round: 88, sonar: 'extended' },
        {x: 504.84, y: 339.43, round: 89, sonar: 'extended' },
        {x: 504.84, y: 339.43, round: 89, sonar: 'extended' },
        {x: 514.12, y: 335.72, round: 90, sonar: 'extended' },
        {x: 514.12, y: 335.72, round: 90, sonar: 'extended' },
        {x: 523.54, y: 332.34, round: 91, sonar: 'nonextended' },
        {x: 523.54, y: 332.34, round: 91, sonar: 'nonextended' },
        {x: 530.13, y: 328.76, round: 92, sonar: 'nonextended' },
        {x: 530.13, y: 328.76, round: 92, sonar: 'nonextended' },
        {x: 538.65, y: 323.53, round: 93, sonar: 'nonextended' },
        {x: 538.65, y: 323.53, round: 93, sonar: 'nonextended' },
        {x: 546.38, y: 317.18, round: 94, sonar: 'nonextended' },
        {x: 546.38, y: 317.18, round: 94, sonar: 'nonextended' },
        {x: 552.66, y: 309.40, round: 95, sonar: 'nonextended' },
        {x: 552.66, y: 309.40, round: 95, sonar: 'nonextended' },
        {x: 555.17, y: 302.33, round: 96, sonar: 'nonextended' },
        {x: 555.17, y: 302.33, round: 96, sonar: 'nonextended' },
        {x: 556.54, y: 294.96, round: 97, sonar: 'nonextended' },
        {x: 556.54, y: 294.96, round: 97, sonar: 'nonextended' },
        {x: 557.35, y: 284.99, round: 98, sonar: 'nonextended' },
        {x: 557.35, y: 284.99, round: 98, sonar: 'nonextended' },
        {x: 559.35, y: 277.76, round: 99, sonar: 'nonextended' },
        {x: 559.35, y: 277.76, round: 99, sonar: 'nonextended' },
        {x: 562.06, y: 273.56, round: 100, sonar: 'nonextended' },
        {x: 562.06, y: 273.56, round: 100, sonar: 'nonextended' },
        {x: 566.29, y: 267.36, round: 101, sonar: 'nonextended' },
        {x: 566.29, y: 267.36, round: 101, sonar: 'nonextended' },
        {x: 573.98, y: 260.98, round: 102, sonar: 'extended' },
        {x: 573.98, y: 260.98, round: 102, sonar: 'extended' },
        {x: 583.18, y: 257.06, round: 103, sonar: 'extended' },
        {x: 583.18, y: 257.06, round: 103, sonar: 'extended' },
        {x: 592.49, y: 253.41, round: 104, sonar: 'extended' },
        {x: 592.49, y: 253.41, round: 104, sonar: 'extended' },
        {x: 599.58, y: 250.96, round: 105, sonar: 'extended' },
        {x: 599.58, y: 250.96, round: 105, sonar: 'extended' },
        {x: 609.58, y: 250.89, round: 106, sonar: 'extended' },
        {x: 609.58, y: 250.89, round: 106, sonar: 'extended' },
        {x: 619.12, y: 253.87, round: 107, sonar: 'extended' },
        {x: 619.12, y: 253.87, round: 107, sonar: 'extended' },
        {x: 628.38, y: 257.66, round: 108, sonar: 'extended' },
        {x: 628.38, y: 257.66, round: 108, sonar: 'extended' },
        {x: 634.90, y: 261.36, round: 109, sonar: 'extended' },
        {x: 634.90, y: 261.36, round: 109, sonar: 'extended' },
        {x: 644.71, y: 263.31, round: 110, sonar: 'extended' },
        {x: 644.71, y: 263.31, round: 110, sonar: 'extended' },
        {x: 654.69, y: 262.67, round: 111, sonar: 'nonextended' },
        {x: 654.69, y: 262.67, round: 111, sonar: 'nonextended' },
        {x: 663.89, y: 258.74, round: 112, sonar: 'nonextended' },
        {x: 663.89, y: 258.74, round: 112, sonar: 'nonextended' },
        {x: 671.49, y: 252.25, round: 113, sonar: 'nonextended' },
        {x: 671.49, y: 252.25, round: 113, sonar: 'nonextended' },
        {x: 680.11, y: 247.18, round: 114, sonar: 'nonextended' },
        {x: 680.11, y: 247.18, round: 114, sonar: 'nonextended' },
        {x: 688.09, y: 241.15, round: 115, sonar: 'nonextended' },
        {x: 688.09, y: 241.15, round: 115, sonar: 'nonextended' },
        {x: 695.28, y: 234.20, round: 116, sonar: 'nonextended' },
        {x: 695.28, y: 234.20, round: 116, sonar: 'nonextended' },
        {x: 702.67, y: 227.47, round: 117, sonar: 'nonextended' },
        {x: 702.67, y: 227.47, round: 117, sonar: 'nonextended' },
        {x: 708.37, y: 219.25, round: 118, sonar: 'nonextended' },
        {x: 708.37, y: 219.25, round: 118, sonar: 'nonextended' },
        {x: 715.75, y: 212.49, round: 119, sonar: 'nonextended' },
        {x: 715.75, y: 212.49, round: 119, sonar: 'nonextended' },
        {x: 720.78, y: 203.85, round: 120, sonar: 'nonextended' },
        {x: 720.78, y: 203.85, round: 120, sonar: 'nonextended' },
        {x: 727.68, y: 196.61, round: 121, sonar: 'nonextended' },
        {x: 727.68, y: 196.61, round: 121, sonar: 'nonextended' },
        {x: 732.00, y: 187.60, round: 122, sonar: 'extended' },
        {x: 732.00, y: 187.60, round: 122, sonar: 'extended' },
        {x: 735.41, y: 178.19, round: 123, sonar: 'extended' },
        {x: 735.41, y: 178.19, round: 123, sonar: 'extended' },
        {x: 739.67, y: 169.15, round: 124, sonar: 'extended' },
        {x: 739.67, y: 169.15, round: 124, sonar: 'extended' },
        {x: 744.92, y: 160.64, round: 125, sonar: 'extended' },
        {x: 744.92, y: 160.64, round: 125, sonar: 'extended' },
        {x: 748.53, y: 151.31, round: 126, sonar: 'extended' },
        {x: 748.53, y: 151.31, round: 126, sonar: 'extended' },
        {x: 751.97, y: 141.92, round: 127, sonar: 'extended' },
        {x: 751.97, y: 141.92, round: 127, sonar: 'extended' },
        {x: 752.50, y: 131.94, round: 128, sonar: 'extended' },
        {x: 752.50, y: 131.94, round: 128, sonar: 'extended' },
        {x: 749.66, y: 122.35, round: 129, sonar: 'extended' },
        {x: 749.66, y: 122.35, round: 129, sonar: 'extended' },
        {x: 746.17, y: 112.98, round: 130, sonar: 'extended' },
        {x: 746.17, y: 112.98, round: 130, sonar: 'extended' },
        {x: 744.59, y: 103.10, round: 131, sonar: 'nonextended' },
        {x: 744.59, y: 103.10, round: 131, sonar: 'nonextended' },
        {x: 742.74, y: 95.84, round: 132, sonar: 'nonextended' },
        {x: 742.74, y: 95.84, round: 132, sonar: 'nonextended' },
        {x: 738.12, y: 86.97, round: 133, sonar: 'nonextended' },
        {x: 738.12, y: 86.97, round: 133, sonar: 'nonextended' },
        {x: 733.29, y: 78.21, round: 134, sonar: 'nonextended' },
        {x: 733.29, y: 78.21, round: 134, sonar: 'nonextended' },
        {x: 726.56, y: 70.81, round: 135, sonar: 'nonextended' },
        {x: 726.56, y: 70.81, round: 135, sonar: 'nonextended' },
        {x: 717.81, y: 65.97, round: 136, sonar: 'nonextended' },
        {x: 717.81, y: 65.97, round: 136, sonar: 'nonextended' },
        {x: 708.63, y: 62.01, round: 137, sonar: 'nonextended' },
        {x: 708.63, y: 62.01, round: 137, sonar: 'nonextended' },
        {x: 698.67, y: 61.08, round: 138, sonar: 'nonextended' },
        {x: 698.67, y: 61.08, round: 138, sonar: 'nonextended' },
        {x: 688.91, y: 63.23, round: 139, sonar: 'nonextended' },
        {x: 688.91, y: 63.23, round: 139, sonar: 'nonextended' },
        {x: 678.92, y: 62.71, round: 140, sonar: 'nonextended' },
        {x: 678.92, y: 62.71, round: 140, sonar: 'nonextended' },
        {x: 669.64, y: 58.98, round: 141, sonar: 'nonextended' },
        {x: 669.64, y: 58.98, round: 141, sonar: 'nonextended' },
        {x: 661.27, y: 53.51, round: 142, sonar: 'extended' },
        {x: 661.27, y: 53.51, round: 142, sonar: 'extended' },
        {x: 655.31, y: 48.96, round: 143, sonar: 'extended' },
        {x: 655.31, y: 48.96, round: 143, sonar: 'extended' },
        {x: 649.17, y: 44.65, round: 144, sonar: 'extended' },
        {x: 649.17, y: 44.65, round: 144, sonar: 'extended' },
        {x: 642.77, y: 40.74, round: 145, sonar: 'extended' },
        {x: 642.77, y: 40.74, round: 145, sonar: 'extended' },
        {x: 633.20, y: 37.82, round: 146, sonar: 'extended' },
        {x: 633.20, y: 37.82, round: 146, sonar: 'extended' },
        {x: 625.01, y: 32.09, round: 147, sonar: 'extended' },
        {x: 625.01, y: 32.09, round: 147, sonar: 'extended' },
        {x: 617.81, y: 29.99, round: 148, sonar: 'extended' },
        {x: 617.81, y: 29.99, round: 148, sonar: 'extended' },
        {x: 607.81, y: 30.35, round: 149, sonar: 'extended' },
        {x: 607.81, y: 30.35, round: 149, sonar: 'extended' },
    ]));

    torpedos.push(APP.waterObject(40896, [
        {x: 144.02, y: 268.81, round: 2 },
        {x: 163.04, y: 262.62, round: 3 },
        {x: 182.05, y: 256.43, round: 4 },
        {x: 201.07, y: 250.24, round: 5 },
        {x: 220.09, y: 244.04, round: 6 },
        {x: 239.11, y: 237.85, round: 7 },
        {x: 258.12, y: 231.66, round: 8 },
    ]));
    torpedos.push(APP.waterObject(40897, [
        {x: 218.21, y: 272.88, round: 11 },
        {x: 238.01, y: 270.09, round: 12 },
        {x: 158.79, y: 281.24, round: 8 },
        {x: 178.60, y: 278.46, round: 9 },
        {x: 198.40, y: 275.67, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40898, [
        {x: 230.29, y: 259.78, round: 11 },
        {x: 250.23, y: 258.24, round: 12 },
        {x: 170.47, y: 264.41, round: 8 },
        {x: 190.41, y: 262.87, round: 9 },
        {x: 210.35, y: 261.32, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40900, [
        {x: 192.37, y: 216.63, round: 22 },
        {x: 176.56, y: 228.88, round: 23 },
        {x: 160.75, y: 241.12, round: 24 },
    ]));
    torpedos.push(APP.waterObject(40901, [
        {x: 196.12, y: 227.57, round: 22 },
        {x: 178.99, y: 237.89, round: 23 },
        {x: 161.86, y: 248.22, round: 24 },
    ]));
    torpedos.push(APP.waterObject(40902, [
        {x: 257.41, y: 225.66, round: 28 },
        {x: 262.31, y: 245.05, round: 29 },
    ]));
    torpedos.push(APP.waterObject(40903, [
        {x: 238.81, y: 209.23, round: 28 },
        {x: 246.40, y: 227.73, round: 29 },
    ]));
    torpedos.push(APP.waterObject(40904, [
        {x: 256.67, y: 233.59, round: 34 },
        {x: 236.68, y: 233.08, round: 35 },
        {x: 216.69, y: 232.57, round: 36 },
    ]));
    torpedos.push(APP.waterObject(40905, [
        {x: 247.17, y: 192.68, round: 34 },
        {x: 229.46, y: 201.98, round: 35 },
        {x: 211.75, y: 211.28, round: 36 },
    ]));
    torpedos.push(APP.waterObject(40906, [
        {x: 312.19, y: 243.46, round: 49 },
        {x: 329.31, y: 253.81, round: 50 },
        {x: 346.42, y: 264.15, round: 51 },
    ]));
    torpedos.push(APP.waterObject(40907, [
        {x: 283.22, y: 256.38, round: 49 },
        {x: 303.19, y: 257.51, round: 50 },
        {x: 323.15, y: 258.64, round: 51 },
        {x: 343.12, y: 259.77, round: 52 },
    ]));
    torpedos.push(APP.waterObject(40908, [
        {x: 299.87, y: 224.34, round: 55 },
        {x: 308.16, y: 242.54, round: 56 },
    ]));
    torpedos.push(APP.waterObject(40909, [
        {x: 232.40, y: 264.27, round: 55 },
    ]));
    torpedos.push(APP.waterObject(40910, [
        {x: 244.85, y: 180.75, round: 66 },
        {x: 257.86, y: 195.95, round: 67 },
        {x: 270.86, y: 211.14, round: 68 },
        {x: 283.86, y: 226.34, round: 69 },
        {x: 296.87, y: 241.54, round: 70 },
        {x: 309.87, y: 256.73, round: 71 },
        {x: 322.88, y: 271.93, round: 72 },
        {x: 335.88, y: 287.12, round: 73 },
        {x: 348.88, y: 302.32, round: 74 },
    ]));
    torpedos.push(APP.waterObject(40911, [
        {x: 306.83, y: 308.19, round: 66 },
        {x: 324.59, y: 299.00, round: 67 },
        {x: 342.36, y: 289.82, round: 68 },
    ]));
    torpedos.push(APP.waterObject(40912, [
        {x: 214.53, y: 219.12, round: 72 },
        {x: 230.91, y: 230.59, round: 73 },
        {x: 247.30, y: 242.05, round: 74 },
        {x: 263.68, y: 253.52, round: 75 },
    ]));
    torpedos.push(APP.waterObject(40913, [
        {x: 336.93, y: 295.52, round: 73 },
        {x: 318.02, y: 289.00, round: 74 },
    ]));
    torpedos.push(APP.waterObject(40914, [
        {x: 317.47, y: 301.67, round: 91 },
        {x: 336.84, y: 296.70, round: 92 },
        {x: 356.21, y: 291.74, round: 93 },
        {x: 375.59, y: 286.77, round: 94 },
        {x: 394.96, y: 281.81, round: 95 },
        {x: 414.34, y: 276.84, round: 96 },
        {x: 433.71, y: 271.88, round: 97 },
    ]));
    torpedos.push(APP.waterObject(40915, [
        {x: 527.81, y: 321.13, round: 91 },
        {x: 541.50, y: 306.55, round: 92 },
        {x: 555.19, y: 291.97, round: 93 },
    ]));
    torpedos.push(APP.waterObject(40916, [
        {x: 414.14, y: 291.06, round: 99 },
        {x: 433.88, y: 287.86, round: 100 },
        {x: 453.63, y: 284.67, round: 101 },
        {x: 473.37, y: 281.47, round: 102 },
        {x: 493.11, y: 278.27, round: 103 },
        {x: 512.86, y: 275.08, round: 104 },
        {x: 532.60, y: 271.88, round: 105 },
        {x: 374.66, y: 297.45, round: 97 },
        {x: 394.40, y: 294.26, round: 98 },
    ]));
    torpedos.push(APP.waterObject(40917, [
        {x: 543.56, y: 281.15, round: 101 },
        {x: 525.05, y: 288.74, round: 102 },
        {x: 506.55, y: 296.32, round: 103 },
        {x: 488.04, y: 303.91, round: 104 },
        {x: 469.54, y: 311.50, round: 105 },
        {x: 451.03, y: 319.09, round: 106 },
        {x: 432.53, y: 326.67, round: 107 },
        {x: 414.02, y: 334.26, round: 108 },
        {x: 395.52, y: 341.85, round: 109 },
    ]));
    torpedos.push(APP.waterObject(40918, [
        {x: 428.94, y: 304.13, round: 103 },
        {x: 448.93, y: 303.50, round: 104 },
    ]));
    torpedos.push(APP.waterObject(40919, [
        {x: 593.62, y: 329.28, round: 110 },
        {x: 605.59, y: 270.49, round: 107 },
        {x: 601.60, y: 290.09, round: 108 },
        {x: 597.61, y: 309.68, round: 109 },
    ]));
    torpedos.push(APP.waterObject(40920, [
        {x: 498.76, y: 293.41, round: 110 },
        {x: 517.60, y: 286.69, round: 111 },
        {x: 536.44, y: 279.97, round: 112 },
        {x: 555.28, y: 273.25, round: 113 },
        {x: 630.62, y: 246.37, round: 117 },
        {x: 479.93, y: 300.13, round: 109 },
    ]));
    torpedos.push(APP.waterObject(40921, [
        {x: 644.34, y: 254.51, round: 113 },
        {x: 624.79, y: 250.27, round: 114 },
    ]));
    torpedos.push(APP.waterObject(40895, [
        {x: 117.89, y: 291.05, round: 2 },
        {x: 135.77, y: 282.10, round: 3 },
        {x: 153.66, y: 273.16, round: 4 },
        {x: 171.55, y: 264.21, round: 5 },
        {x: 189.43, y: 255.26, round: 6 },
        {x: 207.32, y: 246.31, round: 7 },
        {x: 225.21, y: 237.36, round: 8 },
        {x: 243.09, y: 228.41, round: 9 },
        {x: 260.98, y: 219.47, round: 10 },
    ]));

    otherSubmarines.push(APP.waterObject(40889, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 183.79, y: 244.00, round: 52 },
        {x: 147.97, y: 252.03, round: 24 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 163.86, y: 245.74, round: 50 },
        {x: 213.67, y: 241.38, round: 55 },
        {x: 203.71, y: 242.26, round: 54 },
        {x: 176.26, y: 223.74, round: 20 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 140.90, y: 259.10, round: 25 },
        {x: 169.19, y: 230.81, round: 21 },
        {x: 155.04, y: 244.96, round: 23 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 153.90, y: 246.61, round: 49 },
        {x: 193.75, y: 243.13, round: 53 },
        {x: 197.47, y: 202.53, round: 17 },
        {x: 162.11, y: 237.89, round: 22 },
    ]));
    otherSubmarines.push(APP.waterObject(40890, [
        {x: 275.40, y: 270.18, round: 76 },
        {x: 314.79, y: 277.12, round: 72 },
        {x: 304.94, y: 275.39, round: 73 },
        {x: 373.88, y: 287.54, round: 66 },
        {x: 354.18, y: 284.07, round: 68 },
        {x: 344.34, y: 282.33, round: 69 },
        {x: 324.64, y: 278.86, round: 71 },
        {x: 364.03, y: 285.81, round: 67 },
        {x: 383.73, y: 289.28, round: 65 },
        {x: 334.49, y: 280.60, round: 70 },
    ]));
    otherSubmarines.push(APP.waterObject(40891, [
        {x: 626.49, y: 315.46, round: 107 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 662.94, y: 309.03, round: 103 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 613.83, y: 300.37, round: 109 },
        {x: 667.94, y: 300.37, round: 102 },
        {x: 598.83, y: 274.39, round: 112 },
        {x: 603.83, y: 283.05, round: 111 },
        {x: 672.94, y: 291.71, round: 101 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 608.83, y: 291.71, round: 110 },
        {x: 635.89, y: 318.88, round: 106 },
    ]));
    otherSubmarines.push(APP.waterObject(40892, [
        {x: 316.16, y: 265.55, round: 24 },
        {x: 267.86, y: 252.61, round: 29 },
        {x: 248.55, y: 247.43, round: 31 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 229.23, y: 242.26, round: 33 },
        {x: 209.91, y: 237.08, round: 35 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 258.20, y: 250.02, round: 30 },
        {x: 219.57, y: 239.67, round: 34 },
        {x: 287.18, y: 257.79, round: 27 },
        {x: 238.89, y: 244.85, round: 32 },
    ]));
    otherSubmarines.push(APP.waterObject(40893, [
        {x: 392.33, y: 283.45, round: 48 },
        {x: 374.20, y: 275.00, round: 50 },
        {x: 383.27, y: 279.22, round: 49 },
        {x: 337.95, y: 258.09, round: 54 },
        {x: 319.83, y: 249.64, round: 56 },
        {x: 328.89, y: 253.87, round: 55 },
    ]));
    otherSubmarines.push(APP.waterObject(40894, [
        {x: 506.27, y: 293.70, round: 101 },
        {x: 207.50, y: 250.00, round: 3 },
        {x: 245.00, y: 250.00, round: 7 },
        {x: 468.08, y: 297.12, round: 105 },
        {x: 200.00, y: 250.00, round: 1 },
        {x: 515.67, y: 290.28, round: 100 },
        {x: 265.00, y: 250.00, round: 9 },
        {x: 225.00, y: 250.00, round: 5 },
        {x: 610.24, y: 293.70, round: 90 },
        {x: 487.48, y: 300.54, round: 103 },
        {x: 215.00, y: 250.00, round: 4 },
        {x: 553.26, y: 276.60, round: 96 },
        {x: 525.07, y: 286.86, round: 99 },
        {x: 543.86, y: 280.02, round: 97 },
        {x: 202.50, y: 250.00, round: 2 },
        {x: 448.08, y: 297.12, round: 107 },
        {x: 255.00, y: 250.00, round: 8 },
        {x: 235.00, y: 250.00, round: 6 },
        {x: 477.48, y: 300.54, round: 104 },
        {x: 591.45, y: 286.86, round: 92 },
        {x: 582.05, y: 283.44, round: 93 },
        {x: 428.08, y: 297.12, round: 109 },
        {x: 496.88, y: 297.12, round: 102 },
        {x: 563.26, y: 276.60, round: 95 },
        {x: 438.08, y: 297.12, round: 108 },
        {x: 458.08, y: 297.12, round: 106 },
        {x: 418.08, y: 297.12, round: 110 },
        {x: 572.66, y: 280.02, round: 94 },
        {x: 534.47, y: 283.44, round: 98 },
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
        APP.put(myScores, {score: 0, round: 19})
        APP.put(myScores, {score: 0, round: 20})
        APP.put(myScores, {score: 0, round: 21})
        APP.put(myScores, {score: 0, round: 22})
        APP.put(myScores, {score: 0, round: 23})
        APP.put(myScores, {score: 0, round: 24})
        APP.put(myScores, {score: 200, round: 25})
        APP.put(myScores, {score: 200, round: 26})
        APP.put(myScores, {score: 200, round: 27})
        APP.put(myScores, {score: 200, round: 28})
        APP.put(myScores, {score: 200, round: 29})
        APP.put(myScores, {score: 400, round: 30})
        APP.put(myScores, {score: 400, round: 31})
        APP.put(myScores, {score: 400, round: 32})
        APP.put(myScores, {score: 400, round: 33})
        APP.put(myScores, {score: 400, round: 34})
        APP.put(myScores, {score: 400, round: 35})
        APP.put(myScores, {score: 400, round: 36})
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
        APP.put(myScores, {score: 550, round: 49})
        APP.put(myScores, {score: 550, round: 50})
        APP.put(myScores, {score: 550, round: 51})
        APP.put(myScores, {score: 650, round: 52})
        APP.put(myScores, {score: 750, round: 53})
        APP.put(myScores, {score: 750, round: 54})
        APP.put(myScores, {score: 750, round: 55})
        APP.put(myScores, {score: 900, round: 56})
        APP.put(myScores, {score: 1050, round: 57})
        APP.put(myScores, {score: 1050, round: 58})
        APP.put(myScores, {score: 1050, round: 59})
        APP.put(myScores, {score: 1050, round: 60})
        APP.put(myScores, {score: 1050, round: 61})
        APP.put(myScores, {score: 1050, round: 62})
        APP.put(myScores, {score: 1050, round: 63})
        APP.put(myScores, {score: 1050, round: 64})
        APP.put(myScores, {score: 1050, round: 65})
        APP.put(myScores, {score: 1050, round: 66})
        APP.put(myScores, {score: 1050, round: 67})
        APP.put(myScores, {score: 1050, round: 68})
        APP.put(myScores, {score: 1150, round: 69})
        APP.put(myScores, {score: 1150, round: 70})
        APP.put(myScores, {score: 1150, round: 71})
        APP.put(myScores, {score: 1150, round: 72})
        APP.put(myScores, {score: 1150, round: 73})
        APP.put(myScores, {score: 1150, round: 74})
        APP.put(myScores, {score: 1150, round: 75})
        APP.put(myScores, {score: 1250, round: 76})
        APP.put(myScores, {score: 1400, round: 77})
        APP.put(myScores, {score: 1400, round: 78})
        APP.put(myScores, {score: 1400, round: 79})
        APP.put(myScores, {score: 1400, round: 80})
        APP.put(myScores, {score: 1400, round: 81})
        APP.put(myScores, {score: 1400, round: 82})
        APP.put(myScores, {score: 1400, round: 83})
        APP.put(myScores, {score: 1400, round: 84})
        APP.put(myScores, {score: 1400, round: 85})
        APP.put(myScores, {score: 1400, round: 86})
        APP.put(myScores, {score: 1400, round: 87})
        APP.put(myScores, {score: 1400, round: 88})
        APP.put(myScores, {score: 1400, round: 89})
        APP.put(myScores, {score: 1400, round: 90})
        APP.put(myScores, {score: 1400, round: 91})
        APP.put(myScores, {score: 1400, round: 92})
        APP.put(myScores, {score: 1400, round: 93})
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
        APP.put(myScores, {score: 1600, round: 105})
        APP.put(myScores, {score: 1600, round: 106})
        APP.put(myScores, {score: 1600, round: 107})
        APP.put(myScores, {score: 1600, round: 108})
        APP.put(myScores, {score: 1600, round: 109})
        APP.put(myScores, {score: 1600, round: 110})
        APP.put(myScores, {score: 1600, round: 111})
        APP.put(myScores, {score: 1600, round: 112})
        APP.put(myScores, {score: 1600, round: 113})
        APP.put(myScores, {score: 1600, round: 114})
        APP.put(myScores, {score: 1600, round: 115})
        APP.put(myScores, {score: 1700, round: 116})
        APP.put(myScores, {score: 1700, round: 117})
        APP.put(myScores, {score: 1700, round: 118})
        APP.put(myScores, {score: 1700, round: 119})
        APP.put(myScores, {score: 1700, round: 120})
        APP.put(myScores, {score: 1700, round: 121})
        APP.put(myScores, {score: 1700, round: 122})
        APP.put(myScores, {score: 1700, round: 123})
        APP.put(myScores, {score: 1700, round: 124})
        APP.put(myScores, {score: 1700, round: 125})
        APP.put(myScores, {score: 1700, round: 126})
        APP.put(myScores, {score: 1700, round: 127})
        APP.put(myScores, {score: 1700, round: 128})
        APP.put(myScores, {score: 1700, round: 129})
        APP.put(myScores, {score: 1700, round: 130})
        APP.put(myScores, {score: 1700, round: 131})
        APP.put(myScores, {score: 1700, round: 132})
        APP.put(myScores, {score: 1700, round: 133})
        APP.put(myScores, {score: 1700, round: 134})
        APP.put(myScores, {score: 1700, round: 135})
        APP.put(myScores, {score: 1700, round: 136})
        APP.put(myScores, {score: 1700, round: 137})
        APP.put(myScores, {score: 1700, round: 138})
        APP.put(myScores, {score: 1700, round: 139})
        APP.put(myScores, {score: 1700, round: 140})
        APP.put(myScores, {score: 1700, round: 141})
        APP.put(myScores, {score: 1700, round: 142})
        APP.put(myScores, {score: 1700, round: 143})
        APP.put(myScores, {score: 1700, round: 144})
        APP.put(myScores, {score: 1700, round: 145})
        APP.put(myScores, {score: 1700, round: 146})
        APP.put(myScores, {score: 1700, round: 147})
        APP.put(myScores, {score: 1700, round: 148})
        APP.put(myScores, {score: 1700, round: 149})

	return {
		gameId: 'game20161110_06_39_02',
		gameTime: '2016-11-10 06:39:02',
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