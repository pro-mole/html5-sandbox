var comicdata

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    document.getElementById("debug").innerHTML = xmlhttp.responseText;
    var comicdata = eval('('+xmlhttp.responseText+')');
    
    contentdiv = document.getElementById("comic");
    contentdiv.innerHTML = "<h2>"+comicdata.title+"</h2>\n";
    contentdiv.appendChild(document.createElement("img")).setAttribute("src","/strips/"+comicdata.num+".png");
  }
}

xmlhttp.open("GET","/ajax/getstrip.php",true);
xmlhttp.send();
