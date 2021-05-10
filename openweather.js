var req=new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var country=JSON.parse(this.response);
    for(var i in country){
        try{
         var cname=country[i].name;
         var latlong=country[i].latlng;
         if(latlong==0) {
             ("Lattitue and long not found");
         }
         weatherdata(cname,...latlong);
        }
        catch(e){
        console.log("invalid coordiantes"+cname);
        }
    }
}
var weatherdata=function(name,lat,lng){
    console.log(lat,lng);
    var request= new XMLHttpRequest();
var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4658225c1ce9e531a1bebb2fa790a10d`;

request.open('GET',URL,true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(`${name}:${data.main.temp}`);
}
}
