/* ── Outdoor Measure (od_ namespace) ── */
// ===== OUTDOOR PRICING TABLES =====
// Width/Drop axis arrays
const FH_W=[900,1200,1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,4800,5100,5400,5700,5800];
const FH_D=[1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000,3200,3400,3600,3800,4000];
const SX_W=[900,1200,1500,1800,2100,2400,2700,3000,3300,3600,3900,4200,4500,4800,5100];
const SX_D=[1000,1200,1400,1600,1800,2000,2200,2400,2600,2800,3000];

// FREE HANG — Range A: Dayscreen
const FH_A=[
[5208,5656,6150,6668,7121,7604,8052,8414,8967,9426,9893,10362,10826,11290,11753,12220,12681,13144],
[5310,5776,6302,6858,7332,7839,8310,8688,9273,9766,10259,10750,11237,11731,12218,12716,13204,13695],
[5401,5895,6453,7040,7539,8082,8572,8959,9585,10104,10618,11138,11648,12167,12687,13199,13718,14238],
[5495,6016,6605,7224,7748,8317,8830,9233,9899,10438,10984,11528,12065,12609,13150,13689,14232,14772],
[5597,6135,6753,7411,7962,8556,9094,9502,10205,10780,11341,11915,12475,13050,13619,14185,14753,15321],
[5693,6264,6906,7598,8168,8786,9352,9772,10518,11110,11705,12300,12894,13486,14083,14676,15269,15864],
[5793,6382,7058,7781,8378,9033,9615,10039,10825,11447,12065,12690,13307,13929,14544,15167,15784,16402],
[5895,6501,7209,7968,8588,9263,9874,10318,11136,11785,12430,13078,13720,14370,15015,15661,16304,16950],
[5983,6620,7358,8150,8800,9508,10133,10588,11451,12117,12787,13466,14132,14803,15477,16152,16822,17494],
[6082,6739,7515,8335,9015,9744,10400,10858,11756,12453,13152,13854,14550,15247,15945,16635,17336,18035],
[6183,6864,7661,8528,9215,9985,10656,11131,12069,12793,13513,14242,14960,15687,16409,17130,17856,18585],
[6278,6985,7815,8709,9426,10219,10919,11405,12376,13127,13877,14629,15376,16126,16870,17623,18373,19129],
[6378,7105,7965,8893,9635,10459,11176,11675,12685,13463,14242,15017,15793,16565,17333,18118,18890,19671],
[6476,7223,8118,9073,9850,10703,11435,11946,12993,13798,14605,15406,16210,17004,17795,18611,19407,20214],
[6578,7342,8272,9257,10063,10943,11698,12216,13302,14134,14971,15793,16626,17443,18257,19104,19924,20757],
[6679,7460,8418,9435,10274,11186,11953,12488,13610,14467,15336,16181,17043,17882,18719,19597,20441,21299]
];
// FREE HANG — Range B: Mode + SheerWeave 4500
const FH_B=[
[5320,5818,6379,6971,7475,8019,8511,8894,9532,10048,10568,11090,11611,12126,12646,13169,13685,14200],
[5457,5983,6587,7229,7761,8341,8869,9268,9954,10509,11068,11621,12176,12731,13283,13844,14398,14951],
[5588,6148,6796,7482,8050,8671,9227,9642,10381,10976,11561,12154,12739,13334,13926,14512,15104,15696],
[5721,6313,7003,7733,8336,8996,9582,10015,10811,11434,12062,12688,13311,13936,14562,15186,15809,16433],
[5858,6477,7206,7990,8626,9325,9945,10387,11231,11898,12554,13219,13875,14539,15204,15862,16523,17185],
[5988,6650,7417,8245,8914,9645,10298,10755,11660,12356,13053,13749,14447,15143,15841,16537,17233,17928],
[6122,6812,7623,8498,9199,9979,10657,11126,12082,12817,13548,14283,15013,15746,16475,17211,17938,18668],
[6260,6977,7831,8753,9486,10298,11013,11502,12509,13279,14047,14814,15581,16349,17120,17886,18652,19419],
[6388,7141,8039,9006,9775,10630,11371,11876,12939,13739,14539,15347,16146,16952,17754,18560,19362,20164],
[6522,7306,8250,9257,10065,10955,11734,12246,13360,14199,15038,15880,16718,17554,18396,19228,20069,20908],
[6658,7475,8452,9517,10348,11283,12087,12622,13788,14660,15533,16410,17281,18159,19032,19904,20781,21660],
[6791,7643,8660,9769,10635,11606,12444,12994,14211,15123,16032,16942,17853,18764,19668,20578,21491,22404],
[6927,7805,8869,10020,10924,11937,12802,13366,14635,15587,16530,17477,18424,19370,20303,21254,22200,23147],
[7063,7969,9076,10271,11216,12266,13157,13738,15059,16050,17029,18010,18995,19975,20939,21930,22909,23891],
[7199,8133,9285,10522,11506,12596,13515,14109,15483,16514,17529,18542,19566,20579,21574,22604,23620,24635],
[7335,8297,9494,10774,11797,12925,13871,14481,15906,16975,18027,19076,20137,21185,22210,23279,24329,25378]
];
// FREE HANG — Range C: Mode Zero + SheerWeave 4901
const FH_C=[
[5535,6083,6714,7382,7935,8545,9088,9494,10218,10795,11371,11945,12520,13095,13673,14251,14824,15397],
[5702,6291,6971,7701,8300,8950,9532,9959,10743,11364,11990,12608,13229,13849,14467,15092,15715,16338],
[5867,6500,7229,8011,8657,9358,9979,10428,11274,11941,12608,13274,13936,14600,15269,15932,16596,17262],
[6038,6703,7490,8332,9010,9764,10428,10886,11809,12515,13229,13936,14642,15353,16066,16771,17481,18191],
[6204,6909,7751,8649,9373,10173,10870,11353,12339,13092,13844,14600,15353,16108,16859,17610,18367,19123],
[6366,7118,8007,8968,9729,10579,11316,11818,12871,13670,14463,15263,16059,16859,17655,18455,19252,20049],
[6537,7321,8266,9282,10088,10987,11765,12281,13399,14244,15082,15927,16765,17610,18451,19296,20133,20971],
[6703,7531,8523,9599,10448,11391,12210,12745,13931,14819,15702,16591,17473,18364,19252,20133,21021,21910],
[6867,7733,8787,9917,10806,11797,12654,13214,14463,15395,16319,17255,18181,19116,20047,20973,21904,22837],
[7038,7941,9043,10233,11162,12210,13102,13673,14994,15966,16942,17917,18894,19866,20842,21818,22787,23755],
[7202,8150,9302,10551,11524,12616,13548,14139,15526,16540,17560,18582,19601,20618,21636,22658,23678,24698],
[7372,8353,9560,10870,11880,13020,13989,14604,16054,17120,18181,19246,20312,21375,22433,23497,24562,25626],
[7537,8561,9818,11184,12237,13424,14442,15070,16580,17700,18801,19908,21021,22132,23233,24337,25446,26555],
[7701,8767,10075,11497,12596,13829,14892,15535,17107,18279,19422,20570,21732,22890,24030,25177,26331,27485],
[7866,8974,10333,11810,12953,14232,15344,16001,17634,18859,20042,21232,22443,23647,24828,26017,27216,28414],
[8031,9180,10591,12123,13312,14635,15796,16467,18160,19439,20663,21894,23154,24405,25626,26858,28099,29343]
];

// CHANNEL X / WIRE X — Range A: Dayscreen
const CHWR_A=[
[7542,8276,8895,9530,10111,10722,11295,11797,12466,13055,13649,14239,14828,15422,16013],
[7938,8714,9354,10025,10625,11255,11851,12368,13064,13674,14289,14902,15517,16131,16743],
[8329,9147,9813,10514,11133,11793,12401,12927,13660,14292,14932,15567,16203,16834,17472],
[8713,9587,10282,11005,11646,12322,12960,13492,14255,14912,15573,16229,16882,17546,18196],
[9108,10017,10741,11493,12161,12858,13508,14058,14856,15537,16215,16890,17567,18249,18927],
[9502,10458,11204,11983,12665,13393,14069,14622,15452,16150,16848,17556,18252,18954,19658],
[9897,10895,11666,12478,13180,13929,14625,15182,16050,16773,17489,18216,18940,19664,20387],
[10291,11328,12128,12970,13693,14465,15176,15753,16644,17393,18135,18881,19626,20371,21118],
[10682,11765,12588,13455,14205,15003,15735,16311,17244,18010,18774,19545,20311,21077,21846],
[11070,12197,13051,13949,14721,15537,16292,16879,17840,18627,19417,20208,20997,21785,22574],
[11464,12635,13512,14442,15230,16077,16844,17444,18436,19251,20057,20870,21682,22489,23303]
];
// CHANNEL X / WIRE X — Range B: Mode + SheerWeave 4500
const CHWR_B=[
[7927,8804,9554,10338,11026,11752,12428,12984,13813,14519,15222,15927,17334,18037,18051],
[8379,9321,10115,10952,11675,12448,13161,13730,14622,15361,16108,16848,18334,19081,19372],
[8829,9837,10679,11566,12327,13147,13886,14477,15427,16204,16992,17775,19337,20118,20687],
[9282,10354,11245,12181,12981,13836,14618,15222,16230,17052,17872,18695,20336,21161,22007],
[9735,10871,11804,12801,13632,14534,15346,15966,17034,17896,18759,19615,21342,22202,23327],
[10182,11386,12371,13411,14286,15232,16080,16711,17837,18740,19638,20541,22341,23242,24642],
[10635,11902,12932,14028,14933,15923,16806,17459,18647,19587,20523,21461,23344,24284,25963],
[11089,12418,13498,14639,15587,16620,17536,18208,19450,20429,21408,22388,24346,25328,27283],
[11537,12934,14061,15261,16238,17316,18268,18954,20256,21272,22291,23309,25345,26365,28598],
[11993,13452,14622,15875,16892,18008,18997,19702,21058,22116,23177,24235,26350,27405,29913],
[12438,13971,15186,16489,17540,18704,19724,20443,21867,22963,24060,25154,27348,28446,31229]
];
// CHANNEL X / WIRE X — Range C: Mode Zero + SheerWeave 4901
const CHWR_C=[
[7774,8565,9258,9974,10611,11290,11917,12448,13209,13861,14515,15166,15819,16472,17128],
[8204,9048,9773,10536,11202,11911,12571,13117,13922,14600,15289,15971,16660,17342,18027],
[8633,9525,10289,11095,11791,12536,13217,13779,14633,15346,16065,16779,17498,18212,18929],
[9057,10009,10813,11652,12379,13153,13873,14441,15342,16089,16839,17584,18330,19081,19825],
[9486,10483,11326,12210,12972,13779,14519,15108,16056,16835,17615,18388,19167,19946,20727],
[9914,10968,11845,12768,13554,14404,15173,15770,16766,17575,18381,19198,20005,20817,21629],
[10344,11450,12362,13332,14144,15025,15825,16433,17478,18321,19156,20000,20845,21685,22529],
[10773,11927,12880,13890,14735,15650,16472,17100,18187,19063,19934,20807,21683,22554,23432],
[11202,12410,13398,14446,15322,16274,17128,17762,18902,19806,20707,21613,22520,23426,24332],
[11626,12886,13915,15006,15914,16896,17781,18428,19612,20547,21483,22419,23358,24293,25230],
[12055,13368,14432,15566,16503,17522,18428,19095,20322,21291,22257,23225,24196,25159,26131]
];

