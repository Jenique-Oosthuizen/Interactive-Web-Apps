// nwabisa.js

var private = {}
var public = {}

private.firstname = "Nwabisa"
private.surname = "Gabe"
public.role = "CEO"

private.display = private.firstname + " " + private.surname + " (" + public.role + ")"
document.querySelector('#nwabisa').innerText = private.display