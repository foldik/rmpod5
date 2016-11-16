APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(53334, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.45, y: 299.48, round: 2, sonar: 'nonextended' },
        {x: 107.44, y: 299.74, round: 3, sonar: 'nonextended' },
        {x: 114.86, y: 300.85, round: 4, sonar: 'nonextended' },
        {x: 114.86, y: 300.85, round: 5, sonar: 'nonextended' },
        {x: 134.63, y: 303.71, round: 6, sonar: 'nonextended' },
        {x: 142.05, y: 302.59, round: 7, sonar: 'nonextended' },
        {x: 152.05, y: 302.74, round: 8, sonar: 'nonextended' },
        {x: 161.92, y: 301.13, round: 9, sonar: 'nonextended' },
        {x: 171.00, y: 296.93, round: 10, sonar: 'nonextended' },
        {x: 180.08, y: 292.76, round: 11, sonar: 'nonextended' },
        {x: 189.93, y: 291.03, round: 12, sonar: 'nonextended' },
        {x: 199.23, y: 287.35, round: 13, sonar: 'nonextended' },
        {x: 208.77, y: 284.35, round: 14, sonar: 'nonextended' },
        {x: 216.27, y: 284.57, round: 15, sonar: 'nonextended' },
        {x: 226.11, y: 282.78, round: 16, sonar: 'nonextended' },
        {x: 235.16, y: 278.54, round: 17, sonar: 'nonextended' },
        {x: 244.87, y: 276.16, round: 18, sonar: 'nonextended' },
        {x: 254.86, y: 275.70, round: 19, sonar: 'nonextended' },
        {x: 264.84, y: 276.35, round: 20, sonar: 'nonextended' },
        {x: 274.82, y: 275.77, round: 21, sonar: 'nonextended' },
        {x: 284.35, y: 272.73, round: 22, sonar: 'nonextended' },
        {x: 293.71, y: 269.22, round: 23, sonar: 'nonextended' },
        {x: 301.33, y: 262.74, round: 24, sonar: 'nonextended' },
        {x: 307.88, y: 259.09, round: 25, sonar: 'nonextended' },
        {x: 317.40, y: 256.02, round: 26, sonar: 'nonextended' },
        {x: 325.39, y: 250.00, round: 27, sonar: 'nonextended' },
        {x: 331.21, y: 241.87, round: 28, sonar: 'nonextended' },
        {x: 337.15, y: 233.83, round: 29, sonar: 'nonextended' },
        {x: 342.39, y: 225.31, round: 30, sonar: 'nonextended' },
        {x: 347.16, y: 216.52, round: 31, sonar: 'nonextended' },
        {x: 350.30, y: 207.03, round: 32, sonar: 'nonextended' },
        {x: 354.90, y: 198.15, round: 33, sonar: 'nonextended' },
        {x: 358.90, y: 188.98, round: 34, sonar: 'nonextended' },
        {x: 359.90, y: 179.03, round: 35, sonar: 'nonextended' },
        {x: 363.94, y: 169.88, round: 36, sonar: 'nonextended' },
        {x: 365.99, y: 160.10, round: 37, sonar: 'nonextended' },
        {x: 367.69, y: 152.79, round: 38, sonar: 'nonextended' },
        {x: 372.46, y: 144.00, round: 39, sonar: 'nonextended' },
        {x: 377.32, y: 135.27, round: 40, sonar: 'nonextended' },
        {x: 380.82, y: 125.90, round: 41, sonar: 'nonextended' },
        {x: 382.53, y: 118.60, round: 42, sonar: 'nonextended' },
        {x: 385.37, y: 109.01, round: 43, sonar: 'nonextended' },
        {x: 388.77, y: 99.60, round: 44, sonar: 'nonextended' },
        {x: 394.50, y: 91.41, round: 45, sonar: 'nonextended' },
        {x: 402.14, y: 84.96, round: 46, sonar: 'nonextended' },
        {x: 409.10, y: 77.78, round: 47, sonar: 'nonextended' },
        {x: 417.84, y: 72.92, round: 48, sonar: 'nonextended' },
        {x: 423.71, y: 68.25, round: 49, sonar: 'nonextended' },
        {x: 432.33, y: 63.18, round: 50, sonar: 'nonextended' },
        {x: 439.56, y: 61.18, round: 51, sonar: 'nonextended' },
        {x: 449.56, y: 61.17, round: 52, sonar: 'nonextended' },
        {x: 459.07, y: 64.27, round: 53, sonar: 'nonextended' },
        {x: 468.66, y: 67.10, round: 54, sonar: 'nonextended' },
        {x: 478.33, y: 69.65, round: 55, sonar: 'nonextended' },
        {x: 487.77, y: 72.93, round: 56, sonar: 'nonextended' },
        {x: 497.76, y: 73.50, round: 57, sonar: 'nonextended' },
        {x: 507.65, y: 74.95, round: 58, sonar: 'nonextended' },
        {x: 517.39, y: 77.20, round: 59, sonar: 'nonextended' },
        {x: 527.39, y: 77.08, round: 60, sonar: 'nonextended' },
        {x: 537.20, y: 75.10, round: 61, sonar: 'nonextended' },
        {x: 547.19, y: 74.63, round: 62, sonar: 'nonextended' },
        {x: 556.54, y: 71.11, round: 63, sonar: 'nonextended' },
        {x: 565.36, y: 66.38, round: 64, sonar: 'nonextended' },
        {x: 571.93, y: 62.77, round: 65, sonar: 'nonextended' },
        {x: 580.91, y: 58.37, round: 66, sonar: 'nonextended' },
        {x: 589.38, y: 53.05, round: 67, sonar: 'nonextended' },
        {x: 598.75, y: 49.57, round: 68, sonar: 'nonextended' },
        {x: 607.08, y: 44.04, round: 69, sonar: 'nonextended' },
        {x: 616.40, y: 40.40, round: 70, sonar: 'nonextended' },
        {x: 622.99, y: 36.83, round: 71, sonar: 'nonextended' },
        {x: 628.98, y: 32.31, round: 72, sonar: 'nonextended' },
        {x: 638.39, y: 28.94, round: 73, sonar: 'nonextended' },
        {x: 648.38, y: 28.41, round: 74, sonar: 'nonextended' },
        {x: 658.38, y: 28.48, round: 75, sonar: 'nonextended' },
        {x: 668.16, y: 30.57, round: 76, sonar: 'nonextended' },
        {x: 676.74, y: 35.69, round: 77, sonar: 'nonextended' },
        {x: 684.13, y: 42.43, round: 78, sonar: 'nonextended' },
        {x: 689.77, y: 50.69, round: 79, sonar: 'nonextended' },
        {x: 697.34, y: 57.22, round: 80, sonar: 'nonextended' },
        {x: 702.98, y: 65.48, round: 81, sonar: 'nonextended' },
        {x: 709.15, y: 73.35, round: 82, sonar: 'nonextended' },
        {x: 712.64, y: 82.72, round: 83, sonar: 'nonextended' },
        {x: 712.96, y: 92.72, round: 84, sonar: 'nonextended' },
        {x: 710.58, y: 102.43, round: 85, sonar: 'nonextended' },
        {x: 706.58, y: 111.60, round: 86, sonar: 'nonextended' },
        {x: 699.79, y: 118.94, round: 87, sonar: 'nonextended' },
        {x: 693.84, y: 126.97, round: 88, sonar: 'nonextended' },
        {x: 685.84, y: 132.97, round: 89, sonar: 'nonextended' },
        {x: 676.72, y: 137.07, round: 90, sonar: 'nonextended' },
        {x: 670.40, y: 141.12, round: 91, sonar: 'nonextended' },
        {x: 661.40, y: 145.48, round: 92, sonar: 'nonextended' },
        {x: 651.52, y: 146.97, round: 93, sonar: 'nonextended' },
        {x: 641.65, y: 148.59, round: 94, sonar: 'nonextended' },
        {x: 632.60, y: 152.85, round: 95, sonar: 'nonextended' },
        {x: 623.37, y: 156.70, round: 96, sonar: 'nonextended' },
        {x: 614.18, y: 160.65, round: 97, sonar: 'nonextended' },
        {x: 604.51, y: 163.17, round: 98, sonar: 'nonextended' },
        {x: 594.51, y: 162.92, round: 99, sonar: 'nonextended' },
        {x: 584.55, y: 163.79, round: 100, sonar: 'nonextended' },
        {x: 577.23, y: 162.14, round: 101, sonar: 'nonextended' },
        {x: 567.49, y: 159.87, round: 102, sonar: 'nonextended' },
        {x: 558.05, y: 156.57, round: 103, sonar: 'nonextended' },
        {x: 549.22, y: 151.88, round: 104, sonar: 'nonextended' },
        {x: 539.36, y: 150.21, round: 105, sonar: 'nonextended' },
        {x: 529.65, y: 147.84, round: 106, sonar: 'nonextended' },
        {x: 520.44, y: 143.94, round: 107, sonar: 'nonextended' },
        {x: 511.19, y: 140.14, round: 108, sonar: 'nonextended' },
        {x: 501.50, y: 137.68, round: 109, sonar: 'nonextended' },
        {x: 492.50, y: 133.31, round: 110, sonar: 'nonextended' },
        {x: 484.03, y: 128.00, round: 111, sonar: 'nonextended' },
        {x: 476.81, y: 125.95, round: 112, sonar: 'nonextended' },
        {x: 466.87, y: 124.89, round: 113, sonar: 'nonextended' },
        {x: 457.79, y: 120.69, round: 114, sonar: 'nonextended' },
        {x: 448.33, y: 117.44, round: 115, sonar: 'nonextended' },
        {x: 439.37, y: 113.00, round: 116, sonar: 'nonextended' },
        {x: 429.73, y: 110.37, round: 117, sonar: 'nonextended' },
        {x: 420.12, y: 107.59, round: 118, sonar: 'nonextended' },
        {x: 413.03, y: 105.16, round: 119, sonar: 'nonextended' },
        {x: 403.13, y: 103.70, round: 120, sonar: 'nonextended' },
        {x: 393.21, y: 102.49, round: 121, sonar: 'nonextended' },
        {x: 383.31, y: 101.03, round: 122, sonar: 'nonextended' },
        {x: 373.41, y: 102.39, round: 123, sonar: 'nonextended' },
        {x: 363.61, y: 104.39, round: 124, sonar: 'nonextended' },
        {x: 353.95, y: 106.98, round: 125, sonar: 'nonextended' },
        {x: 345.22, y: 111.87, round: 126, sonar: 'nonextended' },
        {x: 336.03, y: 115.80, round: 127, sonar: 'nonextended' },
        {x: 326.30, y: 118.10, round: 128, sonar: 'nonextended' },
        {x: 317.82, y: 123.39, round: 129, sonar: 'nonextended' },
        {x: 309.67, y: 129.19, round: 130, sonar: 'nonextended' },
        {x: 301.61, y: 135.11, round: 131, sonar: 'nonextended' },
        {x: 296.05, y: 143.42, round: 132, sonar: 'nonextended' },
        {x: 290.37, y: 151.66, round: 133, sonar: 'nonextended' },
        {x: 285.26, y: 160.25, round: 134, sonar: 'nonextended' },
        {x: 277.91, y: 167.04, round: 135, sonar: 'nonextended' },
        {x: 271.39, y: 174.62, round: 136, sonar: 'nonextended' },
        {x: 265.83, y: 182.93, round: 137, sonar: 'nonextended' },
        {x: 262.17, y: 192.23, round: 138, sonar: 'nonextended' },
        {x: 262.17, y: 192.23, round: 139, sonar: 'nonextended' },
        {x: 253.00, y: 209.84, round: 140, sonar: 'nonextended' },
        {x: 245.12, y: 216.00, round: 141, sonar: 'nonextended' },
        {x: 235.91, y: 219.88, round: 142, sonar: 'nonextended' },
        {x: 226.25, y: 222.50, round: 143, sonar: 'nonextended' },
        {x: 216.32, y: 223.63, round: 144, sonar: 'nonextended' },
        {x: 206.32, y: 223.93, round: 145, sonar: 'nonextended' },
        {x: 196.34, y: 223.28, round: 146, sonar: 'nonextended' },
        {x: 187.12, y: 219.41, round: 147, sonar: 'nonextended' },
        {x: 178.25, y: 214.79, round: 148, sonar: 'nonextended' },
        {x: 169.15, y: 210.66, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(53335, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.49, y: 274.75, round: 2, sonar: 'nonextended' },
        {x: 132.45, y: 275.34, round: 3, sonar: 'nonextended' },
        {x: 139.86, y: 274.18, round: 4, sonar: 'nonextended' },
        {x: 139.86, y: 274.18, round: 5, sonar: 'nonextended' },
        {x: 159.70, y: 276.26, round: 6, sonar: 'nonextended' },
        {x: 169.30, y: 279.06, round: 7, sonar: 'nonextended' },
        {x: 179.08, y: 281.15, round: 8, sonar: 'nonextended' },
        {x: 189.07, y: 280.72, round: 9, sonar: 'nonextended' },
        {x: 198.55, y: 277.54, round: 10, sonar: 'nonextended' },
        {x: 207.36, y: 272.82, round: 11, sonar: 'nonextended' },
        {x: 214.10, y: 265.43, round: 12, sonar: 'nonextended' },
        {x: 220.17, y: 257.48, round: 13, sonar: 'nonextended' },
        {x: 226.90, y: 250.09, round: 14, sonar: 'nonextended' },
        {x: 234.20, y: 243.25, round: 15, sonar: 'nonextended' },
        {x: 239.88, y: 235.02, round: 16, sonar: 'nonextended' },
        {x: 247.06, y: 228.06, round: 17, sonar: 'nonextended' },
        {x: 253.64, y: 220.53, round: 18, sonar: 'nonextended' },
        {x: 260.41, y: 213.17, round: 19, sonar: 'nonextended' },
        {x: 267.83, y: 206.46, round: 20, sonar: 'nonextended' },
        {x: 273.72, y: 198.39, round: 21, sonar: 'nonextended' },
        {x: 277.49, y: 189.12, round: 22, sonar: 'nonextended' },
        {x: 282.89, y: 180.71, round: 23, sonar: 'nonextended' },
        {x: 286.01, y: 171.21, round: 24, sonar: 'nonextended' },
        {x: 291.78, y: 163.03, round: 25, sonar: 'nonextended' },
        {x: 295.68, y: 153.83, round: 26, sonar: 'nonextended' },
        {x: 297.93, y: 144.08, round: 27, sonar: 'nonextended' },
        {x: 301.67, y: 134.81, round: 28, sonar: 'nonextended' },
        {x: 307.77, y: 126.88, round: 29, sonar: 'nonextended' },
        {x: 316.15, y: 121.43, round: 30, sonar: 'nonextended' },
        {x: 325.48, y: 117.83, round: 31, sonar: 'nonextended' },
        {x: 335.20, y: 115.45, round: 32, sonar: 'nonextended' },
        {x: 345.16, y: 114.58, round: 33, sonar: 'nonextended' },
        {x: 354.73, y: 111.69, round: 34, sonar: 'nonextended' },
        {x: 364.46, y: 109.35, round: 35, sonar: 'nonextended' },
        {x: 374.45, y: 109.49, round: 36, sonar: 'nonextended' },
        {x: 384.29, y: 107.66, round: 37, sonar: 'nonextended' },
        {x: 393.83, y: 104.68, round: 38, sonar: 'nonextended' },
        {x: 403.83, y: 104.85, round: 39, sonar: 'nonextended' },
        {x: 413.51, y: 102.32, round: 40, sonar: 'nonextended' },
        {x: 423.40, y: 100.88, round: 41, sonar: 'nonextended' },
        {x: 433.34, y: 101.97, round: 42, sonar: 'nonextended' },
        {x: 442.90, y: 104.93, round: 43, sonar: 'nonextended' },
        {x: 452.08, y: 108.87, round: 44, sonar: 'nonextended' },
        {x: 461.57, y: 112.02, round: 45, sonar: 'nonextended' },
        {x: 471.47, y: 113.49, round: 46, sonar: 'nonextended' },
        {x: 481.46, y: 113.93, round: 47, sonar: 'nonextended' },
        {x: 491.44, y: 114.44, round: 48, sonar: 'nonextended' },
        {x: 501.04, y: 111.62, round: 49, sonar: 'nonextended' },
        {x: 510.63, y: 108.79, round: 50, sonar: 'nonextended' },
        {x: 519.62, y: 104.42, round: 51, sonar: 'nonextended' },
        {x: 526.74, y: 102.05, round: 52, sonar: 'nonextended' },
        {x: 536.70, y: 101.21, round: 53, sonar: 'nonextended' },
        {x: 546.70, y: 101.40, round: 54, sonar: 'nonextended' },
        {x: 556.70, y: 101.27, round: 55, sonar: 'nonextended' },
        {x: 566.43, y: 98.96, round: 56, sonar: 'nonextended' },
        {x: 576.24, y: 97.04, round: 57, sonar: 'nonextended' },
        {x: 583.74, y: 97.01, round: 58, sonar: 'nonextended' },
        {x: 593.38, y: 99.67, round: 59, sonar: 'nonextended' },
        {x: 603.38, y: 99.88, round: 60, sonar: 'nonextended' },
        {x: 612.99, y: 97.10, round: 61, sonar: 'nonextended' },
        {x: 622.86, y: 95.54, round: 62, sonar: 'nonextended' },
        {x: 632.86, y: 95.77, round: 63, sonar: 'nonextended' },
        {x: 642.78, y: 94.50, round: 64, sonar: 'nonextended' },
        {x: 651.99, y: 90.60, round: 65, sonar: 'nonextended' },
        {x: 661.86, y: 89.00, round: 66, sonar: 'nonextended' },
        {x: 671.85, y: 89.41, round: 67, sonar: 'nonextended' },
        {x: 681.70, y: 91.14, round: 68, sonar: 'nonextended' },
        {x: 690.87, y: 95.14, round: 69, sonar: 'nonextended' },
        {x: 698.40, y: 101.72, round: 70, sonar: 'nonextended' },
        {x: 704.88, y: 109.33, round: 71, sonar: 'nonextended' },
        {x: 710.90, y: 117.32, round: 72, sonar: 'nonextended' },
        {x: 716.87, y: 125.35, round: 73, sonar: 'nonextended' },
        {x: 722.53, y: 133.59, round: 74, sonar: 'nonextended' },
        {x: 730.56, y: 139.54, round: 75, sonar: 'nonextended' },
        {x: 736.66, y: 147.47, round: 76, sonar: 'nonextended' },
        {x: 744.00, y: 154.26, round: 77, sonar: 'nonextended' },
        {x: 750.10, y: 162.19, round: 78, sonar: 'nonextended' },
        {x: 754.89, y: 170.96, round: 79, sonar: 'nonextended' },
        {x: 756.53, y: 180.82, round: 80, sonar: 'nonextended' },
        {x: 759.75, y: 190.29, round: 81, sonar: 'nonextended' },
        {x: 763.02, y: 199.74, round: 82, sonar: 'nonextended' },
        {x: 766.17, y: 209.23, round: 83, sonar: 'nonextended' },
        {x: 770.22, y: 218.38, round: 84, sonar: 'nonextended' },
        {x: 772.63, y: 228.08, round: 85, sonar: 'nonextended' },
        {x: 771.97, y: 238.06, round: 86, sonar: 'nonextended' },
        {x: 771.40, y: 245.54, round: 87, sonar: 'nonextended' },
        {x: 768.46, y: 255.10, round: 88, sonar: 'nonextended' },
        {x: 767.80, y: 265.07, round: 89, sonar: 'nonextended' },
        {x: 765.24, y: 272.13, round: 90, sonar: 'nonextended' },
        {x: 760.47, y: 280.91, round: 91, sonar: 'nonextended' },
        {x: 756.16, y: 289.94, round: 92, sonar: 'nonextended' },
        {x: 752.26, y: 299.15, round: 93, sonar: 'nonextended' },
        {x: 746.08, y: 307.01, round: 94, sonar: 'nonextended' },
        {x: 739.75, y: 314.75, round: 95, sonar: 'nonextended' },
        {x: 732.53, y: 321.67, round: 96, sonar: 'nonextended' },
        {x: 724.01, y: 326.90, round: 97, sonar: 'nonextended' },
        {x: 714.65, y: 330.42, round: 98, sonar: 'nonextended' },
        {x: 704.82, y: 332.24, round: 99, sonar: 'nonextended' },
        {x: 694.83, y: 331.70, round: 100, sonar: 'nonextended' },
        {x: 685.06, y: 333.82, round: 101, sonar: 'nonextended' },
        {x: 675.07, y: 333.43, round: 102, sonar: 'nonextended' },
        {x: 665.08, y: 334.02, round: 103, sonar: 'nonextended' },
        {x: 655.10, y: 333.38, round: 104, sonar: 'nonextended' },
        {x: 645.11, y: 333.01, round: 105, sonar: 'nonextended' },
        {x: 635.11, y: 332.89, round: 106, sonar: 'nonextended' },
        {x: 625.17, y: 333.93, round: 107, sonar: 'nonextended' },
        {x: 615.26, y: 332.53, round: 108, sonar: 'nonextended' },
        {x: 605.34, y: 331.30, round: 109, sonar: 'nonextended' },
        {x: 596.41, y: 326.80, round: 110, sonar: 'nonextended' },
        {x: 589.25, y: 319.82, round: 111, sonar: 'nonextended' },
        {x: 584.66, y: 310.94, round: 112, sonar: 'nonextended' },
        {x: 581.36, y: 301.50, round: 113, sonar: 'nonextended' },
        {x: 579.38, y: 291.69, round: 114, sonar: 'nonextended' },
        {x: 575.21, y: 282.61, round: 115, sonar: 'nonextended' },
        {x: 573.66, y: 272.73, round: 116, sonar: 'nonextended' },
        {x: 569.45, y: 263.66, round: 117, sonar: 'nonextended' },
        {x: 567.10, y: 253.94, round: 118, sonar: 'nonextended' },
        {x: 566.78, y: 243.94, round: 119, sonar: 'nonextended' },
        {x: 565.31, y: 234.05, round: 120, sonar: 'nonextended' },
        {x: 562.99, y: 224.32, round: 121, sonar: 'nonextended' },
        {x: 563.39, y: 214.33, round: 122, sonar: 'nonextended' },
        {x: 565.68, y: 204.60, round: 123, sonar: 'nonextended' },
        {x: 569.58, y: 195.39, round: 124, sonar: 'nonextended' },
        {x: 573.73, y: 186.29, round: 125, sonar: 'nonextended' },
        {x: 579.79, y: 178.33, round: 126, sonar: 'nonextended' },
        {x: 583.61, y: 169.09, round: 127, sonar: 'nonextended' },
        {x: 585.78, y: 159.33, round: 128, sonar: 'nonextended' },
        {x: 589.48, y: 150.04, round: 129, sonar: 'nonextended' },
        {x: 592.26, y: 140.43, round: 130, sonar: 'nonextended' },
        {x: 596.73, y: 131.49, round: 131, sonar: 'nonextended' },
        {x: 603.96, y: 124.57, round: 132, sonar: 'nonextended' },
        {x: 613.02, y: 120.36, round: 133, sonar: 'nonextended' },
        {x: 622.87, y: 118.62, round: 134, sonar: 'nonextended' },
        {x: 632.15, y: 114.89, round: 135, sonar: 'nonextended' },
        {x: 639.77, y: 108.41, round: 136, sonar: 'nonextended' },
        {x: 649.07, y: 104.74, round: 137, sonar: 'nonextended' },
        {x: 658.51, y: 101.45, round: 138, sonar: 'nonextended' },
        {x: 658.51, y: 101.45, round: 139, sonar: 'nonextended' },
        {x: 675.56, y: 91.04, round: 140, sonar: 'nonextended' },
        {x: 682.47, y: 83.81, round: 141, sonar: 'nonextended' },
        {x: 690.72, y: 78.16, round: 142, sonar: 'nonextended' },
        {x: 699.22, y: 72.89, round: 143, sonar: 'nonextended' },
        {x: 704.05, y: 67.15, round: 144, sonar: 'nonextended' },
        {x: 710.80, y: 59.77, round: 145, sonar: 'nonextended' },
        {x: 715.89, y: 54.27, round: 146, sonar: 'nonextended' },
        {x: 722.92, y: 47.15, round: 147, sonar: 'nonextended' },
        {x: 730.79, y: 40.99, round: 148, sonar: 'nonextended' },
        {x: 737.70, y: 38.07, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(53376, [
        {x: 554.25, y: 196.54, round: 123 },
        {x: 545.11, y: 178.75, round: 124 },
    ]));
    torpedos.push(APP.waterObject(53345, [
        {x: 315.46, y: 267.37, round: 28 },
        {x: 305.54, y: 284.73, round: 29 },
    ]));
    torpedos.push(APP.waterObject(53377, [
        {x: 343.63, y: 103.49, round: 125 },
        {x: 323.65, y: 102.58, round: 126 },
        {x: 303.67, y: 101.68, round: 127 },
        {x: 283.69, y: 100.78, round: 128 },
        {x: 263.71, y: 99.87, round: 129 },
        {x: 243.73, y: 98.97, round: 130 },
    ]));
    torpedos.push(APP.waterObject(53362, [
        {x: 697.77, y: 35.42, round: 77 },
        {x: 717.47, y: 38.89, round: 78 },
        {x: 737.16, y: 42.36, round: 79 },
        {x: 756.86, y: 45.83, round: 80 },
        {x: 678.07, y: 31.95, round: 76 },
    ]));
    torpedos.push(APP.waterObject(53364, [
        {x: 731.45, y: 154.94, round: 79 },
        {x: 712.81, y: 147.70, round: 80 },
        {x: 675.53, y: 133.21, round: 82 },
        {x: 656.88, y: 125.97, round: 83 },
    ]));
    torpedos.push(APP.waterObject(53366, [
        {x: 684.83, y: 167.61, round: 88 },
        {x: 677.79, y: 186.33, round: 89 },
        {x: 670.76, y: 205.05, round: 90 },
        {x: 705.93, y: 111.44, round: 85 },
        {x: 698.90, y: 130.16, round: 86 },
        {x: 691.86, y: 148.89, round: 87 },
    ]));
    torpedos.push(APP.waterObject(53367, [
        {x: 750.27, y: 216.94, round: 85 },
        {x: 730.33, y: 215.50, round: 86 },
        {x: 710.38, y: 214.06, round: 87 },
    ]));
    torpedos.push(APP.waterObject(53370, [
        {x: 718.15, y: 263.42, round: 99 },
        {x: 727.74, y: 302.26, round: 97 },
        {x: 722.95, y: 282.84, round: 98 },
    ]));
    torpedos.push(APP.waterObject(53371, [
        {x: 602.92, y: 122.26, round: 99 },
        {x: 597.29, y: 103.07, round: 100 },
        {x: 608.55, y: 141.46, round: 98 },
    ]));
    torpedos.push(APP.waterObject(53373, [
        {x: 686.66, y: 317.13, round: 103 },
        {x: 698.26, y: 300.84, round: 104 },
    ]));
    torpedos.push(APP.waterObject(53375, [
        {x: 396.49, y: 37.60, round: 121 },
        {x: 421.42, y: 92.18, round: 118 },
        {x: 413.11, y: 73.98, round: 119 },
        {x: 404.80, y: 55.79, round: 120 },
    ]));

    otherSubmarines.push(APP.waterObject(53336, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 580.77, y: 131.30, round: 98 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 609.75, y: 139.07, round: 101 },
        {x: 590.43, y: 133.89, round: 99 },
        {x: 571.11, y: 128.72, round: 97 },
        {x: 619.41, y: 141.66, round: 102 },
        {x: 600.09, y: 136.48, round: 100 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 629.07, y: 144.24, round: 103 },
        {x: 197.47, y: 202.53, round: 17 },
        {x: 561.45, y: 126.13, round: 96 },
    ]));
    otherSubmarines.push(APP.waterObject(53337, [
        {x: 336.02, y: 118.55, round: 126 },
        {x: 362.00, y: 103.55, round: 129 },
        {x: 353.34, y: 108.55, round: 128 },
        {x: 318.70, y: 128.55, round: 124 },
        {x: 327.36, y: 123.55, round: 125 },
        {x: 310.04, y: 133.55, round: 123 },
        {x: 344.68, y: 113.55, round: 127 },
        {x: 370.66, y: 98.55, round: 130 },
    ]));
    otherSubmarines.push(APP.waterObject(53338, [
        {x: 754.68, y: 143.30, round: 84 },
        {x: 563.83, y: 213.77, round: 119 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 523.83, y: 144.49, round: 127 },
        {x: 667.94, y: 300.37, round: 102 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 578.83, y: 239.75, round: 116 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 687.94, y: 265.73, round: 98 },
        {x: 573.83, y: 231.09, round: 117 },
        {x: 568.83, y: 222.43, round: 118 },
        {x: 732.94, y: 98.81, round: 79 },
        {x: 752.94, y: 133.45, round: 83 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 747.94, y: 124.79, round: 82 },
        {x: 588.83, y: 257.07, round: 114 },
        {x: 613.83, y: 300.37, round: 109 },
        {x: 543.83, y: 179.13, round: 123 },
        {x: 608.83, y: 291.71, round: 110 },
        {x: 722.94, y: 81.49, round: 77 },
        {x: 593.83, y: 265.73, round: 113 },
        {x: 722.94, y: 61.80, round: 75 },
        {x: 727.94, y: 90.15, round: 78 },
        {x: 677.94, y: 283.05, round: 100 },
        {x: 682.94, y: 274.39, round: 99 },
        {x: 626.49, y: 315.46, round: 107 },
        {x: 742.94, y: 116.13, round: 81 },
        {x: 732.94, y: 187.79, round: 89 },
        {x: 533.83, y: 161.81, round: 125 },
        {x: 635.89, y: 318.88, round: 106 },
        {x: 528.83, y: 153.15, round: 126 },
        {x: 538.83, y: 170.47, round: 124 },
        {x: 737.94, y: 179.13, round: 88 },
        {x: 558.83, y: 205.11, round: 120 },
        {x: 553.83, y: 196.45, round: 121 },
        {x: 662.94, y: 309.03, round: 103 },
        {x: 548.83, y: 187.79, round: 122 },
        {x: 518.83, y: 135.83, round: 128 },
        {x: 598.83, y: 274.39, round: 112 },
        {x: 583.83, y: 248.41, round: 115 },
        {x: 603.83, y: 283.05, round: 111 },
        {x: 721.21, y: 71.64, round: 76 },
        {x: 672.94, y: 291.71, round: 101 },
        {x: 737.94, y: 107.47, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(53339, [
        {x: 267.86, y: 252.61, round: 29 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 592.02, y: 153.59, round: 105 },
        {x: 582.36, y: 151.00, round: 104 },
        {x: 316.16, y: 265.55, round: 24 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 543.73, y: 140.65, round: 100 },
        {x: 572.71, y: 148.41, round: 103 },
        {x: 553.39, y: 143.23, round: 101 },
        {x: 601.68, y: 156.18, round: 106 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 345.14, y: 273.32, round: 21 },
        {x: 287.18, y: 257.79, round: 27 },
        {x: 534.07, y: 138.06, round: 99 },
        {x: 563.05, y: 145.82, round: 102 },
    ]));
    otherSubmarines.push(APP.waterObject(53340, [
        {x: 381.02, y: 99.62, round: 119 },
        {x: 389.21, y: 93.89, round: 120 },
        {x: 417.89, y: 96.40, round: 123 },
        {x: 398.87, y: 91.30, round: 121 },
        {x: 408.83, y: 92.17, round: 122 },
        {x: 364.63, y: 111.09, round: 117 },
        {x: 372.83, y: 105.36, round: 118 },
        {x: 426.96, y: 100.62, round: 124 },
    ]));
    otherSubmarines.push(APP.waterObject(53341, [
        {x: 451.10, y: 100.18, round: 37 },
        {x: 554.47, y: 137.80, round: 48 },
        {x: 362.06, y: 118.91, round: 26 },
        {x: 332.06, y: 170.87, round: 20 },
        {x: 469.89, y: 107.02, round: 39 },
        {x: 563.86, y: 141.22, round: 49 },
        {x: 342.06, y: 153.55, round: 22 },
        {x: 432.31, y: 93.34, round: 35 },
        {x: 516.88, y: 124.12, round: 44 },
        {x: 327.06, y: 179.53, round: 19 },
        {x: 441.70, y: 96.76, round: 36 },
        {x: 573.26, y: 144.64, round: 50 },
        {x: 337.06, y: 162.21, round: 21 },
        {x: 545.07, y: 134.38, round: 47 },
        {x: 498.08, y: 117.28, round: 42 },
        {x: 507.48, y: 120.70, round: 43 },
        {x: 357.06, y: 127.57, round: 25 },
        {x: 352.06, y: 136.23, round: 24 },
        {x: 347.06, y: 144.89, round: 23 },
        {x: 460.50, y: 103.60, round: 38 },
        {x: 535.67, y: 130.96, round: 46 },
        {x: 413.51, y: 86.50, round: 33 },
        {x: 479.29, y: 110.44, round: 40 },
        {x: 422.91, y: 89.92, round: 34 },
        {x: 488.69, y: 113.86, round: 41 },
        {x: 526.27, y: 127.54, round: 45 },
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
        APP.put(myScores, {score: 100, round: 125})
        APP.put(myScores, {score: 100, round: 126})
        APP.put(myScores, {score: 100, round: 127})
        APP.put(myScores, {score: 100, round: 128})
        APP.put(myScores, {score: 100, round: 129})
        APP.put(myScores, {score: 100, round: 130})
        APP.put(myScores, {score: 100, round: 131})
        APP.put(myScores, {score: 100, round: 132})
        APP.put(myScores, {score: 100, round: 133})
        APP.put(myScores, {score: 100, round: 134})
        APP.put(myScores, {score: 100, round: 135})
        APP.put(myScores, {score: 100, round: 136})
        APP.put(myScores, {score: 100, round: 137})
        APP.put(myScores, {score: 100, round: 138})
        APP.put(myScores, {score: 100, round: 139})
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
		gameId: 'game20161109_05_51_02',
		gameTime: '2016-11-09 05:51:02',
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