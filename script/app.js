var DATA_URL = "https://api.myjson.com/bins/ho58r​";
var data;
getData(DATA_URL);

function displayData(data) {
    var template = "";
    for (var i = 0; i < Object.keys(data).length; i++) {
        template += "<li><label class='key'>" + Object.keys(data)[i] + "</label><progress value='" + Object.values(data)[i] + "' max='" + Math.max.apply(Math, Object.values(data)) + "'></progress><label class='value'>" + Object.values(data)[i] + "</label><li>";
    }
    $('#bar_chart').html(template);
}

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

function clickTrigger(type) {
    if (type === "name") {
        displayData(_sort.key(data));
    } else if (type === "book") {
        displayData(_sort.value(data));
    }
}