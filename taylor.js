/* ===== TAYLOR SHUTTERS (ty_ namespace) ===== */
var TY_STATE={rows:[],tracks:[],tubings:[],angles:[],reverseHingeQty:0,stileWithLipQty:0,louverLockQty:0};
var ty_discPct=0;

/* Pricing tables — price PER PANEL ex. VAT */
var TY_T={
  pro_bifold:{
    W:[300,350,400,450,500,550,600,650,700,750,800,850],
    D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
    P:[
      [3537,3721,3905,4126,4309,4493,4677,null,null,null,null,null],
      [4087,4315,4544,4808,5036,5263,5491,5719,5947,6174,null,null],
      [4399,4649,4899,5185,5435,5685,5935,6185,6434,6685,6935,null],
      [4637,4910,5181,5490,5762,6034,6306,6578,6849,7122,7393,7701],
      [4913,5207,5501,5831,6125,6419,6713,7006,7301,7595,7888,8219],
      [5222,5538,5854,6207,6523,6838,7154,7470,7786,8103,8418,8770],
      [5497,5835,6173,6548,6886,7224,7562,7900,8238,8576,8914,9288],
      [5772,6133,6493,6889,7249,7609,7968,8328,8689,9049,9409,9805],
      [6082,6464,6845,7264,7646,8028,8410,8792,9174,9557,9938,10356],
      [6238,6631,7023,7453,7846,8239,8632,9025,9418,9811,10204,10634],
      [6632,7058,7484,7947,8373,8798,9225,9651,10077,10503,10929,11391],
      [6859,7297,7733,8207,8643,9081,9518,9955,10393,10830,11266,11740],
      [7134,7593,8052,8548,9006,9466,9925,10384,10843,11302,11761,12256],
      [7373,7853,8335,8851,9333,9814,10295,10776,11257,11738,12220,12737],
      [7684,8187,8690,9230,9732,10236,10739,11242,11746,12248,12751,13291]
    ]
  },
  pro_cottage:{
    W:[300,350,400,450,500,550,600,650,700,750,800,850],
    D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
    P:[
      [4042,4228,4413,4599,4784,4969,5163,null,null,null,null,null],
      [4736,4965,5194,5423,5651,5880,6117,6346,6575,6804,null,null],
      [5148,5399,5649,5901,6152,6402,6660,6911,7161,7412,7663,null],
      [5437,5710,5982,6255,6527,6800,7079,7352,7624,7897,8169,8449],
      [5783,6078,6372,6666,6961,7254,7557,7851,8144,8439,8733,9034],
      [6198,6514,6830,7146,7462,7777,8101,8417,8733,9049,9364,9688],
      [6552,6890,7228,7565,7903,8241,8586,8923,9261,9599,9936,10281],
      [6899,7258,7618,7977,8337,8696,9063,9422,9782,10141,10501,10868],
      [7313,7695,8076,8456,8838,9219,9608,9989,10370,10752,11132,11521],
      [7519,7911,8303,8695,9088,9480,9879,10271,10663,11055,11447,11847],
      [8014,8440,8864,9288,9713,10138,10570,10994,11419,11844,12268,12700],
      [8429,8875,9322,9768,10214,10660,11114,11561,12007,12453,12899,13354],
      [8776,9244,9712,10180,10648,11116,11592,12060,12528,12996,13464,13939],
      [8990,9468,9948,10426,10905,11384,11871,12349,12828,13307,13786,14273],
      [9402,9902,10403,10903,11405,11905,12413,12914,13414,13915,14415,14924]
    ]
  },
  std_bifold:{
    W:[300,350,400,450,500,550,600,650,700,750,800,850],
    D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
    P:[
      [2921,3102,3283,3501,3682,3863,4044,null,null,null,null,null],
      [3463,3688,3911,4172,4396,4621,4844,5069,5294,5517,null,null],
      [3770,4016,4262,4544,4789,5036,5281,5528,5773,6020,6265,null],
      [4005,4272,4540,4843,5112,5379,5646,5913,6182,6449,6716,7020],
      [4275,4565,4854,5179,5468,5757,6047,6337,6626,6915,7204,7530],
      [4580,4891,5202,5548,5859,6170,6481,6792,7103,7414,7725,8072],
      [4851,5183,5516,5884,6217,6550,6883,7214,7547,7880,8213,8581],
      [5121,5476,5830,6220,6575,6928,7283,7638,7991,8346,8700,9091],
      [5426,5802,6178,6589,6966,7341,7718,8093,8470,8845,9221,9632],
      [5580,5966,6352,6776,7162,7549,7936,8322,8709,9096,9483,9905],
      [5968,6387,6806,7261,7680,8100,8519,8938,9358,9777,10196,10651],
      [6191,6622,7051,7517,7948,8377,8808,9237,9668,10098,10528,10994],
      [6462,6913,7365,7853,8304,8756,9208,9660,10112,10563,11015,11502],
      [6696,7170,7643,8153,8626,9099,9572,10045,10520,10993,11466,11976],
      [7002,7497,7992,8524,9019,9514,10009,10504,10999,11494,11990,12521]
    ]
  },
  std_cottage:{
    W:[300,350,400,450,500,550,600,650,700,750,800,850],
    D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
    P:[
      [3179,3349,3517,3687,3856,4025,4202,null,null,null,null,null],
      [3812,4021,4230,4438,4647,4856,5071,5280,5489,5698,null,null],
      [4188,4417,4646,4874,5102,5331,5567,5795,6024,6252,6481,null],
      [4451,4700,4948,5197,5445,5693,5949,6197,6446,6694,6942,7198],
      [4767,5036,5304,5572,5841,6109,6384,6652,6920,7188,7457,7732],
      [5145,5433,5721,6009,6297,6585,6881,7169,7457,7745,8033,8327],
      [5468,5776,6084,6392,6700,7008,7323,7630,7938,8246,8554,8869],
      [5784,6112,6440,6767,7096,7424,7757,8085,8414,8741,9069,9404],
      [6162,6510,6858,7205,7552,7900,8254,8602,8949,9297,9645,9999],
      [6350,6708,7065,7422,7780,8137,8502,8859,9216,9574,9931,10296],
      [6802,7188,7576,7963,8350,8737,9131,9519,9906,10293,10680,11074],
      [7179,7587,7993,8400,8808,9214,9628,10035,10443,10849,11256,11670],
      [7495,7923,8349,8777,9203,9629,10063,10490,10917,11344,11771,12204],
      [7691,8128,8564,9000,9437,9874,10318,10755,11191,11628,12064,12508],
      [8066,8523,8979,9436,9892,10349,10813,11269,11726,12183,12639,13102]
    ]
  },
  faceFix:{
    L:[1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,4800,5100,5400,5700,6000,6300,6600,6900,7200],
    P:[784,941,1097,1254,1410,1568,1725,1883,2040,2194,2352,2509,2665,2822,2978,3135,3294,3450,3609,3767]
  },
  biPass:{
    L:[1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,4800,5100,5400,5700,6000,6300,6600,6900,7200],
    P:[1099,1321,1542,1762,1983,2206,2425,2647,2866,3090,3311,3533,3753,3974,4196,4416,4637,4858,5077,5296]
  },
  tubing:{types:['38x100','38x76','50x50','76x76','25x50','38x38','50x150'],prices:[826,608,576,911,430,507,1420]},
  angle:{types:['25x25','50x25','50x50','76x38','76x76'],prices:[128,190,311,352,483]},
  bracketPrice:406,reverseHinge:249,vatRate:0.15
};

