(function() {
    var DATA_URL = "https://api.myjson.com/bins/ho58r​";

    getData(DATA_URL);

    function getData(URL) {
        $.getJSON(URL)
            .done(function(json) {
                console.log("JSON Data: " + JSON.stringify(json));
                displayData(json);
            })
            .fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });
    }
})();