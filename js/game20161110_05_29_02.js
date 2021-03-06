APP.games.push((function() {
	var mySubmarines = [];
	var torpedos = [];
	var otherSubmarines = [];
	var myScores = [];

		mySubmarines.push(APP.submarine(40691, [
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 100.00, y: 300.00, round: 1, sonar: 'nonextended' },
        {x: 102.20, y: 298.81, round: 2, sonar: 'extended' },
        {x: 102.20, y: 298.81, round: 2, sonar: 'extended' },
        {x: 104.30, y: 297.46, round: 3, sonar: 'extended' },
        {x: 104.30, y: 297.46, round: 3, sonar: 'extended' },
        {x: 108.09, y: 294.19, round: 4, sonar: 'extended' },
        {x: 108.09, y: 294.19, round: 4, sonar: 'extended' },
        {x: 114.42, y: 290.17, round: 5, sonar: 'extended' },
        {x: 114.42, y: 290.17, round: 5, sonar: 'extended' },
        {x: 119.30, y: 289.10, round: 6, sonar: 'extended' },
        {x: 119.30, y: 289.10, round: 6, sonar: 'extended' },
        {x: 124.26, y: 288.49, round: 7, sonar: 'extended' },
        {x: 124.26, y: 288.49, round: 7, sonar: 'extended' },
        {x: 126.71, y: 289.02, round: 8, sonar: 'extended' },
        {x: 126.71, y: 289.02, round: 8, sonar: 'extended' },
        {x: 131.71, y: 289.01, round: 9, sonar: 'extended' },
        {x: 131.71, y: 289.01, round: 9, sonar: 'extended' },
        {x: 139.05, y: 287.46, round: 10, sonar: 'extended' },
        {x: 139.05, y: 287.46, round: 10, sonar: 'extended' },
        {x: 145.95, y: 284.54, round: 11, sonar: 'nonextended' },
        {x: 145.95, y: 284.54, round: 11, sonar: 'nonextended' },
        {x: 153.04, y: 282.09, round: 12, sonar: 'nonextended' },
        {x: 153.04, y: 282.09, round: 12, sonar: 'nonextended' },
        {x: 159.12, y: 277.70, round: 13, sonar: 'nonextended' },
        {x: 159.12, y: 277.70, round: 13, sonar: 'nonextended' },
        {x: 166.13, y: 270.56, round: 14, sonar: 'nonextended' },
        {x: 166.13, y: 270.56, round: 14, sonar: 'nonextended' },
        {x: 171.54, y: 262.15, round: 15, sonar: 'nonextended' },
        {x: 171.54, y: 262.15, round: 15, sonar: 'nonextended' },
        {x: 176.75, y: 253.62, round: 16, sonar: 'nonextended' },
        {x: 176.75, y: 253.62, round: 16, sonar: 'nonextended' },
        {x: 182.10, y: 245.17, round: 17, sonar: 'nonextended' },
        {x: 182.10, y: 245.17, round: 17, sonar: 'nonextended' },
        {x: 186.06, y: 238.80, round: 18, sonar: 'nonextended' },
        {x: 186.06, y: 238.80, round: 18, sonar: 'nonextended' },
        {x: 189.50, y: 235.17, round: 19, sonar: 'nonextended' },
        {x: 189.50, y: 235.17, round: 19, sonar: 'nonextended' },
        {x: 195.90, y: 231.26, round: 20, sonar: 'nonextended' },
        {x: 195.90, y: 231.26, round: 20, sonar: 'nonextended' },
        {x: 200.49, y: 229.29, round: 21, sonar: 'nonextended' },
        {x: 200.49, y: 229.29, round: 21, sonar: 'nonextended' },
        {x: 202.61, y: 227.97, round: 22, sonar: 'extended' },
        {x: 202.61, y: 227.97, round: 22, sonar: 'extended' },
        {x: 206.82, y: 225.26, round: 23, sonar: 'extended' },
        {x: 206.82, y: 225.26, round: 23, sonar: 'extended' },
        {x: 211.77, y: 219.63, round: 24, sonar: 'extended' },
        {x: 211.77, y: 219.63, round: 24, sonar: 'extended' },
        {x: 218.20, y: 215.76, round: 25, sonar: 'extended' },
        {x: 218.20, y: 215.76, round: 25, sonar: 'extended' },
        {x: 223.11, y: 214.79, round: 26, sonar: 'extended' },
        {x: 223.11, y: 214.79, round: 26, sonar: 'extended' },
        {x: 230.56, y: 213.92, round: 27, sonar: 'extended' },
        {x: 230.56, y: 213.92, round: 27, sonar: 'extended' },
        {x: 237.89, y: 215.49, round: 28, sonar: 'extended' },
        {x: 237.89, y: 215.49, round: 28, sonar: 'extended' },
        {x: 246.93, y: 219.76, round: 29, sonar: 'extended' },
        {x: 246.93, y: 219.76, round: 29, sonar: 'extended' },
        {x: 254.22, y: 221.51, round: 30, sonar: 'extended' },
        {x: 254.22, y: 221.51, round: 30, sonar: 'extended' },
        {x: 258.98, y: 223.06, round: 31, sonar: 'nonextended' },
        {x: 258.98, y: 223.06, round: 31, sonar: 'nonextended' },
        {x: 261.47, y: 223.22, round: 32, sonar: 'nonextended' },
        {x: 261.47, y: 223.22, round: 32, sonar: 'nonextended' },
        {x: 266.19, y: 224.89, round: 33, sonar: 'nonextended' },
        {x: 266.19, y: 224.89, round: 33, sonar: 'nonextended' },
        {x: 272.54, y: 228.87, round: 34, sonar: 'nonextended' },
        {x: 272.54, y: 228.87, round: 34, sonar: 'nonextended' },
        {x: 281.03, y: 234.15, round: 35, sonar: 'nonextended' },
        {x: 281.03, y: 234.15, round: 35, sonar: 'nonextended' },
        {x: 289.47, y: 239.53, round: 36, sonar: 'nonextended' },
        {x: 289.47, y: 239.53, round: 36, sonar: 'nonextended' },
        {x: 298.08, y: 244.60, round: 37, sonar: 'nonextended' },
        {x: 298.08, y: 244.60, round: 37, sonar: 'nonextended' },
        {x: 307.74, y: 247.20, round: 38, sonar: 'nonextended' },
        {x: 307.74, y: 247.20, round: 38, sonar: 'nonextended' },
        {x: 316.81, y: 251.42, round: 39, sonar: 'nonextended' },
        {x: 316.81, y: 251.42, round: 39, sonar: 'nonextended' },
        {x: 325.96, y: 255.46, round: 40, sonar: 'nonextended' },
        {x: 325.96, y: 255.46, round: 40, sonar: 'nonextended' },
        {x: 335.61, y: 258.05, round: 41, sonar: 'nonextended' },
        {x: 335.61, y: 258.05, round: 41, sonar: 'nonextended' },
        {x: 344.23, y: 263.12, round: 42, sonar: 'extended' },
        {x: 344.23, y: 263.12, round: 42, sonar: 'extended' },
        {x: 350.10, y: 267.79, round: 43, sonar: 'extended' },
        {x: 350.10, y: 267.79, round: 43, sonar: 'extended' },
        {x: 358.53, y: 273.17, round: 44, sonar: 'extended' },
        {x: 358.53, y: 273.17, round: 44, sonar: 'extended' },
        {x: 365.37, y: 280.47, round: 45, sonar: 'extended' },
        {x: 365.37, y: 280.47, round: 45, sonar: 'extended' },
        {x: 373.41, y: 286.41, round: 46, sonar: 'extended' },
        {x: 373.41, y: 286.41, round: 46, sonar: 'extended' },
        {x: 382.91, y: 289.55, round: 47, sonar: 'extended' },
        {x: 382.91, y: 289.55, round: 47, sonar: 'extended' },
        {x: 391.19, y: 295.15, round: 48, sonar: 'extended' },
        {x: 391.19, y: 295.15, round: 48, sonar: 'extended' },
        {x: 399.28, y: 301.03, round: 49, sonar: 'extended' },
        {x: 399.28, y: 301.03, round: 49, sonar: 'extended' },
        {x: 405.01, y: 305.86, round: 50, sonar: 'extended' },
        {x: 405.01, y: 305.86, round: 50, sonar: 'extended' },
        {x: 413.38, y: 311.34, round: 51, sonar: 'nonextended' },
        {x: 413.38, y: 311.34, round: 51, sonar: 'nonextended' },
        {x: 422.91, y: 314.36, round: 52, sonar: 'nonextended' },
        {x: 422.91, y: 314.36, round: 52, sonar: 'nonextended' },
        {x: 432.89, y: 315.00, round: 53, sonar: 'nonextended' },
        {x: 432.89, y: 315.00, round: 53, sonar: 'nonextended' },
        {x: 439.86, y: 317.76, round: 54, sonar: 'nonextended' },
        {x: 439.86, y: 317.76, round: 54, sonar: 'nonextended' },
        {x: 449.20, y: 321.35, round: 55, sonar: 'nonextended' },
        {x: 449.20, y: 321.35, round: 55, sonar: 'nonextended' },
        {x: 455.63, y: 325.22, round: 56, sonar: 'nonextended' },
        {x: 455.63, y: 325.22, round: 56, sonar: 'nonextended' },
        {x: 464.46, y: 329.90, round: 57, sonar: 'nonextended' },
        {x: 464.46, y: 329.90, round: 57, sonar: 'nonextended' },
        {x: 471.85, y: 331.21, round: 58, sonar: 'nonextended' },
        {x: 471.85, y: 331.21, round: 58, sonar: 'nonextended' },
        {x: 481.84, y: 330.84, round: 59, sonar: 'nonextended' },
        {x: 481.84, y: 330.84, round: 59, sonar: 'nonextended' },
        {x: 491.41, y: 327.96, round: 60, sonar: 'nonextended' },
        {x: 491.41, y: 327.96, round: 60, sonar: 'nonextended' },
        {x: 499.83, y: 322.57, round: 61, sonar: 'nonextended' },
        {x: 499.83, y: 322.57, round: 61, sonar: 'nonextended' },
        {x: 506.93, y: 315.52, round: 62, sonar: 'extended' },
        {x: 506.93, y: 315.52, round: 62, sonar: 'extended' },
        {x: 513.77, y: 308.23, round: 63, sonar: 'extended' },
        {x: 513.77, y: 308.23, round: 63, sonar: 'extended' },
        {x: 517.92, y: 299.13, round: 64, sonar: 'extended' },
        {x: 517.92, y: 299.13, round: 64, sonar: 'extended' },
        {x: 522.64, y: 290.31, round: 65, sonar: 'extended' },
        {x: 522.64, y: 290.31, round: 65, sonar: 'extended' },
        {x: 526.55, y: 281.11, round: 66, sonar: 'extended' },
        {x: 526.55, y: 281.11, round: 66, sonar: 'extended' },
        {x: 528.11, y: 271.23, round: 67, sonar: 'extended' },
        {x: 528.11, y: 271.23, round: 67, sonar: 'extended' },
        {x: 530.86, y: 261.62, round: 68, sonar: 'extended' },
        {x: 530.86, y: 261.62, round: 68, sonar: 'extended' },
        {x: 534.73, y: 252.40, round: 69, sonar: 'extended' },
        {x: 534.73, y: 252.40, round: 69, sonar: 'extended' },
        {x: 539.89, y: 243.83, round: 70, sonar: 'extended' },
        {x: 539.89, y: 243.83, round: 70, sonar: 'extended' },
        {x: 546.57, y: 236.39, round: 71, sonar: 'nonextended' },
        {x: 546.57, y: 236.39, round: 71, sonar: 'nonextended' },
        {x: 552.58, y: 228.40, round: 72, sonar: 'nonextended' },
        {x: 552.58, y: 228.40, round: 72, sonar: 'nonextended' },
        {x: 559.67, y: 221.34, round: 73, sonar: 'nonextended' },
        {x: 559.67, y: 221.34, round: 73, sonar: 'nonextended' },
        {x: 565.35, y: 213.11, round: 74, sonar: 'nonextended' },
        {x: 565.35, y: 213.11, round: 74, sonar: 'nonextended' },
        {x: 570.32, y: 204.43, round: 75, sonar: 'nonextended' },
        {x: 570.32, y: 204.43, round: 75, sonar: 'nonextended' },
        {x: 576.68, y: 196.72, round: 76, sonar: 'nonextended' },
        {x: 576.68, y: 196.72, round: 76, sonar: 'nonextended' },
        {x: 580.29, y: 187.40, round: 77, sonar: 'nonextended' },
        {x: 580.29, y: 187.40, round: 77, sonar: 'nonextended' },
        {x: 583.69, y: 177.99, round: 78, sonar: 'nonextended' },
        {x: 583.69, y: 177.99, round: 78, sonar: 'nonextended' },
        {x: 586.99, y: 168.55, round: 79, sonar: 'nonextended' },
        {x: 586.99, y: 168.55, round: 79, sonar: 'nonextended' },
        {x: 590.45, y: 159.17, round: 80, sonar: 'nonextended' },
        {x: 590.45, y: 159.17, round: 80, sonar: 'nonextended' },
        {x: 594.45, y: 150.00, round: 81, sonar: 'nonextended' },
        {x: 594.45, y: 150.00, round: 81, sonar: 'nonextended' },
        {x: 595.99, y: 140.12, round: 82, sonar: 'extended' },
        {x: 595.99, y: 140.12, round: 82, sonar: 'extended' },
        {x: 596.93, y: 130.17, round: 83, sonar: 'extended' },
        {x: 596.93, y: 130.17, round: 83, sonar: 'extended' },
        {x: 596.84, y: 120.17, round: 84, sonar: 'extended' },
        {x: 596.84, y: 120.17, round: 84, sonar: 'extended' },
        {x: 594.47, y: 110.45, round: 85, sonar: 'extended' },
        {x: 594.47, y: 110.45, round: 85, sonar: 'extended' },
        {x: 591.43, y: 100.93, round: 86, sonar: 'extended' },
        {x: 591.43, y: 100.93, round: 86, sonar: 'extended' },
        {x: 591.42, y: 90.93, round: 87, sonar: 'extended' },
        {x: 591.42, y: 90.93, round: 87, sonar: 'extended' },
        {x: 593.32, y: 81.11, round: 88, sonar: 'extended' },
        {x: 593.32, y: 81.11, round: 88, sonar: 'extended' },
        {x: 594.12, y: 71.14, round: 89, sonar: 'extended' },
        {x: 594.12, y: 71.14, round: 89, sonar: 'extended' },
        {x: 597.64, y: 61.78, round: 90, sonar: 'extended' },
        {x: 597.64, y: 61.78, round: 90, sonar: 'extended' },
        {x: 599.18, y: 51.90, round: 91, sonar: 'nonextended' },
        {x: 599.18, y: 51.90, round: 91, sonar: 'nonextended' },
        {x: 601.17, y: 44.67, round: 92, sonar: 'nonextended' },
        {x: 601.17, y: 44.67, round: 92, sonar: 'nonextended' },
        {x: 606.72, y: 36.35, round: 93, sonar: 'nonextended' },
        {x: 606.72, y: 36.35, round: 93, sonar: 'nonextended' },
        {x: 612.72, y: 31.85, round: 94, sonar: 'nonextended' },
        {x: 612.72, y: 31.85, round: 94, sonar: 'nonextended' },
        {x: 620.64, y: 25.74, round: 95, sonar: 'nonextended' },
        {x: 620.64, y: 25.74, round: 95, sonar: 'nonextended' },
        {x: 630.02, y: 22.27, round: 96, sonar: 'nonextended' },
        {x: 630.02, y: 22.27, round: 96, sonar: 'nonextended' },
        {x: 639.91, y: 20.77, round: 97, sonar: 'nonextended' },
        {x: 639.91, y: 20.77, round: 97, sonar: 'nonextended' },
        {x: 649.90, y: 21.09, round: 98, sonar: 'nonextended' },
        {x: 649.90, y: 21.09, round: 98, sonar: 'nonextended' },
        {x: 659.90, y: 21.38, round: 99, sonar: 'nonextended' },
        {x: 659.90, y: 21.38, round: 99, sonar: 'nonextended' },
        {x: 669.85, y: 22.36, round: 100, sonar: 'nonextended' },
        {x: 669.85, y: 22.36, round: 100, sonar: 'nonextended' },
        {x: 679.64, y: 24.38, round: 101, sonar: 'nonextended' },
        {x: 679.64, y: 24.38, round: 101, sonar: 'nonextended' },
        {x: 689.46, y: 26.29, round: 102, sonar: 'extended' },
        {x: 689.46, y: 26.29, round: 102, sonar: 'extended' },
        {x: 698.66, y: 30.22, round: 103, sonar: 'extended' },
        {x: 698.66, y: 30.22, round: 103, sonar: 'extended' },
        {x: 707.81, y: 34.25, round: 104, sonar: 'extended' },
        {x: 707.81, y: 34.25, round: 104, sonar: 'extended' },
        {x: 715.56, y: 40.57, round: 105, sonar: 'extended' },
        {x: 715.56, y: 40.57, round: 105, sonar: 'extended' },
        {x: 721.34, y: 48.72, round: 106, sonar: 'extended' },
        {x: 721.34, y: 48.72, round: 106, sonar: 'extended' },
        {x: 724.66, y: 58.16, round: 107, sonar: 'extended' },
        {x: 724.66, y: 58.16, round: 107, sonar: 'extended' },
        {x: 725.82, y: 68.09, round: 108, sonar: 'extended' },
        {x: 725.82, y: 68.09, round: 108, sonar: 'extended' },
        {x: 728.85, y: 77.62, round: 109, sonar: 'extended' },
        {x: 728.85, y: 77.62, round: 109, sonar: 'extended' },
        {x: 730.16, y: 87.53, round: 110, sonar: 'extended' },
        {x: 730.16, y: 87.53, round: 110, sonar: 'extended' },
        {x: 733.90, y: 96.81, round: 111, sonar: 'nonextended' },
        {x: 733.90, y: 96.81, round: 111, sonar: 'nonextended' },
        {x: 738.72, y: 105.57, round: 112, sonar: 'nonextended' },
        {x: 738.72, y: 105.57, round: 112, sonar: 'nonextended' },
        {x: 741.83, y: 115.07, round: 113, sonar: 'nonextended' },
        {x: 741.83, y: 115.07, round: 113, sonar: 'nonextended' },
        {x: 744.66, y: 124.66, round: 114, sonar: 'nonextended' },
        {x: 744.66, y: 124.66, round: 114, sonar: 'nonextended' },
        {x: 747.89, y: 134.13, round: 115, sonar: 'nonextended' },
        {x: 747.89, y: 134.13, round: 115, sonar: 'nonextended' },
        {x: 749.11, y: 144.05, round: 116, sonar: 'nonextended' },
        {x: 749.11, y: 144.05, round: 116, sonar: 'nonextended' },
        {x: 749.54, y: 154.04, round: 117, sonar: 'nonextended' },
        {x: 749.54, y: 154.04, round: 117, sonar: 'nonextended' },
        {x: 747.19, y: 163.76, round: 118, sonar: 'nonextended' },
        {x: 747.19, y: 163.76, round: 118, sonar: 'nonextended' },
        {x: 741.87, y: 172.23, round: 119, sonar: 'nonextended' },
        {x: 741.87, y: 172.23, round: 119, sonar: 'nonextended' },
        {x: 739.40, y: 181.92, round: 120, sonar: 'nonextended' },
        {x: 739.40, y: 181.92, round: 120, sonar: 'nonextended' },
        {x: 734.49, y: 190.63, round: 121, sonar: 'nonextended' },
        {x: 734.49, y: 190.63, round: 121, sonar: 'nonextended' },
        {x: 728.10, y: 198.32, round: 122, sonar: 'extended' },
        {x: 728.10, y: 198.32, round: 122, sonar: 'extended' },
        {x: 722.90, y: 206.87, round: 123, sonar: 'extended' },
        {x: 722.90, y: 206.87, round: 123, sonar: 'extended' },
        {x: 715.41, y: 213.49, round: 124, sonar: 'extended' },
        {x: 715.41, y: 213.49, round: 124, sonar: 'extended' },
        {x: 707.83, y: 220.01, round: 125, sonar: 'extended' },
        {x: 707.83, y: 220.01, round: 125, sonar: 'extended' },
        {x: 698.52, y: 223.65, round: 126, sonar: 'extended' },
        {x: 698.52, y: 223.65, round: 126, sonar: 'extended' },
        {x: 689.59, y: 228.15, round: 127, sonar: 'extended' },
        {x: 689.59, y: 228.15, round: 127, sonar: 'extended' },
        {x: 680.39, y: 232.06, round: 128, sonar: 'extended' },
        {x: 680.39, y: 232.06, round: 128, sonar: 'extended' },
        {x: 671.12, y: 235.84, round: 129, sonar: 'extended' },
        {x: 671.12, y: 235.84, round: 129, sonar: 'extended' },
        {x: 661.18, y: 236.85, round: 130, sonar: 'extended' },
        {x: 661.18, y: 236.85, round: 130, sonar: 'extended' },
        {x: 651.23, y: 237.90, round: 131, sonar: 'nonextended' },
        {x: 651.23, y: 237.90, round: 131, sonar: 'nonextended' },
        {x: 641.26, y: 237.17, round: 132, sonar: 'nonextended' },
        {x: 641.26, y: 237.17, round: 132, sonar: 'nonextended' },
        {x: 631.43, y: 239.01, round: 133, sonar: 'nonextended' },
        {x: 631.43, y: 239.01, round: 133, sonar: 'nonextended' },
        {x: 622.19, y: 242.83, round: 134, sonar: 'nonextended' },
        {x: 622.19, y: 242.83, round: 134, sonar: 'nonextended' },
        {x: 613.00, y: 246.79, round: 135, sonar: 'nonextended' },
        {x: 613.00, y: 246.79, round: 135, sonar: 'nonextended' },
        {x: 603.98, y: 251.10, round: 136, sonar: 'nonextended' },
        {x: 603.98, y: 251.10, round: 136, sonar: 'nonextended' },
        {x: 596.13, y: 257.30, round: 137, sonar: 'nonextended' },
        {x: 596.13, y: 257.30, round: 137, sonar: 'nonextended' },
        {x: 586.77, y: 260.81, round: 138, sonar: 'nonextended' },
        {x: 586.77, y: 260.81, round: 138, sonar: 'nonextended' },
        {x: 578.04, y: 265.69, round: 139, sonar: 'nonextended' },
        {x: 578.04, y: 265.69, round: 139, sonar: 'nonextended' },
        {x: 568.17, y: 267.30, round: 140, sonar: 'nonextended' },
        {x: 568.17, y: 267.30, round: 140, sonar: 'nonextended' },
        {x: 558.57, y: 270.10, round: 141, sonar: 'nonextended' },
        {x: 558.57, y: 270.10, round: 141, sonar: 'nonextended' },
        {x: 548.61, y: 270.97, round: 142, sonar: 'extended' },
        {x: 548.61, y: 270.97, round: 142, sonar: 'extended' },
        {x: 538.83, y: 268.90, round: 143, sonar: 'extended' },
        {x: 538.83, y: 268.90, round: 143, sonar: 'extended' },
        {x: 529.40, y: 265.56, round: 144, sonar: 'extended' },
        {x: 529.40, y: 265.56, round: 144, sonar: 'extended' },
        {x: 521.31, y: 259.69, round: 145, sonar: 'extended' },
        {x: 521.31, y: 259.69, round: 145, sonar: 'extended' },
        {x: 515.09, y: 251.86, round: 146, sonar: 'extended' },
        {x: 515.09, y: 251.86, round: 146, sonar: 'extended' },
        {x: 510.58, y: 242.93, round: 147, sonar: 'extended' },
        {x: 510.58, y: 242.93, round: 147, sonar: 'extended' },
        {x: 508.26, y: 235.80, round: 148, sonar: 'extended' },
        {x: 508.26, y: 235.80, round: 148, sonar: 'extended' },
        {x: 507.75, y: 225.81, round: 149, sonar: 'extended' },
        {x: 507.75, y: 225.81, round: 149, sonar: 'extended' },
    ]));
	mySubmarines.push(APP.submarine(40692, [
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 125.00, y: 275.00, round: 1, sonar: 'nonextended' },
        {x: 127.41, y: 274.33, round: 2, sonar: 'extended' },
        {x: 127.41, y: 274.33, round: 2, sonar: 'extended' },
        {x: 132.04, y: 272.44, round: 3, sonar: 'extended' },
        {x: 132.04, y: 272.44, round: 3, sonar: 'extended' },
        {x: 139.33, y: 270.67, round: 4, sonar: 'extended' },
        {x: 139.33, y: 270.67, round: 4, sonar: 'extended' },
        {x: 145.76, y: 266.82, round: 5, sonar: 'extended' },
        {x: 145.76, y: 266.82, round: 5, sonar: 'extended' },
        {x: 149.64, y: 263.67, round: 6, sonar: 'extended' },
        {x: 149.64, y: 263.67, round: 6, sonar: 'extended' },
        {x: 156.14, y: 259.91, round: 7, sonar: 'extended' },
        {x: 156.14, y: 259.91, round: 7, sonar: 'extended' },
        {x: 165.04, y: 255.36, round: 8, sonar: 'extended' },
        {x: 165.04, y: 255.36, round: 8, sonar: 'extended' },
        {x: 171.92, y: 248.10, round: 9, sonar: 'extended' },
        {x: 171.92, y: 248.10, round: 9, sonar: 'extended' },
        {x: 179.55, y: 241.64, round: 10, sonar: 'extended' },
        {x: 179.55, y: 241.64, round: 10, sonar: 'extended' },
        {x: 187.56, y: 235.65, round: 11, sonar: 'nonextended' },
        {x: 187.56, y: 235.65, round: 11, sonar: 'nonextended' },
        {x: 195.21, y: 229.21, round: 12, sonar: 'nonextended' },
        {x: 195.21, y: 229.21, round: 12, sonar: 'nonextended' },
        {x: 200.59, y: 223.99, round: 13, sonar: 'nonextended' },
        {x: 200.59, y: 223.99, round: 13, sonar: 'nonextended' },
        {x: 206.65, y: 216.03, round: 14, sonar: 'nonextended' },
        {x: 206.65, y: 216.03, round: 14, sonar: 'nonextended' },
        {x: 209.33, y: 209.03, round: 15, sonar: 'nonextended' },
        {x: 209.33, y: 209.03, round: 15, sonar: 'nonextended' },
        {x: 209.56, y: 199.03, round: 16, sonar: 'nonextended' },
        {x: 209.56, y: 199.03, round: 16, sonar: 'nonextended' },
        {x: 212.21, y: 192.01, round: 17, sonar: 'nonextended' },
        {x: 212.21, y: 192.01, round: 17, sonar: 'nonextended' },
        {x: 216.99, y: 183.23, round: 18, sonar: 'nonextended' },
        {x: 216.99, y: 183.23, round: 18, sonar: 'nonextended' },
        {x: 221.48, y: 177.22, round: 19, sonar: 'nonextended' },
        {x: 221.48, y: 177.22, round: 19, sonar: 'nonextended' },
        {x: 226.04, y: 168.32, round: 20, sonar: 'nonextended' },
        {x: 226.04, y: 168.32, round: 20, sonar: 'nonextended' },
        {x: 228.39, y: 161.20, round: 21, sonar: 'nonextended' },
        {x: 228.39, y: 161.20, round: 21, sonar: 'nonextended' },
        {x: 228.62, y: 151.20, round: 22, sonar: 'extended' },
        {x: 228.62, y: 151.20, round: 22, sonar: 'extended' },
        {x: 229.06, y: 143.72, round: 23, sonar: 'extended' },
        {x: 229.06, y: 143.72, round: 23, sonar: 'extended' },
        {x: 229.20, y: 138.72, round: 24, sonar: 'extended' },
        {x: 229.20, y: 138.72, round: 24, sonar: 'extended' },
        {x: 229.19, y: 133.72, round: 25, sonar: 'extended' },
        {x: 229.19, y: 133.72, round: 25, sonar: 'extended' },
        {x: 227.80, y: 126.35, round: 26, sonar: 'extended' },
        {x: 227.80, y: 126.35, round: 26, sonar: 'extended' },
        {x: 223.62, y: 117.26, round: 27, sonar: 'extended' },
        {x: 223.62, y: 117.26, round: 27, sonar: 'extended' },
        {x: 220.55, y: 110.42, round: 28, sonar: 'extended' },
        {x: 220.55, y: 110.42, round: 28, sonar: 'extended' },
        {x: 214.88, y: 102.18, round: 29, sonar: 'extended' },
        {x: 214.88, y: 102.18, round: 29, sonar: 'extended' },
        {x: 209.07, y: 97.44, round: 30, sonar: 'extended' },
        {x: 209.07, y: 97.44, round: 30, sonar: 'extended' },
        {x: 203.85, y: 88.91, round: 31, sonar: 'nonextended' },
        {x: 203.85, y: 88.91, round: 31, sonar: 'nonextended' },
        {x: 201.61, y: 79.17, round: 32, sonar: 'nonextended' },
        {x: 201.61, y: 79.17, round: 32, sonar: 'nonextended' },
        {x: 196.50, y: 70.57, round: 33, sonar: 'nonextended' },
        {x: 196.50, y: 70.57, round: 33, sonar: 'nonextended' },
        {x: 189.14, y: 63.80, round: 34, sonar: 'nonextended' },
        {x: 189.14, y: 63.80, round: 34, sonar: 'nonextended' },
        {x: 180.60, y: 58.60, round: 35, sonar: 'nonextended' },
        {x: 180.60, y: 58.60, round: 35, sonar: 'nonextended' },
        {x: 171.45, y: 54.56, round: 36, sonar: 'nonextended' },
        {x: 171.45, y: 54.56, round: 36, sonar: 'nonextended' },
        {x: 162.94, y: 49.30, round: 37, sonar: 'nonextended' },
        {x: 162.94, y: 49.30, round: 37, sonar: 'nonextended' },
        {x: 153.36, y: 46.46, round: 38, sonar: 'nonextended' },
        {x: 153.36, y: 46.46, round: 38, sonar: 'nonextended' },
        {x: 145.86, y: 46.12, round: 39, sonar: 'nonextended' },
        {x: 145.86, y: 46.12, round: 39, sonar: 'nonextended' },
        {x: 135.93, y: 47.28, round: 40, sonar: 'nonextended' },
        {x: 135.93, y: 47.28, round: 40, sonar: 'nonextended' },
        {x: 129.23, y: 50.64, round: 41, sonar: 'nonextended' },
        {x: 129.23, y: 50.64, round: 41, sonar: 'nonextended' },
        {x: 123.22, y: 55.13, round: 42, sonar: 'extended' },
        {x: 123.22, y: 55.13, round: 42, sonar: 'extended' },
        {x: 117.03, y: 62.98, round: 43, sonar: 'extended' },
        {x: 117.03, y: 62.98, round: 43, sonar: 'extended' },
        {x: 112.63, y: 71.96, round: 44, sonar: 'extended' },
        {x: 112.63, y: 71.96, round: 44, sonar: 'extended' },
        {x: 107.87, y: 80.76, round: 45, sonar: 'extended' },
        {x: 107.87, y: 80.76, round: 45, sonar: 'extended' },
        {x: 102.55, y: 89.22, round: 46, sonar: 'extended' },
        {x: 102.55, y: 89.22, round: 46, sonar: 'extended' },
        {x: 96.33, y: 97.05, round: 47, sonar: 'extended' },
        {x: 96.33, y: 97.05, round: 47, sonar: 'extended' },
        {x: 88.52, y: 103.31, round: 48, sonar: 'extended' },
        {x: 88.52, y: 103.31, round: 48, sonar: 'extended' },
        {x: 79.66, y: 107.94, round: 49, sonar: 'extended' },
        {x: 79.66, y: 107.94, round: 49, sonar: 'extended' },
        {x: 71.30, y: 113.43, round: 50, sonar: 'extended' },
        {x: 71.30, y: 113.43, round: 50, sonar: 'extended' },
        {x: 64.23, y: 120.51, round: 51, sonar: 'nonextended' },
        {x: 64.23, y: 120.51, round: 51, sonar: 'nonextended' },
        {x: 58.02, y: 128.34, round: 52, sonar: 'nonextended' },
        {x: 58.02, y: 128.34, round: 52, sonar: 'nonextended' },
        {x: 54.06, y: 137.52, round: 53, sonar: 'nonextended' },
        {x: 54.06, y: 137.52, round: 53, sonar: 'nonextended' },
        {x: 51.70, y: 147.24, round: 54, sonar: 'nonextended' },
        {x: 51.70, y: 147.24, round: 54, sonar: 'nonextended' },
        {x: 50.01, y: 157.10, round: 55, sonar: 'nonextended' },
        {x: 50.01, y: 157.10, round: 55, sonar: 'nonextended' },
        {x: 47.04, y: 166.64, round: 56, sonar: 'nonextended' },
        {x: 47.04, y: 166.64, round: 56, sonar: 'nonextended' },
        {x: 45.25, y: 173.93, round: 57, sonar: 'nonextended' },
        {x: 45.25, y: 173.93, round: 57, sonar: 'nonextended' },
        {x: 44.60, y: 183.91, round: 58, sonar: 'nonextended' },
        {x: 44.60, y: 183.91, round: 58, sonar: 'nonextended' },
        {x: 45.52, y: 191.35, round: 59, sonar: 'nonextended' },
        {x: 45.52, y: 191.35, round: 59, sonar: 'nonextended' },
        {x: 43.29, y: 201.10, round: 60, sonar: 'nonextended' },
        {x: 43.29, y: 201.10, round: 60, sonar: 'nonextended' },
        {x: 43.84, y: 211.08, round: 61, sonar: 'nonextended' },
        {x: 43.84, y: 211.08, round: 61, sonar: 'nonextended' },
        {x: 45.92, y: 220.86, round: 62, sonar: 'extended' },
        {x: 45.92, y: 220.86, round: 62, sonar: 'extended' },
        {x: 48.93, y: 230.40, round: 63, sonar: 'extended' },
        {x: 48.93, y: 230.40, round: 63, sonar: 'extended' },
        {x: 54.39, y: 238.78, round: 64, sonar: 'extended' },
        {x: 54.39, y: 238.78, round: 64, sonar: 'extended' },
        {x: 57.90, y: 248.14, round: 65, sonar: 'extended' },
        {x: 57.90, y: 248.14, round: 65, sonar: 'extended' },
        {x: 61.42, y: 257.50, round: 66, sonar: 'extended' },
        {x: 61.42, y: 257.50, round: 66, sonar: 'extended' },
        {x: 66.21, y: 266.28, round: 67, sonar: 'extended' },
        {x: 66.21, y: 266.28, round: 67, sonar: 'extended' },
        {x: 71.37, y: 274.85, round: 68, sonar: 'extended' },
        {x: 71.37, y: 274.85, round: 68, sonar: 'extended' },
        {x: 78.20, y: 282.15, round: 69, sonar: 'extended' },
        {x: 78.20, y: 282.15, round: 69, sonar: 'extended' },
        {x: 85.53, y: 288.96, round: 70, sonar: 'extended' },
        {x: 85.53, y: 288.96, round: 70, sonar: 'extended' },
        {x: 92.79, y: 295.83, round: 71, sonar: 'nonextended' },
        {x: 92.79, y: 295.83, round: 71, sonar: 'nonextended' },
        {x: 98.61, y: 303.96, round: 72, sonar: 'nonextended' },
        {x: 98.61, y: 303.96, round: 72, sonar: 'nonextended' },
        {x: 106.77, y: 309.74, round: 73, sonar: 'nonextended' },
        {x: 106.77, y: 309.74, round: 73, sonar: 'nonextended' },
        {x: 113.47, y: 317.17, round: 74, sonar: 'nonextended' },
        {x: 113.47, y: 317.17, round: 74, sonar: 'nonextended' },
        {x: 119.43, y: 321.73, round: 75, sonar: 'nonextended' },
        {x: 119.43, y: 321.73, round: 75, sonar: 'nonextended' },
        {x: 127.31, y: 327.88, round: 76, sonar: 'nonextended' },
        {x: 127.31, y: 327.88, round: 76, sonar: 'nonextended' },
        {x: 136.76, y: 331.16, round: 77, sonar: 'nonextended' },
        {x: 136.76, y: 331.16, round: 77, sonar: 'nonextended' },
        {x: 144.60, y: 337.35, round: 78, sonar: 'nonextended' },
        {x: 144.60, y: 337.35, round: 78, sonar: 'nonextended' },
        {x: 153.68, y: 341.54, round: 79, sonar: 'nonextended' },
        {x: 153.68, y: 341.54, round: 79, sonar: 'nonextended' },
        {x: 163.19, y: 344.64, round: 80, sonar: 'nonextended' },
        {x: 163.19, y: 344.64, round: 80, sonar: 'nonextended' },
        {x: 172.09, y: 349.20, round: 81, sonar: 'nonextended' },
        {x: 172.09, y: 349.20, round: 81, sonar: 'nonextended' },
        {x: 180.49, y: 354.62, round: 82, sonar: 'extended' },
        {x: 180.49, y: 354.62, round: 82, sonar: 'extended' },
        {x: 190.09, y: 357.44, round: 83, sonar: 'extended' },
        {x: 190.09, y: 357.44, round: 83, sonar: 'extended' },
        {x: 200.05, y: 358.29, round: 84, sonar: 'extended' },
        {x: 200.05, y: 358.29, round: 84, sonar: 'extended' },
        {x: 210.03, y: 357.65, round: 85, sonar: 'extended' },
        {x: 210.03, y: 357.65, round: 85, sonar: 'extended' },
        {x: 219.45, y: 354.27, round: 86, sonar: 'extended' },
        {x: 219.45, y: 354.27, round: 86, sonar: 'extended' },
        {x: 228.35, y: 349.73, round: 87, sonar: 'extended' },
        {x: 228.35, y: 349.73, round: 87, sonar: 'extended' },
        {x: 238.12, y: 347.60, round: 88, sonar: 'extended' },
        {x: 238.12, y: 347.60, round: 88, sonar: 'extended' },
        {x: 248.12, y: 347.32, round: 89, sonar: 'extended' },
        {x: 248.12, y: 347.32, round: 89, sonar: 'extended' },
        {x: 257.64, y: 344.27, round: 90, sonar: 'extended' },
        {x: 257.64, y: 344.27, round: 90, sonar: 'extended' },
        {x: 267.19, y: 341.31, round: 91, sonar: 'nonextended' },
        {x: 267.19, y: 341.31, round: 91, sonar: 'nonextended' },
        {x: 276.90, y: 338.90, round: 92, sonar: 'nonextended' },
        {x: 276.90, y: 338.90, round: 92, sonar: 'nonextended' },
        {x: 286.88, y: 339.54, round: 93, sonar: 'nonextended' },
        {x: 286.88, y: 339.54, round: 93, sonar: 'nonextended' },
        {x: 296.44, y: 342.49, round: 94, sonar: 'nonextended' },
        {x: 296.44, y: 342.49, round: 94, sonar: 'nonextended' },
        {x: 304.72, y: 348.09, round: 95, sonar: 'nonextended' },
        {x: 304.72, y: 348.09, round: 95, sonar: 'nonextended' },
        {x: 312.98, y: 353.73, round: 96, sonar: 'nonextended' },
        {x: 312.98, y: 353.73, round: 96, sonar: 'nonextended' },
        {x: 322.52, y: 356.72, round: 97, sonar: 'nonextended' },
        {x: 322.52, y: 356.72, round: 97, sonar: 'nonextended' },
        {x: 331.63, y: 360.85, round: 98, sonar: 'nonextended' },
        {x: 331.63, y: 360.85, round: 98, sonar: 'nonextended' },
        {x: 339.05, y: 361.94, round: 99, sonar: 'nonextended' },
        {x: 339.05, y: 361.94, round: 99, sonar: 'nonextended' },
        {x: 348.27, y: 365.81, round: 100, sonar: 'nonextended' },
        {x: 348.27, y: 365.81, round: 100, sonar: 'nonextended' },
        {x: 355.44, y: 367.99, round: 101, sonar: 'nonextended' },
        {x: 355.44, y: 367.99, round: 101, sonar: 'nonextended' },
        {x: 365.25, y: 369.94, round: 102, sonar: 'extended' },
        {x: 365.25, y: 369.94, round: 102, sonar: 'extended' },
        {x: 375.19, y: 368.80, round: 103, sonar: 'extended' },
        {x: 375.19, y: 368.80, round: 103, sonar: 'extended' },
        {x: 385.10, y: 367.45, round: 104, sonar: 'extended' },
        {x: 385.10, y: 367.45, round: 104, sonar: 'extended' },
        {x: 394.53, y: 364.15, round: 105, sonar: 'extended' },
        {x: 394.53, y: 364.15, round: 105, sonar: 'extended' },
        {x: 402.65, y: 358.30, round: 106, sonar: 'extended' },
        {x: 402.65, y: 358.30, round: 106, sonar: 'extended' },
        {x: 409.82, y: 351.33, round: 107, sonar: 'extended' },
        {x: 409.82, y: 351.33, round: 107, sonar: 'extended' },
        {x: 414.05, y: 345.14, round: 108, sonar: 'extended' },
        {x: 414.05, y: 345.14, round: 108, sonar: 'extended' },
        {x: 417.49, y: 335.75, round: 109, sonar: 'extended' },
        {x: 417.49, y: 335.75, round: 109, sonar: 'extended' },
        {x: 418.36, y: 325.79, round: 110, sonar: 'extended' },
        {x: 418.36, y: 325.79, round: 110, sonar: 'extended' },
        {x: 418.19, y: 318.29, round: 111, sonar: 'nonextended' },
        {x: 418.19, y: 318.29, round: 111, sonar: 'nonextended' },
        {x: 416.45, y: 313.61, round: 112, sonar: 'nonextended' },
        {x: 416.45, y: 313.61, round: 112, sonar: 'nonextended' },
        {x: 412.25, y: 307.39, round: 113, sonar: 'nonextended' },
        {x: 412.25, y: 307.39, round: 113, sonar: 'nonextended' },
        {x: 408.23, y: 304.42, round: 114, sonar: 'nonextended' },
        {x: 408.23, y: 304.42, round: 114, sonar: 'nonextended' },
        {x: 403.66, y: 298.47, round: 115, sonar: 'nonextended' },
        {x: 403.66, y: 298.47, round: 115, sonar: 'nonextended' },
        {x: 399.65, y: 295.49, round: 116, sonar: 'nonextended' },
        {x: 399.65, y: 295.49, round: 116, sonar: 'nonextended' },
        {x: 397.83, y: 293.78, round: 117, sonar: 'nonextended' },
        {x: 397.83, y: 293.78, round: 117, sonar: 'nonextended' },
        {x: 397.83, y: 293.78, round: 118, sonar: 'nonextended' },
        {x: 397.83, y: 293.78, round: 118, sonar: 'nonextended' },
        {x: 395.70, y: 292.46, round: 119, sonar: 'nonextended' },
        {x: 395.70, y: 292.46, round: 119, sonar: 'nonextended' },
        {x: 393.38, y: 291.54, round: 120, sonar: 'nonextended' },
        {x: 393.38, y: 291.54, round: 120, sonar: 'nonextended' },
        {x: 393.38, y: 291.54, round: 121, sonar: 'nonextended' },
        {x: 393.38, y: 291.54, round: 121, sonar: 'nonextended' },
        {x: 393.38, y: 291.54, round: 122, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 122, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 123, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 123, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 124, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 124, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 125, sonar: 'extended' },
        {x: 393.38, y: 291.54, round: 125, sonar: 'extended' },
        {x: 391.12, y: 292.62, round: 126, sonar: 'extended' },
        {x: 391.12, y: 292.62, round: 126, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 127, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 127, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 128, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 128, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 129, sonar: 'extended' },
        {x: 388.67, y: 293.09, round: 129, sonar: 'extended' },
        {x: 386.63, y: 294.54, round: 130, sonar: 'extended' },
        {x: 386.63, y: 294.54, round: 130, sonar: 'extended' },
        {x: 386.63, y: 294.54, round: 131, sonar: 'nonextended' },
        {x: 386.63, y: 294.54, round: 131, sonar: 'nonextended' },
        {x: 384.57, y: 295.95, round: 132, sonar: 'nonextended' },
        {x: 384.57, y: 295.95, round: 132, sonar: 'nonextended' },
        {x: 384.57, y: 295.95, round: 133, sonar: 'nonextended' },
        {x: 384.57, y: 295.95, round: 133, sonar: 'nonextended' },
        {x: 382.31, y: 297.02, round: 134, sonar: 'nonextended' },
        {x: 382.31, y: 297.02, round: 134, sonar: 'nonextended' },
        {x: 382.31, y: 297.02, round: 135, sonar: 'nonextended' },
        {x: 382.31, y: 297.02, round: 135, sonar: 'nonextended' },
        {x: 379.82, y: 296.75, round: 136, sonar: 'nonextended' },
        {x: 379.82, y: 296.75, round: 136, sonar: 'nonextended' },
        {x: 375.26, y: 294.71, round: 137, sonar: 'nonextended' },
        {x: 375.26, y: 294.71, round: 137, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 138, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 138, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 139, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 139, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 140, sonar: 'nonextended' },
        {x: 372.95, y: 293.76, round: 140, sonar: 'nonextended' },
        {x: 370.59, y: 292.94, round: 141, sonar: 'nonextended' },
        {x: 370.59, y: 292.94, round: 141, sonar: 'nonextended' },
        {x: 370.59, y: 292.94, round: 142, sonar: 'extended' },
        {x: 370.59, y: 292.94, round: 142, sonar: 'extended' },
        {x: 368.14, y: 293.46, round: 143, sonar: 'extended' },
        {x: 368.14, y: 293.46, round: 143, sonar: 'extended' },
        {x: 363.18, y: 294.06, round: 144, sonar: 'extended' },
        {x: 363.18, y: 294.06, round: 144, sonar: 'extended' },
        {x: 355.72, y: 293.28, round: 145, sonar: 'extended' },
        {x: 355.72, y: 293.28, round: 145, sonar: 'extended' },
        {x: 345.75, y: 294.05, round: 146, sonar: 'extended' },
        {x: 345.75, y: 294.05, round: 146, sonar: 'extended' },
        {x: 335.85, y: 295.50, round: 147, sonar: 'extended' },
        {x: 335.85, y: 295.50, round: 147, sonar: 'extended' },
        {x: 325.89, y: 296.29, round: 148, sonar: 'extended' },
        {x: 325.89, y: 296.29, round: 148, sonar: 'extended' },
        {x: 315.89, y: 296.67, round: 149, sonar: 'extended' },
        {x: 315.89, y: 296.67, round: 149, sonar: 'extended' },
    ]));

    torpedos.push(APP.waterObject(40704, [
        {x: 180.44, y: 220.99, round: 22 },
        {x: 166.75, y: 235.57, round: 23 },
        {x: 207.80, y: 191.81, round: 20 },
        {x: 194.12, y: 206.40, round: 21 },
    ]));
    torpedos.push(APP.waterObject(40705, [
        {x: 185.17, y: 237.75, round: 23 },
        {x: 167.72, y: 247.52, round: 24 },
        {x: 150.28, y: 257.30, round: 25 },
        {x: 132.83, y: 267.08, round: 26 },
    ]));
    torpedos.push(APP.waterObject(40706, [
        {x: 232.57, y: 153.43, round: 26 },
        {x: 235.94, y: 173.14, round: 27 },
        {x: 239.32, y: 192.86, round: 28 },
        {x: 242.70, y: 212.57, round: 29 },
        {x: 246.08, y: 232.28, round: 30 },
    ]));
    torpedos.push(APP.waterObject(40707, [
        {x: 195.80, y: 128.09, round: 33 },
        {x: 199.83, y: 108.50, round: 32 },
    ]));
    torpedos.push(APP.waterObject(40708, [
        {x: 246.20, y: 225.63, round: 34 },
        {x: 226.21, y: 226.37, round: 35 },
    ]));
    torpedos.push(APP.waterObject(40709, [
        {x: 383.17, y: 272.26, round: 44 },
        {x: 402.64, y: 276.83, round: 45 },
        {x: 422.11, y: 281.41, round: 46 },
        {x: 441.58, y: 285.98, round: 47 },
        {x: 461.06, y: 290.55, round: 48 },
        {x: 480.53, y: 295.12, round: 49 },
        {x: 500.00, y: 299.69, round: 50 },
        {x: 363.70, y: 267.69, round: 43 },
    ]));
    torpedos.push(APP.waterObject(40710, [
        {x: 418.90, y: 304.90, round: 50 },
        {x: 438.52, y: 308.76, round: 51 },
        {x: 458.15, y: 312.63, round: 52 },
        {x: 477.77, y: 316.49, round: 53 },
    ]));
    torpedos.push(APP.waterObject(40711, [
        {x: 457.79, y: 316.98, round: 59 },
        {x: 443.74, y: 302.75, round: 60 },
        {x: 429.69, y: 288.52, round: 61 },
        {x: 415.64, y: 274.29, round: 62 },
    ]));
    torpedos.push(APP.waterObject(40712, [
        {x: 171.39, y: 329.21, round: 82 },
        {x: 170.69, y: 309.23, round: 83 },
        {x: 169.99, y: 289.24, round: 84 },
        {x: 169.28, y: 269.25, round: 85 },
    ]));
    torpedos.push(APP.waterObject(40713, [
        {x: 396.29, y: 350.88, round: 105 },
        {x: 407.48, y: 334.30, round: 106 },
        {x: 418.67, y: 317.73, round: 107 },
        {x: 429.86, y: 301.15, round: 108 },
    ]));
    torpedos.push(APP.waterObject(40714, [
        {x: 317.87, y: 296.46, round: 121 },
        {x: 377.84, y: 294.45, round: 118 },
        {x: 357.85, y: 295.12, round: 119 },
        {x: 337.86, y: 295.79, round: 120 },
    ]));
    torpedos.push(APP.waterObject(40715, [
        {x: 373.39, y: 292.08, round: 124 },
        {x: 353.39, y: 292.63, round: 125 },
        {x: 333.40, y: 293.17, round: 126 },
        {x: 313.41, y: 293.71, round: 127 },
        {x: 293.41, y: 294.26, round: 128 },
    ]));
    torpedos.push(APP.waterObject(40716, [
        {x: 589.16, y: 244.33, round: 143 },
        {x: 604.46, y: 231.44, round: 144 },
        {x: 619.75, y: 218.55, round: 145 },
        {x: 573.87, y: 257.22, round: 142 },
    ]));
    torpedos.push(APP.waterObject(40717, [
        {x: 517.58, y: 224.19, round: 148 },
        {x: 524.58, y: 205.46, round: 149 },
    ]));
    torpedos.push(APP.waterObject(40699, [
        {x: 117.89, y: 291.07, round: 2 },
        {x: 135.79, y: 282.14, round: 3 },
        {x: 153.68, y: 273.21, round: 4 },
        {x: 171.58, y: 264.27, round: 5 },
        {x: 189.47, y: 255.34, round: 6 },
        {x: 207.37, y: 246.41, round: 7 },
        {x: 225.26, y: 237.48, round: 8 },
        {x: 243.16, y: 228.55, round: 9 },
        {x: 261.05, y: 219.62, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40700, [
        {x: 143.96, y: 268.64, round: 2 },
        {x: 162.93, y: 262.29, round: 3 },
        {x: 181.89, y: 255.93, round: 4 },
        {x: 200.85, y: 249.58, round: 5 },
        {x: 219.82, y: 243.22, round: 6 },
        {x: 238.78, y: 236.86, round: 7 },
        {x: 257.74, y: 230.51, round: 8 },
        {x: 276.71, y: 224.15, round: 9 },
    ]));
    torpedos.push(APP.waterObject(40701, [
        {x: 236.09, y: 257.23, round: 11 },
        {x: 256.08, y: 256.56, round: 12 },
        {x: 176.12, y: 259.24, round: 8 },
        {x: 196.11, y: 258.57, round: 9 },
        {x: 216.10, y: 257.90, round: 10 },
    ]));
    torpedos.push(APP.waterObject(40702, [
        {x: 162.13, y: 264.28, round: 13 },
        {x: 171.22, y: 246.46, round: 14 },
        {x: 180.31, y: 228.65, round: 15 },
        {x: 189.40, y: 210.83, round: 16 },
    ]));
    torpedos.push(APP.waterObject(40703, [
        {x: 204.13, y: 204.30, round: 14 },
    ]));

    otherSubmarines.push(APP.waterObject(40693, [
        {x: 204.54, y: 195.46, round: 16 },
        {x: 190.40, y: 209.60, round: 18 },
        {x: 176.26, y: 223.74, round: 20 },
        {x: 211.61, y: 188.39, round: 15 },
        {x: 169.19, y: 230.81, round: 21 },
        {x: 155.04, y: 244.96, round: 23 },
        {x: 218.68, y: 181.32, round: 14 },
        {x: 183.33, y: 216.67, round: 19 },
        {x: 232.82, y: 167.18, round: 12 },
        {x: 225.75, y: 174.25, round: 13 },
        {x: 246.97, y: 153.03, round: 10 },
        {x: 197.47, y: 202.53, round: 17 },
        {x: 162.11, y: 237.89, round: 22 },
    ]));
    otherSubmarines.push(APP.waterObject(40694, [
        {x: 508.19, y: 285.90, round: 50 },
        {x: 457.90, y: 312.36, round: 57 },
        {x: 226.16, y: 261.50, round: 81 },
        {x: 186.77, y: 254.55, round: 85 },
        {x: 206.46, y: 258.02, round: 83 },
        {x: 476.41, y: 319.10, round: 55 },
        {x: 466.56, y: 317.36, round: 56 },
        {x: 494.92, y: 312.36, round: 53 },
        {x: 176.92, y: 252.81, round: 86 },
        {x: 451.48, y: 304.70, round: 58 },
        {x: 216.31, y: 259.76, round: 82 },
        {x: 196.61, y: 256.29, round: 84 },
        {x: 511.61, y: 276.51, round: 49 },
        {x: 442.82, y: 299.70, round: 59 },
        {x: 486.26, y: 317.36, round: 54 },
        {x: 432.97, y: 297.96, round: 60 },
        {x: 423.12, y: 296.23, round: 61 },
        {x: 413.27, y: 294.49, round: 62 },
        {x: 403.42, y: 292.75, round: 63 },
    ]));
    otherSubmarines.push(APP.waterObject(40695, [
        {x: 494.27, y: 139.39, round: 147 },
        {x: 504.27, y: 139.39, round: 148 },
        {x: 514.27, y: 139.39, round: 149 },
    ]));
    otherSubmarines.push(APP.waterObject(40696, [
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
    otherSubmarines.push(APP.waterObject(40697, [
        {x: 608.22, y: 185.15, round: 144 },
        {x: 401.39, y: 287.68, round: 47 },
        {x: 599.15, y: 180.92, round: 143 },
        {x: 365.14, y: 270.77, round: 51 },
        {x: 419.52, y: 296.13, round: 45 },
        {x: 435.65, y: 307.43, round: 43 },
        {x: 581.03, y: 172.47, round: 141 },
        {x: 392.33, y: 283.45, round: 48 },
        {x: 374.20, y: 275.00, round: 50 },
        {x: 383.27, y: 279.22, round: 49 },
        {x: 444.72, y: 311.65, round: 42 },
        {x: 428.58, y: 300.36, round: 44 },
        {x: 590.09, y: 176.69, round: 142 },
        {x: 410.46, y: 291.90, round: 46 },
    ]));
    otherSubmarines.push(APP.waterObject(40698, [
        {x: 207.50, y: 250.00, round: 3 },
        {x: 245.00, y: 250.00, round: 7 },
        {x: 468.08, y: 297.12, round: 105 },
        {x: 200.00, y: 250.00, round: 1 },
        {x: 408.08, y: 297.12, round: 111 },
        {x: 265.00, y: 250.00, round: 9 },
        {x: 288.08, y: 297.12, round: 123 },
        {x: 225.00, y: 250.00, round: 5 },
        {x: 328.08, y: 297.12, round: 119 },
        {x: 378.08, y: 297.12, round: 114 },
        {x: 298.08, y: 297.12, round: 122 },
        {x: 342.06, y: 153.55, round: 22 },
        {x: 215.00, y: 250.00, round: 4 },
        {x: 338.08, y: 297.12, round: 118 },
        {x: 388.08, y: 297.12, round: 113 },
        {x: 358.08, y: 297.12, round: 116 },
        {x: 337.06, y: 162.21, round: 21 },
        {x: 202.50, y: 250.00, round: 2 },
        {x: 448.08, y: 297.12, round: 107 },
        {x: 308.08, y: 297.12, round: 121 },
        {x: 255.00, y: 250.00, round: 8 },
        {x: 368.08, y: 297.12, round: 115 },
        {x: 235.00, y: 250.00, round: 6 },
        {x: 477.48, y: 300.54, round: 104 },
        {x: 428.08, y: 297.12, round: 109 },
        {x: 348.08, y: 297.12, round: 117 },
        {x: 398.08, y: 297.12, round: 112 },
        {x: 438.08, y: 297.12, round: 108 },
        {x: 458.08, y: 297.12, round: 106 },
        {x: 418.08, y: 297.12, round: 110 },
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
        APP.put(myScores, {score: 100, round: 15})
        APP.put(myScores, {score: 100, round: 16})
        APP.put(myScores, {score: 200, round: 17})
        APP.put(myScores, {score: 200, round: 18})
        APP.put(myScores, {score: 200, round: 19})
        APP.put(myScores, {score: 200, round: 20})
        APP.put(myScores, {score: 200, round: 21})
        APP.put(myScores, {score: 200, round: 22})
        APP.put(myScores, {score: 200, round: 23})
        APP.put(myScores, {score: 350, round: 24})
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
        APP.put(myScores, {score: 550, round: 37})
        APP.put(myScores, {score: 700, round: 38})
        APP.put(myScores, {score: 700, round: 39})
        APP.put(myScores, {score: 700, round: 40})
        APP.put(myScores, {score: 700, round: 41})
        APP.put(myScores, {score: 700, round: 42})
        APP.put(myScores, {score: 700, round: 43})
        APP.put(myScores, {score: 700, round: 44})
        APP.put(myScores, {score: 700, round: 45})
        APP.put(myScores, {score: 700, round: 46})
        APP.put(myScores, {score: 700, round: 47})
        APP.put(myScores, {score: 700, round: 48})
        APP.put(myScores, {score: 700, round: 49})
        APP.put(myScores, {score: 700, round: 50})
        APP.put(myScores, {score: 800, round: 51})
        APP.put(myScores, {score: 800, round: 52})
        APP.put(myScores, {score: 800, round: 53})
        APP.put(myScores, {score: 900, round: 54})
        APP.put(myScores, {score: 900, round: 55})
        APP.put(myScores, {score: 900, round: 56})
        APP.put(myScores, {score: 900, round: 57})
        APP.put(myScores, {score: 900, round: 58})
        APP.put(myScores, {score: 900, round: 59})
        APP.put(myScores, {score: 900, round: 60})
        APP.put(myScores, {score: 900, round: 61})
        APP.put(myScores, {score: 900, round: 62})
        APP.put(myScores, {score: 900, round: 63})
        APP.put(myScores, {score: 900, round: 64})
        APP.put(myScores, {score: 900, round: 65})
        APP.put(myScores, {score: 900, round: 66})
        APP.put(myScores, {score: 900, round: 67})
        APP.put(myScores, {score: 900, round: 68})
        APP.put(myScores, {score: 900, round: 69})
        APP.put(myScores, {score: 900, round: 70})
        APP.put(myScores, {score: 900, round: 71})
        APP.put(myScores, {score: 900, round: 72})
        APP.put(myScores, {score: 900, round: 73})
        APP.put(myScores, {score: 900, round: 74})
        APP.put(myScores, {score: 900, round: 75})
        APP.put(myScores, {score: 900, round: 76})
        APP.put(myScores, {score: 900, round: 77})
        APP.put(myScores, {score: 900, round: 78})
        APP.put(myScores, {score: 900, round: 79})
        APP.put(myScores, {score: 900, round: 80})
        APP.put(myScores, {score: 900, round: 81})
        APP.put(myScores, {score: 900, round: 82})
        APP.put(myScores, {score: 900, round: 83})
        APP.put(myScores, {score: 900, round: 84})
        APP.put(myScores, {score: 900, round: 85})
        APP.put(myScores, {score: 900, round: 86})
        APP.put(myScores, {score: 1050, round: 87})
        APP.put(myScores, {score: 1050, round: 88})
        APP.put(myScores, {score: 1050, round: 89})
        APP.put(myScores, {score: 1050, round: 90})
        APP.put(myScores, {score: 1050, round: 91})
        APP.put(myScores, {score: 1050, round: 92})
        APP.put(myScores, {score: 1050, round: 93})
        APP.put(myScores, {score: 1050, round: 94})
        APP.put(myScores, {score: 1050, round: 95})
        APP.put(myScores, {score: 1050, round: 96})
        APP.put(myScores, {score: 1050, round: 97})
        APP.put(myScores, {score: 1050, round: 98})
        APP.put(myScores, {score: 1050, round: 99})
        APP.put(myScores, {score: 1050, round: 100})
        APP.put(myScores, {score: 1050, round: 101})
        APP.put(myScores, {score: 1050, round: 102})
        APP.put(myScores, {score: 1050, round: 103})
        APP.put(myScores, {score: 1050, round: 104})
        APP.put(myScores, {score: 1050, round: 105})
        APP.put(myScores, {score: 1050, round: 106})
        APP.put(myScores, {score: 1050, round: 107})
        APP.put(myScores, {score: 1050, round: 108})
        APP.put(myScores, {score: 1150, round: 109})
        APP.put(myScores, {score: 1150, round: 110})
        APP.put(myScores, {score: 1150, round: 111})
        APP.put(myScores, {score: 1150, round: 112})
        APP.put(myScores, {score: 1150, round: 113})
        APP.put(myScores, {score: 1150, round: 114})
        APP.put(myScores, {score: 1150, round: 115})
        APP.put(myScores, {score: 1150, round: 116})
        APP.put(myScores, {score: 1150, round: 117})
        APP.put(myScores, {score: 1150, round: 118})
        APP.put(myScores, {score: 1150, round: 119})
        APP.put(myScores, {score: 1150, round: 120})
        APP.put(myScores, {score: 1150, round: 121})
        APP.put(myScores, {score: 1250, round: 122})
        APP.put(myScores, {score: 1250, round: 123})
        APP.put(myScores, {score: 1250, round: 124})
        APP.put(myScores, {score: 1250, round: 125})
        APP.put(myScores, {score: 1250, round: 126})
        APP.put(myScores, {score: 1250, round: 127})
        APP.put(myScores, {score: 1250, round: 128})
        APP.put(myScores, {score: 1250, round: 129})
        APP.put(myScores, {score: 1250, round: 130})
        APP.put(myScores, {score: 1250, round: 131})
        APP.put(myScores, {score: 1250, round: 132})
        APP.put(myScores, {score: 1400, round: 133})
        APP.put(myScores, {score: 1400, round: 134})
        APP.put(myScores, {score: 1400, round: 135})
        APP.put(myScores, {score: 1400, round: 136})
        APP.put(myScores, {score: 1400, round: 137})
        APP.put(myScores, {score: 1400, round: 138})
        APP.put(myScores, {score: 1400, round: 139})
        APP.put(myScores, {score: 1400, round: 140})
        APP.put(myScores, {score: 1400, round: 141})
        APP.put(myScores, {score: 1400, round: 142})
        APP.put(myScores, {score: 1400, round: 143})
        APP.put(myScores, {score: 1400, round: 144})
        APP.put(myScores, {score: 1400, round: 145})
        APP.put(myScores, {score: 1400, round: 146})
        APP.put(myScores, {score: 1500, round: 147})
        APP.put(myScores, {score: 1500, round: 148})
        APP.put(myScores, {score: 1500, round: 149})

	return {
		gameId: 'game20161110_05_29_02',
		gameTime: '2016-11-10 05:29:02',
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