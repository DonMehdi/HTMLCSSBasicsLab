var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
for( var i=0; i<names.length; i++)
{
  // document.getElementById(names[i]).innerHTML=names[i];
var b = diametres[i]/300;
var n = b .toString();
var r="px"
document.getElementById(names[i]).style.background="black";
document.getElementById(names[i]).style.height=n.concat(r);
//
}