/* ShutterStyle® Aluminium Barrier Security Shutter */
TY_T.style_bifold={
  W:[300,350,400,450,500,550,600,650,700,750,800,850],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  P:[
    [2784,2927,3069,3249,3391,3534,3676,null,null,null,null,null],
    [3226,3395,3563,3770,3938,4107,4275,4444,4612,4781,null,null],
    [3588,3782,3978,4211,4405,4601,4795,4990,5185,5380,5574,null],
    [3736,3938,4142,4385,4588,4791,4995,5199,5403,5606,5809,6052],
    [3989,4211,4432,4691,4913,5134,5355,5576,5797,6018,6240,6499],
    [4244,4483,4722,4999,5237,5477,5715,5954,6192,6430,6670,6946],
    [4564,4819,5075,5371,5626,5883,6139,6395,6651,6908,7164,7458],
    [4818,5092,5365,5677,5951,6225,6499,6772,7046,7320,7593,7906],
    [5072,5363,5654,5985,6276,6568,6859,7150,7441,7732,8024,8353],
    [5220,5520,5820,6159,6458,6758,7058,7358,7659,7958,8259,8597],
    [5514,5832,6150,6505,6823,7141,7458,7776,8093,8410,8729,9084],
    [5769,6104,6440,6813,7148,7483,7818,8153,8488,8823,9158,9532],
    [6089,6442,6794,7185,7538,7890,8243,8597,8949,9302,9654,10045],
    [6237,6598,6960,7359,7721,8082,8444,8805,9167,9527,9889,10289],
    [6599,6987,7374,7800,8188,8576,8963,9351,9739,10126,10513,10940]
  ]
};
TY_T.style_cottage={
  W:[300,350,400,450,500,550,600,650,700,750,800,850],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  P:[
    [3121,3251,3380,3510,3639,3769,3906,null,null,null,null,null],
    [3543,3709,3874,4039,4205,4371,4545,4710,4876,5042,null,null],
    [3923,4106,4290,4474,4657,4841,5033,5217,5400,5584,5767,null],
    [4122,4314,4506,4699,4892,5085,5285,5478,5671,5864,6056,6257],
    [4439,4649,4860,5070,5281,5491,5711,5921,6132,6343,6553,6772],
    [4755,4984,5212,5441,5670,5899,6136,6365,6593,6821,7050,7287],
    [5221,5467,5714,5960,6208,6454,6709,6956,7203,7450,7696,7951],
    [5538,5802,6067,6332,6597,6861,7134,7399,7664,7929,8193,8467],
    [5854,6137,6420,6703,6986,7269,7560,7843,8124,8407,8690,8981],
    [6044,6337,6628,6920,7211,7504,7803,8095,8388,8679,8971,9271],
    [6433,6742,7052,7362,7672,7982,8300,8610,8920,9230,9539,9857],
    [6750,7078,7406,7733,8061,8389,8726,9053,9381,9708,10037,10373],
    [7207,7552,7899,8244,8590,8936,9290,9637,9982,10328,10674,11028],
    [7405,7760,8115,8470,8824,9180,9543,9898,10252,10608,10963,11326],
    [7849,8232,8613,8995,9377,9758,10149,10531,10913,11294,11677,12067]
  ]
};