// ZIP X — Range A: Dayscreen
const ZIP_A=[
[8380,9196,9884,10588,11234,11913,12550,13108,13851,14505,15166,15821,16476,17135,17792],
[8820,9682,10394,11138,11806,12505,13168,13742,14516,15194,15876,16557,17241,17923,18603],
[9255,10163,10904,11682,12370,13104,13779,14363,15178,15881,16591,17297,18003,18705,19413],
[9681,10652,11425,12228,12940,13691,14400,14991,15839,16569,17303,18032,18757,19496,20218],
[10120,11130,11935,12770,13513,14287,15009,15620,16507,17264,18017,18767,19519,20277,21031],
[10558,11620,12449,13315,14072,14881,15632,16246,17169,17945,18720,19507,20280,21060,21842],
[10996,12106,12963,13865,14645,15477,16250,16869,17833,18637,19432,20241,21045,21848,22652],
[11434,12587,13475,14411,15214,16072,16862,17503,18494,19326,20150,20979,21806,22634,23464],
[11869,13073,13986,14950,15784,16671,17483,18124,19160,20011,20860,21717,22567,23419,24273],
[12300,13553,14501,15499,16356,17264,18102,18754,19822,20697,21574,22453,23330,24206,25083],
[12738,14039,15013,16046,16922,17863,18715,19383,20485,21390,22286,23189,24091,24988,25892]
];
// ZIP X — Range B: Mode + SheerWeave 4500
const ZIP_B=[
[8808,9782,10615,11487,12251,13057,13809,14426,15348,16132,16914,17696,19260,20041,20056],
[9310,10357,11239,12168,12972,13831,14623,15255,16247,17068,17898,18720,20371,21202,21524],
[9810,10930,11866,12851,13697,14607,15428,16086,17141,18004,18880,19750,21486,22353,22985],
[10313,11504,12495,13534,14423,15374,16242,16914,18033,18947,19857,20772,22595,23512,24452],
[10817,12079,13116,14223,15147,16149,17052,17740,18926,19884,20843,21795,23714,24669,25919],
[11314,12651,13745,14901,15873,16924,17866,18568,19819,20822,21821,22824,24823,25824,27379],
[11817,13224,14369,15587,16592,17692,18673,19399,20718,21763,22803,23846,25937,26982,28848],
[12321,13798,14998,16266,17318,18467,19485,20231,21611,22699,23787,24876,27051,28143,30315],
[12819,14372,15623,16957,18043,19240,20298,21060,22507,23635,24767,25899,28161,29294,31776],
[13325,14946,16247,17639,18769,20009,21108,21891,23397,24574,25752,26928,29278,30450,33237],
[13821,15523,16873,18322,19489,20782,21915,22715,24297,25514,26734,27949,30387,31607,34699]
];
// ZIP X — Range C: Mode Zero + SheerWeave 4901
const ZIP_C=[
[8808,9782,10615,11487,12251,13057,13809,14426,15348,16132,16914,17696,19260,20041,20056],
[9310,10357,11239,12168,12972,13831,14623,15255,16247,17068,17898,18720,20371,21202,21524],
[9810,10930,11866,12851,13697,14607,15428,16086,17141,18004,18880,19750,21486,22353,22985],
[10313,11504,12495,13534,14423,15374,16242,16914,18033,18947,19857,20772,22595,23512,24452],
[10817,12079,13116,14223,15147,16149,17052,17740,18926,19884,20843,21795,23714,24669,25919],
[11314,12651,13745,14901,15873,16924,17866,18568,19819,20822,21821,22824,24823,25824,27379],
[11817,13224,14369,15587,16592,17692,18673,19399,20718,21763,22803,23846,25937,26982,28848],
[12321,13798,14998,16266,17318,18467,19485,20231,21611,22699,23787,24876,27051,28143,30315],
[12819,14372,15623,16957,18043,19240,20298,21060,22507,23635,24767,25899,28161,29294,31776],
[13325,14946,16247,17639,18769,20009,21108,21891,23397,24574,25752,26928,29278,30450,33237],
[13821,15523,16873,18322,19489,20782,21915,22715,24297,25514,26734,27949,30387,31607,34699]
];

// Add-on pricing (width-indexed)
const FH_CAS135=[2085,2504,2978,3451,3922,4396,4870,5344,5817,6288,6762,7236,7709,8183,8654,9129,9604,10079];
const FH_CAS150=[2452,2945,3502,4059,4614,5173,5729,6286,6843,7398,7956,8513,9069,9627,10181,10740,11298,11856];
const FH_RCKIT=[5023,5311,5023,5311,5598,5890,6175,6463,6753,7042,7331,7619,7906,8194,8481,8768,9057,9344];
const SX_CAS135=[2085,2504,2978,3451,3922,4396,4870,5344,5817,6288,6762,7236,7709,8183,8654];
const SX_CAS150=[2452,2945,3502,4059,4614,5173,5729,6286,6843,7398,7956,8513,9069,9627,10181];

// Flat prices
const PRICE_FH_CRANK=568, PRICE_FH_SIDECHAN=2424, PRICE_FH_INTBRACKET=652, PRICE_FH_HOLDDOWN=344;
const PRICE_SX_CRANK=950, PRICE_SX_PULLPOLE=150;

// Motorisation
const od_MOTOR_P={
  "None":0,
  "Maestria RTS":6320,
  "Maestria IO":6320,
  "Sonesse 50 RTS":7301
};
const od_MOTOR_ADAPTER_P=240;
const od_REMOTE_P={
  "None":0,
  "Situo 5 RTS Pure":1306,
  "Situo 5 RTS Silver":1797,
  "Situo 5 RTS Variation":2137,
  "Smoove Origin 1 RTS":852,
  "Smoove Origin 2 RTS":1588,
  "Smoove Origin 4 RTS":1989,
  "Telis 6 Chronis Pure":5434,
  "Telis 16 RTS Pure":5082,
  "Situo 5 IO Pure":1467,
  "Situo 5 IO/RTS Pure":1950,
  "Smoove Origin 1 IO":1147
};
const od_SMART_P={"None":0,"Tahoma Switch Pro (RTS)":4522,"Tahoma Switch Pro (ZB)":4522,"1TD Smart Hub":5032};

