SERVER_URL = window.location.href;

function post_request(path, body) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", SERVER_URL + path, false);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.send(body);

    response = null;
    if (xhr.status == 200) {
        response = xhr.responseText;
    }
    return response;
}

// xhr.open("POST", SERVER_URL + path, true);
// xhr.onreadystatechange = function () { 
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         return xhr.responseText;
//     }
// }
