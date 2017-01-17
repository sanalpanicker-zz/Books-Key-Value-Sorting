 var _sort = _sort || {};

 (function() {
     _sort = {

         key: function(data) {
             dataObj = {};
             Object.keys(data)
                 .sort()
                 .forEach(function(k, i) {
                     dataObj[k] = data[k];
                 });
             return dataObj;
         },

         value: function(data) {
             dataObj = {};
             Object.values(data)
                 .sort(function(a, b) { return a - b })
                 .forEach(function(v, i) {
                     var ky = "";
                     Object.keys(data).forEach(function(k, i) {
                         if (data[k] === v) {
                             ky = k;
                         } else {
                             return;
                         }
                     });
                     dataObj[ky] = v;
                 });
             return dataObj;
         }
     }
 })();