/* Hurricane MK2 Aluminium Shutters */
TY_T.hurricane_bifold={
  W:[300,350,400,450,500,550,600,650,700,750,800,850],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  extras:{stileWithLip:45,louverLock:372,reverseHinge:249},
  P:[
    [2522,2696,2869,3077,3251,3425,3598,null,null,null,null,null],
    [3036,3251,3466,3716,3931,4146,4362,4578,4793,5009,null,null],
    [3326,3562,3798,4070,4306,4542,4778,5014,5250,5486,5722,null],
    [3550,3806,4063,4356,4612,4869,5126,5383,5640,5897,6154,6446],
    [3806,4084,4363,4675,4952,5230,5508,5786,6063,6341,6620,6932],
    [4096,4395,4694,5026,5325,5623,5922,6220,6520,6818,7117,7450],
    [4353,4673,4992,5346,5665,5984,6304,6624,6943,7262,7582,7935],
    [4610,4950,5290,5665,6005,6346,6686,7026,7366,7706,8046,8422],
    [4899,5260,5621,6016,6378,6739,7100,7461,7822,8183,8545,8940],
    [5045,5416,5788,6193,6564,6937,7308,7679,8051,8422,8793,9200],
    [5413,5816,6219,6656,7058,7461,7863,8267,8669,9072,9474,9911],
    [5625,6038,6451,6899,7312,7725,8138,8551,8964,9378,9791,10238],
    [5882,6316,6750,7218,7651,8086,8520,8953,9387,9821,10255,10723],
    [6105,6559,7015,7504,7958,8413,8868,9323,9777,10232,10686,11176],
    [6396,6871,7347,7856,8332,8808,9283,9758,10234,10710,11185,11695]
  ]
};
TY_T.hurricane_cottage={
  W:[300,350,400,450,500,550,600,650,700,750,800,850],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  extras:{stileWithLip:45,louverLock:372,reverseHinge:249},
  P:[
    [2747,2916,3086,3254,3424,3593,3769,null,null,null,null,null],
    [3375,3584,3792,4001,4210,4419,4634,4843,5051,5260,null,null],
    [3747,3976,4205,4434,4662,4890,5126,5355,5584,5812,6040,null],
    [4009,4258,4506,4755,5002,5251,5507,5755,6004,6251,6500,6756],
    [4323,4592,4859,5127,5396,5664,5939,6208,6476,6744,7012,7287],
    [4698,4986,5274,5562,5850,6138,6433,6722,7010,7298,7586,7881],
    [5019,5327,5635,5943,6250,6558,6873,7181,7489,7797,8105,8420],
    [5333,5661,5988,6316,6644,6971,7306,7634,7961,8289,8616,8951],
    [5708,6056,6403,6751,7098,7445,7800,8147,8495,8842,9190,9544],
    [5894,6251,6609,6966,7324,7681,8045,8403,8760,9118,9475,9839],
    [6343,6730,7117,7504,7892,8278,8673,9059,9446,9834,10221,10615],
    [6717,7125,7532,7938,8346,8753,9167,9573,9981,10388,10794,11208],
    [7031,7458,7885,8312,8739,9166,9599,10026,10453,10879,11306,11741],
    [7225,7662,8098,8534,8971,9408,9852,10289,10726,11162,11598,12042],
    [7597,8054,8510,8967,9423,9880,10343,10799,11256,11712,12169,12633]
  ]
};

/* Thermowood® Shutters — indoor only, max width 600mm */
TY_T.thermowood_bifold={
  W:[300,350,400,450,500,550,600],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  indoorNote:'Panels in bold zone not suitable for outdoor application.',
  P:[
    [2037,2162,2286,2418,2542,2667,2790],
    [2305,2456,2608,2767,2919,3070,3222],
    [2496,2668,2839,3019,3192,3363,3536],
    [2572,2751,2930,3117,3296,3475,3654],
    [2706,2898,3091,3292,3484,3676,3869],
    [2920,3127,3333,3547,3753,3959,4166],
    [3054,3275,3494,3722,3942,4162,4382],
    [3189,3422,3656,3897,4130,4364,4597],
    [3403,3650,3898,4153,4400,4647,4894],
    [3480,3734,3988,4249,4504,4758,5012],
    [3671,3945,4219,4502,4777,5051,5326],
    [3885,4174,4462,4758,5046,5334,null],
    [4020,4321,4623,4933,5234,null,null],
    [4096,4404,4713,5029,null,null,null],
    [4287,4616,4945,null,null,null,null]
  ]
};
TY_T.thermowood_cottage={
  W:[300,350,400,450,500,550,600],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  indoorNote:'Panels in bold zone not suitable for outdoor application.',
  P:[
    [2024,2135,2245,2356,2467,2577,2697],
    [2376,2518,2659,2802,2943,3085,3235],
    [2633,2798,2963,3128,3294,3458,3633],
    [2737,2910,3083,3255,3429,3602,3784],
    [2913,3101,3291,3479,3667,3855,4053],
    [3274,3479,3683,3886,4090,4294,4507],
    [3459,3680,3899,4118,4338,4557,4786],
    [3821,4056,4291,4526,4761,4996,5241],
    [3997,4247,4498,4749,5000,5251,5510],
    [4101,4360,4618,4877,5136,5393,5661],
    [4358,4639,4921,5203,5485,5767,6058],
    [4718,5016,5313,5611,5908,6207,null],
    [4895,5208,5521,5834,6147,null,null],
    [5008,5329,5649,5971,null,null,null],
    [5256,5600,5945,null,null,null,null]
  ]
};

