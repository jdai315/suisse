//TICKER, DATE, QUOTE
var HISTORICAL_PRICES = [
['TSLA', '06/2012', 31.290001],
['TSLA', '07/2012', 27.420000],
['TSLA', '08/2012', 28.520000],
['TSLA', '09/2012', 29.280001],
['TSLA', '10/2012', 28.129999],
['TSLA', '11/2012', 33.820000],
['TSLA', '12/2012', 33.869999],
['TSLA', '01/2013', 37.509998],
['TSLA', '02/2013', 34.830002],
['TSLA', '03/2013', 37.889999],
['TSLA', '04/2013', 53.990002],
['TSLA', '05/2013', 97.760002],
['TSLA', '06/2013', 107.360001],
['TSLA', '07/2013', 134.279999],
['TSLA', '08/2013', 169.000000],
['TSLA', '09/2013', 193.369995],
['TSLA', '10/2013', 159.940002],
['TSLA', '11/2013', 127.279999],
['TSLA', '12/2013', 150.429993],
['TSLA', '01/2014', 181.410004],
['TSLA', '02/2014', 244.809998],
['TSLA', '03/2014', 208.449997],
['TSLA', '04/2014', 207.889999],
['TSLA', '05/2014', 207.770004],
['TSLA', '06/2014', 240.059998],
['TSLA', '07/2014', 223.300003],
['TSLA', '08/2014', 269.700012],
['TSLA', '09/2014', 242.679993],
['TSLA', '10/2014', 241.699997],
['TSLA', '11/2014', 244.520004],
['TSLA', '12/2014', 222.410004],
['TSLA', '01/2015', 203.600006],
['TSLA', '02/2015', 203.339996],
['TSLA', '03/2015', 188.770004],
['TSLA', '04/2015', 226.050003],
['TSLA', '05/2015', 250.800003],
['TSLA', '06/2015', 268.260010],
['TSLA', '07/2015', 266.149994],
['TSLA', '08/2015', 249.059998],
['TSLA', '09/2015', 248.399994],
['TSLA', '10/2015', 206.929993],
['TSLA', '11/2015', 230.259995],
['TSLA', '12/2015', 240.009995],
['TSLA', '01/2016', 191.199997],
['TSLA', '02/2016', 191.929993],
['TSLA', '03/2016', 229.770004],
['TSLA', '04/2016', 240.759995],
['TSLA', '05/2016', 223.229996],
['TSLA', '06/2016', 212.279999],
['TSLA', '07/2016', 234.789993],
['TSLA', '08/2016', 212.009995],
['TSLA', '09/2016', 204.029999],
['TSLA', '10/2016', 197.729996],
['TSLA', '11/2016', 189.399994],
['TSLA', '12/2016', 213.690002],
['TSLA', '01/2017', 251.929993],
['TSLA', '02/2017', 249.990005],
['TSLA', '03/2017', 278.299988],
['TSLA', '04/2017', 314.070007],
['TSLA', '05/2017', 325.220001],
['AAPL', '06/2012', 83.428574],
['AAPL', '07/2012', 87.251427],
['AAPL', '08/2012', 95.034286],
['AAPL', '09/2012', 95.300003],
['AAPL', '10/2012', 85.045715],
['AAPL', '11/2012', 83.611427],
['AAPL', '12/2012', 76.024284],
['AAPL', '01/2013', 65.070000],
['AAPL', '02/2013', 63.057144],
['AAPL', '03/2013', 63.237144],
['AAPL', '04/2013', 63.254284],
['AAPL', '05/2013', 64.247147],
['AAPL', '06/2013', 56.647144],
['AAPL', '07/2013', 64.647141],
['AAPL', '08/2013', 69.602859],
['AAPL', '09/2013', 68.107140],
['AAPL', '10/2013', 74.671425],
['AAPL', '11/2013', 79.438568],
['AAPL', '12/2013', 80.145714],
['AAPL', '01/2014', 71.514282],
['AAPL', '02/2014', 75.177139],
['AAPL', '03/2014', 76.677139],
['AAPL', '04/2014', 84.298569],
['AAPL', '05/2014', 90.428574],
['AAPL', '06/2014', 92.930000],
['AAPL', '07/2014', 95.599998],
['AAPL', '08/2014', 102.500000],
['AAPL', '09/2014', 100.750000],
['AAPL', '10/2014', 108.000000],
['AAPL', '11/2014', 118.930000],
['AAPL', '12/2014', 110.379997],
['AAPL', '01/2015', 117.160004],
['AAPL', '02/2015', 128.460007],
['AAPL', '03/2015', 124.430000],
['AAPL', '04/2015', 125.150002],
['AAPL', '05/2015', 130.279999],
['AAPL', '06/2015', 125.430000],
['AAPL', '07/2015', 121.300003],
['AAPL', '08/2015', 112.919998],
['AAPL', '09/2015', 110.300003],
['AAPL', '10/2015', 119.500000],
['AAPL', '11/2015', 118.300003],
['AAPL', '12/2015', 105.260002],
['AAPL', '01/2016', 97.339996],
['AAPL', '02/2016', 96.690002],
['AAPL', '03/2016', 108.989998],
['AAPL', '04/2016', 93.739998],
['AAPL', '05/2016', 99.860001],
['AAPL', '06/2016', 95.599998],
['AAPL', '07/2016', 104.209999],
['AAPL', '08/2016', 106.099998],
['AAPL', '09/2016', 113.050003],
['AAPL', '10/2016', 113.540001],
['AAPL', '11/2016', 110.519997],
['AAPL', '12/2016', 115.820000],
['AAPL', '01/2017', 121.349998],
['AAPL', '02/2017', 136.990005],
['AAPL', '03/2017', 143.660004],
['AAPL', '04/2017', 143.649994],
['AAPL', '05/2017', 153.259995],
['AMZN', '06/2012', 228.350006],
['AMZN', '07/2012', 233.300003],
['AMZN', '08/2012', 248.270004],
['AMZN', '09/2012', 254.320007],
['AMZN', '10/2012', 232.889999],
['AMZN', '11/2012', 252.050003],
['AMZN', '12/2012', 250.869995],
['AMZN', '01/2013', 265.500000],
['AMZN', '02/2013', 264.269989],
['AMZN', '03/2013', 266.489990],
['AMZN', '04/2013', 253.809998],
['AMZN', '05/2013', 269.200012],
['AMZN', '06/2013', 277.690002],
['AMZN', '07/2013', 301.220001],
['AMZN', '08/2013', 280.980011],
['AMZN', '09/2013', 312.640015],
['AMZN', '10/2013', 364.029999],
['AMZN', '11/2013', 393.619995],
['AMZN', '12/2013', 398.790009],
['AMZN', '01/2014', 358.690002],
['AMZN', '02/2014', 362.100006],
['AMZN', '03/2014', 336.369995],
['AMZN', '04/2014', 304.130005],
['AMZN', '05/2014', 312.549988],
['AMZN', '06/2014', 324.779999],
['AMZN', '07/2014', 312.989990],
['AMZN', '08/2014', 339.040009],
['AMZN', '09/2014', 322.440002],
['AMZN', '10/2014', 305.459991],
['AMZN', '11/2014', 338.640015],
['AMZN', '12/2014', 310.350006],
['AMZN', '01/2015', 354.529999],
['AMZN', '02/2015', 380.160004],
['AMZN', '03/2015', 372.100006],
['AMZN', '04/2015', 421.779999],
['AMZN', '05/2015', 429.230011],
['AMZN', '06/2015', 434.089996],
['AMZN', '07/2015', 536.150024],
['AMZN', '08/2015', 512.890015],
['AMZN', '09/2015', 511.890015],
['AMZN', '10/2015', 625.900024],
['AMZN', '11/2015', 664.799988],
['AMZN', '12/2015', 675.890015],
['AMZN', '01/2016', 587.000000],
['AMZN', '02/2016', 552.520020],
['AMZN', '03/2016', 593.640015],
['AMZN', '04/2016', 659.590027],
['AMZN', '05/2016', 722.789978],
['AMZN', '06/2016', 715.619995],
['AMZN', '07/2016', 758.809998],
['AMZN', '08/2016', 769.159973],
['AMZN', '09/2016', 837.309998],
['AMZN', '10/2016', 789.820007],
['AMZN', '11/2016', 750.570007],
['AMZN', '12/2016', 768.659973],
['AMZN', '01/2017', 823.479980],
['AMZN', '02/2017', 845.039978],
['AMZN', '03/2017', 886.539978],
['AMZN', '04/2017', 924.989990],
['AMZN', '05/2017', 948.950012],
['NFLX', '06/2012', 9.784286],
['NFLX', '07/2012', 8.121428],
['NFLX', '08/2012', 8.531428],
['NFLX', '09/2012', 7.777143],
['NFLX', '10/2012', 11.320000],
['NFLX', '11/2012', 11.672857],
['NFLX', '12/2012', 13.227143],
['NFLX', '01/2013', 23.605715],
['NFLX', '02/2013', 26.868572],
['NFLX', '03/2013', 27.040001],
['NFLX', '04/2013', 30.867144],
['NFLX', '05/2013', 32.321430],
['NFLX', '06/2013', 30.155714],
['NFLX', '07/2013', 34.925713],
['NFLX', '08/2013', 40.558571],
['NFLX', '09/2013', 44.172855],
['NFLX', '10/2013', 46.068573],
['NFLX', '11/2013', 52.257141],
['NFLX', '12/2013', 52.595715],
['NFLX', '01/2014', 58.475716],
['NFLX', '02/2014', 63.661430],
['NFLX', '03/2014', 50.290001],
['NFLX', '04/2014', 46.005714],
['NFLX', '05/2014', 59.689999],
['NFLX', '06/2014', 62.942856],
['NFLX', '07/2014', 60.388573],
['NFLX', '08/2014', 68.234283],
['NFLX', '09/2014', 64.454285],
['NFLX', '10/2014', 56.110001],
['NFLX', '11/2014', 49.512856],
['NFLX', '12/2014', 48.801430],
['NFLX', '01/2015', 63.114285],
['NFLX', '02/2015', 67.844284],
['NFLX', '03/2015', 59.527142],
['NFLX', '04/2015', 79.500000],
['NFLX', '05/2015', 89.151428],
['NFLX', '06/2015', 93.848572],
['NFLX', '07/2015', 114.309998],
['NFLX', '08/2015', 115.029999],
['NFLX', '09/2015', 103.260002],
['NFLX', '10/2015', 108.379997],
['NFLX', '11/2015', 123.330002],
['NFLX', '12/2015', 114.379997],
['NFLX', '01/2016', 91.839996],
['NFLX', '02/2016', 93.410004],
['NFLX', '03/2016', 102.230003],
['NFLX', '04/2016', 90.029999],
['NFLX', '05/2016', 102.570000],
['NFLX', '06/2016', 91.480003],
['NFLX', '07/2016', 91.250000],
['NFLX', '08/2016', 97.449997],
['NFLX', '09/2016', 98.550003],
['NFLX', '10/2016', 124.870003],
['NFLX', '11/2016', 117.000000],
['NFLX', '12/2016', 123.800003],
['NFLX', '01/2017', 140.710007],
['NFLX', '02/2017', 142.130005],
['NFLX', '03/2017', 147.809998],
['NFLX', '04/2017', 152.199997],
['NFLX', '05/2017', 160.279999],
['GOOG', '06/2012', 288.951935],
['GOOG', '07/2012', 315.303162],
['GOOG', '08/2012', 341.265839],
['GOOG', '09/2012', 375.841248],
['GOOG', '10/2012', 338.879791],
['GOOG', '11/2012', 347.881042],
['GOOG', '12/2012', 352.369232],
['GOOG', '01/2013', 376.434021],
['GOOG', '02/2013', 399.104065],
['GOOG', '03/2013', 395.612152],
['GOOG', '04/2013', 410.745422],
['GOOG', '05/2013', 433.983337],
['GOOG', '06/2013', 438.541229],
['GOOG', '07/2013', 442.217468],
['GOOG', '08/2013', 421.868744],
['GOOG', '09/2013', 436.319580],
['GOOG', '10/2013', 513.365784],
['GOOG', '11/2013', 527.816589],
['GOOG', '12/2013', 558.262512],
['GOOG', '01/2014', 588.279968],
['GOOG', '02/2014', 605.555237],
['GOOG', '03/2014', 555.445007],
['GOOG', '04/2014', 525.218018],
['GOOG', '05/2014', 558.357056],
['GOOG', '06/2014', 573.704895],
['GOOG', '07/2014', 570.034973],
['GOOG', '08/2014', 570.034973],
['GOOG', '09/2014', 575.779175],
['GOOG', '10/2014', 557.549255],
['GOOG', '11/2014', 540.346497],
['GOOG', '12/2014', 524.958740],
['GOOG', '01/2015', 533.056519],
['GOOG', '02/2015', 556.871094],
['GOOG', '03/2015', 546.499573],
['GOOG', '04/2015', 537.340027],
['GOOG', '05/2015', 532.109985],
['GOOG', '06/2015', 520.510010],
['GOOG', '07/2015', 625.609985],
['GOOG', '08/2015', 637.609985],
['GOOG', '09/2015', 608.419983],
['GOOG', '10/2015', 710.809998],
['GOOG', '11/2015', 742.599976],
['GOOG', '12/2015', 758.880005],
['GOOG', '01/2016', 742.950012],
['GOOG', '02/2016', 697.770020],
['GOOG', '03/2016', 744.950012],
['GOOG', '04/2016', 693.010010],
['GOOG', '05/2016', 735.719971],
['GOOG', '06/2016', 692.099976],
['GOOG', '07/2016', 768.789978],
['GOOG', '08/2016', 767.049988],
['GOOG', '09/2016', 777.289978],
['GOOG', '10/2016', 784.539978],
['GOOG', '11/2016', 758.039978],
['GOOG', '12/2016', 771.820007],
['GOOG', '01/2017', 796.789978],
['GOOG', '02/2017', 823.210022],
['GOOG', '03/2017', 829.559998],
['GOOG', '04/2017', 905.960022],
['GOOG', '05/2017', 928.780029],
['FB', '06/2012', 31.100000],
['FB', '07/2012', 21.709999],
['FB', '08/2012', 18.059999],
['FB', '09/2012', 21.660000],
['FB', '10/2012', 21.110001],
['FB', '11/2012', 28.000000],
['FB', '12/2012', 26.620001],
['FB', '01/2013', 30.980000],
['FB', '02/2013', 27.250000],
['FB', '03/2013', 25.580000],
['FB', '04/2013', 27.770000],
['FB', '05/2013', 24.350000],
['FB', '06/2013', 24.879999],
['FB', '07/2013', 36.799999],
['FB', '08/2013', 41.290001],
['FB', '09/2013', 50.230000],
['FB', '10/2013', 50.209999],
['FB', '11/2013', 47.009998],
['FB', '12/2013', 54.650002],
['FB', '01/2014', 62.570000],
['FB', '02/2014', 68.459999],
['FB', '03/2014', 60.240002],
['FB', '04/2014', 59.779999],
['FB', '05/2014', 63.299999],
['FB', '06/2014', 67.290001],
['FB', '07/2014', 72.650002],
['FB', '08/2014', 74.820000],
['FB', '09/2014', 79.040001],
['FB', '10/2014', 74.989998],
['FB', '11/2014', 77.699997],
['FB', '12/2014', 78.019997],
['FB', '01/2015', 75.910004],
['FB', '02/2015', 78.970001],
['FB', '03/2015', 82.220001],
['FB', '04/2015', 78.769997],
['FB', '05/2015', 79.190002],
['FB', '06/2015', 85.769997],
['FB', '07/2015', 94.010002],
['FB', '08/2015', 89.730003],
['FB', '09/2015', 89.900002],
['FB', '10/2015', 101.970001],
['FB', '11/2015', 104.239998],
['FB', '12/2015', 104.660004],
['FB', '01/2016', 112.209999],
['FB', '02/2016', 106.919998],
['FB', '03/2016', 114.099998],
['FB', '04/2016', 117.580002],
['FB', '05/2016', 118.809998],
['FB', '06/2016', 114.279999],
['FB', '07/2016', 123.940002],
['FB', '08/2016', 126.120003],
['FB', '09/2016', 128.270004],
['FB', '10/2016', 130.990005],
['FB', '11/2016', 118.419998],
['FB', '12/2016', 115.050003],
['FB', '01/2017', 130.320007],
['FB', '02/2017', 135.539993],
['FB', '03/2017', 142.050003],
['FB', '04/2017', 150.250000],
['FB', '05/2017', 150.289993],
['TGT', '06/2012', 58.189999],
['TGT', '07/2012', 60.650002],
['TGT', '08/2012', 64.089996],
['TGT', '09/2012', 63.470001],
['TGT', '10/2012', 63.750000],
['TGT', '11/2012', 63.130001],
['TGT', '12/2012', 59.169998],
['TGT', '01/2013', 60.410000],
['TGT', '02/2013', 62.959999],
['TGT', '03/2013', 68.449997],
['TGT', '04/2013', 70.559998],
['TGT', '05/2013', 69.500000],
['TGT', '06/2013', 68.860001],
['TGT', '07/2013', 71.250000],
['TGT', '08/2013', 63.310001],
['TGT', '09/2013', 63.980000],
['TGT', '10/2013', 64.790001],
['TGT', '11/2013', 63.930000],
['TGT', '12/2013', 63.270000],
['TGT', '01/2014', 56.639999],
['TGT', '02/2014', 62.540001],
['TGT', '03/2014', 60.509998],
['TGT', '04/2014', 61.750000],
['TGT', '05/2014', 56.759998],
['TGT', '06/2014', 57.950001],
['TGT', '07/2014', 59.590000],
['TGT', '08/2014', 60.070000],
['TGT', '09/2014', 62.680000],
['TGT', '10/2014', 61.820000],
['TGT', '11/2014', 74.000000],
['TGT', '12/2014', 75.910004],
['TGT', '01/2015', 73.610001],
['TGT', '02/2015', 76.830002],
['TGT', '03/2015', 82.070000],
['TGT', '04/2015', 78.830002],
['TGT', '05/2015', 79.320000],
['TGT', '06/2015', 81.629997],
['TGT', '07/2015', 81.849998],
['TGT', '08/2015', 77.849998],
['TGT', '09/2015', 78.660004],
['TGT', '10/2015', 77.180000],
['TGT', '11/2015', 72.500000],
['TGT', '12/2015', 72.610001],
['TGT', '01/2016', 72.419998],
['TGT', '02/2016', 78.449997],
['TGT', '03/2016', 82.279999],
['TGT', '04/2016', 79.500000],
['TGT', '05/2016', 68.779999],
['TGT', '06/2016', 69.820000],
['TGT', '07/2016', 75.330002],
['TGT', '08/2016', 70.190002],
['TGT', '09/2016', 68.680000],
['TGT', '10/2016', 68.730003],
['TGT', '11/2016', 77.239998],
['TGT', '12/2016', 72.230003],
['TGT', '01/2017', 64.480003],
['TGT', '02/2017', 58.770000],
['TGT', '03/2017', 55.189999],
['TGT', '04/2017', 55.849998],
['TGT', '05/2017', 58.410000],
['WMT', '06/2012', 69.720001],
['WMT', '07/2012', 74.430000],
['WMT', '08/2012', 72.599998],
['WMT', '09/2012', 73.800003],
['WMT', '10/2012', 75.019997],
['WMT', '11/2012', 72.019997],
['WMT', '12/2012', 68.230003],
['WMT', '01/2013', 69.949997],
['WMT', '02/2013', 70.779999],
['WMT', '03/2013', 74.830002],
['WMT', '04/2013', 77.720001],
['WMT', '05/2013', 74.839996],
['WMT', '06/2013', 74.489998],
['WMT', '07/2013', 77.940002],
['WMT', '08/2013', 72.980003],
['WMT', '09/2013', 73.959999],
['WMT', '10/2013', 76.750000],
['WMT', '11/2013', 81.010002],
['WMT', '12/2013', 78.690002],
['WMT', '01/2014', 74.680000],
['WMT', '02/2014', 74.699997],
['WMT', '03/2014', 76.430000],
['WMT', '04/2014', 79.709999],
['WMT', '05/2014', 76.769997],
['WMT', '06/2014', 75.070000],
['WMT', '07/2014', 73.580002],
['WMT', '08/2014', 75.500000],
['WMT', '09/2014', 76.470001],
['WMT', '10/2014', 76.269997],
['WMT', '11/2014', 87.540001],
['WMT', '12/2014', 85.879997],
['WMT', '01/2015', 84.980003],
['WMT', '02/2015', 83.930000],
['WMT', '03/2015', 82.250000],
['WMT', '04/2015', 78.050003],
['WMT', '05/2015', 74.269997],
['WMT', '06/2015', 70.930000],
['WMT', '07/2015', 71.980003],
['WMT', '08/2015', 64.730003],
['WMT', '09/2015', 64.839996],
['WMT', '10/2015', 57.240002],
['WMT', '11/2015', 58.840000],
['WMT', '12/2015', 61.299999],
['WMT', '01/2016', 66.360001],
['WMT', '02/2016', 66.339996],
['WMT', '03/2016', 68.489998],
['WMT', '04/2016', 66.870003],
['WMT', '05/2016', 70.779999],
['WMT', '06/2016', 73.019997],
['WMT', '07/2016', 72.970001],
['WMT', '08/2016', 71.440002],
['WMT', '09/2016', 72.120003],
['WMT', '10/2016', 70.019997],
['WMT', '11/2016', 70.430000],
['WMT', '12/2016', 69.120003],
['WMT', '01/2017', 66.739998],
['WMT', '02/2017', 70.930000],
['WMT', '03/2017', 72.080002],
['WMT', '04/2017', 75.180000],
['WMT', '05/2017', 76.699997],
['SHLD', '06/2012', 45.059204],
['SHLD', '07/2012', 37.353096],
['SHLD', '08/2012', 39.813618],
['SHLD', '09/2012', 41.881660],
['SHLD', '10/2012', 47.300842],
['SHLD', '11/2012', 31.707489],
['SHLD', '12/2012', 31.216894],
['SHLD', '01/2013', 35.436005],
['SHLD', '02/2013', 33.964222],
['SHLD', '03/2013', 37.715382],
['SHLD', '04/2013', 38.749405],
['SHLD', '05/2013', 36.854954],
['SHLD', '06/2013', 31.760323],
['SHLD', '07/2013', 34.568031],
['SHLD', '08/2013', 33.390606],
['SHLD', '09/2013', 44.900703],
['SHLD', '10/2013', 43.836491],
['SHLD', '11/2013', 47.949936],
['SHLD', '12/2013', 37.013454],
['SHLD', '01/2014', 27.450640],
['SHLD', '02/2014', 33.775532],
['SHLD', '03/2014', 36.047363],
['SHLD', '04/2014', 40.803516],
['SHLD', '05/2014', 39.173611],
['SHLD', '06/2014', 37.217724],
['SHLD', '07/2014', 35.531937],
['SHLD', '08/2014', 32.411831],
['SHLD', '09/2014', 23.498577],
['SHLD', '10/2014', 32.881355],
['SHLD', '11/2014', 36.099998],
['SHLD', '12/2014', 32.980000],
['SHLD', '01/2015', 31.840000],
['SHLD', '02/2015', 37.599998],
['SHLD', '03/2015', 41.380001],
['SHLD', '04/2015', 39.939999],
['SHLD', '05/2015', 42.950001],
['SHLD', '06/2015', 26.700001],
['SHLD', '07/2015', 21.549999],
['SHLD', '08/2015', 26.680000],
['SHLD', '09/2015', 22.600000],
['SHLD', '10/2015', 23.370001],
['SHLD', '11/2015', 22.129999],
['SHLD', '12/2015', 20.559999],
['SHLD', '01/2016', 16.950001],
['SHLD', '02/2016', 17.469999],
['SHLD', '03/2016', 15.310000],
['SHLD', '04/2016', 16.379999],
['SHLD', '05/2016', 13.260000],
['SHLD', '06/2016', 13.610000],
['SHLD', '07/2016', 15.410000],
['SHLD', '08/2016', 13.770000],
['SHLD', '09/2016', 11.460000],
['SHLD', '10/2016', 11.110000],
['SHLD', '11/2016', 12.880000],
['SHLD', '12/2016', 9.290000],
['SHLD', '01/2017', 6.980000],
['SHLD', '02/2017', 7.840000],
['SHLD', '03/2017', 11.490000],
['SHLD', '04/2017', 10.220000],
['SHLD', '05/2017', 11.240000],
['M', '06/2012', 34.349998],
['M', '07/2012', 35.840000],
['M', '08/2012', 40.310001],
['M', '09/2012', 37.619999],
['M', '10/2012', 38.070000],
['M', '11/2012', 38.700001],
['M', '12/2012', 39.020000],
['M', '01/2013', 39.509998],
['M', '02/2013', 41.099998],
['M', '03/2013', 41.840000],
['M', '04/2013', 44.599998],
['M', '05/2013', 48.340000],
['M', '06/2013', 48.000000],
['M', '07/2013', 48.340000],
['M', '08/2013', 44.430000],
['M', '09/2013', 43.270000],
['M', '10/2013', 46.110001],
['M', '11/2013', 53.259998],
['M', '12/2013', 53.400002],
['M', '01/2014', 53.200001],
['M', '02/2014', 57.860001],
['M', '03/2014', 59.290001],
['M', '04/2014', 57.430000],
['M', '05/2014', 59.889999],
['M', '06/2014', 58.020000],
['M', '07/2014', 57.790001],
['M', '08/2014', 62.290001],
['M', '09/2014', 58.180000],
['M', '10/2014', 57.820000],
['M', '11/2014', 64.910004],
['M', '12/2014', 65.750000],
['M', '01/2015', 63.880001],
['M', '02/2015', 63.720001],
['M', '03/2015', 64.910004],
['M', '04/2015', 64.629997],
['M', '05/2015', 66.949997],
['M', '06/2015', 67.470001],
['M', '07/2015', 69.059998],
['M', '08/2015', 58.610001],
['M', '09/2015', 51.320000],
['M', '10/2015', 50.980000],
['M', '11/2015', 39.080002],
['M', '12/2015', 34.980000],
['M', '01/2016', 40.410000],
['M', '02/2016', 43.209999],
['M', '03/2016', 44.090000],
['M', '04/2016', 39.590000],
['M', '05/2016', 33.209999],
['M', '06/2016', 33.610001],
['M', '07/2016', 35.830002],
['M', '08/2016', 36.180000],
['M', '09/2016', 37.049999],
['M', '10/2016', 36.490002],
['M', '11/2016', 42.200001],
['M', '12/2016', 35.810001],
['M', '01/2017', 29.540001],
['M', '02/2017', 33.220001],
['M', '03/2017', 29.639999],
['M', '04/2017', 29.219999],
['M', '05/2017', 29.340000],
['BAC', '06/2012', 8.180000],
['BAC', '07/2012', 7.340000],
['BAC', '08/2012', 7.990000],
['BAC', '09/2012', 8.830000],
['BAC', '10/2012', 9.320000],
['BAC', '11/2012', 9.860000],
['BAC', '12/2012', 11.610000],
['BAC', '01/2013', 11.320000],
['BAC', '02/2013', 11.230000],
['BAC', '03/2013', 12.180000],
['BAC', '04/2013', 12.310000],
['BAC', '05/2013', 13.660000],
['BAC', '06/2013', 12.860000],
['BAC', '07/2013', 14.600000],
['BAC', '08/2013', 14.120000],
['BAC', '09/2013', 13.800000],
['BAC', '10/2013', 13.970000],
['BAC', '11/2013', 15.820000],
['BAC', '12/2013', 15.570000],
['BAC', '01/2014', 16.750000],
['BAC', '02/2014', 16.530001],
['BAC', '03/2014', 17.200001],
['BAC', '04/2014', 15.140000],
['BAC', '05/2014', 15.140000],
['BAC', '06/2014', 15.370000],
['BAC', '07/2014', 15.250000],
['BAC', '08/2014', 16.090000],
['BAC', '09/2014', 17.049999],
['BAC', '10/2014', 17.160000],
['BAC', '11/2014', 17.040001],
['BAC', '12/2014', 17.889999],
['BAC', '01/2015', 15.150000],
['BAC', '02/2015', 15.810000],
['BAC', '03/2015', 15.390000],
['BAC', '04/2015', 15.930000],
['BAC', '05/2015', 16.500000],
['BAC', '06/2015', 17.020000],
['BAC', '07/2015', 17.879999],
['BAC', '08/2015', 16.440001],
['BAC', '09/2015', 15.580000],
['BAC', '10/2015', 16.780001],
['BAC', '11/2015', 17.430000],
['BAC', '12/2015', 16.830000],
['BAC', '01/2016', 14.140000],
['BAC', '02/2016', 12.520000],
['BAC', '03/2016', 13.520000],
['BAC', '04/2016', 14.560000],
['BAC', '05/2016', 14.790000],
['BAC', '06/2016', 13.270000],
['BAC', '07/2016', 14.490000],
['BAC', '08/2016', 16.139999],
['BAC', '09/2016', 15.650000],
['BAC', '10/2016', 16.500000],
['BAC', '11/2016', 21.120001],
['BAC', '12/2016', 23.090000],
['BAC', '01/2017', 22.639999],
['BAC', '02/2017', 24.680000],
['BAC', '03/2017', 23.590000],
['BAC', '04/2017', 23.340000],
['BAC', '05/2017', 24.150000],
['C', '06/2012', 27.410000],
['C', '07/2012', 27.129999],
['C', '08/2012', 29.709999],
['C', '09/2012', 32.720001],
['C', '10/2012', 37.389999],
['C', '11/2012', 34.570000],
['C', '12/2012', 39.560001],
['C', '01/2013', 42.160000],
['C', '02/2013', 41.970001],
['C', '03/2013', 44.240002],
['C', '04/2013', 46.660000],
['C', '05/2013', 51.990002],
['C', '06/2013', 47.970001],
['C', '07/2013', 52.139999],
['C', '08/2013', 48.330002],
['C', '09/2013', 48.509998],
['C', '10/2013', 48.779999],
['C', '11/2013', 52.919998],
['C', '12/2013', 52.110001],
['C', '01/2014', 47.430000],
['C', '02/2014', 48.630001],
['C', '03/2014', 47.599998],
['C', '04/2014', 47.910000],
['C', '05/2014', 47.570000],
['C', '06/2014', 47.099998],
['C', '07/2014', 48.910000],
['C', '08/2014', 51.650002],
['C', '09/2014', 51.820000],
['C', '10/2014', 53.529999],
['C', '11/2014', 53.970001],
['C', '12/2014', 54.110001],
['C', '01/2015', 46.950001],
['C', '02/2015', 52.419998],
['C', '03/2015', 51.520000],
['C', '04/2015', 53.320000],
['C', '05/2015', 54.080002],
['C', '06/2015', 55.240002],
['C', '07/2015', 58.459999],
['C', '08/2015', 53.480000],
['C', '09/2015', 49.610001],
['C', '10/2015', 53.169998],
['C', '11/2015', 54.090000],
['C', '12/2015', 51.750000],
['C', '01/2016', 42.580002],
['C', '02/2016', 38.849998],
['C', '03/2016', 41.750000],
['C', '04/2016', 46.279999],
['C', '05/2016', 46.570000],
['C', '06/2016', 42.389999],
['C', '07/2016', 43.810001],
['C', '08/2016', 47.740002],
['C', '09/2016', 47.230000],
['C', '10/2016', 49.150002],
['C', '11/2016', 56.389999],
['C', '12/2016', 59.430000],
['C', '01/2017', 55.830002],
['C', '02/2017', 59.810001],
['C', '03/2017', 59.820000],
['C', '04/2017', 59.119999],
['C', '05/2017', 60.369999],
['JPM', '06/2012', 35.730000],
['JPM', '07/2012', 36.000000],
['JPM', '08/2012', 37.139999],
['JPM', '09/2012', 40.480000],
['JPM', '10/2012', 41.680000],
['JPM', '11/2012', 41.080002],
['JPM', '12/2012', 43.970001],
['JPM', '01/2013', 47.049999],
['JPM', '02/2013', 48.919998],
['JPM', '03/2013', 47.459999],
['JPM', '04/2013', 49.009998],
['JPM', '05/2013', 54.590000],
['JPM', '06/2013', 52.790001],
['JPM', '07/2013', 55.730000],
['JPM', '08/2013', 50.529999],
['JPM', '09/2013', 51.689999],
['JPM', '10/2013', 51.540001],
['JPM', '11/2013', 57.220001],
['JPM', '12/2013', 58.480000],
['JPM', '01/2014', 55.360001],
['JPM', '02/2014', 56.820000],
['JPM', '03/2014', 60.709999],
['JPM', '04/2014', 55.980000],
['JPM', '05/2014', 55.570000],
['JPM', '06/2014', 57.619999],
['JPM', '07/2014', 57.669998],
['JPM', '08/2014', 59.450001],
['JPM', '09/2014', 60.240002],
['JPM', '10/2014', 60.480000],
['JPM', '11/2014', 60.160000],
['JPM', '12/2014', 62.580002],
['JPM', '01/2015', 54.380001],
['JPM', '02/2015', 61.279999],
['JPM', '03/2015', 60.580002],
['JPM', '04/2015', 63.259998],
['JPM', '05/2015', 65.779999],
['JPM', '06/2015', 67.760002],
['JPM', '07/2015', 68.529999],
['JPM', '08/2015', 64.099998],
['JPM', '09/2015', 60.970001],
['JPM', '10/2015', 64.250000],
['JPM', '11/2015', 66.680000],
['JPM', '12/2015', 66.029999],
['JPM', '01/2016', 59.500000],
['JPM', '02/2016', 56.299999],
['JPM', '03/2016', 59.220001],
['JPM', '04/2016', 63.200001],
['JPM', '05/2016', 65.269997],
['JPM', '06/2016', 62.139999],
['JPM', '07/2016', 63.970001],
['JPM', '08/2016', 67.500000],
['JPM', '09/2016', 66.589996],
['JPM', '10/2016', 69.260002],
['JPM', '11/2016', 80.169998],
['JPM', '12/2016', 85.489998],
['JPM', '01/2017', 84.629997],
['JPM', '02/2017', 90.620003],
['JPM', '03/2017', 87.839996],
['JPM', '04/2017', 87.000000],
['JPM', '05/2017', 87.430000],
['XOM', '06/2012', 85.570000],
['XOM', '07/2012', 86.849998],
['XOM', '08/2012', 87.300003],
['XOM', '09/2012', 91.449997],
['XOM', '10/2012', 91.169998],
['XOM', '11/2012', 88.139999],
['XOM', '12/2012', 86.550003],
['XOM', '01/2013', 89.970001],
['XOM', '02/2013', 89.550003],
['XOM', '03/2013', 90.110001],
['XOM', '04/2013', 88.989998],
['XOM', '05/2013', 90.470001],
['XOM', '06/2013', 90.349998],
['XOM', '07/2013', 93.750000],
['XOM', '08/2013', 87.160004],
['XOM', '09/2013', 86.040001],
['XOM', '10/2013', 89.620003],
['XOM', '11/2013', 93.480003],
['XOM', '12/2013', 101.199997],
['XOM', '01/2014', 92.160004],
['XOM', '02/2014', 96.269997],
['XOM', '03/2014', 97.680000],
['XOM', '04/2014', 102.410004],
['XOM', '05/2014', 100.529999],
['XOM', '06/2014', 100.680000],
['XOM', '07/2014', 98.940002],
['XOM', '08/2014', 99.459999],
['XOM', '09/2014', 94.050003],
['XOM', '10/2014', 96.709999],
['XOM', '11/2014', 90.540001],
['XOM', '12/2014', 92.449997],
['XOM', '01/2015', 87.419998],
['XOM', '02/2015', 88.540001],
['XOM', '03/2015', 85.000000],
['XOM', '04/2015', 87.370003],
['XOM', '05/2015', 85.199997],
['XOM', '06/2015', 83.199997],
['XOM', '07/2015', 79.209999],
['XOM', '08/2015', 75.239998],
['XOM', '09/2015', 74.349998],
['XOM', '10/2015', 82.739998],
['XOM', '11/2015', 81.660004],
['XOM', '12/2015', 77.949997],
['XOM', '01/2016', 77.849998],
['XOM', '02/2016', 80.150002],
['XOM', '03/2016', 83.589996],
['XOM', '04/2016', 88.400002],
['XOM', '05/2016', 89.019997],
['XOM', '06/2016', 93.739998],
['XOM', '07/2016', 88.949997],
['XOM', '08/2016', 87.139999],
['XOM', '09/2016', 87.279999],
['XOM', '10/2016', 83.320000],
['XOM', '11/2016', 87.300003],
['XOM', '12/2016', 90.260002],
['XOM', '01/2017', 83.889999],
['XOM', '02/2017', 81.320000],
['XOM', '03/2017', 82.010002],
['XOM', '04/2017', 81.650002],
['XOM', '05/2017', 81.910004],
['HAL', '06/2012', 28.389999],
['HAL', '07/2012', 33.130001],
['HAL', '08/2012', 32.759998],
['HAL', '09/2012', 33.689999],
['HAL', '10/2012', 32.290001],
['HAL', '11/2012', 33.349998],
['HAL', '12/2012', 34.689999],
['HAL', '01/2013', 40.680000],
['HAL', '02/2013', 41.509998],
['HAL', '03/2013', 40.410000],
['HAL', '04/2013', 42.770000],
['HAL', '05/2013', 41.849998],
['HAL', '06/2013', 41.720001],
['HAL', '07/2013', 45.189999],
['HAL', '08/2013', 48.000000],
['HAL', '09/2013', 48.150002],
['HAL', '10/2013', 53.029999],
['HAL', '11/2013', 52.680000],
['HAL', '12/2013', 50.750000],
['HAL', '01/2014', 49.009998],
['HAL', '02/2014', 57.000000],
['HAL', '03/2014', 58.889999],
['HAL', '04/2014', 63.070000],
['HAL', '05/2014', 64.639999],
['HAL', '06/2014', 71.010002],
['HAL', '07/2014', 68.989998],
['HAL', '08/2014', 67.610001],
['HAL', '09/2014', 64.510002],
['HAL', '10/2014', 55.139999],
['HAL', '11/2014', 42.200001],
['HAL', '12/2014', 39.330002],
['HAL', '01/2015', 39.990002],
['HAL', '02/2015', 42.939999],
['HAL', '03/2015', 43.880001],
['HAL', '04/2015', 48.950001],
['HAL', '05/2015', 45.400002],
['HAL', '06/2015', 43.070000],
['HAL', '07/2015', 41.790001],
['HAL', '08/2015', 38.040001],
['HAL', '09/2015', 35.349998],
['HAL', '10/2015', 38.380001],
['HAL', '11/2015', 39.849998],
['HAL', '12/2015', 34.040001],
['HAL', '01/2016', 31.790001],
['HAL', '02/2016', 32.279999],
['HAL', '03/2016', 35.720001],
['HAL', '04/2016', 41.310001],
['HAL', '05/2016', 42.180000],
['HAL', '06/2016', 45.290001],
['HAL', '07/2016', 43.660000],
['HAL', '08/2016', 43.009998],
['HAL', '09/2016', 44.880001],
['HAL', '10/2016', 46.000000],
['HAL', '11/2016', 53.090000],
['HAL', '12/2016', 54.200001],
['HAL', '01/2017', 56.570000],
['HAL', '02/2017', 53.459999],
['HAL', '03/2017', 49.209999],
['HAL', '04/2017', 45.880001],
['HAL', '05/2017', 45.810001],
['GM', '06/2012', 19.719999],
['GM', '07/2012', 19.709999],
['GM', '08/2012', 21.350000],
['GM', '09/2012', 22.750000],
['GM', '10/2012', 25.500000],
['GM', '11/2012', 25.879999],
['GM', '12/2012', 28.830000],
['GM', '01/2013', 28.090000],
['GM', '02/2013', 27.150000],
['GM', '03/2013', 27.820000],
['GM', '04/2013', 30.840000],
['GM', '05/2013', 33.889999],
['GM', '06/2013', 33.310001],
['GM', '07/2013', 35.869999],
['GM', '08/2013', 34.080002],
['GM', '09/2013', 35.970001],
['GM', '10/2013', 36.950001],
['GM', '11/2013', 38.730000],
['GM', '12/2013', 40.869999],
['GM', '01/2014', 36.080002],
['GM', '02/2014', 36.200001],
['GM', '03/2014', 34.419998],
['GM', '04/2014', 34.480000],
['GM', '05/2014', 34.580002],
['GM', '06/2014', 36.299999],
['GM', '07/2014', 33.820000],
['GM', '08/2014', 34.799999],
['GM', '09/2014', 31.940001],
['GM', '10/2014', 31.400000],
['GM', '11/2014', 33.430000],
['GM', '12/2014', 34.910000],
['GM', '01/2015', 32.619999],
['GM', '02/2015', 37.310001],
['GM', '03/2015', 37.500000],
['GM', '04/2015', 35.060001],
['GM', '05/2015', 35.970001],
['GM', '06/2015', 33.330002],
['GM', '07/2015', 31.510000],
['GM', '08/2015', 29.440001],
['GM', '09/2015', 30.020000],
['GM', '10/2015', 34.910000],
['GM', '11/2015', 36.200001],
['GM', '12/2015', 34.009998],
['GM', '01/2016', 29.639999],
['GM', '02/2016', 29.440001],
['GM', '03/2016', 31.430000],
['GM', '04/2016', 31.799999],
['GM', '05/2016', 31.280001],
['GM', '06/2016', 28.299999],
['GM', '07/2016', 31.540001],
['GM', '08/2016', 31.920000],
['GM', '09/2016', 31.770000],
['GM', '10/2016', 31.600000],
['GM', '11/2016', 34.529999],
['GM', '12/2016', 34.840000],
['GM', '01/2017', 36.610001],
['GM', '02/2017', 36.840000],
['GM', '03/2017', 35.360001],
['GM', '04/2017', 34.639999],
['GM', '05/2017', 34.230000],
['F', '06/2012', 9.590000],
['F', '07/2012', 9.240000],
['F', '08/2012', 9.340000],
['F', '09/2012', 9.860000],
['F', '10/2012', 11.160000],
['F', '11/2012', 11.450000],
['F', '12/2012', 12.950000],
['F', '01/2013', 12.950000],
['F', '02/2013', 12.610000],
['F', '03/2013', 13.150000],
['F', '04/2013', 13.710000],
['F', '05/2013', 15.680000],
['F', '06/2013', 15.470000],
['F', '07/2013', 16.879999],
['F', '08/2013', 16.190001],
['F', '09/2013', 16.870001],
['F', '10/2013', 17.110001],
['F', '11/2013', 17.080000],
['F', '12/2013', 15.430000],
['F', '01/2014', 14.960000],
['F', '02/2014', 15.390000],
['F', '03/2014', 15.600000],
['F', '04/2014', 16.150000],
['F', '05/2014', 16.440001],
['F', '06/2014', 17.240000],
['F', '07/2014', 17.020000],
['F', '08/2014', 17.410000],
['F', '09/2014', 14.790000],
['F', '10/2014', 14.090000],
['F', '11/2014', 15.730000],
['F', '12/2014', 15.500000],
['F', '01/2015', 14.710000],
['F', '02/2015', 16.340000],
['F', '03/2015', 16.139999],
['F', '04/2015', 15.800000],
['F', '05/2015', 15.170000],
['F', '06/2015', 15.010000],
['F', '07/2015', 14.830000],
['F', '08/2015', 13.870000],
['F', '09/2015', 13.570000],
['F', '10/2015', 14.810000],
['F', '11/2015', 14.330000],
['F', '12/2015', 14.090000],
['F', '01/2016', 11.940000],
['F', '02/2016', 12.510000],
['F', '03/2016', 13.500000],
['F', '04/2016', 13.560000],
['F', '05/2016', 13.490000],
['F', '06/2016', 12.570000],
['F', '07/2016', 12.660000],
['F', '08/2016', 12.600000],
['F', '09/2016', 12.070000],
['F', '10/2016', 11.740000],
['F', '11/2016', 11.960000],
['F', '12/2016', 12.130000],
['F', '01/2017', 12.360000],
['F', '02/2017', 12.530000],
['F', '03/2017', 11.640000],
['F', '04/2017', 11.470000],
['F', '05/2017', 11.040000],
['HUM', '06/2012', 77.440002],
['HUM', '07/2012', 61.599998],
['HUM', '08/2012', 70.080002],
['HUM', '09/2012', 70.150002],
['HUM', '10/2012', 74.269997],
['HUM', '11/2012', 65.410004],
['HUM', '12/2012', 68.629997],
['HUM', '01/2013', 74.360001],
['HUM', '02/2013', 68.260002],
['HUM', '03/2013', 69.110001],
['HUM', '04/2013', 74.110001],
['HUM', '05/2013', 80.779999],
['HUM', '06/2013', 84.379997],
['HUM', '07/2013', 91.260002],
['HUM', '08/2013', 92.080002],
['HUM', '09/2013', 93.330002],
['HUM', '10/2013', 92.150002],
['HUM', '11/2013', 103.989998],
['HUM', '12/2013', 103.220001],
['HUM', '01/2014', 97.300003],
['HUM', '02/2014', 112.459999],
['HUM', '03/2014', 112.720001],
['HUM', '04/2014', 109.750000],
['HUM', '05/2014', 124.459999],
['HUM', '06/2014', 127.720001],
['HUM', '07/2014', 117.650002],
['HUM', '08/2014', 128.740005],
['HUM', '09/2014', 130.289993],
['HUM', '10/2014', 138.850006],
['HUM', '11/2014', 137.970001],
['HUM', '12/2014', 143.630005],
['HUM', '01/2015', 146.440002],
['HUM', '02/2015', 164.380005],
['HUM', '03/2015', 178.020004],
['HUM', '04/2015', 165.600006],
['HUM', '05/2015', 214.649994],
['HUM', '06/2015', 191.279999],
['HUM', '07/2015', 182.089996],
['HUM', '08/2015', 182.789993],
['HUM', '09/2015', 179.000000],
['HUM', '10/2015', 178.630005],
['HUM', '11/2015', 168.660004],
['HUM', '12/2015', 178.509995],
['HUM', '01/2016', 162.789993],
['HUM', '02/2016', 176.970001],
['HUM', '03/2016', 182.949997],
['HUM', '04/2016', 177.070007],
['HUM', '05/2016', 172.509995],
['HUM', '06/2016', 179.880005],
['HUM', '07/2016', 172.550003],
['HUM', '08/2016', 178.710007],
['HUM', '09/2016', 176.889999],
['HUM', '10/2016', 171.529999],
['HUM', '11/2016', 212.639999],
['HUM', '12/2016', 204.029999],
['HUM', '01/2017', 198.500000],
['HUM', '02/2017', 211.250000],
['HUM', '03/2017', 206.139999],
['HUM', '04/2017', 221.979996],
['HUM', '05/2017', 230.800003],
['JNJ', '06/2012', 67.559998],
['JNJ', '07/2012', 69.220001],
['JNJ', '08/2012', 67.430000],
['JNJ', '09/2012', 68.910004],
['JNJ', '10/2012', 70.820000],
['JNJ', '11/2012', 69.730003],
['JNJ', '12/2012', 70.099998],
['JNJ', '01/2013', 73.919998],
['JNJ', '02/2013', 76.110001],
['JNJ', '03/2013', 81.529999],
['JNJ', '04/2013', 85.230003],
['JNJ', '05/2013', 84.180000],
['JNJ', '06/2013', 85.860001],
['JNJ', '07/2013', 93.500000],
['JNJ', '08/2013', 86.410004],
['JNJ', '09/2013', 86.690002],
['JNJ', '10/2013', 92.610001],
['JNJ', '11/2013', 94.660004],
['JNJ', '12/2013', 91.589996],
['JNJ', '01/2014', 88.470001],
['JNJ', '02/2014', 92.120003],
['JNJ', '03/2014', 98.230003],
['JNJ', '04/2014', 101.290001],
['JNJ', '05/2014', 101.459999],
['JNJ', '06/2014', 104.620003],
['JNJ', '07/2014', 100.089996],
['JNJ', '08/2014', 103.730003],
['JNJ', '09/2014', 106.589996],
['JNJ', '10/2014', 107.779999],
['JNJ', '11/2014', 108.250000],
['JNJ', '12/2014', 104.570000],
['JNJ', '01/2015', 100.139999],
['JNJ', '02/2015', 102.510002],
['JNJ', '03/2015', 100.599998],
['JNJ', '04/2015', 99.199997],
['JNJ', '05/2015', 100.139999],
['JNJ', '06/2015', 97.459999],
['JNJ', '07/2015', 100.209999],
['JNJ', '08/2015', 93.980003],
['JNJ', '09/2015', 93.349998],
['JNJ', '10/2015', 101.029999],
['JNJ', '11/2015', 101.239998],
['JNJ', '12/2015', 102.720001],
['JNJ', '01/2016', 104.440002],
['JNJ', '02/2016', 105.209999],
['JNJ', '03/2016', 108.199997],
['JNJ', '04/2016', 112.080002],
['JNJ', '05/2016', 112.690002],
['JNJ', '06/2016', 121.300003],
['JNJ', '07/2016', 125.230003],
['JNJ', '08/2016', 119.339996],
['JNJ', '09/2016', 118.129997],
['JNJ', '10/2016', 115.989998],
['JNJ', '11/2016', 111.300003],
['JNJ', '12/2016', 115.209999],
['JNJ', '01/2017', 113.250000],
['JNJ', '02/2017', 122.209999],
['JNJ', '03/2017', 124.550003],
['JNJ', '04/2017', 123.470001],
['JNJ', '05/2017', 122.809998],
['SBUX', '06/2012', 26.660000],
['SBUX', '07/2012', 22.639999],
['SBUX', '08/2012', 24.805000],
['SBUX', '09/2012', 25.355000],
['SBUX', '10/2012', 22.950001],
['SBUX', '11/2012', 25.934999],
['SBUX', '12/2012', 26.815001],
['SBUX', '01/2013', 28.059999],
['SBUX', '02/2013', 27.424999],
['SBUX', '03/2013', 28.475000],
['SBUX', '04/2013', 30.420000],
['SBUX', '05/2013', 31.570000],
['SBUX', '06/2013', 32.755001],
['SBUX', '07/2013', 35.645000],
['SBUX', '08/2013', 35.259998],
['SBUX', '09/2013', 38.485001],
['SBUX', '10/2013', 40.525002],
['SBUX', '11/2013', 40.730000],
['SBUX', '12/2013', 39.195000],
['SBUX', '01/2014', 35.560001],
['SBUX', '02/2014', 35.480000],
['SBUX', '03/2014', 36.689999],
['SBUX', '04/2014', 35.310001],
['SBUX', '05/2014', 36.619999],
['SBUX', '06/2014', 38.689999],
['SBUX', '07/2014', 38.840000],
['SBUX', '08/2014', 38.904999],
['SBUX', '09/2014', 37.730000],
['SBUX', '10/2014', 37.779999],
['SBUX', '11/2014', 40.605000],
['SBUX', '12/2014', 41.025002],
['SBUX', '01/2015', 43.764999],
['SBUX', '02/2015', 46.744999],
['SBUX', '03/2015', 47.349998],
['SBUX', '04/2015', 49.580002],
['SBUX', '05/2015', 51.959999],
['SBUX', '06/2015', 53.619999],
['SBUX', '07/2015', 57.930000],
['SBUX', '08/2015', 55.950001],
['SBUX', '09/2015', 56.840000],
['SBUX', '10/2015', 62.570000],
['SBUX', '11/2015', 61.389999],
['SBUX', '12/2015', 60.029999],
['SBUX', '01/2016', 60.770000],
['SBUX', '02/2016', 58.209999],
['SBUX', '03/2016', 59.700001],
['SBUX', '04/2016', 56.230000],
['SBUX', '05/2016', 54.889999],
['SBUX', '06/2016', 57.119999],
['SBUX', '07/2016', 58.049999],
['SBUX', '08/2016', 56.230000],
['SBUX', '09/2016', 54.139999],
['SBUX', '10/2016', 53.070000],
['SBUX', '11/2016', 57.970001],
['SBUX', '12/2016', 55.520000],
['SBUX', '01/2017', 55.220001],
['SBUX', '02/2017', 56.869999],
['SBUX', '03/2017', 58.389999],
['SBUX', '04/2017', 60.060001],
['SBUX', '05/2017', 60.660000],
];