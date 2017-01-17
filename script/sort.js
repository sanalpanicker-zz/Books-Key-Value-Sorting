 var _sort = _sort || {};
 /**
  * @desc _sort funtionality module
  */

 (function() {
     _sort = {
         /**
          * @desc _sort funtionality module based on key
          * @param object $data - the data to be iterated
          * @return sorted data
          */
         key: function(data) {
             dataObj = {};
             Object.keys(data)
                 .sort()
                 .forEach(function(k, i) {
                     dataObj[k] = data[k];
                 });
             return dataObj;
         },
         /**
          * @desc _sort funtionality module based on value
          * @param object $data - the data to be iterated
          * @return sorted data
          */
         value: function(data) {
             dataObj = {};
             var vals = Object.keys(data).map(function(key) {
                 return data[key];
             });
             vals.sort(function(a, b) { return a - b })
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