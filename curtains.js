// ══════════════════════════════════════════════════════════
// CURTAINS MODULE
// ══════════════════════════════════════════════════════════

// ── Track width bins ──────────────────────────────────────
var CT_W_HD=[900,1200,1500,1800,2100,2400,3000,3600,4200,4800,5400,5700]; // hand-drawn / ripple
var CT_W_SM=[900,1200,1500,1800,2100,2400,3000,3600,4200,4800,5400,6000,6600,7200,7800,8400,9000]; // somfy

// ── Glide track pricing ───────────────────────────────────
var CT_GLIDE={
  'Hand Drawn':{
    'Top Fix':    [333,408,484,563,639,715,866,1021,1172,1325,1479,1554],
    'Single Face Fix':[358,442,529,615,699,785,956,1120,1295,1465,1635,1719],
    'Double Face Fix':[715,886,1052,1224,1389,1560,1898,2238,2577,2913,3249,3422]
  },
  'Urban Hand Drawn':{
    'Top Fix':    [643,775,906,1037,1167,1298,1560,1821,2081,2344,2607,2736],
    'Single Face Fix':[683,826,969,1113,1257,1398,1686,1973,2260,2546,2833,2974],
    'Double Face Fix':[1339,1616,1890,2168,2446,2722,3280,3833,4387,4940,5492,5771]
  },
  'Avant Hand Drawn':{
    'Top Fix':    [569,683,806,921,1037,1158,1394,1625,1861,2097,2335,2449],
    'Single Face Fix':[603,736,866,996,1128,1257,1512,1776,2037,2299,2555,2686],
    'Double Face Fix':[1182,1435,1686,1938,2188,2440,2938,3439,3943,4442,4946,5195]
  }
};

// ── Ripple track pricing ──────────────────────────────────
var CT_RIPPLE={
  'Hand Drawn':{
    'Top Fix':    [525,648,775,902,1025,1150,1402,1660,1911,2164,2415,2546],
    'Single Face Fix':[548,683,813,950,1087,1224,1495,1760,2034,2305,2569,2706],
    'Double Face Fix':[1091,1358,1630,1898,2168,2434,2974,3512,4055,4592,5131,5397]
  },
  'Urban Hand Drawn':{
    'Top Fix':    [829,1011,1191,1374,1554,1736,2097,2459,2823,3184,3543,3723],
    'Single Face Fix':[870,1060,1257,1449,1646,1836,2223,2610,2993,3381,3769,3964],
    'Double Face Fix':[1710,2088,2464,2842,3219,3596,4352,5105,5860,6614,7369,7747]
  },
  'Avant Hand Drawn':{
    'Top Fix':    [739,917,1087,1263,1438,1609,1961,2308,2660,3007,3354,3532],
    'Single Face Fix':[775,966,1150,1339,1525,1710,2088,2459,2833,3210,3581,3769],
    'Double Face Fix':[1525,1890,2251,2623,2984,3351,4079,4810,5539,6268,6999,7361]
  }
};

// ── Somfy motorised track pricing (single/double) ─────────
var CT_SOMFY={
  'Movelite 35':{
    'Single':[7464,7842,8217,8593,8971,9346,10098,10852,11606,12359,13111,13863,14615,15367,16118,16870,17622],
    'Double':[14789,15492,16197,16904,17610,18312,19726,21138,22544,23956,25368,26777,28185,29593,31002,32410,33818]
  },
  'Movelite 60':{
    'Single':[10572,10950,11325,11701,12079,12454,13206,13960,14714,15468,16219,16971,17723,18474,19226,19978,20730],
    'Double':[21004,21708,22412,23119,23825,24528,25941,27353,28759,30171,31584,32992,34400,35809,37217,38625,40033]
  },
  'Movelite 35 Wire Free':{
    'Single':[8704,9144,9582,10019,10459,10896,11774,12653,13534,14409,15288,16164,17040,17917,18793,19670,20546],
    'Double':[16914,17772,18622,19473,20326,21178,22882,24591,26301,28004,29711,31414,33117,34819,36522,38224,39928]
  },
  'Irismo 45 Wire Free':{
    'Single':[14066,14462,14861,15263,15660,16056,16852,17650,18446,19241,20041,20836,21630,22429,23223,24020,24819],
    'Double':[29655,30404,31153,31897,32645,33393,34884,36383,37875,39367,40864,42357,43852,45345,46842,48335,49827]
  },
  'Glydea 60kg':{
    'Single':[15737,16135,16534,16933,17333,17728,18524,19323,20119,20913,21713,22508,23303,24102,24896,25692,26491],
    'Double':[31326,32076,32824,33569,34317,35065,36556,38053,39546,41039,42537,44029,45525,47016,48515,50005,51499]
  }
};

// ── Track options ─────────────────────────────────────────
var CT_OPT_HD_W=[900,1200,1500,1800,2100,2400,3000,3600,4200,4800,5400,5700];
var CT_CONT_BEND_HD=[606,725,908,1086,1270,1449,1630,1814,1991,2169,2355,2533];
var CT_OPT_SM_W=[900,1200,1500,1800,2100,2400,3000,3600,4200,4800,5400,6000,6600,7200,7800,8400,9000];
var CT_CONT_BEND_SM=[2837,3034,3230,3429,3626,3821,4018,4215,4413,4608,4806,5004,5200,5397,5594,5791,5988];

// ── Colour availability ────────────────────────────────────
var CT_COLOURS={
  'Hand Drawn':['White','Black'],
  'Urban Hand Drawn':['White','Silver','Champagne','Bronze','Charcoal'],
  'Avant Hand Drawn':['White','Black','Silver','Champagne','Bronze','Charcoal'],
  'Movelite 35':['White','Black','Silver'],
  'Movelite 60':['White','Black','Silver'],
  'Movelite 35 Wire Free':['White','Black','Silver'],
  'Irismo 45 Wire Free':['White','Black','Silver'],
  'Glydea 60kg':['White','Black','Silver']
};

// ── RTS remotes ────────────────────────────────────────────
var CT_RTS_REMOTES={
  'None':0,'Situo 5 RTS Pure':1306,'Situo 5 RTS Silver':1797,
  'Telis 6 Chronis Pure':5434,'Telis 16 Pure':5082,
  'Situo 5 RTS Pure Variation':2137,'Smoove Origin 1':852,
  'Smoove Origin 2':1588,'Smoove Origin 4':1989,'Tahoma Switch Pro':4522
};
var CT_ZB_REMOTES={
  'None':0,'Glydea Zigbee Module':1053,'Ysia 1 Zigbee White':1490,
  'Ysia 5 Zigbee White':1540,'Ysia 1 Zigbee White Variation':1702,
  'Ysia 5 Zigbee White Variation':2373,'Tahoma Switch Pro':4522,'Smart Plug Zigbee':1264
};

// ── State ─────────────────────────────────────────────────
var ct_rows=[];
var ct_rowId=0;
var ct_expanded=null;
var ct_labourUnlined=0;
var ct_labourLined=0;
var ct_labourPPUnlined=0;
var ct_labourPPLined=0;
var ct_discPct=0;
var ct_discTrkPct=0;
var ct_installCost=0;
var ct_travelCost=0;

// ── Helpers ────────────────────────────────────────────────
function ct_fb(v,a){for(var i=0;i<a.length;i++)if(v<=a[i])return i;return a.length-1;}
function ct_fmtR(n){return 'R\u00a0'+Math.round(n).toLocaleString('en-ZA');}
function ct_esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function ct_newRow(){
  return {id:++ct_rowId,loc:'',w:'',d:'',trackType:'Single',fullness:2,fabW:1.4,stack:'Centre Split',
    curtainStyle:'Ripple',pinchType:'Single',tapeType:'Stud 25mm',floorClear:'Touching',floorPool:0,ctHdrDrop:null,
    t1lined:false,t1fabPrice:0,t1linPrice:0,t1fabName:'',t1fabColour:'',t1linName:'',t1linColour:'',
    t2lined:false,t2fabPrice:0,t2linPrice:0,t2fabName:'',t2fabColour:'',t2linName:'',t2linColour:'',
    trkStyle:'Ripple',trkModel:'Hand Drawn',trkFix:'Top Fix',trkColour:'White',
    trkSomfyType:'Single',trkRemoteType:'None',trkRemote:'None',trkSmartConnect:'None',
    opt90:false,opt45:false,optContBend:false,optSingleWand:false,optDoubleWand:false,notes:'',
    t1fabOvr:null,t1linOvr:null,t1labOvr:null,
    t2fabOvr:null,t2linOvr:null,t2labOvr:null,
    trkOvr:null};
}
function ct_getRow(id){for(var i=0;i<ct_rows.length;i++)if(ct_rows[i].id===id)return ct_rows[i];return null;}
function ct_trackDeduction(r){
  if(r.trkStyle==='Somfy')return 30;
  if(r.trkModel==='Urban Hand Drawn')return 35;
  if(r.trkModel==='Avant Hand Drawn')return 45;
  if(r.trkModel==='Hand Drawn')return 35;
  return 0;
}
function ct_trackDeductionLabel(r){
  if(r.trkStyle==='Somfy')return 'Somfy \u221230mm';
  if(r.trkModel==='Urban Hand Drawn')return 'Urban \u221235mm';
  if(r.trkModel==='Avant Hand Drawn')return 'Avant \u221245mm';
  if(r.trkModel==='Hand Drawn')return 'Top Fix \u221235mm';
  return '';
}
function ct_effectiveDrop(r){
  var d=parseInt(r.d)||0;if(!d)return 0;
  if(d<0)return 0;
  if(r.floorClear==='On Floor'){
    var pool=Math.max(0,Math.min(300,parseInt(r.floorPool)||0));
    return d+pool;
  }
  var td=ct_trackDeduction(r);
  var fd=r.floorClear==='5mm Off'?5:r.floorClear==='10mm Off'?10:0;
  return Math.max(0,d-td-fd);
}

// ── Track price lookup ─────────────────────────────────────
function ct_calcTrackPrice(r){
  var w=parseInt(r.w)||0;
  if(!w)return 0;
  if(r.trkStyle==='Somfy'){
    var tbl=CT_SOMFY[r.trkModel];
    if(!tbl)return 0;
    var key=r.trackType==='Double'?'Double':'Single';
    var arr=tbl[key];if(!arr)return 0;
    var idx=ct_fb(w,CT_W_SM);
    return arr[Math.min(idx,arr.length-1)];
  } else {
    var tbl2=r.trkStyle==='Ripple'?CT_RIPPLE:CT_GLIDE;
    var mdl=tbl2[r.trkModel];if(!mdl)return 0;
    var fix=r.trackType==='Double'?'Double Face Fix':r.trkFix;
    var arr2=mdl[fix];if(!arr2)return 0;
    if(w>5700){
      var p5700=arr2[arr2.length-1];
      var rw=Math.ceil(w/300)*300;
      return Math.round(p5700/5.7*(rw/1000));
    }
    var idx2=ct_fb(w,CT_W_HD);
    return arr2[Math.min(idx2,arr2.length-1)];
  }
}

function ct_calcOptPrice(r){
  var w=parseInt(r.w)||0;if(!w)return 0;
  var isSomfy=r.trkStyle==='Somfy';
  var tot=0;
  if(r.opt90)tot+=isSomfy?2837:606;
  if(r.opt45)tot+=isSomfy?2837:606;
  if(r.optContBend){
    var arr=isSomfy?CT_CONT_BEND_SM:CT_CONT_BEND_HD;
    var bins=isSomfy?CT_W_SM:CT_W_HD;
    tot+=arr[ct_fb(w,bins)];
  }
  if(r.optSingleWand)tot+=136;
  if(r.optDoubleWand)tot+=269;
  if(r.trkStyle==='Somfy'){
    var rem=r.trkRemote||'None';
    var rp=CT_RTS_REMOTES[rem]||CT_ZB_REMOTES[rem]||0;
    tot+=rp;
    tot+=SMART_P[r.trkSmartConnect||'None']||0;
  }
  return tot;
}

// ── Core calculation per track panel ──────────────────────
function ct_calcPanel(w,d,fullness,fabW,lined,fabPrice,linPrice,curtainStyle){
  // w in mm, d in mm
  var wm=w/1000,dm=d/1000;
  var isRailroad=fabW>=2.8;
  var canRailroad=isRailroad&&(dm<=(fabW-0.3));
  var drops,meterage,railroaded=false,fabDrops;

  if(curtainStyle==='Pinch Pleat'){
    // Pinch pleat: standard drops using fabW, honours user-selected fullness
    drops=Math.ceil((wm+0.2)*fullness/fabW);
    meterage=Math.ceil((dm+0.3)*drops);
  } else if(canRailroad){
    // Railroaded: labour drops ÷1.4, meterage = width-based
    drops=Math.ceil((wm*fullness)/1.4);
    meterage=Math.ceil(wm*fullness+0.4);
    railroaded=true;
  } else if(isRailroad&&!canRailroad){
    // Wide fabric but drop too tall — labour drops use 1.4m equiv, meterage uses actual fabric cuts
    fabDrops=Math.ceil((wm*fullness+0.4)/fabW);
    drops=Math.ceil((wm*fullness+0.4)/1.4);
    meterage=Math.ceil((dm+0.3)*fabDrops);
  } else {
    // Standard 1.4m fabric
    drops=Math.ceil((wm*fullness+0.4)/1.4);
    meterage=Math.ceil((dm+0.3)*drops);
  }

  var fabCost=fabPrice*meterage;
  var linCost=lined?(linPrice*meterage):0;
  var isPP=curtainStyle==='Pinch Pleat';
  var labRate=isPP?(lined?ct_labourPPLined:ct_labourPPUnlined):(lined?ct_labourLined:ct_labourUnlined);
  var labCost=labRate*drops;
  var longDrop=d>3000;
  if(longDrop)labCost=labCost*1.2;
  return {drops:drops,meterage:meterage,fabDrops:fabDrops||drops,fabCost:fabCost,linCost:linCost,labCost:labCost,
    longDrop:longDrop,railroaded:railroaded,cantRailroad:isRailroad&&!canRailroad,
    subtotal:fabCost+linCost+labCost};
}

// true = drop exceeds railroad limit for selected fabric
function ct_checkRailroad(d,fabW){
  if(fabW<2.8)return false;
  var dm=(parseInt(d)||0)/1000;
  return dm>(fabW-0.3);
}