// ===== LOOKUP ENGINE =====
function od_fb(v,a){for(var i=0;i<a.length;i++)if(v<=a[i])return i;return a.length-1;}
function od_lu(t,ws,ds,w,d){var wi=od_fb(w,ws),di=od_fb(d,ds);if(di>=t.length||wi>=t[di].length)return null;return t[di][wi];}
function od_calc(type,rng,w,d){
  if(!w||!d||w<=0||d<=0)return null;
  var t=type.toLowerCase(),r=rng||"";
  var tbl=null,ws,ds;
  if(t==="free hang"){ws=FH_W;ds=FH_D;if(r==="Dayscreen")tbl=FH_A;else if(r==="Mode+SheerWeave 4500")tbl=FH_B;else if(r==="Mode Zero+SheerWeave 4901")tbl=FH_C;if(w>5800||d>4000)return null;}
  else if(t==="channel x"||t==="wire x"){ws=SX_W;ds=SX_D;if(r==="Dayscreen")tbl=CHWR_A;else if(r==="Mode+SheerWeave 4500")tbl=CHWR_B;else if(r==="Mode Zero+SheerWeave 4901")tbl=CHWR_C;if(w>5100||d>3000)return null;}
  else if(t==="zip x"){ws=SX_W;ds=SX_D;if(r==="Dayscreen")tbl=ZIP_A;else if(r==="Mode+SheerWeave 4500")tbl=ZIP_B;else if(r==="Mode Zero+SheerWeave 4901")tbl=ZIP_C;if(w>5100||d>3000)return null;}
  if(!tbl)return null;
  return od_lu(tbl,ws,ds,w,d);
}
function od_fmt(n){return n!=null?"R "+n.toLocaleString("en-ZA",{minimumFractionDigits:2,maximumFractionDigits:2}):"—";}
function od_esc(s){return(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function od_opts(arr,sel){return arr.map(function(v){return'<option'+(v===sel?' selected':'')+'>'+v+'</option>';}).join("");}
function od_optsRM(obj,sel){var h='<option value="None"'+((!sel||sel==="None")?' selected':'')+'>None</option>';Object.keys(obj).forEach(function(k){if(k==="None")return;h+='<option value="'+k+'"'+(k===sel?' selected':'')+'>'+k+' — R'+obj[k].toLocaleString()+'</option>';});return h;}

// ===== STATE =====
var od_uid=1,od_rows=[],od_expanded=null;
var od_TYPES=["Free Hang","Channel X","Wire X","Zip X"];
var od_RANGES=["Dayscreen","Mode+SheerWeave 4500","Mode Zero+SheerWeave 4901"];
var TUBE_COLS=["Signal White","Jet Black","Silk Grey","Umber","Charcoal"];
var BRACKET_COLS=["None","White","Black","Stainless"];
var BOTTOM_FLAP=["None","100mm","150mm","200mm"];

function od_newRow(){return{
  id:od_uid++,loc:"",bt:"Free Hang",rng:"Dayscreen",col:"",
  w:"",d:"",
  cas:"None",casFix:"Reveal",tubeMat:"Aluminium",tubeCol:"Signal White",
  rollType:"Standard",bracketCol:"None",
  ctrl:"RH Crank",hdL:"",hdR:"",
  sideChKit:"None",holdDowns:"None",holdDownType:"Steel Collapsible",
  bottomFlap:"None",bSeal:"25mm",pullPole:"No",
  wireTopFix:"Bracket",wireBottomFix:"Bottom Masonry",
  crankHandle:"None",
  addCrank:false,addSideChan:false,addRCKit:false,addIntBracket:false,addHoldDown:false,
  addPullPole:false,
  mot:"None",motAdp:false,rem:"None",smart:"None",
  n:""
};}

function od_getRow(id){return od_rows.find(function(r){return r.id===id;});}

// ===== ADD-ON CALC =====
function od_calcAddons(r){
  var w=parseInt(r.w)||0,acc=0;
  var isFH=(r.bt==="Free Hang"),isSX=(r.bt==="Channel X"||r.bt==="Wire X"||r.bt==="Zip X");
  var wi_fh=od_fb(w,FH_W),wi_sx=od_fb(w,SX_W);
  if(r.cas==="135mm"){acc+=isFH?FH_CAS135[wi_fh]:SX_CAS135[Math.min(wi_sx,SX_CAS135.length-1)];}
  else if(r.cas==="150mm"){acc+=isFH?FH_CAS150[wi_fh]:SX_CAS150[Math.min(wi_sx,SX_CAS150.length-1)];}
  if(isFH){
    if(r.addCrank)acc+=PRICE_FH_CRANK;
    if(r.addSideChan)acc+=PRICE_FH_SIDECHAN;
    if(r.addRCKit)acc+=FH_RCKIT[wi_fh];
    if(r.addIntBracket)acc+=PRICE_FH_INTBRACKET;
    if(r.addHoldDown)acc+=PRICE_FH_HOLDDOWN;
  }
  if(isSX){
    if(r.addCrank)acc+=PRICE_SX_CRANK;
    if(r.addPullPole)acc+=PRICE_SX_PULLPOLE;
  }
  return acc;
}
function od_calcMotor(r){
  var m=od_MOTOR_P[r.mot]||0;
  var a=(r.mot&&r.mot!=="None"&&r.motAdp)?od_MOTOR_ADAPTER_P:0;
  var rem=od_REMOTE_P[r.rem]||0;
  var sm=od_SMART_P[r.smart]||0;
  return m+a+rem+sm;
}
function od_typeBadge(bt){
  if(bt==="Free Hang")return'<span class="type-badge tb-fh">FH</span>';
  if(bt==="Channel X")return'<span class="type-badge tb-cx">CH</span>';
  if(bt==="Wire X")return'<span class="type-badge tb-wx">WX</span>';
  if(bt==="Zip X")return'<span class="type-badge tb-zx">ZP</span>';
  return'';
}
function od_ctrlOpts(bt){
  if(bt==="Free Hang")return od_opts(["LH Crank","RH Crank","LH Motor","RH Motor"],null);
  if(bt==="Channel X"||bt==="Wire X")return od_opts(["LH Crank 8:1","RH Crank 8:1","LH Motor","RH Motor"],null);
  if(bt==="Zip X")return od_opts(["LH Crank 8:1","RH Crank 8:1","LH Motor","RH Motor","LH Spring","RH Spring"],null);
  return "";
}

// ===== RENDER =====
function od_rowHTML(r,idx){
  var al="abcdefghijklmnopqrstuvwxyz",lt=(function(n){var s="";n=n|0;do{s=al[n%26]+s;n=Math.floor(n/26)-1;}while(n>=0);return s;})(idx);
  var w2=parseInt(r.w)||0,d2=parseInt(r.d)||0;
  var base=od_calc(r.bt,r.rng,w2,d2);
  var acc=od_calcAddons(r);
  var motP=od_calcMotor(r);
  var total=base!=null?base+acc+motP:null;
  var isFH=(r.bt==="Free Hang"),isChWr=(r.bt==="Channel X"||r.bt==="Wire X"),isZip=(r.bt==="Zip X"),isSX=(isChWr||isZip);
  var hasTight=(isChWr||isZip);

  var _hdims=r.w&&r.d;var h='<div class="bcard'+(_hdims||total!=null?' priced':r.loc?' partial':'')+'" id="brow_'+r.id+'">';
  h+='<div class="bcard-top">';
  h+='<span class="bcard-letter">'+lt+'</span>';
  h+='<input class="bcard-inp" value="'+od_esc(r.loc)+'" placeholder="Loc" oninput="od_getRow('+r.id+').loc=this.value;od_updatePrices()">';
  h+='<input id="winp_'+r.id+'" class="bcard-inp bcard-dim" value="'+r.w+'" placeholder="W" inputmode="numeric" oninput="od_getRow('+r.id+').w=this.value.replace(/\\D/g,\'\');od_updatePrices()">';
  h+='<input id="dinp_'+r.id+'" class="bcard-inp bcard-dim" value="'+r.d+'" placeholder="D" inputmode="numeric" oninput="od_getRow('+r.id+').d=this.value.replace(/\\D/g,\'\');od_updatePrices()">';
  h+='<select class="bcard-sel" onchange="od_getRow('+r.id+').rng=this.value;od_updatePrices()">'+od_opts(od_RANGES,r.rng)+'</select>';
  h+='<select class="bcard-sel" onchange="od_getRow('+r.id+').bt=this.value;od_getRow('+r.id+').ctrl=\'RH Crank\';od_rebuildRow('+r.id+')">'+od_opts(od_TYPES,r.bt)+'</select>';
  h+='<span class="bcard-price'+(total==null?' empty':'')+'" id="price_'+r.id+'">'+(total!=null?od_fmt(total):"—")+'</span>';
  h+='<span class="bcard-arrow" id="arrow_'+r.id+'" onclick="od_toggleRow('+r.id+')">'+(od_expanded===r.id?"▲":"▼")+'</span></div>';

  // Size warnings
  if(isFH){h+='<div id="sz_warn_'+r.id+'" style="display:none;color:#cc3333;font-size:11px;padding:4px 12px;background:#fff0f0;border-top:1px solid #ffd0d0">⚠ Exceeds Free Hang max (5800×4000mm)</div>';}
  else{h+='<div id="sz_warn_'+r.id+'" style="display:none;color:#cc3333;font-size:11px;padding:4px 12px;background:#fff0f0;border-top:1px solid #ffd0d0">⚠ Exceeds System X max (5100×3000mm)</div>';}

  h+='<div class="bcard-body'+(od_expanded===r.id?" open":"")+'" id="det_'+r.id+'">';
  // Mobile-only type/range
  h+='<div class="mob-type" style="margin-top:10px;display:grid !important;grid-template-columns:1fr 1fr;gap:8px">';
  h+='<div><label class="lbl">Type</label><select onchange="od_getRow('+r.id+').bt=this.value;od_getRow('+r.id+').ctrl=\'RH Crank\';od_rebuildRow('+r.id+')">'+od_opts(od_TYPES,r.bt)+'</select></div>';
  h+='<div><label class="lbl">Fabric Range</label><select onchange="od_getRow('+r.id+').rng=this.value;od_updatePrices()">'+od_opts(od_RANGES,r.rng)+'</select></div>';
  h+='</div>';

  // Main fields grid
  h+='<div class="g3" style="margin-top:10px">';
  h+='<div><label class="lbl">Colour</label><input class="bcard-inp" style="font-size:14px" value="'+od_esc(r.col)+'" oninput="od_getRow('+r.id+').col=this.value"></div>';
  h+='<div><label class="lbl">Tube Material</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').tubeMat=this.value"><option'+(r.tubeMat==="Aluminium"?" selected":"")+'>Aluminium</option><option'+(r.tubeMat==="Steel"?" selected":"")+'>Steel</option></select></div>';
  h+='<div><label class="lbl">Powder Coat Colour</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').tubeCol=this.value">'+od_opts(TUBE_COLS,r.tubeCol)+'</select></div>';
  h+='</div>';

  h+='<div class="g4" style="margin-top:0">';
  h+='<div><label class="lbl">Cassette</label><select class="bcard-sel" style="font-size:13px" onchange="var _r=od_getRow('+r.id+');_r.cas=this.value;if(this.value!==\'None\')_r.rollType=\'Standard\';od_rebuildRow('+r.id+')"><option'+(r.cas==="None"?" selected":"")+' value="None">None</option><option'+(r.cas==="135mm"?" selected":"")+'>135mm</option><option'+(r.cas==="150mm"?" selected":"")+'>150mm</option></select></div>';
  h+='<div><label class="lbl">Cassette Fix</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').casFix=this.value"><option'+(r.casFix==="Reveal"?" selected":"")+'>Reveal</option><option'+(r.casFix==="Face"?" selected":"")+'>Face</option><option'+(r.casFix==="Side"?" selected":"")+'>Side</option></select></div>';
  var casActive=r.cas&&r.cas!=="None";
  h+='<div><label class="lbl">Roll Type'+(casActive?' <span style="color:#e09020;font-size:10px">(cassette: Standard only)</span>':'')+' </label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').rollType=this.value"><option'+(r.rollType==="Standard"?" selected":"")+'>Standard</option><option'+(r.rollType==="Waterfall"?" selected":"")+(casActive?' disabled style="color:#bbb"':'')+'>Waterfall</option></select></div>';
  h+='<div><label class="lbl">Bracket Colour</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').bracketCol=this.value">'+od_opts(BRACKET_COLS,r.bracketCol)+'</select></div>';
  h+='</div>';

  // Type-specific order fields
  h+='<div class="order-section">';
  h+='<div class="os-title">'+r.bt+' Fields</div>';

  if(isFH){
    h+='<div class="g3">';
    h+='<div><label class="lbl">Control</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').ctrl=this.value">'+od_opts(["LH Crank","RH Crank","LH Motor","RH Motor"],r.ctrl)+'</select></div>';
    h+='<div><label class="lbl">Crank Handle</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').crankHandle=this.value">'+od_opts(["None","White 900mm","White 1200mm","White 1500mm","White 2000mm","White 2500mm","Black 900mm","Black 1200mm","Black 1500mm","Black 2000mm","Black 2500mm"],r.crankHandle)+'</select></div>';
    h+='<div><label class="lbl">Bottom Flap</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').bottomFlap=this.value">'+od_opts(BOTTOM_FLAP,r.bottomFlap)+'</select></div>';
    h+='</div>';
    h+='<div class="g3">';
    h+='<div><label class="lbl">Side Channel Kit</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').sideChKit=this.value"><option'+(r.sideChKit==="None"?" selected":"")+' value="None">None</option><option'+(r.sideChKit==="Reveal Fix"?" selected":"")+'>Reveal Fix</option><option'+(r.sideChKit==="Face Fix"?" selected":"")+'>Face Fix</option></select></div>';
    h+='<div><label class="lbl">Hold Downs</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').holdDowns=this.value">'+od_opts(["None","2","3","4"],r.holdDowns)+'</select></div>';
    h+='<div><label class="lbl">Hold Down Type</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').holdDownType=this.value">'+od_opts(["Steel Collapsible","Shock Cord Black","Shock Cord Cement"],r.holdDownType)+'</select></div>';
    h+='</div>';
  }

  if(isChWr){
    h+='<div class="g3">';
    h+='<div><label class="lbl">Control</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').ctrl=this.value">'+od_opts(["LH Crank 8:1","RH Crank 8:1","LH Motor","RH Motor"],r.ctrl)+'</select></div>';
    h+='<div><label class="lbl">Crank Handle</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').crankHandle=this.value">'+od_opts(["None","Silver 8:1 1200mm","Silver 8:1 1500mm","Silver 8:1 1800mm"],r.crankHandle)+'</select></div>';
    h+='<div><label class="lbl">Bottom Flap</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').bottomFlap=this.value">'+od_opts(BOTTOM_FLAP,r.bottomFlap)+'</select></div>';
    h+='</div>';
    h+='<div class="g2">';
    h+='<div><label class="lbl">Side Channel Fixing</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').casFix=this.value"><option'+(r.casFix==="Face"?" selected":"")+'>Face</option><option'+(r.casFix==="Reveal"?" selected":"")+'>Reveal</option></select></div>';
    h+='<div><label class="lbl">Hold Down Type</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').holdDownType=this.value"><option'+((r.holdDownType==="Steel Collapsible"||!r.holdDownType)?" selected":"")+'>Steel Collapsible</option></select></div>';
    h+='</div>';
    if(r.bt==="Wire X"){
      h+='<div class="g2">';
      h+='<div><label class="lbl">Wire Guide Top Fix</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').wireTopFix=this.value">'+od_opts(["Bracket","Cassette","Top","Face"],r.wireTopFix)+'</select></div>';
      h+='<div><label class="lbl">Wire Guide Bottom Fix</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').wireBottomFix=this.value">'+od_opts(["Bottom Masonry","Bottom Deck","Face","Side"],r.wireBottomFix)+'</select></div>';
      h+='</div>';
    }
  }

  if(isZip){
    h+='<div class="g3">';
    h+='<div><label class="lbl">Control</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').ctrl=this.value">'+od_opts(["LH Crank 8:1","RH Crank 8:1","LH Motor","RH Motor","LH Spring","RH Spring"],r.ctrl)+'</select></div>';
    h+='<div><label class="lbl">Crank Handle</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').crankHandle=this.value">'+od_opts(["None","Silver 8:1 1200mm","Silver 8:1 1500mm","Silver 8:1 1800mm"],r.crankHandle)+'</select></div>';
    h+='<div><label class="lbl">Hold Downs</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').holdDowns=this.value">'+od_opts(["None","Sliding Handle","Sliding Handle Double Sided"],r.holdDowns)+'</select></div>';
    h+='</div>';
    h+='<div class="g2">';
    h+='<div><label class="lbl">Bottom Bar Seal</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').bSeal=this.value"><option'+(r.bSeal==="25mm"?" selected":"")+'>25mm</option><option'+(r.bSeal==="50mm"?" selected":"")+'>50mm</option></select></div>';
    h+='<div><label class="lbl">Pull Pole 1.5m</label><select class="bcard-sel" style="font-size:13px" onchange="od_getRow('+r.id+').pullPole=this.value;od_updatePrices()"><option'+(r.pullPole==="No"?" selected":"")+'>No</option><option'+(r.pullPole==="Yes"?" selected":"")+'>Yes</option></select></div>';
    h+='</div>';
  }
  h+='</div>'; // end order-section

  // Add-on toggle buttons (styled like Free Hang fields)
  function odToggleBtn(prop,label,price){
    var on=!!r[prop];return '<button type="button" class="ct-pill'+(on?' on':'')+'" onclick="var _r=od_getRow('+r.id+');_r.'+prop+'=!_r.'+prop+';od_updatePrices();od_renderAllRows();">'+label+(price?' <span style="opacity:.75;font-weight:500">+R'+price+'</span>':'')+'</button>';
  }
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">';
  if(isFH){
    h+=odToggleBtn('addCrank','Crank Handle',568);
    h+=odToggleBtn('addSideChan','Side Channels',2424);
    h+=odToggleBtn('addIntBracket','Intermediate Bracket',652);
    h+=odToggleBtn('addHoldDown','Hold Down',344);
  }
  if(isSX){
    h+=odToggleBtn('addCrank','Crank Handle',950);
    if(isZip)h+=odToggleBtn('addPullPole','Pull Pole 1.5m',150);
  }
  h+='</div>';

  // Motorisation
  h+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px">';
  h+='<div><label class="lbl">Motor</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').mot=this.value;od_updatePrices();_shakeAdp(\'od_'+r.id+'\')">'+od_optsRM(od_MOTOR_P,r.mot)+'</select></div>';
  h+='<div><label class="lbl">Remote</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').rem=this.value;od_updatePrices()">'+od_optsRM(od_REMOTE_P,r.rem)+'</select></div>';
  h+='<div id="adp_wrap_od_'+r.id+'" style="display:flex;flex-direction:column;justify-content:flex-end">'+odToggleBtn('motAdp','Motor Adapter',240)+'</div>';
  h+='</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px"><div><label class="lbl">Smart Connect</label><select class="bcard-sel" style="font-size:12px" onchange="od_getRow('+r.id+').smart=this.value;od_updatePrices()">'+od_optsRM(od_SMART_P,r.smart||"None")+'</select></div></div>';

  // Notes + actions
  h+='<div style="display:flex;gap:8px;align-items:flex-end;margin-top:10px">';
  h+='<div style="flex:1"><label class="lbl">Notes</label><input class="bcard-inp" style="font-size:14px" value="'+od_esc(r.n)+'" placeholder="Special instructions..." oninput="od_getRow('+r.id+').n=this.value"></div>';
  h+='<button class="btn" style="background:#e8e5df;color:#333;flex-shrink:0" onclick="od_dupRow('+r.id+')">Dup</button>';
  h+='<button class="btn" style="background:#e8d5d5;color:#8b3a3a;flex-shrink:0" onclick="od_remRow('+r.id+')">Del</button>';
  h+='</div>';
  h+='</div></div>';
  return h;
}

