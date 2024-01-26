// alex.js

var private = {}
var public = {}

private.firstname = "Alex"
private.surname = "Naidoo"
public.role = "Head of Marketing"

private.display = private.firstname + "" + private.surname + "( "+ public.role +" )"
document.querySelector('#alex').innerText = private.display