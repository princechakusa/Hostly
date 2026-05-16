const fs = require('fs');
const path = 'www/js/jobs.js';
let c = fs.readFileSync(path, 'utf8');
const start = c.indexOf('H.filterByCat');
const end = c.indexOf('};', start) + 2;
const newFn = 'H.filterByCat = function(cid){' +
  'const map={vehicles:"Vehicles",property:"Property",electronics:"Electronics",fashion:"Fashion",furniture:"Furniture",services:"Services",jobs:"Jobs",rooms:"Rooms"};' +
  'if(cid==="jobs"){H._jobsState={tab:"find",search:"",category:"",type:"",dateFilter:"",expLevel:"",province:"",page:1};}' +
  'const page=map[cid];' +
  'if(page){H.openInner(page,{cid});}' +
  'else{H.openInner("Browse",{cat:cid});}' +
  '};';
c = c.substring(0, start) + newFn + c.substring(end);
fs.writeFileSync(path, c, 'utf8');
console.log('Done');