function od_renderAllRows(){
  document.getElementById("od_rowsContainer").innerHTML=od_rows.map(function(r,i){return od_rowHTML(r,i);}).join("");
  od_updatePrices();
}

// ===== GLOBAL STATE =====
var od_installCost=0,od_travelCost=0,od_discountPct=0,od_discountAccPct=0,od_isOrder=false;

function od_toggleOrderMode(){od_isOrder=!od_isOrder;var btn=document.getElementById('od_orderToggleBtn');if(btn){btn.textContent=od_isOrder?'🔄 Switch to QUOTATION':'🔄 Switch to ORDER';btn.style.background=od_isOrder?'#E8461E':'#4A4A4A';}}

function od_updatePrices(){
  var fc=0,blindsTotal=0,accTotal=0,fr=[];
  od_rows.forEach(function(r){
    var w=parseInt(r.w)||0,d=parseInt(r.d)||0;
    var base=od_calc(r.bt,r.rng,w,d);
    var acc=od_calcAddons(r);
    var motP=od_calcMotor(r);
    var total=base!=null?base+acc+motP:null;
    var el=document.getElementById("price_"+r.id);
    var brow=document.getElementById("brow_"+r.id);
    if(el){el.textContent=total!=null?od_fmt(total):"—";el.className="bcard-price"+(total!=null?"":" empty");}
    if(brow){var _hd=r.w&&r.d;brow.className="bcard"+(_hd||total!=null?" priced":r.loc?" partial":"");}
    // Size warnings
    var isFH=(r.bt==="Free Hang"),isSX=!isFH;
    var over=(isFH&&(w>5800||d>4000))||(isSX&&(w>5100||d>3000));
    var warn=document.getElementById("sz_warn_"+r.id);
    if(warn)warn.style.display=over?"block":"none";
    var winp=document.getElementById("winp_"+r.id),dinp=document.getElementById("dinp_"+r.id);
    if(winp)winp.style.border=over?"2px solid #cc3333":"";
    if(dinp)dinp.style.border=over?"2px solid #cc3333":"";
    if(total!=null){fc++;blindsTotal+=base!=null?base:0;accTotal+=acc+motP;}
    fr.push({r:r,base:base,acc:acc,mot:motP,total:total});
  });
  document.getElementById("od_filledCount").textContent=fc>0?"("+fc+" priced)":"";

  var discountBlindAmt=od_discountPct>0?Math.round(blindsTotal*(od_discountPct/100)):0;
  var discountAccAmt=od_discountAccPct>0?Math.round(accTotal*(od_discountAccPct/100)):0;
  var discountedTotal=(blindsTotal-discountBlindAmt)+(accTotal-discountAccAmt);
  window._mq_outdoor_sub=discountedTotal;
  window._mq_outdoor_blinds=blindsTotal;
  window._mq_outdoor_acc=accTotal;
  var sub=discountedTotal+(od_installCost||0)+(od_travelCost||0),vat=Math.round(sub*0.15),tot=sub+vat;

  var hasPriced=fr.some(function(x){return x.total!=null;});

  var sh='<div class="summary"><h2>Quote Summary</h2>';
  fr.forEach(function(x){
    if(x.total==null)return;
    var det=x.r.bt+' · '+x.r.rng;
    sh+='<div class="sline"><span class="sn">'+od_esc(x.r.loc||'(unlabelled)')+' <span style="font-size:11px;color:#cc6030">('+det+')</span></span><span class="sv">'+od_fmt(x.base)+'</span></div>';
    var _rr=x.r, _isFH=(_rr.bt==="Free Hang"), _isSX=(_rr.bt==="Channel X"||_rr.bt==="Wire X"||_rr.bt==="Zip X");
    var _w=parseInt(_rr.w)||0, _wifh=od_fb(_w,FH_W), _wisx=od_fb(_w,SX_W);
    function _sl(n,p){return '<div class="sline" style="opacity:.85"><span class="sn" style="padding-left:14px;font-size:11px;color:#aaa">↳ '+n+'</span><span class="sv" style="font-size:12px">'+od_fmt(p)+'</span></div>';}
    if(_rr.cas==="135mm") sh+=_sl('Cassette 135mm', _isFH?FH_CAS135[_wifh]:SX_CAS135[Math.min(_wisx,SX_CAS135.length-1)]);
    else if(_rr.cas==="150mm") sh+=_sl('Cassette 150mm', _isFH?FH_CAS150[_wifh]:SX_CAS150[Math.min(_wisx,SX_CAS150.length-1)]);
    if(_isFH){
      if(_rr.addCrank) sh+=_sl('Crank Handle', PRICE_FH_CRANK);
      if(_rr.addSideChan) sh+=_sl('Side Channels', PRICE_FH_SIDECHAN);
      if(_rr.addRCKit) sh+=_sl('RC Kit', FH_RCKIT[_wifh]);
      if(_rr.addIntBracket) sh+=_sl('Intermediate Bracket', PRICE_FH_INTBRACKET);
      if(_rr.addHoldDown) sh+=_sl('Hold Down', PRICE_FH_HOLDDOWN);
    }
    if(_isSX){
      if(_rr.addCrank) sh+=_sl('Crank Handle', PRICE_SX_CRANK);
      if(_rr.addPullPole) sh+=_sl('Pull Pole 1.5m', PRICE_SX_PULLPOLE);
    }
    if(_rr.mot&&_rr.mot!=="None"){ sh+=_sl('Motor ('+_rr.mot+')', od_MOTOR_P[_rr.mot]||0); if(_rr.motAdp) sh+=_sl('Motor Adapter', od_MOTOR_ADAPTER_P); }
    if(_rr.rem&&_rr.rem!=="None") sh+=_sl('Remote ('+_rr.rem+')', od_REMOTE_P[_rr.rem]||0);
    if(_rr.smart&&_rr.smart!=="None") sh+=_sl('Smart Connect ('+_rr.smart+')', od_SMART_P[_rr.smart]||0);
  });
  if(discountBlindAmt>0)sh+='<div class="sline"><span class="sn" style="color:#27ae60;font-weight:600">Blind Discount ('+od_discountPct+'%)</span><span class="sv" style="color:#27ae60">-'+od_fmt(discountBlindAmt)+'</span></div>';
  if(discountAccAmt>0)sh+='<div class="sline"><span class="sn" style="color:#27ae60;font-weight:600">Accessory Discount ('+od_discountAccPct+'%)</span><span class="sv" style="color:#27ae60">-'+od_fmt(discountAccAmt)+'</span></div>';
  if(od_installCost>0)sh+='<div class="sline"><span class="sn">Installation</span><span class="sv">'+od_fmt(od_installCost)+'</span></div>';
  if(od_travelCost>0)sh+='<div class="sline"><span class="sn">Travel</span><span class="sv">'+od_fmt(od_travelCost)+'</span></div>';
  sh+='<div class="tsec"><div class="trow"><span class="tl">Subtotal (excl. VAT)</span><span class="tv">'+od_fmt(sub)+'</span></div>';
  sh+='<div class="trow"><span class="tl">VAT (15%)</span><span class="tv">'+od_fmt(vat)+'</span></div>';
  sh+='<div class="trow big"><span class="tl">TOTAL</span><span class="tv">'+od_fmt(tot)+'</span></div>';
  sh+='<div class="trow dep"><span class="tl">60% Deposit</span><span class="tv">'+od_fmt(Math.round(tot*0.6))+'</span></div>';
  sh+='<div class="trow dep"><span class="tl">35% Delivery Balance</span><span class="tv">'+od_fmt(Math.round(tot*0.35))+'</span></div>';
  sh+='<div class="trow dep"><span class="tl">5% Final Balance</span><span class="tv">'+od_fmt(Math.round(tot*0.05))+'</span></div></div>';
  sh+='<div style="margin-top:14px"><button class="btn btn-full" style="background:#4A4A4A;color:#fff" onclick="od_isOrder=false;od_pwaExportPDF()">📄 PDF</button></div></div>';
  document.getElementById("od_summaryContainer").innerHTML=sh;
}

