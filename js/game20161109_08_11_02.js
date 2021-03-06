APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(212, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.04, y: 298.56, round: 2, sonar: 'nonextended' },
        {x: 105.05, y: 294.57, round: 3, sonar: 'nonextended' },
        {x: 108.14, y: 287.73, round: 4, sonar: 'nonextended' },
        {x: 109.40, y: 277.81, round: 5, sonar: 'nonextended' },
        {x: 112.65, y: 268.36, round: 6, sonar: 'nonextended' },
        {x: 118.60, y: 260.31, round: 7, sonar: 'nonextended' },
        {x: 123.20, y: 251.44, round: 8, sonar: 'nonextended' },
        {x: 128.09, y: 242.71, round: 9, sonar: 'nonextended' },
        {x: 134.37, y: 234.93, round: 10, sonar: 'nonextended' },
        {x: 137.96, y: 225.60, round: 11, sonar: 'nonextended' },
        {x: 138.99, y: 215.65, round: 12, sonar: 'nonextended' },
        {x: 138.03, y: 205.70, round: 13, sonar: 'nonextended' },
        {x: 135.93, y: 195.92, round: 14, sonar: 'nonextended' },
        {x: 130.82, y: 187.32, round: 15, sonar: 'nonextended' },
        {x: 124.92, y: 179.25, round: 16, sonar: 'nonextended' },
        {x: 117.64, y: 172.39, round: 17, sonar: 'nonextended' },
        {x: 112.42, y: 163.86, round: 18, sonar: 'nonextended' },
        {x: 110.35, y: 154.08, round: 19, sonar: 'nonextended' },
        {x: 111.72, y: 144.17, round: 20, sonar: 'nonextended' },
        {x: 111.07, y: 134.19, round: 21, sonar: 'nonextended' },
        {x: 112.23, y: 126.78, round: 22, sonar: 'nonextended' },
        {x: 115.36, y: 117.29, round: 23, sonar: 'nonextended' },
        {x: 115.53, y: 107.29, round: 24, sonar: 'nonextended' },
        {x: 118.38, y: 97.70, round: 25, sonar: 'nonextended' },
        {x: 123.47, y: 89.09, round: 26, sonar: 'nonextended' },
        {x: 129.66, y: 81.24, round: 27, sonar: 'nonextended' },
        {x: 134.68, y: 75.67, round: 28, sonar: 'nonextended' },
        {x: 143.31, y: 70.62, round: 29, sonar: 'nonextended' },
        {x: 153.12, y: 68.70, round: 30, sonar: 'nonextended' },
        {x: 162.18, y: 64.46, round: 31, sonar: 'nonextended' },
        {x: 171.65, y: 61.24, round: 32, sonar: 'nonextended' },
        {x: 181.42, y: 59.13, round: 33, sonar: 'nonextended' },
        {x: 191.42, y: 59.09, round: 34, sonar: 'nonextended' },
        {x: 201.15, y: 56.75, round: 35, sonar: 'nonextended' },
        {x: 211.08, y: 55.59, round: 36, sonar: 'nonextended' },
        {x: 220.33, y: 51.79, round: 37, sonar: 'nonextended' },
        {x: 230.01, y: 49.27, round: 38, sonar: 'nonextended' },
        {x: 239.71, y: 46.84, round: 39, sonar: 'nonextended' },
        {x: 249.71, y: 46.79, round: 40, sonar: 'nonextended' },
        {x: 259.70, y: 46.54, round: 41, sonar: 'nonextended' },
        {x: 269.70, y: 46.55, round: 42, sonar: 'nonextended' },
        {x: 279.36, y: 43.97, round: 43, sonar: 'nonextended' },
        {x: 289.36, y: 44.29, round: 44, sonar: 'nonextended' },
        {x: 299.05, y: 46.76, round: 45, sonar: 'nonextended' },
        {x: 308.12, y: 50.96, round: 46, sonar: 'nonextended' },
        {x: 317.28, y: 54.98, round: 47, sonar: 'nonextended' },
        {x: 324.94, y: 61.41, round: 48, sonar: 'nonextended' },
        {x: 331.52, y: 65.02, round: 49, sonar: 'nonextended' },
        {x: 341.14, y: 67.72, round: 50, sonar: 'nonextended' },
        {x: 350.68, y: 70.71, round: 51, sonar: 'nonextended' },
        {x: 357.93, y: 72.65, round: 52, sonar: 'nonextended' },
        {x: 367.90, y: 73.45, round: 53, sonar: 'nonextended' },
        {x: 377.72, y: 75.35, round: 54, sonar: 'nonextended' },
        {x: 386.88, y: 79.35, round: 55, sonar: 'nonextended' },
        {x: 396.83, y: 80.37, round: 56, sonar: 'nonextended' },
        {x: 406.58, y: 82.61, round: 57, sonar: 'nonextended' },
        {x: 416.53, y: 81.63, round: 58, sonar: 'nonextended' },
        {x: 426.51, y: 81.07, round: 59, sonar: 'nonextended' },
        {x: 436.01, y: 77.93, round: 60, sonar: 'nonextended' },
        {x: 445.15, y: 73.88, round: 61, sonar: 'nonextended' },
        {x: 452.11, y: 71.08, round: 62, sonar: 'nonextended' },
        {x: 461.16, y: 66.82, round: 63, sonar: 'nonextended' },
        {x: 471.12, y: 65.92, round: 64, sonar: 'nonextended' },
        {x: 480.90, y: 67.99, round: 65, sonar: 'nonextended' },
        {x: 488.01, y: 70.38, round: 66, sonar: 'nonextended' },
        {x: 497.96, y: 71.34, round: 67, sonar: 'nonextended' },
        {x: 507.94, y: 71.94, round: 68, sonar: 'nonextended' },
        {x: 517.27, y: 75.54, round: 69, sonar: 'nonextended' },
        {x: 526.89, y: 78.27, round: 70, sonar: 'nonextended' },
        {x: 536.87, y: 79.02, round: 71, sonar: 'nonextended' },
        {x: 546.71, y: 80.78, round: 72, sonar: 'nonextended' },
        {x: 556.51, y: 82.78, round: 73, sonar: 'nonextended' },
        {x: 566.25, y: 85.02, round: 74, sonar: 'nonextended' },
        {x: 576.18, y: 83.81, round: 75, sonar: 'nonextended' },
        {x: 586.11, y: 85.01, round: 76, sonar: 'nonextended' },
        {x: 596.08, y: 84.29, round: 77, sonar: 'nonextended' },
        {x: 605.89, y: 86.23, round: 78, sonar: 'nonextended' },
        {x: 614.98, y: 90.40, round: 79, sonar: 'nonextended' },
        {x: 623.45, y: 95.71, round: 80, sonar: 'nonextended' },
        {x: 631.63, y: 101.47, round: 81, sonar: 'nonextended' },
        {x: 640.78, y: 105.51, round: 82, sonar: 'nonextended' },
        {x: 650.70, y: 106.78, round: 83, sonar: 'nonextended' },
        {x: 657.46, y: 110.02, round: 84, sonar: 'nonextended' },
        {x: 664.52, y: 117.11, round: 85, sonar: 'nonextended' },
        {x: 671.31, y: 124.44, round: 86, sonar: 'nonextended' },
        {x: 678.64, y: 131.25, round: 87, sonar: 'nonextended' },
        {x: 685.76, y: 138.27, round: 88, sonar: 'nonextended' },
        {x: 691.33, y: 146.57, round: 89, sonar: 'nonextended' },
        {x: 699.21, y: 152.74, round: 90, sonar: 'nonextended' },
        {x: 704.77, y: 161.05, round: 91, sonar: 'nonextended' },
        {x: 707.12, y: 168.17, round: 92, sonar: 'nonextended' },
        {x: 709.38, y: 177.91, round: 93, sonar: 'nonextended' },
        {x: 709.62, y: 187.91, round: 94, sonar: 'nonextended' },
        {x: 712.54, y: 197.47, round: 95, sonar: 'nonextended' },
        {x: 716.23, y: 206.77, round: 96, sonar: 'nonextended' },
        {x: 721.28, y: 215.40, round: 97, sonar: 'nonextended' },
        {x: 728.75, y: 222.05, round: 98, sonar: 'nonextended' },
        {x: 734.68, y: 230.10, round: 99, sonar: 'nonextended' },
        {x: 737.73, y: 239.62, round: 100, sonar: 'nonextended' },
        {x: 742.14, y: 248.60, round: 101, sonar: 'nonextended' },
        {x: 743.37, y: 256.00, round: 102, sonar: 'nonextended' },
        {x: 741.64, y: 265.84, round: 103, sonar: 'nonextended' },
        {x: 737.95, y: 275.14, round: 104, sonar: 'nonextended' },
        {x: 732.01, y: 283.18, round: 105, sonar: 'nonextended' },
        {x: 724.21, y: 289.44, round: 106, sonar: 'nonextended' },
        {x: 715.58, y: 294.49, round: 107, sonar: 'nonextended' },
        {x: 706.87, y: 299.40, round: 108, sonar: 'nonextended' },
        {x: 697.81, y: 303.64, round: 109, sonar: 'nonextended' },
        {x: 691.81, y: 308.14, round: 110, sonar: 'nonextended' },
        {x: 684.07, y: 314.47, round: 111, sonar: 'nonextended' },
        {x: 674.96, y: 318.60, round: 112, sonar: 'nonextended' },
        {x: 669.11, y: 323.29, round: 113, sonar: 'nonextended' },
        {x: 660.24, y: 327.90, round: 114, sonar: 'nonextended' },
        {x: 650.72, y: 330.98, round: 115, sonar: 'nonextended' },
        {x: 640.80, y: 332.20, round: 116, sonar: 'nonextended' },
        {x: 630.80, y: 332.28, round: 117, sonar: 'nonextended' },
        {x: 623.61, y: 330.13, round: 118, sonar: 'nonextended' },
        {x: 614.11, y: 327.02, round: 119, sonar: 'nonextended' },
        {x: 604.12, y: 326.65, round: 120, sonar: 'nonextended' },
        {x: 594.12, y: 327.02, round: 121, sonar: 'nonextended' },
        {x: 586.63, y: 327.25, round: 122, sonar: 'nonextended' },
        {x: 576.77, y: 328.92, round: 123, sonar: 'nonextended' },
        {x: 567.39, y: 332.39, round: 124, sonar: 'nonextended' },
        {x: 559.21, y: 338.15, round: 125, sonar: 'nonextended' },
        {x: 550.38, y: 342.84, round: 126, sonar: 'nonextended' },
        {x: 542.47, y: 348.95, round: 127, sonar: 'nonextended' },
        {x: 536.90, y: 357.26, round: 128, sonar: 'nonextended' },
        {x: 530.02, y: 364.51, round: 129, sonar: 'nonextended' },
        {x: 521.37, y: 369.54, round: 130, sonar: 'nonextended' },
        {x: 512.85, y: 374.78, round: 131, sonar: 'nonextended' },
        {x: 503.78, y: 378.99, round: 132, sonar: 'nonextended' },
        {x: 494.27, y: 382.07, round: 133, sonar: 'nonextended' },
        {x: 484.46, y: 384.04, round: 134, sonar: 'nonextended' },
        {x: 474.48, y: 383.52, round: 135, sonar: 'nonextended' },
        {x: 464.51, y: 384.34, round: 136, sonar: 'nonextended' },
        {x: 457.03, y: 383.83, round: 137, sonar: 'nonextended' },
        {x: 447.15, y: 385.40, round: 138, sonar: 'nonextended' },
        {x: 439.71, y: 386.32, round: 139, sonar: 'nonextended' },
        {x: 429.71, y: 386.51, round: 140, sonar: 'nonextended' },
        {x: 422.45, y: 388.37, round: 141, sonar: 'nonextended' },
        {x: 412.53, y: 389.70, round: 142, sonar: 'nonextended' },
        {x: 402.58, y: 390.66, round: 143, sonar: 'nonextended' },
        {x: 392.60, y: 391.34, round: 144, sonar: 'nonextended' },
        {x: 382.78, y: 389.48, round: 145, sonar: 'nonextended' },
        {x: 372.79, y: 389.02, round: 146, sonar: 'nonextended' },
        {x: 365.86, y: 386.14, round: 147, sonar: 'nonextended' },
        {x: 356.87, y: 381.77, round: 148, sonar: 'nonextended' },
        {x: 347.01, y: 380.10, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(213, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.26, y: 273.93, round: 2, sonar: 'nonextended' },
        {x: 131.45, y: 271.21, round: 3, sonar: 'nonextended' },
        {x: 136.23, y: 265.42, round: 4, sonar: 'nonextended' },
        {x: 139.70, y: 256.04, round: 5, sonar: 'nonextended' },
        {x: 144.59, y: 247.32, round: 6, sonar: 'nonextended' },
        {x: 150.54, y: 239.29, round: 7, sonar: 'nonextended' },
        {x: 157.02, y: 231.67, round: 8, sonar: 'nonextended' },
        {x: 164.46, y: 224.98, round: 9, sonar: 'nonextended' },
        {x: 172.74, y: 219.38, round: 10, sonar: 'nonextended' },
        {x: 179.66, y: 212.16, round: 11, sonar: 'nonextended' },
        {x: 185.53, y: 204.06, round: 12, sonar: 'nonextended' },
        {x: 189.94, y: 195.09, round: 13, sonar: 'nonextended' },
        {x: 196.28, y: 187.35, round: 14, sonar: 'nonextended' },
        {x: 201.63, y: 178.91, round: 15, sonar: 'nonextended' },
        {x: 205.03, y: 169.50, round: 16, sonar: 'nonextended' },
        {x: 208.53, y: 160.13, round: 17, sonar: 'nonextended' },
        {x: 214.46, y: 152.08, round: 18, sonar: 'nonextended' },
        {x: 221.21, y: 144.70, round: 19, sonar: 'nonextended' },
        {x: 226.78, y: 136.40, round: 20, sonar: 'nonextended' },
        {x: 231.10, y: 127.38, round: 21, sonar: 'nonextended' },
        {x: 235.44, y: 118.37, round: 22, sonar: 'nonextended' },
        {x: 242.19, y: 110.99, round: 23, sonar: 'nonextended' },
        {x: 248.20, y: 103.00, round: 24, sonar: 'nonextended' },
        {x: 255.75, y: 96.44, round: 25, sonar: 'nonextended' },
        {x: 262.09, y: 92.44, round: 26, sonar: 'nonextended' },
        {x: 270.90, y: 87.70, round: 27, sonar: 'nonextended' },
        {x: 279.19, y: 82.11, round: 28, sonar: 'nonextended' },
        {x: 287.82, y: 77.06, round: 29, sonar: 'nonextended' },
        {x: 297.38, y: 74.13, round: 30, sonar: 'nonextended' },
        {x: 307.24, y: 72.45, round: 31, sonar: 'nonextended' },
        {x: 316.21, y: 68.04, round: 32, sonar: 'nonextended' },
        {x: 326.13, y: 66.77, round: 33, sonar: 'nonextended' },
        {x: 336.01, y: 65.24, round: 34, sonar: 'nonextended' },
        {x: 344.93, y: 60.70, round: 35, sonar: 'nonextended' },
        {x: 354.23, y: 57.04, round: 36, sonar: 'nonextended' },
        {x: 364.09, y: 55.35, round: 37, sonar: 'nonextended' },
        {x: 374.07, y: 54.79, round: 38, sonar: 'nonextended' },
        {x: 383.94, y: 56.38, round: 39, sonar: 'nonextended' },
        {x: 393.88, y: 57.47, round: 40, sonar: 'nonextended' },
        {x: 403.77, y: 55.99, round: 41, sonar: 'nonextended' },
        {x: 412.80, y: 51.68, round: 42, sonar: 'nonextended' },
        {x: 422.66, y: 50.00, round: 43, sonar: 'nonextended' },
        {x: 430.04, y: 51.30, round: 44, sonar: 'nonextended' },
        {x: 440.00, y: 52.21, round: 45, sonar: 'nonextended' },
        {x: 449.99, y: 51.80, round: 46, sonar: 'nonextended' },
        {x: 459.67, y: 54.32, round: 47, sonar: 'nonextended' },
        {x: 469.64, y: 55.06, round: 48, sonar: 'nonextended' },
        {x: 479.17, y: 58.11, round: 49, sonar: 'nonextended' },
        {x: 489.06, y: 59.59, round: 50, sonar: 'nonextended' },
        {x: 498.00, y: 64.07, round: 51, sonar: 'nonextended' },
        {x: 506.15, y: 69.86, round: 52, sonar: 'nonextended' },
        {x: 514.30, y: 75.65, round: 53, sonar: 'nonextended' },
        {x: 522.57, y: 81.27, round: 54, sonar: 'nonextended' },
        {x: 530.07, y: 87.89, round: 55, sonar: 'nonextended' },
        {x: 538.30, y: 93.58, round: 56, sonar: 'nonextended' },
        {x: 547.90, y: 96.36, round: 57, sonar: 'nonextended' },
        {x: 556.93, y: 100.66, round: 58, sonar: 'nonextended' },
        {x: 564.77, y: 106.87, round: 59, sonar: 'nonextended' },
        {x: 571.99, y: 113.78, round: 60, sonar: 'nonextended' },
        {x: 579.62, y: 120.25, round: 61, sonar: 'nonextended' },
        {x: 586.09, y: 127.88, round: 62, sonar: 'nonextended' },
        {x: 593.22, y: 134.89, round: 63, sonar: 'nonextended' },
        {x: 598.98, y: 143.06, round: 64, sonar: 'nonextended' },
        {x: 605.01, y: 151.04, round: 65, sonar: 'nonextended' },
        {x: 613.00, y: 157.06, round: 66, sonar: 'nonextended' },
        {x: 621.64, y: 162.09, round: 67, sonar: 'nonextended' },
        {x: 628.85, y: 169.02, round: 68, sonar: 'nonextended' },
        {x: 636.40, y: 175.57, round: 69, sonar: 'nonextended' },
        {x: 641.79, y: 183.99, round: 70, sonar: 'nonextended' },
        {x: 644.45, y: 193.63, round: 71, sonar: 'nonextended' },
        {x: 644.60, y: 201.13, round: 72, sonar: 'nonextended' },
        {x: 648.01, y: 210.53, round: 73, sonar: 'nonextended' },
        {x: 652.91, y: 219.25, round: 74, sonar: 'nonextended' },
        {x: 659.77, y: 226.52, round: 75, sonar: 'nonextended' },
        {x: 667.43, y: 232.95, round: 76, sonar: 'nonextended' },
        {x: 674.48, y: 235.51, round: 77, sonar: 'nonextended' },
        {x: 684.46, y: 236.14, round: 78, sonar: 'nonextended' },
        {x: 694.43, y: 236.94, round: 79, sonar: 'nonextended' },
        {x: 704.19, y: 234.77, round: 80, sonar: 'nonextended' },
        {x: 713.87, y: 232.25, round: 81, sonar: 'nonextended' },
        {x: 723.67, y: 230.26, round: 82, sonar: 'nonextended' },
        {x: 733.40, y: 227.98, round: 83, sonar: 'nonextended' },
        {x: 741.81, y: 222.56, round: 84, sonar: 'nonextended' },
        {x: 746.82, y: 216.99, round: 85, sonar: 'nonextended' },
        {x: 754.96, y: 211.18, round: 86, sonar: 'nonextended' },
        {x: 761.35, y: 203.48, round: 87, sonar: 'nonextended' },
        {x: 766.37, y: 194.83, round: 88, sonar: 'nonextended' },
        {x: 773.02, y: 187.37, round: 89, sonar: 'nonextended' },
        {x: 779.26, y: 179.55, round: 90, sonar: 'nonextended' },
        {x: 785.63, y: 171.84, round: 91, sonar: 'nonextended' },
        {x: 788.14, y: 164.77, round: 92, sonar: 'nonextended' },
        {x: 788.99, y: 154.81, round: 93, sonar: 'nonextended' },
        {x: 790.28, y: 144.89, round: 94, sonar: 'nonextended' },
        {x: 788.60, y: 135.04, round: 95, sonar: 'nonextended' },
        {x: 785.55, y: 125.51, round: 96, sonar: 'nonextended' },
        {x: 781.95, y: 118.93, round: 97, sonar: 'nonextended' },
        {x: 778.37, y: 109.59, round: 98, sonar: 'nonextended' },
        {x: 772.77, y: 101.31, round: 99, sonar: 'nonextended' },
        {x: 769.72, y: 94.46, round: 100, sonar: 'nonextended' },
        {x: 764.94, y: 88.68, round: 101, sonar: 'nonextended' },
        {x: 756.63, y: 83.12, round: 102, sonar: 'nonextended' },
        {x: 749.95, y: 75.68, round: 103, sonar: 'nonextended' },
        {x: 742.50, y: 69.00, round: 104, sonar: 'nonextended' },
        {x: 733.78, y: 64.11, round: 105, sonar: 'nonextended' },
        {x: 724.71, y: 59.90, round: 106, sonar: 'nonextended' },
        {x: 717.33, y: 58.54, round: 107, sonar: 'nonextended' },
        {x: 707.36, y: 57.86, round: 108, sonar: 'nonextended' },
        {x: 697.74, y: 60.62, round: 109, sonar: 'nonextended' },
        {x: 689.50, y: 66.28, round: 110, sonar: 'nonextended' },
        {x: 681.58, y: 72.39, round: 111, sonar: 'nonextended' },
        {x: 674.25, y: 79.19, round: 112, sonar: 'nonextended' },
        {x: 666.42, y: 85.41, round: 113, sonar: 'nonextended' },
        {x: 658.17, y: 91.07, round: 114, sonar: 'nonextended' },
        {x: 650.62, y: 97.62, round: 115, sonar: 'nonextended' },
        {x: 644.15, y: 105.24, round: 116, sonar: 'nonextended' },
        {x: 639.63, y: 114.16, round: 117, sonar: 'nonextended' },
        {x: 635.64, y: 123.33, round: 118, sonar: 'nonextended' },
        {x: 630.20, y: 131.73, round: 119, sonar: 'nonextended' },
        {x: 624.10, y: 139.65, round: 120, sonar: 'nonextended' },
        {x: 618.96, y: 148.23, round: 121, sonar: 'nonextended' },
        {x: 612.03, y: 155.43, round: 122, sonar: 'nonextended' },
        {x: 604.69, y: 162.23, round: 123, sonar: 'nonextended' },
        {x: 597.20, y: 168.85, round: 124, sonar: 'nonextended' },
        {x: 589.82, y: 175.60, round: 125, sonar: 'nonextended' },
        {x: 580.63, y: 179.55, round: 126, sonar: 'nonextended' },
        {x: 571.62, y: 183.89, round: 127, sonar: 'nonextended' },
        {x: 562.03, y: 186.70, round: 128, sonar: 'nonextended' },
        {x: 552.62, y: 190.11, round: 129, sonar: 'nonextended' },
        {x: 543.63, y: 194.48, round: 130, sonar: 'nonextended' },
        {x: 534.24, y: 197.90, round: 131, sonar: 'nonextended' },
        {x: 525.39, y: 202.57, round: 132, sonar: 'nonextended' },
        {x: 517.26, y: 208.39, round: 133, sonar: 'nonextended' },
        {x: 512.11, y: 213.84, round: 134, sonar: 'nonextended' },
        {x: 503.52, y: 218.97, round: 135, sonar: 'nonextended' },
        {x: 494.65, y: 223.59, round: 136, sonar: 'nonextended' },
        {x: 487.90, y: 230.96, round: 137, sonar: 'nonextended' },
        {x: 479.53, y: 236.44, round: 138, sonar: 'nonextended' },
        {x: 471.76, y: 242.73, round: 139, sonar: 'nonextended' },
        {x: 463.30, y: 248.06, round: 140, sonar: 'nonextended' },
        {x: 455.61, y: 254.46, round: 141, sonar: 'nonextended' },
        {x: 446.80, y: 259.18, round: 142, sonar: 'nonextended' },
        {x: 437.02, y: 261.27, round: 143, sonar: 'nonextended' },
        {x: 428.23, y: 266.04, round: 144, sonar: 'nonextended' },
        {x: 418.43, y: 268.01, round: 145, sonar: 'nonextended' },
        {x: 408.47, y: 268.91, round: 146, sonar: 'nonextended' },
        {x: 398.96, y: 272.00, round: 147, sonar: 'nonextended' },
        {x: 389.86, y: 276.16, round: 148, sonar: 'nonextended' },
        {x: 380.38, y: 279.33, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(232, [
        {x: 704.45, y: 235.43, round: 79 },
        {x: 724.44, y: 234.72, round: 80 },
        {x: 744.42, y: 234.01, round: 81 },
        {x: 764.41, y: 233.30, round: 82 },
        {x: 784.40, y: 232.59, round: 83 },
        {x: 804.39, y: 231.89, round: 84 },
    ]));
    torpedos.push(APP.waterObject(233, [
        {x: 767.49, y: 135.27, round: 88 },
        {x: 786.90, y: 140.10, round: 89 },
        {x: 806.30, y: 144.93, round: 90 },
        {x: 651.04, y: 106.30, round: 82 },
        {x: 670.45, y: 111.13, round: 83 },
        {x: 689.85, y: 115.96, round: 84 },
        {x: 709.26, y: 120.78, round: 85 },
        {x: 728.67, y: 125.61, round: 86 },
        {x: 748.08, y: 130.44, round: 87 },
    ]));
    torpedos.push(APP.waterObject(234, [
        {x: 698.28, y: 135.04, round: 88 },
        {x: 717.92, y: 138.83, round: 89 },
        {x: 737.55, y: 142.63, round: 90 },
        {x: 757.19, y: 146.42, round: 91 },
        {x: 776.83, y: 150.22, round: 92 },
    ]));
    torpedos.push(APP.waterObject(235, [
        {x: 770.98, y: 154.49, round: 93 },
        {x: 753.83, y: 144.20, round: 94 },
        {x: 736.68, y: 133.91, round: 95 },
        {x: 719.53, y: 123.63, round: 96 },
    ]));
    torpedos.push(APP.waterObject(236, [
        {x: 696.53, y: 203.30, round: 97 },
        {x: 676.83, y: 199.82, round: 98 },
    ]));
    torpedos.push(APP.waterObject(237, [
        {x: 758.46, y: 111.50, round: 99 },
        {x: 738.55, y: 113.40, round: 100 },
        {x: 718.65, y: 115.31, round: 101 },
        {x: 698.74, y: 117.21, round: 102 },
    ]));
    torpedos.push(APP.waterObject(247, [
        {x: 570.72, y: 315.13, round: 123 },
        {x: 554.81, y: 303.01, round: 124 },
        {x: 538.90, y: 290.89, round: 125 },
        {x: 522.99, y: 278.77, round: 126 },
    ]));
    torpedos.push(APP.waterObject(248, [
        {x: 477.67, y: 241.18, round: 132 },
        {x: 460.50, y: 251.45, round: 133 },
        {x: 563.47, y: 189.82, round: 127 },
        {x: 546.31, y: 200.09, round: 128 },
        {x: 529.15, y: 210.36, round: 129 },
        {x: 511.99, y: 220.64, round: 130 },
        {x: 494.83, y: 230.91, round: 131 },
    ]));
    torpedos.push(APP.waterObject(249, [
        {x: 465.37, y: 260.91, round: 134 },
        {x: 453.45, y: 244.85, round: 135 },
        {x: 524.98, y: 341.20, round: 129 },
        {x: 513.05, y: 325.14, round: 130 },
        {x: 501.13, y: 309.08, round: 131 },
    ]));
    torpedos.push(APP.waterObject(250, [
        {x: 533.36, y: 184.22, round: 133 },
        {x: 541.32, y: 165.88, round: 134 },
    ]));
    torpedos.push(APP.waterObject(251, [
        {x: 502.63, y: 375.67, round: 135 },
        {x: 520.80, y: 367.31, round: 136 },
    ]));
    torpedos.push(APP.waterObject(220, [
        {x: 206.55, y: 69.58, round: 22 },
        {x: 217.37, y: 52.75, round: 23 },
        {x: 228.19, y: 35.93, round: 24 },
        {x: 141.64, y: 170.50, round: 16 },
        {x: 152.46, y: 153.68, round: 17 },
        {x: 163.28, y: 136.86, round: 18 },
        {x: 174.10, y: 120.04, round: 19 },
        {x: 184.92, y: 103.22, round: 20 },
        {x: 195.73, y: 86.40, round: 21 },
    ]));
    torpedos.push(APP.waterObject(222, [
        {x: 192.36, y: 171.91, round: 18 },
        {x: 176.19, y: 183.68, round: 19 },
        {x: 160.02, y: 195.45, round: 20 },
    ]));

    otherSubmarines.push(APP.waterObject(214, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 232.82, y: 167.18, round: 12 },
        {x: 225.75, y: 174.25, round: 13 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
    ]));
    otherSubmarines.push(APP.waterObject(216, [
        {x: 702.94, y: 239.75, round: 95 },
        {x: 677.94, y: 283.05, round: 100 },
        {x: 682.94, y: 274.39, round: 99 },
        {x: 717.94, y: 213.77, round: 92 },
        {x: 697.94, y: 248.41, round: 96 },
        {x: 732.94, y: 187.79, round: 89 },
        {x: 523.83, y: 144.49, round: 127 },
        {x: 533.83, y: 161.81, round: 125 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 692.94, y: 257.07, round: 97 },
        {x: 687.94, y: 265.73, round: 98 },
        {x: 528.83, y: 153.15, round: 126 },
        {x: 707.94, y: 231.09, round: 94 },
        {x: 538.83, y: 170.47, round: 124 },
        {x: 737.94, y: 179.13, round: 88 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 548.83, y: 187.79, round: 122 },
        {x: 518.83, y: 135.83, round: 128 },
        {x: 513.83, y: 127.17, round: 129 },
        {x: 712.94, y: 222.43, round: 93 },
        {x: 727.94, y: 196.45, round: 90 },
        {x: 543.83, y: 179.13, round: 123 },
        {x: 722.94, y: 205.11, round: 91 },
    ]));
    otherSubmarines.push(APP.waterObject(218, [
        {x: 499.46, y: 134.43, round: 132 },
        {x: 517.59, y: 142.88, round: 134 },
        {x: 508.52, y: 138.66, round: 133 },
    ]));
    otherSubmarines.push(APP.waterObject(219, [
        {x: 704.82, y: 276.60, round: 80 },
        {x: 695.42, y: 280.02, round: 81 },
        {x: 686.02, y: 283.44, round: 82 },
        {x: 714.21, y: 273.18, round: 79 },
        {x: 733.01, y: 266.34, round: 77 },
        {x: 723.61, y: 269.76, round: 78 },
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
        APP.put(myScores, {score: 0, round: 140})
        APP.put(myScores, {score: 0, round: 141})
        APP.put(myScores, {score: 0, round: 142})
        APP.put(myScores, {score: 0, round: 143})
        APP.put(myScores, {score: 0, round: 144})
        APP.put(myScores, {score: 0, round: 145})
        APP.put(myScores, {score: 0, round: 146})
        APP.put(myScores, {score: 0, round: 147})
        APP.put(myScores, {score: 0, round: 148})
        APP.put(myScores, {score: 0, round: 149})

	return {
		gameId: 'game20161109_08_11_02',
		gameTime: '2016-11-09 08:11:02',
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