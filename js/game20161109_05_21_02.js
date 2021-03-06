APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(53113, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.35, y: 299.15, round: 2, sonar: 'nonextended' },
        {x: 106.20, y: 295.96, round: 3, sonar: 'nonextended' },
        {x: 110.57, y: 289.87, round: 4, sonar: 'nonextended' },
        {x: 118.82, y: 284.20, round: 5, sonar: 'nonextended' },
        {x: 124.51, y: 279.32, round: 6, sonar: 'nonextended' },
        {x: 130.37, y: 271.22, round: 7, sonar: 'nonextended' },
        {x: 138.62, y: 265.57, round: 8, sonar: 'nonextended' },
        {x: 147.20, y: 260.43, round: 9, sonar: 'nonextended' },
        {x: 155.63, y: 255.05, round: 10, sonar: 'nonextended' },
        {x: 163.57, y: 248.97, round: 11, sonar: 'nonextended' },
        {x: 173.06, y: 245.81, round: 12, sonar: 'nonextended' },
        {x: 183.05, y: 246.07, round: 13, sonar: 'nonextended' },
        {x: 192.88, y: 244.20, round: 14, sonar: 'nonextended' },
        {x: 202.87, y: 244.09, round: 15, sonar: 'nonextended' },
        {x: 212.43, y: 247.05, round: 16, sonar: 'nonextended' },
        {x: 221.43, y: 251.41, round: 17, sonar: 'nonextended' },
        {x: 230.26, y: 256.10, round: 18, sonar: 'nonextended' },
        {x: 238.49, y: 261.77, round: 19, sonar: 'nonextended' },
        {x: 247.02, y: 267.00, round: 20, sonar: 'nonextended' },
        {x: 255.75, y: 271.87, round: 21, sonar: 'nonextended' },
        {x: 262.66, y: 279.10, round: 22, sonar: 'nonextended' },
        {x: 270.54, y: 285.25, round: 23, sonar: 'nonextended' },
        {x: 279.45, y: 289.79, round: 24, sonar: 'nonextended' },
        {x: 286.88, y: 290.87, round: 25, sonar: 'nonextended' },
        {x: 295.98, y: 294.99, round: 26, sonar: 'nonextended' },
        {x: 302.55, y: 298.62, round: 27, sonar: 'nonextended' },
        {x: 311.89, y: 302.20, round: 28, sonar: 'nonextended' },
        {x: 321.83, y: 303.22, round: 29, sonar: 'nonextended' },
        {x: 331.83, y: 302.89, round: 30, sonar: 'nonextended' },
        {x: 341.52, y: 300.43, round: 31, sonar: 'nonextended' },
        {x: 351.50, y: 300.99, round: 32, sonar: 'nonextended' },
        {x: 361.50, y: 300.83, round: 33, sonar: 'nonextended' },
        {x: 371.33, y: 298.97, round: 34, sonar: 'nonextended' },
        {x: 380.30, y: 294.54, round: 35, sonar: 'nonextended' },
        {x: 389.94, y: 291.90, round: 36, sonar: 'nonextended' },
        {x: 396.76, y: 288.78, round: 37, sonar: 'nonextended' },
        {x: 406.10, y: 285.22, round: 38, sonar: 'nonextended' },
        {x: 413.98, y: 279.06, round: 39, sonar: 'nonextended' },
        {x: 418.65, y: 273.18, round: 40, sonar: 'nonextended' },
        {x: 425.96, y: 266.37, round: 41, sonar: 'nonextended' },
        {x: 435.08, y: 262.26, round: 42, sonar: 'nonextended' },
        {x: 444.86, y: 260.18, round: 43, sonar: 'nonextended' },
        {x: 454.69, y: 258.37, round: 44, sonar: 'nonextended' },
        {x: 464.12, y: 255.04, round: 45, sonar: 'nonextended' },
        {x: 472.29, y: 249.27, round: 46, sonar: 'nonextended' },
        {x: 480.39, y: 243.40, round: 47, sonar: 'nonextended' },
        {x: 488.47, y: 237.51, round: 48, sonar: 'nonextended' },
        {x: 496.52, y: 231.57, round: 49, sonar: 'nonextended' },
        {x: 504.57, y: 225.64, round: 50, sonar: 'nonextended' },
        {x: 511.28, y: 218.23, round: 51, sonar: 'nonextended' },
        {x: 518.69, y: 211.52, round: 52, sonar: 'nonextended' },
        {x: 526.70, y: 205.53, round: 53, sonar: 'nonextended' },
        {x: 532.93, y: 197.71, round: 54, sonar: 'nonextended' },
        {x: 540.70, y: 191.41, round: 55, sonar: 'nonextended' },
        {x: 549.73, y: 187.11, round: 56, sonar: 'nonextended' },
        {x: 559.50, y: 184.96, round: 57, sonar: 'nonextended' },
        {x: 569.41, y: 183.66, round: 58, sonar: 'nonextended' },
        {x: 578.42, y: 179.32, round: 59, sonar: 'nonextended' },
        {x: 586.98, y: 174.14, round: 60, sonar: 'nonextended' },
        {x: 595.80, y: 169.43, round: 61, sonar: 'nonextended' },
        {x: 602.60, y: 162.10, round: 62, sonar: 'nonextended' },
        {x: 611.16, y: 156.94, round: 63, sonar: 'nonextended' },
        {x: 619.82, y: 151.92, round: 64, sonar: 'nonextended' },
        {x: 626.80, y: 144.77, round: 65, sonar: 'nonextended' },
        {x: 632.50, y: 136.55, round: 66, sonar: 'nonextended' },
        {x: 637.97, y: 131.42, round: 67, sonar: 'nonextended' },
        {x: 645.90, y: 125.33, round: 68, sonar: 'nonextended' },
        {x: 655.34, y: 122.04, round: 69, sonar: 'nonextended' },
        {x: 663.97, y: 116.97, round: 70, sonar: 'nonextended' },
        {x: 671.94, y: 110.94, round: 71, sonar: 'nonextended' },
        {x: 681.47, y: 107.89, round: 72, sonar: 'nonextended' },
        {x: 691.22, y: 105.69, round: 73, sonar: 'nonextended' },
        {x: 701.21, y: 105.31, round: 74, sonar: 'nonextended' },
        {x: 710.89, y: 107.83, round: 75, sonar: 'nonextended' },
        {x: 717.11, y: 112.01, round: 76, sonar: 'nonextended' },
        {x: 725.15, y: 117.97, round: 77, sonar: 'nonextended' },
        {x: 733.52, y: 123.43, round: 78, sonar: 'nonextended' },
        {x: 740.62, y: 130.48, round: 79, sonar: 'nonextended' },
        {x: 745.16, y: 139.39, round: 80, sonar: 'nonextended' },
        {x: 746.50, y: 149.30, round: 81, sonar: 'nonextended' },
        {x: 746.85, y: 159.29, round: 82, sonar: 'nonextended' },
        {x: 749.63, y: 168.90, round: 83, sonar: 'nonextended' },
        {x: 749.16, y: 178.89, round: 84, sonar: 'nonextended' },
        {x: 747.36, y: 188.72, round: 85, sonar: 'nonextended' },
        {x: 744.04, y: 198.15, round: 86, sonar: 'nonextended' },
        {x: 741.34, y: 207.78, round: 87, sonar: 'nonextended' },
        {x: 736.28, y: 216.41, round: 88, sonar: 'nonextended' },
        {x: 733.92, y: 226.13, round: 89, sonar: 'nonextended' },
        {x: 730.66, y: 235.58, round: 90, sonar: 'nonextended' },
        {x: 724.47, y: 243.44, round: 91, sonar: 'nonextended' },
        {x: 717.02, y: 250.11, round: 92, sonar: 'nonextended' },
        {x: 709.45, y: 256.64, round: 93, sonar: 'nonextended' },
        {x: 702.48, y: 263.81, round: 94, sonar: 'nonextended' },
        {x: 695.89, y: 267.39, round: 95, sonar: 'nonextended' },
        {x: 686.21, y: 269.91, round: 96, sonar: 'nonextended' },
        {x: 676.49, y: 272.26, round: 97, sonar: 'nonextended' },
        {x: 666.68, y: 274.17, round: 98, sonar: 'nonextended' },
        {x: 656.86, y: 276.05, round: 99, sonar: 'nonextended' },
        {x: 647.31, y: 279.03, round: 100, sonar: 'nonextended' },
        {x: 637.31, y: 279.09, round: 101, sonar: 'nonextended' },
        {x: 627.31, y: 279.12, round: 102, sonar: 'nonextended' },
        {x: 617.38, y: 277.91, round: 103, sonar: 'nonextended' },
        {x: 607.56, y: 279.76, round: 104, sonar: 'nonextended' },
        {x: 597.63, y: 281.01, round: 105, sonar: 'nonextended' },
        {x: 587.68, y: 281.99, round: 106, sonar: 'nonextended' },
        {x: 577.81, y: 283.59, round: 107, sonar: 'nonextended' },
        {x: 567.83, y: 284.16, round: 108, sonar: 'nonextended' },
        {x: 557.83, y: 284.52, round: 109, sonar: 'nonextended' },
        {x: 548.29, y: 287.51, round: 110, sonar: 'nonextended' },
        {x: 538.81, y: 290.68, round: 111, sonar: 'nonextended' },
        {x: 529.69, y: 294.79, round: 112, sonar: 'nonextended' },
        {x: 519.78, y: 296.11, round: 113, sonar: 'nonextended' },
        {x: 512.39, y: 297.37, round: 114, sonar: 'nonextended' },
        {x: 503.68, y: 302.28, round: 115, sonar: 'nonextended' },
        {x: 493.92, y: 304.48, round: 116, sonar: 'nonextended' },
        {x: 484.09, y: 306.32, round: 117, sonar: 'nonextended' },
        {x: 474.09, y: 306.48, round: 118, sonar: 'nonextended' },
        {x: 464.16, y: 305.31, round: 119, sonar: 'nonextended' },
        {x: 454.17, y: 304.93, round: 120, sonar: 'nonextended' },
        {x: 444.26, y: 303.62, round: 121, sonar: 'nonextended' },
        {x: 434.37, y: 302.08, round: 122, sonar: 'nonextended' },
        {x: 425.53, y: 297.41, round: 123, sonar: 'nonextended' },
        {x: 415.69, y: 295.62, round: 124, sonar: 'nonextended' },
        {x: 406.17, y: 292.57, round: 125, sonar: 'nonextended' },
        {x: 397.09, y: 288.38, round: 126, sonar: 'nonextended' },
        {x: 388.32, y: 283.58, round: 127, sonar: 'nonextended' },
        {x: 378.55, y: 281.45, round: 128, sonar: 'nonextended' },
        {x: 369.69, y: 276.80, round: 129, sonar: 'nonextended' },
        {x: 362.48, y: 274.75, round: 130, sonar: 'nonextended' },
        {x: 352.51, y: 273.94, round: 131, sonar: 'nonextended' },
        {x: 342.54, y: 273.20, round: 132, sonar: 'nonextended' },
        {x: 332.78, y: 275.39, round: 133, sonar: 'nonextended' },
        {x: 322.99, y: 277.41, round: 134, sonar: 'nonextended' },
        {x: 313.06, y: 278.62, round: 135, sonar: 'nonextended' },
        {x: 303.49, y: 281.52, round: 136, sonar: 'nonextended' },
        {x: 303.49, y: 281.52, round: 137, sonar: 'nonextended' },
        {x: 284.54, y: 287.10, round: 138, sonar: 'nonextended' },
        {x: 274.61, y: 288.29, round: 139, sonar: 'nonextended' },
        {x: 264.65, y: 287.42, round: 140, sonar: 'nonextended' },
        {x: 254.67, y: 287.99, round: 141, sonar: 'nonextended' },
        {x: 245.18, y: 291.16, round: 142, sonar: 'nonextended' },
        {x: 237.19, y: 297.17, round: 143, sonar: 'nonextended' },
        {x: 229.87, y: 303.98, round: 144, sonar: 'nonextended' },
        {x: 223.76, y: 311.90, round: 145, sonar: 'nonextended' },
        {x: 216.69, y: 318.97, round: 146, sonar: 'nonextended' },
        {x: 207.96, y: 323.84, round: 147, sonar: 'nonextended' },
        {x: 198.16, y: 325.86, round: 148, sonar: 'nonextended' },
        {x: 188.29, y: 327.43, round: 149, sonar: 'nonextended' },
    ]));
	mySubmarines.push(APP.submarine(53114, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.23, y: 273.86, round: 2, sonar: 'nonextended' },
        {x: 132.14, y: 272.94, round: 3, sonar: 'nonextended' },
        {x: 138.89, y: 269.68, round: 4, sonar: 'nonextended' },
        {x: 147.72, y: 264.97, round: 5, sonar: 'nonextended' },
        {x: 155.87, y: 259.18, round: 6, sonar: 'nonextended' },
        {x: 165.18, y: 255.54, round: 7, sonar: 'nonextended' },
        {x: 173.82, y: 250.50, round: 8, sonar: 'nonextended' },
        {x: 181.58, y: 244.19, round: 9, sonar: 'nonextended' },
        {x: 190.10, y: 238.95, round: 10, sonar: 'nonextended' },
        {x: 196.58, y: 231.34, round: 11, sonar: 'nonextended' },
        {x: 201.40, y: 222.58, round: 12, sonar: 'nonextended' },
        {x: 205.15, y: 213.31, round: 13, sonar: 'nonextended' },
        {x: 211.10, y: 205.27, round: 14, sonar: 'nonextended' },
        {x: 219.17, y: 199.37, round: 15, sonar: 'nonextended' },
        {x: 227.22, y: 193.42, round: 16, sonar: 'nonextended' },
        {x: 234.04, y: 186.12, round: 17, sonar: 'nonextended' },
        {x: 239.31, y: 177.61, round: 18, sonar: 'nonextended' },
        {x: 246.91, y: 171.12, round: 19, sonar: 'nonextended' },
        {x: 255.68, y: 166.32, round: 20, sonar: 'nonextended' },
        {x: 264.31, y: 161.25, round: 21, sonar: 'nonextended' },
        {x: 273.70, y: 157.83, round: 22, sonar: 'nonextended' },
        {x: 281.20, y: 157.71, round: 23, sonar: 'nonextended' },
        {x: 288.58, y: 156.37, round: 24, sonar: 'nonextended' },
        {x: 297.32, y: 151.51, round: 25, sonar: 'nonextended' },
        {x: 306.66, y: 147.95, round: 26, sonar: 'nonextended' },
        {x: 315.19, y: 142.73, round: 27, sonar: 'nonextended' },
        {x: 323.72, y: 137.51, round: 28, sonar: 'nonextended' },
        {x: 330.94, y: 130.59, round: 29, sonar: 'nonextended' },
        {x: 339.00, y: 124.67, round: 30, sonar: 'nonextended' },
        {x: 346.26, y: 117.79, round: 31, sonar: 'nonextended' },
        {x: 355.40, y: 113.73, round: 32, sonar: 'nonextended' },
        {x: 362.80, y: 112.51, round: 33, sonar: 'nonextended' },
        {x: 372.06, y: 108.74, round: 34, sonar: 'nonextended' },
        {x: 381.89, y: 106.92, round: 35, sonar: 'nonextended' },
        {x: 391.89, y: 107.02, round: 36, sonar: 'nonextended' },
        {x: 401.44, y: 109.99, round: 37, sonar: 'nonextended' },
        {x: 411.13, y: 112.45, round: 38, sonar: 'nonextended' },
        {x: 421.13, y: 112.16, round: 39, sonar: 'nonextended' },
        {x: 430.99, y: 113.80, round: 40, sonar: 'nonextended' },
        {x: 440.99, y: 114.09, round: 41, sonar: 'nonextended' },
        {x: 450.72, y: 111.79, round: 42, sonar: 'nonextended' },
        {x: 460.71, y: 112.05, round: 43, sonar: 'nonextended' },
        {x: 470.64, y: 113.23, round: 44, sonar: 'nonextended' },
        {x: 480.57, y: 112.05, round: 45, sonar: 'nonextended' },
        {x: 487.91, y: 113.60, round: 46, sonar: 'nonextended' },
        {x: 496.56, y: 118.61, round: 47, sonar: 'nonextended' },
        {x: 503.24, y: 126.05, round: 48, sonar: 'nonextended' },
        {x: 511.84, y: 131.17, round: 49, sonar: 'nonextended' },
        {x: 519.35, y: 137.77, round: 50, sonar: 'nonextended' },
        {x: 524.54, y: 143.18, round: 51, sonar: 'nonextended' },
        {x: 532.79, y: 148.84, round: 52, sonar: 'nonextended' },
        {x: 539.01, y: 156.66, round: 53, sonar: 'nonextended' },
        {x: 542.76, y: 165.93, round: 54, sonar: 'nonextended' },
        {x: 546.38, y: 175.26, round: 55, sonar: 'nonextended' },
        {x: 547.21, y: 182.71, round: 56, sonar: 'nonextended' },
        {x: 546.61, y: 192.69, round: 57, sonar: 'nonextended' },
        {x: 543.06, y: 202.04, round: 58, sonar: 'nonextended' },
        {x: 538.46, y: 210.92, round: 59, sonar: 'nonextended' },
        {x: 534.53, y: 220.11, round: 60, sonar: 'nonextended' },
        {x: 530.00, y: 229.03, round: 61, sonar: 'nonextended' },
        {x: 526.77, y: 238.49, round: 62, sonar: 'nonextended' },
        {x: 521.75, y: 247.14, round: 63, sonar: 'nonextended' },
        {x: 514.24, y: 253.75, round: 64, sonar: 'nonextended' },
        {x: 508.29, y: 261.78, round: 65, sonar: 'nonextended' },
        {x: 504.14, y: 270.88, round: 66, sonar: 'nonextended' },
        {x: 498.09, y: 278.84, round: 67, sonar: 'nonextended' },
        {x: 491.35, y: 286.24, round: 68, sonar: 'nonextended' },
        {x: 482.75, y: 291.33, round: 69, sonar: 'nonextended' },
        {x: 476.30, y: 298.98, round: 70, sonar: 'nonextended' },
        {x: 469.24, y: 306.06, round: 71, sonar: 'nonextended' },
        {x: 462.50, y: 309.35, round: 72, sonar: 'nonextended' },
        {x: 453.84, y: 314.34, round: 73, sonar: 'nonextended' },
        {x: 445.22, y: 319.41, round: 74, sonar: 'nonextended' },
        {x: 436.81, y: 324.82, round: 75, sonar: 'nonextended' },
        {x: 429.19, y: 331.30, round: 76, sonar: 'nonextended' },
        {x: 422.09, y: 338.34, round: 77, sonar: 'nonextended' },
        {x: 416.05, y: 342.79, round: 78, sonar: 'nonextended' },
        {x: 407.32, y: 347.67, round: 79, sonar: 'nonextended' },
        {x: 399.97, y: 349.14, round: 80, sonar: 'nonextended' },
        {x: 390.01, y: 350.10, round: 81, sonar: 'nonextended' },
        {x: 380.02, y: 350.25, round: 82, sonar: 'nonextended' },
        {x: 370.47, y: 347.27, round: 83, sonar: 'nonextended' },
        {x: 361.34, y: 343.19, round: 84, sonar: 'nonextended' },
        {x: 351.53, y: 341.28, round: 85, sonar: 'nonextended' },
        {x: 342.09, y: 337.96, round: 86, sonar: 'nonextended' },
        {x: 332.48, y: 335.19, round: 87, sonar: 'nonextended' },
        {x: 322.51, y: 334.51, round: 88, sonar: 'nonextended' },
        {x: 312.52, y: 334.02, round: 89, sonar: 'nonextended' },
        {x: 303.01, y: 330.92, round: 90, sonar: 'nonextended' },
        {x: 294.06, y: 326.46, round: 91, sonar: 'nonextended' },
        {x: 285.24, y: 321.76, round: 92, sonar: 'nonextended' },
        {x: 276.18, y: 317.51, round: 93, sonar: 'nonextended' },
        {x: 266.25, y: 316.36, round: 94, sonar: 'nonextended' },
        {x: 256.78, y: 313.13, round: 95, sonar: 'nonextended' },
        {x: 247.76, y: 308.83, round: 96, sonar: 'nonextended' },
        {x: 238.56, y: 304.90, round: 97, sonar: 'nonextended' },
        {x: 232.85, y: 300.03, round: 98, sonar: 'nonextended' },
        {x: 224.58, y: 294.42, round: 99, sonar: 'nonextended' },
        {x: 215.31, y: 290.66, round: 100, sonar: 'nonextended' },
        {x: 205.57, y: 288.39, round: 101, sonar: 'nonextended' },
        {x: 196.66, y: 283.85, round: 102, sonar: 'nonextended' },
        {x: 186.92, y: 281.61, round: 103, sonar: 'nonextended' },
        {x: 178.49, y: 276.22, round: 104, sonar: 'nonextended' },
        {x: 170.78, y: 269.86, round: 105, sonar: 'nonextended' },
        {x: 162.96, y: 263.62, round: 106, sonar: 'nonextended' },
        {x: 154.36, y: 258.52, round: 107, sonar: 'nonextended' },
        {x: 145.81, y: 253.33, round: 108, sonar: 'nonextended' },
        {x: 136.86, y: 248.89, round: 109, sonar: 'nonextended' },
        {x: 128.09, y: 244.08, round: 110, sonar: 'nonextended' },
        {x: 121.02, y: 237.01, round: 111, sonar: 'nonextended' },
        {x: 116.01, y: 228.35, round: 112, sonar: 'nonextended' },
        {x: 112.12, y: 219.14, round: 113, sonar: 'nonextended' },
        {x: 108.34, y: 209.88, round: 114, sonar: 'nonextended' },
        {x: 107.26, y: 199.94, round: 115, sonar: 'nonextended' },
        {x: 109.29, y: 190.15, round: 116, sonar: 'nonextended' },
        {x: 108.07, y: 180.22, round: 117, sonar: 'nonextended' },
        {x: 108.38, y: 170.23, round: 118, sonar: 'nonextended' },
        {x: 107.79, y: 160.25, round: 119, sonar: 'nonextended' },
        {x: 104.13, y: 150.94, round: 120, sonar: 'nonextended' },
        {x: 100.89, y: 141.48, round: 121, sonar: 'nonextended' },
        {x: 99.42, y: 131.59, round: 122, sonar: 'nonextended' },
        {x: 99.63, y: 121.59, round: 123, sonar: 'nonextended' },
        {x: 100.85, y: 111.66, round: 124, sonar: 'nonextended' },
        {x: 104.80, y: 102.48, round: 125, sonar: 'nonextended' },
        {x: 110.32, y: 94.14, round: 126, sonar: 'nonextended' },
        {x: 118.32, y: 88.14, round: 127, sonar: 'nonextended' },
        {x: 127.51, y: 84.19, round: 128, sonar: 'nonextended' },
        {x: 133.71, y: 79.98, round: 129, sonar: 'nonextended' },
        {x: 143.21, y: 76.84, round: 130, sonar: 'nonextended' },
        {x: 150.39, y: 74.67, round: 131, sonar: 'nonextended' },
        {x: 159.73, y: 71.11, round: 132, sonar: 'nonextended' },
        {x: 167.97, y: 65.43, round: 133, sonar: 'nonextended' },
        {x: 177.39, y: 62.08, round: 134, sonar: 'nonextended' },
        {x: 187.39, y: 62.02, round: 135, sonar: 'nonextended' },
        {x: 197.00, y: 59.25, round: 136, sonar: 'nonextended' },
        {x: 197.00, y: 59.25, round: 137, sonar: 'nonextended' },
        {x: 215.89, y: 52.90, round: 138, sonar: 'nonextended' },
        {x: 225.88, y: 52.42, round: 139, sonar: 'nonextended' },
        {x: 235.78, y: 53.83, round: 140, sonar: 'nonextended' },
        {x: 244.70, y: 58.36, round: 141, sonar: 'nonextended' },
        {x: 252.43, y: 64.70, round: 142, sonar: 'nonextended' },
        {x: 258.40, y: 72.73, round: 143, sonar: 'nonextended' },
        {x: 265.38, y: 79.88, round: 144, sonar: 'nonextended' },
        {x: 272.70, y: 86.69, round: 145, sonar: 'nonextended' },
        {x: 279.01, y: 94.46, round: 146, sonar: 'nonextended' },
        {x: 284.18, y: 103.01, round: 147, sonar: 'nonextended' },
        {x: 291.01, y: 110.32, round: 148, sonar: 'nonextended' },
        {x: 299.24, y: 116.00, round: 149, sonar: 'nonextended' },
    ]));

    torpedos.push(APP.waterObject(53138, [
        {x: 705.45, y: 114.48, round: 78 },
        {x: 685.76, y: 110.98, round: 79 },
    ]));
    torpedos.push(APP.waterObject(53139, [
        {x: 435.36, y: 337.57, round: 79 },
        {x: 454.66, y: 332.34, round: 80 },
    ]));
    torpedos.push(APP.waterObject(53124, [
        {x: 216.69, y: 176.18, round: 18 },
        {x: 199.33, y: 166.24, round: 19 },
        {x: 181.98, y: 156.30, round: 20 },
    ]));
    torpedos.push(APP.waterObject(53140, [
        {x: 748.38, y: 148.94, round: 84 },
    ]));
    torpedos.push(APP.waterObject(53126, [
        {x: 281.76, y: 137.72, round: 24 },
        {x: 282.32, y: 117.72, round: 25 },
        {x: 282.88, y: 97.73, round: 26 },
        {x: 283.44, y: 77.74, round: 27 },
    ]));
    torpedos.push(APP.waterObject(53127, [
        {x: 302.75, y: 278.62, round: 28 },
        {x: 302.96, y: 258.62, round: 29 },
        {x: 303.16, y: 238.63, round: 30 },
    ]));
    torpedos.push(APP.waterObject(53145, [
        {x: 666.98, y: 275.42, round: 101 },
        {x: 686.65, y: 271.82, round: 102 },
    ]));
    torpedos.push(APP.waterObject(53130, [
        {x: 399.73, y: 289.81, round: 36 },
        {x: 419.16, y: 285.07, round: 37 },
        {x: 438.59, y: 280.33, round: 38 },
        {x: 458.02, y: 275.59, round: 39 },
        {x: 477.45, y: 270.85, round: 40 },
        {x: 496.88, y: 266.11, round: 41 },
    ]));
    torpedos.push(APP.waterObject(53146, [
        {x: 567.39, y: 302.09, round: 110 },
        {x: 576.94, y: 319.66, round: 111 },
        {x: 586.49, y: 337.23, round: 112 },
    ]));
    torpedos.push(APP.waterObject(53133, [
        {x: 475.70, y: 238.73, round: 46 },
        {x: 487.28, y: 222.43, round: 47 },
        {x: 498.86, y: 206.12, round: 48 },
        {x: 510.44, y: 189.81, round: 49 },
        {x: 522.02, y: 173.51, round: 50 },
        {x: 533.60, y: 157.20, round: 51 },
    ]));

    otherSubmarines.push(APP.waterObject(53120, [
        {x: 592.05, y: 151.48, round: 52 },
        {x: 451.10, y: 100.18, round: 37 },
        {x: 367.06, y: 110.25, round: 27 },
        {x: 372.06, y: 101.59, round: 28 },
        {x: 554.47, y: 137.80, round: 48 },
        {x: 362.06, y: 118.91, round: 26 },
        {x: 394.11, y: 83.08, round: 31 },
        {x: 404.11, y: 83.08, round: 32 },
        {x: 469.89, y: 107.02, round: 39 },
        {x: 563.86, y: 141.22, round: 49 },
        {x: 342.06, y: 153.55, round: 22 },
        {x: 432.31, y: 93.34, round: 35 },
        {x: 516.88, y: 124.12, round: 44 },
        {x: 384.72, y: 86.50, round: 30 },
        {x: 441.70, y: 96.76, round: 36 },
        {x: 573.26, y: 144.64, round: 50 },
        {x: 582.66, y: 148.06, round: 51 },
        {x: 337.06, y: 162.21, round: 21 },
        {x: 545.07, y: 134.38, round: 47 },
        {x: 498.08, y: 117.28, round: 42 },
        {x: 507.48, y: 120.70, round: 43 },
        {x: 357.06, y: 127.57, round: 25 },
        {x: 610.85, y: 158.32, round: 54 },
        {x: 352.06, y: 136.23, round: 24 },
        {x: 347.06, y: 144.89, round: 23 },
        {x: 460.50, y: 103.60, round: 38 },
        {x: 535.67, y: 130.96, round: 46 },
        {x: 601.45, y: 154.90, round: 53 },
        {x: 413.51, y: 86.50, round: 33 },
        {x: 479.29, y: 110.44, round: 40 },
        {x: 377.06, y: 92.93, round: 29 },
        {x: 422.91, y: 89.92, round: 34 },
        {x: 488.69, y: 113.86, round: 41 },
        {x: 526.27, y: 127.54, round: 45 },
    ]));
    otherSubmarines.push(APP.waterObject(53115, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 232.82, y: 167.18, round: 12 },
        {x: 225.75, y: 174.25, round: 13 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 197.47, y: 202.53, round: 17 },
    ]));
    otherSubmarines.push(APP.waterObject(53116, [
        {x: 521.87, y: 248.32, round: 46 },
        {x: 508.19, y: 285.90, round: 50 },
        {x: 518.45, y: 257.71, round: 47 },
        {x: 515.03, y: 267.11, round: 48 },
        {x: 525.29, y: 238.92, round: 45 },
        {x: 511.61, y: 276.51, round: 49 },
    ]));
    otherSubmarines.push(APP.waterObject(53117, [
        {x: 754.68, y: 143.30, round: 84 },
        {x: 717.94, y: 213.77, round: 92 },
        {x: 645.89, y: 318.88, round: 105 },
        {x: 667.94, y: 300.37, round: 102 },
        {x: 752.94, y: 153.15, round: 85 },
        {x: 692.94, y: 257.07, round: 97 },
        {x: 655.28, y: 315.46, round: 104 },
        {x: 687.94, y: 265.73, round: 98 },
        {x: 732.94, y: 98.81, round: 79 },
        {x: 752.94, y: 133.45, round: 83 },
        {x: 707.94, y: 231.09, round: 94 },
        {x: 618.83, y: 309.03, round: 108 },
        {x: 747.94, y: 161.81, round: 86 },
        {x: 742.94, y: 170.47, round: 87 },
        {x: 747.94, y: 124.79, round: 82 },
        {x: 613.83, y: 300.37, round: 109 },
        {x: 727.94, y: 196.45, round: 90 },
        {x: 608.83, y: 291.71, round: 110 },
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
        {x: 635.89, y: 318.88, round: 106 },
        {x: 737.94, y: 179.13, round: 88 },
        {x: 662.94, y: 309.03, round: 103 },
        {x: 712.94, y: 222.43, round: 93 },
        {x: 598.83, y: 274.39, round: 112 },
        {x: 603.83, y: 283.05, round: 111 },
        {x: 721.21, y: 71.64, round: 76 },
        {x: 672.94, y: 291.71, round: 101 },
        {x: 727.94, y: 53.14, round: 74 },
        {x: 737.94, y: 107.47, round: 80 },
    ]));
    otherSubmarines.push(APP.waterObject(53118, [
        {x: 316.16, y: 265.55, round: 24 },
        {x: 267.86, y: 252.61, round: 29 },
        {x: 277.52, y: 255.20, round: 28 },
        {x: 296.84, y: 260.37, round: 26 },
        {x: 306.50, y: 262.96, round: 25 },
        {x: 325.82, y: 268.14, round: 23 },
        {x: 335.48, y: 270.73, round: 22 },
        {x: 287.18, y: 257.79, round: 27 },
    ]));
    otherSubmarines.push(APP.waterObject(53119, [
        {x: 419.52, y: 296.13, round: 45 },
        {x: 451.79, y: 318.72, round: 41 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 428.58, y: 300.36, round: 44 },
        {x: 460.85, y: 322.95, round: 40 },
        {x: 470.81, y: 323.82, round: 39 },
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
		gameId: 'game20161109_05_21_02',
		gameTime: '2016-11-09 05:21:02',
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