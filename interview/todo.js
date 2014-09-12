var getList = function () {
    var list_url = $("#list_url").val();
    var list_request = new XMLHttpRequest();
    list_request.open("GET", list_url, true);
    list_request.onreadystatechange = function() {
        if (list_request.readyState == 4 && list_request.status == 200) {
            displayList(list_request.responseText);
        }
    };
    list_request.send();
};

var displayList = function(list_string) {
    console.log(list_string); 
    var list_json = JSON.parse(list_string);
    var inner_html = "<ol>";

    for (var item in list_json["items"]) {
        var line = "<li><ul>";
        line += "<li>";
        line += "Description: ";
        line += list_json["items"][item]["description"];
        line += "</li><li>";
        line += "Done?: ";
        line += list_json["items"][item]["done"];
        line += "</li></ul></li>";
        inner_html += line;
    }
    $("#list").html(inner_html);
};