function od_addRow(){od_rows.push(od_newRow());od_renderAllRows();
  setTimeout(function(){var c=document.getElementById("od_rowsContainer");if(c)c.lastElementChild&&c.lastElementChild.scrollIntoView({behavior:"smooth",block:"nearest"});},100);
}
function od_rebuildRow(id){od_expanded=id;od_updatePrices();setTimeout(function(){od_renderAllRows();},0);}
function od_toggleRow(id){od_expanded=od_expanded===id?null:id;od_renderAllRows();}
function od_dupRow(id){var r=od_getRow(id);if(!r)return;var n=JSON.parse(JSON.stringify(r));n.id=od_uid++;n.loc=(r.loc?r.loc+" copy":"copy");od_rows.splice(od_rows.indexOf(r)+1,0,n);od_renderAllRows();}
function od_remRow(id){if(od_rows.length<=1){alert("Keep at least one row.");return;}od_rows=od_rows.filter(function(r){return r.id!==id;});od_renderAllRows();}
function od_clrForm(){if(!confirm("Clear entire form?"))return;
  document.getElementById("od_c_nm").value="";document.getElementById("od_c_pn").value="";document.getElementById("od_c_ad").value="";document.getElementById("od_c_cl").value="";document.getElementById("od_c_em").value="";document.getElementById("od_c_tl").value="";document.getElementById("od_c_re").value="";document.getElementById("od_c_md").value=new Date().toISOString().split("T")[0];document.getElementById("od_c_gn").value="";
  od_rows=[od_newRow()];od_expanded=null;od_renderAllRows();
  document.getElementById("od_inp_install").value="0";document.getElementById("od_inp_travel").value="0";od_installCost=0;od_travelCost=0;
}
function od_showToast(msg){var t=document.getElementById("od_pwaToast");if(!t){if(typeof pwaToast==='function')pwaToast(msg);return;}t.textContent=msg;t.style.display="block";setTimeout(function(){t.style.display="none";},2500);}

