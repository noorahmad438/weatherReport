function ajaxApi() {
  var userInput = document.getElementById('userInput').value;
  if(userInput==""){
    document.getElementById("err").innerHTML="Enter City Name!";
  }else{
    document.getElementById("err").style.display="none";
  }
  var lnk = document.getElementById('lnk');
  lnk.href = "http://api.weatherstack.com/current?access_key=c26ca763ea574c22fb61436d0acb3c0d&query=" + userInput;
  const xReq = new XMLHttpRequest();
  xReq.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("demo").innerHTML=this.responseText;
          var data=this.responseText;
          //console.log(data);
          let jsonObject = JSON.parse(data);
          document.getElementById("demo").innerHTML=jsonObject.location.name;
          document.getElementById("demo1").innerHTML=jsonObject.current.temperature;
          document.getElementById("demo2").innerHTML=jsonObject.current.weather_descriptions[0];
      }
  };
  xReq.open("GET", lnk , true);
  xReq.send();
}

