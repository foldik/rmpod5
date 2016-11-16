APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(53410, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.41, y: 299.35, round: 2, sonar: 'nonextended' },
        {x: 107.37, y: 298.70, round: 3, sonar: 'nonextended' },
        {x: 114.84, y: 299.39, round: 4, sonar: 'nonextended' },
        {x: 124.83, y: 299.82, round: 5, sonar: 'nonextended' },
        {x: 134.75, y: 298.56, round: 6, sonar: 'nonextended' },
        {x: 144.62, y: 296.94, round: 7, sonar: 'nonextended' },
        {x: 154.62, y: 297.15, round: 8, sonar: 'nonextended' },
        {x: 164.59, y: 297.86, round: 9, sonar: 'nonextended' },
        {x: 174.07, y: 301.03, round: 10, sonar: 'nonextended' },
        {x: 184.02, y: 302.08, round: 11, sonar: 'nonextended' },
        {x: 193.82, y: 300.08, round: 12, sonar: 'nonextended' },
        {x: 202.68, y: 295.45, round: 13, sonar: 'nonextended' },
        {x: 209.60, y: 288.23, round: 14, sonar: 'nonextended' },
        {x: 218.53, y: 283.72, round: 15, sonar: 'nonextended' },
        {x: 227.58, y: 279.47, round: 16, sonar: 'nonextended' },
        {x: 237.40, y: 277.56, round: 17, sonar: 'nonextended' },
        {x: 247.36, y: 278.40, round: 18, sonar: 'nonextended' },
        {x: 257.05, y: 280.86, round: 19, sonar: 'nonextended' },
        {x: 265.88, y: 285.56, round: 20, sonar: 'nonextended' },
        {x: 274.96, y: 289.75, round: 21, sonar: 'nonextended' },
        {x: 284.07, y: 293.86, round: 22, sonar: 'nonextended' },
        {x: 293.95, y: 295.45, round: 23, sonar: 'nonextended' },
        {x: 303.92, y: 294.67, round: 24, sonar: 'nonextended' },
        {x: 313.73, y: 292.76, round: 25, sonar: 'nonextended' },
        {x: 323.67, y: 293.83, round: 26, sonar: 'nonextended' },
        {x: 333.53, y: 292.12, round: 27, sonar: 'nonextended' },
        {x: 342.33, y: 287.38, round: 28, sonar: 'nonextended' },
        {x: 351.93, y: 284.57, round: 29, sonar: 'nonextended' },
        {x: 361.17, y: 280.75, round: 30, sonar: 'nonextended' },
        {x: 367.79, y: 277.22, round: 31, sonar: 'nonextended' },
        {x: 377.65, y: 275.56, round: 32, sonar: 'nonextended' },
        {x: 387.45, y: 273.58, round: 33, sonar: 'nonextended' },
        {x: 397.04, y: 270.74, round: 34, sonar: 'nonextended' },
        {x: 405.61, y: 265.60, round: 35, sonar: 'nonextended' },
        {x: 415.16, y: 262.63, round: 36, sonar: 'nonextended' },
        {x: 422.08, y: 259.72, round: 37, sonar: 'nonextended' },
        {x: 432.06, y: 259.20, round: 38, sonar: 'nonextended' },
        {x: 442.04, y: 259.95, round: 39, sonar: 'nonextended' },
        {x: 451.83, y: 261.98, round: 40, sonar: 'nonextended' },
        {x: 461.83, y: 262.03, round: 41, sonar: 'nonextended' },
        {x: 471.82, y: 261.81, round: 42, sonar: 'nonextended' },
        {x: 481.82, y: 261.72, round: 43, sonar: 'nonextended' },
        {x: 491.50, y: 259.18, round: 44, sonar: 'nonextended' },
        {x: 501.12, y: 256.46, round: 45, sonar: 'nonextended' },
        {x: 509.35, y: 250.78, round: 46, sonar: 'nonextended' },
        {x: 518.43, y: 246.60, round: 47, sonar: 'nonextended' },
        {x: 525.65, y: 239.68, round: 48, sonar: 'nonextended' },
        {x: 531.18, y: 231.35, round: 49, sonar: 'nonextended' },
        {x: 537.61, y: 223.69, round: 50, sonar: 'nonextended' },
        {x: 545.79, y: 217.94, round: 51, sonar: 'nonextended' },
        {x: 553.32, y: 211.35, round: 52, sonar: 'nonextended' },
        {x: 562.56, y: 207.52, round: 53, sonar: 'nonextended' },
        {x: 570.90, y: 202.01, round: 54, sonar: 'nonextended' },
        {x: 577.09, y: 194.15, round: 55, sonar: 'nonextended' },
        {x: 581.82, y: 185.34, round: 56, sonar: 'nonextended' },
        {x: 586.42, y: 176.46, round: 57, sonar: 'nonextended' },
        {x: 593.39, y: 169.30, round: 58, sonar: 'nonextended' },
        {x: 599.02, y: 161.03, round: 59, sonar: 'nonextended' },
        {x: 605.67, y: 153.56, round: 60, sonar: 'nonextended' },
        {x: 614.04, y: 148.09, round: 61, sonar: 'nonextended' },
        {x: 620.52, y: 140.47, round: 62, sonar: 'nonextended' },
        {x: 627.67, y: 133.49, round: 63, sonar: 'nonextended' },
        {x: 633.46, y: 125.33, round: 64, sonar: 'nonextended' },
        {x: 640.59, y: 118.32, round: 65, sonar: 'nonextended' },
        {x: 649.59, y: 113.97, round: 66, sonar: 'nonextended' },
        {x: 658.15, y: 108.80, round: 67, sonar: 'nonextended' },
        {x: 667.96, y: 106.86, round: 68, sonar: 'nonextended' },
        {x: 677.74, y: 104.74, round: 69, sonar: 'nonextended' },
        {x: 687.51, y: 102.64, round: 70, sonar: 'nonextended' },
        {x: 697.51, y: 102.25, round: 71, sonar: 'nonextended' },
        {x: 707.27, y: 104.39, round: 72, sonar: 'nonextended' },
        {x: 716.46, y: 108.33, round: 73, sonar: 'nonextended' },
        {x: 722.50, y: 112.78, round: 74, sonar: 'nonextended' },
        {x: 728.08, y: 121.08, round: 75, sonar: 'nonextended' },
        {x: 733.43, y: 129.53, round: 76, sonar: 'nonextended' },
        {x: 735.27, y: 136.80, round: 77, sonar: 'nonextended' },
        {x: 737.81, y: 146.47, round: 78, sonar: 'nonextended' },
        {x: 739.31, y: 156.36, round: 79, sonar: 'nonextended' },
        {x: 742.45, y: 165.85, round: 80, sonar: 'nonextended' },
        {x: 745.93, y: 175.23, round: 81, sonar: 'nonextended' },
        {x: 750.49, y: 184.13, round: 82, sonar: 'nonextended' },
        {x: 752.99, y: 193.81, round: 83, sonar: 'nonextended' },
        {x: 755.20, y: 203.56, round: 84, sonar: 'nonextended' },
        {x: 757.00, y: 213.40, round: 85, sonar: 'nonextended' },
        {x: 756.42, y: 223.38, round: 86, sonar: 'nonextended' },
        {x: 754.45, y: 233.19, round: 87, sonar: 'nonextended' },
        {x: 752.42, y: 242.98, round: 88, sonar: 'nonextended' },
        {x: 749.46, y: 249.87, round: 89, sonar: 'nonextended' },
        {x: 742.96, y: 257.47, round: 90, sonar: 'nonextended' },
        {x: 736.03, y: 264.68, round: 91, sonar: 'nonextended' },
        {x: 727.83, y: 270.40, round: 92, sonar: 'nonextended' },
        {x: 718.46, y: 273.91, round: 93, sonar: 'nonextended' },
        {x: 709.24, y: 277.78, round: 94, sonar: 'nonextended' },
        {x: 701.88, y: 284.55, round: 95, sonar: 'nonextended' },
        {x: 695.69, y: 292.40, round: 96, sonar: 'nonextended' },
        {x: 691.23, y: 301.35, round: 97, sonar: 'nonextended' },
        {x: 687.65, y: 310.69, round: 98, sonar: 'nonextended' },
        {x: 681.82, y: 318.81, round: 99, sonar: 'nonextended' },
        {x: 676.38, y: 327.20, round: 100, sonar: 'nonextended' },
        {x: 668.53, y: 333.40, round: 101, sonar: 'nonextended' },
        {x: 662.30, y: 341.22, round: 102, sonar: 'nonextended' },
        {x: 654.42, y: 347.38, round: 103, sonar: 'nonextended' },
        {x: 646.14, y: 352.98, round: 104, sonar: 'nonextended' },
        {x: 636.70, y: 356.28, round: 105, sonar: 'nonextended' },
        {x: 628.89, y: 362.52, round: 106, sonar: 'nonextended' },
        {x: 622.73, y: 366.80, round: 107, sonar: 'nonextended' },
        {x: 615.47, y: 373.68, round: 108, sonar: 'nonextended' },
        {x: 608.90, y: 377.31, round: 109, sonar: 'nonextended' },
        {x: 600.87, y: 383.27, round: 110, sonar: 'nonextended' },
        {x: 591.71, y: 387.26, round: 111, sonar: 'nonextended' },
        {x: 581.81, y: 388.70, round: 112, sonar: 'nonextended' },
        {x: 571.82, y: 388.44, round: 113, sonar: 'nonextended' },
        {x: 561.86, y: 387.51, round: 114, sonar: 'nonextended' },
        {x: 552.63, y: 383.67, round: 115, sonar: 'nonextended' },
        {x: 542.64, y: 383.12, round: 116, sonar: 'nonextended' },
        {x: 532.64, y: 383.30, round: 117, sonar: 'nonextended' },
        {x: 523.03, y: 380.53, round: 118, sonar: 'nonextended' },
        {x: 514.36, y: 375.55, round: 119, sonar: 'nonextended' },
        {x: 504.96, y: 372.14, round: 120, sonar: 'nonextended' },
        {x: 495.32, y: 369.48, round: 121, sonar: 'nonextended' },
        {x: 485.90, y: 366.14, round: 122, sonar: 'nonextended' },
        {x: 478.41, y: 365.77, round: 123, sonar: 'nonextended' },
        {x: 471.38, y: 363.15, round: 124, sonar: 'nonextended' },
        {x: 461.53, y: 361.42, round: 125, sonar: 'nonextended' },
        {x: 454.86, y: 357.99, round: 126, sonar: 'nonextended' },
        {x: 444.94, y: 356.72, round: 127, sonar: 'nonextended' },
        {x: 435.74, y: 352.80, round: 128, sonar: 'nonextended' },
        {x: 427.70, y: 346.86, round: 129, sonar: 'nonextended' },
        {x: 419.51, y: 341.13, round: 130, sonar: 'nonextended' },
        {x: 411.98, y: 334.55, round: 131, sonar: 'nonextended' },
        {x: 411.98, y: 334.55, round: 132, sonar: 'nonextended' },
        {x: 397.40, y: 320.97, round: 133, sonar: 'nonextended' },
        {x: 390.84, y: 313.42, round: 134, sonar: 'nonextended' },
        {x: 383.37, y: 306.77, round: 135, sonar: 'nonextended' },
        {x: 377.66, y: 298.56, round: 136, sonar: 'nonextended' },
        {x: 370.87, y: 291.21, round: 137, sonar: 'nonextended' },
        {x: 362.50, y: 285.74, round: 138, sonar: 'nonextended' },
        {x: 354.43, y: 279.84, round: 139, sonar: 'nonextended' },
        {x: 348.49, y: 271.80, round: 140, sonar: 'nonextended' },
        {x: 340.85, y: 265.34, round: 141, sonar: 'nonextended' },
        {x: 332.11, y: 260.49, round: 142, sonar: 'nonextended' },
        {x: 323.69, y: 255.09, round: 143, sonar: 'nonextended' },
        {x: 316.98, y: 247.67, round: 144, sonar: 'nonextended' },
        {x: 309.98, y: 240.53, round: 145, sonar: 'nonextended' },
        {x: 301.29, y: 235.59, round: 146, sonar: 'nonextended' },
        {x: 293.93, y: 228.82, round: 147, sonar: 'nonextended' },
        {x: 287.48, y: 221.18, round: 148, sonar: 'nonextended' },
        {x: 281.04, y: 213.52, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(53411, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.50, y: 275.02, round: 2, sonar: 'nonextended' },
        {x: 132.32, y: 273.70, round: 3, sonar: 'nonextended' },
        {x: 139.70, y: 272.32, round: 4, sonar: 'nonextended' },
        {x: 149.64, y: 271.31, round: 5, sonar: 'nonextended' },
        {x: 159.05, y: 267.92, round: 6, sonar: 'nonextended' },
        {x: 167.04, y: 261.90, round: 7, sonar: 'nonextended' },
        {x: 175.75, y: 256.98, round: 8, sonar: 'nonextended' },
        {x: 184.95, y: 253.08, round: 9, sonar: 'nonextended' },
        {x: 193.23, y: 247.47, round: 10, sonar: 'nonextended' },
        {x: 199.72, y: 239.87, round: 11, sonar: 'nonextended' },
        {x: 207.49, y: 233.57, round: 12, sonar: 'nonextended' },
        {x: 216.50, y: 229.23, round: 13, sonar: 'nonextended' },
        {x: 222.85, y: 225.24, round: 14, sonar: 'nonextended' },
        {x: 229.29, y: 217.59, round: 15, sonar: 'nonextended' },
        {x: 232.93, y: 208.28, round: 16, sonar: 'nonextended' },
        {x: 236.05, y: 198.78, round: 17, sonar: 'nonextended' },
        {x: 239.63, y: 189.44, round: 18, sonar: 'nonextended' },
        {x: 245.26, y: 181.18, round: 19, sonar: 'nonextended' },
        {x: 248.75, y: 171.80, round: 20, sonar: 'nonextended' },
        {x: 251.70, y: 162.25, round: 21, sonar: 'nonextended' },
        {x: 257.46, y: 154.07, round: 22, sonar: 'nonextended' },
        {x: 261.54, y: 144.94, round: 23, sonar: 'nonextended' },
        {x: 265.42, y: 138.52, round: 24, sonar: 'nonextended' },
        {x: 267.71, y: 128.79, round: 25, sonar: 'nonextended' },
        {x: 270.59, y: 119.21, round: 26, sonar: 'nonextended' },
        {x: 275.87, y: 110.72, round: 27, sonar: 'nonextended' },
        {x: 281.93, y: 102.77, round: 28, sonar: 'nonextended' },
        {x: 287.91, y: 94.76, round: 29, sonar: 'nonextended' },
        {x: 294.12, y: 90.54, round: 30, sonar: 'nonextended' },
        {x: 299.77, y: 85.61, round: 31, sonar: 'nonextended' },
        {x: 308.98, y: 81.73, round: 32, sonar: 'nonextended' },
        {x: 318.96, y: 81.07, round: 33, sonar: 'nonextended' },
        {x: 328.96, y: 80.77, round: 34, sonar: 'nonextended' },
        {x: 338.90, y: 79.67, round: 35, sonar: 'nonextended' },
        {x: 348.36, y: 76.45, round: 36, sonar: 'nonextended' },
        {x: 358.36, y: 76.63, round: 37, sonar: 'nonextended' },
        {x: 368.16, y: 74.62, round: 38, sonar: 'nonextended' },
        {x: 377.68, y: 71.56, round: 39, sonar: 'nonextended' },
        {x: 387.67, y: 71.43, round: 40, sonar: 'nonextended' },
        {x: 397.26, y: 74.29, round: 41, sonar: 'nonextended' },
        {x: 407.25, y: 74.60, round: 42, sonar: 'nonextended' },
        {x: 417.09, y: 76.38, round: 43, sonar: 'nonextended' },
        {x: 426.63, y: 79.40, round: 44, sonar: 'nonextended' },
        {x: 436.39, y: 81.55, round: 45, sonar: 'nonextended' },
        {x: 445.66, y: 85.31, round: 46, sonar: 'nonextended' },
        {x: 454.94, y: 89.04, round: 47, sonar: 'nonextended' },
        {x: 463.23, y: 94.63, round: 48, sonar: 'nonextended' },
        {x: 470.81, y: 101.15, round: 49, sonar: 'nonextended' },
        {x: 479.72, y: 105.70, round: 50, sonar: 'nonextended' },
        {x: 488.53, y: 110.43, round: 51, sonar: 'nonextended' },
        {x: 496.34, y: 116.67, round: 52, sonar: 'nonextended' },
        {x: 502.81, y: 124.30, round: 53, sonar: 'nonextended' },
        {x: 510.83, y: 130.27, round: 54, sonar: 'nonextended' },
        {x: 520.12, y: 133.97, round: 55, sonar: 'nonextended' },
        {x: 529.14, y: 138.28, round: 56, sonar: 'nonextended' },
        {x: 537.24, y: 144.14, round: 57, sonar: 'nonextended' },
        {x: 546.29, y: 148.40, round: 58, sonar: 'nonextended' },
        {x: 555.45, y: 152.42, round: 59, sonar: 'nonextended' },
        {x: 563.70, y: 158.07, round: 60, sonar: 'nonextended' },
        {x: 570.02, y: 165.82, round: 61, sonar: 'nonextended' },
        {x: 575.67, y: 174.07, round: 62, sonar: 'nonextended' },
        {x: 581.85, y: 181.93, round: 63, sonar: 'nonextended' },
        {x: 585.94, y: 191.05, round: 64, sonar: 'nonextended' },
        {x: 591.81, y: 199.15, round: 65, sonar: 'nonextended' },
        {x: 595.42, y: 208.48, round: 66, sonar: 'nonextended' },
        {x: 599.14, y: 217.76, round: 67, sonar: 'nonextended' },
        {x: 603.25, y: 226.88, round: 68, sonar: 'nonextended' },
        {x: 606.51, y: 236.33, round: 69, sonar: 'nonextended' },
        {x: 612.49, y: 244.34, round: 70, sonar: 'nonextended' },
        {x: 619.79, y: 251.18, round: 71, sonar: 'nonextended' },
        {x: 627.99, y: 256.91, round: 72, sonar: 'nonextended' },
        {x: 637.54, y: 259.85, round: 73, sonar: 'nonextended' },
        {x: 647.28, y: 262.12, round: 74, sonar: 'nonextended' },
        {x: 656.27, y: 266.50, round: 75, sonar: 'nonextended' },
        {x: 666.13, y: 268.15, round: 76, sonar: 'nonextended' },
        {x: 675.57, y: 271.48, round: 77, sonar: 'nonextended' },
        {x: 685.53, y: 272.28, round: 78, sonar: 'nonextended' },
        {x: 695.46, y: 271.04, round: 79, sonar: 'nonextended' },
        {x: 705.26, y: 273.00, round: 80, sonar: 'nonextended' },
        {x: 715.18, y: 274.26, round: 81, sonar: 'nonextended' },
        {x: 725.03, y: 275.99, round: 82, sonar: 'nonextended' },
        {x: 735.03, y: 275.74, round: 83, sonar: 'nonextended' },
        {x: 742.31, y: 273.93, round: 84, sonar: 'nonextended' },
        {x: 751.77, y: 270.70, round: 85, sonar: 'nonextended' },
        {x: 761.60, y: 268.87, round: 86, sonar: 'nonextended' },
        {x: 770.54, y: 264.38, round: 87, sonar: 'nonextended' },
        {x: 777.43, y: 257.13, round: 88, sonar: 'nonextended' },
        {x: 784.83, y: 250.41, round: 89, sonar: 'nonextended' },
        {x: 791.15, y: 242.66, round: 90, sonar: 'nonextended' },
        {x: 795.19, y: 233.51, round: 91, sonar: 'nonextended' },
        {x: 800.80, y: 225.23, round: 92, sonar: 'nonextended' },
        {x: 803.83, y: 215.70, round: 93, sonar: 'nonextended' },
        {x: 803.85, y: 205.70, round: 94, sonar: 'nonextended' },
        {x: 802.82, y: 195.76, round: 95, sonar: 'nonextended' },
        {x: 802.55, y: 185.76, round: 96, sonar: 'nonextended' },
        {x: 805.40, y: 176.17, round: 97, sonar: 'nonextended' },
        {x: 810.07, y: 167.33, round: 98, sonar: 'nonextended' },
        {x: 814.04, y: 158.15, round: 99, sonar: 'nonextended' },
        {x: 816.11, y: 148.37, round: 100, sonar: 'nonextended' },
        {x: 818.15, y: 138.58, round: 101, sonar: 'nonextended' },
        {x: 817.62, y: 128.59, round: 102, sonar: 'nonextended' },
        {x: 817.94, y: 121.10, round: 103, sonar: 'nonextended' },
        {x: 816.48, y: 111.21, round: 104, sonar: 'nonextended' },
        {x: 812.73, y: 101.94, round: 105, sonar: 'nonextended' },
        {x: 806.26, y: 94.31, round: 106, sonar: 'nonextended' },
        {x: 798.68, y: 87.79, round: 107, sonar: 'nonextended' },
        {x: 790.18, y: 82.53, round: 108, sonar: 'nonextended' },
        {x: 782.48, y: 76.15, round: 109, sonar: 'nonextended' },
        {x: 777.77, y: 70.31, round: 110, sonar: 'nonextended' },
        {x: 770.27, y: 63.69, round: 111, sonar: 'nonextended' },
        {x: 763.08, y: 56.75, round: 112, sonar: 'nonextended' },
        {x: 754.96, y: 50.91, round: 113, sonar: 'nonextended' },
        {x: 746.67, y: 45.32, round: 114, sonar: 'nonextended' },
        {x: 737.81, y: 40.68, round: 115, sonar: 'nonextended' },
        {x: 730.52, y: 38.90, round: 116, sonar: 'nonextended' },
        {x: 720.64, y: 37.39, round: 117, sonar: 'nonextended' },
        {x: 711.76, y: 32.78, round: 118, sonar: 'nonextended' },
        {x: 702.76, y: 28.43, round: 119, sonar: 'nonextended' },
        {x: 693.48, y: 24.70, round: 120, sonar: 'nonextended' },
        {x: 686.00, y: 24.21, round: 121, sonar: 'nonextended' },
        {x: 676.11, y: 25.71, round: 122, sonar: 'nonextended' },
        {x: 666.40, y: 28.09, round: 123, sonar: 'nonextended' },
        {x: 656.51, y: 29.57, round: 124, sonar: 'nonextended' },
        {x: 649.54, y: 32.34, round: 125, sonar: 'nonextended' },
        {x: 640.70, y: 37.01, round: 126, sonar: 'nonextended' },
        {x: 632.75, y: 43.08, round: 127, sonar: 'nonextended' },
        {x: 625.23, y: 49.67, round: 128, sonar: 'nonextended' },
        {x: 616.12, y: 53.81, round: 129, sonar: 'nonextended' },
        {x: 606.21, y: 55.12, round: 130, sonar: 'nonextended' },
        {x: 596.56, y: 57.73, round: 131, sonar: 'nonextended' },
        {x: 596.56, y: 57.73, round: 132, sonar: 'nonextended' },
        {x: 579.03, y: 66.82, round: 133, sonar: 'nonextended' },
        {x: 572.74, y: 70.89, round: 134, sonar: 'nonextended' },
        {x: 566.28, y: 78.52, round: 135, sonar: 'nonextended' },
        {x: 561.35, y: 87.22, round: 136, sonar: 'nonextended' },
        {x: 553.88, y: 93.88, round: 137, sonar: 'nonextended' },
        {x: 545.82, y: 99.79, round: 138, sonar: 'nonextended' },
        {x: 541.47, y: 105.90, round: 139, sonar: 'nonextended' },
        {x: 534.38, y: 112.95, round: 140, sonar: 'nonextended' },
        {x: 527.56, y: 120.27, round: 141, sonar: 'nonextended' },
        {x: 520.89, y: 127.72, round: 142, sonar: 'nonextended' },
        {x: 516.90, y: 134.07, round: 143, sonar: 'nonextended' },
        {x: 513.13, y: 143.33, round: 144, sonar: 'nonextended' },
        {x: 508.44, y: 152.17, round: 145, sonar: 'nonextended' },
        {x: 502.97, y: 160.54, round: 146, sonar: 'nonextended' },
        {x: 500.55, y: 170.24, round: 147, sonar: 'nonextended' },
        {x: 498.28, y: 179.98, round: 148, sonar: 'nonextended' },
        {x: 495.05, y: 189.44, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(53440, [
        {x: 715.40, y: 134.57, round: 78 },
        {x: 695.52, y: 132.35, round: 79 },
    ]));
    torpedos.push(APP.waterObject(53442, [
        {x: 682.64, y: 252.49, round: 79 },
        {x: 679.75, y: 232.70, round: 80 },
        {x: 676.86, y: 212.91, round: 81 },
    ]));
    torpedos.push(APP.waterObject(53443, [
        {x: 742.16, y: 176.99, round: 84 },
        {x: 731.34, y: 160.17, round: 85 },
    ]));
    torpedos.push(APP.waterObject(53444, [
        {x: 724.78, y: 264.31, round: 85 },
        {x: 707.24, y: 254.69, round: 86 },
        {x: 689.71, y: 245.06, round: 87 },
    ]));
    torpedos.push(APP.waterObject(53450, [
        {x: 640.73, y: 358.08, round: 108 },
        {x: 658.72, y: 349.35, round: 109 },
    ]));
    torpedos.push(APP.waterObject(53420, [
        {x: 220.50, y: 186.20, round: 18 },
        {x: 204.96, y: 173.62, round: 19 },
        {x: 189.41, y: 161.03, round: 20 },
    ]));
    torpedos.push(APP.waterObject(53421, [
        {x: 314.98, y: 284.63, round: 28 },
        {x: 296.44, y: 277.14, round: 29 },
    ]));
    torpedos.push(APP.waterObject(53423, [
        {x: 537.53, y: 289.62, round: 44 },
        {x: 556.63, y: 295.55, round: 45 },
        {x: 461.14, y: 265.88, round: 40 },
        {x: 480.24, y: 271.82, round: 41 },
        {x: 499.33, y: 277.75, round: 42 },
        {x: 518.43, y: 283.68, round: 43 },
    ]));
    torpedos.push(APP.waterObject(53456, [
        {x: 490.10, y: 106.24, round: 143 },
        {x: 471.37, y: 99.22, round: 144 },
        {x: 508.83, y: 113.25, round: 142 },
    ]));
    torpedos.push(APP.waterObject(53425, [
        {x: 429.25, y: 99.23, round: 45 },
        {x: 431.86, y: 119.05, round: 46 },
        {x: 434.48, y: 138.88, round: 47 },
    ]));
    torpedos.push(APP.waterObject(53457, [
        {x: 341.57, y: 264.06, round: 144 },
        {x: 359.44, y: 273.02, round: 145 },
    ]));
    torpedos.push(APP.waterObject(53426, [
        {x: 511.19, y: 230.96, round: 50 },
        {x: 491.19, y: 230.57, round: 51 },
    ]));
    torpedos.push(APP.waterObject(53427, [
        {x: 465.87, y: 120.13, round: 51 },
        {x: 452.03, y: 134.56, round: 52 },
        {x: 438.19, y: 149.00, round: 53 },
    ]));

    otherSubmarines.push(APP.waterObject(53412, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 232.82, y: 167.18, round: 12 },
        {x: 225.75, y: 174.25, round: 13 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
    ]));
    otherSubmarines.push(APP.waterObject(53413, [
        {x: 508.19, y: 285.90, round: 50 },
        {x: 518.38, y: 121.12, round: 145 },
        {x: 498.69, y: 117.65, round: 143 },
        {x: 518.45, y: 257.71, round: 47 },
        {x: 508.53, y: 119.39, round: 144 },
        {x: 532.13, y: 220.13, round: 43 },
        {x: 478.99, y: 114.18, round: 141 },
        {x: 511.61, y: 276.51, round: 49 },
        {x: 488.84, y: 115.92, round: 142 },
        {x: 521.87, y: 248.32, round: 46 },
        {x: 528.71, y: 229.52, round: 44 },
        {x: 528.23, y: 122.86, round: 146 },
        {x: 515.03, y: 267.11, round: 48 },
        {x: 538.08, y: 124.60, round: 147 },
        {x: 469.14, y: 112.44, round: 140 },
        {x: 525.29, y: 238.92, round: 45 },
        {x: 547.93, y: 126.33, round: 148 },
    ]));
    otherSubmarines.push(APP.waterObject(53414, [
        {x: 754.68, y: 143.30, round: 84 },
        {x: 717.94, y: 213.77, round: 92 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 667.94, y: 300.37, round: 102 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 514.27, y: 139.39, round: 149 },
        {x: 692.94, y: 257.07, round: 97 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 687.94, y: 265.73, round: 98 },
        {x: 732.94, y: 98.81, round: 79 },
        {x: 752.94, y: 133.45, round: 83 },
        {x: 707.94, y: 231.09, round: 94 },
        {x: 457.37, y: 135.97, round: 143 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 747.94, y: 124.79, round: 82 },
        {x: 494.27, y: 139.39, round: 147 },
        {x: 474.27, y: 139.39, round: 145 },
        {x: 727.94, y: 196.45, round: 90 },
        {x: 722.94, y: 81.49, round: 77 },
        {x: 722.94, y: 205.11, round: 91 },
        {x: 735.60, y: 46.71, round: 73 },
        {x: 722.94, y: 61.80, round: 75 },
        {x: 727.94, y: 90.15, round: 78 },
        {x: 702.94, y: 239.75, round: 95 },
        {x: 677.94, y: 283.05, round: 100 },
        {x: 682.94, y: 274.39, round: 99 },
        {x: 626.49, y: 315.46, round: 107 },
        {x: 697.94, y: 248.41, round: 96 },
        {x: 742.94, y: 116.13, round: 81 },
        {x: 732.94, y: 187.79, round: 89 },
        {x: 504.27, y: 139.39, round: 148 },
        {x: 466.77, y: 139.39, round: 144 },
        {x: 635.89, y: 318.88, round: 106 },
        {x: 449.71, y: 129.54, round: 142 },
        {x: 745.00, y: 43.29, round: 72 },
        {x: 737.94, y: 179.13, round: 88 },
        {x: 662.94, y: 309.03, round: 103 },
        {x: 712.94, y: 222.43, round: 93 },
        {x: 721.21, y: 71.64, round: 76 },
        {x: 672.94, y: 291.71, round: 101 },
        {x: 727.94, y: 53.14, round: 74 },
        {x: 484.27, y: 139.39, round: 146 },
        {x: 737.94, y: 107.47, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(53415, [
        {x: 316.16, y: 265.55, round: 24 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 345.14, y: 273.32, round: 21 },
        {x: 287.18, y: 257.79, round: 27 },
    ]));
    otherSubmarines.push(APP.waterObject(53416, [
        {x: 544.78, y: 155.56, round: 137 },
        {x: 451.79, y: 318.72, round: 41 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 562.90, y: 164.01, round: 139 },
        {x: 571.97, y: 168.24, round: 140 },
        {x: 581.03, y: 172.47, round: 141 },
        {x: 535.71, y: 151.34, round: 136 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 553.84, y: 159.79, round: 138 },
        {x: 460.85, y: 322.95, round: 40 },
        {x: 470.81, y: 323.82, round: 39 },
    ]));
    otherSubmarines.push(APP.waterObject(53417, [
        {x: 592.05, y: 151.48, round: 52 },
        {x: 648.43, y: 172.00, round: 58 },
        {x: 620.24, y: 161.74, round: 55 },
        {x: 704.82, y: 276.60, round: 80 },
        {x: 676.63, y: 286.86, round: 83 },
        {x: 714.21, y: 273.18, round: 79 },
        {x: 657.83, y: 175.42, round: 59 },
        {x: 733.01, y: 266.34, round: 77 },
        {x: 723.61, y: 269.76, round: 78 },
        {x: 610.85, y: 158.32, round: 54 },
        {x: 639.04, y: 168.58, round: 57 },
        {x: 667.23, y: 178.85, round: 60 },
        {x: 695.42, y: 280.02, round: 81 },
        {x: 629.64, y: 165.16, round: 56 },
        {x: 686.02, y: 283.44, round: 82 },
        {x: 601.45, y: 154.90, round: 53 },
        {x: 676.63, y: 182.27, round: 61 },
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
        APP.put(myScores, {score: 100, round: 33})
        APP.put(myScores, {score: 100, round: 34})
        APP.put(myScores, {score: 100, round: 35})
        APP.put(myScores, {score: 100, round: 36})
        APP.put(myScores, {score: 100, round: 37})
        APP.put(myScores, {score: 100, round: 38})
        APP.put(myScores, {score: 100, round: 39})
        APP.put(myScores, {score: 100, round: 40})
        APP.put(myScores, {score: 100, round: 41})
        APP.put(myScores, {score: 100, round: 42})
        APP.put(myScores, {score: 100, round: 43})
        APP.put(myScores, {score: 100, round: 44})
        APP.put(myScores, {score: 100, round: 45})
        APP.put(myScores, {score: 100, round: 46})
        APP.put(myScores, {score: 100, round: 47})
        APP.put(myScores, {score: 100, round: 48})
        APP.put(myScores, {score: 100, round: 49})
        APP.put(myScores, {score: 100, round: 50})
        APP.put(myScores, {score: 100, round: 51})
        APP.put(myScores, {score: 100, round: 52})
        APP.put(myScores, {score: 100, round: 53})
        APP.put(myScores, {score: 100, round: 54})
        APP.put(myScores, {score: 100, round: 55})
        APP.put(myScores, {score: 100, round: 56})
        APP.put(myScores, {score: 100, round: 57})
        APP.put(myScores, {score: 100, round: 58})
        APP.put(myScores, {score: 100, round: 59})
        APP.put(myScores, {score: 100, round: 60})
        APP.put(myScores, {score: 100, round: 61})
        APP.put(myScores, {score: 100, round: 62})
        APP.put(myScores, {score: 100, round: 63})
        APP.put(myScores, {score: 100, round: 64})
        APP.put(myScores, {score: 100, round: 65})
        APP.put(myScores, {score: 100, round: 66})
        APP.put(myScores, {score: 100, round: 67})
        APP.put(myScores, {score: 100, round: 68})
        APP.put(myScores, {score: 100, round: 69})
        APP.put(myScores, {score: 100, round: 70})
        APP.put(myScores, {score: 100, round: 71})
        APP.put(myScores, {score: 100, round: 72})
        APP.put(myScores, {score: 100, round: 73})
        APP.put(myScores, {score: 100, round: 74})
        APP.put(myScores, {score: 100, round: 75})
        APP.put(myScores, {score: 100, round: 76})
        APP.put(myScores, {score: 100, round: 77})
        APP.put(myScores, {score: 100, round: 78})
        APP.put(myScores, {score: 100, round: 79})
        APP.put(myScores, {score: 100, round: 80})
        APP.put(myScores, {score: 100, round: 81})
        APP.put(myScores, {score: 100, round: 82})
        APP.put(myScores, {score: 100, round: 83})
        APP.put(myScores, {score: 100, round: 84})
        APP.put(myScores, {score: 100, round: 85})
        APP.put(myScores, {score: 100, round: 86})
        APP.put(myScores, {score: 100, round: 87})
        APP.put(myScores, {score: 100, round: 88})
        APP.put(myScores, {score: 100, round: 89})
        APP.put(myScores, {score: 100, round: 90})
        APP.put(myScores, {score: 100, round: 91})
        APP.put(myScores, {score: 100, round: 92})
        APP.put(myScores, {score: 100, round: 93})
        APP.put(myScores, {score: 100, round: 94})
        APP.put(myScores, {score: 100, round: 95})
        APP.put(myScores, {score: 100, round: 96})
        APP.put(myScores, {score: 100, round: 97})
        APP.put(myScores, {score: 100, round: 98})
        APP.put(myScores, {score: 100, round: 99})
        APP.put(myScores, {score: 100, round: 100})
        APP.put(myScores, {score: 100, round: 101})
        APP.put(myScores, {score: 100, round: 102})
        APP.put(myScores, {score: 100, round: 103})
        APP.put(myScores, {score: 100, round: 104})
        APP.put(myScores, {score: 100, round: 105})
        APP.put(myScores, {score: 100, round: 106})
        APP.put(myScores, {score: 100, round: 107})
        APP.put(myScores, {score: 100, round: 108})
        APP.put(myScores, {score: 100, round: 109})
        APP.put(myScores, {score: 100, round: 110})
        APP.put(myScores, {score: 100, round: 111})
        APP.put(myScores, {score: 100, round: 112})
        APP.put(myScores, {score: 100, round: 113})
        APP.put(myScores, {score: 100, round: 114})
        APP.put(myScores, {score: 100, round: 115})
        APP.put(myScores, {score: 100, round: 116})
        APP.put(myScores, {score: 100, round: 117})
        APP.put(myScores, {score: 100, round: 118})
        APP.put(myScores, {score: 100, round: 119})
        APP.put(myScores, {score: 100, round: 120})
        APP.put(myScores, {score: 100, round: 121})
        APP.put(myScores, {score: 100, round: 122})
        APP.put(myScores, {score: 100, round: 123})
        APP.put(myScores, {score: 100, round: 124})
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
		gameId: 'game20161109_06_01_02',
		gameTime: '2016-11-09 06:01:02',
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