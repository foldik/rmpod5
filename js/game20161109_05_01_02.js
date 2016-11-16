APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(52944, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.37, y: 274.22, round: 2, sonar: 'nonextended' },
        {x: 132.03, y: 272.40, round: 3, sonar: 'nonextended' },
        {x: 139.27, y: 270.43, round: 4, sonar: 'nonextended' },
        {x: 149.26, y: 269.91, round: 5, sonar: 'nonextended' },
        {x: 159.07, y: 271.82, round: 6, sonar: 'nonextended' },
        {x: 169.07, y: 271.97, round: 7, sonar: 'nonextended' },
        {x: 178.69, y: 269.22, round: 8, sonar: 'nonextended' },
        {x: 187.72, y: 264.93, round: 9, sonar: 'nonextended' },
        {x: 196.11, y: 259.50, round: 10, sonar: 'nonextended' },
        {x: 202.58, y: 251.87, round: 11, sonar: 'nonextended' },
        {x: 208.90, y: 244.12, round: 12, sonar: 'nonextended' },
        {x: 212.65, y: 234.85, round: 13, sonar: 'nonextended' },
        {x: 218.77, y: 226.94, round: 14, sonar: 'nonextended' },
        {x: 222.59, y: 220.49, round: 15, sonar: 'nonextended' },
        {x: 229.77, y: 213.52, round: 16, sonar: 'nonextended' },
        {x: 238.48, y: 208.62, round: 17, sonar: 'nonextended' },
        {x: 247.85, y: 205.12, round: 18, sonar: 'nonextended' },
        {x: 255.81, y: 199.07, round: 19, sonar: 'nonextended' },
        {x: 262.30, y: 191.46, round: 20, sonar: 'nonextended' },
        {x: 266.79, y: 182.52, round: 21, sonar: 'nonextended' },
        {x: 271.24, y: 173.57, round: 22, sonar: 'nonextended' },
        {x: 277.46, y: 165.74, round: 23, sonar: 'nonextended' },
        {x: 284.76, y: 158.90, round: 24, sonar: 'nonextended' },
        {x: 292.36, y: 152.40, round: 25, sonar: 'nonextended' },
        {x: 301.16, y: 147.66, round: 26, sonar: 'nonextended' },
        {x: 308.85, y: 141.26, round: 27, sonar: 'nonextended' },
        {x: 318.20, y: 137.71, round: 28, sonar: 'nonextended' },
        {x: 326.50, y: 132.14, round: 29, sonar: 'nonextended' },
        {x: 332.46, y: 124.11, round: 30, sonar: 'nonextended' },
        {x: 338.03, y: 115.80, round: 31, sonar: 'nonextended' },
        {x: 344.25, y: 107.97, round: 32, sonar: 'nonextended' },
        {x: 351.04, y: 100.64, round: 33, sonar: 'nonextended' },
        {x: 355.27, y: 91.57, round: 34, sonar: 'nonextended' },
        {x: 358.21, y: 82.02, round: 35, sonar: 'nonextended' },
        {x: 362.62, y: 75.95, round: 36, sonar: 'nonextended' },
        {x: 366.96, y: 66.94, round: 37, sonar: 'nonextended' },
        {x: 373.66, y: 59.52, round: 38, sonar: 'nonextended' },
        {x: 380.00, y: 51.78, round: 39, sonar: 'nonextended' },
        {x: 383.80, y: 45.32, round: 40, sonar: 'nonextended' },
        {x: 389.32, y: 40.24, round: 41, sonar: 'nonextended' },
        {x: 396.22, y: 33.00, round: 42, sonar: 'nonextended' },
        {x: 401.94, y: 28.15, round: 43, sonar: 'nonextended' },
        {x: 406.06, y: 21.88, round: 44, sonar: 'nonextended' },
        {x: 409.51, y: 18.27, round: 45, sonar: 'nonextended' },
        {x: 415.84, y: 14.24, round: 46, sonar: 'nonextended' },
        {x: 424.76, y: 9.71, round: 47, sonar: 'nonextended' },
        {x: 432.06, y: 8.00, round: 48, sonar: 'nonextended' },
        {x: 439.56, y: 8.23, round: 49, sonar: 'nonextended' },
        {x: 449.25, y: 10.68, round: 50, sonar: 'nonextended' },
        {x: 456.59, y: 12.22, round: 51, sonar: 'nonextended' },
        {x: 466.24, y: 14.85, round: 52, sonar: 'nonextended' },
        {x: 475.22, y: 19.26, round: 53, sonar: 'nonextended' },
        {x: 483.34, y: 25.08, round: 54, sonar: 'nonextended' },
        {x: 489.55, y: 32.92, round: 55, sonar: 'nonextended' },
        {x: 495.83, y: 40.70, round: 56, sonar: 'nonextended' },
        {x: 502.79, y: 47.89, round: 57, sonar: 'nonextended' },
        {x: 511.35, y: 53.05, round: 58, sonar: 'nonextended' },
        {x: 520.39, y: 57.33, round: 59, sonar: 'nonextended' },
        {x: 527.96, y: 63.86, round: 60, sonar: 'nonextended' },
        {x: 536.66, y: 68.79, round: 61, sonar: 'nonextended' },
        {x: 543.66, y: 75.93, round: 62, sonar: 'nonextended' },
        {x: 551.49, y: 82.16, round: 63, sonar: 'nonextended' },
        {x: 556.87, y: 90.59, round: 64, sonar: 'nonextended' },
        {x: 560.38, y: 99.95, round: 65, sonar: 'nonextended' },
        {x: 562.37, y: 109.75, round: 66, sonar: 'nonextended' },
        {x: 563.50, y: 119.69, round: 67, sonar: 'nonextended' },
        {x: 567.84, y: 128.69, round: 68, sonar: 'nonextended' },
        {x: 569.06, y: 138.62, round: 69, sonar: 'nonextended' },
        {x: 572.31, y: 148.08, round: 70, sonar: 'nonextended' },
        {x: 577.45, y: 156.65, round: 71, sonar: 'nonextended' },
        {x: 583.35, y: 164.73, round: 72, sonar: 'nonextended' },
        {x: 588.75, y: 173.15, round: 73, sonar: 'nonextended' },
        {x: 595.40, y: 180.62, round: 74, sonar: 'nonextended' },
        {x: 604.14, y: 185.47, round: 75, sonar: 'nonextended' },
        {x: 612.58, y: 190.83, round: 76, sonar: 'nonextended' },
        {x: 620.04, y: 197.49, round: 77, sonar: 'nonextended' },
        {x: 624.91, y: 206.22, round: 78, sonar: 'nonextended' },
        {x: 630.69, y: 214.39, round: 79, sonar: 'nonextended' },
        {x: 637.69, y: 221.53, round: 80, sonar: 'nonextended' },
        {x: 646.56, y: 226.15, round: 81, sonar: 'nonextended' },
        {x: 655.70, y: 230.20, round: 82, sonar: 'nonextended' },
        {x: 664.85, y: 234.23, round: 83, sonar: 'nonextended' },
        {x: 672.39, y: 240.81, round: 84, sonar: 'nonextended' },
        {x: 677.51, y: 249.40, round: 85, sonar: 'nonextended' },
        {x: 682.95, y: 257.79, round: 86, sonar: 'nonextended' },
        {x: 689.48, y: 265.36, round: 87, sonar: 'nonextended' },
        {x: 693.61, y: 271.62, round: 88, sonar: 'nonextended' },
        {x: 699.13, y: 279.96, round: 89, sonar: 'nonextended' },
        {x: 703.12, y: 289.13, round: 90, sonar: 'nonextended' },
        {x: 704.54, y: 299.03, round: 91, sonar: 'nonextended' },
        {x: 707.91, y: 308.44, round: 92, sonar: 'nonextended' },
        {x: 708.14, y: 318.44, round: 93, sonar: 'nonextended' },
        {x: 708.58, y: 328.43, round: 94, sonar: 'nonextended' },
        {x: 707.79, y: 338.40, round: 95, sonar: 'nonextended' },
        {x: 704.05, y: 347.67, round: 96, sonar: 'nonextended' },
        {x: 701.10, y: 354.57, round: 97, sonar: 'nonextended' },
        {x: 696.72, y: 360.66, round: 98, sonar: 'nonextended' },
        {x: 689.90, y: 367.97, round: 99, sonar: 'nonextended' },
        {x: 681.09, y: 372.70, round: 100, sonar: 'nonextended' },
        {x: 671.89, y: 376.63, round: 101, sonar: 'nonextended' },
        {x: 664.50, y: 377.88, round: 102, sonar: 'nonextended' },
        {x: 654.95, y: 380.86, round: 103, sonar: 'nonextended' },
        {x: 644.95, y: 381.20, round: 104, sonar: 'nonextended' },
        {x: 635.26, y: 378.74, round: 105, sonar: 'nonextended' },
        {x: 625.28, y: 379.36, round: 106, sonar: 'nonextended' },
        {x: 615.51, y: 377.21, round: 107, sonar: 'nonextended' },
        {x: 606.80, y: 372.30, round: 108, sonar: 'nonextended' },
        {x: 598.28, y: 367.07, round: 109, sonar: 'nonextended' },
        {x: 589.60, y: 362.10, round: 110, sonar: 'nonextended' },
        {x: 583.02, y: 354.57, round: 111, sonar: 'nonextended' },
        {x: 578.18, y: 345.82, round: 112, sonar: 'nonextended' },
        {x: 575.57, y: 336.17, round: 113, sonar: 'nonextended' },
        {x: 572.98, y: 326.51, round: 114, sonar: 'nonextended' },
        {x: 569.35, y: 317.19, round: 115, sonar: 'nonextended' },
        {x: 568.13, y: 307.27, round: 116, sonar: 'nonextended' },
        {x: 567.49, y: 297.29, round: 117, sonar: 'nonextended' },
        {x: 568.45, y: 289.85, round: 118, sonar: 'nonextended' },
        {x: 568.48, y: 279.85, round: 119, sonar: 'nonextended' },
        {x: 569.09, y: 269.87, round: 120, sonar: 'nonextended' },
        {x: 568.17, y: 259.91, round: 121, sonar: 'nonextended' },
        {x: 563.97, y: 250.84, round: 122, sonar: 'nonextended' },
        {x: 560.30, y: 241.53, round: 123, sonar: 'nonextended' },
        {x: 557.87, y: 234.44, round: 124, sonar: 'nonextended' },
        {x: 557.73, y: 224.44, round: 125, sonar: 'nonextended' },
        {x: 559.41, y: 214.58, round: 126, sonar: 'nonextended' },
        {x: 559.55, y: 204.58, round: 127, sonar: 'nonextended' },
        {x: 561.97, y: 194.88, round: 128, sonar: 'nonextended' },
        {x: 564.20, y: 185.13, round: 129, sonar: 'nonextended' },
        {x: 567.81, y: 175.80, round: 130, sonar: 'nonextended' },
        {x: 574.33, y: 168.22, round: 131, sonar: 'nonextended' },
        {x: 581.38, y: 161.13, round: 132, sonar: 'nonextended' },
        {x: 589.49, y: 155.29, round: 133, sonar: 'nonextended' },
        {x: 596.45, y: 148.10, round: 134, sonar: 'nonextended' },
        {x: 602.90, y: 140.46, round: 135, sonar: 'nonextended' },
        {x: 611.14, y: 134.79, round: 136, sonar: 'nonextended' },
        {x: 620.12, y: 130.40, round: 137, sonar: 'nonextended' },
        {x: 627.00, y: 127.41, round: 138, sonar: 'nonextended' },
        {x: 634.52, y: 120.82, round: 139, sonar: 'nonextended' },
        {x: 640.59, y: 112.87, round: 140, sonar: 'nonextended' },
        {x: 647.00, y: 105.19, round: 141, sonar: 'nonextended' },
        {x: 654.53, y: 98.62, round: 142, sonar: 'nonextended' },
        {x: 660.47, y: 90.57, round: 143, sonar: 'nonextended' },
        {x: 668.16, y: 84.18, round: 144, sonar: 'nonextended' },
        {x: 675.80, y: 77.72, round: 145, sonar: 'nonextended' },
        {x: 685.14, y: 74.16, round: 146, sonar: 'nonextended' },
        {x: 693.98, y: 69.49, round: 147, sonar: 'nonextended' },
        {x: 699.96, y: 64.96, round: 148, sonar: 'nonextended' },
        {x: 709.41, y: 61.69, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(52943, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.49, y: 299.78, round: 2, sonar: 'nonextended' },
        {x: 107.04, y: 297.71, round: 3, sonar: 'nonextended' },
        {x: 113.94, y: 294.75, round: 4, sonar: 'nonextended' },
        {x: 122.51, y: 289.61, round: 5, sonar: 'nonextended' },
        {x: 128.07, y: 284.58, round: 6, sonar: 'nonextended' },
        {x: 136.94, y: 279.96, round: 7, sonar: 'nonextended' },
        {x: 146.73, y: 277.89, round: 8, sonar: 'nonextended' },
        {x: 156.70, y: 277.21, round: 9, sonar: 'nonextended' },
        {x: 166.19, y: 274.05, round: 10, sonar: 'nonextended' },
        {x: 176.10, y: 272.68, round: 11, sonar: 'nonextended' },
        {x: 185.28, y: 268.72, round: 12, sonar: 'nonextended' },
        {x: 194.26, y: 264.33, round: 13, sonar: 'nonextended' },
        {x: 204.18, y: 263.07, round: 14, sonar: 'nonextended' },
        {x: 214.13, y: 264.09, round: 15, sonar: 'nonextended' },
        {x: 223.94, y: 266.05, round: 16, sonar: 'nonextended' },
        {x: 233.00, y: 270.28, round: 17, sonar: 'nonextended' },
        {x: 242.86, y: 271.95, round: 18, sonar: 'nonextended' },
        {x: 252.30, y: 275.25, round: 19, sonar: 'nonextended' },
        {x: 260.10, y: 281.50, round: 20, sonar: 'nonextended' },
        {x: 268.65, y: 286.70, round: 21, sonar: 'nonextended' },
        {x: 277.90, y: 290.48, round: 22, sonar: 'nonextended' },
        {x: 284.94, y: 293.09, round: 23, sonar: 'nonextended' },
        {x: 294.24, y: 296.74, round: 24, sonar: 'nonextended' },
        {x: 300.68, y: 300.59, round: 25, sonar: 'nonextended' },
        {x: 310.27, y: 303.44, round: 26, sonar: 'nonextended' },
        {x: 319.17, y: 308.00, round: 27, sonar: 'nonextended' },
        {x: 328.35, y: 311.96, round: 28, sonar: 'nonextended' },
        {x: 337.90, y: 314.92, round: 29, sonar: 'nonextended' },
        {x: 347.71, y: 316.87, round: 30, sonar: 'nonextended' },
        {x: 357.63, y: 315.58, round: 31, sonar: 'nonextended' },
        {x: 367.52, y: 314.13, round: 32, sonar: 'nonextended' },
        {x: 376.79, y: 310.37, round: 33, sonar: 'nonextended' },
        {x: 384.86, y: 304.47, round: 34, sonar: 'nonextended' },
        {x: 393.72, y: 299.83, round: 35, sonar: 'nonextended' },
        {x: 402.13, y: 294.42, round: 36, sonar: 'nonextended' },
        {x: 411.36, y: 290.58, round: 37, sonar: 'nonextended' },
        {x: 420.72, y: 287.04, round: 38, sonar: 'nonextended' },
        {x: 430.42, y: 284.61, round: 39, sonar: 'nonextended' },
        {x: 440.02, y: 281.82, round: 40, sonar: 'nonextended' },
        {x: 449.74, y: 279.46, round: 41, sonar: 'nonextended' },
        {x: 459.72, y: 280.06, round: 42, sonar: 'nonextended' },
        {x: 469.59, y: 281.63, round: 43, sonar: 'nonextended' },
        {x: 479.05, y: 284.88, round: 44, sonar: 'nonextended' },
        {x: 489.00, y: 285.90, round: 45, sonar: 'nonextended' },
        {x: 498.97, y: 286.62, round: 46, sonar: 'nonextended' },
        {x: 508.93, y: 285.64, round: 47, sonar: 'nonextended' },
        {x: 518.65, y: 283.33, round: 48, sonar: 'nonextended' },
        {x: 528.61, y: 284.32, round: 49, sonar: 'nonextended' },
        {x: 538.54, y: 285.45, round: 50, sonar: 'nonextended' },
        {x: 548.50, y: 284.51, round: 51, sonar: 'nonextended' },
        {x: 558.48, y: 284.00, round: 52, sonar: 'nonextended' },
        {x: 568.44, y: 283.05, round: 53, sonar: 'nonextended' },
        {x: 578.21, y: 280.94, round: 54, sonar: 'nonextended' },
        {x: 587.95, y: 278.66, round: 55, sonar: 'nonextended' },
        {x: 597.54, y: 275.82, round: 56, sonar: 'nonextended' },
        {x: 607.54, y: 275.66, round: 57, sonar: 'nonextended' },
        {x: 617.47, y: 274.47, round: 58, sonar: 'nonextended' },
        {x: 627.46, y: 274.22, round: 59, sonar: 'nonextended' },
        {x: 637.46, y: 274.42, round: 60, sonar: 'nonextended' },
        {x: 647.44, y: 275.01, round: 61, sonar: 'nonextended' },
        {x: 657.29, y: 276.76, round: 62, sonar: 'nonextended' },
        {x: 666.38, y: 280.92, round: 63, sonar: 'nonextended' },
        {x: 675.45, y: 285.12, round: 64, sonar: 'nonextended' },
        {x: 684.30, y: 289.78, round: 65, sonar: 'nonextended' },
        {x: 693.95, y: 292.42, round: 66, sonar: 'nonextended' },
        {x: 703.72, y: 294.56, round: 67, sonar: 'nonextended' },
        {x: 712.98, y: 298.32, round: 68, sonar: 'nonextended' },
        {x: 722.72, y: 300.59, round: 69, sonar: 'nonextended' },
        {x: 732.72, y: 300.36, round: 70, sonar: 'nonextended' },
        {x: 740.09, y: 298.95, round: 71, sonar: 'nonextended' },
        {x: 749.55, y: 295.72, round: 72, sonar: 'nonextended' },
        {x: 758.61, y: 291.49, round: 73, sonar: 'nonextended' },
        {x: 764.79, y: 287.23, round: 74, sonar: 'nonextended' },
        {x: 774.01, y: 283.36, round: 75, sonar: 'nonextended' },
        {x: 782.41, y: 277.94, round: 76, sonar: 'nonextended' },
        {x: 786.97, y: 271.99, round: 77, sonar: 'nonextended' },
        {x: 789.32, y: 264.86, round: 78, sonar: 'nonextended' },
        {x: 793.18, y: 255.64, round: 79, sonar: 'nonextended' },
        {x: 799.23, y: 247.67, round: 80, sonar: 'nonextended' },
        {x: 803.89, y: 238.83, round: 81, sonar: 'nonextended' },
        {x: 805.29, y: 231.46, round: 82, sonar: 'nonextended' },
        {x: 803.88, y: 221.56, round: 83, sonar: 'nonextended' },
        {x: 803.53, y: 211.56, round: 84, sonar: 'nonextended' },
        {x: 800.01, y: 202.21, round: 85, sonar: 'nonextended' },
        {x: 793.67, y: 194.47, round: 86, sonar: 'nonextended' },
        {x: 785.38, y: 188.87, round: 87, sonar: 'nonextended' },
        {x: 776.17, y: 184.98, round: 88, sonar: 'nonextended' },
        {x: 766.19, y: 184.39, round: 89, sonar: 'nonextended' },
        {x: 756.19, y: 184.42, round: 90, sonar: 'nonextended' },
        {x: 746.26, y: 185.59, round: 91, sonar: 'nonextended' },
        {x: 736.87, y: 189.04, round: 92, sonar: 'nonextended' },
        {x: 727.13, y: 191.31, round: 93, sonar: 'nonextended' },
        {x: 717.31, y: 193.18, round: 94, sonar: 'nonextended' },
        {x: 707.55, y: 195.35, round: 95, sonar: 'nonextended' },
        {x: 697.57, y: 194.67, round: 96, sonar: 'nonextended' },
        {x: 687.58, y: 194.17, round: 97, sonar: 'nonextended' },
        {x: 677.83, y: 196.36, round: 98, sonar: 'nonextended' },
        {x: 667.83, y: 196.57, round: 99, sonar: 'nonextended' },
        {x: 657.86, y: 197.34, round: 100, sonar: 'nonextended' },
        {x: 647.92, y: 198.44, round: 101, sonar: 'nonextended' },
        {x: 638.65, y: 202.19, round: 102, sonar: 'nonextended' },
        {x: 628.81, y: 203.97, round: 103, sonar: 'nonextended' },
        {x: 619.96, y: 208.64, round: 104, sonar: 'nonextended' },
        {x: 611.65, y: 214.20, round: 105, sonar: 'nonextended' },
        {x: 605.13, y: 217.90, round: 106, sonar: 'nonextended' },
        {x: 595.32, y: 219.84, round: 107, sonar: 'nonextended' },
        {x: 586.23, y: 224.01, round: 108, sonar: 'nonextended' },
        {x: 578.85, y: 225.34, round: 109, sonar: 'nonextended' },
        {x: 568.88, y: 226.10, round: 110, sonar: 'nonextended' },
        {x: 561.45, y: 225.10, round: 111, sonar: 'nonextended' },
        {x: 551.59, y: 226.78, round: 112, sonar: 'nonextended' },
        {x: 542.07, y: 229.85, round: 113, sonar: 'nonextended' },
        {x: 532.44, y: 232.55, round: 114, sonar: 'nonextended' },
        {x: 525.88, y: 236.18, round: 115, sonar: 'nonextended' },
        {x: 516.61, y: 239.93, round: 116, sonar: 'nonextended' },
        {x: 509.36, y: 241.86, round: 117, sonar: 'nonextended' },
        {x: 500.42, y: 246.34, round: 118, sonar: 'nonextended' },
        {x: 491.77, y: 251.36, round: 119, sonar: 'nonextended' },
        {x: 482.93, y: 256.03, round: 120, sonar: 'nonextended' },
        {x: 473.92, y: 260.38, round: 121, sonar: 'nonextended' },
        {x: 466.09, y: 266.59, round: 122, sonar: 'nonextended' },
        {x: 457.06, y: 270.90, round: 123, sonar: 'nonextended' },
        {x: 448.13, y: 275.39, round: 124, sonar: 'nonextended' },
        {x: 438.52, y: 278.16, round: 125, sonar: 'nonextended' },
        {x: 431.42, y: 280.57, round: 126, sonar: 'nonextended' },
        {x: 421.42, y: 280.37, round: 127, sonar: 'nonextended' },
        {x: 411.51, y: 279.04, round: 128, sonar: 'nonextended' },
        {x: 401.67, y: 277.27, round: 129, sonar: 'nonextended' },
        {x: 392.88, y: 272.49, round: 130, sonar: 'nonextended' },
        {x: 384.58, y: 266.92, round: 131, sonar: 'nonextended' },
        {x: 375.12, y: 263.69, round: 132, sonar: 'nonextended' },
        {x: 365.50, y: 260.95, round: 133, sonar: 'nonextended' },
        {x: 355.56, y: 259.88, round: 134, sonar: 'nonextended' },
        {x: 346.20, y: 256.35, round: 135, sonar: 'nonextended' },
        {x: 336.44, y: 254.19, round: 136, sonar: 'nonextended' },
        {x: 326.44, y: 254.08, round: 137, sonar: 'nonextended' },
        {x: 316.50, y: 252.94, round: 138, sonar: 'nonextended' },
        {x: 306.66, y: 251.19, round: 139, sonar: 'nonextended' },
        {x: 296.71, y: 252.19, round: 140, sonar: 'nonextended' },
        {x: 286.95, y: 254.40, round: 141, sonar: 'nonextended' },
        {x: 276.95, y: 254.48, round: 142, sonar: 'nonextended' },
        {x: 267.23, y: 256.81, round: 143, sonar: 'nonextended' },
        {x: 257.25, y: 257.43, round: 144, sonar: 'nonextended' },
        {x: 250.23, y: 260.08, round: 145, sonar: 'nonextended' },
        {x: 240.23, y: 260.21, round: 146, sonar: 'nonextended' },
        {x: 230.43, y: 258.26, round: 147, sonar: 'nonextended' },
        {x: 221.60, y: 253.56, round: 148, sonar: 'nonextended' },
        {x: 211.96, y: 250.91, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(52992, [
        {x: 536.89, y: 178.54, round: 132 },
        {x: 550.94, y: 164.31, round: 133 },
        {x: 565.00, y: 150.08, round: 134 },
        {x: 452.57, y: 263.93, round: 126 },
        {x: 466.63, y: 249.70, round: 127 },
        {x: 508.79, y: 207.00, round: 130 },
        {x: 522.84, y: 192.77, round: 131 },
    ]));
    torpedos.push(APP.waterObject(52961, [
        {x: 395.64, y: 303.69, round: 34 },
        {x: 414.49, y: 297.02, round: 35 },
        {x: 433.35, y: 290.35, round: 36 },
        {x: 452.20, y: 283.67, round: 37 },
        {x: 471.05, y: 277.00, round: 38 },
        {x: 489.91, y: 270.32, round: 39 },
        {x: 508.76, y: 263.65, round: 40 },
    ]));
    torpedos.push(APP.waterObject(52993, [
        {x: 537.97, y: 221.35, round: 126 },
        {x: 518.21, y: 218.26, round: 127 },
        {x: 498.45, y: 215.17, round: 128 },
    ]));
    torpedos.push(APP.waterObject(52963, [
        {x: 390.13, y: 70.87, round: 39 },
        {x: 406.60, y: 82.22, round: 40 },
        {x: 423.07, y: 93.57, round: 41 },
    ]));
    torpedos.push(APP.waterObject(52964, [
        {x: 529.66, y: 272.37, round: 44 },
        {x: 549.51, y: 269.93, round: 45 },
        {x: 569.36, y: 267.48, round: 46 },
        {x: 450.27, y: 282.16, round: 40 },
        {x: 470.12, y: 279.71, round: 41 },
        {x: 489.96, y: 277.27, round: 42 },
        {x: 509.81, y: 274.82, round: 43 },
    ]));
    torpedos.push(APP.waterObject(52965, [
        {x: 407.36, y: 41.84, round: 45 },
        {x: 408.66, y: 61.80, round: 46 },
        {x: 409.97, y: 81.75, round: 47 },
    ]));
    torpedos.push(APP.waterObject(52966, [
        {x: 444.78, y: 28.35, round: 52 },
        {x: 432.96, y: 44.49, round: 53 },
        {x: 421.15, y: 60.63, round: 54 },
    ]));
    torpedos.push(APP.waterObject(52971, [
        {x: 684.95, y: 219.39, round: 77 },
        {x: 672.03, y: 204.12, round: 78 },
        {x: 659.11, y: 188.86, round: 79 },
        {x: 646.19, y: 173.59, round: 80 },
        {x: 633.27, y: 158.32, round: 81 },
        {x: 736.63, y: 280.46, round: 73 },
        {x: 723.71, y: 265.19, round: 74 },
        {x: 710.79, y: 249.92, round: 75 },
    ]));
    torpedos.push(APP.waterObject(52973, [
        {x: 659.21, y: 211.03, round: 77 },
        {x: 676.82, y: 220.50, round: 78 },
        {x: 694.44, y: 229.97, round: 79 },
        {x: 729.67, y: 248.91, round: 81 },
        {x: 747.29, y: 258.38, round: 82 },
        {x: 606.36, y: 182.62, round: 74 },
        {x: 623.98, y: 192.09, round: 75 },
        {x: 641.59, y: 201.56, round: 76 },
    ]));
    torpedos.push(APP.waterObject(52974, [
        {x: 785.82, y: 211.77, round: 88 },
        {x: 805.72, y: 209.72, round: 89 },
        {x: 825.61, y: 207.66, round: 90 },
        {x: 666.46, y: 224.09, round: 82 },
        {x: 686.35, y: 222.04, round: 83 },
        {x: 706.24, y: 219.99, round: 84 },
        {x: 726.14, y: 217.93, round: 85 },
        {x: 746.03, y: 215.88, round: 86 },
        {x: 765.93, y: 213.82, round: 87 },
    ]));
    torpedos.push(APP.waterObject(52975, [
        {x: 687.86, y: 256.16, round: 88 },
        {x: 668.29, y: 260.28, round: 89 },
        {x: 648.72, y: 264.40, round: 90 },
        {x: 785.72, y: 235.58, round: 83 },
        {x: 766.15, y: 239.69, round: 84 },
        {x: 746.58, y: 243.81, round: 85 },
        {x: 727.00, y: 247.93, round: 86 },
        {x: 707.43, y: 252.05, round: 87 },
    ]));
    torpedos.push(APP.waterObject(52978, [
        {x: 669.87, y: 269.26, round: 88 },
        {x: 650.25, y: 273.16, round: 89 },
        {x: 630.64, y: 277.06, round: 90 },
    ]));
    torpedos.push(APP.waterObject(52979, [
        {x: 771.62, y: 204.46, round: 89 },
        {x: 767.07, y: 223.93, round: 90 },
        {x: 762.51, y: 243.41, round: 91 },
        {x: 757.96, y: 262.88, round: 92 },
        {x: 753.41, y: 282.36, round: 93 },
        {x: 748.86, y: 301.83, round: 94 },
        {x: 744.30, y: 321.31, round: 95 },
        {x: 739.75, y: 340.78, round: 96 },
        {x: 735.20, y: 360.26, round: 97 },
    ]));
    torpedos.push(APP.waterObject(52982, [
        {x: 650.21, y: 251.14, round: 99 },
        {x: 635.88, y: 265.09, round: 100 },
        {x: 693.21, y: 209.30, round: 96 },
        {x: 678.88, y: 223.25, round: 97 },
        {x: 664.55, y: 237.20, round: 98 },
    ]));
    torpedos.push(APP.waterObject(52983, [
        {x: 655.02, y: 179.74, round: 102 },
        {x: 662.13, y: 161.05, round: 103 },
    ]));
    torpedos.push(APP.waterObject(52984, [
        {x: 683.97, y: 360.69, round: 102 },
        {x: 696.05, y: 344.75, round: 103 },
    ]));
    torpedos.push(APP.waterObject(52986, [
        {x: 634.17, y: 370.02, round: 108 },
        {x: 652.84, y: 362.82, round: 109 },
    ]));
    torpedos.push(APP.waterObject(52955, [
        {x: 230.68, y: 190.20, round: 18 },
        {x: 222.87, y: 171.79, round: 19 },
        {x: 215.06, y: 153.38, round: 20 },
    ]));
    torpedos.push(APP.waterObject(52956, [
        {x: 278.61, y: 145.77, round: 24 },
        {x: 279.76, y: 125.80, round: 25 },
        {x: 280.91, y: 105.83, round: 26 },
        {x: 282.06, y: 85.87, round: 27 },
    ]));
    torpedos.push(APP.waterObject(52988, [
        {x: 540.21, y: 249.77, round: 114 },
        {x: 538.35, y: 269.68, round: 115 },
        {x: 536.49, y: 289.59, round: 116 },
        {x: 534.63, y: 309.51, round: 117 },
        {x: 532.77, y: 329.42, round: 118 },
    ]));
    torpedos.push(APP.waterObject(52957, [
        {x: 303.92, y: 299.37, round: 24 },
        {x: 322.91, y: 305.65, round: 25 },
        {x: 341.90, y: 311.93, round: 26 },
        {x: 360.89, y: 318.21, round: 27 },
        {x: 379.88, y: 324.49, round: 28 },
        {x: 398.86, y: 330.77, round: 29 },
        {x: 417.85, y: 337.05, round: 30 },
    ]));
    torpedos.push(APP.waterObject(52989, [
        {x: 573.21, y: 316.31, round: 114 },
        {x: 570.84, y: 296.45, round: 115 },
        {x: 568.47, y: 276.59, round: 116 },
        {x: 566.10, y: 256.73, round: 117 },
        {x: 563.73, y: 236.87, round: 118 },
    ]));
    torpedos.push(APP.waterObject(52990, [
        {x: 531.76, y: 252.27, round: 121 },
        {x: 551.76, y: 252.72, round: 122 },
        {x: 571.75, y: 253.17, round: 123 },
        {x: 591.75, y: 253.62, round: 124 },
        {x: 611.74, y: 254.08, round: 125 },
        {x: 511.77, y: 251.82, round: 120 },
    ]));
    torpedos.push(APP.waterObject(52991, [
        {x: 540.12, y: 251.64, round: 121 },
        {x: 525.95, y: 237.53, round: 122 },
        {x: 511.77, y: 223.42, round: 123 },
        {x: 497.59, y: 209.31, round: 124 },
        {x: 554.30, y: 265.74, round: 120 },
    ]));

    otherSubmarines.push(APP.waterObject(52945, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 648.39, y: 149.42, round: 105 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 609.75, y: 139.07, round: 101 },
        {x: 225.75, y: 174.25, round: 13 },
        {x: 638.73, y: 146.83, round: 104 },
        {x: 629.07, y: 144.24, round: 103 },
        {x: 619.41, y: 141.66, round: 102 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
    ]));
    otherSubmarines.push(APP.waterObject(52946, [
        {x: 521.87, y: 248.32, round: 46 },
        {x: 528.71, y: 229.52, round: 44 },
        {x: 508.19, y: 285.90, round: 50 },
        {x: 518.45, y: 257.71, round: 47 },
        {x: 504.77, y: 295.30, round: 51 },
        {x: 501.35, y: 304.70, round: 52 },
        {x: 515.03, y: 267.11, round: 48 },
        {x: 525.29, y: 238.92, round: 45 },
        {x: 511.61, y: 276.51, round: 49 },
    ]));
    otherSubmarines.push(APP.waterObject(52947, [
        {x: 717.94, y: 213.77, round: 92 },
        {x: 563.83, y: 213.77, round: 119 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 523.83, y: 144.49, round: 127 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 692.94, y: 257.07, round: 97 },
        {x: 578.83, y: 239.75, round: 116 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 687.94, y: 265.73, round: 98 },
        {x: 573.83, y: 231.09, round: 117 },
        {x: 568.83, y: 222.43, round: 118 },
        {x: 707.94, y: 231.09, round: 94 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 588.83, y: 257.07, round: 114 },
        {x: 613.83, y: 300.37, round: 109 },
        {x: 727.94, y: 196.45, round: 90 },
        {x: 543.83, y: 179.13, round: 123 },
        {x: 608.83, y: 291.71, round: 110 },
        {x: 722.94, y: 205.11, round: 91 },
        {x: 593.83, y: 265.73, round: 113 },
        {x: 702.94, y: 239.75, round: 95 },
        {x: 626.49, y: 315.46, round: 107 },
        {x: 697.94, y: 248.41, round: 96 },
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
        {x: 712.94, y: 222.43, round: 93 },
        {x: 598.83, y: 274.39, round: 112 },
        {x: 583.83, y: 248.41, round: 115 },
        {x: 603.83, y: 283.05, round: 111 },
    ]));
    otherSubmarines.push(APP.waterObject(52948, [
        {x: 316.16, y: 265.55, round: 24 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 611.34, y: 158.76, round: 107 },
        {x: 601.68, y: 156.18, round: 106 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 287.18, y: 257.79, round: 27 },
        {x: 592.02, y: 153.59, round: 105 },
        {x: 621.00, y: 161.35, round: 108 },
        {x: 582.36, y: 151.00, round: 104 },
    ]));
    otherSubmarines.push(APP.waterObject(52949, [
        {x: 419.52, y: 296.13, round: 45 },
        {x: 451.79, y: 318.72, round: 41 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 480.47, y: 321.23, round: 38 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 428.58, y: 300.36, round: 44 },
        {x: 460.85, y: 322.95, round: 40 },
        {x: 470.81, y: 323.82, round: 39 },
    ]));
    otherSubmarines.push(APP.waterObject(52950, [
        {x: 629.04, y: 300.54, round: 88 },
        {x: 367.06, y: 110.25, round: 27 },
        {x: 372.06, y: 101.59, round: 28 },
        {x: 733.01, y: 266.34, round: 77 },
        {x: 362.06, y: 118.91, round: 26 },
        {x: 332.06, y: 170.87, round: 20 },
        {x: 394.11, y: 83.08, round: 31 },
        {x: 404.11, y: 83.08, round: 32 },
        {x: 723.61, y: 269.76, round: 78 },
        {x: 751.80, y: 259.50, round: 75 },
        {x: 342.06, y: 153.55, round: 22 },
        {x: 432.31, y: 93.34, round: 35 },
        {x: 384.72, y: 86.50, round: 30 },
        {x: 695.42, y: 280.02, round: 81 },
        {x: 327.06, y: 179.53, round: 19 },
        {x: 639.04, y: 300.54, round: 87 },
        {x: 337.06, y: 162.21, round: 21 },
        {x: 648.43, y: 297.12, round: 86 },
        {x: 676.63, y: 286.86, round: 83 },
        {x: 357.06, y: 127.57, round: 25 },
        {x: 667.23, y: 290.28, round: 84 },
        {x: 764.46, y: 244.41, round: 73 },
        {x: 742.40, y: 262.92, round: 76 },
        {x: 759.46, y: 253.07, round: 74 },
        {x: 766.20, y: 234.56, round: 72 },
        {x: 352.06, y: 136.23, round: 24 },
        {x: 657.83, y: 293.70, round: 85 },
        {x: 347.06, y: 144.89, round: 23 },
        {x: 686.02, y: 283.44, round: 82 },
        {x: 413.51, y: 86.50, round: 33 },
        {x: 377.06, y: 92.93, round: 29 },
        {x: 422.91, y: 89.92, round: 34 },
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
        APP.put(myScores, {score: 200, round: 119})
        APP.put(myScores, {score: 200, round: 120})
        APP.put(myScores, {score: 200, round: 121})
        APP.put(myScores, {score: 200, round: 122})
        APP.put(myScores, {score: 200, round: 123})
        APP.put(myScores, {score: 200, round: 124})
        APP.put(myScores, {score: 200, round: 125})
        APP.put(myScores, {score: 200, round: 126})
        APP.put(myScores, {score: 200, round: 127})
        APP.put(myScores, {score: 200, round: 128})
        APP.put(myScores, {score: 300, round: 129})
        APP.put(myScores, {score: 300, round: 130})
        APP.put(myScores, {score: 300, round: 131})
        APP.put(myScores, {score: 300, round: 132})
        APP.put(myScores, {score: 300, round: 133})
        APP.put(myScores, {score: 300, round: 134})
        APP.put(myScores, {score: 300, round: 135})
        APP.put(myScores, {score: 300, round: 136})
        APP.put(myScores, {score: 300, round: 137})
        APP.put(myScores, {score: 300, round: 138})
        APP.put(myScores, {score: 300, round: 139})
        APP.put(myScores, {score: 300, round: 140})
        APP.put(myScores, {score: 300, round: 141})
        APP.put(myScores, {score: 300, round: 142})
        APP.put(myScores, {score: 300, round: 143})
        APP.put(myScores, {score: 300, round: 144})
        APP.put(myScores, {score: 300, round: 145})
        APP.put(myScores, {score: 300, round: 146})
        APP.put(myScores, {score: 300, round: 147})
        APP.put(myScores, {score: 300, round: 148})
        APP.put(myScores, {score: 300, round: 149})

	return {
		gameId: 'game20161109_05_01_02',
		gameTime: '2016-11-09 05:01:02',
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