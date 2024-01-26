// johannes.js

var private = {}
var public = {}

private.firstname = "Johannes"
private.surname = "Potgieter"
public.role = "Intern"

private.display = private.firstname + " " + private.surname + " (" + public.role + ")"
document.querySelector('#johannes').innerText = private.display