// ===== PDF EXPORT =====
function od_pwaExportPDF(){
  if(typeof window.jspdf==="undefined"&&typeof jsPDF==="undefined"){alert("PDF library not loaded.");return;}
  var jsPDFlib=(typeof window.jspdf!=="undefined")?window.jspdf.jsPDF:jsPDF;
  var doc=new jsPDFlib({orientation:"landscape",unit:"mm",format:"a4"});
  var W=297,H=210,M=14;
  var isOrd=od_isOrder;
  var date=document.getElementById("od_c_md").value||new Date().toISOString().split("T")[0];
  function gv(id){var e=document.getElementById(id);return e?e.value:"";}
  // ── Header ──
  doc.setFillColor(255,255,255);doc.rect(0,0,W,28,"F");
  try{var _li=document.getElementById('logoImg');var _ls=_li.src;if(!_li||!_li.complete||!_li.naturalWidth)throw new Error('logo not ready');var _lw=_li.naturalWidth;var _lh=_li.naturalHeight||_lw;var _pw=65;var _ph=Math.round(_pw*(_lh/_lw)*10)/10;doc.addImage(_ls,'PNG',M,0,_pw,_ph);}catch(e){}
  doc.setFillColor(232,70,30);doc.rect(0,28,W,1.5,"F");
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(232,70,30);doc.text(isOrd?'OUTDOOR ORDER':'OUTDOOR QUOTATION',W-M,10,{align:'right'});
  doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(100,100,100);
  doc.text('Total Blind Design cc',W-M,15,{align:'right'});
  doc.text('368 Voortrekker Rd, Maitland, Cape Town',W-M,19,{align:'right'});
  doc.text('info@totalblinds.co.za | www.totalblinddesign.co.za',W-M,23,{align:'right'});
  var _repE=(typeof _currentUser!=='undefined'&&_currentUser&&_currentUser.email)?_currentUser.email:'';
  if(_repE){doc.text('Rep: '+_repE,W-M,27,{align:'right'});doc.text('Date: '+date,W-M,31,{align:'right'});}else{doc.text('Date: '+date,W-M,27,{align:'right'});}
  // ── Customer ──
  var y=34;doc.setTextColor(30,30,30);doc.setFontSize(8);
  doc.setFont('helvetica','bold');doc.text('Name: ',M,y);doc.setFont('helvetica','normal');doc.text(gv("od_c_nm")||"",M+14,y);
  doc.setFont('helvetica','bold');doc.text('Project: ',M+80,y);doc.setFont('helvetica','normal');doc.text(gv("od_c_pn")||"",M+96,y);
  y+=5;doc.setFont('helvetica','bold');doc.text('Cell: ',M,y);doc.setFont('helvetica','normal');doc.text(gv("od_c_cl")||"",M+10,y);
  doc.setFont('helvetica','bold');doc.text('Email: ',M+50,y);doc.setFont('helvetica','normal');doc.text(gv("od_c_em")||"",M+63,y);
  doc.setFont('helvetica','bold');doc.text('Address: ',M+120,y);doc.setFont('helvetica','normal');doc.text(gv("od_c_ad")||"",M+138,y);
  var re=gv("od_c_re");if(re){y+=5;doc.setFont('helvetica','bold');doc.text('Sales Rep: ',M,y);doc.setFont('helvetica','normal');doc.text(re,M+22,y);}
  var gn=gv("od_c_gn");if(gn){y+=5;doc.setFontSize(7);doc.setTextColor(100,100,100);doc.text('Notes: '+gn,M,y);}
  y+=5;
  // ── Items table ──
  var cols=isOrd?["#","Location","Type","Range","W","D","Ctrl","Cassette","Motor","Remote","H-L","H-R","Notes","Price"]:["#","Location","Type","Range","Ctrl","Cassette","Motor","Add-ons","Price"];
  var al="abcdefghijklmnopqrstuvwxyz";
  var tBdy=[],accTotal2=0,blindsTotal2=0;
  od_rows.forEach(function(r,i){
    var w2=parseInt(r.w)||0,d2=parseInt(r.d)||0;
    var base=od_calc(r.bt,r.rng,w2,d2);
    var acc=od_calcAddons(r);var motP=od_calcMotor(r);
    var total=base!=null?base+acc+motP:null;
    if(base!=null)blindsTotal2+=base;if(acc+motP>0)accTotal2+=acc+motP;
    var lt=i<26?al[i]:""+i;
    var cas=r.cas==="None"?"—":r.cas+" ("+r.casFix+")";
    var mot=r.mot==="None"?"—":(r.mot+(r.motAdp?" +Adp":""));
    var addons=[];
    if(r.addCrank)addons.push("Crank");if(r.addSideChan)addons.push("S.Chan");
    if(r.addRCKit)addons.push("RC Kit");if(r.addIntBracket)addons.push("Int.Brkt");
    if(r.addPullPole||r.pullPole==="Yes")addons.push("Pull Pole");if(r.addHoldDown)addons.push("H.Down");
    if(isOrd){tBdy.push([lt,r.loc,r.bt,r.rng.replace("+SheerWeave ","·SW"),w2||"",d2||"",r.ctrl,cas,mot,r.rem==="None"?"—":r.rem,r.hdL||"",r.hdR||"",r.n,total!=null?od_fmt(total):"—"]);}
    else{tBdy.push([lt,r.loc,r.bt,r.rng.replace("+SheerWeave ","·SW"),r.ctrl,cas,mot,addons.join(", ")||"—",total!=null?od_fmt(total):"—"]);}
  });
  doc.autoTable({
    head:[cols],body:tBdy,startY:y,margin:{left:M,right:M},
    styles:{fontSize:7,cellPadding:2,overflow:"linebreak"},
    headStyles:{fillColor:[232,70,30],textColor:255,fontStyle:"bold",fontSize:7},
    alternateRowStyles:{fillColor:[250,248,245]},
    columnStyles:(function(){var cs={};cs[cols.length-1]={halign:'right',fontStyle:'bold'};if(isOrd){cs[4]={halign:'center'};cs[5]={halign:'center'};}return cs;})(),
    didParseCell:function(d){if(d.section==="body"&&d.column.index===cols.length-1&&d.cell.raw!=="—")d.cell.styles.fontStyle="bold";}
  });
  y=doc.lastAutoTable.finalY+3;
  // ── Totals ──
  var discB=od_discountPct>0?Math.round(blindsTotal2*(od_discountPct/100)):0;
  var discA=od_discountAccPct>0?Math.round(accTotal2*(od_discountAccPct/100)):0;
  var discTot=(blindsTotal2-discB)+(accTotal2-discA);
  var sub2=discTot+(od_installCost||0)+(od_travelCost||0),vat2=Math.round(sub2*0.15),tot2=sub2+vat2;
  var totData=[];
  if(discB>0)totData.push({lb:'Blind Discount ('+od_discountPct+'%)',vl:'-'+od_fmt(discB),tag:'disc'});
  if(discA>0)totData.push({lb:'Accessory Discount ('+od_discountAccPct+'%)',vl:'-'+od_fmt(discA),tag:'disc'});
  if(od_installCost>0)totData.push({lb:'Installation',vl:od_fmt(od_installCost),tag:'norm'});
  if(od_travelCost>0)totData.push({lb:'Travel',vl:od_fmt(od_travelCost),tag:'norm'});
  totData.push({lb:'Sub Total',vl:od_fmt(sub2),tag:'sub'});
  totData.push({lb:'VAT (15%)',vl:od_fmt(vat2),tag:'norm'});
  totData.push({lb:'TOTAL incl VAT',vl:od_fmt(tot2),tag:'total'});
  totData.push({lb:'60% Deposit — to confirm order & initiate production',vl:od_fmt(Math.round(tot2*0.6)),tag:'dep'});
  totData.push({lb:'35% Delivery Balance — due 24–48 hrs before installation',vl:od_fmt(Math.round(tot2*0.35)),tag:'dep'});
  totData.push({lb:'5% Final Balance — due upon installation sign-off',vl:od_fmt(Math.round(tot2*0.05)),tag:'dep'});
  var tblW=W-M*2;
  doc.autoTable({
    startY:y,margin:{left:M,right:M},
    body:totData.map(function(r){return[r.lb,r.vl];}),
    theme:'grid',
    styles:{fontSize:7.5,font:'helvetica',cellPadding:{top:1.5,bottom:1.5,left:3,right:3},lineColor:[200,200,200],lineWidth:0.2,textColor:[40,40,40]},
    columnStyles:{0:{cellWidth:tblW-32},1:{cellWidth:32,halign:'right',fontStyle:'bold'}},
    didParseCell:function(d){
      var tag=totData[d.row.index]?totData[d.row.index].tag:'';
      if(tag==='disc'){d.cell.styles.textColor=[39,174,96];d.cell.styles.fontStyle='bold';}
      else if(tag==='sub'){d.cell.styles.fontStyle='bold';d.cell.styles.fillColor=[245,245,245];d.cell.styles.fontSize=8;}
      else if(tag==='total'){d.cell.styles.fontStyle='bold';d.cell.styles.fontSize=9.5;d.cell.styles.fillColor=[232,70,30];d.cell.styles.textColor=[255,255,255];d.cell.styles.lineColor=[232,70,30];}
      else if(tag==='dep'){d.cell.styles.fillColor=[250,250,250];}
    }
  });
  // ── Banking details ──
  var bky=H-34,bkW=W-M*2,bkH=26;
  doc.setFillColor(232,70,30);doc.roundedRect(M,bky,bkW,bkH,2,2,"F");
  doc.setFillColor(250,250,250);doc.rect(M,bky+7,bkW,bkH-7,"F");
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.5);doc.roundedRect(M,bky,bkW,bkH,2,2,"S");
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(255,255,255);
  doc.text('BANKING DETAILS',M+3,bky+5);doc.text('Payment Ref: '+(gv('od_c_nm')||'Client Name'),M+bkW-3,bky+5,{align:'right'});
  var bc1=M+3,bc2=M+bkW*0.25+3,bc3=M+bkW*0.5+3,bc4=M+bkW*0.75+3;
  doc.setFont('helvetica','normal');doc.setFontSize(6);doc.setTextColor(130,130,130);
  doc.text('BANK',bc1,bky+12);doc.text('ACCOUNT NAME',bc2,bky+12);doc.text('ACCOUNT NO',bc3,bky+12);doc.text('BRANCH CODE',bc4,bky+12);
  doc.setDrawColor(210,210,210);doc.setLineWidth(0.15);doc.line(M+1,bky+14,M+bkW-1,bky+14);
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(30,30,30);
  doc.text('FNB Hout Bay',bc1,bky+21);doc.text('Total Blind Design cc',bc2,bky+21);doc.text('62401898658',bc3,bky+21);doc.text('204009',bc4,bky+21);
  doc.setFontSize(6);doc.setTextColor(170,170,170);
  doc.text('Total Blind Design | 368 Voortrekker Rd, Maitland | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  // ── Page 2: T&Cs ──
  doc.addPage();
  var _tcHdrH=_repE?40:34;
  doc.setFillColor(255,255,255);doc.rect(0,0,W,_tcHdrH,'F');
  try{var _tcLi=document.getElementById('logoImg');var _tcLs=_tcLi.src;if(!_tcLi||!_tcLi.complete||!_tcLi.naturalWidth)throw new Error();var _tcLw=_tcLi.naturalWidth;var _tcLh=_tcLi.naturalHeight||_tcLw;var _tcPw=65;var _tcPh=Math.round(_tcPw*(_tcLh/_tcLw)*10)/10;doc.addImage(_tcLs,'PNG',M,0,_tcPw,_tcPh);}catch(e){}
  doc.setFillColor(232,70,30);doc.rect(0,_tcHdrH,W,1.5,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(232,70,30);
  doc.text('TERMS & CONDITIONS',W-M,10,{align:'right'});
  doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(100,100,100);
  doc.text('Total Blind Design cc',W-M,15,{align:'right'});
  doc.text('368 Voortrekker Rd, Maitland, Cape Town',W-M,19,{align:'right'});
  doc.text('info@totalblinds.co.za | www.totalblinddesign.co.za',W-M,23,{align:'right'});
  if(_repE)doc.text('Rep: '+_repE,W-M,27,{align:'right'});
  var _tcGap=10,_tcW=(W-M*2-_tcGap)/2,_tcL=M,_tcR=M+_tcW+_tcGap;
  var _tcRenderOD=function(title,body,x,cW,y){
    var lines=doc.splitTextToSize(body,cW);
    doc.setFillColor(245,245,245);doc.rect(x,y-2,cW,6,"F");
    doc.setDrawColor(232,70,30);doc.setLineWidth(0.3);doc.line(x,y-2,x+3,y-2);
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(232,70,30);
    doc.text(title,x+5,y+2.5);y+=6;
    doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(50,50,50);
    doc.text(lines,x,y);return y+lines.length*2.6+2;
  };
  var tyL=_tcHdrH+6,tyR=_tcHdrH+6;
  tyL=_tcRenderOD('1. QUOTATION VALIDITY','This quotation is valid for 30 days from the date of issue. Prices are subject to change without notice after this period. Re-measurement may be required if measurements have not been confirmed in writing.',_tcL,_tcW,tyL);
  tyL=_tcRenderOD('2. DEPOSIT & PAYMENT','Payment is structured in three stages: (1) A deposit of 60% of the total quoted amount is required to confirm your order and initiate production — no manufacturing will commence until this deposit is received; (2) a Delivery Balance of 35% is payable 24–48 hours prior to the scheduled installation date — this covers the cost of your custom-manufactured goods and must be cleared before the installation team departs our premises; (3) a Final Balance of 5% is payable immediately upon the installation team leaving the site. We accept EFT payments only.',_tcL,_tcW,tyL);
  tyL=_tcRenderOD('3. LEAD TIMES','Standard lead times are 10–15 working days from receipt of deposit and confirmed measurements. Motorised, custom, or imported products may require additional lead time. Total Blind Design will communicate any delays promptly.',_tcL,_tcW,tyL);
  tyL=_tcRenderOD('4. MEASUREMENTS & SITE RESPONSIBILITY','All measurements are taken by a qualified Total Blind Design consultant. Should the client supply their own measurements, Total Blind Design accepts no liability for incorrect sizing. A re-measurement fee may apply for repeat site visits required due to changes or errors in client-supplied dimensions.',_tcL,_tcW,tyL);
  tyL=_tcRenderOD('5. MANUFACTURING & CANCELLATIONS','Once a deposit is received and an order placed, manufacturing commences immediately. Cancellations after this point will forfeit the deposit in full. Alterations to confirmed orders may incur additional charges.',_tcL,_tcW,tyL);
  tyL=_tcRenderOD('6. INSTALLATION','Installation is included where quoted. The client is responsible for ensuring clear, safe access to all installation areas. Additional charges may apply for difficult access, high ceilings, or work outside standard working hours (Mon–Fri, 08:00–17:00).',_tcL,_tcW,tyL);
  tyR=_tcRenderOD('7. FUNCTIONAL COMPLETION','Functional Completion is defined as the point at which window treatments are securely mounted and operational for their intended purpose (light control and/or privacy). Functional Completion is achieved regardless of minor aesthetic matters ("Snags") such as fabric puckering, minor alignment, or cosmetic touch-ups. The existence of a Snag does not negate Functional Completion and does not entitle the client to withhold the Delivery Balance or Final Balance. All agreed Snags will be documented at handover and remedied within 21 working days at no additional charge.',_tcR,_tcW,tyR);
  tyR=_tcRenderOD('8. SNAG RETENTION LIMIT','Should a client dispute Functional Completion, any amount withheld shall not exceed 200% of the estimated cost to remedy the specific Snag(s) in question. This retention cap applies per individual Snag item and does not apply to the Delivery Balance, which is due and payable prior to installation.',_tcR,_tcW,tyR);
  tyR=_tcRenderOD('9. WARRANTY','All products carry a 3-year product warranty from date of installation. Fabric and component warranties are subject to the respective manufacturer terms. Warranty is void in the event of misuse, unauthorised alterations, or damage caused by external factors.',_tcR,_tcW,tyR);
  tyR=_tcRenderOD('10. FABRIC & COLOUR VARIATION','Fabric swatches and samples are representative only. Minor colour and texture variations between samples and manufactured product are inherent in the industry and do not constitute grounds for rejection or refund.',_tcR,_tcW,tyR);
  tyR=_tcRenderOD('11. RETURNS & REFUNDS','Custom-made products are non-returnable and non-refundable as they are manufactured to your specific requirements. Defective items will be repaired or replaced at the discretion of Total Blind Design.',_tcR,_tcW,tyR);
  tyR=_tcRenderOD('12. GOVERNING LAW','These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the Western Cape High Court, Cape Town.',_tcR,_tcW,tyR);
  var ty=Math.max(tyL,tyR)+6;
  doc.setDrawColor(200,200,200);doc.setLineWidth(0.2);doc.line(M,ty,W-M,ty);ty+=6;
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(232,70,30);
  doc.text('CLIENT ACCEPTANCE',M,ty);ty+=6;
  doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(50,50,50);
  var _fw=(W-M*2-12)/3;
  ['Client Name (Print):','Signature:','Date:'].forEach(function(lbl,i){var _fx=M+i*(_fw+6);doc.text(lbl,_fx,ty);doc.setDrawColor(100);doc.setLineWidth(0.2);doc.line(_fx,ty+9,_fx+_fw,ty+9);});
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.4);doc.line(M,H-14,W-M,H-14);
  doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(120,120,120);
  doc.text('By accepting this quotation and paying the required deposit, the client acknowledges having read and agreed to the above Terms & Conditions.',W/2,H-10,{align:'center'});
  doc.setFont('helvetica','bold');doc.setFontSize(6.5);doc.setTextColor(232,70,30);
  doc.text('Total Blind Design cc | 368 Voortrekker Rd, Maitland, Cape Town | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  // ── Save ──
  var _sanFn=function(s){return (s||'').replace(/[\\/:?*"<>|\s]+/g,'_');};
  var fn="TBD-Outdoor"+(gv("od_c_nm")?"-"+_sanFn(gv("od_c_nm")):"")+(gv("od_c_pn")?"-"+_sanFn(gv("od_c_pn")):"")+".pdf";
  _pdfSave(doc,fn);(typeof od_showToast==='function'?od_showToast:(typeof pwaToast==='function'?pwaToast:function(){}))("PDF saved!");
}

// ===== SAVE / LOAD =====
function od_getState(){
  return{
    v:2,od_rows:od_rows,od_uid:od_uid,od_expanded:od_expanded,
    c_nm:document.getElementById("od_c_nm").value,c_pn:document.getElementById("od_c_pn").value,
    c_ad:document.getElementById("od_c_ad").value,c_cl:document.getElementById("od_c_cl").value,
    c_em:document.getElementById("od_c_em").value,c_tl:document.getElementById("od_c_tl").value,
    c_re:document.getElementById("od_c_re").value,c_md:document.getElementById("od_c_md").value,c_gn:document.getElementById("od_c_gn").value,
    od_installCost:od_installCost,od_travelCost:od_travelCost,
    od_discountPct:od_discountPct,od_discountAccPct:od_discountAccPct
  };
}
function od_setState(s){
  od_rows=s.od_rows||[];od_uid=s.od_uid||od_rows.length+1;od_expanded=s.od_expanded||null;
  function sv(id,val){var e=document.getElementById(id);if(e)e.value=val||"";}
  sv("od_c_nm",s.c_nm);sv("od_c_pn",s.c_pn);sv("od_c_ad",s.c_ad);sv("od_c_cl",s.c_cl);
  sv("od_c_em",s.c_em);sv("od_c_tl",s.c_tl);sv("od_c_re",s.c_re);sv("od_c_md",s.c_md);sv("od_c_gn",s.c_gn);
  od_installCost=s.od_installCost||0;od_travelCost=s.od_travelCost||0;
  od_discountPct=s.od_discountPct||0;od_discountAccPct=s.od_discountAccPct||0;
  document.getElementById("od_inp_install").value=od_installCost;
  document.getElementById("od_inp_travel").value=od_travelCost;
  document.getElementById("od_discPctVal").textContent=od_discountPct+"%";
  document.getElementById("od_discAccVal").textContent=od_discountAccPct+"%";
  od_renderAllRows();
}
// Outdoor jobs unified with indoor: delegate to indoor panel
function od_pwaToggleJobs(){ if(typeof pwaToggleJobs==='function') pwaToggleJobs(); }
function od_pwaSaveJob(){ if(typeof pwaSaveJob==='function') pwaSaveJob(); }
// Legacy outdoor-only save path removed — unified into pwaSaveJob/tbd_jobs.
async function od_pwaRenderJobs(){
  var el=document.getElementById("od_pwaJobsList");if(!el)return;
  var q=((document.getElementById("od_pwaJobSearch")||{}).value||"").trim().toLowerCase();
  var cloudJobs=[],cloudIds=new Set();
  if(_currentUser&&navigator.onLine&&_sb){
    try{
      var r=await _sb.from('jobs').select('*').ilike('label','[Outdoor] %').order('saved_at',{ascending:false});
      if(!r.error&&r.data){cloudJobs=r.data;cloudJobs.forEach(function(j){cloudIds.add(j.id);});}
    }catch(e){}
  }
  var localJobs=[];
  try{var allLocal=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");localJobs=allLocal.filter(function(j){return!cloudIds.has(j.id);});}catch(e){}
  if(q){cloudJobs=cloudJobs.filter(function(j){return(j.label||'').toLowerCase().indexOf(q)!==-1;});localJobs=localJobs.filter(function(j){return(j.label||j.name||'').toLowerCase().indexOf(q)!==-1;});}
  var h='';
  if(_currentUser){
    h+='<div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Cloud Jobs</div>';
    if(cloudJobs.length===0){h+='<div style="color:#bbb;font-size:12px;padding:8px 0">No cloud jobs yet.</div>';}
    else{cloudJobs.forEach(function(j){
      var isOwner=j.user_id===_currentUser.id;
      var ownerLabel=isOwner?'me':(j.owner_email||'other rep');
      var displayName=(j.label||'').replace(/^\[Outdoor\] /,'');
      var dateStr=j.saved_at?new Date(j.saved_at).toLocaleDateString('en-ZA'):'';
      h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:#f8f8f8;border-radius:6px;margin-bottom:4px">'
        +'<div style="flex:1;min-width:0;margin-right:8px"><div style="font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+_esc(displayName)+'</div>'
        +'<div style="font-size:10px;color:#aaa">'+dateStr+' \u00b7 '+_esc(ownerLabel)+'</div></div>'
        +'<div style="display:flex;gap:4px;flex-shrink:0">'
        +'<button onclick="od_cloudLoadJob(\''+_esc(j.id)+'\')" style="font-size:11px;padding:5px 10px;background:#4A4A4A;color:#fff;border:none;border-radius:6px;cursor:pointer">Load</button>'
        +(isOwner&&navigator.onLine?'<button onclick="od_cloudDeleteJob(\''+_esc(j.id)+'\')" style="font-size:11px;padding:5px 8px;background:#fee;color:#c00;border:none;border-radius:6px;cursor:pointer">Del</button>':'')
        +'</div></div>';
    });}
    if(localJobs.length>0){
      h+='<div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:.5px;margin:12px 0 6px">Local Only</div>';
      localJobs.forEach(function(j){
        var dateStr=j.saved_at?new Date(j.saved_at).toLocaleDateString('en-ZA'):(j.date?new Date(j.date).toLocaleDateString('en-ZA'):'');
        var displayName=(j.label||j.name||'').replace(/^\[Outdoor\] /,'');
        h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:8px;background:#fffbf0;border:1px dashed #ddd;border-radius:6px;margin-bottom:4px">'
          +'<div style="flex:1;min-width:0;margin-right:8px"><div style="font-size:12px;font-weight:600">'+_esc(displayName)+' <span style="background:#e9c46a;color:#333;padding:1px 6px;border-radius:8px;font-size:9px;font-weight:700">local</span></div>'
          +'<div style="font-size:10px;color:#aaa">'+dateStr+(j.pending_sync?' \u00b7 pending sync':'')+'</div></div>'
          +'<div style="display:flex;gap:4px;flex-shrink:0">'
          +'<button onclick="od_localLoadJob(\''+_esc(j.id)+'\')" style="font-size:11px;padding:5px 10px;background:#4A4A4A;color:#fff;border:none;border-radius:6px;cursor:pointer">Load</button>'
          +'<button onclick="od_localDeleteJob(\''+_esc(j.id)+'\')" style="font-size:11px;padding:5px 8px;background:#fee;color:#c00;border:none;border-radius:6px;cursor:pointer">Del</button>'
          +'</div></div>';
      });
    }
  }else{
    var allLocal2=[];
    try{allLocal2=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");}catch(e){}
    if(q)allLocal2=allLocal2.filter(function(j){return((j.label||j.name)||'').toLowerCase().indexOf(q)!==-1;});
    if(allLocal2.length===0){h+='<div style="color:#bbb;font-size:12px;padding:8px 0">No saved jobs yet.</div>';}
    else{allLocal2.forEach(function(j,i){
      var dateStr=j.date?new Date(j.date).toLocaleDateString('en-ZA'):'';
      var displayName=(j.label||j.name||'').replace(/^\[Outdoor\] /,'');
      h+='<div style="display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">'
        +'<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;color:#1a1a1a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+_esc(displayName)+'</div>'
        +'<div style="font-size:11px;color:#aaa;margin-top:2px">'+dateStr+'</div></div>'
        +'<button onclick="od_pwaLoadJob('+i+')" style="background:#4A4A4A;color:#fff;border:none;border-radius:6px;padding:7px 12px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap">Load</button>'
        +'<button onclick="od_pwaDeleteJob('+i+')" style="background:#f0f0f0;color:#cc3333;border:none;border-radius:6px;padding:7px 10px;font-size:13px;cursor:pointer">\u2715</button>'
        +'</div>';
    });}
  }
  el.innerHTML=h;
}
async function od_cloudLoadJob(id){
  if(!_sb)return;
  try{
    var r=await _sb.from('jobs').select('state,label').eq('id',id).single();
    if(r.error||!r.data){od_showToast('\u26a0\ufe0f Could not load job.');return;}
    od_setState(JSON.parse(r.data.state));
    document.getElementById('od_pwaJobsPanel').style.display='none';
    od_showToast('\u2705 Loaded: '+(r.data.label||'').replace(/^\[Outdoor\] /,''));
  }catch(e){od_showToast('\u26a0\ufe0f Could not load job.');}
}
async function od_cloudDeleteJob(id){
  if(!_sb||!_currentUser)return;
  if(!navigator.onLine){od_showToast('Offline \u2014 delete unavailable.');return;}
  if(!confirm('Delete this job from the cloud?'))return;
  try{
    var r=await _sb.from('jobs').delete().eq('id',id).eq('user_id',_currentUser.id);
    if(r.error){od_showToast('\u26a0\ufe0f Could not delete.');return;}
    var jobs=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");
    jobs=jobs.filter(function(j){return j.id!==id;});
    localStorage.setItem("tbd_outdoor_jobs",JSON.stringify(jobs));
    od_pwaRenderJobs();od_showToast('\ud83d\uddd1\ufe0f Job deleted.');
  }catch(e){od_showToast('\u26a0\ufe0f Could not delete.');}
}
function od_localLoadJob(id){
  var jobs=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");
  var j=jobs.find(function(x){return x.id===id;});
  if(!j)return;
  od_setState(j.state);
  document.getElementById('od_pwaJobsPanel').style.display='none';
  od_showToast('\u2705 Loaded: '+(j.label||j.name||'').replace(/^\[Outdoor\] /,''));
}
function od_localDeleteJob(id){
  if(!confirm('Delete this job?'))return;
  var jobs=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");
  jobs=jobs.filter(function(x){return x.id!==id;});
  localStorage.setItem("tbd_outdoor_jobs",JSON.stringify(jobs));
  od_pwaRenderJobs();
}
function od_pwaLoadJob(idx){
  var jobs=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");
  var j=jobs[idx];if(!j)return;
  od_setState(j.state);
  document.getElementById('od_pwaJobsPanel').style.display='none';
  od_showToast('\u2705 Loaded: '+(j.label||j.name||'').replace(/^\[Outdoor\] /,''));
}
function od_pwaDeleteJob(idx){
  if(!confirm('Delete this job?'))return;
  var jobs=JSON.parse(localStorage.getItem("tbd_outdoor_jobs")||"[]");
  jobs.splice(idx,1);
  localStorage.setItem("tbd_outdoor_jobs",JSON.stringify(jobs));
  od_pwaRenderJobs();
}


// ===== INIT =====
document.getElementById("od_c_md").value=new Date().toISOString().split("T")[0];
od_rows=[od_newRow()];
od_renderAllRows();
(function(){var el=document.getElementById("od_c_md");if(el)el.value=new Date().toISOString().split("T")[0];od_rows=[od_newRow()];od_renderAllRows();})()
