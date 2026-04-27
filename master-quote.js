// ═══ Master Quote (Phase 1-3) ═══
var MQ_STATE={order:['indoor','outdoor','curtains','shutters'],disc:{indoorBlinds:0,indoorAcc:0,outdoorBlinds:0,outdoorAcc:0,curtainFabric:0,curtainTrack:0,shuttersBlinds:0}};
var MQ_DISC_KEYS=['indoorBlinds','indoorAcc','outdoorBlinds','outdoorAcc','curtainFabric','curtainTrack','shuttersBlinds'];
function mq_setDiscount(k,v){var n=Math.max(0,Math.min(100,parseFloat(v)||0));MQ_STATE.disc[k]=n;mq_render();}
function mq_bumpDiscount(k,d){mq_setDiscount(k,(MQ_STATE.disc[k]||0)+d);}
var MQ_DISC_ROWS=[
  {key:'indoorBlinds',title:'% Discount — Blinds (Indoor)',sub:'Applied to blind prices before VAT'},
  {key:'indoorAcc',title:'% Discount — Accessories (Indoor)',sub:'Motors, adaptors, remotes & add-ons'},
  {key:'outdoorBlinds',title:'% Discount — Blinds (Outdoor)',sub:'Applied to blind prices before VAT'},
  {key:'outdoorAcc',title:'% Discount — Accessories (Outdoor)',sub:'Motors, adaptors, remotes & add-ons'},
  {key:'curtainFabric',title:'% Discount — Curtains',sub:'Fabric, labour & lining'},
  {key:'curtainTrack',title:'% Discount — Tracks',sub:'Track hardware & options'},
  {key:'shuttersBlinds',title:'% Discount — BD Shutters',sub:'Shutters & extrusions'}
];
function mq_renderDiscounts(){
  var box=document.getElementById('mq_disc_rows');if(!box)return;
  var html='';
  MQ_DISC_ROWS.forEach(function(r){
    var v=MQ_STATE.disc[r.key]||0;
    html+='<div style="display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,.2);border:1.5px solid #666;border-radius:10px;padding:10px 14px">'
      +'<div><div style="color:#ccc;font-weight:700;font-size:12px;letter-spacing:.3px">'+r.title+'</div>'
      +'<div style="color:#888;font-size:10px;margin-top:3px">'+r.sub+'</div></div>'
      +'<div style="display:flex;align-items:center;gap:6px;flex-shrink:0;margin-left:12px">'
        +'<button onclick="mq_bumpDiscount(\''+r.key+'\',-1)" style="width:30px;height:30px;background:#555;border:none;border-radius:6px;color:#fff;font-size:16px;cursor:pointer;font-family:inherit">&#8722;</button>'
        +'<span id="mq_disc_val_'+r.key+'" style="color:#fff;font-weight:700;font-size:16px;min-width:40px;text-align:center">'+v+'%</span>'
        +'<button onclick="mq_bumpDiscount(\''+r.key+'\',1)" style="width:30px;height:30px;background:#555;border:none;border-radius:6px;color:#fff;font-size:16px;cursor:pointer;font-family:inherit">+</button>'
        +'<input type="number" min="0" max="100" value="'+v+'" id="mq_disc_'+r.key+'" oninput="mq_setDiscount(\''+r.key+'\',this.value)" style="width:52px;background:#4a4a4a;border:1px solid #666;border-radius:6px;color:#fff;padding:5px 6px;font-size:13px;text-align:center">'
      +'</div></div>';
  });
  box.innerHTML=html;
}
function mq_moveSection(k,dir){
  var o=MQ_STATE.order.slice();var i=o.indexOf(k);if(i<0)return;
  var j=i+dir;if(j<0||j>=o.length)return;
  var tmp=o[i];o[i]=o[j];o[j]=tmp;MQ_STATE.order=o;mq_render();
}
var MQ_CUST_FIELDS=[
  {k:'nm',lbl:'Name',type:'text'},
  {k:'pn',lbl:'Project Name',type:'text'},
  {k:'cl',lbl:'Cell',type:'tel'},
  {k:'md',lbl:'Measure Date',type:'date'},
  {k:'em',lbl:'Email',type:'email'},
  {k:'ad',lbl:'Address',type:'text'},
  {k:'gn',lbl:'General Notes',type:'textarea'}
];
function mq_fmtR(n){n=Math.round(n||0);return 'R'+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');}
function mq_esc(s){return (s==null?'':String(s)).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function mq_syncCustomer(k,val){
  ['','od_','ct_','sh_'].forEach(function(pfx){
    var el=document.getElementById(pfx+'c_'+k);
    if(el && el.value!==val) el.value=val;
  });
  if(typeof _custDirty==='function'){try{_custDirty('i');_custDirty('o');_custDirty('c');_custDirty('sh');}catch(e){}}
}
function mq_setInstall(n){
  n=parseFloat(n)||0;
  if(typeof installCost!=='undefined')installCost=n;
  if(typeof od_installCost!=='undefined')od_installCost=n;
  if(typeof ct_installCost!=='undefined')ct_installCost=n;
  var ids=['inp_install','od_inp_install','ct_inp_install'];
  ids.forEach(function(id){var e=document.getElementById(id);if(e)e.value=n;});
  mq_recalcAll();
}
function mq_setTravel(n){
  n=parseFloat(n)||0;
  if(typeof travelCost!=='undefined')travelCost=n;
  if(typeof od_travelCost!=='undefined')od_travelCost=n;
  if(typeof ct_travelCost!=='undefined')ct_travelCost=n;
  var ids=['inp_travel','od_inp_travel','ct_inp_travel'];
  ids.forEach(function(id){var e=document.getElementById(id);if(e)e.value=n;});
  mq_recalcAll();
}
function mq_recalcAll(){
  try{if(typeof updatePrices==='function')updatePrices();}catch(e){}
  try{if(typeof od_updatePrices==='function')od_updatePrices();}catch(e){}
  try{if(typeof ct_updatePrices==='function')ct_updatePrices();}catch(e){}
  try{if(typeof sh_render==='function')sh_render();}catch(e){}
  mq_render();
}
function mq_renderCustomer(){
  var box=document.getElementById('mq_customer_fields');
  if(!box)return;
  var html='';
  MQ_CUST_FIELDS.forEach(function(f){
    var cur=(document.getElementById('c_'+f.k)||{}).value||'';
    var span=(f.k==='gn')?'grid-column:1 / -1;':'';
    if(f.type==='textarea'){
      html+='<div style="'+span+'"><label class="lbl" style="font-size:11px;color:#666;display:block;margin-bottom:4px">'+f.lbl+'</label>'
        +'<textarea id="mq_c_'+f.k+'" oninput="mq_syncCustomer(\''+f.k+'\',this.value)" style="width:100%;box-sizing:border-box;background:#f5f5f5;border:1px solid #ddd;border-radius:6px;padding:7px 10px;font-size:13px;min-height:60px;font-family:inherit">'+mq_esc(cur)+'</textarea></div>';
    } else {
      html+='<div style="'+span+'"><label class="lbl" style="font-size:11px;color:#666;display:block;margin-bottom:4px">'+f.lbl+'</label>'
        +'<input id="mq_c_'+f.k+'" type="'+f.type+'" value="'+mq_esc(cur)+'" oninput="mq_syncCustomer(\''+f.k+'\',this.value)" style="width:100%;box-sizing:border-box;background:#f5f5f5;border:1px solid #ddd;border-radius:6px;padding:7px 10px;font-size:13px"></div>';
    }
  });
  box.innerHTML=html;
}
function mq_countRows(arr){
  if(!arr||!arr.length)return 0;
  var n=0;
  for(var i=0;i<arr.length;i++){
    var r=arr[i];
    if(!r)continue;
    if(r.loc||r.w||r.width||r.bt||r.trkModel)n++;
  }
  return n;
}
function mq_getSections(){
  var d=MQ_STATE.disc;
  function mk(key,label,parts){
    var rawSub=0,discAmt=0;
    parts.forEach(function(p){rawSub+=p.raw;p.amt=Math.round(p.raw*((d[p.key]||0)/100));discAmt+=p.amt;});
    return {key:key,label:label,rawSub:rawSub,discAmt:discAmt,sub:rawSub-discAmt,parts:parts};
  }
  var iBl=window._mq_indoor_blinds||0,iAc=window._mq_indoor_acc||0,iEx=window._mq_indoor_express||0;
  var oBl=window._mq_outdoor_blinds||0,oAc=window._mq_outdoor_acc||0;
  var cFa=window._mq_curtain_fabric||0,cTr=window._mq_curtain_track||0;
  var shTot=window._mq_shutter_total||0;
  var raw={
    indoor:mk('indoor','Indoor Blinds',[
      {key:'indoorBlinds',label:'Blinds',raw:iBl+iEx},
      {key:'indoorAcc',label:'Accessories',raw:iAc}
    ]),
    outdoor:mk('outdoor','Outdoor Blinds',[
      {key:'outdoorBlinds',label:'Blinds',raw:oBl},
      {key:'outdoorAcc',label:'Accessories',raw:oAc}
    ]),
    curtains:mk('curtains','Curtains',[
      {key:'curtainFabric',label:'Curtains',raw:cFa},
      {key:'curtainTrack',label:'Tracks',raw:cTr}
    ]),
    shutters:mk('shutters','BD Shutters',[
      {key:'shuttersBlinds',label:'Shutters & Extrusions',raw:shTot}
    ])
  };
  raw.indoor.count=mq_countRows(typeof rows!=='undefined'?rows:[]);
  raw.outdoor.count=mq_countRows(typeof od_rows!=='undefined'?od_rows:[]);
  raw.curtains.count=mq_countRows(typeof ct_rows!=='undefined'?ct_rows:[]);
  raw.shutters.count=typeof SH_STATE!=='undefined'?(SH_STATE.rows.length+SH_STATE.extrusions.length):0;
  var order=MQ_STATE.order||['indoor','outdoor','curtains','shutters'];
  var out=[];order.forEach(function(k){if(raw[k])out.push(raw[k]);});
  return out;
}
function mq_getDetailRows(key){
  var out=[];
  if(key==='indoor'&&typeof rows!=='undefined'){
    rows.forEach(function(r,idx){
      if(!r.loc||!r.w)return;
      var p=typeof calc==='function'?calc(r.bt,r.rng,parseInt(r.w)||0,parseInt(r.d)||0,r.sbc,r.cas):null;
      var addons=(r.intc?PRICE_INTC:0)+(r.rbc?PRICE_RBC:0)+(r.fbi&&typeof R_FBI!=='undefined'?(R_FBI[fb(parseInt(r.w)||0,R_W)]||0):0);
      var motorP=(MOTOR_P&&MOTOR_P[r.mot])||0,adpP=(ADP_P&&ADP_P[r.adp])||0,chgP=(ADP_P&&ADP_P[r.chg])||0,remP=(REMOTE_P&&REMOTE_P[r.rem])||0,smartP=(SMART_P&&SMART_P[r.smart])||0;
      var total=p!=null?p+addons+motorP+adpP+chgP+remP+smartP:null;
      if(total!=null)out.push({num:idx+1,loc:r.loc,desc:(r.bt||'')+(r.rng?' · '+r.rng:''),acc:motorP+adpP+chgP+remP+smartP,total:total});
    });
  } else if(key==='outdoor'&&typeof od_rows!=='undefined'){
    od_rows.forEach(function(r,idx){
      if(!r.loc||!r.w)return;
      var base=typeof od_calc==='function'?od_calc(r.bt,r.rng,parseInt(r.w)||0,parseInt(r.d)||0):null;
      var acc=typeof od_calcAddons==='function'?od_calcAddons(r):0;
      var mot=typeof od_calcMotor==='function'?od_calcMotor(r):0;
      var total=base!=null?base+acc+mot:null;
      if(total!=null)out.push({num:idx+1,loc:r.loc,desc:(r.bt||'')+(r.rng?' · '+r.rng:''),acc:acc+mot,total:total});
    });
  } else if(key==='curtains'&&typeof ct_rows!=='undefined'){
    ct_rows.forEach(function(rx,idx){
      if(!rx.loc)return;
      var total=typeof ct_rowTotal==='function'?ct_rowTotal(rx):null;
      if(total==null)return;
      var desc=(rx.curtainStyle||'Curtain')+(rx.t1fabName?' · '+rx.t1fabName:'');
      var trkOvr=typeof ct_ovrVal==='function'&&typeof ct_calcTrackPrice==='function'?ct_ovrVal(rx.trkOvr,ct_calcTrackPrice(rx)):0;
      out.push({num:idx+1,loc:rx.loc,desc:desc,acc:trkOvr,total:total});
    });
  } else if(key==='shutters'&&typeof SH_STATE!=='undefined'){
    var sNum=1;
    SH_STATE.rows.forEach(function(r){
      if(!r.width||!r.drop)return;
      var p=sh_calcRow(r);if(p==null)return;
      var pLabel=SH_PRODUCTS.find(function(x){return x.v===r.product;});
      var hingeTag=(r.product==='altra_hi')?' — '+(r.hinge==='double'?'Double Hinge':'Single Hinge'):'';
      var desc=(pLabel?pLabel.l.replace(' (uPVC)','').replace(' (Aluminium)',''):'Shutter')+hingeTag+(r.panels?' · '+r.panels+'P':'');
      out.push({num:sNum++,loc:r.loc||('Item '+sNum),desc:desc,acc:0,total:p});
    });
    SH_STATE.extrusions.forEach(function(ex){
      var ep=sh_extLookup(ex.type,ex.length);if(ep==null)return;
      var eType=(SH_T.ext.types[ex.type]||{}).n||'Extrusion';
      out.push({num:sNum++,loc:'Extrusion',desc:eType+(ex.length?' · '+ex.length+'mm':''),acc:0,total:ep});
    });
  }
  return out;
}
function mq_renderSections(){
  var box=document.getElementById('mq_sections_container');
  if(!box)return;
  var secs=mq_getSections();
  var any=secs.some(function(s){return s.sub>0;});
  if(!any){box.innerHTML='<div style="color:#888;font-size:12px;padding:12px;text-align:center;background:#f5f5f5;border-radius:8px">No priced items in Indoor, Outdoor, Curtains, or BD Shutters yet. Add items on those tabs to build a master quote.</div>';return;}
  var html='';
  var visibleSecs=secs.filter(function(s){return s.sub>0;});
  secs.forEach(function(s,i){
    if(s.sub<=0)return;
    var visIdx=visibleSecs.indexOf(s);
    var upDisabled=(visIdx===0),downDisabled=(visIdx===visibleSecs.length-1);
    var detailRows=mq_getDetailRows(s.key);
    var rowsHtml='';
    detailRows.forEach(function(dr){
      rowsHtml+='<div style="display:flex;justify-content:space-between;align-items:baseline;padding:3px 0;border-bottom:1px solid #f0f0f0;font-size:12px">'
        +'<span style="color:#333"><span style="font-weight:600;color:#E8461E;margin-right:6px">'+dr.num+'.</span>'
        +mq_esc(dr.loc)+(dr.desc?'<span style="color:#999;font-size:11px;margin-left:4px">— '+mq_esc(dr.desc)+'</span>':'')
        +(dr.acc>0?'<span style="color:#888;font-size:10px;margin-left:4px">(incl. acc: '+mq_fmtR(dr.acc)+')</span>':'')
        +'</span>'
        +'<span style="font-weight:600;color:#333;white-space:nowrap;margin-left:8px">'+mq_fmtR(dr.total)+'</span>'
        +'</div>';
    });
    var partsHtml='';
    (s.parts||[]).forEach(function(p){
      var pctVal=MQ_STATE.disc[p.key]||0;
      if(p.raw>0||pctVal>0){
        partsHtml+='<div style="display:flex;justify-content:space-between;font-size:11px;color:#666;padding:1px 0;margin-top:2px"><span>'+p.label+(pctVal>0?' <span style="color:#27ae60">('+pctVal+'% −'+mq_fmtR(p.amt)+')</span>':'')+'</span><span>'+mq_fmtR(p.raw-p.amt)+'</span></div>';
      }
    });
    html+='<div style="background:#fff;border:1px solid #ddd;border-radius:8px;padding:10px 12px;margin-bottom:8px">'
      +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px">'
        +'<div style="display:flex;gap:4px">'
          +'<button onclick="mq_moveSection(\''+s.key+'\',-1)" '+(upDisabled?'disabled':'')+' style="width:24px;height:20px;background:'+(upDisabled?'#eee':'#4A4A4A')+';color:'+(upDisabled?'#aaa':'#fff')+';border:none;border-radius:4px;cursor:'+(upDisabled?'default':'pointer')+';font-size:11px;padding:0">▲</button>'
          +'<button onclick="mq_moveSection(\''+s.key+'\',1)" '+(downDisabled?'disabled':'')+' style="width:24px;height:20px;background:'+(downDisabled?'#eee':'#4A4A4A')+';color:'+(downDisabled?'#aaa':'#fff')+';border:none;border-radius:4px;cursor:'+(downDisabled?'default':'pointer')+';font-size:11px;padding:0">▼</button>'
        +'</div>'
        +'<div style="flex:1"><span style="font-weight:700;color:#333;font-size:14px">'+s.label+'</span>'
        +'<span style="font-size:11px;color:#888;margin-left:6px">'+s.count+' item'+(s.count===1?'':'s')+'</span></div>'
        +'<div style="text-align:right">'
          +(s.discAmt>0?'<div style="font-size:11px;color:#bbb;text-decoration:line-through">'+mq_fmtR(s.rawSub)+'</div>':'')
          +'<div style="font-weight:700;color:#E8461E;font-size:15px">'+mq_fmtR(s.sub)+'</div>'
        +'</div>'
      +'</div>'
      +(rowsHtml?'<div style="margin-top:4px">'+rowsHtml+'</div>':'')
      +(partsHtml?'<div style="margin-top:6px;padding-top:4px;border-top:1px dashed #eee">'+partsHtml+'</div>':'')
      +'</div>';
  });
  box.innerHTML=html;
}
function mq_renderTotals(){
  var box=document.getElementById('mq_totals_container');
  if(!box)return;
  var secs=mq_getSections();
  var catSum=0;
  secs.forEach(function(s){catSum+=s.sub;});
  var inst=parseFloat((document.getElementById('mq_inp_install')||{}).value)||0;
  var trav=parseFloat((document.getElementById('mq_inp_travel')||{}).value)||0;
  var sub=catSum+inst+trav;
  var vat=Math.round(sub*0.15);
  var tot=sub+vat;
  var dep60=Math.round(tot*0.6),dep35=Math.round(tot*0.35),dep5=Math.round(tot*0.05);
  var html='';
  secs.forEach(function(s){
    if(s.sub<=0)return;
    html+='<div style="font-weight:700;font-size:13px;color:#fff;padding:6px 0 2px 0;margin-top:4px">'+s.label+'</div>';
    (s.parts||[]).forEach(function(p){
      if(p.raw<=0)return;
      var pct=MQ_STATE.disc[p.key]||0;
      var net=p.raw-p.amt;
      html+='<div style="display:flex;justify-content:space-between;padding:2px 0 2px 12px;font-size:12px;color:#ccc"><span>'+p.label+(pct>0?' <span style="color:#90ee90">('+pct+'% −'+mq_fmtR(p.amt)+')</span>':'')+'</span><span>'+mq_fmtR(net)+'</span></div>';
    });
    html+='<div style="display:flex;justify-content:space-between;padding:3px 0 6px 0;font-size:12px;color:#aaa;border-bottom:1px dashed rgba(255,255,255,0.12);font-style:italic"><span>'+s.label+' Subtotal</span><span>'+mq_fmtR(s.sub)+'</span></div>';
  });
  if(inst>0)html+='<div class="sline" style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;color:#eee"><span>Installation</span><span>'+mq_fmtR(inst)+'</span></div>';
  if(trav>0)html+='<div class="sline" style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px;color:#eee"><span>Travel</span><span>'+mq_fmtR(trav)+'</span></div>';
  html+='<div style="border-top:1px solid #666;margin-top:8px;padding-top:8px">'
    +'<div style="display:flex;justify-content:space-between;font-size:13px;color:#ccc;padding:3px 0"><span>Sub Total</span><span>'+mq_fmtR(sub)+'</span></div>'
    +'<div style="display:flex;justify-content:space-between;font-size:13px;color:#ccc;padding:3px 0"><span>VAT (15%)</span><span>'+mq_fmtR(vat)+'</span></div>'
    +'<div style="display:flex;justify-content:space-between;font-size:18px;color:#E8461E;font-weight:800;padding:6px 0;border-top:1px solid #666;margin-top:4px"><span>TOTAL incl VAT</span><span>'+mq_fmtR(tot)+'</span></div>'
    +'<div style="display:flex;justify-content:space-between;font-size:12px;color:#90ee90;padding:3px 0"><span>60% Deposit</span><span>'+mq_fmtR(dep60)+'</span></div>'
    +'<div style="display:flex;justify-content:space-between;font-size:12px;color:#90ee90;padding:3px 0"><span>35% Delivery Balance</span><span>'+mq_fmtR(dep35)+'</span></div>'
    +'<div style="display:flex;justify-content:space-between;font-size:12px;color:#90ee90;padding:3px 0"><span>5% Final Balance</span><span>'+mq_fmtR(dep5)+'</span></div>'
    +'</div>';
  box.innerHTML=html;
}
function mq_syncDiscountInputs(){
  MQ_DISC_KEYS.forEach(function(k){
    var e=document.getElementById('mq_disc_'+k);
    if(e && parseFloat(e.value)!==(MQ_STATE.disc[k]||0))e.value=MQ_STATE.disc[k]||0;
  });
}
function mq_render(){
  // Force refresh of source totals (indoor/outdoor/curtain/shutters) so _mq_* globals are current
  try{if(typeof updatePrices==='function')updatePrices();}catch(e){}
  try{if(typeof od_updatePrices==='function')od_updatePrices();}catch(e){}
  try{if(typeof ct_updatePrices==='function')ct_updatePrices();}catch(e){}
  try{if(typeof sh_render==='function')sh_render();}catch(e){}
  mq_renderDiscounts();
  mq_syncDiscountInputs();
  mq_renderCustomer();
  mq_renderSections();
  mq_renderTotals();
}
function mq_getCust(){
  var o={};MQ_CUST_FIELDS.forEach(function(f){var e=document.getElementById('c_'+f.k);o[f.k]=e?e.value:'';});return o;
}
function mq_saveQuote(){
  if(typeof _currentUser!=='undefined' && !_currentUser && typeof _authModalOpen==='function'){_authModalOpen(true);return;}
  var cust=mq_getCust();
  var rawLabel=prompt('Master Quote name:',cust.nm||cust.pn||('Master '+new Date().toLocaleDateString('en-ZA')));
  if(rawLabel===null)return;
  rawLabel=(rawLabel||'').trim()||('Master '+new Date().toLocaleDateString('en-ZA'));
  var label='[Master] '+rawLabel.replace(/^\[Master\] /,'');
  var state={
    kind:'master',
    indoor:(typeof getState==='function')?getState():null,
    outdoor:(typeof od_getState==='function')?od_getState():null,
    curtains:(typeof ct_getState==='function')?ct_getState():null,
    shutters:(typeof SH_STATE!=='undefined')?JSON.parse(JSON.stringify(SH_STATE)):null,
    master:{
      install:parseFloat((document.getElementById('mq_inp_install')||{}).value)||0,
      travel:parseFloat((document.getElementById('mq_inp_travel')||{}).value)||0,
      customer:cust,
      order:MQ_STATE.order.slice(),
      disc:(function(){var o={};MQ_DISC_KEYS.forEach(function(k){o[k]=MQ_STATE.disc[k]||0;});return o;})()
    }
  };
  try{
    var savedAt=new Date().toISOString();
    var jobs=JSON.parse(localStorage.getItem('tbd_jobs')||'[]');
    var ownerEmail=(typeof _currentUser!=='undefined' && _currentUser)?_currentUser.email:null;
    var existingIdx=ownerEmail?jobs.findIndex(function(j){return j.label===label && j.owner_email===ownerEmail;}):-1;
    var jobObj=existingIdx!==-1?jobs[existingIdx]:{id:(typeof _uuid==='function')?_uuid():(Date.now()+'-'+Math.random()),label:label,owner_email:ownerEmail};
    jobObj.state=JSON.stringify(state);
    jobObj.saved_at=savedAt;jobObj.date=savedAt;
    if(ownerEmail)jobObj.pending_sync=true;
    if(existingIdx!==-1)jobs[existingIdx]=jobObj;else jobs.unshift(jobObj);
    if(jobs.length>500)jobs=jobs.slice(0,500);
    if(typeof _saveJobsLocal==='function')_saveJobsLocal(jobs);else localStorage.setItem('tbd_jobs',JSON.stringify(jobs));
    if(typeof pwaToast==='function')pwaToast('✅ Master Quote saved: '+rawLabel);else alert('Master Quote saved: '+rawLabel);
    if(typeof pwaRenderJobs==='function')pwaRenderJobs();
  }catch(e){if(typeof pwaToast==='function')pwaToast('⚠️ Save failed.');else alert('Save failed');}
}
function mq_exportPDF(){
  if(typeof jspdf==='undefined'&&typeof window.jspdf==='undefined'){alert('PDF library not loaded.');return;}
  var J=(window.jspdf&&window.jspdf.jsPDF)||(typeof jsPDF!=='undefined'?jsPDF:null);
  if(!J){alert('PDF library not found.');return;}
  // Force refresh totals
  try{if(typeof updatePrices==='function')updatePrices();}catch(e){}
  try{if(typeof od_updatePrices==='function')od_updatePrices();}catch(e){}
  try{if(typeof ct_updatePrices==='function')ct_updatePrices();}catch(e){}
  var doc=new J('p','mm','a4');
  var W=doc.internal.pageSize.getWidth(),M=12;
  var cust=mq_getCust();
  var secs=mq_getSections();
  var inst=parseFloat((document.getElementById('mq_inp_install')||{}).value)||0;
  var trav=parseFloat((document.getElementById('mq_inp_travel')||{}).value)||0;
  var catSum=0;secs.forEach(function(s){catSum+=s.sub;});
  var sub=catSum+inst+trav,vat=Math.round(sub*0.15),tot=sub+vat;
  var _repE=(typeof _currentUser!=='undefined'&&_currentUser&&_currentUser.email)?_currentUser.email:'';
  var date=cust.md||new Date().toLocaleDateString('en-ZA');
  var fmt=function(n){return 'R'+Math.round(n||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');};

  function addHeader(){
    doc.setFillColor(255,255,255);doc.rect(0,0,W,28,'F');
    try{var _li=document.getElementById('logoImg');var _ls=_li.src;if(!_li||!_li.complete||!_li.naturalWidth)throw new Error();var _lw=_li.naturalWidth;var _lh=_li.naturalHeight||_lw;var _pw=65;var _ph=Math.round(_pw*(_lh/_lw)*10)/10;doc.addImage(_ls,'PNG',M,0,_pw,_ph);}catch(e){}
    doc.setFillColor(232,70,30);doc.rect(0,28,W,1.5,'F');
    doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(232,70,30);
    doc.text('MASTER QUOTATION',W-M,10,{align:'right'});
    doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(100);
    doc.text('Total Blind Design cc',W-M,15,{align:'right'});
    doc.text('368 Voortrekker Rd, Maitland, Cape Town',W-M,19,{align:'right'});
    doc.text('info@totalblinds.co.za | www.totalblinddesign.co.za',W-M,23,{align:'right'});
    if(_repE){doc.text('Rep: '+_repE,W-M,27,{align:'right'});}
  }

  addHeader();
  var y=32;doc.setTextColor(30,30,30);doc.setFontSize(8);
  // Customer row
  doc.setFont('helvetica','bold');doc.text('Name: ',M,y);doc.setFont('helvetica','normal');doc.text(cust.nm||'',M+14,y);
  doc.setFont('helvetica','bold');doc.text('Project: ',M+80,y);doc.setFont('helvetica','normal');doc.text(cust.pn||'',M+96,y);
  doc.setFont('helvetica','bold');doc.text('Date: ',W-M-28,y);doc.setFont('helvetica','normal');doc.text(date,W-M-16,y);
  y+=5;
  doc.setFont('helvetica','bold');doc.text('Cell: ',M,y);doc.setFont('helvetica','normal');doc.text(cust.cl||'',M+10,y);
  doc.setFont('helvetica','bold');doc.text('Email: ',M+50,y);doc.setFont('helvetica','normal');doc.text(cust.em||'',M+63,y);
  if(cust.ad){doc.setFont('helvetica','bold');doc.text('Address: ',M+120,y);doc.setFont('helvetica','normal');doc.text(cust.ad,M+138,y);}
  y+=6;

  // Per-section tables
  var order=MQ_STATE.order||['indoor','outdoor','curtains','shutters'];
  order.forEach(function(key){
    var sec=secs.find(function(s){return s.key===key;});
    if(!sec||sec.sub<=0)return;
    var detailRows=mq_getDetailRows(key);
    if(!detailRows.length)return;
    // Check page space
    if(y>240){doc.addPage();addHeader();y=34;}
    doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(74,74,74);
    doc.text(sec.label.toUpperCase(),M,y);
    doc.setFillColor(232,70,30);doc.rect(M,y+1,W-M*2,0.5,'F');
    y+=4;
    // Build single combined table: detail rows + parts breakdown rows + subtotal row
    var tBody=[],rowTypes=[];
    detailRows.forEach(function(dr){
      tBody.push([String(dr.num),dr.loc||'',dr.desc||'',dr.acc>0?fmt(dr.acc):'',fmt(dr.total)]);
      rowTypes.push('data');
    });
    (sec.parts||[]).forEach(function(p){
      var pct=MQ_STATE.disc[p.key]||0;
      if(p.raw>0||pct>0){
        var lbl=p.label+(pct>0?' ('+pct+'% off  \u2212'+fmt(p.amt)+')':'');
        tBody.push(['',{content:lbl,colSpan:3,styles:{fontSize:6.5,fontStyle:'italic',textColor:[100,100,100],fillColor:[252,252,250],halign:'left'}},{content:fmt(p.raw-p.amt),styles:{fontSize:6.5,fontStyle:'italic',textColor:[39,174,96],halign:'right',fillColor:[252,252,250]}}]);
        rowTypes.push('part');
      }
    });
    tBody.push(['',{content:sec.label+' Subtotal',colSpan:3,styles:{fontStyle:'bold',fontSize:8,fillColor:[250,250,250],halign:'right',lineColor:[180,180,180]}},{content:fmt(sec.sub),styles:{fontStyle:'bold',fontSize:9,textColor:[232,70,30],halign:'right',fillColor:[250,250,250],lineColor:[180,180,180]}}]);
    rowTypes.push('subtotal');
    doc.autoTable({
      startY:y,margin:{left:M,right:M},
      head:[['#','Location','Description','Accessories','Price']],
      body:tBody,
      theme:'grid',
      styles:{fontSize:7,cellPadding:1.2,lineColor:[200,200,200],lineWidth:0.2,textColor:[30,30,30],font:'helvetica'},
      headStyles:{fillColor:[74,74,74],textColor:[255,255,255],fontSize:6.5,fontStyle:'bold',cellPadding:1.5},
      columnStyles:{0:{cellWidth:8,fontStyle:'bold',textColor:[232,70,30],halign:'center'},1:{cellWidth:38},2:{cellWidth:80},3:{cellWidth:24,halign:'right'},4:{cellWidth:22,halign:'right',fontStyle:'bold'}},
      alternateRowStyles:{fillColor:[248,248,245]},
      didDrawPage:function(){addHeader();}
    });
    y=doc.lastAutoTable.finalY+4;
  });

  // Grand totals table
  if(y>230){doc.addPage();addHeader();y=34;}
  y+=2;
  var totData=[];
  if(inst>0)totData.push({lb:'Installation',vl:fmt(inst),tag:'norm'});
  if(trav>0)totData.push({lb:'Travel',vl:fmt(trav),tag:'norm'});
  totData.push({lb:'Sub Total',vl:fmt(sub),tag:'sub'});
  totData.push({lb:'VAT (15%)',vl:fmt(vat),tag:'norm'});
  totData.push({lb:'TOTAL incl VAT',vl:fmt(tot),tag:'total'});
  totData.push({lb:'60% Deposit — to confirm order & initiate production',vl:fmt(Math.round(tot*0.6)),tag:'dep'});
  totData.push({lb:'35% Delivery Balance — due 24–48 hrs before installation',vl:fmt(Math.round(tot*0.35)),tag:'dep'});
  totData.push({lb:'5% Final Balance — due upon installation sign-off',vl:fmt(Math.round(tot*0.05)),tag:'dep'});
  doc.autoTable({startY:y,margin:{left:M,right:M},
    body:totData.map(function(r){return[r.lb,r.vl];}),
    theme:'grid',
    styles:{fontSize:7.5,font:'helvetica',cellPadding:{top:1.5,bottom:1.5,left:3,right:3},lineColor:[200,200,200],lineWidth:0.2,textColor:[40,40,40]},
    columnStyles:{0:{cellWidth:161},1:{cellWidth:20,halign:'right',fontStyle:'bold'}},
    didParseCell:function(d){
      var tag=totData[d.row.index]?totData[d.row.index].tag:'';
      if(tag==='sub'){d.cell.styles.fontStyle='bold';d.cell.styles.fillColor=[240,240,240];}
      if(tag==='total'){d.cell.styles.fillColor=[232,70,30];d.cell.styles.textColor=[255,255,255];d.cell.styles.fontStyle='bold';d.cell.styles.fontSize=9;}
      if(tag==='dep'){d.cell.styles.textColor=[39,174,96];d.cell.styles.fontSize=7;}
      if(tag==='sec'){d.cell.styles.textColor=[74,74,74];}
    },
    didDrawPage:function(){addHeader();}
  });
  // ── Banking Details — fixed at bottom of last content page ──
  var H=doc.internal.pageSize.getHeight();
  var bky=H-34,bkW=W-M*2,bkH=26;
  doc.setFillColor(232,70,30);doc.roundedRect(M,bky,bkW,bkH,2,2,'F');
  doc.setFillColor(250,250,250);doc.rect(M,bky+7,bkW,bkH-7,'F');
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.5);doc.roundedRect(M,bky,bkW,bkH,2,2,'S');
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(255,255,255);
  doc.text('BANKING DETAILS',M+3,bky+5);
  doc.text('Payment Ref: '+(cust.nm||'Client Name'),M+bkW-3,bky+5,{align:'right'});
  var bc1=M+3,bc2=M+bkW*0.25+3,bc3=M+bkW*0.5+3,bc4=M+bkW*0.75+3;
  doc.setFont('helvetica','normal');doc.setFontSize(6);doc.setTextColor(130);
  doc.text('BANK',bc1,bky+12);doc.text('ACCOUNT NAME',bc2,bky+12);doc.text('ACCOUNT NO',bc3,bky+12);doc.text('BRANCH CODE',bc4,bky+12);
  doc.setDrawColor(210);doc.setLineWidth(0.15);doc.line(M+1,bky+14,M+bkW-1,bky+14);
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(30);
  doc.text('FNB Hout Bay',bc1,bky+21);doc.text('Total Blind Design cc',bc2,bky+21);doc.text('62401898658',bc3,bky+21);doc.text('204009',bc4,bky+21);
  doc.setFontSize(6);doc.setTextColor(170);doc.text('Total Blind Design | 368 Voortrekker Rd, Maitland | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  // ── Page 2: Terms & Conditions ──
  doc.addPage();
  var _mqTcHdrH=_repE?40:34;
  doc.setFillColor(255,255,255);doc.rect(0,0,W,_mqTcHdrH,'F');
  try{var _mqLi=document.getElementById('logoImg');var _mqLs=_mqLi.src;if(!_mqLi||!_mqLi.complete||!_mqLi.naturalWidth)throw new Error();var _mqLw=_mqLi.naturalWidth;var _mqLh=_mqLi.naturalHeight||_mqLw;var _mqPw=55;var _mqPh=Math.round(_mqPw*(_mqLh/_mqLw)*10)/10;doc.addImage(_mqLs,'PNG',M,0,_mqPw,_mqPh);}catch(e){}
  doc.setFillColor(232,70,30);doc.rect(0,_mqTcHdrH,W,1.5,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(232,70,30);
  doc.text('TERMS & CONDITIONS',W-M,10,{align:'right'});
  doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(100,100,100);
  doc.text('Total Blind Design cc',W-M,15,{align:'right'});
  doc.text('368 Voortrekker Rd, Maitland, Cape Town',W-M,19,{align:'right'});
  doc.text('info@totalblinds.co.za | www.totalblinddesign.co.za',W-M,23,{align:'right'});
  if(_repE)doc.text('Rep: '+_repE,W-M,27,{align:'right'});
  var ty=_mqTcHdrH+6;
  function mq_tcSection(title,body){
    doc.setFont('helvetica','normal');doc.setFontSize(7.2);
    var lines=doc.splitTextToSize(body,W-M*2);
    var needed=8+lines.length*3.0+3;
    if(ty+needed>H-20){doc.addPage();ty=20;}
    doc.setFillColor(245,245,245);doc.rect(M,ty-2,W-M*2,6,'F');
    doc.setDrawColor(232,70,30);doc.setLineWidth(0.3);doc.line(M,ty-2,M+3,ty-2);
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(232,70,30);
    doc.text(title,M+5,ty+2.5);
    ty+=7;
    doc.setFont('helvetica','normal');doc.setFontSize(7.2);doc.setTextColor(50);
    doc.text(lines,M,ty);
    ty+=lines.length*3.0+3;
  }
  mq_tcSection('1. QUOTATION VALIDITY','This quotation is valid for 30 days from the date of issue. Prices are subject to change without notice after this period. Re-measurement may be required if measurements have not been confirmed in writing.');
  mq_tcSection('2. DEPOSIT & PAYMENT','Payment is structured in three stages: (1) A deposit of 60% of the total quoted amount is required to confirm your order and initiate production — no manufacturing will commence until this deposit is received; (2) a Delivery Balance of 35% is payable 24–48 hours prior to the scheduled installation date — this covers the cost of your custom-manufactured goods and must be cleared before the installation team departs our premises; (3) a Final Balance of 5% is payable immediately upon the installation team leaving the site. We accept EFT payments only. No goods will be released or installed until the applicable stage payment has been received in full.');
  mq_tcSection('3. LEAD TIMES','Standard lead times are 10–15 working days from receipt of deposit and confirmed measurements. Motorised, custom, or imported products may require additional lead time. Total Blind Design will communicate any delays promptly.');
  mq_tcSection('4. MEASUREMENTS & SITE RESPONSIBILITY','All measurements are taken by a qualified Total Blind Design consultant. Should the client supply their own measurements, Total Blind Design accepts no liability for incorrect sizing. A re-measurement fee may apply for repeat site visits required due to changes or errors in client-supplied dimensions.');
  mq_tcSection('5. MANUFACTURING & CANCELLATIONS','Once a deposit is received and an order placed, manufacturing commences immediately. Cancellations after this point will forfeit the deposit in full. Alterations to confirmed orders may incur additional charges.');
  mq_tcSection('6. INSTALLATION','Installation is included where quoted. The client is responsible for ensuring clear, safe access to all installation areas. Additional charges may apply for difficult access, high ceilings, or work outside standard working hours (Mon–Fri, 08:00–17:00).');
  mq_tcSection('7. FUNCTIONAL COMPLETION','Functional Completion is defined as the point at which window treatments are securely mounted and operational for their intended purpose (light control and/or privacy). Functional Completion is achieved regardless of minor aesthetic matters ("Snags") such as fabric puckering, minor alignment, or cosmetic touch-ups. The existence of a Snag does not negate Functional Completion and does not entitle the client to withhold the Delivery Balance or Final Balance. All agreed Snags will be documented at handover and remedied within 21 working days at no additional charge.');
  mq_tcSection('8. SNAG RETENTION LIMIT','Should a client dispute Functional Completion, any amount withheld shall not exceed 200% of the estimated cost to remedy the specific Snag(s) in question. This retention cap applies per individual Snag item and does not apply to the Delivery Balance, which is due and payable prior to installation.');
  mq_tcSection('9. WARRANTY','All products carry a 3-year product warranty from date of installation. Fabric and component warranties are subject to the respective manufacturer terms. Warranty is void in the event of misuse, unauthorised alterations, or damage caused by external factors.');
  mq_tcSection('10. FABRIC & COLOUR VARIATION','Fabric swatches and samples are representative only. Minor colour and texture variations between samples and manufactured product are inherent in the industry and do not constitute grounds for rejection or refund.');
  mq_tcSection('11. RETURNS & REFUNDS','Custom-made products are non-returnable and non-refundable as they are manufactured to your specific requirements. Defective items will be repaired or replaced at the discretion of Total Blind Design.');
  mq_tcSection('12. GOVERNING LAW','These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the Western Cape High Court, Cape Town.');
  if(ty+38>H-18){doc.addPage();ty=20;}
  ty+=4;
  doc.setDrawColor(200,200,200);doc.setLineWidth(0.2);doc.line(M,ty,W-M,ty);ty+=6;
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(232,70,30);
  doc.text('CLIENT ACCEPTANCE',M,ty);ty+=6;
  doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(50);
  var _fw=(W-M*2-12)/3;
  ['Client Name (Print):','Signature:','Date:'].forEach(function(lbl,i){var _fx=M+i*(_fw+6);doc.text(lbl,_fx,ty);doc.setDrawColor(100);doc.setLineWidth(0.2);doc.line(_fx,ty+9,_fx+_fw,ty+9);});
  doc.setDrawColor(232,70,30);doc.setLineWidth(0.4);doc.line(M,H-14,W-M,H-14);
  doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(120);
  doc.text('By accepting this quotation and paying the required deposit, the client acknowledges having read and agreed to the above Terms & Conditions.',W/2,H-10,{align:'center'});
  doc.setFont('helvetica','bold');doc.setFontSize(6.5);doc.setTextColor(232,70,30);
  doc.text('Total Blind Design cc | 368 Voortrekker Rd, Maitland, Cape Town | info@totalblinds.co.za | www.totalblinddesign.co.za',W/2,H-5,{align:'center'});
  var nm=(cust.nm||'Master').replace(/[\\/:?*"<>|\s]+/g,'_');
  var fn='TBD-MasterQuote-'+nm+'.pdf';
  if(typeof _pdfSave==='function')_pdfSave(doc,fn);else doc.save(fn);
  if(typeof pwaToast==='function')pwaToast('\uD83D\uDCC4 Master PDF saved: '+fn);
}
// re-render master panel whenever the master tab is visible and inputs change elsewhere
document.addEventListener('input',function(e){
  var m=document.getElementById('master-section');
  if(m && m.style.display!=='none' && e.target && e.target.id && /^(c_|od_c_|ct_c_)/.test(e.target.id)){
    var mEl=document.getElementById('mq_c_'+e.target.id.replace(/^(c_|od_c_|ct_c_)/,''));
    if(mEl && mEl.value!==e.target.value) mEl.value=e.target.value;
  }
});