/* Timber Wood Shutters — W max 750mm, price per panel, Z/L frames included */
/* Light colours: Pure White, Satin White, Cream, Grey, Taupe */
TY_T.timber_light={
  W:[300,350,400,450,500,550,600,650,700,750],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  solidExtNote:'Add 25% for Solid Timber External (African Mahogany / Meranti).',
  P:[
    [1170,1365,1560,1755,1950,2145,2340,2535,2730,2925],
    [1710,1995,2280,2565,2850,3135,3420,3705,3990,4275],
    [2001,2335,2668,3002,3335,3669,4002,4336,4669,5003],
    [2175,2538,2900,3263,3625,3988,4350,4713,5075,5438],
    [2352,2744,3136,3528,3920,4312,4704,5096,5488,5880],
    [2604,3038,3472,3906,4340,4774,5208,5642,6076,6510],
    [2652,3094,3536,3978,4420,4862,5304,5746,6188,6630],
    [2886,3367,3848,4329,4810,5291,5772,6253,6734,7215],
    [3120,3640,4160,4680,5200,5720,6240,6760,7280,7800],
    [3276,3822,4368,4914,5460,6006,6552,7098,7644,8190],
    [3588,4186,4784,5382,5980,6578,7176,7774,8372,8970],
    [3822,4459,5096,5733,6370,7007,7644,8281,8918,9555],
    [4056,4732,5408,6084,6760,7436,8112,8788,9464,10140],
    [4212,4914,5616,6318,7020,7722,8424,9126,9828,10530],
    [4524,5278,6032,6786,7540,8294,9048,9802,10556,11310]
  ]
};
/* Dark colours: Anthracite, Black, Beech, Honey, Walnut, Mahogany, Java */
TY_T.timber_dark={
  W:[300,350,400,450,500,550,600,650,700,750],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  solidExtNote:'Add 25% for Solid Timber External (African Mahogany / Meranti).',
  P:[
    [1268,1479,1690,1901,2113,2324,2535,2746,2958,3169],
    [1853,2161,2470,2779,3088,3396,3705,4014,4323,4631],
    [2174,2536,2898,3260,3623,3985,4347,4709,5072,5434],
    [2363,2756,3150,3544,3938,4331,4725,5119,5513,5906],
    [2562,2989,3416,3843,4270,4697,5124,5551,5978,6405],
    [2837,3309,3782,4255,4728,5200,5673,6146,6619,7091],
    [2907,3392,3876,4361,4845,5330,5814,6299,6783,7268],
    [3164,3691,4218,4745,5273,5800,6327,6854,7382,7909],
    [3420,3990,4560,5130,5700,6270,6840,7410,7980,8550],
    [3591,4190,4788,5387,5985,6584,7182,7781,8379,8978],
    [3933,4589,5244,5900,6555,7211,7866,8522,9177,9833],
    [4190,4888,5586,6284,6983,7681,8379,9077,9776,10474],
    [4446,5187,5928,6669,7410,8151,8892,9633,10374,11115],
    [4617,5387,6156,6926,7695,8465,9234,10004,10773,11543],
    [4959,5786,6612,7439,8265,9092,9918,10745,11571,12398]
  ]
};
/* Shaped Openings and Custom Colours */
TY_T.timber_custom={
  W:[300,350,400,450,500,550,600,650,700,750],
  D:[650,950,1150,1250,1400,1550,1700,1850,2000,2100,2300,2450,2600,2700,2900],
  solidExtNote:'Add 25% for Solid Timber External (African Mahogany / Meranti).',
  P:[
    [1365,1593,1820,2048,2275,2503,2730,2958,3185,3413],
    [1995,2328,2660,2993,3325,3658,3990,4323,4655,4988],
    [2415,2818,3220,3623,4025,4428,4830,5233,5635,6038],
    [2625,3063,3500,3938,4375,4813,5250,5688,6125,6563],
    [2856,3332,3808,4284,4760,5236,5712,6188,6664,7140],
    [3162,3689,4216,4743,5270,5797,6324,6851,7378,7905],
    [3162,3689,4216,4743,5270,5797,6324,6851,7378,7905],
    [3441,4015,4588,5162,5735,6309,6882,7456,8029,8603],
    [3720,4340,4960,5580,6200,6820,7440,8060,8680,9300],
    [3906,4557,5208,5859,6510,7161,7812,8463,9114,9765],
    [4278,4991,5704,6417,7130,7843,8556,9269,9982,10695],
    [4557,5317,6076,6836,7595,8355,9114,9874,10633,11393],
    [4836,5642,6448,7254,8060,8866,9672,10478,11284,12090],
    [5022,5859,6696,7533,8370,9207,10044,10881,11718,12555],
    [5394,6293,7192,8091,8990,9889,10788,11687,12586,13485]
  ]
};

TY_T.bifold=TY_T.pro_bifold; /* legacy alias */

var TY_PRODUCTS={
  pro_bifold:'ShutterGuard® PRO — Bi-Fold',
  pro_cottage:'ShutterGuard® PRO — Cottage',
  std_bifold:'ShutterGuard® Standard — Bi-Fold',
  std_cottage:'ShutterGuard® Standard — Cottage',
  style_bifold:'ShutterStyle® Aluminium — Bi-Fold',
  style_cottage:'ShutterStyle® Aluminium — Cottage',
  hurricane_bifold:'Hurricane MK2 — Bi-Fold',
  hurricane_cottage:'Hurricane MK2 — Cottage',
  thermowood_bifold:'Thermowood® — Bi-Fold',
  thermowood_cottage:'Thermowood® — Cottage',
  timber_light:'Timber Wood — Light (White/Cream/Grey/Taupe)',
  timber_dark:'Timber Wood — Dark (Anthracite/Black/Beech/Honey/Walnut)',
  timber_custom:'Timber Wood — Shaped / Custom Colour'
};

function ty_panelLookup(w,d,prod){
  var tbl=TY_T[prod]||TY_T.pro_bifold;
  var W=tbl.W,D=tbl.D,P=tbl.P;
  var wi=-1,di=-1;
  for(var j=0;j<W.length;j++){if(W[j]>=w){wi=j;break;}}
  for(var k=0;k<D.length;k++){if(D[k]>=d){di=k;break;}}
  if(wi<0||di<0)return {price:null,rw:null,rd:null,oor:true};
  var price=P[di][wi];
  return {price:price||null,rw:W[wi],rd:D[di],oor:!price};
}

function ty_trackLookup(type,len){
  var tbl=type==='faceFix'?TY_T.faceFix:TY_T.biPass;
  for(var j=0;j<tbl.L.length;j++){if(tbl.L[j]>=len)return {price:tbl.P[j],rl:tbl.L[j]};}
  return {price:null,rl:null};
}

