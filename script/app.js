//Setting constants
var DATA_URL = "https://api.myjson.com/bins/ho58r​",
    data;
//Initial load call
getData(DATA_URL);

/**
 * @desc displays the UI based on data formatted
 * @param object $data - the data to be iterated
 * @return NA
 */

function displayData(data) {
    //getting val arrays to form the chart
    var val_arr = Object.keys(data).map(function(key) { return data[key]; })
    var template = "";
    for (var i = 0; i < Object.keys(data).length; i++) {
        template += "<li><label class='key'>" + Object.keys(data)[i] + "</label><progress value='" + val_arr[i] + "' max='" + Math.max.apply(Math, val_arr) + "'></progress><label class='value'>" + val_arr[i] + "</label><li>";
    }
    $('#bar_chart').html(template);
}

/**
 * @desc makes the call to get JSON data
 * @param string $URL - the URL to where call is to be made
 * @return call displayData
 */

function getData(URL) {
    $.getJSON(URL)
        .done(function(json) {
            console.log("JSON Data: " + JSON.stringify(json));
            data = json;
            displayData(_sort.key(data));
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/**
 * @desc triggered from the UI click
 * @param string $type - name or book based on the sort preference
 * @return call displayData
 */

function clickTrigger(type) {
    if (type === "name") {
        displayData(_sort.key(data));
    } else if (type === "book") {
        displayData(_sort.value(data));
    }
}