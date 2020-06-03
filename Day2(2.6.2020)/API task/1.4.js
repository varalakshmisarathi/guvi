//Display the count of all countries sharing their border with the country name in console
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
    var jsondata=JSON.parse(this.response);
    for(i=0;i<jsondata.length;i++)
    {
        console.log(jsonData[i].name +" shares its  border with " + jsonData[i].borders.length +" countries that includes "+jsonData[i].borders);
    }
}
request.send();
