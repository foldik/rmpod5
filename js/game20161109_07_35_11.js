APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(19582, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.16, y: 298.75, round: 2, sonar: 'nonextended' },
        {x: 106.55, y: 296.35, round: 3, sonar: 'nonextended' },
        {x: 113.52, y: 293.57, round: 4, sonar: 'nonextended' },
        {x: 122.16, y: 288.54, round: 5, sonar: 'nonextended' },
        {x: 131.15, y: 284.16, round: 6, sonar: 'nonextended' },
        {x: 140.93, y: 282.08, round: 7, sonar: 'nonextended' },
        {x: 150.91, y: 281.43, round: 8, sonar: 'nonextended' },
        {x: 160.79, y: 282.98, round: 9, sonar: 'nonextended' },
        {x: 170.75, y: 283.90, round: 10, sonar: 'nonextended' },
        {x: 180.74, y: 283.60, round: 11, sonar: 'nonextended' },
        {x: 190.70, y: 284.56, round: 12, sonar: 'nonextended' },
        {x: 200.50, y: 286.53, round: 13, sonar: 'nonextended' },
        {x: 210.46, y: 287.39, round: 14, sonar: 'nonextended' },
        {x: 220.36, y: 288.86, round: 15, sonar: 'nonextended' },
        {x: 227.63, y: 290.71, round: 16, sonar: 'nonextended' },
        {x: 237.08, y: 293.97, round: 17, sonar: 'nonextended' },
        {x: 246.41, y: 297.57, round: 18, sonar: 'nonextended' },
        {x: 256.19, y: 299.66, round: 19, sonar: 'nonextended' },
        {x: 266.00, y: 301.61, round: 20, sonar: 'nonextended' },
        {x: 275.11, y: 305.73, round: 21, sonar: 'nonextended' },
        {x: 285.06, y: 306.73, round: 22, sonar: 'nonextended' },
        {x: 294.96, y: 305.34, round: 23, sonar: 'nonextended' },
        {x: 304.96, y: 305.63, round: 24, sonar: 'nonextended' },
        {x: 314.93, y: 304.98, round: 25, sonar: 'nonextended' },
        {x: 324.91, y: 305.62, round: 26, sonar: 'nonextended' },
        {x: 334.67, y: 307.82, round: 27, sonar: 'nonextended' },
        {x: 344.67, y: 308.08, round: 28, sonar: 'nonextended' },
        {x: 354.66, y: 307.95, round: 29, sonar: 'nonextended' },
        {x: 364.64, y: 308.65, round: 30, sonar: 'nonextended' },
        {x: 374.60, y: 307.78, round: 31, sonar: 'nonextended' },
        {x: 384.41, y: 309.75, round: 32, sonar: 'nonextended' },
        {x: 393.40, y: 314.12, round: 33, sonar: 'nonextended' },
        {x: 401.35, y: 320.19, round: 34, sonar: 'nonextended' },
        {x: 407.06, y: 325.06, round: 35, sonar: 'nonextended' },
        {x: 413.71, y: 332.52, round: 36, sonar: 'nonextended' },
        {x: 418.49, y: 338.30, round: 37, sonar: 'nonextended' },
        {x: 424.02, y: 343.36, round: 38, sonar: 'nonextended' },
        {x: 431.28, y: 350.25, round: 39, sonar: 'nonextended' },
        {x: 437.88, y: 353.80, round: 40, sonar: 'nonextended' },
        {x: 445.10, y: 355.84, round: 41, sonar: 'nonextended' },
        {x: 455.10, y: 356.11, round: 42, sonar: 'nonextended' },
        {x: 462.59, y: 356.37, round: 43, sonar: 'nonextended' },
        {x: 472.39, y: 354.39, round: 44, sonar: 'nonextended' },
        {x: 482.23, y: 352.60, round: 45, sonar: 'nonextended' },
        {x: 491.38, y: 348.57, round: 46, sonar: 'nonextended' },
        {x: 500.58, y: 344.64, round: 47, sonar: 'nonextended' },
        {x: 509.37, y: 339.87, round: 48, sonar: 'nonextended' },
        {x: 516.83, y: 333.22, round: 49, sonar: 'nonextended' },
        {x: 522.30, y: 324.85, round: 50, sonar: 'nonextended' },
        {x: 526.65, y: 315.84, round: 51, sonar: 'nonextended' },
        {x: 538.29, y: 267.21, round: 52, sonar: 'nonextended' },
        {x: 538.29, y: 267.21, round: 53, sonar: 'nonextended' },
        {x: 538.29, y: 267.21, round: 54, sonar: 'nonextended' },
        {x: 538.29, y: 267.21, round: 55, sonar: 'nonextended' },
        {x: 538.29, y: 267.21, round: 56, sonar: 'nonextended' },
        {x: 542.44, y: 258.11, round: 57, sonar: 'nonextended' },
        {x: 548.29, y: 250.00, round: 58, sonar: 'nonextended' },
        {x: 555.41, y: 242.98, round: 59, sonar: 'nonextended' },
        {x: 560.03, y: 234.11, round: 60, sonar: 'nonextended' },
        {x: 566.61, y: 226.58, round: 61, sonar: 'nonextended' },
        {x: 571.97, y: 218.14, round: 62, sonar: 'nonextended' },
        {x: 576.03, y: 209.00, round: 63, sonar: 'nonextended' },
        {x: 582.71, y: 201.57, round: 64, sonar: 'nonextended' },
        {x: 586.85, y: 192.46, round: 65, sonar: 'nonextended' },
        {x: 589.94, y: 182.95, round: 66, sonar: 'nonextended' },
        {x: 591.72, y: 175.67, round: 67, sonar: 'nonextended' },
        {x: 596.83, y: 167.07, round: 68, sonar: 'nonextended' },
        {x: 601.94, y: 158.47, round: 69, sonar: 'nonextended' },
        {x: 609.40, y: 151.82, round: 70, sonar: 'nonextended' },
        {x: 618.65, y: 148.01, round: 71, sonar: 'nonextended' },
        {x: 627.26, y: 142.93, round: 72, sonar: 'nonextended' },
        {x: 634.79, y: 136.35, round: 73, sonar: 'nonextended' },
        {x: 640.24, y: 131.19, round: 74, sonar: 'nonextended' },
        {x: 645.70, y: 122.82, round: 75, sonar: 'nonextended' },
        {x: 651.00, y: 114.33, round: 76, sonar: 'nonextended' },
        {x: 657.02, y: 106.35, round: 77, sonar: 'nonextended' },
        {x: 661.03, y: 97.19, round: 78, sonar: 'nonextended' },
        {x: 666.77, y: 89.01, round: 79, sonar: 'nonextended' },
        {x: 674.67, y: 82.87, round: 80, sonar: 'nonextended' },
        {x: 684.05, y: 79.39, round: 81, sonar: 'nonextended' },
        {x: 693.10, y: 75.14, round: 82, sonar: 'nonextended' },
        {x: 699.31, y: 70.94, round: 83, sonar: 'nonextended' },
        {x: 708.14, y: 66.24, round: 84, sonar: 'nonextended' },
        {x: 715.43, y: 64.48, round: 85, sonar: 'nonextended' },
        {x: 725.42, y: 64.96, round: 86, sonar: 'nonextended' },
        {x: 735.08, y: 62.40, round: 87, sonar: 'nonextended' },
        {x: 745.08, y: 62.53, round: 88, sonar: 'nonextended' },
        {x: 754.95, y: 64.18, round: 89, sonar: 'nonextended' },
        {x: 764.40, y: 67.46, round: 90, sonar: 'nonextended' },
        {x: 774.06, y: 70.04, round: 91, sonar: 'nonextended' },
        {x: 782.95, y: 74.61, round: 92, sonar: 'nonextended' },
        {x: 789.49, y: 78.28, round: 93, sonar: 'nonextended' },
        {x: 796.78, y: 85.12, round: 94, sonar: 'nonextended' },
        {x: 801.02, y: 91.31, round: 95, sonar: 'nonextended' },
        {x: 806.23, y: 99.85, round: 96, sonar: 'nonextended' },
        {x: 812.45, y: 107.68, round: 97, sonar: 'nonextended' },
        {x: 816.49, y: 116.83, round: 98, sonar: 'nonextended' },
        {x: 819.10, y: 126.48, round: 99, sonar: 'nonextended' },
        {x: 819.25, y: 133.98, round: 100, sonar: 'nonextended' },
        {x: 817.59, y: 143.84, round: 101, sonar: 'nonextended' },
        {x: 815.84, y: 153.68, round: 102, sonar: 'nonextended' },
        {x: 817.06, y: 163.61, round: 103, sonar: 'nonextended' },
        {x: 818.26, y: 173.54, round: 104, sonar: 'nonextended' },
        {x: 817.35, y: 183.49, round: 105, sonar: 'nonextended' },
        {x: 815.61, y: 193.34, round: 106, sonar: 'nonextended' },
        {x: 816.45, y: 203.31, round: 107, sonar: 'nonextended' },
        {x: 816.69, y: 213.30, round: 108, sonar: 'nonextended' },
        {x: 819.72, y: 222.84, round: 109, sonar: 'nonextended' },
        {x: 822.98, y: 232.29, round: 110, sonar: 'nonextended' },
        {x: 824.38, y: 242.19, round: 111, sonar: 'nonextended' },
        {x: 825.36, y: 252.14, round: 112, sonar: 'nonextended' },
        {x: 825.63, y: 262.14, round: 113, sonar: 'nonextended' },
        {x: 825.05, y: 269.61, round: 114, sonar: 'nonextended' },
        {x: 826.44, y: 279.52, round: 115, sonar: 'nonextended' },
        {x: 824.48, y: 289.32, round: 116, sonar: 'nonextended' },
        {x: 820.10, y: 298.31, round: 117, sonar: 'nonextended' },
        {x: 813.21, y: 305.56, round: 118, sonar: 'nonextended' },
        {x: 806.37, y: 312.86, round: 119, sonar: 'nonextended' },
        {x: 798.11, y: 318.48, round: 120, sonar: 'nonextended' },
        {x: 788.50, y: 321.26, round: 121, sonar: 'nonextended' },
        {x: 779.58, y: 325.78, round: 122, sonar: 'nonextended' },
        {x: 769.80, y: 327.85, round: 123, sonar: 'nonextended' },
        {x: 759.81, y: 327.32, round: 124, sonar: 'nonextended' },
        {x: 749.96, y: 325.59, round: 125, sonar: 'nonextended' },
        {x: 740.00, y: 324.74, round: 126, sonar: 'nonextended' },
        {x: 730.80, y: 320.81, round: 127, sonar: 'nonextended' },
        {x: 721.93, y: 316.19, round: 128, sonar: 'nonextended' },
        {x: 713.01, y: 311.67, round: 129, sonar: 'nonextended' },
        {x: 703.86, y: 307.64, round: 130, sonar: 'nonextended' },
        {x: 693.89, y: 306.81, round: 131, sonar: 'nonextended' },
        {x: 683.99, y: 305.42, round: 132, sonar: 'nonextended' },
        {x: 674.08, y: 306.75, round: 133, sonar: 'nonextended' },
        {x: 664.41, y: 309.28, round: 134, sonar: 'nonextended' },
        {x: 654.46, y: 310.35, round: 135, sonar: 'nonextended' },
        {x: 644.59, y: 311.93, round: 136, sonar: 'nonextended' },
        {x: 637.10, y: 312.42, round: 137, sonar: 'nonextended' },
        {x: 627.29, y: 314.33, round: 138, sonar: 'nonextended' },
        {x: 617.31, y: 313.67, round: 139, sonar: 'nonextended' },
        {x: 607.31, y: 313.95, round: 140, sonar: 'nonextended' },
        {x: 597.65, y: 316.52, round: 141, sonar: 'nonextended' },
        {x: 587.89, y: 318.70, round: 142, sonar: 'nonextended' },
        {x: 577.91, y: 318.18, round: 143, sonar: 'nonextended' },
        {x: 568.18, y: 315.87, round: 144, sonar: 'nonextended' },
        {x: 558.20, y: 316.56, round: 145, sonar: 'nonextended' },
        {x: 548.20, y: 316.47, round: 146, sonar: 'nonextended' },
        {x: 538.28, y: 315.24, round: 147, sonar: 'nonextended' },
        {x: 528.68, y: 312.42, round: 148, sonar: 'nonextended' },
        {x: 518.76, y: 311.14, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(19583, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.35, y: 274.14, round: 2, sonar: 'nonextended' },
        {x: 132.26, y: 273.21, round: 3, sonar: 'nonextended' },
        {x: 139.44, y: 271.03, round: 4, sonar: 'nonextended' },
        {x: 149.06, y: 268.30, round: 5, sonar: 'nonextended' },
        {x: 159.00, y: 267.20, round: 6, sonar: 'nonextended' },
        {x: 168.73, y: 269.49, round: 7, sonar: 'nonextended' },
        {x: 178.59, y: 271.14, round: 8, sonar: 'nonextended' },
        {x: 188.11, y: 274.21, round: 9, sonar: 'nonextended' },
        {x: 197.78, y: 276.76, round: 10, sonar: 'nonextended' },
        {x: 207.78, y: 277.04, round: 11, sonar: 'nonextended' },
        {x: 217.78, y: 277.18, round: 12, sonar: 'nonextended' },
        {x: 227.60, y: 279.06, round: 13, sonar: 'nonextended' },
        {x: 237.58, y: 278.54, round: 14, sonar: 'nonextended' },
        {x: 247.34, y: 276.34, round: 15, sonar: 'nonextended' },
        {x: 257.30, y: 275.52, round: 16, sonar: 'nonextended' },
        {x: 267.20, y: 276.97, round: 17, sonar: 'nonextended' },
        {x: 277.11, y: 278.31, round: 18, sonar: 'nonextended' },
        {x: 286.93, y: 280.17, round: 19, sonar: 'nonextended' },
        {x: 296.93, y: 279.93, round: 20, sonar: 'nonextended' },
        {x: 306.79, y: 278.27, round: 21, sonar: 'nonextended' },
        {x: 316.73, y: 277.15, round: 22, sonar: 'nonextended' },
        {x: 326.29, y: 274.23, round: 23, sonar: 'nonextended' },
        {x: 333.77, y: 273.62, round: 24, sonar: 'nonextended' },
        {x: 341.19, y: 274.72, round: 25, sonar: 'nonextended' },
        {x: 350.91, y: 277.04, round: 26, sonar: 'nonextended' },
        {x: 360.87, y: 278.01, round: 27, sonar: 'nonextended' },
        {x: 369.97, y: 282.14, round: 28, sonar: 'nonextended' },
        {x: 378.68, y: 287.06, round: 29, sonar: 'nonextended' },
        {x: 387.23, y: 292.24, round: 30, sonar: 'nonextended' },
        {x: 397.03, y: 294.25, round: 31, sonar: 'nonextended' },
        {x: 407.02, y: 294.62, round: 32, sonar: 'nonextended' },
        {x: 416.76, y: 292.34, round: 33, sonar: 'nonextended' },
        {x: 425.77, y: 288.00, round: 34, sonar: 'nonextended' },
        {x: 435.51, y: 285.72, round: 35, sonar: 'nonextended' },
        {x: 445.04, y: 282.71, round: 36, sonar: 'nonextended' },
        {x: 453.38, y: 277.19, round: 37, sonar: 'nonextended' },
        {x: 460.03, y: 269.72, round: 38, sonar: 'nonextended' },
        {x: 467.79, y: 263.41, round: 39, sonar: 'nonextended' },
        {x: 473.71, y: 255.35, round: 40, sonar: 'nonextended' },
        {x: 481.24, y: 248.78, round: 41, sonar: 'nonextended' },
        {x: 489.29, y: 242.85, round: 42, sonar: 'nonextended' },
        {x: 496.47, y: 235.88, round: 43, sonar: 'nonextended' },
        {x: 503.93, y: 229.22, round: 44, sonar: 'nonextended' },
        {x: 508.77, y: 220.47, round: 45, sonar: 'nonextended' },
        {x: 512.47, y: 211.18, round: 46, sonar: 'nonextended' },
        {x: 517.80, y: 202.72, round: 47, sonar: 'nonextended' },
        {x: 525.43, y: 196.25, round: 48, sonar: 'nonextended' },
        {x: 530.71, y: 187.76, round: 49, sonar: 'nonextended' },
        {x: 537.23, y: 180.18, round: 50, sonar: 'nonextended' },
        {x: 543.78, y: 172.63, round: 51, sonar: 'nonextended' },
        {x: 578.54, y: 136.68, round: 52, sonar: 'nonextended' },
        {x: 578.54, y: 136.68, round: 53, sonar: 'nonextended' },
        {x: 578.54, y: 136.68, round: 54, sonar: 'nonextended' },
        {x: 578.54, y: 136.68, round: 55, sonar: 'nonextended' },
        {x: 578.54, y: 136.68, round: 56, sonar: 'nonextended' },
        {x: 586.88, y: 131.16, round: 57, sonar: 'nonextended' },
        {x: 596.09, y: 127.28, round: 58, sonar: 'nonextended' },
        {x: 604.20, y: 121.43, round: 59, sonar: 'nonextended' },
        {x: 609.86, y: 113.18, round: 60, sonar: 'nonextended' },
        {x: 617.95, y: 107.31, round: 61, sonar: 'nonextended' },
        {x: 626.85, y: 102.75, round: 62, sonar: 'nonextended' },
        {x: 636.01, y: 98.72, round: 63, sonar: 'nonextended' },
        {x: 645.10, y: 94.56, round: 64, sonar: 'nonextended' },
        {x: 654.87, y: 92.44, round: 65, sonar: 'nonextended' },
        {x: 664.75, y: 90.88, round: 66, sonar: 'nonextended' },
        {x: 674.75, y: 91.10, round: 67, sonar: 'nonextended' },
        {x: 684.41, y: 93.67, round: 68, sonar: 'nonextended' },
        {x: 692.77, y: 99.17, round: 69, sonar: 'nonextended' },
        {x: 699.03, y: 106.96, round: 70, sonar: 'nonextended' },
        {x: 706.34, y: 113.78, round: 71, sonar: 'nonextended' },
        {x: 714.72, y: 119.24, round: 72, sonar: 'nonextended' },
        {x: 723.39, y: 124.21, round: 73, sonar: 'nonextended' },
        {x: 733.21, y: 126.12, round: 74, sonar: 'nonextended' },
        {x: 741.99, y: 130.90, round: 75, sonar: 'nonextended' },
        {x: 748.95, y: 138.09, round: 76, sonar: 'nonextended' },
        {x: 755.13, y: 145.95, round: 77, sonar: 'nonextended' },
        {x: 759.34, y: 155.02, round: 78, sonar: 'nonextended' },
        {x: 761.75, y: 164.73, round: 79, sonar: 'nonextended' },
        {x: 762.07, y: 174.72, round: 80, sonar: 'nonextended' },
        {x: 760.39, y: 184.58, round: 81, sonar: 'nonextended' },
        {x: 755.90, y: 193.51, round: 82, sonar: 'nonextended' },
        {x: 753.44, y: 203.21, round: 83, sonar: 'nonextended' },
        {x: 748.77, y: 212.05, round: 84, sonar: 'nonextended' },
        {x: 746.78, y: 221.85, round: 85, sonar: 'nonextended' },
        {x: 743.49, y: 231.30, round: 86, sonar: 'nonextended' },
        {x: 739.97, y: 240.66, round: 87, sonar: 'nonextended' },
        {x: 737.84, y: 250.43, round: 88, sonar: 'nonextended' },
        {x: 733.30, y: 259.34, round: 89, sonar: 'nonextended' },
        {x: 727.23, y: 267.28, round: 90, sonar: 'nonextended' },
        {x: 721.46, y: 275.45, round: 91, sonar: 'nonextended' },
        {x: 714.11, y: 282.23, round: 92, sonar: 'nonextended' },
        {x: 705.85, y: 287.86, round: 93, sonar: 'nonextended' },
        {x: 696.57, y: 291.60, round: 94, sonar: 'nonextended' },
        {x: 687.42, y: 295.62, round: 95, sonar: 'nonextended' },
        {x: 679.93, y: 296.12, round: 96, sonar: 'nonextended' },
        {x: 670.36, y: 299.02, round: 97, sonar: 'nonextended' },
        {x: 660.37, y: 299.35, round: 98, sonar: 'nonextended' },
        {x: 650.79, y: 296.47, round: 99, sonar: 'nonextended' },
        {x: 640.79, y: 296.24, round: 100, sonar: 'nonextended' },
        {x: 630.79, y: 296.30, round: 101, sonar: 'nonextended' },
        {x: 621.32, y: 299.50, round: 102, sonar: 'nonextended' },
        {x: 611.41, y: 300.81, round: 103, sonar: 'nonextended' },
        {x: 601.60, y: 298.86, round: 104, sonar: 'nonextended' },
        {x: 592.00, y: 296.07, round: 105, sonar: 'nonextended' },
        {x: 583.17, y: 291.37, round: 106, sonar: 'nonextended' },
        {x: 573.44, y: 289.05, round: 107, sonar: 'nonextended' },
        {x: 564.04, y: 285.65, round: 108, sonar: 'nonextended' },
        {x: 554.99, y: 281.39, round: 109, sonar: 'nonextended' },
        {x: 546.18, y: 276.66, round: 110, sonar: 'nonextended' },
        {x: 539.42, y: 269.29, round: 111, sonar: 'nonextended' },
        {x: 534.54, y: 260.56, round: 112, sonar: 'nonextended' },
        {x: 528.56, y: 252.55, round: 113, sonar: 'nonextended' },
        {x: 522.11, y: 244.91, round: 114, sonar: 'nonextended' },
        {x: 515.96, y: 237.02, round: 115, sonar: 'nonextended' },
        {x: 508.71, y: 230.13, round: 116, sonar: 'nonextended' },
        {x: 501.04, y: 223.71, round: 117, sonar: 'nonextended' },
        {x: 495.04, y: 215.71, round: 118, sonar: 'nonextended' },
        {x: 490.47, y: 209.77, round: 119, sonar: 'nonextended' },
        {x: 487.78, y: 202.77, round: 120, sonar: 'nonextended' },
        {x: 487.32, y: 192.78, round: 121, sonar: 'nonextended' },
        {x: 490.13, y: 183.18, round: 122, sonar: 'nonextended' },
        {x: 491.45, y: 173.27, round: 123, sonar: 'nonextended' },
        {x: 495.95, y: 164.34, round: 124, sonar: 'nonextended' },
        {x: 497.30, y: 154.43, round: 125, sonar: 'nonextended' },
        {x: 501.83, y: 145.52, round: 126, sonar: 'nonextended' },
        {x: 507.19, y: 137.07, round: 127, sonar: 'nonextended' },
        {x: 514.07, y: 129.82, round: 128, sonar: 'nonextended' },
        {x: 518.18, y: 120.70, round: 129, sonar: 'nonextended' },
        {x: 525.14, y: 113.52, round: 130, sonar: 'nonextended' },
        {x: 533.22, y: 107.63, round: 131, sonar: 'nonextended' },
        {x: 542.70, y: 104.44, round: 132, sonar: 'nonextended' },
        {x: 551.03, y: 98.91, round: 133, sonar: 'nonextended' },
        {x: 559.93, y: 94.35, round: 134, sonar: 'nonextended' },
        {x: 566.05, y: 90.01, round: 135, sonar: 'nonextended' },
        {x: 575.19, y: 85.95, round: 136, sonar: 'nonextended' },
        {x: 584.01, y: 81.25, round: 137, sonar: 'nonextended' },
        {x: 593.79, y: 79.14, round: 138, sonar: 'nonextended' },
        {x: 602.62, y: 74.44, round: 139, sonar: 'nonextended' },
        {x: 612.38, y: 72.27, round: 140, sonar: 'nonextended' },
        {x: 622.00, y: 69.56, round: 141, sonar: 'nonextended' },
        {x: 631.48, y: 66.37, round: 142, sonar: 'nonextended' },
        {x: 641.04, y: 63.42, round: 143, sonar: 'nonextended' },
        {x: 651.03, y: 63.26, round: 144, sonar: 'nonextended' },
        {x: 661.00, y: 64.12, round: 145, sonar: 'nonextended' },
        {x: 670.85, y: 65.85, round: 146, sonar: 'nonextended' },
        {x: 680.66, y: 67.78, round: 147, sonar: 'nonextended' },
        {x: 690.64, y: 67.12, round: 148, sonar: 'nonextended' },
        {x: 700.59, y: 68.13, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(19648, [
        {x: 443.26, y: 297.71, round: 35 },
        {x: 460.75, y: 307.41, round: 36 },
        {x: 478.23, y: 317.11, round: 37 },
    ]));
    torpedos.push(APP.waterObject(19776, [
        {x: 734.09, y: 230.78, round: 89 },
        {x: 730.33, y: 211.14, round: 90 },
    ]));
    torpedos.push(APP.waterObject(19873, [
        {x: 676.49, y: 236.84, round: 132 },
        {x: 719.94, y: 304.01, round: 128 },
        {x: 709.08, y: 287.22, round: 129 },
        {x: 698.21, y: 270.43, round: 130 },
        {x: 687.35, y: 253.64, round: 131 },
    ]));
    torpedos.push(APP.waterObject(19810, [
        {x: 693.74, y: 276.65, round: 96 },
        {x: 700.06, y: 257.67, round: 97 },
    ]));
    torpedos.push(APP.waterObject(19874, [
        {x: 596.81, y: 269.62, round: 135 },
        {x: 608.02, y: 286.18, round: 136 },
        {x: 518.39, y: 153.64, round: 128 },
        {x: 529.60, y: 170.21, round: 129 },
        {x: 540.80, y: 186.78, round: 130 },
    ]));
    torpedos.push(APP.waterObject(19685, [
        {x: 510.18, y: 231.05, round: 47 },
        {x: 507.88, y: 250.92, round: 48 },
        {x: 505.59, y: 270.79, round: 49 },
    ]));
    torpedos.push(APP.waterObject(19695, [
        {x: 500.14, y: 324.65, round: 48 },
        {x: 499.71, y: 304.65, round: 49 },
        {x: 499.27, y: 284.66, round: 50 },
        {x: 498.83, y: 264.66, round: 51 },
    ]));
    torpedos.push(APP.waterObject(19759, [
        {x: 689.50, y: 96.29, round: 81 },
        {x: 704.33, y: 109.71, round: 82 },
        {x: 719.16, y: 123.13, round: 83 },
        {x: 733.99, y: 136.54, round: 84 },
    ]));
    torpedos.push(APP.waterObject(19762, [
        {x: 777.30, y: 75.44, round: 88 },
        {x: 780.87, y: 55.76, round: 89 },
        {x: 784.44, y: 36.08, round: 90 },
        {x: 788.00, y: 16.40, round: 91 },
        {x: 759.46, y: 173.84, round: 83 },
        {x: 763.03, y: 154.16, round: 84 },
        {x: 770.17, y: 114.80, round: 86 },
        {x: 773.73, y: 95.12, round: 87 },
    ]));
    torpedos.push(APP.waterObject(19702, [
        {x: 557.10, y: 260.41, round: 57 },
        {x: 575.91, y: 253.60, round: 58 },
        {x: 594.71, y: 246.80, round: 59 },
        {x: 613.52, y: 239.99, round: 60 },
        {x: 632.33, y: 233.18, round: 61 },
        {x: 538.29, y: 267.21, round: 53 },
    ]));
    torpedos.push(APP.waterObject(19703, [
        {x: 595.92, y: 146.57, round: 57 },
        {x: 613.30, y: 156.47, round: 58 },
        {x: 630.68, y: 166.37, round: 59 },
        {x: 648.06, y: 176.26, round: 60 },
        {x: 578.54, y: 136.68, round: 53 },
    ]));
    torpedos.push(APP.waterObject(19735, [
        {x: 685.90, y: 92.27, round: 77 },
        {x: 701.13, y: 79.30, round: 78 },
        {x: 716.35, y: 66.33, round: 79 },
        {x: 731.57, y: 53.36, round: 80 },
        {x: 746.79, y: 40.38, round: 81 },
        {x: 655.46, y: 118.22, round: 75 },
        {x: 670.68, y: 105.25, round: 76 },
    ]));
    torpedos.push(APP.waterObject(19736, [
        {x: 694.13, y: 80.59, round: 77 },
        {x: 681.10, y: 65.42, round: 78 },
        {x: 668.07, y: 50.24, round: 79 },
        {x: 655.04, y: 35.07, round: 80 },
        {x: 642.02, y: 19.90, round: 81 },
        {x: 720.18, y: 110.94, round: 75 },
        {x: 707.16, y: 95.77, round: 76 },
    ]));
    torpedos.push(APP.waterObject(19641, [
        {x: 308.54, y: 294.13, round: 27 },
        {x: 292.16, y: 282.65, round: 28 },
    ]));
    torpedos.push(APP.waterObject(19897, [
        {x: 551.00, y: 118.91, round: 134 },
        {x: 550.97, y: 138.91, round: 135 },
        {x: 550.79, y: 258.91, round: 141 },
        {x: 550.76, y: 278.91, round: 142 },
    ]));
    torpedos.push(APP.waterObject(19642, [
        {x: 331.61, y: 271.80, round: 27 },
        {x: 312.32, y: 266.55, round: 28 },
    ]));
    torpedos.push(APP.waterObject(19611, [
        {x: 298.13, y: 277.79, round: 22 },
        {x: 314.20, y: 265.88, round: 23 },
        {x: 282.06, y: 289.70, round: 21 },
    ]));
    torpedos.push(APP.waterObject(19612, [
        {x: 316.27, y: 274.84, round: 21 },
    ]));
    torpedos.push(APP.waterObject(19676, [
        {x: 459.53, y: 269.46, round: 41 },
        {x: 445.35, y: 283.56, round: 42 },
        {x: 431.17, y: 297.66, round: 43 },
    ]));
    torpedos.push(APP.waterObject(19677, [
        {x: 477.58, y: 305.39, round: 44 },
        {x: 488.41, y: 288.58, round: 45 },
        {x: 499.24, y: 271.76, round: 46 },
        {x: 510.06, y: 254.95, round: 47 },
        {x: 520.89, y: 238.13, round: 48 },
        {x: 531.72, y: 221.31, round: 49 },
        {x: 542.54, y: 204.50, round: 50 },
        {x: 455.93, y: 339.02, round: 42 },
        {x: 466.75, y: 322.21, round: 43 },
    ]));
    torpedos.push(APP.waterObject(19647, [
        {x: 421.34, y: 320.58, round: 35 },
        {x: 441.34, y: 320.96, round: 36 },
        {x: 461.33, y: 321.34, round: 37 },
    ]));
    torpedos.push(APP.waterObject(19775, [
        {x: 718.28, y: 104.32, round: 88 },
        {x: 714.72, y: 124.00, round: 89 },
        {x: 696.89, y: 222.39, round: 94 },
        {x: 693.32, y: 242.07, round: 95 },
        {x: 721.85, y: 84.64, round: 87 },
    ]));

    otherSubmarines.push(APP.waterObject(19584, [
        {x: 650.23, y: 278.29, round: 134 },
        {x: 713.67, y: 248.70, round: 127 },
        {x: 677.42, y: 265.61, round: 131 },
        {x: 704.61, y: 252.93, round: 128 },
        {x: 668.35, y: 269.84, round: 132 },
        {x: 522.07, y: 283.88, round: 148 },
        {x: 532.03, y: 283.00, round: 147 },
        {x: 641.16, y: 282.51, round: 135 },
        {x: 541.99, y: 282.13, round: 146 },
        {x: 512.11, y: 284.75, round: 149 },
        {x: 568.04, y: 296.19, round: 143 },
        {x: 695.54, y: 257.16, round: 129 },
        {x: 686.48, y: 261.38, round: 130 },
        {x: 595.85, y: 303.64, round: 140 },
        {x: 551.65, y: 284.72, round: 145 },
        {x: 659.29, y: 274.06, round: 133 },
        {x: 632.10, y: 286.74, round: 136 },
        {x: 613.97, y: 295.19, round: 138 },
        {x: 604.91, y: 299.42, round: 139 },
        {x: 623.04, y: 290.97, round: 137 },
        {x: 559.84, y: 290.46, round: 144 },
        {x: 585.89, y: 304.52, round: 141 },
        {x: 576.23, y: 301.93, round: 142 },
    ]));
    otherSubmarines.push(APP.waterObject(19585, [
        {x: 521.87, y: 248.32, round: 46 },
        {x: 535.55, y: 210.73, round: 42 },
        {x: 528.71, y: 229.52, round: 44 },
        {x: 508.19, y: 285.90, round: 50 },
        {x: 538.97, y: 201.33, round: 41 },
        {x: 518.45, y: 257.71, round: 47 },
        {x: 504.77, y: 295.30, round: 51 },
        {x: 515.03, y: 267.11, round: 48 },
        {x: 532.13, y: 220.13, round: 43 },
        {x: 525.29, y: 238.92, round: 45 },
        {x: 511.61, y: 276.51, round: 49 },
    ]));
    otherSubmarines.push(APP.waterObject(19586, [
        {x: 727.94, y: 90.15, round: 78 },
        {x: 702.94, y: 239.75, round: 95 },
        {x: 754.68, y: 143.30, round: 84 },
        {x: 717.94, y: 213.77, round: 92 },
        {x: 742.94, y: 116.13, round: 81 },
        {x: 732.94, y: 187.79, round: 89 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 732.94, y: 98.81, round: 79 },
        {x: 752.94, y: 133.45, round: 83 },
        {x: 707.94, y: 231.09, round: 94 },
        {x: 737.94, y: 179.13, round: 88 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 747.94, y: 124.79, round: 82 },
        {x: 712.94, y: 222.43, round: 93 },
        {x: 727.94, y: 196.45, round: 90 },
        {x: 721.21, y: 71.64, round: 76 },
        {x: 727.94, y: 53.14, round: 74 },
        {x: 722.94, y: 81.49, round: 77 },
        {x: 722.94, y: 205.11, round: 91 },
        {x: 722.94, y: 61.80, round: 75 },
        {x: 737.94, y: 107.47, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(19587, [
        {x: 316.16, y: 265.55, round: 24 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 354.80, y: 275.90, round: 20 },
        {x: 345.14, y: 273.32, round: 21 },
        {x: 287.18, y: 257.79, round: 27 },
    ]));
    otherSubmarines.push(APP.waterObject(19588, [
        {x: 496.99, y: 297.65, round: 35 },
        {x: 451.79, y: 318.72, round: 41 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 480.47, y: 321.23, round: 38 },
        {x: 499.58, y: 287.99, round: 34 },
        {x: 488.66, y: 315.50, round: 37 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 494.40, y: 307.31, round: 36 },
        {x: 460.85, y: 322.95, round: 40 },
        {x: 470.81, y: 323.82, round: 39 },
    ]));
    otherSubmarines.push(APP.waterObject(19589, [
        {x: 648.43, y: 172.00, round: 58 },
        {x: 563.86, y: 141.22, round: 49 },
        {x: 639.04, y: 168.58, round: 57 },
        {x: 554.47, y: 137.80, round: 48 },
        {x: 573.26, y: 144.64, round: 50 },
        {x: 582.66, y: 148.06, round: 51 },
        {x: 545.07, y: 134.38, round: 47 },
        {x: 629.64, y: 165.16, round: 52 },
        {x: 629.64, y: 165.16, round: 53 },
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
        APP.put(myScores, {score: 100, round: 22})
        APP.put(myScores, {score: 100, round: 23})
        APP.put(myScores, {score: 200, round: 24})
        APP.put(myScores, {score: 200, round: 25})
        APP.put(myScores, {score: 200, round: 26})
        APP.put(myScores, {score: 200, round: 27})
        APP.put(myScores, {score: 200, round: 28})
        APP.put(myScores, {score: 200, round: 29})
        APP.put(myScores, {score: 200, round: 30})
        APP.put(myScores, {score: 450, round: 31})
        APP.put(myScores, {score: 450, round: 32})
        APP.put(myScores, {score: 450, round: 33})
        APP.put(myScores, {score: 450, round: 34})
        APP.put(myScores, {score: 450, round: 35})
        APP.put(myScores, {score: 450, round: 36})
        APP.put(myScores, {score: 450, round: 37})
        APP.put(myScores, {score: 650, round: 38})
        APP.put(myScores, {score: 650, round: 39})
        APP.put(myScores, {score: 650, round: 40})
        APP.put(myScores, {score: 650, round: 41})
        APP.put(myScores, {score: 650, round: 42})
        APP.put(myScores, {score: 650, round: 43})
        APP.put(myScores, {score: 800, round: 44})
        APP.put(myScores, {score: 800, round: 45})
        APP.put(myScores, {score: 800, round: 46})
        APP.put(myScores, {score: 800, round: 47})
        APP.put(myScores, {score: 800, round: 48})
        APP.put(myScores, {score: 800, round: 49})
        APP.put(myScores, {score: 900, round: 50})
        APP.put(myScores, {score: 900, round: 51})
        APP.put(myScores, {score: 900, round: 52})
        APP.put(myScores, {score: 900, round: 53})
        APP.put(myScores, {score: 900, round: 54})
        APP.put(myScores, {score: 860, round: 55})
        APP.put(myScores, {score: 820, round: 56})
        APP.put(myScores, {score: 780, round: 57})
        APP.put(myScores, {score: 780, round: 58})
        APP.put(myScores, {score: 780, round: 59})
        APP.put(myScores, {score: 780, round: 60})
        APP.put(myScores, {score: 780, round: 61})
        APP.put(myScores, {score: 780, round: 62})
        APP.put(myScores, {score: 780, round: 63})
        APP.put(myScores, {score: 780, round: 64})
        APP.put(myScores, {score: 780, round: 65})
        APP.put(myScores, {score: 880, round: 66})
        APP.put(myScores, {score: 880, round: 67})
        APP.put(myScores, {score: 880, round: 68})
        APP.put(myScores, {score: 880, round: 69})
        APP.put(myScores, {score: 880, round: 70})
        APP.put(myScores, {score: 880, round: 71})
        APP.put(myScores, {score: 880, round: 72})
        APP.put(myScores, {score: 880, round: 73})
        APP.put(myScores, {score: 880, round: 74})
        APP.put(myScores, {score: 880, round: 75})
        APP.put(myScores, {score: 880, round: 76})
        APP.put(myScores, {score: 880, round: 77})
        APP.put(myScores, {score: 880, round: 78})
        APP.put(myScores, {score: 880, round: 79})
        APP.put(myScores, {score: 880, round: 80})
        APP.put(myScores, {score: 880, round: 81})
        APP.put(myScores, {score: 880, round: 82})
        APP.put(myScores, {score: 880, round: 83})
        APP.put(myScores, {score: 880, round: 84})
        APP.put(myScores, {score: 980, round: 85})
        APP.put(myScores, {score: 980, round: 86})
        APP.put(myScores, {score: 980, round: 87})
        APP.put(myScores, {score: 980, round: 88})
        APP.put(myScores, {score: 980, round: 89})
        APP.put(myScores, {score: 980, round: 90})
        APP.put(myScores, {score: 1080, round: 91})
        APP.put(myScores, {score: 1080, round: 92})
        APP.put(myScores, {score: 1080, round: 93})
        APP.put(myScores, {score: 1080, round: 94})
        APP.put(myScores, {score: 1080, round: 95})
        APP.put(myScores, {score: 1230, round: 96})
        APP.put(myScores, {score: 1230, round: 97})
        APP.put(myScores, {score: 1230, round: 98})
        APP.put(myScores, {score: 1230, round: 99})
        APP.put(myScores, {score: 1230, round: 100})
        APP.put(myScores, {score: 1230, round: 101})
        APP.put(myScores, {score: 1230, round: 102})
        APP.put(myScores, {score: 1230, round: 103})
        APP.put(myScores, {score: 1230, round: 104})
        APP.put(myScores, {score: 1230, round: 105})
        APP.put(myScores, {score: 1230, round: 106})
        APP.put(myScores, {score: 1230, round: 107})
        APP.put(myScores, {score: 1230, round: 108})
        APP.put(myScores, {score: 1230, round: 109})
        APP.put(myScores, {score: 1230, round: 110})
        APP.put(myScores, {score: 1230, round: 111})
        APP.put(myScores, {score: 1230, round: 112})
        APP.put(myScores, {score: 1230, round: 113})
        APP.put(myScores, {score: 1230, round: 114})
        APP.put(myScores, {score: 1230, round: 115})
        APP.put(myScores, {score: 1230, round: 116})
        APP.put(myScores, {score: 1230, round: 117})
        APP.put(myScores, {score: 1230, round: 118})
        APP.put(myScores, {score: 1230, round: 119})
        APP.put(myScores, {score: 1230, round: 120})
        APP.put(myScores, {score: 1230, round: 121})
        APP.put(myScores, {score: 1230, round: 122})
        APP.put(myScores, {score: 1230, round: 123})
        APP.put(myScores, {score: 1230, round: 124})
        APP.put(myScores, {score: 1230, round: 125})
        APP.put(myScores, {score: 1230, round: 126})
        APP.put(myScores, {score: 1230, round: 127})
        APP.put(myScores, {score: 1230, round: 128})
        APP.put(myScores, {score: 1230, round: 129})
        APP.put(myScores, {score: 1230, round: 130})
        APP.put(myScores, {score: 1230, round: 131})
        APP.put(myScores, {score: 1230, round: 132})
        APP.put(myScores, {score: 1230, round: 133})
        APP.put(myScores, {score: 1230, round: 134})
        APP.put(myScores, {score: 1230, round: 135})
        APP.put(myScores, {score: 1230, round: 136})
        APP.put(myScores, {score: 1230, round: 137})
        APP.put(myScores, {score: 1230, round: 138})
        APP.put(myScores, {score: 1230, round: 139})
        APP.put(myScores, {score: 1230, round: 140})
        APP.put(myScores, {score: 1230, round: 141})
        APP.put(myScores, {score: 1230, round: 142})
        APP.put(myScores, {score: 1230, round: 143})
        APP.put(myScores, {score: 1230, round: 144})
        APP.put(myScores, {score: 1230, round: 145})
        APP.put(myScores, {score: 1230, round: 146})
        APP.put(myScores, {score: 1230, round: 147})
        APP.put(myScores, {score: 1230, round: 148})
        APP.put(myScores, {score: 1230, round: 149})

	return {
		gameId: 'game20161109_07_35_11',
		gameTime: '2016-11-09 07:35:11',
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