function ty_addRow(){
  var insertAt=TY_STATE.rows.length;
  for(var i=0;i<TY_STATE.rows.length;i++){if(!TY_STATE.rows[i].collapsed){insertAt=i+1;break;}}
  TY_STATE.rows.forEach(function(r){r.collapsed=true;});
  TY_STATE.rows.splice(insertAt,0,{id:Date.now(),loc:'',product:'pro_bifold',width:0,drop:0,qty:1,fixType:'reveal',collapsed:false});
  ty_render();
}
function ty_setFixType(i,code){TY_STATE.rows[i].fixType=code===0?'reveal':'faceFix';ty_render();}
function ty_removeRow(i){TY_STATE.rows.splice(i,1);ty_render();}
function ty_dupRow(i){
  var s=TY_STATE.rows[i];
  var d=JSON.parse(JSON.stringify(s));
  d.loc=(s.loc||'')+(s.loc?' (copy)':'copy');
  d.collapsed=false;
  TY_STATE.rows.forEach(function(r){r.collapsed=true;});
  TY_STATE.rows.splice(i+1,0,d);
  ty_render();
}
function ty_addTrack(){TY_STATE.tracks.push({type:'faceFix',length:0,numTracks:2});ty_render();}
function ty_removeTrack(i){TY_STATE.tracks.splice(i,1);ty_render();}
function ty_setTrackType(i,code){TY_STATE.tracks[i].type=code===0?'faceFix':'biPass';ty_render();}
function ty_addTubing(){TY_STATE.tubings.push({typeIdx:0,metres:0});ty_render();}
function ty_removeTubing(i){TY_STATE.tubings.splice(i,1);ty_render();}
function ty_addAngle(){TY_STATE.angles.push({typeIdx:0,metres:0});ty_render();}
function ty_removeAngle(i){TY_STATE.angles.splice(i,1);ty_render();}
function ty_clrForm(){
  TY_STATE.rows=[];TY_STATE.tracks=[];TY_STATE.tubings=[];TY_STATE.angles=[];
  TY_STATE.reverseHingeQty=0;TY_STATE.stileWithLipQty=0;TY_STATE.louverLockQty=0;
  ty_discPct=0;
  var dv=document.getElementById('ty_discVal');if(dv)dv.textContent='0%';
  var di=document.getElementById('ty_discInp');if(di)di.value=0;
  var hq=document.getElementById('ty_hingeQty');if(hq)hq.value=0;
  var sq=document.getElementById('ty_stileQty');if(sq)sq.value=0;
  var lq=document.getElementById('ty_louverQty');if(lq)lq.value=0;
  var nt=document.getElementById('ty_notes');if(nt)nt.value='';
  ['ty_c_nm','ty_c_pn','ty_c_cl','ty_c_em','ty_c_ad','ty_c_md'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
  ty_render();
}

function ty_render(){
  var rc=document.getElementById('ty_rows_container');
  var re=document.getElementById('ty_rows_empty');
  var tc=document.getElementById('ty_tracks_container');
  var te=document.getElementById('ty_tracks_empty');
  var uc=document.getElementById('ty_tubings_container');
  var ue=document.getElementById('ty_tubings_empty');
  var ac=document.getElementById('ty_angles_container');
  var ae=document.getElementById('ty_angles_empty');
  if(!rc)return;
  var _INP='width:100%;box-sizing:border-box;padding:6px 8px;font-size:13px;border:1.5px solid #ddd;border-radius:6px;background:#fff';
  var _SEL=_INP+';background:#fff url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27%3E%3Cpath d=%27M1 1l4 4 4-4%27 stroke=%27%23999%27 fill=%27none%27 stroke-width=%271.5%27/%3E%3C/svg%3E") no-repeat right 8px center;padding-right:22px';

  /* ── Panel rows ── */
  if(TY_STATE.rows.length===0){rc.innerHTML='';if(re)re.style.display='';}
  else{
    if(re)re.style.display='none';
    var html='';
    for(var i=0;i<TY_STATE.rows.length;i++){
      var r=TY_STATE.rows[i];
      var prod=r.product||'pro_bifold';
      var _panels=r.qty||1;
      var _panelW=r.width?Math.round(r.width/_panels):0;
      var res=(r.width&&r.drop)?ty_panelLookup(_panelW,r.drop,prod):{price:null,rw:null,rd:null};
      var unitPr=res.price;
      var _fx=r.fixType||'reveal';
      var _ffRes=(_fx==='faceFix'&&r.width)?ty_trackLookup('faceFix',r.width):{price:null,rl:null};
      var _ffPrice=_ffRes.price||0;
      var total=unitPr!=null?(unitPr*_panels+_ffPrice):null;
      var _letter=String.fromCharCode(65+i);
      var _prodLabel=(TY_PRODUCTS[prod]||prod).toUpperCase();
      var _isBifold=prod.indexOf('bifold')!==-1&&prod.indexOf('thermowood')===-1;
      var bipassWarn=(_isBifold&&res.rw&&res.rw>=750)?'<div style="background:#fff3cd;border:1.5px solid #e0a800;border-radius:6px;padding:8px 10px;margin-top:4px;display:flex;align-items:flex-start;gap:8px"><span style="font-size:15px;flex-shrink:0">&#9888;&#65039;</span><div><div style="font-size:12px;font-weight:700;color:#7d5a00">BI-PASS TRACK REQUIRED</div><div style="font-size:11px;color:#7d5a00;margin-top:2px">Panel width '+res.rw+'mm is in the bolded zone — Bi-Pass track only. Face Fix not applicable for this size.</div></div></div>':'';
      var tbl=TY_T[prod]||TY_T.pro_bifold;
      var indoorWarn=tbl.indoorNote?'<div style="font-size:10px;color:#8b6914;margin-top:4px;background:#fff8e1;padding:4px 6px;border-radius:4px">&#9888; '+tbl.indoorNote+'</div>':'';
      var rorText='';
      if(r.width&&r.drop&&_panelW){
        var _calcNote='Panel width: '+_panelW+'mm ('+r.width+'mm ÷ '+_panels+')';
        var _roundNote='';
        if(res.rw&&res.rw!==_panelW)_roundNote=' → rounded to '+res.rw+'mm';
        if(res.rd&&res.rd!==r.drop)_roundNote+=(res.rw&&res.rw!==_panelW?', ':' → ')+'drop rounded to '+res.rd+'mm';
        rorText='<div style="font-size:10px;color:#888;margin-top:3px">'+_calcNote+_roundNote+'</div>';
      }
      html+='<div style="border:1px solid #eee;border-radius:8px;padding:10px;margin-bottom:8px;background:#fafaf8">';
      html+='<div style="font-size:10px;font-weight:700;color:#888;letter-spacing:.6px;margin-bottom:6px">OPENING <span style="color:#E8461E">'+_letter+'</span> · <span style="color:#E8461E">'+_prodLabel+'</span></div>';
      html+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">';
      html+='<input placeholder="Location / Room" value="'+(r.loc||'')+'" style="flex:1;min-width:0;padding:7px 10px;font-size:13px;border:1.5px solid #ddd;border-radius:6px;background:#fff" oninput="TY_STATE.rows['+i+'].loc=this.value">';
      html+='<div style="font-size:13px;font-weight:800;color:'+(total!=null?'#E8461E':'#ccc')+';white-space:nowrap;flex-shrink:0">'+(total!=null?'R '+total.toLocaleString('en-ZA'):'—')+'</div>';
      html+='<button onclick="TY_STATE.rows['+i+'].collapsed=!TY_STATE.rows['+i+'].collapsed;ty_render()" style="background:none;border:none;font-size:14px;cursor:pointer;padding:2px 4px;flex-shrink:0;color:#999">'+(r.collapsed?'&#9654;':'&#9660;')+'</button>';
      html+='</div>';
      if(!r.collapsed){
        var _fx=r.fixType||'reveal';
        html+='<div style="margin-bottom:8px"><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Fix Type</label>';
        html+='<div style="display:grid;grid-template-columns:1fr 1fr;border:1.5px solid #ddd;border-radius:6px;overflow:hidden">';
        html+='<button type="button" onclick="ty_setFixType('+i+',0)" style="padding:7px;font-size:11px;font-weight:600;border:none;cursor:pointer;background:'+(_fx==='reveal'?'#4A4A4A':'#fff')+';color:'+(_fx==='reveal'?'#fff':'#666')+'">Reveal Fix</button>';
        html+='<button type="button" onclick="ty_setFixType('+i+',1)" style="padding:7px;font-size:11px;font-weight:600;border:none;cursor:pointer;background:'+(_fx==='faceFix'?'#4A4A4A':'#fff')+';color:'+(_fx==='faceFix'?'#fff':'#666')+';border-left:1px solid #ddd">Face Fix</button>';
        html+='</div></div>';
        html+='<div style="margin-bottom:8px"><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Product</label>';
        html+='<select onchange="TY_STATE.rows['+i+'].product=this.value;ty_render()" style="'+_SEL+'">';
        var _pk=Object.keys(TY_PRODUCTS);
        for(var pi=0;pi<_pk.length;pi++){html+='<option value="'+_pk[pi]+'"'+(prod===_pk[pi]?' selected':'')+'>'+TY_PRODUCTS[_pk[pi]]+'</option>';}
        html+='</select></div>';
        html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">';
        html+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Opening Width — total (mm)</label>';
        html+='<input type="number" min="0" value="'+(r.width||'')+'" placeholder="e.g. 2400" style="'+_INP+'" oninput="TY_STATE.rows['+i+'].width=parseFloat(this.value)||0" onblur="ty_render()"></div>';
        html+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Opening Drop — total (mm)</label>';
        html+='<input type="number" min="0" value="'+(r.drop||'')+'" placeholder="e.g. 2000" style="'+_INP+'" oninput="TY_STATE.rows['+i+'].drop=parseFloat(this.value)||0" onblur="ty_render()"></div>';
        html+='</div>';
        html+='<div style="display:grid;grid-template-columns:auto 1fr;align-items:center;gap:8px;margin-bottom:8px">';
        html+='<label style="font-size:10px;color:#666;font-weight:600;white-space:nowrap">No. of Panels</label>';
        html+='<input type="number" min="1" step="1" value="'+(r.qty||1)+'" style="'+_INP+'" oninput="TY_STATE.rows['+i+'].qty=parseInt(this.value)||1" onblur="ty_render()"></div>';
        if(rorText||bipassWarn||indoorWarn)html+='<div style="background:#f8f7f5;border-radius:5px;padding:6px 8px;margin-bottom:6px">'+rorText+bipassWarn+indoorWarn+'</div>';
        if(res.oor){html+='<div style="font-size:13px;font-weight:800;color:#999">Out of range — consult factory</div>';}
        else if(unitPr!=null){
          html+='<div style="background:#f0eeec;border-radius:6px;padding:8px 10px">';
          html+='<div style="font-size:11px;color:#888;margin-bottom:2px">R '+unitPr.toLocaleString('en-ZA')+' × '+_panels+' panels ('+_panelW+'mm each)</div>';
          if(_ffPrice>0)html+='<div style="font-size:11px;color:#888;margin-bottom:2px">Face Fix Track ('+(_ffRes.rl||'')+'mm): R '+_ffPrice.toLocaleString('en-ZA')+'</div>';
          html+='<div style="font-size:15px;font-weight:800;color:#E8461E">R '+total.toLocaleString('en-ZA')+' ex. VAT</div>';
          html+='</div>';
        }
        html+='<div style="display:flex;gap:8px;margin-top:10px;padding-top:8px;border-top:1px solid #e8e8e8">';
        html+='<button class="btn" style="background:#e8e5df;color:#333;flex:1;padding:8px;font-size:12px" onclick="ty_dupRow('+i+')">Duplicate</button>';
        html+='<button class="btn" style="background:#e8d5d5;color:#8b3a3a;flex:1;padding:8px;font-size:12px" onclick="ty_removeRow('+i+')">Delete</button>';
        html+='</div>';
      }
      html+='</div>';
    }
    rc.innerHTML=html;
  }

  /* ── Track rows ── */
  if(TY_STATE.tracks.length===0){tc.innerHTML='';if(te)te.style.display='';}
  else{
    if(te)te.style.display='none';
    var thtml='';
    for(var ti=0;ti<TY_STATE.tracks.length;ti++){
      var tr=TY_STATE.tracks[ti];
      var tlr=tr.length?ty_trackLookup(tr.type,tr.length):{price:null,rl:null};
      var numTr=tr.numTracks||2;
      var bpBase=tlr.price;
      var bpTotal=null,bpBrackets=0,bpBracketsTotal=0;
      if(tr.type==='biPass'&&bpBase!=null){bpTotal=bpBase*(numTr/2);bpBrackets=tr.length?Math.ceil(tr.length/600):0;bpBracketsTotal=bpBrackets*TY_T.bracketPrice;}
      var ffTotal=tr.type==='faceFix'&&tlr.price!=null?tlr.price:null;
      var lineTotal=tr.type==='faceFix'?ffTotal:(bpTotal!=null?bpTotal+bpBracketsTotal:null);
      var rlText=tlr.rl&&tlr.rl!==tr.length?' (rounded to '+tlr.rl+'mm)':'';
      thtml+='<div style="border:1px solid #eee;border-radius:8px;padding:10px;margin-bottom:8px;background:#fafaf8">';
      thtml+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">';
      thtml+='<div style="display:grid;grid-template-columns:1fr 1fr;border:1.5px solid #ddd;border-radius:6px;overflow:hidden;flex:1">';
      thtml+='<button type="button" onclick="ty_setTrackType('+ti+',0)" style="padding:7px;font-size:11px;font-weight:600;border:none;cursor:pointer;background:'+(tr.type==='faceFix'?'#4A4A4A':'#fff')+';color:'+(tr.type==='faceFix'?'#fff':'#666')+'">Face Fix</button>';
      thtml+='<button type="button" onclick="ty_setTrackType('+ti+',1)" style="padding:7px;font-size:11px;font-weight:600;border:none;cursor:pointer;background:'+(tr.type==='biPass'?'#4A4A4A':'#fff')+';color:'+(tr.type==='biPass'?'#fff':'#666')+';border-left:1px solid #ddd">Bi-Pass (sliding)</button>';
      thtml+='</div>';
      thtml+='<button onclick="ty_removeTrack('+ti+')" style="background:none;border:none;color:#ccc;font-size:18px;cursor:pointer;padding:2px 4px">&#10005;</button>';
      thtml+='</div>';
      thtml+='<div style="display:grid;grid-template-columns:'+(tr.type==='biPass'?'1fr 1fr':'1fr')+';gap:8px;margin-bottom:6px">';
      thtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Length (mm)'+rlText+'</label>';
      thtml+='<input type="number" min="0" value="'+(tr.length||'')+'" placeholder="e.g. 3000" style="'+_INP+'" oninput="TY_STATE.tracks['+ti+'].length=parseFloat(this.value)||0" onblur="ty_render()"></div>';
      if(tr.type==='biPass'){
        thtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">No. of Tracks (2 = 1 set)</label>';
        thtml+='<input type="number" min="2" step="2" value="'+numTr+'" style="'+_INP+'" oninput="TY_STATE.tracks['+ti+'].numTracks=parseInt(this.value)||2" onblur="ty_render()"></div>';
      }
      thtml+='</div>';
      if(lineTotal!=null){
        thtml+='<div style="background:#f0eeec;border-radius:6px;padding:8px 10px;font-size:12px;color:#666">';
        if(tr.type==='biPass'){
          thtml+='<div>Track: R '+bpBase.toLocaleString('en-ZA')+' × '+(numTr/2)+' = R '+bpTotal.toLocaleString('en-ZA')+'</div>';
          thtml+='<div>Face Fix Brackets: '+bpBrackets+' × R '+TY_T.bracketPrice+' = R '+bpBracketsTotal.toLocaleString('en-ZA')+'</div>';
        }
        thtml+='<div style="font-weight:800;color:#E8461E;font-size:14px;margin-top:4px">R '+lineTotal.toLocaleString('en-ZA')+' ex. VAT</div>';
        thtml+='</div>';
      } else if(tr.length){thtml+='<div style="font-size:13px;color:#999;font-weight:700">Out of range</div>';}
      thtml+='</div>';
    }
    tc.innerHTML=thtml;
  }

  /* ── Tubing rows ── */
  if(TY_STATE.tubings.length===0){uc.innerHTML='';if(ue)ue.style.display='';}
  else{
    if(ue)ue.style.display='none';
    var uhtml='';
    for(var ui=0;ui<TY_STATE.tubings.length;ui++){
      var ub=TY_STATE.tubings[ui];
      var uprm=TY_T.tubing.prices[ub.typeIdx];
      var utot=ub.metres?uprm*ub.metres:null;
      var uOpts='';TY_T.tubing.types.forEach(function(t,idx){uOpts+='<option value="'+idx+'"'+(ub.typeIdx===idx?' selected':'')+'>'+t+'</option>';});
      uhtml+='<div style="border:1px solid #eee;border-radius:8px;padding:10px;margin-bottom:8px;background:#fafaf8">';
      uhtml+='<div style="display:grid;grid-template-columns:1fr 100px auto;gap:8px;align-items:end">';
      uhtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Type — R'+uprm+'/m</label>';
      uhtml+='<select onchange="TY_STATE.tubings['+ui+'].typeIdx=parseInt(this.value);ty_render()" style="'+_SEL+'">'+uOpts+'</select></div>';
      uhtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Metres</label>';
      uhtml+='<input type="number" min="0" step="0.1" value="'+(ub.metres||'')+'" placeholder="m" style="'+_INP+'" oninput="TY_STATE.tubings['+ui+'].metres=parseFloat(this.value)||0" onblur="ty_render()"></div>';
      uhtml+='<button onclick="ty_removeTubing('+ui+')" style="background:none;border:none;color:#ccc;font-size:18px;cursor:pointer;padding:2px 4px;margin-bottom:2px">&#10005;</button>';
      uhtml+='</div>';
      if(utot!=null)uhtml+='<div style="font-size:14px;font-weight:800;color:#E8461E;margin-top:6px">R '+utot.toLocaleString('en-ZA')+' ex. VAT</div>';
      uhtml+='</div>';
    }
    uc.innerHTML=uhtml;
  }

  /* ── Angle rows ── */
  if(TY_STATE.angles.length===0){ac.innerHTML='';if(ae)ae.style.display='';}
  else{
    if(ae)ae.style.display='none';
    var ahtml='';
    for(var ai2=0;ai2<TY_STATE.angles.length;ai2++){
      var ang=TY_STATE.angles[ai2];
      var aprm=TY_T.angle.prices[ang.typeIdx];
      var atot=ang.metres?aprm*ang.metres:null;
      var aOpts='';TY_T.angle.types.forEach(function(t,idx){aOpts+='<option value="'+idx+'"'+(ang.typeIdx===idx?' selected':'')+'>'+t+'</option>';});
      ahtml+='<div style="border:1px solid #eee;border-radius:8px;padding:10px;margin-bottom:8px;background:#fafaf8">';
      ahtml+='<div style="display:grid;grid-template-columns:1fr 100px auto;gap:8px;align-items:end">';
      ahtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Type — R'+aprm+'/m</label>';
      ahtml+='<select onchange="TY_STATE.angles['+ai2+'].typeIdx=parseInt(this.value);ty_render()" style="'+_SEL+'">'+aOpts+'</select></div>';
      ahtml+='<div><label style="font-size:10px;color:#666;display:block;margin-bottom:2px;font-weight:600">Metres</label>';
      ahtml+='<input type="number" min="0" step="0.1" value="'+(ang.metres||'')+'" placeholder="m" style="'+_INP+'" oninput="TY_STATE.angles['+ai2+'].metres=parseFloat(this.value)||0" onblur="ty_render()"></div>';
      ahtml+='<button onclick="ty_removeAngle('+ai2+')" style="background:none;border:none;color:#ccc;font-size:18px;cursor:pointer;padding:2px 4px;margin-bottom:2px">&#10005;</button>';
      ahtml+='</div>';
      if(atot!=null)ahtml+='<div style="font-size:14px;font-weight:800;color:#E8461E;margin-top:6px">R '+atot.toLocaleString('en-ZA')+' ex. VAT</div>';
      ahtml+='</div>';
    }
    ac.innerHTML=ahtml;
  }
  ty_renderTotals();
}

function ty_renderTotals(){
  var tc=document.getElementById('ty_totals_container');if(!tc)return;
  var panelEx=0,trackEx=0,tubingEx=0,angleEx=0,hingeEx=0;
  TY_STATE.rows.forEach(function(r){
    if(!r.width||!r.drop)return;
    var _p=r.qty||1;
    var _pw=Math.round(r.width/_p);
    var res=ty_panelLookup(_pw,r.drop,r.product||'pro_bifold');
    if(res.price)panelEx+=res.price*_p;
    if((r.fixType||'reveal')==='faceFix'){var ffr=ty_trackLookup('faceFix',r.width);if(ffr.price)trackEx+=ffr.price;}
  });
  TY_STATE.tracks.forEach(function(tr){
    if(!tr.length)return;
    var tlr=ty_trackLookup(tr.type,tr.length);
    if(tlr.price==null)return;
    if(tr.type==='faceFix'){trackEx+=tlr.price;}
    else{var nt=tr.numTracks||2;trackEx+=tlr.price*(nt/2);var br=Math.ceil(tr.length/600);trackEx+=br*TY_T.bracketPrice;}
  });
  TY_STATE.tubings.forEach(function(ub){if(ub.metres)tubingEx+=TY_T.tubing.prices[ub.typeIdx]*ub.metres;});
  TY_STATE.angles.forEach(function(ang){if(ang.metres)angleEx+=TY_T.angle.prices[ang.typeIdx]*ang.metres;});
  hingeEx=(TY_STATE.reverseHingeQty||0)*TY_T.reverseHinge;
  var stileEx=(TY_STATE.stileWithLipQty||0)*45;
  var louverEx=(TY_STATE.louverLockQty||0)*372;
  var subtotal=panelEx+trackEx+tubingEx+angleEx+hingeEx+stileEx+louverEx;
  var disc=ty_discPct>0?subtotal*(ty_discPct/100):0;
  var afterDisc=subtotal-disc;
  var vat=afterDisc*TY_T.vatRate;
  var grand=afterDisc+vat;
  window._mq_taylor_total=grand;
  var fmt=function(n){return n.toLocaleString('en-ZA',{minimumFractionDigits:2,maximumFractionDigits:2});};
  var _SL='<div style="display:flex;justify-content:space-between;align-items:baseline;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.08)">';
  var _LB='<span style="font-size:12px;color:#aaa">';var _VL='<span style="font-size:13px;color:#fff;font-weight:600">';
  var h='';
  if(panelEx)h+=_SL+_LB+'Panels</span>'+_VL+'R '+fmt(panelEx)+'</span></div>';
  if(trackEx)h+=_SL+_LB+'Track</span>'+_VL+'R '+fmt(trackEx)+'</span></div>';
  if(tubingEx)h+=_SL+_LB+'Tubing</span>'+_VL+'R '+fmt(tubingEx)+'</span></div>';
  if(angleEx)h+=_SL+_LB+'Angle</span>'+_VL+'R '+fmt(angleEx)+'</span></div>';
  if(hingeEx)h+=_SL+_LB+'Reverse Hinges</span>'+_VL+'R '+fmt(hingeEx)+'</span></div>';
  if(stileEx)h+=_SL+_LB+'Stile with Lip</span>'+_VL+'R '+fmt(stileEx)+'</span></div>';
  if(louverEx)h+=_SL+_LB+'Louver Lock</span>'+_VL+'R '+fmt(louverEx)+'</span></div>';
  if(disc>0)h+=_SL+_LB+'Discount ('+ty_discPct+'%)</span>'+_VL+'- R '+fmt(disc)+'</span></div>';
  h+=_SL+_LB+'Subtotal ex. VAT</span>'+_VL+'R '+fmt(afterDisc)+'</span></div>';
  h+=_SL+_LB+'VAT (15%)</span>'+_VL+'R '+fmt(vat)+'</span></div>';
  h+='<div style="display:flex;justify-content:space-between;align-items:baseline;padding:8px 0 0"><span style="font-size:13px;color:#fff;font-weight:700">TOTAL incl. VAT</span><span style="font-size:20px;color:#E8461E;font-weight:900">R '+fmt(grand)+'</span></div>';
  tc.innerHTML=h;
}
