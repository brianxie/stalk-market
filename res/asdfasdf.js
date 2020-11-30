var body = '{"uuid":"0", "product_name":"apple", "store":"Costco", "brand":"Costco", "tags":"fruit, organic", "desc":"an apple", "price":"1.29", "quantity":"20", "units":"ct"}';
var qwer = post_request("addproduct", body);

var body = '{"uuid":"1", "product_name":"apple", "store":"Trader Joes", "brand":"Trader Joes", "tags":"fruit, organic", "desc":"an apple", "price":"1.29", "quantity":"20", "units":"ct"}';
var qwer = post_request("addproduct", body);

var body = '{"uuid":"2", "product_name":"apple", "store":"Safeway", "brand":"Safeway", "tags":"fruit, organic", "desc":"an apple", "price":"1.29", "quantity":"15", "units":"ct"}';
var qwer = post_request("addproduct", body);

var body = '{"uuid":"3", "product_name":"banana", "store":"Safeway", "brand":"Safeway", "tags":"fruit", "desc":"a banana", "price":"1.29", "quantity":"20", "units":"ct"}';
var qwer = post_request("addproduct", body);



var body = '{"uuid":"0"}';
var qwer = post_request("getproductsbymatch", body);

var body = '{"product_name":"apple"}';
var qwer = post_request("getproductsbymatch", body);