// ── Row total (curtain cost, excl track) ───────────────────
function ct_ovrVal(ovr,calc){return ovr!=null?ovr:calc;}
function ct_panelEffective(p,fabOvr,linOvr,labOvr){
  var fab=ct_ovrVal(fabOvr,p.fabCost);
  var lin=ct_ovrVal(linOvr,p.linCost);
  var lab=ct_ovrVal(labOvr,p.labCost);
  return {fab:fab,lin:lin,lab:lab,total:fab+lin+lab};
}
function ct_rowCurtainTotal(r){
  var w=parseInt(r.w)||0,d=ct_effectiveDrop(r);
  if(!w||!d)return null;
  if(r.trackType==='Double'){
    var p1=ct_calcPanel(w,d,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
    var p2=ct_calcPanel(w,d,r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
    var e1=ct_panelEffective(p1,r.t1fabOvr,r.t1linOvr,r.t1labOvr);
    var e2=ct_panelEffective(p2,r.t2fabOvr,r.t2linOvr,r.t2labOvr);
    return e1.total+e2.total;
  } else {
    var p=ct_calcPanel(w,d,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
    var e=ct_panelEffective(p,r.t1fabOvr,r.t1linOvr,r.t1labOvr);
    return e.total;
  }
}

function ct_rowTotal(r){
  var ct=ct_rowCurtainTotal(r);
  if(ct===null)return null;
  var trk=ct_ovrVal(r.trkOvr,ct_calcTrackPrice(r))+ct_calcOptPrice(r);
  return ct+trk;
}
function ct_optBreakdown(r){
  var isSomfy=r.trkStyle==='Somfy', w=parseInt(r.w)||0, h='';
  function row(lbl,price){return '<div class="ct-calc-row"><span class="ct-calc-lbl">\u21b3 '+lbl+'</span><span class="ct-calc-val">'+ct_fmtR(price)+'</span></div>';}
  if(r.opt90) h+=row('90\u00b0 Bend', isSomfy?2837:606);
  if(r.opt45) h+=row('45\u00b0 Bend', isSomfy?2837:606);
  if(r.optContBend){var arr=isSomfy?CT_CONT_BEND_SM:CT_CONT_BEND_HD; var bins=isSomfy?CT_W_SM:CT_W_HD; h+=row('Continuous Bend', arr[ct_fb(w,bins)]);}
  if(r.optSingleWand) h+=row('Single Wand', 136);
  if(r.optDoubleWand) h+=row('Double Wand', 269);
  if(isSomfy){var rem=r.trkRemote||'None'; var rp=CT_RTS_REMOTES[rem]||CT_ZB_REMOTES[rem]||0; if(rp>0) h+=row('Remote ('+rem+')', rp);}
  if(isSomfy){var sc=r.trkSmartConnect||'None'; var scp=SMART_P[sc]||0; if(scp>0) h+=row('Smart Connect ('+sc+')', scp);}
  return h;
}

// ── Colour options for model ───────────────────────────────
function ct_colourOpts(model,cur){
  var list=CT_COLOURS[model]||['White','Black'];
  var h='';
  for(var i=0;i<list.length;i++)h+='<option'+(list[i]===(cur||list[0])?' selected':'')+'>'+list[i]+'</option>';
  return h;
}

// ── Build a card ───────────────────────────────────────────
function ct_buildCard(r){
  var lt=String.fromCharCode(64+ct_rows.indexOf(r)+1);
  var w=parseInt(r.w)||0,rawD=parseInt(r.d)||0,d=rawD?ct_effectiveDrop(r):0;
  var total=ct_rowTotal(r);
  var isDbl=r.trackType==='Double';
  var isSomfy=r.trkStyle==='Somfy';
  var _cdims=w&&rawD;var cardCls='ct-card'+(_cdims||total!==null?(isDbl?' double-priced':' priced'):r.loc?' partial':'');
  var letCls='ct-letter'+(isDbl?' dbl':'');
  var badge=isDbl?'<span class="ct-badge ct-badge-d">Double</span>':'<span class="ct-badge ct-badge-s">Single</span>';
  var priceStr=total!==null?ct_fmtR(total):'—';
  var priceCls='ct-price'+(total===null?' empty':'');
  var isOpen=ct_expanded===r.id;

  var stackOpts=['Left Stack','Centre Split','Right Stack'];
  var isPinch=r.curtainStyle==='Pinch Pleat';
  function pillStack(lbl,val){return '<button class="ct-pill'+(r.stack===val?' on':'')+'" onclick="ct_getRow('+r.id+').stack=\''+val+'\';ct_renderAllRows()">'+lbl+'</button>';}
  function pillFull(lbl,val){return '<button class="ct-pill'+(r.fullness===val?' on':'')+'" onclick="ct_getRow('+r.id+').fullness='+val+';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function pillFab(lbl,val){return '<button class="ct-pill'+(r.fabW===val?' on':'')+'" onclick="ct_getRow('+r.id+').fabW='+val+';ct_checkRR('+r.id+');ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function pillType(lbl,val,cls){return '<button class="ct-pill'+(r.trackType===val?' '+cls:'')+'" onclick="ct_getRow('+r.id+').trackType=\''+val+'\';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function pillLined(panel,lbl,val,cls){return '<button class="ct-pill'+(r['t'+panel+'lined']===val?' '+cls:'')+'" onclick="ct_getRow('+r.id+').t'+panel+'lined='+val+';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function ovrInp(key,calcVal){
    var ovr=r[key];var isOvr=ovr!=null;var disp=isOvr?ovr:Math.round(calcVal);
    return '<span style="display:flex;align-items:center;gap:3px">'
      +'<input type="number" min="0" value="'+disp+'" style="width:76px;border:1.5px solid '+(isOvr?'#E8461E':'#e0e0e0')+';border-radius:4px;padding:2px 5px;font-size:12px;font-weight:700;color:'+(isOvr?'#E8461E':'#1a1a1a')+';text-align:right;font-family:inherit" oninput="ct_getRow('+r.id+').'+key+'=this.value===\'\'?null:(parseFloat(this.value)||0);" onchange="ct_updatePrices();ct_renderRow('+r.id+')">'
      +(isOvr?'<button onclick="ct_getRow('+r.id+').'+key+'=null;ct_updatePrices();ct_renderRow('+r.id+')" style="font-size:13px;background:none;border:none;color:#E8461E;cursor:pointer;padding:0;line-height:1">\u00d7</button>':'')
      +'</span>';
  }
  function pillCurtStyle(lbl,val){var extra=val==='Pinch Pleat'?';if(_r.trkStyle===\'Ripple\'){_r.trkStyle=\'Glide\';_r.trkModel=\'Avant Hand Drawn\';_r.trkColour=\'White\';};if(_r.fullness<2.25)_r.fullness=2.25;':';if(_r.trkStyle===\'Glide\'){_r.trkStyle=\'Ripple\';_r.trkModel=\'Hand Drawn\';_r.trkColour=\'White\';};if(_r.fullness>2)_r.fullness=2;';return '<button class="ct-pill'+(r.curtainStyle===val?' on-p':'')+'" onclick="var _r=ct_getRow('+r.id+');_r.curtainStyle=\''+val+'\''+extra+';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function pillPinch(lbl,val){return '<button class="ct-pill'+(r.pinchType===val?' on':'')+'" onclick="ct_getRow('+r.id+').pinchType=\''+val+'\';ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function optBtn(key,lbl,price,cls){
    return '<button class="ct-opt-btn'+(r[key]?(cls||' on'):'')+'" onclick="ct_getRow('+r.id+').'+key+'=!ct_getRow('+r.id+').'+key+';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'<span class="ct-opt-price">'+ct_fmtR(price)+'</span></button>';
  }

  // cont bend price
  var cbPrice=0;
  if(w){
    var cbArr=isSomfy?CT_CONT_BEND_SM:CT_CONT_BEND_HD;
    var cbBins=isSomfy?CT_W_SM:CT_W_HD;
    cbPrice=cbArr[ct_fb(w,cbBins)];
  }

  // model options for selected style
  var modelOpts='';
  var models=isSomfy?Object.keys(CT_SOMFY):Object.keys(r.trkStyle==='Ripple'?CT_RIPPLE:CT_GLIDE);
  for(var mi=0;mi<models.length;mi++)modelOpts+='<option'+(models[mi]===r.trkModel?' selected':'')+'>'+models[mi]+'</option>';

  // fixation opts (hidden for Somfy)
  var fixOpts='';
  if(!isSomfy){
    var fixes=isDbl?['Double Face Fix']:['Top Fix','Single Face Fix','Double Face Fix'];
    for(var fi=0;fi<fixes.length;fi++)fixOpts+='<option'+(fixes[fi]===r.trkFix?' selected':'')+'>'+fixes[fi]+'</option>';
  }

  // panel calc display for single track
  var calcHtml='';
  if(w&&d){
    var railroad=ct_checkRailroad(d,r.fabW);
    if(railroad)calcHtml+='<div style="background:#fff8e1;border:1px solid #f0c040;border-radius:8px;padding:10px;margin-top:8px;font-size:12px;color:#8a6000">&#9888;&#65039; Drop '+(d/1000).toFixed(2)+'m exceeds railroad limit ('+(r.fabW-0.3).toFixed(1)+'m = '+r.fabW+'m \u2212 0.3m). Manufacturing in drops using '+r.fabW+'m fabric width.</div>';
    else if(r.fabW>=2.8)calcHtml+='<div style="background:#e8f5e9;border:1px solid #81c784;border-radius:8px;padding:8px 10px;margin-top:8px;font-size:12px;color:#2e7d32">&#10003; Railroaded \u2014 '+r.fabW+'m fabric. Drop '+(d/1000).toFixed(2)+'m \u2264 '+(r.fabW-0.3).toFixed(1)+'m limit.</div>';
    if(!isDbl){
      var p=ct_calcPanel(w,d,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
      calcHtml+='<div class="ct-calc" style="margin-top:10px">'
        +'<div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px;letter-spacing:.5px">CALCULATED</div>'
        +(rawD?'<div class="ct-calc-row" style="color:#888;font-size:11px"><span class="ct-calc-lbl">Effective Drop<small>'+rawD+'mm'+(r.floorClear==='On Floor'?' + '+(r.floorPool||0)+'mm pool':r.floorClear==='Touching'?' \u2212 '+ct_trackDeduction(r)+'mm track':' \u2212 '+ct_trackDeduction(r)+'mm track \u2212 '+(r.floorClear==='5mm Off'?5:10)+'mm floor')+'</small></span><span class="ct-calc-val">'+d+'mm</span></div>':'')
        +(isPinch
          ?'<div class="ct-calc-row"><span class="ct-calc-lbl">Drops<small>(('+((w/1000).toFixed(2))+'m + 0.2) \u00d7 '+r.fullness+' \u00f7 '+r.fabW+' = '+(((w/1000)+0.2)*r.fullness/r.fabW).toFixed(2)+' \u2192 '+p.drops+')</small></span><span class="ct-calc-val">'+p.drops+' drops</span></div>'
          :'<div class="ct-calc-row"><span class="ct-calc-lbl">Drops<small>('+((w/1000).toFixed(2))+'m \u00d7 '+r.fullness+' \u00f7 '+(p.cantRailroad?'1.4 (labour equiv)':r.fabW)+' = '+(p.cantRailroad?(w/1000*r.fullness/1.4).toFixed(2):(w/1000*r.fullness/r.fabW).toFixed(2))+' \u2192 '+p.drops+')</small></span><span class="ct-calc-val">'+p.drops+' drops</span></div>')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Meterage<small>(('+((d/1000).toFixed(2))+'m + 0.3) \u00d7 '+p.fabDrops+')</small></span><span class="ct-calc-val">'+p.meterage.toFixed(2)+' m</span></div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Cost<small>('+p.meterage.toFixed(2)+'m \u00d7 '+ct_fmtR(r.t1fabPrice)+'/m)</small></span><span class="ct-calc-val">'+ovrInp('t1fabOvr',p.fabCost)+'</span></div>'
        +(r.t1lined?'<div class="ct-calc-row"><span class="ct-calc-lbl">Lining Cost<small>('+p.meterage.toFixed(2)+'m \u00d7 '+ct_fmtR(r.t1linPrice)+'/m)</small></span><span class="ct-calc-val">'+ovrInp('t1linOvr',p.linCost)+'</span></div>':'')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Labour Cost<small>('+p.drops+' drops \u00d7 '+ct_fmtR(isPinch?(r.t1lined?ct_labourPPLined:ct_labourPPUnlined):(r.t1lined?ct_labourLined:ct_labourUnlined))+'/drop '+(r.t1lined?'lined':'unlined')+(p.longDrop?' +20% (drop &gt; 3000mm)':'')+')</small></span><span class="ct-calc-val">'+ovrInp('t1labOvr',p.labCost)+'</span></div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Track — '+r.trkModel+' '+(isSomfy?r.trkSomfyType:r.trkFix)+' '+w+'mm · '+r.trkColour+'</span><span class="ct-calc-val">'+ovrInp('trkOvr',ct_calcTrackPrice(r))+'</span></div>'
        +ct_optBreakdown(r)
        +'<div class="ct-calc-row ct-calc-total"><span>Window Total</span><span>'+ct_fmtR(total)+'</span></div>'
        +'</div>';
    } else {
      // double track calc
      var p1=ct_calcPanel(w,d,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
      var p2=ct_calcPanel(w,d,r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
      var trkP=ct_calcTrackPrice(r);
      var optP=ct_calcOptPrice(r);
      calcHtml+='<div class="ct-calc" style="margin-top:10px">'
        +'<div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px;letter-spacing:.5px">CALCULATED</div>'
        +'<div style="font-size:11px;font-weight:700;color:#1a6fa0;margin:4px 0 2px">\uD83D\uDD35 TRACK 1 '+(r.t1lined?'(LINED)':'(UNLINED)')+'</div>'
        +(isPinch
          ?'<div class="ct-calc-row"><span class="ct-calc-lbl">Drops<small>(('+((w/1000).toFixed(2))+'m + 0.2) \u00d7 '+r.fullness+' \u00f7 '+r.fabW+' = '+(((w/1000)+0.2)*r.fullness/r.fabW).toFixed(2)+' \u2192 '+p1.drops+')</small></span><span class="ct-calc-val">'+p1.drops+' drops</span></div>'
          :'<div class="ct-calc-row"><span class="ct-calc-lbl">Drops<small>('+((w/1000).toFixed(2))+'m \u00d7 '+r.fullness+' \u00f7 '+(p1.cantRailroad?'1.4 (labour equiv)':r.fabW)+' = '+(p1.cantRailroad?(w/1000*r.fullness/1.4).toFixed(2):(w/1000*r.fullness/r.fabW).toFixed(2))+' \u2192 '+p1.drops+')</small></span><span class="ct-calc-val">'+p1.drops+' drops</span></div>')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Meterage</span><span class="ct-calc-val">'+p1.meterage.toFixed(2)+' m</span></div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Cost</span><span class="ct-calc-val">'+ovrInp('t1fabOvr',p1.fabCost)+'</span></div>'
        +(r.t1lined?'<div class="ct-calc-row"><span class="ct-calc-lbl">Lining Cost</span><span class="ct-calc-val">'+ovrInp('t1linOvr',p1.linCost)+'</span></div>':'')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Labour Cost<small>('+p1.drops+' \u00d7 '+ct_fmtR(isPinch?(r.t1lined?ct_labourPPLined:ct_labourPPUnlined):(r.t1lined?ct_labourLined:ct_labourUnlined))+'/drop'+(p1.longDrop?' +20% (drop &gt; 3000mm)':'')+')</small></span><span class="ct-calc-val">'+ovrInp('t1labOvr',p1.labCost)+'</span></div>'
        +'<div style="font-size:11px;font-weight:700;color:#6a1aa0;margin:8px 0 2px">\uD83D\uDFE3 TRACK 2 '+(r.t2lined?'(LINED)':'(UNLINED)')+'</div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Drops (same window)</span><span class="ct-calc-val">'+p2.drops+' drops</span></div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Meterage</span><span class="ct-calc-val">'+p2.meterage.toFixed(2)+' m</span></div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric Cost</span><span class="ct-calc-val">'+ovrInp('t2fabOvr',p2.fabCost)+'</span></div>'
        +(r.t2lined?'<div class="ct-calc-row"><span class="ct-calc-lbl">Lining Cost</span><span class="ct-calc-val">'+ovrInp('t2linOvr',p2.linCost)+'</span></div>':'')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Labour Cost<small>'+(p2.longDrop?' (+20% (drop &gt; 3000mm))':'')+'</small></span><span class="ct-calc-val">'+ovrInp('t2labOvr',p2.labCost)+'</span></div>'
        +'<div style="font-size:11px;font-weight:700;color:#555;margin:8px 0 2px">TRACK HARDWARE</div>'
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Track — '+r.trkModel+' DFF '+w+'mm · '+r.trkColour+'</span><span class="ct-calc-val">'+ovrInp('trkOvr',trkP)+'</span></div>'
        +ct_optBreakdown(r)
        +'<div class="ct-calc-row ct-calc-total ct-calc-total-d"><span>Window Total</span><span>'+ct_fmtR(total)+'</span></div>'
        +'</div>';
    }
  }

  // track pill helpers
  function pillTrkStyle(lbl,val){return '<button class="ct-pill'+(r.trkStyle===val?' on':'')+'" onclick="var _r=ct_getRow('+r.id+');_r.trkStyle=\''+val+'\';_r.trkModel=\''+val+'\'===\'Somfy\'?\'Movelite 35\':(\''+val+'\'===\'Ripple\'?\'Hand Drawn\':\'Avant Hand Drawn\');_r.trkColour=\'White\';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'</button>';}
  function pillTrkModel(val){return '<button class="ct-pill'+(r.trkModel===val?' on':'')+'" onclick="var _r=ct_getRow('+r.id+');_r.trkModel=\''+val+'\';_r.trkColour=CT_COLOURS[\''+val+'\']?CT_COLOURS[\''+val+'\'][0]:\'White\';ct_updatePrices();ct_renderRow('+r.id+')">'+val+'</button>';}
  function pillTrkFix(val){return '<button class="ct-pill'+(r.trkFix===val?' on':'')+'"'+(isDbl?' disabled style="opacity:.5"':'')+' onclick="ct_getRow('+r.id+').trkFix=\''+val+'\';ct_updatePrices();ct_renderRow('+r.id+')">'+val+'</button>';}
  function pillTrkSomfy(val){return '<button class="ct-pill'+(r.trkSomfyType===val?' on':'')+'" onclick="ct_getRow('+r.id+').trkSomfyType=\''+val+'\';ct_updatePrices();ct_renderRow('+r.id+')">'+val+'</button>';}
  function pillTrkColour(val){return '<button class="ct-pill'+(r.trkColour===val?' on':'')+'" onclick="ct_getRow('+r.id+').trkColour=\''+val+'\';ct_renderRow('+r.id+')">'+val+'</button>';}

  var styleOpts=(isPinch?pillTrkStyle('Glide','Glide'):pillTrkStyle('Ripple','Ripple'))+pillTrkStyle('Somfy','Somfy');
  var modelPills='';var modelList=isSomfy?Object.keys(CT_SOMFY):Object.keys(r.trkStyle==='Ripple'?CT_RIPPLE:CT_GLIDE);
  for(var _mi=0;_mi<modelList.length;_mi++)modelPills+=pillTrkModel(modelList[_mi]);
  var fixPills='';
  if(isSomfy){fixPills=pillTrkSomfy('Single')+pillTrkSomfy('Double');}
  else{var _fixes=isDbl?['Double Face Fix']:['Top Fix','Single Face Fix','Double Face Fix'];for(var _fi=0;_fi<_fixes.length;_fi++)fixPills+=pillTrkFix(_fixes[_fi]);}
  var colourList=CT_COLOURS[r.trkModel]||['White','Black'];
  var colourPills='';for(var _ci=0;_ci<colourList.length;_ci++)colourPills+=pillTrkColour(colourList[_ci]);

  var trkRow='<div style="display:grid;grid-template-columns:'+(isSomfy?'auto':'auto 1fr')+';gap:10px;margin-top:10px;align-items:end">'
    +'<div><label class="lbl">Track Style</label><div class="ct-pill-row ct-pill-compact">'+styleOpts+'</div></div>'
    +(isSomfy?'':'<div><label class="lbl">'+('Fixation'+(isDbl?' <span style="font-size:10px;color:#aaa">(auto DFF)</span>':''))+'</label><div class="ct-pill-row">'+fixPills+'</div></div>')
    +'</div>'
    +'<div style="margin-top:10px"><label class="lbl">Track Model</label><div class="ct-pill-row">'+modelPills+'</div></div>'
    +(isSomfy
      ? '<div style="margin-top:10px"><label class="lbl">Colour</label><div style="font-size:12px;color:#856404;background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:6px 10px;margin-top:4px">&#9888; Only available in White</div></div>'
      : '<div style="margin-top:10px"><label class="lbl">Colour</label><div class="ct-pill-row">'+colourPills+'</div>'+(r.trkModel==='Urban Hand Drawn'?'<div style="font-size:10px;color:#e05000;margin-top:2px">&#9888; No Black</div>':'')+'</div>');

  // track width warning
  var trkWidthWarn='';
  if(w){
    var isSomfyTrk=r.trkStyle==='Somfy';
    if(isSomfyTrk&&w>9000){
      trkWidthWarn='<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:8px 12px;font-size:12px;color:#856404;margin-top:6px">⚠️ Somfy track '+w+'mm exceeds 9000mm maximum width.</div>';
    } else if(!isSomfyTrk&&w>5700){
      var _rw=Math.ceil(w/300)*300;
      trkWidthWarn='<div style="background:#e8f5e9;border:1px solid #81c784;border-radius:6px;padding:8px 12px;font-size:12px;color:#2e7d32;margin-top:6px">\u2139\ufe0f Track '+w+'mm exceeds 5700mm \u2014 spliced. Width rounded up to '+_rw+'mm, priced pro-rata from 5700mm column.</div>';
    }
  }

  // remote row (Somfy only)
  var remoteRow='';
  if(isSomfy){
    var remOpts='';
    var remList=Object.keys(CT_RTS_REMOTES).concat(Object.keys(CT_ZB_REMOTES).filter(function(k){return k!=='None';}));
    remList=remList.filter(function(k){return k!=='Tahoma Switch Pro';});
    for(var ri=0;ri<remList.length;ri++)remOpts+='<option'+(remList[ri]===r.trkRemote?' selected':'')+'>'+remList[ri]+'</option>';
    var scPills='';
    var scOpts=['None','Tahoma Switch Pro (RTS)','Tahoma Switch Pro (ZB)','1TD Smart Hub'];
    for(var si=0;si<scOpts.length;si++){var scv=scOpts[si];var scp2=SMART_P[scv]||0;scPills+='<button class="ct-pill'+((r.trkSmartConnect||'None')===scv?' on-p':'')+'" style="font-size:12px;padding:5px 10px" onclick="ct_getRow('+r.id+').trkSmartConnect=\''+scv+'\';ct_updatePrices();ct_renderRow('+r.id+')">'+scv+(scp2>0?' <span style="font-size:10px;opacity:.75">'+ct_fmtR(scp2)+'</span>':'')+'</button>';}
    remoteRow='<div style="margin-top:10px"><label class="lbl">Smart Connect</label><div class="ct-pill-row" style="flex-wrap:wrap;gap:6px;margin-top:4px">'+scPills+'</div></div>'
      +'<div style="margin-top:10px"><div class="g2"><div><label class="lbl">Remote / Accessory</label><select onchange="ct_getRow('+r.id+').trkRemote=this.value;ct_updatePrices();ct_renderRow('+r.id+')">'+remOpts+'</select></div></div></div>';
  }

  // options row — compact pills
  function optPill(key,lbl,price){
    return '<button class="ct-pill'+(r[key]?' on-p':'')+'" style="font-size:12px;padding:5px 10px" onclick="ct_getRow('+r.id+').'+key+'=!ct_getRow('+r.id+').'+key+';ct_updatePrices();ct_renderRow('+r.id+')">'+lbl+'<span style="font-size:10px;opacity:.75;margin-left:4px">'+ct_fmtR(price)+'</span></button>';
  }
  var optRow='<div style="margin-top:10px"><label class="lbl">Track Options / Add-ons</label>'
    +'<div class="ct-pill-row" style="flex-wrap:wrap;gap:6px;margin-top:4px">'
    +optPill('opt90','90\u00b0 Bend',isSomfy?2837:606)
    +optPill('opt45','45\u00b0 Bend',isSomfy?2837:606)
    +optPill('optContBend','Cont. Bend \u26a0',cbPrice)
    +optPill('optSingleWand','Single Wand',136)
    +optPill('optDoubleWand','Double Wand',269)
    +'</div>'
    +'<div style="font-size:10px;color:#aaa;margin-top:4px">\u26a0 Continuous Bend — template required at measure. Price width-indexed.</div>'
    +'</div>'
    +'<div style="margin-top:10px"><label class="lbl">Notes</label>'
    +'<textarea style="width:100%;box-sizing:border-box;border:1.5px solid #ddd;border-radius:8px;padding:8px;font-size:13px;font-family:inherit;resize:vertical;min-height:60px;color:#1a1a1a" placeholder="Add notes…" oninput="ct_getRow('+r.id+').notes=this.value">'+((r.notes||'').replace(/</g,'&lt;'))+'</textarea>'
    +'</div>';

  // t1/t2 panels
  function panelHtml(pNum,isDouble){
    var lined=r['t'+pNum+'lined'];
    var fabP=r['t'+pNum+'fabPrice'];
    var linP=r['t'+pNum+'linPrice'];
    var fabN=r['t'+pNum+'fabName']||'';
    var fabC=r['t'+pNum+'fabColour']||'';
    var linN=r['t'+pNum+'linName']||'';
    var linC=r['t'+pNum+'linColour']||'';
    var secCls='ct-trk-sec'+(lined?'':' unlined');
    var titleCls='ct-ts-title';
    var panelLabel=isDouble?(pNum===1?'&#128309; Track 1':'&#128995; Track 2'):'';
    var linedToggle='<div class="ct-pill-row" style="margin-left:auto">'
      +'<button class="ct-pill'+(lined?' on-p':'')+'" onclick="ct_getRow('+r.id+').t'+pNum+'lined=true;ct_updatePrices();ct_renderRow('+r.id+')">Lined</button>'
      +'<button class="ct-pill'+(!lined?' on-g':'')+'" onclick="ct_getRow('+r.id+').t'+pNum+'lined=false;ct_updatePrices();ct_renderRow('+r.id+')">Unlined</button>'
      +'</div>';
    var fabFilled=fabN&&fabC&&(fabP>0);
    var linFilled=lined&&linN&&linC&&(linP>0);
    var fabOpen=r['t'+pNum+'fabOpen']||!fabFilled;
    var linOpen=r['t'+pNum+'linOpen']||!linFilled;
    var h='';
    if(isDouble)h='<div class="'+secCls+'"><div class="'+titleCls+'"><span>'+panelLabel+'</span>'+linedToggle+'</div>';
    else h='<div style="margin-top:10px">';
    h+=(fabOpen
      ?'<div class="g3" style="margin-bottom:6px">'
        +'<div><label class="lbl">Fabric Name</label><input type="text" value="'+ct_esc(fabN)+'" placeholder="e.g. Ripple Sheer" oninput="ct_getRow('+r.id+').t'+pNum+'fabName=this.value" onblur="ct_renderRow('+r.id+')"></div>'
        +'<div><label class="lbl">Fabric Colour</label><input type="text" value="'+ct_esc(fabC)+'" placeholder="e.g. White" oninput="ct_getRow('+r.id+').t'+pNum+'fabColour=this.value" onblur="ct_renderRow('+r.id+')"></div>'
        +'<div><label class="lbl">Fabric Price / m (R)</label><input type="number" min="0" value="'+fabP+'" onchange="ct_getRow('+r.id+').t'+pNum+'fabPrice=parseFloat(this.value)||0;ct_getRow('+r.id+').t'+pNum+'fabOpen=false;ct_updatePrices()"></div>'
        +'</div>'
      :'<div style="display:flex;align-items:center;gap:8px;background:#f7f4ef;border-radius:8px;padding:8px 12px;margin-bottom:6px;cursor:pointer" onclick="ct_getRow('+r.id+').t'+pNum+'fabOpen=true;ct_renderRow('+r.id+')">'
        +'<span style="font-size:13px;font-weight:600;color:#1a1a1a">'+ct_esc(fabN)+'</span>'
        +'<span style="color:#bbb">—</span>'
        +'<span style="font-size:12px;color:#555">'+ct_esc(fabC)+'</span>'
        +'<span style="color:#bbb">—</span>'
        +'<span style="font-size:12px;color:#555">R'+fabP+'/m</span>'
        +'<span style="margin-left:auto;font-size:11px;color:#E8461E;font-weight:700">Edit ›</span>'
        +'</div>')
      +(lined
        ?(linOpen
          ?'<div class="g3">'
            +'<div><label class="lbl">Lining Name</label><input type="text" value="'+ct_esc(linN)+'" placeholder="e.g. Blackout" oninput="ct_getRow('+r.id+').t'+pNum+'linName=this.value" onblur="ct_renderRow('+r.id+')"></div>'
            +'<div><label class="lbl">Lining Colour</label><input type="text" value="'+ct_esc(linC)+'" placeholder="e.g. White" oninput="ct_getRow('+r.id+').t'+pNum+'linColour=this.value" onblur="ct_renderRow('+r.id+')"></div>'
            +'<div><label class="lbl">Lining Price / m (R)</label><input type="number" min="0" value="'+linP+'" onchange="ct_getRow('+r.id+').t'+pNum+'linPrice=parseFloat(this.value)||0;ct_getRow('+r.id+').t'+pNum+'linOpen=false;ct_updatePrices()"></div>'
            +'</div>'
          :'<div style="display:flex;align-items:center;gap:8px;background:#f0f4ff;border-radius:8px;padding:8px 12px;margin-bottom:6px;cursor:pointer" onclick="ct_getRow('+r.id+').t'+pNum+'linOpen=true;ct_renderRow('+r.id+')">'
            +'<span style="font-size:13px;font-weight:600;color:#1a1a1a">'+ct_esc(linN)+'</span>'
            +'<span style="color:#bbb">—</span>'
            +'<span style="font-size:12px;color:#555">'+ct_esc(linC)+'</span>'
            +'<span style="color:#bbb">—</span>'
            +'<span style="font-size:12px;color:#555">R'+linP+'/m</span>'
            +'<span style="margin-left:auto;font-size:11px;color:#7a4ae8;font-weight:700">Edit ›</span>'
            +'</div>')
        :'');
    h+='</div>';
    return h;
  }

  var bodyContent='<div class="ct-body'+(isOpen?' open':'')+'" id="ctbody_'+r.id+'">'
    // row 1: curtain style + lined + track (equal sizes)
    +'<div style="display:grid;grid-template-columns:repeat('+(!isDbl?3:2)+',1fr);gap:12px;margin-top:12px;min-width:0">'
    +'<div><label class="lbl">Curtain Style</label><div class="ct-pill-row">'+pillCurtStyle('Ripple','Ripple')+pillCurtStyle('Pinch Pleat','Pinch Pleat')+'</div></div>'
    +(!isDbl?'<div><label class="lbl">Lined</label><div class="ct-pill-row"><button class="ct-pill'+(!r.t1lined?' on-g':'')+'" onclick="ct_getRow('+r.id+').t1lined=false;ct_updatePrices();ct_renderRow('+r.id+')">No</button><button class="ct-pill'+(r.t1lined?' on-p':'')+'" onclick="ct_getRow('+r.id+').t1lined=true;ct_updatePrices();ct_renderRow('+r.id+')">Yes</button></div></div>':'')
    +'<div><label class="lbl">Track</label><div class="ct-pill-row">'+pillType('Single','Single','on-p')+pillType('Double','Double','on-p')+'</div></div>'
    +'</div>'
    +(isPinch
      ?'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;min-width:0">'
        +'<div><label class="lbl">Pinch Type</label><div class="ct-pill-row">'+pillPinch('Single','Single')+pillPinch('Double','Double')+pillPinch('Triple','Triple')+'</div></div>'
        +'<div><label class="lbl">Heading / Fullness</label><div class="ct-pill-row">'+pillFull('2.25\u00d7',2.25)+pillFull('2.5\u00d7',2.5)+pillFull('3.0\u00d7',3)+'</div></div>'
        +'</div>'
      :'')
    // row 2: heading/fullness + tape (only when !pinch)
    +(!isPinch
      ?'<div style="display:grid;grid-template-columns:1fr 1.4fr;gap:12px;margin-top:12px;min-width:0">'
        +'<div><label class="lbl">Heading / Fullness</label><div class="ct-pill-row">'+pillFull('2\u00d7',2)+pillFull('1.8\u00d7',1.8)+pillFull('1.6\u00d7',1.6)+pillFull('1.4\u00d7',1.4)+'</div></div>'
        +'<div><label class="lbl">Tape</label><div class="ct-pill-row">'
        +'<button class="ct-pill'+(r.tapeType==='Stud 25mm'?' on':'')+'" onclick="ct_getRow('+r.id+').tapeType=\'Stud 25mm\';ct_renderRow('+r.id+')">Stud 25mm</button>'
        +'<button class="ct-pill'+(r.tapeType==='Stud 70mm'?' on':'')+'" onclick="ct_getRow('+r.id+').tapeType=\'Stud 70mm\';ct_renderRow('+r.id+')">Stud 70mm</button>'
        +'<button class="ct-pill'+(r.tapeType==='Hook'?' on':'')+'" onclick="ct_getRow('+r.id+').tapeType=\'Hook\';ct_renderRow('+r.id+')">Hook</button>'
        +'</div></div>'
      +'</div>'
      :'')
    // panel(s)
    +(isDbl
      ?panelHtml(1,true)+panelHtml(2,true)
      :panelHtml(1,false))
    // track + options
    +trkRow
    +trkWidthWarn
    +remoteRow
    +optRow
    // calc
    +calcHtml
    // actions
    +'<div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end">'
    +'<button class="btn" style="background:#fff;color:#E8461E;border:1.5px solid #E8461E;font-size:12px;padding:8px 14px;min-height:36px" onclick="ct_duplicateRow('+r.id+')">Duplicate</button>'
    +'<button class="btn" style="background:#fff0ee;color:#c04000;border:1.5px solid #f5c0b0;font-size:12px;padding:8px 14px;min-height:36px" onclick="ct_removeRow('+r.id+')">Remove</button>'
    +'</div>'
    +'</div>';

  return '<div class="'+cardCls+'" id="ctcard_'+r.id+'">'
    +'<div class="ct-card-top">'
    // Row 1: letter | location | W | D | arrow
    +'<span class="'+letCls+'">'+lt+'</span>'
    +'<input class="ct-inp" value="'+ct_esc(r.loc)+'" placeholder="Location" style="text-align:left" oninput="ct_getRow('+r.id+').loc=this.value">'
    +'<input class="ct-inp" value="'+(r.w||'')+'" placeholder="W mm" oninput="ct_getRow('+r.id+').w=this.value.replace(/\\D/g,\'\');ct_checkRR('+r.id+')" onchange="ct_updatePrices()">'
    +'<div style="position:relative">'
    +'<input class="ct-inp" value="'+(r.d||'')+'" placeholder="D mm" oninput="ct_getRow('+r.id+').d=this.value.replace(/\\D/g,\'\');ct_checkRR('+r.id+');if(this.value.length===1){var _c=document.getElementById(\'ctcard_'+r.id+'\');if(_c){_c.querySelectorAll(\'.ct-hdr-drop-btn\').forEach(function(b){b.classList.remove(\'ct-wiggle\');void b.offsetWidth;b.classList.add(\'ct-wiggle\');setTimeout(function(){b.classList.remove(\'ct-wiggle\');},5000);});}}" onchange="ct_updatePrices()">'
    +(rawD?'<div style="font-size:9px;font-weight:700;color:#E8461E;text-align:center;margin-top:2px">\u2192 '+d+'mm ('+ct_trackDeductionLabel(r)+(r.floorClear!=='Touching'&&r.floorClear!=='On Floor'?' \u2212'+(r.floorClear==='5mm Off'?5:10)+'mm floor':'')+')</div>':'')
    +'</div>'
    +'<span class="ct-arrow" onclick="ct_toggleRow('+r.id+')">'+(isOpen?'&#9650;':'&#9660;')+'</span>'
    // Row 2: badge | FABRIC W | STACK | FLOOR | price (spans all cols)
    +'<div style="grid-column:1/-1;display:flex;align-items:center;gap:8px;border-top:1px solid #eeebe6;padding-top:6px;flex-wrap:wrap">'+badge
    +'<div style="position:relative"><div style="font-size:9px;color:#999;font-weight:600;letter-spacing:.4px;margin-bottom:2px">FABRIC W</div>'
    +'<button class="ct-hdr-drop-btn" onclick="event.stopPropagation();ct_openHdrDrop('+r.id+',\'fabW\',this)">'
    +r.fabW+'m \u25be</button>'
    +'</div>'
    +'<div style="position:relative">'
    +'<div style="font-size:9px;color:#999;font-weight:600;letter-spacing:.4px;margin-bottom:2px">STACK</div>'
    +'<button class="ct-hdr-drop-btn" onclick="event.stopPropagation();ct_openHdrDrop('+r.id+',\'stack\',this)">'
    +({'Left Stack':'\u2190L','Centre Split':'\u21d4','Right Stack':'R\u2192'}[r.stack]||'\u21d4')+' \u25be</button>'
    +'</div>'
    +'<div style="position:relative">'
    +'<div style="font-size:9px;color:#999;font-weight:600;letter-spacing:.4px;margin-bottom:2px">FLOOR</div>'
    +'<button class="ct-hdr-drop-btn" onclick="event.stopPropagation();ct_openHdrDrop('+r.id+',\'floor\',this)">'
    +({'Touching':'Touch','5mm Off':'5mm\u2191','10mm Off':'10mm\u2191','On Floor':'Pool'}[r.floorClear]||'Touch')+' \u25be</button>'
    +'</div>'
    +'<div style="flex:1"></div>'
    +'<span class="'+priceCls+'">'+priceStr+'</span>'
    +'</div>'
    +'</div>'
    +bodyContent
    +'</div>';
}

function ct_renderRow(id){
  var r=ct_getRow(id);if(!r)return;
  var el=document.getElementById('ctcard_'+id);
  if(!el)return;
  var div=document.createElement('div');div.innerHTML=ct_buildCard(r);
  el.parentNode.replaceChild(div.firstChild,el);
}

function ct_renderAllRows(){
  var c=document.getElementById('ct_rowsContainer');if(!c)return;
  // Preserve typing context — skip destructive innerHTML swap if user is editing inside a card
  var ae=document.activeElement;
  if(ae&&ae!==document.body&&c.contains(ae)&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'||ae.tagName==='SELECT')){
    var fc1=document.getElementById('ct_filledCount');
    if(fc1)fc1.textContent=ct_rows.filter(function(r){return ct_rowTotal(r)!==null;}).length+' / '+ct_rows.length+' priced';
    return;
  }
  var h='';for(var i=0;i<ct_rows.length;i++)h+=ct_buildCard(ct_rows[i]);
  c.innerHTML=h;
  var fc=document.getElementById('ct_filledCount');
  if(fc)fc.textContent=ct_rows.filter(function(r){return ct_rowTotal(r)!==null;}).length+' / '+ct_rows.length+' priced';
}

function ct_addRow(){ct_rows.push(ct_newRow());ct_renderAllRows();}
// Combined with hdr-overlay closer below into a single delegated click handler.
function ct_removeRow(id){ct_rows=ct_rows.filter(function(r){return r.id!==id;});if(ct_expanded===id)ct_expanded=null;ct_renderAllRows();ct_updatePrices();}
function ct_toggleRow(id){ct_expanded=ct_expanded===id?null:id;ct_renderAllRows();}
function ct_duplicateRow(id){var r=ct_getRow(id);if(!r)return;var nr=JSON.parse(JSON.stringify(r));nr.id=++ct_rowId;ct_rows.splice(ct_rows.indexOf(r)+1,0,nr);ct_renderAllRows();ct_updatePrices();}
function ct_clrForm(){if(!confirm("Clear entire form?"))return;['ct_c_nm','ct_c_pn','ct_c_ad','ct_c_cl','ct_c_em','ct_c_re','ct_c_gn'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});var _cmd=document.getElementById('ct_c_md');if(_cmd)_cmd.value=new Date().toISOString().split('T')[0];ct_rows=[ct_newRow()];ct_expanded=null;ct_labourUnlined=0;ct_labourLined=0;ct_labourPPUnlined=0;ct_labourPPLined=0;ct_discPct=0;ct_discTrkPct=0;ct_installCost=0;ct_travelCost=0;document.getElementById('ct_labour_unlined').value=0;document.getElementById('ct_labour_lined').value=0;var _pu=document.getElementById('ct_labour_pp_unlined');if(_pu)_pu.value=0;var _pl=document.getElementById('ct_labour_pp_lined');if(_pl)_pl.value=0;document.getElementById('ct_discVal').textContent='0%';document.getElementById('ct_discTrkVal').textContent='0%';document.getElementById('ct_inp_install').value=0;document.getElementById('ct_inp_travel').value=0;ct_renderAllRows();ct_updatePrices();}

function _vct(id){var e=document.getElementById(id);return e?e.value:'';}
function ct_getState(){
  return {
    cust:{nm:_vct('ct_c_nm'),pn:_vct('ct_c_pn'),cl:_vct('ct_c_cl'),ad:_vct('ct_c_ad'),em:_vct('ct_c_em'),tl:_vct('ct_c_tl'),re:_vct('ct_c_re'),md:_vct('ct_c_md')},
    gn:_vct('ct_c_gn'),
    labUnlined:ct_labourUnlined,labLined:ct_labourLined,
    labPPUnlined:ct_labourPPUnlined,labPPLined:ct_labourPPLined,
    discPct:ct_discPct,discTrkPct:ct_discTrkPct,
    install:ct_installCost,travel:ct_travelCost,
    rows:ct_rows,exp:ct_expanded
  };
}
function ct_loadState(s){
  if(!s)return;
  function _sct(id,val){var e=document.getElementById(id);if(e)e.value=val||'';}
  if(s.cust){_sct('ct_c_nm',s.cust.nm);_sct('ct_c_pn',s.cust.pn);_sct('ct_c_cl',s.cust.cl);_sct('ct_c_ad',s.cust.ad);_sct('ct_c_em',s.cust.em);_sct('ct_c_tl',s.cust.tl);_sct('ct_c_re',s.cust.re);_sct('ct_c_md',s.cust.md);}
  _sct('ct_c_gn',s.gn);
  ct_labourUnlined=s.labUnlined||0;ct_labourLined=s.labLined||0;
  ct_labourPPUnlined=s.labPPUnlined||0;ct_labourPPLined=s.labPPLined||0;
  ct_discPct=s.discPct||0;ct_discTrkPct=s.discTrkPct||0;
  ct_installCost=s.install||0;ct_travelCost=s.travel||0;
  var e;
  e=document.getElementById('ct_labour_unlined');if(e)e.value=ct_labourUnlined;
  e=document.getElementById('ct_labour_lined');if(e)e.value=ct_labourLined;
  e=document.getElementById('ct_labour_pp_unlined');if(e)e.value=ct_labourPPUnlined;
  e=document.getElementById('ct_labour_pp_lined');if(e)e.value=ct_labourPPLined;
  e=document.getElementById('ct_discVal');if(e)e.textContent=ct_discPct+'%';
  e=document.getElementById('ct_discTrkVal');if(e)e.textContent=ct_discTrkPct+'%';
  e=document.getElementById('ct_discInp');if(e)e.value=ct_discPct;
  e=document.getElementById('ct_discTrkInp');if(e)e.value=ct_discTrkPct;
  e=document.getElementById('ct_inp_install');if(e)e.value=ct_installCost;
  e=document.getElementById('ct_inp_travel');if(e)e.value=ct_travelCost;
  ct_rows=s.rows||[ct_newRow()];
  ct_rowId=Math.max.apply(null,ct_rows.map(function(r){return r.id||0;}).concat([0]))+1;
  ct_expanded=s.exp||null;
  ct_renderAllRows();ct_updatePrices();
}

var ct_hdrDropState={id:null,type:null,btn:null};
function _ct_renderHdrOverlay(id,type){
  var r=ct_getRow(id);if(!r)return;
  var html='';
  if(type==='fabW'){
    [[1.4,'1.4m'],[2.8,'2.8m'],[3.0,'3.0m'],[3.2,'3.2m'],[3.6,'3.6m']].forEach(function(v){
      html+='<button class="ct-pill'+(r.fabW===v[0]?' on':'')+'" onclick="ct_getRow('+id+').fabW='+v[0]+';ct_checkRR('+id+');ct_updatePrices();ct_renderRow('+id+');ct_closeHdrDrop()">'+v[1]+'</button>';
    });
  } else if(type==='stack'){
    [['Left Stack','\u2190L Left Stack'],['Centre Split','\u21d4 Centre Split'],['Right Stack','R\u2192 Right Stack']].forEach(function(v){
      html+='<button class="ct-pill'+(r.stack===v[0]?' on':'')+'" onclick="ct_getRow('+id+').stack=\''+v[0]+'\';ct_renderAllRows();ct_closeHdrDrop()">'+v[1]+'</button>';
    });
  } else if(type==='floor'){
    [['Touching','Just Touching'],['5mm Off','5mm Off Floor'],['10mm Off','10mm Off Floor'],['On Floor','On Floor (Pool)']].forEach(function(v){
      var isPool=v[0]==='On Floor';
      html+='<button class="ct-pill'+(r.floorClear===v[0]?(isPool?' on-p':' on'):'')+'" onclick="ct_getRow('+id+').floorClear=\''+v[0]+'\';ct_updatePrices();ct_renderRow('+id+');'+(isPool?'ct_refreshHdrDrop()':'ct_closeHdrDrop()')+'">'+v[1]+'</button>';
    });
    if(r.floorClear==='On Floor'){
      html+='<div style="display:flex;align-items:center;gap:4px;margin-top:4px"><input type="number" min="0" max="300" value="'+(r.floorPool||0)+'" style="width:54px;padding:4px 6px;font-size:12px;border:1.5px solid #ddd;border-radius:6px;background:#fafaf8" onchange="ct_getRow('+id+').floorPool=Math.min(300,Math.max(0,parseInt(this.value)||0));ct_updatePrices()"><span style="font-size:12px;color:#666">mm pooling</span></div>';
    }
  }
  document.getElementById('ct-hdr-overlay').innerHTML='<div class="ct-pill-row" style="margin:0;flex-direction:column;align-items:flex-start;gap:4px">'+html+'</div>';
}
function ct_openHdrDrop(id,type,btn){
  if(ct_hdrDropState.btn===btn){ct_closeHdrDrop();return;}
  if(ct_hdrDropState.btn)ct_hdrDropState.btn.classList.remove('open');
  ct_hdrDropState={id:id,type:type,btn:btn};
  _ct_renderHdrOverlay(id,type);
  btn.classList.add('open');
  var ov=document.getElementById('ct-hdr-overlay');
  var rect=btn.getBoundingClientRect();
  ov.style.top=(rect.bottom+4)+'px';
  ov.style.left=Math.min(rect.left,window.innerWidth-170)+'px';
  ov.style.display='block';
}
function ct_closeHdrDrop(){
  var ov=document.getElementById('ct-hdr-overlay');
  if(ov){ov.style.display='none';ov.innerHTML='';}
  if(ct_hdrDropState.btn)ct_hdrDropState.btn.classList.remove('open');
  ct_hdrDropState={id:null,type:null,btn:null};
}
function ct_refreshHdrDrop(){
  if(!ct_hdrDropState.btn)return;
  _ct_renderHdrOverlay(ct_hdrDropState.id,ct_hdrDropState.type);
}
document.addEventListener('click',function(e){
  // Close hdr overlay if click lands outside it
  if(!e.target.closest('#ct-hdr-overlay')&&!e.target.classList.contains('ct-hdr-drop-btn'))ct_closeHdrDrop();
  // Reset any per-row ctHdrDrop state on outside click
  var changed=false;
  if(typeof ct_rows!=='undefined'){
    for(var i=0;i<ct_rows.length;i++){if(ct_rows[i].ctHdrDrop){ct_rows[i].ctHdrDrop=null;changed=true;}}
    if(changed)ct_renderAllRows();
  }
});
function ct_checkRR(id){
  var r=ct_getRow(id);if(!r||!r.d)return;
  var dm=(parseInt(r.d)||0)/1000;
  if((dm+0.3)>r.fabW){
    // Honour session-level "don't show again" opt-out
    try{if(sessionStorage.getItem('tbd_rr_muted')==='1')return;}catch(_){ }
    if(!document.getElementById('ct_rr_shown_'+id)&&!window['ct_rr_pending_'+id]){
      window['ct_rr_pending_'+id]=setTimeout(function(){
        window['ct_rr_pending_'+id]=null;
        try{if(sessionStorage.getItem('tbd_rr_muted')==='1')return;}catch(_){ }
        var _rNow=ct_getRow(id);if(!_rNow||!_rNow.d)return;
        var _dmNow=(parseInt(_rNow.d)||0)/1000;
        if((_dmNow+0.3)<=_rNow.fabW)return;
        if(document.getElementById('ct_rr_shown_'+id))return;
        var d2=document.createElement('div');d2.id='ct_rr_shown_'+id;
        d2.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px';
        d2.innerHTML='<div style="background:#fff;border-radius:14px;padding:24px;width:100%;max-width:340px;box-shadow:0 8px 32px rgba(0,0,0,.25);text-align:center">'
          +'<div style="font-size:48px;margin-bottom:12px">&#9888;&#65039;</div>'
          +'<div style="font-size:17px;font-weight:800;margin-bottom:8px">Railroading Not Possible</div>'
          +'<div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">Drop + hem allowance (<strong>'+(_dmNow+0.3).toFixed(2)+' m</strong>) exceeds fabric width (<strong>'+_rNow.fabW+' m</strong>).<br><br>This curtain <strong style="color:#c04000">cannot be railroaded</strong> and must be made in drops.<br><br><span style="color:#666">If not 1.4m fabric, adjust the Fabric Width drop down to the correct roll width for railroading.</span></div>'
          +'<button style="width:100%;padding:13px;background:#E8461E;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit" onclick="document.body.removeChild(document.getElementById(\'ct_rr_shown_'+id+'\'))">Understood \u2014 Continue in Drops</button>'
          +'<button style="width:100%;margin-top:8px;padding:10px;background:transparent;color:#888;border:1px solid #ddd;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit" onclick="try{sessionStorage.setItem(\'tbd_rr_muted\',\'1\');}catch(_){};document.body.removeChild(document.getElementById(\'ct_rr_shown_'+id+'\'))">Don\u2019t show again this session</button>'
          +'</div>';
        document.body.appendChild(d2);
      },10000);
    }
  }
}

// ── Summary + Totals ───────────────────────────────────────
function ct_updatePrices(){
  ct_renderAllRows();
  var _ppc=document.getElementById('ct_labour_pp_card');if(_ppc){var _show=ct_rows.some(function(r){return r.curtainStyle==='Pinch Pleat';});var _was=_ppc.style.display!=='none';_ppc.style.display=_show?'':'none';if(_show&&!_was&&!(ct_labourPPLined>0||ct_labourPPUnlined>0)){_ppc.classList.remove('ct-wiggle');void _ppc.offsetWidth;_ppc.classList.add('ct-wiggle');setTimeout(function(){_ppc.classList.remove('ct-wiggle');},5000);}_ppc.classList.toggle('ct-min',ct_labourPPUnlined>0&&ct_labourPPLined>0);}
  var _wvc=document.getElementById('ct_labour_wave_card');if(_wvc){var _showW=ct_rows.length===0||ct_rows.some(function(r){return r.curtainStyle!=='Pinch Pleat';});var _wasW=_wvc.style.display!=='none';_wvc.style.display=_showW?'':'none';if(_showW&&!_wasW&&!(ct_labourLined>0||ct_labourUnlined>0)){_wvc.classList.remove('ct-wiggle');void _wvc.offsetWidth;_wvc.classList.add('ct-wiggle');setTimeout(function(){_wvc.classList.remove('ct-wiggle');},5000);}_wvc.classList.toggle('ct-min',ct_labourUnlined>0&&ct_labourLined>0);}
  var container=document.getElementById('ct_summaryContainer');if(!container)return;
  var curtainSub=0,trkSub=0;
  var winLines='';
  for(var i=0;i<ct_rows.length;i++){
    var r=ct_rows[i];
    var total=ct_rowTotal(r);
    if(total===null)continue;
    var lt=String.fromCharCode(65+i);
    var ct_only=ct_rowCurtainTotal(r);
    var trkOnly=ct_ovrVal(r.trkOvr,ct_calcTrackPrice(r));
    var optOnly=ct_calcOptPrice(r);
    var trk=trkOnly+optOnly;
    curtainSub+=ct_only;
    trkSub+=trk;
    var isDbl=r.trackType==='Double';
    winLines+='<div class="ct-summary-win">'
      +'<h3 style="color:'+(isDbl?'#7a4ae8':'#E8461E')+'">'+lt+' \u2014 '+ct_esc(r.loc||'Window '+lt)+' <span style="font-weight:400;font-size:11px;color:#aaa">'+ct_esc(r.trackType)+' \u00b7 '+ct_esc(r.trkModel)+' \u00b7 '+ct_esc(r.trkColour)+'</span></h3>';
    function sumItemRows(p,lined,prefix){
      var s='';
      if(prefix)s+='<div class="ct-calc-row" style="font-size:11px;font-weight:700;color:#888;margin-top:6px"><span>'+prefix+'</span><span></span></div>';
      s+='<div class="ct-calc-row"><span class="ct-calc-lbl">Fabric<small>('+p.drops+' drops \u00d7 '+p.meterage.toFixed(1)+'m'+(p.railroaded?' railroaded':'')+')</small></span><span class="ct-calc-val">'+ct_fmtR(p.fabCost)+'</span></div>';
      if(lined)s+='<div class="ct-calc-row"><span class="ct-calc-lbl">Lining<small>('+p.meterage.toFixed(1)+'m)</small></span><span class="ct-calc-val">'+ct_fmtR(p.linCost)+'</span></div>';
      s+='<div class="ct-calc-row"><span class="ct-calc-lbl">Labour<small>('+p.drops+' drops'+(p.longDrop?' +20% drop &gt; 3000mm':'')+')</small></span><span class="ct-calc-val">'+ct_fmtR(p.labCost)+'</span></div>';
      return s;
    }
    if(isDbl){
      var p1=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
      var p2=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
      winLines+=sumItemRows(p1,r.t1lined,'\uD83D\uDD35 Track 1 \u2014 '+(r.t1lined?'Lined':'Unlined'))
        +sumItemRows(p2,r.t2lined,'\uD83D\uDFE3 Track 2 \u2014 '+(r.t2lined?'Lined':'Unlined'))
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Track \u2014 '+ct_esc(r.trkModel||'')+'</span><span class="ct-calc-val">'+ct_fmtR(trkOnly)+'</span></div>'
        +ct_optBreakdown(r);
    } else {
      var p=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
      winLines+=sumItemRows(p,r.t1lined,'')
        +'<div class="ct-calc-row"><span class="ct-calc-lbl">Track \u2014 '+ct_esc(r.trkModel||'')+'</span><span class="ct-calc-val">'+ct_fmtR(trkOnly)+'</span></div>'
        +ct_optBreakdown(r);
    }
    winLines+='<div class="ct-calc-row" style="font-weight:800;color:'+(isDbl?'#7a4ae8':'#E8461E')+';border-top:2px solid '+(isDbl?'#7a4ae8':'#E8461E')+';margin-top:4px;padding-top:6px"><span>Window Total</span><span>'+ct_fmtR(total)+'</span></div>'
      +'</div>';
  }

  var discAmt=ct_discPct>0?Math.round(curtainSub*(ct_discPct/100)):0;
  var discTrkAmt=ct_discTrkPct>0?Math.round(trkSub*(ct_discTrkPct/100)):0;
  window._mq_curtain_sub=curtainSub+trkSub-discAmt-discTrkAmt;
  window._mq_curtain_fabric=curtainSub;
  window._mq_curtain_track=trkSub;
  var sub=curtainSub+trkSub-discAmt-discTrkAmt+ct_installCost+ct_travelCost;
  var vat=Math.round(sub*0.15);
  var grand=sub+vat;

  var html=winLines;
  {
    html+='<div style="background:#3a3a3a;color:#fff;border-radius:10px;padding:16px;margin-top:8px">'
      +'<h2 style="font-size:15px;color:#E8461E;border-bottom:1px solid #666;padding-bottom:8px;margin-bottom:10px">Quote Total</h2>';
    for(var j=0;j<ct_rows.length;j++){
      var rj=ct_rows[j];var tj=ct_rowTotal(rj);if(tj===null)continue;
      var ltj=String.fromCharCode(65+j);
      html+='<div class="sline"><span class="sn">'+ltj+': '+(rj.loc||'Window '+ltj)+'</span><span class="sv">'+ct_fmtR(tj)+'</span></div>';
    }
    if(discAmt>0)html+='<div class="sline"><span class="sn" style="color:#90ee90">Discount \u2014 Curtains ('+ct_discPct+'%)</span><span class="sv" style="color:#90ee90">\u2212 '+ct_fmtR(discAmt)+'</span></div>';
    if(discTrkAmt>0)html+='<div class="sline"><span class="sn" style="color:#90ee90">Discount \u2014 Tracks ('+ct_discTrkPct+'%)</span><span class="sv" style="color:#90ee90">\u2212 '+ct_fmtR(discTrkAmt)+'</span></div>';
    if(ct_installCost)html+='<div class="sline"><span class="sn">Installation</span><span class="sv">'+ct_fmtR(ct_installCost)+'</span></div>';
    if(ct_travelCost)html+='<div class="sline"><span class="sn">Travel</span><span class="sv">'+ct_fmtR(ct_travelCost)+'</span></div>';
    html+='<div class="tsec">'
      +'<div class="trow"><span class="tl">Subtotal (excl. VAT)</span><span class="tv">'+ct_fmtR(sub)+'</span></div>'
      +'<div class="trow"><span class="tl">VAT (15%)</span><span class="tv">'+ct_fmtR(vat)+'</span></div>'
      +'<div class="trow big"><span class="tl">TOTAL</span><span class="tv">'+ct_fmtR(grand)+'</span></div>'
      +'</div>'
      +'<div class="dep">'
      +'<div class="trow"><span class="tl" style="color:#aaa;font-size:12px">60% Deposit (to start manufacturing)</span><span class="tv" style="font-size:12px">'+ct_fmtR(grand*0.6)+'</span></div>'
      +'<div class="trow"><span class="tl" style="color:#aaa;font-size:12px">35% Delivery Balance (24\u201348hrs before install)</span><span class="tv" style="font-size:12px">'+ct_fmtR(grand*0.35)+'</span></div>'
      +'<div class="trow"><span class="tl" style="color:#aaa;font-size:12px">5% Final Balance (upon completion)</span><span class="tv" style="font-size:12px">'+ct_fmtR(grand*0.05)+'</span></div>'
      +'</div>'
      +'<div style="margin-top:14px">'
      +'<button class="btn btn-full" style="background:#4A4A4A;color:#fff" onclick="ct_pwaExportPDF(false)">📄 PDF</button>'
      +'</div>'
      +'</div>';
  }
  container.innerHTML=html;
}

// ── Init ───────────────────────────────────────────────────
(function(){
  var el=document.getElementById('ct_c_md');if(el)el.value=new Date().toISOString().split('T')[0];
  ct_rows=[ct_newRow()];
  ct_renderAllRows();
})();

// ── Curtain PDF Export ─────────────────────────────────────
function ct_pwaExportPDF(isOrd){
  function gv(id){var e=document.getElementById(id);return e?e.value:'';}
  var nm=gv('ct_c_nm')||'Client';
  var pn=gv('ct_c_pn');
  var ad=gv('ct_c_ad');
  var em=gv('ct_c_em');
  var cl=gv('ct_c_cl');
  var md=gv('ct_c_md')||new Date().toISOString().split('T')[0];
  var re=gv('ct_c_re');
  var notes=gv('ct_c_gn');

  if(typeof window.jspdf==='undefined'&&typeof jsPDF==='undefined'){var _t=typeof od_showToast==='function'?od_showToast:(typeof pwaToast==='function'?pwaToast:alert);_t('PDF library failed to load \u2014 check connection and retry.');return;}
  var jsPDFlib=(typeof window.jspdf!=='undefined')?window.jspdf.jsPDF:jsPDF;
  var doc=new jsPDFlib({orientation:'landscape',unit:'mm',format:'a4'});
  var W=297,H=210,M=14,PW=W-M*2;

  // ── Header ──
  try{var _li=document.getElementById('logoImg');var _ls=_li.src;if(!_li||!_li.complete||!_li.naturalWidth)throw new Error('logo not ready');var _lw=_li.naturalWidth;var _lh=_li.naturalHeight||_lw;var _pw=65;var _ph=Math.round(_pw*(_lh/_lw)*10)/10;doc.addImage(_ls,'PNG',(W-_pw)/2,2,_pw,_ph);}catch(e){}
  doc.setFillColor(232,70,30);doc.rect(0,28,W,1.5,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(232,70,30);
  doc.text(isOrd?'CURTAIN ORDER':'CURTAIN QUOTATION',W-M,10,{align:'right'});
  doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(100,100,100);
  doc.text('Total Blind Design cc',W-M,15,{align:'right'});
  doc.text('368 Voortrekker Rd, Maitland, Cape Town',W-M,19,{align:'right'});
  doc.text('info@totalblinds.co.za | www.totalblinddesign.co.za',W-M,23,{align:'right'});
  var _repE=(typeof _currentUser!=='undefined'&&_currentUser&&_currentUser.email)?_currentUser.email:'';
  if(_repE){doc.text('Rep: '+_repE,W-M,27,{align:'right'});doc.text('Date: '+md,W-M,31,{align:'right'});}else{doc.text('Date: '+md,W-M,27,{align:'right'});}

  // ── Customer ──
  var y=34;doc.setTextColor(30,30,30);doc.setFontSize(8);
  doc.setFont('helvetica','bold');doc.text('Name: ',M,y);doc.setFont('helvetica','normal');doc.text(nm,M+14,y);
  doc.setFont('helvetica','bold');doc.text('Project: ',M+80,y);doc.setFont('helvetica','normal');doc.text(pn,M+96,y);
  y+=5;doc.setFont('helvetica','bold');doc.text('Cell: ',M,y);doc.setFont('helvetica','normal');doc.text(cl,M+10,y);
  doc.setFont('helvetica','bold');doc.text('Email: ',M+50,y);doc.setFont('helvetica','normal');doc.text(em,M+63,y);
  doc.setFont('helvetica','bold');doc.text('Address: ',M+120,y);doc.setFont('helvetica','normal');doc.text(ad,M+138,y);

  if(notes){y+=5;doc.setFontSize(7);doc.setTextColor(100,100,100);doc.text('Notes: '+notes,M,y,{maxWidth:PW});}
  y+=6;

  // ── Items ──
  var ordRows=ct_rows.filter(function(r){return ct_rowTotal(r)!==null;});
  var curtainSub=0,trkSub=0;

  if(isOrd){
    // ── Card-per-window order layout ──
    function ordNeedPage(needed){if(y+needed>H-18){doc.addPage();y=14;}}
    for(var oi=0;oi<ordRows.length;oi++){
      var r=ordRows[oi];
      var lt=String.fromCharCode(65+ct_rows.indexOf(r));
      var isDbl=r.trackType==='Double';
      var isSomfy=r.trkStyle==='Somfy';
      var eff=ct_effectiveDrop(r);
      var dedLbl=ct_trackDeductionLabel(r);
      var floorLbl=r.floorClear==='5mm Off'?'5mm off floor':r.floorClear==='10mm Off'?'10mm off floor':r.floorClear==='On Floor'?'On Floor (+'+(r.floorPool||0)+'mm)':'Touching';
      var isPinchR=r.curtainStyle==='Pinch Pleat';

      // pre-calc lines for card body height
      var nLines=1; // style
      if(isDbl){nLines+=2;}
      else{nLines+=1;if(r.t1lined&&r.t1linName)nLines++;}
      nLines+=1; // track
      var _rail=r.fabW>=2.8;
      if(_rail)nLines+=1; // railroaded badge line
      if(isDbl)nLines+=2; else nLines+=1; // calc breakdown lines
      nLines+=1; // track cost line
      var opts=[];if(r.opt90)opts.push('90\u00b0 Bend');if(r.opt45)opts.push('45\u00b0 Bend');if(r.optContBend)opts.push('Cont. Bend');if(r.optSingleWand)opts.push('Single Wand');if(r.optDoubleWand)opts.push('Double Wand');
      if(opts.length)nLines+=1; // options only if present
      if(r.notes)nLines+=Math.ceil(r.notes.length/80)||1;
      var LH=4.8,PAD=5,bodyH=nLines*LH+PAD*2,cardH=7+bodyH;
      ordNeedPage(cardH+4);

      // header bar
      doc.setFillColor(232,70,30);doc.rect(M,y,PW,7,'F');
      doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(255,255,255);
      doc.text('['+lt+']  '+(r.loc||'Window '+lt),M+2,y+5,{maxWidth:PW*0.45});
      var hdrRight='W: '+(r.w||'\u2014')+'mm   Fin. Drop: '+(eff||'\u2014')+'mm'+(dedLbl?'  ('+dedLbl+(r.floorClear!=='Touching'&&r.floorClear!=='On Floor'?' \u00b7 '+floorLbl:'')+')':'');
      doc.text(hdrRight,M+PW-2,y+5,{align:'right',maxWidth:PW*0.55});
      y+=7;

      // body bg
      doc.setFillColor(250,250,250);doc.rect(M,y,PW,bodyH,'F');
      doc.setDrawColor(220,220,220);doc.setLineWidth(0.2);doc.rect(M,y,PW,bodyH,'S');

      var bx=M+3,by=y+PAD;
      function ordLbl(lbl,val,bxO){doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(100,100,100);doc.text(lbl,bx,by);doc.setFont('helvetica','normal');doc.setTextColor(25,25,25);doc.text(val,bx+(bxO||16),by,{maxWidth:PW-20});}

      // style line
      var styleStr=(isDbl?'Double Track':'Single Track')+' \u00b7 '+(isPinchR?r.pinchType+' Pinch Pleat':r.curtainStyle);
      if(!isDbl)styleStr+=' \u00b7 '+(r.t1lined?'Lined':'Unlined');
      if(!isPinchR&&!isDbl)styleStr+=' \u00b7 '+(r.tapeType||'Stud 25mm');
      styleStr+=' \u00b7 '+r.stack+' \u00b7 FabW: '+r.fabW+'m \u00b7 '+r.fullness+'\u00d7';
      ordLbl('Style:',styleStr,14);by+=LH;

      if(isDbl){
        var p1o=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        var p2o=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
        var t1f=(r.t1fabName||'\u2014')+(r.t1fabColour?' \u2014 '+r.t1fabColour:'');
        var t1l=r.t1lined?((r.t1linName||'\u2014')+(r.t1linColour?' \u2014 '+r.t1linColour:'')):'';
        ordLbl('Trk 1:',(r.t1lined?'Lined':'Unlined')+' \u00b7 Fabric: '+t1f+(t1l?'  Lining: '+t1l:'')+'  Drops: '+p1o.drops+'  Mtg: '+p1o.meterage+'m',14);by+=LH;
        var t2f=(r.t2fabName||'\u2014')+(r.t2fabColour?' \u2014 '+r.t2fabColour:'');
        var t2l=r.t2lined?((r.t2linName||'\u2014')+(r.t2linColour?' \u2014 '+r.t2linColour:'')):'';
        ordLbl('Trk 2:',(r.t2lined?'Lined':'Unlined')+' \u00b7 Fabric: '+t2f+(t2l?'  Lining: '+t2l:'')+'  Drops: '+p2o.drops+'  Mtg: '+p2o.meterage+'m',14);by+=LH;
      } else {
        var po=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        var fabStr=(r.t1fabName||'\u2014')+(r.t1fabColour?' \u2014 '+r.t1fabColour:'');
        ordLbl('Fabric:',fabStr+'   Drops: '+po.drops+'   Mtg: '+po.meterage+'m',14);by+=LH;
        if(r.t1lined&&r.t1linName){ordLbl('Lining:',(r.t1linName||'\u2014')+(r.t1linColour?' \u2014 '+r.t1linColour:''),14);by+=LH;}
      }

      // track
      var trkStr=r.trkModel+' \u00b7 '+(isSomfy?r.trkSomfyType:r.trkFix)+' \u00b7 '+r.trkColour+' \u00b7 '+r.trkStyle;
      if(isSomfy&&r.trkRemote&&r.trkRemote!=='None')trkStr+=' \u00b7 Remote: '+r.trkRemote;
      if(isSomfy&&r.trkSmartConnect&&r.trkSmartConnect!=='None')trkStr+=' \u00b7 Smart Connect: '+r.trkSmartConnect;
      ordLbl('Track:',trkStr,14);by+=LH;

      // railroaded badge
      if(_rail){ordLbl('Orient.:','\u2713 Railroaded \u2014 '+r.fabW+'m fabric. Drop '+(eff/1000).toFixed(2)+'m \u2264 '+(r.fabW-0.3).toFixed(1)+'m limit.',14);by+=LH;}

      // calc breakdown — match on-screen CALCULATED panel
      var _trkCostOvr=ct_ovrVal(r.trkOvr,ct_calcTrackPrice(r));
      if(isDbl){
        var _p1=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        var _p2=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
        ordLbl('T1 Calc:','Eff '+eff+'mm \u00b7 '+_p1.drops+' drops \u00b7 '+_p1.meterage+'m \u00b7 Fab R'+Math.round(_p1.fabCost)+' \u00b7 Lin R'+Math.round(_p1.linCost)+' \u00b7 Lab R'+Math.round(_p1.labCost),16);by+=LH;
        ordLbl('T2 Calc:','Eff '+eff+'mm \u00b7 '+_p2.drops+' drops \u00b7 '+_p2.meterage+'m \u00b7 Fab R'+Math.round(_p2.fabCost)+' \u00b7 Lin R'+Math.round(_p2.linCost)+' \u00b7 Lab R'+Math.round(_p2.labCost),16);by+=LH;
      } else {
        var _p=ct_calcPanel(parseInt(r.w)||0,eff,r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        ordLbl('Calc:','Eff '+eff+'mm \u00b7 '+_p.drops+' drops \u00b7 '+_p.meterage+'m \u00b7 Fab R'+Math.round(_p.fabCost)+' \u00b7 Lin R'+Math.round(_p.linCost)+' \u00b7 Lab R'+Math.round(_p.labCost),14);by+=LH;
      }
      ordLbl('Track Cost:','R'+Math.round(_trkCostOvr),18);by+=LH;

      // options — only show if any selected
      if(opts.length){ordLbl('Options:',opts.join(' \u00b7 '),18);by+=LH;}

      // notes
      if(r.notes){ordLbl('Notes:',r.notes,14);by+=LH;}

      y+=bodyH+3;
    }
    // footer line
    doc.setDrawColor(232,70,30);doc.setLineWidth(0.4);doc.line(M,H-10,W-M,H-10);
    doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(120,120,120);
    doc.text('Total Blind Design cc | 368 Voortrekker Rd, Maitland, Cape Town | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});

  } else {
    // ── Quote table layout ──
    var bodyData=[];var subRowIdx={};
    function pushOptSubs(r,trkP){
      var isSomfy=r.trkStyle==='Somfy', w=parseInt(r.w)||0;
      function sub(lbl,price){subRowIdx[bodyData.length]=1;bodyData.push(['','\u21b3 '+lbl,'','','','','','R'+Math.round(price),'']);}
      if(r.opt90) sub('90\u00b0 Bend', isSomfy?2837:606);
      if(r.opt45) sub('45\u00b0 Bend', isSomfy?2837:606);
      if(r.optContBend){var arr=isSomfy?CT_CONT_BEND_SM:CT_CONT_BEND_HD; var bins=isSomfy?CT_W_SM:CT_W_HD; sub('Continuous Bend', arr[ct_fb(w,bins)]);}
      if(r.optSingleWand) sub('Single Wand', 136);
      if(r.optDoubleWand) sub('Double Wand', 269);
      if(isSomfy){var rem=r.trkRemote||'None'; var rp=CT_RTS_REMOTES[rem]||CT_ZB_REMOTES[rem]||0; if(rp>0) sub('Remote ('+rem+')', rp);}
      if(isSomfy){var sc2=r.trkSmartConnect||'None'; var scp3=SMART_P[sc2]||0; if(scp3>0) sub('Smart Connect ('+sc2+')', scp3);}
    }
    for(var qi=0;qi<ordRows.length;qi++){
      var r=ordRows[qi];
      var lt=String.fromCharCode(65+ct_rows.indexOf(r));
      var total=ct_rowTotal(r);
      var isDbl=r.trackType==='Double';
      var trkP=ct_calcTrackPrice(r);var optP=ct_calcOptPrice(r);
      var trkOnlyOvr=ct_ovrVal(r.trkOvr,trkP);
      curtainSub+=ct_rowCurtainTotal(r);trkSub+=ct_ovrVal(r.trkOvr,trkP+optP);
      var styleLabel=(r.curtainStyle==='Pinch Pleat'?r.pinchType+' Pinch Pleat':r.curtainStyle)+' \u00b7 '+(r.t1lined?'Lined':'Unlined')+' \u00b7 '+(r.tapeType||'Stud')+' \u00b7 '+r.trkModel+' '+r.trkColour+' \u00b7 '+r.stack;
      var fabLabel1=(r.t1fabName?(r.t1fabName+(r.t1fabColour?' \u2014 '+r.t1fabColour:'')):'')+(r.t1lined&&r.t1linName?' / Lin: '+r.t1linName+(r.t1linColour?' \u2014 '+r.t1linColour:''):'');
      var fabLabel2=(r.t2fabName?(r.t2fabName+(r.t2fabColour?' \u2014 '+r.t2fabColour:'')):'')+(r.t2lined&&r.t2linName?' / Lin: '+r.t2linName+(r.t2linColour?' \u2014 '+r.t2linColour:''):'');
      if(isDbl){
        var p1=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        var p2=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t2lined,r.t2fabPrice,r.t2linPrice,r.curtainStyle);
        bodyData.push([lt+' '+(r.loc||''),'Trk1 '+(r.t1lined?'Lined':'Unlined')+' \u00b7 '+r.trkModel+' '+r.trkColour+(fabLabel1?'\n'+fabLabel1:''),p1.drops,p1.meterage,'R'+Math.round(p1.fabCost),'R'+Math.round(p1.linCost),'R'+Math.round(p1.labCost),'-','R'+Math.round(p1.subtotal)]);
        bodyData.push(['','Trk2 '+(r.t2lined?'Lined':'Unlined')+(fabLabel2?'\n'+fabLabel2:''),p2.drops,p2.meterage,'R'+Math.round(p2.fabCost),'R'+Math.round(p2.linCost),'R'+Math.round(p2.labCost),'R'+Math.round(trkOnlyOvr),'R'+Math.round(total)]);
        pushOptSubs(r,trkP);
      } else {
        var p=ct_calcPanel(parseInt(r.w)||0,ct_effectiveDrop(r),r.fullness,r.fabW,r.t1lined,r.t1fabPrice,r.t1linPrice,r.curtainStyle);
        bodyData.push([lt+' '+(r.loc||''),styleLabel+(fabLabel1?'\n'+fabLabel1:'')+(r.notes?'\nNotes: '+r.notes:''),p.drops,p.meterage,'R'+Math.round(p.fabCost),'R'+Math.round(p.linCost),'R'+Math.round(p.labCost),'R'+Math.round(trkOnlyOvr),'R'+Math.round(total)]);
        pushOptSubs(r,trkP);
      }
    }
    var cols=['Window','Description','Drops','Mtg','Fabric','Lining','Labour','Track','Total'];
    var colStyles={0:{cellWidth:18},1:{cellWidth:55},2:{cellWidth:13},3:{cellWidth:16},4:{cellWidth:16},5:{cellWidth:16},6:{cellWidth:16},7:{cellWidth:16},8:{cellWidth:16}};
    doc.autoTable({startY:y,head:[cols],body:bodyData,theme:'striped',headStyles:{fillColor:[232,70,30],textColor:[255,255,255],fontSize:7,fontStyle:'bold'},bodyStyles:{fontSize:7},columnStyles:colStyles,margin:{left:M,right:M},didParseCell:function(d){if(d.section==='body'&&subRowIdx[d.row.index]){d.cell.styles.fontStyle='italic';d.cell.styles.textColor=[130,130,130];d.cell.styles.fontSize=6.5;}}});
    y=doc.lastAutoTable.finalY+5;
  }

  if(!isOrd){
  // ── Totals ──
  var discAmt=ct_discPct>0?Math.round(curtainSub*(ct_discPct/100)):0;
  var discTrkAmt=ct_discTrkPct>0?Math.round(trkSub*(ct_discTrkPct/100)):0;
  var sub=curtainSub+trkSub-discAmt-discTrkAmt+ct_installCost+ct_travelCost;
  var vat=Math.round(sub*0.15);var grand=sub+vat;
  var totData=[];
  if(discAmt>0)totData.push({lb:'Discount — Curtains ('+ct_discPct+'%)',vl:'- R'+discAmt.toLocaleString('en-ZA'),tag:'disc'});
  if(discTrkAmt>0)totData.push({lb:'Discount — Tracks ('+ct_discTrkPct+'%)',vl:'- R'+discTrkAmt.toLocaleString('en-ZA'),tag:'disc'});
  if(ct_installCost)totData.push({lb:'Installation',vl:'R'+ct_installCost.toLocaleString('en-ZA'),tag:''});
  if(ct_travelCost)totData.push({lb:'Travel',vl:'R'+ct_travelCost.toLocaleString('en-ZA'),tag:''});
  totData.push({lb:'Subtotal (excl. VAT)',vl:'R'+sub.toLocaleString('en-ZA'),tag:'sub'});
  totData.push({lb:'VAT (15%)',vl:'R'+vat.toLocaleString('en-ZA'),tag:''});
  totData.push({lb:'TOTAL (incl. VAT)',vl:'R'+grand.toLocaleString('en-ZA'),tag:'total'});
  totData.push({lb:'60% Deposit',vl:'R'+Math.round(grand*0.6).toLocaleString('en-ZA'),tag:'dep'});
  totData.push({lb:'35% Delivery Balance',vl:'R'+Math.round(grand*0.35).toLocaleString('en-ZA'),tag:'dep'});
  totData.push({lb:'5% Final Balance',vl:'R'+Math.round(grand*0.05).toLocaleString('en-ZA'),tag:'dep'});
  doc.autoTable({startY:y,body:totData.map(function(r){return[r.lb,r.vl];}),theme:'grid',styles:{fontSize:7.5,font:'helvetica',cellPadding:{top:1.5,bottom:1.5,left:3,right:3},lineColor:[200,200,200],lineWidth:0.2,textColor:[40,40,40]},columnStyles:{0:{cellWidth:PW-32},1:{cellWidth:32,halign:'right',fontStyle:'bold'}},didParseCell:function(d){var tag=totData[d.row.index]?totData[d.row.index].tag:'';if(tag==='disc'){d.cell.styles.textColor=[39,174,96];d.cell.styles.fontStyle='bold';}else if(tag==='sub'){d.cell.styles.fontStyle='bold';d.cell.styles.fillColor=[245,245,245];d.cell.styles.fontSize=8;}else if(tag==='total'){d.cell.styles.fontStyle='bold';d.cell.styles.fontSize=9.5;d.cell.styles.fillColor=[232,70,30];d.cell.styles.textColor=[255,255,255];d.cell.styles.lineColor=[232,70,30];}else if(tag==='dep'){d.cell.styles.fillColor=[250,250,250];}},margin:{left:M,right:M}});

  // ── Banking details ──
  var bky=H-34,bkW=PW,bkH=26;
  doc.setFillColor(232,70,30);doc.roundedRect(M,bky,bkW,bkH,2,2,'F');
  doc.setFillColor(250,250,250);doc.rect(M,bky,bkW,bkH-7,'F');
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.5);doc.roundedRect(M,bky,bkW,bkH,2,2,'S');
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(255,255,255);
  doc.text('BANKING DETAILS',M+3,bky+5);doc.text('Payment Ref: '+nm,M+bkW-3,bky+5,{align:'right'});
  var bc1=M+3,bc2=M+bkW*0.25+3,bc3=M+bkW*0.5+3,bc4=M+bkW*0.75+3;
  doc.setFont('helvetica','normal');doc.setFontSize(6);doc.setTextColor(130,130,130);
  doc.text('BANK',bc1,bky+12);doc.text('ACCOUNT NAME',bc2,bky+12);doc.text('ACCOUNT NO',bc3,bky+12);doc.text('BRANCH CODE',bc4,bky+12);
  doc.setDrawColor(210,210,210);doc.setLineWidth(0.15);doc.line(M+1,bky+14,M+bkW-1,bky+14);
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(30,30,30);
  doc.text('FNB Hout Bay',bc1,bky+23);doc.text('Total Blind Design cc',bc2,bky+23);doc.text('62401898658',bc3,bky+23);doc.text('204009',bc4,bky+23);
  doc.setFontSize(6);doc.setTextColor(170,170,170);
  doc.text('Total Blind Design | 368 Voortrekker Rd, Maitland | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  } // end !isOrd

  if(!isOrd){
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
  var _tcGapCt=10,_tcWCt=(PW-_tcGapCt)/2,_tcLCt=M,_tcRCt=M+_tcWCt+_tcGapCt;
  var _tcRenderCt=function(title,body,x,cW,y){
    var lines=doc.splitTextToSize(body,cW);
    doc.setFillColor(245,245,245);doc.rect(x,y-2,cW,6,'F');
    doc.setDrawColor(232,70,30);doc.setLineWidth(0.3);doc.line(x,y-2,x+3,y-2);
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(232,70,30);
    doc.text(title,x+5,y+2.5);y+=6;
    doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(50,50,50);
    doc.text(lines,x,y);return y+lines.length*2.6+2;
  };
  var tyL=_tcHdrH+6,tyR=_tcHdrH+6;
  tyL=_tcRenderCt('1. QUOTATION VALIDITY','This quotation is valid for 30 days from the date of issue. Prices are subject to change without notice after this period. Re-measurement may be required if measurements have not been confirmed in writing.',_tcLCt,_tcWCt,tyL);
  tyL=_tcRenderCt('2. DEPOSIT & PAYMENT','Payment is structured in three stages: (1) A deposit of 60% of the total quoted amount is required to confirm your order and initiate production — no manufacturing will commence until this deposit is received; (2) a Delivery Balance of 35% is payable 24–48 hours prior to the scheduled installation date; (3) a Final Balance of 5% is payable immediately upon the installation team leaving the site. EFT payments only.',_tcLCt,_tcWCt,tyL);
  tyL=_tcRenderCt('3. LEAD TIMES','Standard lead times are 10–15 working days from receipt of deposit and confirmed measurements. Motorised or custom products may require additional lead time.',_tcLCt,_tcWCt,tyL);
  tyL=_tcRenderCt('4. MEASUREMENTS & SITE RESPONSIBILITY','All measurements are taken by a qualified Total Blind Design consultant. Should the client supply their own measurements, Total Blind Design accepts no liability for incorrect sizing.',_tcLCt,_tcWCt,tyL);
  tyL=_tcRenderCt('5. MANUFACTURING & CANCELLATIONS','Once a deposit is received and an order placed, manufacturing commences immediately. Cancellations after this point will forfeit the deposit in full. Alterations to confirmed orders may incur additional charges.',_tcLCt,_tcWCt,tyL);
  tyL=_tcRenderCt('6. INSTALLATION','Installation is included where quoted. The client is responsible for ensuring clear, safe access to all installation areas. Additional charges may apply for difficult access, high ceilings, or work outside standard working hours.',_tcLCt,_tcWCt,tyL);
  tyR=_tcRenderCt('7. FUNCTIONAL COMPLETION','Functional Completion is defined as the point at which window treatments are securely mounted and operational for their intended purpose. The existence of a minor snag does not negate Functional Completion or entitle the client to withhold payment.',_tcRCt,_tcWCt,tyR);
  tyR=_tcRenderCt('8. SNAG RETENTION LIMIT','Any amount withheld shall not exceed 200% of the estimated cost to remedy the specific snag(s) in question. This retention cap applies per individual snag item.',_tcRCt,_tcWCt,tyR);
  tyR=_tcRenderCt('9. WARRANTY','All products carry a 3-year product warranty from date of installation. Fabric and component warranties are subject to respective manufacturer terms. Warranty is void in the event of misuse or unauthorised alterations.',_tcRCt,_tcWCt,tyR);
  tyR=_tcRenderCt('10. FABRIC & COLOUR VARIATION','Fabric swatches and samples are representative only. Minor colour and texture variations between samples and manufactured product are inherent in the industry and do not constitute grounds for rejection or refund.',_tcRCt,_tcWCt,tyR);
  tyR=_tcRenderCt('11. RETURNS & REFUNDS','Custom-made products are non-returnable and non-refundable as they are manufactured to your specific requirements. Defective items will be repaired or replaced at the discretion of Total Blind Design.',_tcRCt,_tcWCt,tyR);
  tyR=_tcRenderCt('12. GOVERNING LAW','These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the Western Cape High Court, Cape Town.',_tcRCt,_tcWCt,tyR);
  var ty=Math.max(tyL,tyR)+6;
  doc.setDrawColor(200,200,200);doc.setLineWidth(0.2);doc.line(M,ty,W-M,ty);ty+=6;
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(232,70,30);doc.text('CLIENT ACCEPTANCE',M,ty);ty+=6;
  doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(50,50,50);
  var _fw=(PW-12)/3;
  ['Client Name (Print):','Signature:','Date:'].forEach(function(lbl,i){var _fx=M+i*(_fw+6);doc.text(lbl,_fx,ty);doc.setDrawColor(100);doc.setLineWidth(0.2);doc.line(_fx,ty+9,_fx+_fw,ty+9);});
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.4);doc.line(M,H-14,W-M,H-14);
  doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(120,120,120);
  doc.text('By accepting this quotation and paying the required deposit, the client acknowledges having read and agreed to the above Terms & Conditions.',W/2,H-10,{align:'center'});
  doc.setFont('helvetica','bold');doc.setFontSize(6.5);doc.setTextColor(232,70,30);
  doc.text('Total Blind Design cc | 368 Voortrekker Rd, Maitland, Cape Town | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  } // end !isOrd

  // ── Save ──
  var _sanFnCt=function(s){return (s||'').replace(/[\\/:?*"<>|\s]+/g,'_');};
  var fn='TBD-Curtains'+(isOrd?'-Order':'-Quote')+(nm?'-'+_sanFnCt(nm):'')+'.pdf';
  _pdfSave(doc,fn);
  if(typeof od_showToast==='function')od_showToast('\uD83D\uDCC4 PDF saved: '+fn);
}

function ct_downloadXLSX(){
  if(typeof ExcelJS==='undefined'){var _t=typeof od_showToast==='function'?od_showToast:(typeof pwaToast==='function'?pwaToast:alert);_t('Excel library not loaded — check connection.');return;}
  function gv(id){var e=document.getElementById(id);return e?e.value:'';}
  var nm=gv('ct_c_nm')||'Client';
  var pn=gv('ct_c_pn')||'';
  var cl=gv('ct_c_cl')||'';
  var em=gv('ct_c_em')||'';
  var ad=gv('ct_c_ad')||'';
  var md=gv('ct_c_md')||new Date().toISOString().split('T')[0];
  var repEmail=(typeof _currentUser!=='undefined'&&_currentUser&&_currentUser.email)?_currentUser.email:'';

  // ARGB colors
  var OR='FFE8461E',DK='FF3A3A3A',WH='FFFFFFFF',GH='FFF0F0F0',GVAL='FFE0E0E0',GREY='FFCCCCCC';
  var THIN={style:'thin',color:{argb:GREY}};
  var BDRT={top:THIN,bottom:THIN,left:THIN,right:THIN};
  var FMT_R='"R"#,##0';

  var wb=new ExcelJS.Workbook();
  var ws=wb.addWorksheet('Curtain Quote');
  ws.columns=[{width:5},{width:18},{width:18},{width:7},{width:8},{width:11},{width:11},{width:11},{width:18},{width:13}];

  function S(addr,val,o){
    var c=ws.getCell(addr);
    if(val!==undefined&&val!==null)c.value=val;
    o=o||{};
    if(o.font)c.font=o.font;
    if(o.fill)c.fill={type:'pattern',pattern:'solid',fgColor:{argb:o.fill}};
    if(o.align)c.alignment=o.align;
    if(o.fmt)c.numFmt=o.fmt;
    if(o.border)c.border=o.border;
  }
  function fillRow(r,c1,c2,argb){for(var i=c1;i<=c2;i++){ws.getCell(r,i).fill={type:'pattern',pattern:'solid',fgColor:{argb:argb}};}}
  function colL(n){return String.fromCharCode(64+n);}

  // ── Row 1: white logo area (A-D), orange bar (E-J), height 36
  ws.getRow(1).height=36;
  fillRow(1,1,4,WH);
  fillRow(1,5,10,OR);
  // Embed logo
  try{
    var li=document.getElementById('logoImg');
    if(li&&li.src&&li.src.indexOf('data:image')===0){
      var ext=li.src.indexOf('image/jpeg')>=0||li.src.indexOf('image/jpg')>=0?'jpeg':'png';
      var b64=li.src.split(',')[1];
      var imgId=wb.addImage({base64:b64,extension:ext});
      ws.addImage(imgId,{tl:{col:0.15,row:0.1},ext:{width:240,height:46}});
    }
  }catch(e){}

  // ── Rows 2-3: blank white
  ws.getRow(2).height=14;
  fillRow(2,1,10,WH);fillRow(3,1,10,WH);

  // ── Row 4: address line, merged A4:J4
  ws.mergeCells('A4:J4');
  S('A4','368 Voortrekker Rd, Maitland, Cape Town  |  info@totalblinds.co.za  |  www.totalblinddesign.co.za'+(repEmail?'  |  Rep: '+repEmail:''),{font:{color:{argb:'FF666666'},size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'}});

  // ── Row 5: blank
  fillRow(5,1,10,WH);

  // ── Rows 6-8: client block
  var lblF={bold:true,size:9,name:'Calibri'};
  var valF={size:9,name:'Calibri'};
  ws.mergeCells('B6:E6');ws.mergeCells('G6:J6');
  ws.mergeCells('B7:E7');ws.mergeCells('G7:J7');
  ws.mergeCells('B8:E8');ws.mergeCells('G8:J8');
  S('A6','Date:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('B6',md,{font:valF,fill:GVAL,align:{horizontal:'right',vertical:'middle'}});
  S('F6','Client:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('G6',nm,{font:{bold:true,size:9,name:'Calibri'},fill:GVAL,align:{horizontal:'left',vertical:'middle'}});
  S('A7','Project:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('B7',pn,{font:valF,fill:GVAL,align:{horizontal:'left',vertical:'middle'}});
  S('F7','Email:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('G7',em,{font:valF,fill:GVAL,align:{horizontal:'left',vertical:'middle'}});
  S('A8','Cell:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('B8',cl,{font:valF,fill:GVAL,align:{horizontal:'left',vertical:'middle'}});
  S('F8','Address:',{font:lblF,fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('G8',ad,{font:valF,fill:GVAL,align:{horizontal:'left',vertical:'middle',wrapText:true}});

  // ── Row 9: blank
  fillRow(9,1,10,WH);

  // ── Row 10: header (dark grey, white bold), B:C merged for Description
  ws.getRow(10).height=22;
  fillRow(10,1,10,DK);
  ws.mergeCells('B10:C10');
  var hF={bold:true,color:{argb:'FFFFFFFF'},size:10,name:'Calibri'};
  var hAlign={horizontal:'center',vertical:'middle'};
  S('A10','#',{font:hF,fill:DK,align:hAlign});
  S('B10','Description',{font:hF,fill:DK,align:hAlign});
  S('D10','Drops',{font:hF,fill:DK,align:hAlign});
  S('E10','Mtg',{font:hF,fill:DK,align:hAlign});
  S('F10','Fabric',{font:hF,fill:DK,align:hAlign});
  S('G10','Lining',{font:hF,fill:DK,align:hAlign});
  S('H10','Labour',{font:hF,fill:DK,align:hAlign});
  S('I10','Track',{font:hF,fill:DK,align:hAlign});
  S('J10','Total',{font:hF,fill:DK,align:hAlign});

  // ── Data rows: curtain rows (dynamic count) + Installation Fee + Travel Cost
  var ordRows=ct_rows.filter(function(rx){return ct_rowTotal(rx)!==null;});
  var curtainSub=0,trkSub=0;
  var rowIdx=11;
  var num=1;
  ordRows.forEach(function(rx){
    var eff2=ct_effectiveDrop(rx);
    var px=ct_calcPanel(parseInt(rx.w)||0,eff2,rx.fullness,rx.fabW,rx.t1lined,rx.t1fabPrice,rx.t1linPrice,rx.curtainStyle);
    var trkOvr2=ct_ovrVal(rx.trkOvr,ct_calcTrackPrice(rx));
    var rowTot=Math.round(px.fabCost+px.linCost+px.labCost+trkOvr2);
    curtainSub+=ct_rowCurtainTotal(rx);
    trkSub+=ct_ovrVal(rx.trkOvr,ct_calcTrackPrice(rx)+ct_calcOptPrice(rx));
    var loc=rx.loc||('Window '+num);
    ws.mergeCells('B'+rowIdx+':C'+rowIdx);
    S('A'+rowIdx,num,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'},border:BDRT});
    S('B'+rowIdx,loc,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle',wrapText:true},border:BDRT});
    S('D'+rowIdx,px.drops,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'},border:BDRT});
    S('E'+rowIdx,px.meterage,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'},fmt:'0.0',border:BDRT});
    S('F'+rowIdx,Math.round(px.fabCost),{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
    S('G'+rowIdx,Math.round(px.linCost),{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
    S('H'+rowIdx,Math.round(px.labCost),{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
    S('I'+rowIdx,Math.round(trkOvr2),{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
    S('J'+rowIdx,rowTot,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
    rowIdx++;num++;
  });
  // Installation Fee row
  var instCost=Math.round(ct_installCost||0);
  ws.mergeCells('B'+rowIdx+':C'+rowIdx);
  S('A'+rowIdx,num,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'},border:BDRT});
  S('B'+rowIdx,'Installation Fee',{font:{italic:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'},border:BDRT});
  S('D'+rowIdx,'',{fill:WH,border:BDRT});S('E'+rowIdx,'',{fill:WH,border:BDRT});S('F'+rowIdx,'',{fill:WH,border:BDRT});S('G'+rowIdx,'',{fill:WH,border:BDRT});S('H'+rowIdx,'',{fill:WH,border:BDRT});S('I'+rowIdx,'',{fill:WH,border:BDRT});
  S('J'+rowIdx,instCost,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
  rowIdx++;num++;
  // Travel Cost row
  var travCost=Math.round(ct_travelCost||0);
  ws.mergeCells('B'+rowIdx+':C'+rowIdx);
  S('A'+rowIdx,num,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'center',vertical:'middle'},border:BDRT});
  S('B'+rowIdx,'Travel Cost',{font:{italic:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'},border:BDRT});
  S('D'+rowIdx,'',{fill:WH,border:BDRT});S('E'+rowIdx,'',{fill:WH,border:BDRT});S('F'+rowIdx,'',{fill:WH,border:BDRT});S('G'+rowIdx,'',{fill:WH,border:BDRT});S('H'+rowIdx,'',{fill:WH,border:BDRT});S('I'+rowIdx,'',{fill:WH,border:BDRT});
  S('J'+rowIdx,travCost,{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R,border:BDRT});
  rowIdx++;

  // ── Totals
  var discAmt=ct_discPct>0?Math.round(curtainSub*(ct_discPct/100)):0;
  var discTrkAmt=ct_discTrkPct>0?Math.round(trkSub*(ct_discTrkPct/100)):0;
  var totalDisc=discAmt+discTrkAmt;
  var sub2=curtainSub+trkSub-totalDisc+(ct_installCost||0)+(ct_travelCost||0);
  var vat2=Math.round(sub2*0.15);
  var grand2=sub2+vat2;
  var deposit=Math.round(grand2*0.6);
  var deliv=Math.round(grand2*0.35);
  var fin=Math.round(grand2*0.05);

  // Sub Total — A:I merged, J value (light grey fill)
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'Sub Total (excl. VAT)',{font:{bold:true,size:9,name:'Calibri',color:{argb:'FF333333'}},fill:GH,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,sub2,{font:{bold:true,size:9,name:'Calibri'},fill:GH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R});
  rowIdx++;
  // Discount — A:H merged, I=pct, J=amt
  ws.mergeCells('A'+rowIdx+':H'+rowIdx);
  S('A'+rowIdx,'Discount',{font:{italic:true,size:9,name:'Calibri',color:{argb:'FF555555'}},fill:WH,align:{horizontal:'right',vertical:'middle'}});
  var discPctShown=(ct_discPct||ct_discTrkPct||0);
  S('I'+rowIdx,totalDisc>0?(discPctShown+'%'):'',{font:{italic:true,size:9,name:'Calibri',color:{argb:'FF4A6FE3'}},fill:WH,align:{horizontal:'center',vertical:'middle'}});
  S('J'+rowIdx,totalDisc>0?-totalDisc:0,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:'"R "#,##0'});
  rowIdx++;
  // VAT — A:I merged, J value
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'VAT (15%)',{font:{size:9,name:'Calibri',color:{argb:'FF555555'}},fill:WH,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,vat2,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:'"R "#,##0'});
  rowIdx++;
  // TOTAL incl. VAT — orange, A:I merged
  ws.getRow(rowIdx).height=22;
  fillRow(rowIdx,1,10,OR);
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'TOTAL incl. VAT',{font:{bold:true,color:{argb:'FFFFFFFF'},size:11,name:'Calibri'},fill:OR,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,grand2,{font:{bold:true,color:{argb:'FFFFFFFF'},size:11,name:'Calibri'},fill:OR,align:{horizontal:'right',vertical:'middle'},fmt:'#,##0.00'});
  rowIdx++;
  // Deposits
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'60% Deposit',{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,deposit,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:'#,##0.00'});
  rowIdx++;
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'35% Delivery Balance',{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,deliv,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R});
  rowIdx++;
  ws.mergeCells('A'+rowIdx+':I'+rowIdx);
  S('A'+rowIdx,'5% Final Balance',{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'}});
  S('J'+rowIdx,fin,{font:{size:9,name:'Calibri'},fill:WH,align:{horizontal:'right',vertical:'middle'},fmt:FMT_R});
  rowIdx++;
  // Payment Ref
  ws.mergeCells('A'+rowIdx+':J'+rowIdx);
  S('A'+rowIdx,'Payment Ref: '+nm,{font:{italic:true,color:{argb:'FF888888'},size:8,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  rowIdx++;
  // BANKING DETAILS header
  ws.mergeCells('A'+rowIdx+':J'+rowIdx);
  fillRow(rowIdx,1,10,DK);
  S('A'+rowIdx,'BANKING DETAILS',{font:{bold:true,color:{argb:'FFFFFFFF'},size:9,name:'Calibri'},fill:DK,align:{horizontal:'left',vertical:'middle'}});
  rowIdx++;
  // Banking columns
  ws.mergeCells('C'+rowIdx+':E'+rowIdx);ws.mergeCells('F'+rowIdx+':G'+rowIdx);ws.mergeCells('H'+rowIdx+':J'+rowIdx);
  S('A'+rowIdx,'Bank',{font:{bold:true,color:{argb:'FF555555'},size:8,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  ws.mergeCells('B'+rowIdx+':B'+rowIdx);
  S('C'+rowIdx,'Account Name',{font:{bold:true,color:{argb:'FF555555'},size:8,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('F'+rowIdx,'Account No',{font:{bold:true,color:{argb:'FF555555'},size:8,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('H'+rowIdx,'Branch Code',{font:{bold:true,color:{argb:'FF555555'},size:8,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  rowIdx++;
  // Banking data
  ws.mergeCells('C'+rowIdx+':E'+rowIdx);ws.mergeCells('F'+rowIdx+':G'+rowIdx);ws.mergeCells('H'+rowIdx+':J'+rowIdx);
  S('A'+rowIdx,'FNB Hout Bay',{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('C'+rowIdx,'Total Blind Design cc',{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('F'+rowIdx,'62401898658',{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  S('H'+rowIdx,'204009',{font:{bold:true,size:9,name:'Calibri'},fill:WH,align:{horizontal:'left',vertical:'middle'}});
  rowIdx++;
  // Orange footer
  ws.getRow(rowIdx).height=20;
  fillRow(rowIdx,1,10,OR);
  ws.mergeCells('A'+rowIdx+':J'+rowIdx);
  S('A'+rowIdx,'Total Blind Design  |  368 Voortrekker Rd, Maitland  |  info@totalblinds.co.za  |  www.totalblinddesign.co.za',{font:{color:{argb:'FFFFFFFF'},size:8,name:'Calibri'},fill:OR,align:{horizontal:'center',vertical:'middle'}});
  rowIdx++;
  // Terms & Conditions
  ws.mergeCells('A'+rowIdx+':J'+rowIdx);
  S('A'+rowIdx,'TERMS & CONDITIONS',{font:{bold:true,size:10,name:'Calibri',color:{argb:'FF333333'}},fill:WH,align:{horizontal:'center',vertical:'middle'}});

  // ── Save
  var _san=function(s){return (s||'').replace(/[\\/:?*"<>|\s]+/g,'_');};
  wb.xlsx.writeBuffer().then(function(buf){
    var blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');a.href=url;a.download='TBD-Curtains-Quote-'+_san(nm)+'.xlsx';
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(url);},2000);
    if(typeof od_showToast==='function')od_showToast('\uD83D\uDCCA Excel saved!');else if(typeof pwaToast==='function')pwaToast('\uD83D\uDCCA Excel saved!');
  }).catch(function(err){
    var _t=typeof od_showToast==='function'?od_showToast:(typeof pwaToast==='function'?pwaToast:alert);
    _t('Excel save failed: '+err.message);
  });
}
