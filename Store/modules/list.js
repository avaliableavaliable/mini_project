var goods = require('goods.js');
var dri = require('dri.js');
var fru = require('fru.js');
var sna = require('sna.js');
var sta = require('sta.js');
var veg = require('veg.js');
var lists = {
  data:[
    goods.pastData.data,
    veg.pastData.data,
    fru.pastData.data,
    sta.pastData.data,
    dri.pastData.data,
    sna.pastData.data,
  ],
};
module.exports = {
  pastData: lists
}