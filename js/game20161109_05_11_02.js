APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(53037, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.49, y: 299.82, round: 2, sonar: 'nonextended' },
        {x: 107.19, y: 298.11, round: 3, sonar: 'nonextended' },
        {x: 114.38, y: 295.98, round: 4, sonar: 'nonextended' },
        {x: 120.67, y: 291.90, round: 5, sonar: 'nonextended' },
        {x: 128.64, y: 285.85, round: 6, sonar: 'nonextended' },
        {x: 135.47, y: 278.55, round: 7, sonar: 'nonextended' },
        {x: 141.89, y: 270.88, round: 8, sonar: 'nonextended' },
        {x: 150.41, y: 265.64, round: 9, sonar: 'nonextended' },
        {x: 158.44, y: 259.68, round: 10, sonar: 'nonextended' },
        {x: 166.71, y: 254.06, round: 11, sonar: 'nonextended' },
        {x: 174.90, y: 248.32, round: 12, sonar: 'nonextended' },
        {x: 183.55, y: 243.31, round: 13, sonar: 'nonextended' },
        {x: 192.49, y: 238.82, round: 14, sonar: 'nonextended' },
        {x: 202.27, y: 236.72, round: 15, sonar: 'nonextended' },
        {x: 212.02, y: 234.51, round: 16, sonar: 'nonextended' },
        {x: 221.46, y: 231.23, round: 17, sonar: 'nonextended' },
        {x: 229.34, y: 225.07, round: 18, sonar: 'nonextended' },
        {x: 236.23, y: 217.82, round: 19, sonar: 'nonextended' },
        {x: 244.97, y: 212.96, round: 20, sonar: 'nonextended' },
        {x: 253.23, y: 207.32, round: 21, sonar: 'nonextended' },
        {x: 260.30, y: 200.25, round: 22, sonar: 'nonextended' },
        {x: 269.11, y: 195.51, round: 23, sonar: 'nonextended' },
        {x: 276.28, y: 188.55, round: 24, sonar: 'nonextended' },
        {x: 283.29, y: 181.42, round: 25, sonar: 'nonextended' },
        {x: 290.27, y: 174.26, round: 26, sonar: 'nonextended' },
        {x: 296.64, y: 166.54, round: 27, sonar: 'nonextended' },
        {x: 302.19, y: 158.23, round: 28, sonar: 'nonextended' },
        {x: 309.56, y: 151.46, round: 29, sonar: 'nonextended' },
        {x: 315.76, y: 143.62, round: 30, sonar: 'nonextended' },
        {x: 321.58, y: 135.49, round: 31, sonar: 'nonextended' },
        {x: 328.48, y: 128.24, round: 32, sonar: 'nonextended' },
        {x: 335.59, y: 121.22, round: 33, sonar: 'nonextended' },
        {x: 344.49, y: 116.66, round: 34, sonar: 'nonextended' },
        {x: 353.72, y: 112.80, round: 35, sonar: 'nonextended' },
        {x: 362.70, y: 108.40, round: 36, sonar: 'nonextended' },
        {x: 371.24, y: 103.21, round: 37, sonar: 'nonextended' },
        {x: 379.67, y: 97.82, round: 38, sonar: 'nonextended' },
        {x: 387.86, y: 92.08, round: 39, sonar: 'nonextended' },
        {x: 397.38, y: 89.03, round: 40, sonar: 'nonextended' },
        {x: 407.36, y: 88.43, round: 41, sonar: 'nonextended' },
        {x: 416.96, y: 91.24, round: 42, sonar: 'nonextended' },
        {x: 424.13, y: 93.45, round: 43, sonar: 'nonextended' },
        {x: 433.28, y: 97.47, round: 44, sonar: 'nonextended' },
        {x: 441.22, y: 103.54, round: 45, sonar: 'nonextended' },
        {x: 448.70, y: 110.19, round: 46, sonar: 'nonextended' },
        {x: 455.64, y: 117.39, round: 47, sonar: 'nonextended' },
        {x: 460.59, y: 126.08, round: 48, sonar: 'nonextended' },
        {x: 467.75, y: 133.06, round: 49, sonar: 'nonextended' },
        {x: 472.32, y: 141.95, round: 50, sonar: 'nonextended' },
        {x: 479.21, y: 149.20, round: 51, sonar: 'nonextended' },
        {x: 487.17, y: 155.25, round: 52, sonar: 'nonextended' },
        {x: 493.49, y: 163.00, round: 53, sonar: 'nonextended' },
        {x: 500.10, y: 170.51, round: 54, sonar: 'nonextended' },
        {x: 506.25, y: 178.39, round: 55, sonar: 'nonextended' },
        {x: 513.56, y: 185.21, round: 56, sonar: 'nonextended' },
        {x: 522.55, y: 189.59, round: 57, sonar: 'nonextended' },
        {x: 530.93, y: 195.06, round: 58, sonar: 'nonextended' },
        {x: 540.60, y: 197.60, round: 59, sonar: 'nonextended' },
        {x: 550.59, y: 197.32, round: 60, sonar: 'nonextended' },
        {x: 560.59, y: 197.27, round: 61, sonar: 'nonextended' },
        {x: 570.54, y: 198.34, round: 62, sonar: 'nonextended' },
        {x: 580.28, y: 196.10, round: 63, sonar: 'nonextended' },
        {x: 590.11, y: 194.25, round: 64, sonar: 'nonextended' },
        {x: 600.09, y: 194.86, round: 65, sonar: 'nonextended' },
        {x: 610.08, y: 194.49, round: 66, sonar: 'nonextended' },
        {x: 619.93, y: 192.73, round: 67, sonar: 'nonextended' },
        {x: 629.55, y: 189.99, round: 68, sonar: 'nonextended' },
        {x: 639.27, y: 187.66, round: 69, sonar: 'nonextended' },
        {x: 649.27, y: 187.54, round: 70, sonar: 'nonextended' },
        {x: 659.19, y: 186.28, round: 71, sonar: 'nonextended' },
        {x: 668.59, y: 182.86, round: 72, sonar: 'nonextended' },
        {x: 676.98, y: 177.42, round: 73, sonar: 'nonextended' },
        {x: 686.59, y: 174.66, round: 74, sonar: 'nonextended' },
        {x: 695.46, y: 170.04, round: 75, sonar: 'nonextended' },
        {x: 703.19, y: 163.69, round: 76, sonar: 'nonextended' },
        {x: 710.15, y: 156.52, round: 77, sonar: 'nonextended' },
        {x: 716.82, y: 149.07, round: 78, sonar: 'nonextended' },
        {x: 723.64, y: 141.75, round: 79, sonar: 'nonextended' },
        {x: 729.03, y: 136.54, round: 80, sonar: 'nonextended' },
        {x: 736.93, y: 130.40, round: 81, sonar: 'nonextended' },
        {x: 743.02, y: 122.47, round: 82, sonar: 'nonextended' },
        {x: 745.48, y: 115.39, round: 83, sonar: 'nonextended' },
        {x: 745.59, y: 105.39, round: 84, sonar: 'nonextended' },
        {x: 746.72, y: 95.45, round: 85, sonar: 'nonextended' },
        {x: 746.11, y: 85.47, round: 86, sonar: 'nonextended' },
        {x: 742.18, y: 76.28, round: 87, sonar: 'nonextended' },
        {x: 735.51, y: 68.83, round: 88, sonar: 'nonextended' },
        {x: 727.35, y: 63.04, round: 89, sonar: 'nonextended' },
        {x: 719.48, y: 56.86, round: 90, sonar: 'nonextended' },
        {x: 710.76, y: 51.98, round: 91, sonar: 'nonextended' },
        {x: 701.14, y: 49.24, round: 92, sonar: 'nonextended' },
        {x: 693.65, y: 48.87, round: 93, sonar: 'nonextended' },
        {x: 683.74, y: 50.18, round: 94, sonar: 'nonextended' },
        {x: 674.45, y: 53.88, round: 95, sonar: 'nonextended' },
        {x: 664.89, y: 56.83, round: 96, sonar: 'nonextended' },
        {x: 654.90, y: 57.24, round: 97, sonar: 'nonextended' },
        {x: 645.15, y: 59.47, round: 98, sonar: 'nonextended' },
        {x: 635.81, y: 63.05, round: 99, sonar: 'nonextended' },
        {x: 627.26, y: 68.23, round: 100, sonar: 'nonextended' },
        {x: 619.86, y: 74.96, round: 101, sonar: 'nonextended' },
        {x: 614.06, y: 83.10, round: 102, sonar: 'nonextended' },
        {x: 606.16, y: 89.24, round: 103, sonar: 'nonextended' },
        {x: 596.82, y: 92.80, round: 104, sonar: 'nonextended' },
        {x: 587.70, y: 96.91, round: 105, sonar: 'nonextended' },
        {x: 580.27, y: 103.61, round: 106, sonar: 'nonextended' },
        {x: 575.60, y: 109.47, round: 107, sonar: 'nonextended' },
        {x: 569.76, y: 117.59, round: 108, sonar: 'nonextended' },
        {x: 566.92, y: 127.18, round: 109, sonar: 'nonextended' },
        {x: 563.83, y: 136.69, round: 110, sonar: 'nonextended' },
        {x: 562.65, y: 146.62, round: 111, sonar: 'nonextended' },
        {x: 560.61, y: 156.41, round: 112, sonar: 'nonextended' },
        {x: 556.56, y: 165.55, round: 113, sonar: 'nonextended' },
        {x: 553.88, y: 175.19, round: 114, sonar: 'nonextended' },
        {x: 550.30, y: 184.52, round: 115, sonar: 'nonextended' },
        {x: 547.63, y: 194.16, round: 116, sonar: 'nonextended' },
        {x: 546.75, y: 204.12, round: 117, sonar: 'nonextended' },
        {x: 543.24, y: 213.48, round: 118, sonar: 'nonextended' },
        {x: 540.78, y: 223.18, round: 119, sonar: 'nonextended' },
        {x: 537.81, y: 232.72, round: 120, sonar: 'nonextended' },
        {x: 537.79, y: 242.72, round: 121, sonar: 'nonextended' },
        {x: 534.69, y: 252.23, round: 122, sonar: 'nonextended' },
        {x: 533.51, y: 262.16, round: 123, sonar: 'nonextended' },
        {x: 534.25, y: 272.13, round: 124, sonar: 'nonextended' },
        {x: 534.53, y: 282.13, round: 125, sonar: 'nonextended' },
        {x: 532.37, y: 289.31, round: 126, sonar: 'nonextended' },
        {x: 527.73, y: 298.17, round: 127, sonar: 'nonextended' },
        {x: 520.40, y: 304.97, round: 128, sonar: 'nonextended' },
        {x: 515.09, y: 313.44, round: 129, sonar: 'nonextended' },
        {x: 513.21, y: 320.70, round: 130, sonar: 'nonextended' },
        {x: 510.45, y: 330.31, round: 131, sonar: 'nonextended' },
        {x: 505.60, y: 339.06, round: 132, sonar: 'nonextended' },
        {x: 500.83, y: 347.85, round: 133, sonar: 'nonextended' },
        {x: 494.19, y: 355.32, round: 134, sonar: 'nonextended' },
        {x: 485.69, y: 360.60, round: 135, sonar: 'nonextended' },
        {x: 477.05, y: 365.63, round: 136, sonar: 'nonextended' },
        {x: 467.60, y: 368.91, round: 137, sonar: 'nonextended' },
        {x: 457.78, y: 370.79, round: 138, sonar: 'nonextended' },
        {x: 450.72, y: 373.32, round: 139, sonar: 'nonextended' },
        {x: 442.81, y: 379.44, round: 140, sonar: 'nonextended' },
        {x: 433.49, y: 383.07, round: 141, sonar: 'nonextended' },
        {x: 423.50, y: 383.56, round: 142, sonar: 'nonextended' },
        {x: 413.59, y: 382.23, round: 143, sonar: 'nonextended' },
        {x: 403.70, y: 383.67, round: 144, sonar: 'nonextended' },
        {x: 393.90, y: 381.66, round: 145, sonar: 'nonextended' },
        {x: 384.95, y: 377.21, round: 146, sonar: 'nonextended' },
        {x: 377.21, y: 370.87, round: 147, sonar: 'nonextended' },
        {x: 369.36, y: 364.67, round: 148, sonar: 'nonextended' },
        {x: 363.28, y: 356.74, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(53038, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.15, y: 273.72, round: 2, sonar: 'nonextended' },
        {x: 132.04, y: 272.67, round: 3, sonar: 'nonextended' },
        {x: 139.54, y: 272.63, round: 4, sonar: 'nonextended' },
        {x: 149.52, y: 272.09, round: 5, sonar: 'nonextended' },
        {x: 159.50, y: 272.70, round: 6, sonar: 'nonextended' },
        {x: 169.43, y: 273.91, round: 7, sonar: 'nonextended' },
        {x: 179.38, y: 274.91, round: 8, sonar: 'nonextended' },
        {x: 189.26, y: 273.39, round: 9, sonar: 'nonextended' },
        {x: 199.25, y: 272.89, round: 10, sonar: 'nonextended' },
        {x: 209.25, y: 273.06, round: 11, sonar: 'nonextended' },
        {x: 219.10, y: 271.34, round: 12, sonar: 'nonextended' },
        {x: 228.62, y: 268.27, round: 13, sonar: 'nonextended' },
        {x: 237.11, y: 262.99, round: 14, sonar: 'nonextended' },
        {x: 245.74, y: 257.94, round: 15, sonar: 'nonextended' },
        {x: 252.16, y: 250.27, round: 16, sonar: 'nonextended' },
        {x: 259.82, y: 243.85, round: 17, sonar: 'nonextended' },
        {x: 268.62, y: 239.10, round: 18, sonar: 'nonextended' },
        {x: 276.04, y: 232.39, round: 19, sonar: 'nonextended' },
        {x: 281.32, y: 223.90, round: 20, sonar: 'nonextended' },
        {x: 285.40, y: 214.77, round: 21, sonar: 'nonextended' },
        {x: 289.95, y: 205.87, round: 22, sonar: 'nonextended' },
        {x: 291.91, y: 196.06, round: 23, sonar: 'nonextended' },
        {x: 291.57, y: 186.06, round: 24, sonar: 'nonextended' },
        {x: 288.70, y: 176.49, round: 25, sonar: 'nonextended' },
        {x: 285.68, y: 166.95, round: 26, sonar: 'nonextended' },
        {x: 280.19, y: 158.59, round: 27, sonar: 'nonextended' },
        {x: 276.88, y: 149.16, round: 28, sonar: 'nonextended' },
        {x: 270.94, y: 141.11, round: 29, sonar: 'nonextended' },
        {x: 267.11, y: 131.88, round: 30, sonar: 'nonextended' },
        {x: 260.37, y: 124.49, round: 31, sonar: 'nonextended' },
        {x: 251.93, y: 119.13, round: 32, sonar: 'nonextended' },
        {x: 245.23, y: 111.70, round: 33, sonar: 'nonextended' },
        {x: 236.79, y: 106.34, round: 34, sonar: 'nonextended' },
        {x: 227.34, y: 103.07, round: 35, sonar: 'nonextended' },
        {x: 220.39, y: 100.25, round: 36, sonar: 'nonextended' },
        {x: 210.47, y: 99.01, round: 37, sonar: 'nonextended' },
        {x: 200.59, y: 100.55, round: 38, sonar: 'nonextended' },
        {x: 190.77, y: 98.67, round: 39, sonar: 'nonextended' },
        {x: 181.88, y: 94.08, round: 40, sonar: 'nonextended' },
        {x: 172.02, y: 92.40, round: 41, sonar: 'nonextended' },
        {x: 162.06, y: 93.23, round: 42, sonar: 'nonextended' },
        {x: 154.71, y: 94.74, round: 43, sonar: 'nonextended' },
        {x: 144.71, y: 94.91, round: 44, sonar: 'nonextended' },
        {x: 137.32, y: 96.14, round: 45, sonar: 'nonextended' },
        {x: 130.17, y: 98.41, round: 46, sonar: 'nonextended' },
        {x: 120.21, y: 99.29, round: 47, sonar: 'nonextended' },
        {x: 110.23, y: 100.04, round: 48, sonar: 'nonextended' },
        {x: 100.25, y: 99.51, round: 49, sonar: 'nonextended' },
        {x: 90.37, y: 101.06, round: 50, sonar: 'nonextended' },
        {x: 80.76, y: 103.81, round: 51, sonar: 'nonextended' },
        {x: 72.26, y: 109.09, round: 52, sonar: 'nonextended' },
        {x: 64.43, y: 115.31, round: 53, sonar: 'nonextended' },
        {x: 57.32, y: 122.34, round: 54, sonar: 'nonextended' },
        {x: 52.28, y: 127.89, round: 55, sonar: 'nonextended' },
        {x: 47.97, y: 136.92, round: 56, sonar: 'nonextended' },
        {x: 40.96, y: 144.04, round: 57, sonar: 'nonextended' },
        {x: 34.24, y: 147.39, round: 58, sonar: 'nonextended' },
        {x: 29.53, y: 149.05, round: 59, sonar: 'nonextended' },
        {x: 27.57, y: 150.60, round: 60, sonar: 'nonextended' },
        {x: 23.69, y: 153.76, round: 61, sonar: 'nonextended' },
        {x: 19.68, y: 160.09, round: 62, sonar: 'nonextended' },
        {x: 16.65, y: 169.62, round: 63, sonar: 'nonextended' },
        {x: 17.00, y: 179.62, round: 64, sonar: 'nonextended' },
        {x: 19.52, y: 189.29, round: 65, sonar: 'nonextended' },
        {x: 24.69, y: 197.85, round: 66, sonar: 'nonextended' },
        {x: 29.83, y: 206.43, round: 67, sonar: 'nonextended' },
        {x: 34.95, y: 215.02, round: 68, sonar: 'nonextended' },
        {x: 40.68, y: 223.22, round: 69, sonar: 'nonextended' },
        {x: 46.70, y: 231.20, round: 70, sonar: 'nonextended' },
        {x: 54.27, y: 237.74, round: 71, sonar: 'nonextended' },
        {x: 59.79, y: 246.07, round: 72, sonar: 'nonextended' },
        {x: 63.88, y: 255.20, round: 73, sonar: 'nonextended' },
        {x: 67.07, y: 264.68, round: 74, sonar: 'nonextended' },
        {x: 69.26, y: 271.85, round: 75, sonar: 'nonextended' },
        {x: 71.86, y: 281.50, round: 76, sonar: 'nonextended' },
        {x: 77.23, y: 289.94, round: 77, sonar: 'nonextended' },
        {x: 84.48, y: 296.83, round: 78, sonar: 'nonextended' },
        {x: 92.53, y: 302.76, round: 79, sonar: 'nonextended' },
        {x: 99.45, y: 309.99, round: 80, sonar: 'nonextended' },
        {x: 108.15, y: 314.91, round: 81, sonar: 'nonextended' },
        {x: 117.23, y: 319.11, round: 82, sonar: 'nonextended' },
        {x: 125.78, y: 324.29, round: 83, sonar: 'nonextended' },
        {x: 134.44, y: 329.28, round: 84, sonar: 'nonextended' },
        {x: 142.02, y: 335.81, round: 85, sonar: 'nonextended' },
        {x: 148.93, y: 338.72, round: 86, sonar: 'nonextended' },
        {x: 158.89, y: 339.58, round: 87, sonar: 'nonextended' },
        {x: 168.89, y: 339.35, round: 88, sonar: 'nonextended' },
        {x: 178.43, y: 342.33, round: 89, sonar: 'nonextended' },
        {x: 188.42, y: 342.75, round: 90, sonar: 'nonextended' },
        {x: 198.32, y: 344.20, round: 91, sonar: 'nonextended' },
        {x: 208.30, y: 343.60, round: 92, sonar: 'nonextended' },
        {x: 218.30, y: 343.44, round: 93, sonar: 'nonextended' },
        {x: 227.84, y: 346.44, round: 94, sonar: 'nonextended' },
        {x: 237.84, y: 346.55, round: 95, sonar: 'nonextended' },
        {x: 247.71, y: 348.15, round: 96, sonar: 'nonextended' },
        {x: 257.70, y: 347.73, round: 97, sonar: 'nonextended' },
        {x: 267.36, y: 350.32, round: 98, sonar: 'nonextended' },
        {x: 275.80, y: 355.67, round: 99, sonar: 'nonextended' },
        {x: 283.32, y: 362.27, round: 100, sonar: 'nonextended' },
        {x: 291.69, y: 367.74, round: 101, sonar: 'nonextended' },
        {x: 300.75, y: 371.96, round: 102, sonar: 'nonextended' },
        {x: 310.70, y: 373.00, round: 103, sonar: 'nonextended' },
        {x: 320.69, y: 373.35, round: 104, sonar: 'nonextended' },
        {x: 328.17, y: 373.86, round: 105, sonar: 'nonextended' },
        {x: 338.11, y: 372.72, round: 106, sonar: 'nonextended' },
        {x: 347.75, y: 370.06, round: 107, sonar: 'nonextended' },
        {x: 356.80, y: 365.81, round: 108, sonar: 'nonextended' },
        {x: 364.83, y: 359.85, round: 109, sonar: 'nonextended' },
        {x: 373.28, y: 354.50, round: 110, sonar: 'nonextended' },
        {x: 379.62, y: 346.77, round: 111, sonar: 'nonextended' },
        {x: 383.67, y: 337.62, round: 112, sonar: 'nonextended' },
        {x: 389.34, y: 329.39, round: 113, sonar: 'nonextended' },
        {x: 395.29, y: 321.35, round: 114, sonar: 'nonextended' },
        {x: 401.14, y: 313.24, round: 115, sonar: 'nonextended' },
        {x: 406.12, y: 307.63, round: 116, sonar: 'nonextended' },
        {x: 411.00, y: 298.90, round: 117, sonar: 'nonextended' },
        {x: 418.54, y: 292.33, round: 118, sonar: 'nonextended' },
        {x: 425.81, y: 285.47, round: 119, sonar: 'nonextended' },
        {x: 433.20, y: 278.73, round: 120, sonar: 'nonextended' },
        {x: 442.35, y: 274.70, round: 121, sonar: 'nonextended' },
        {x: 451.13, y: 269.92, round: 122, sonar: 'nonextended' },
        {x: 459.93, y: 265.17, round: 123, sonar: 'nonextended' },
        {x: 469.32, y: 261.73, round: 124, sonar: 'nonextended' },
        {x: 478.52, y: 257.81, round: 125, sonar: 'nonextended' },
        {x: 485.44, y: 254.92, round: 126, sonar: 'nonextended' },
        {x: 491.27, y: 250.20, round: 127, sonar: 'nonextended' },
        {x: 497.63, y: 242.48, round: 128, sonar: 'nonextended' },
        {x: 506.15, y: 237.24, round: 129, sonar: 'nonextended' },
        {x: 513.81, y: 230.81, round: 130, sonar: 'nonextended' },
        {x: 521.93, y: 224.98, round: 131, sonar: 'nonextended' },
        {x: 529.39, y: 218.31, round: 132, sonar: 'nonextended' },
        {x: 535.02, y: 210.05, round: 133, sonar: 'nonextended' },
        {x: 541.92, y: 202.81, round: 134, sonar: 'nonextended' },
        {x: 550.62, y: 197.88, round: 135, sonar: 'nonextended' },
        {x: 557.85, y: 190.97, round: 136, sonar: 'nonextended' },
        {x: 564.45, y: 183.46, round: 137, sonar: 'nonextended' },
        {x: 570.23, y: 175.30, round: 138, sonar: 'nonextended' },
        {x: 575.50, y: 166.80, round: 139, sonar: 'nonextended' },
        {x: 578.82, y: 157.37, round: 140, sonar: 'nonextended' },
        {x: 583.05, y: 148.31, round: 141, sonar: 'nonextended' },
        {x: 588.25, y: 139.77, round: 142, sonar: 'nonextended' },
        {x: 595.64, y: 133.03, round: 143, sonar: 'nonextended' },
        {x: 604.28, y: 127.99, round: 144, sonar: 'nonextended' },
        {x: 613.53, y: 124.20, round: 145, sonar: 'nonextended' },
        {x: 620.60, y: 121.69, round: 146, sonar: 'nonextended' },
        {x: 630.52, y: 120.40, round: 147, sonar: 'nonextended' },
        {x: 640.45, y: 119.22, round: 148, sonar: 'nonextended' },
        {x: 650.21, y: 117.06, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(53056, [
        {x: 10.67, y: 142.39, round: 55 },
        {x: 63.23, y: 113.46, round: 52 },
        {x: 45.71, y: 123.10, round: 53 },
        {x: 28.19, y: 132.75, round: 54 },
    ]));
    torpedos.push(APP.waterObject(53072, [
        {x: 543.49, y: 179.19, round: 136 },
        {x: 536.36, y: 160.51, round: 137 },
        {x: 529.23, y: 141.82, round: 138 },
        {x: 522.10, y: 123.13, round: 139 },
    ]));
    torpedos.push(APP.waterObject(53060, [
        {x: 716.28, y: 129.07, round: 79 },
        {x: 715.73, y: 109.08, round: 80 },
        {x: 715.19, y: 89.09, round: 81 },
        {x: 714.65, y: 69.09, round: 82 },
        {x: 714.10, y: 49.10, round: 83 },
    ]));
    torpedos.push(APP.waterObject(53062, [
        {x: 697.93, y: 130.38, round: 88 },
        {x: 730.46, y: 107.09, round: 86 },
        {x: 714.20, y: 118.74, round: 87 },
    ]));
    torpedos.push(APP.waterObject(53063, [
        {x: 564.55, y: 156.67, round: 111 },
        {x: 565.28, y: 176.66, round: 112 },
        {x: 566.00, y: 196.65, round: 113 },
        {x: 566.72, y: 216.64, round: 114 },
        {x: 567.44, y: 236.62, round: 115 },
        {x: 568.16, y: 256.61, round: 116 },
    ]));
    torpedos.push(APP.waterObject(53048, [
        {x: 210.74, y: 214.55, round: 17 },
        {x: 209.46, y: 194.59, round: 18 },
        {x: 208.18, y: 174.63, round: 19 },
        {x: 206.90, y: 154.68, round: 20 },
    ]));
    torpedos.push(APP.waterObject(53064, [
        {x: 420.19, y: 319.33, round: 116 },
        {x: 439.24, y: 325.43, round: 117 },
        {x: 458.29, y: 331.52, round: 118 },
        {x: 477.34, y: 337.61, round: 119 },
    ]));
    torpedos.push(APP.waterObject(53065, [
        {x: 489.68, y: 260.18, round: 121 },
        {x: 475.41, y: 274.19, round: 122 },
        {x: 461.14, y: 288.21, round: 123 },
        {x: 446.87, y: 302.22, round: 124 },
        {x: 432.60, y: 316.24, round: 125 },
        {x: 532.48, y: 218.13, round: 118 },
        {x: 518.21, y: 232.15, round: 119 },
        {x: 503.94, y: 246.16, round: 120 },
    ]));
    torpedos.push(APP.waterObject(53066, [
        {x: 468.04, y: 259.23, round: 123 },
        {x: 484.94, y: 248.54, round: 124 },
        {x: 501.85, y: 237.85, round: 125 },
        {x: 518.75, y: 227.16, round: 126 },
        {x: 535.65, y: 216.47, round: 127 },
        {x: 552.56, y: 205.78, round: 128 },
    ]));
    torpedos.push(APP.waterObject(53071, [
        {x: 512.20, y: 346.63, round: 135 },
        {x: 530.21, y: 337.94, round: 136 },
    ]));

    otherSubmarines.push(APP.waterObject(53041, [
        {x: 727.94, y: 90.15, round: 78 },
        {x: 754.68, y: 143.30, round: 84 },
        {x: 742.94, y: 116.13, round: 81 },
        {x: 563.83, y: 213.77, round: 119 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 578.83, y: 239.75, round: 116 },
        {x: 573.83, y: 231.09, round: 117 },
        {x: 568.83, y: 222.43, round: 118 },
        {x: 732.94, y: 98.81, round: 79 },
        {x: 752.94, y: 133.45, round: 83 },
        {x: 558.83, y: 205.11, round: 120 },
        {x: 553.83, y: 196.45, round: 121 },
        {x: 548.83, y: 187.79, round: 122 },
        {x: 747.94, y: 124.79, round: 82 },
        {x: 583.83, y: 248.41, round: 115 },
        {x: 737.94, y: 107.47, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(53042, [
        {x: 98.71, y: 152.11, round: 54 },
        {x: 611.34, y: 158.76, round: 107 },
        {x: 592.02, y: 153.59, round: 105 },
        {x: 78.35, y: 172.47, round: 51 },
        {x: 582.36, y: 151.00, round: 104 },
        {x: 108.68, y: 151.24, round: 55 },
        {x: 572.71, y: 148.41, round: 103 },
        {x: 601.68, y: 156.18, round: 106 },
        {x: 118.64, y: 150.37, round: 56 },
        {x: 630.66, y: 163.94, round: 109 },
        {x: 82.58, y: 163.41, round: 52 },
        {x: 621.00, y: 161.35, round: 108 },
        {x: 89.65, y: 156.34, round: 53 },
    ]));
    otherSubmarines.push(APP.waterObject(53043, [
        {x: 517.59, y: 142.88, round: 134 },
        {x: 562.90, y: 164.01, round: 139 },
        {x: 608.22, y: 185.15, round: 144 },
        {x: 526.65, y: 147.11, round: 135 },
        {x: 599.15, y: 180.92, round: 143 },
        {x: 617.28, y: 189.37, round: 145 },
        {x: 544.78, y: 155.56, round: 137 },
        {x: 571.97, y: 168.24, round: 140 },
        {x: 581.03, y: 172.47, round: 141 },
        {x: 535.71, y: 151.34, round: 136 },
        {x: 553.84, y: 159.79, round: 138 },
        {x: 626.34, y: 193.60, round: 146 },
        {x: 590.09, y: 176.69, round: 142 },
    ]));
    otherSubmarines.push(APP.waterObject(53044, [
        {x: 408.08, y: 297.12, round: 111 },
        {x: 368.08, y: 297.12, round: 115 },
        {x: 312.06, y: 205.51, round: 16 },
        {x: 332.06, y: 170.87, round: 20 },
        {x: 378.08, y: 297.12, round: 114 },
        {x: 317.06, y: 196.85, round: 17 },
        {x: 348.08, y: 297.12, round: 117 },
        {x: 398.08, y: 297.12, round: 112 },
        {x: 322.06, y: 188.19, round: 18 },
        {x: 342.06, y: 153.55, round: 22 },
        {x: 388.08, y: 297.12, round: 113 },
        {x: 418.08, y: 297.12, round: 110 },
        {x: 327.06, y: 179.53, round: 19 },
        {x: 358.08, y: 297.12, round: 116 },
        {x: 337.06, y: 162.21, round: 21 },
    ]));
    otherSubmarines.push(APP.waterObject(53039, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 609.75, y: 139.07, round: 101 },
        {x: 638.73, y: 146.83, round: 104 },
        {x: 629.07, y: 144.24, round: 103 },
        {x: 619.41, y: 141.66, round: 102 },
        {x: 176.26, y: 223.74, round: 20 },
        {x: 600.09, y: 136.48, round: 100 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
    ]));

        APP.put(myScores, {score: 0, round: 0})
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
        APP.put(myScores, {score: 0, round: 25})
        APP.put(myScores, {score: 0, round: 26})
        APP.put(myScores, {score: 0, round: 27})
        APP.put(myScores, {score: 0, round: 28})
        APP.put(myScores, {score: 0, round: 29})
        APP.put(myScores, {score: 0, round: 30})
        APP.put(myScores, {score: 0, round: 31})
        APP.put(myScores, {score: 0, round: 32})
        APP.put(myScores, {score: 0, round: 33})
        APP.put(myScores, {score: 0, round: 34})
        APP.put(myScores, {score: 0, round: 35})
        APP.put(myScores, {score: 0, round: 36})
        APP.put(myScores, {score: 0, round: 37})
        APP.put(myScores, {score: 0, round: 38})
        APP.put(myScores, {score: 0, round: 39})
        APP.put(myScores, {score: 0, round: 40})
        APP.put(myScores, {score: 0, round: 41})
        APP.put(myScores, {score: 0, round: 42})
        APP.put(myScores, {score: 0, round: 43})
        APP.put(myScores, {score: 0, round: 44})
        APP.put(myScores, {score: 0, round: 45})
        APP.put(myScores, {score: 0, round: 46})
        APP.put(myScores, {score: 0, round: 47})
        APP.put(myScores, {score: 0, round: 48})
        APP.put(myScores, {score: 0, round: 49})
        APP.put(myScores, {score: 0, round: 50})
        APP.put(myScores, {score: 0, round: 51})
        APP.put(myScores, {score: 0, round: 52})
        APP.put(myScores, {score: 0, round: 53})
        APP.put(myScores, {score: 0, round: 54})
        APP.put(myScores, {score: 0, round: 55})
        APP.put(myScores, {score: 0, round: 56})
        APP.put(myScores, {score: 0, round: 57})
        APP.put(myScores, {score: 0, round: 58})
        APP.put(myScores, {score: 0, round: 59})
        APP.put(myScores, {score: 0, round: 60})
        APP.put(myScores, {score: 0, round: 61})
        APP.put(myScores, {score: 0, round: 62})
        APP.put(myScores, {score: 0, round: 63})
        APP.put(myScores, {score: 0, round: 64})
        APP.put(myScores, {score: 0, round: 65})
        APP.put(myScores, {score: 0, round: 66})
        APP.put(myScores, {score: 0, round: 67})
        APP.put(myScores, {score: 0, round: 68})
        APP.put(myScores, {score: 0, round: 69})
        APP.put(myScores, {score: 0, round: 70})
        APP.put(myScores, {score: 0, round: 71})
        APP.put(myScores, {score: 0, round: 72})
        APP.put(myScores, {score: 0, round: 73})
        APP.put(myScores, {score: 0, round: 74})
        APP.put(myScores, {score: 0, round: 75})
        APP.put(myScores, {score: 0, round: 76})
        APP.put(myScores, {score: 0, round: 77})
        APP.put(myScores, {score: 0, round: 78})
        APP.put(myScores, {score: 0, round: 79})
        APP.put(myScores, {score: 0, round: 80})
        APP.put(myScores, {score: 0, round: 81})
        APP.put(myScores, {score: 0, round: 82})
        APP.put(myScores, {score: 0, round: 83})
        APP.put(myScores, {score: 0, round: 84})
        APP.put(myScores, {score: 0, round: 85})
        APP.put(myScores, {score: 0, round: 86})
        APP.put(myScores, {score: 0, round: 87})
        APP.put(myScores, {score: 0, round: 88})
        APP.put(myScores, {score: 0, round: 89})
        APP.put(myScores, {score: 0, round: 90})
        APP.put(myScores, {score: 0, round: 91})
        APP.put(myScores, {score: 0, round: 92})
        APP.put(myScores, {score: 0, round: 93})
        APP.put(myScores, {score: 0, round: 94})
        APP.put(myScores, {score: 0, round: 95})
        APP.put(myScores, {score: 0, round: 96})
        APP.put(myScores, {score: 0, round: 97})
        APP.put(myScores, {score: 0, round: 98})
        APP.put(myScores, {score: 0, round: 99})
        APP.put(myScores, {score: 0, round: 100})
        APP.put(myScores, {score: 0, round: 101})
        APP.put(myScores, {score: 0, round: 102})
        APP.put(myScores, {score: 0, round: 103})
        APP.put(myScores, {score: 0, round: 104})
        APP.put(myScores, {score: 0, round: 105})
        APP.put(myScores, {score: 0, round: 106})
        APP.put(myScores, {score: 0, round: 107})
        APP.put(myScores, {score: 0, round: 108})
        APP.put(myScores, {score: 0, round: 109})
        APP.put(myScores, {score: 0, round: 110})
        APP.put(myScores, {score: 0, round: 111})
        APP.put(myScores, {score: 0, round: 112})
        APP.put(myScores, {score: 0, round: 113})
        APP.put(myScores, {score: 0, round: 114})
        APP.put(myScores, {score: 0, round: 115})
        APP.put(myScores, {score: 0, round: 116})
        APP.put(myScores, {score: 0, round: 117})
        APP.put(myScores, {score: 0, round: 118})
        APP.put(myScores, {score: 0, round: 119})
        APP.put(myScores, {score: 0, round: 120})
        APP.put(myScores, {score: 0, round: 121})
        APP.put(myScores, {score: 0, round: 122})
        APP.put(myScores, {score: 0, round: 123})
        APP.put(myScores, {score: 0, round: 124})
        APP.put(myScores, {score: 0, round: 125})
        APP.put(myScores, {score: 0, round: 126})
        APP.put(myScores, {score: 0, round: 127})
        APP.put(myScores, {score: 0, round: 128})
        APP.put(myScores, {score: 0, round: 129})
        APP.put(myScores, {score: 0, round: 130})
        APP.put(myScores, {score: 0, round: 131})
        APP.put(myScores, {score: 0, round: 132})
        APP.put(myScores, {score: 0, round: 133})
        APP.put(myScores, {score: 0, round: 134})
        APP.put(myScores, {score: 0, round: 135})
        APP.put(myScores, {score: 0, round: 136})
        APP.put(myScores, {score: 0, round: 137})
        APP.put(myScores, {score: 0, round: 138})
        APP.put(myScores, {score: 0, round: 139})
        APP.put(myScores, {score: 100, round: 140})
        APP.put(myScores, {score: 100, round: 141})
        APP.put(myScores, {score: 100, round: 142})
        APP.put(myScores, {score: 100, round: 143})
        APP.put(myScores, {score: 100, round: 144})
        APP.put(myScores, {score: 100, round: 145})
        APP.put(myScores, {score: 100, round: 146})
        APP.put(myScores, {score: 100, round: 147})
        APP.put(myScores, {score: 100, round: 148})
        APP.put(myScores, {score: 100, round: 149})

	return {
		gameId: 'game20161109_05_11_02',
		gameTime: '2016-11-09 05:11:02',
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