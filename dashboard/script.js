var ctx = document.getElementById('gasGrafiek');

var energie = [89, 67, 143, 96, 85];
var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var gasGrafiek = new Chart(ctx, {
    type: 'bar',     
    data: {
        labels: frameworks,
        datasets: [{ 
            label: 'Gas verbruik',
            data: energie,
            backgroundColor: 
            ["rgb(0, 0, 0 ,0)", 
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
            borderRadius: 2, 
        }]   
    }, 
})

var ctx = document.getElementById('energieKosten');

var energie = [11.4, 11.1, 10.9, 11.6, 11];
var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var energieKosten = new Chart(ctx, {
    type: 'doughnut',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'Energie verbruik',
            data: energie,
            backgroundColor: 
            ["#4D77FF",
            "#0E185F" ,
            "#00C897",
            "red",
            "white", 
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
        }]   
    }, 
})

var ctx = document.getElementById('alleKosten');

var energie = [4.15, 3.78, 3.68, 4.15, 4.30];
var frameworks = ['Keuken', 'Woonkamer', 'Badkamer', 'Zolder', 'Slaapkamers'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var alleKosten = new Chart(ctx, {
    type: 'pie',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'Energie verbruik',
            data: energie,
            backgroundColor: 
            ["green", 
            "blue", 
            "red", 
            "orange", 
            "yellow", 
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
        }]   
    }, 
})

var ctx = document.getElementById('myChart');

var energie = [4.15, 3.78, 3.68, 4.15, 4.30];
var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var myChart = new Chart(ctx, {
    type: 'bar',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'Energie verbruik',
            data: energie,
            backgroundColor: 
            ["rgb(100, 214, 85)", 
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
            borderRadius: 2, 
        }]   
    }, 
})

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   
  document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day : ' + daylist[day];



  var ctx = document.getElementById('buitentemperatuur');

  var Tempratuur = [11, 12, 12, 8, 8, 9, 10];
  var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
  
  Chart.defaults.font.size = 16;
  Chart.defaults.color = "rgb(44, 57, 87)";
  var buitentemperatuur = new Chart(ctx, {
      type: 'bar',     
      data: { 
          labels: frameworks,
          datasets: [{ 
              label: 'buitentemperatuur',
              data: Tempratuur,
              backgroundColor: 
              ["rgba(116, 145, 170, 0.8)", 
              ],
              borderColor: 
              [  "rgb(0, 0, 0)",
              ],
              borderWidth: 1,
              borderRadius: 2,
          }]   
      }, 
  })



  var ctx = document.getElementById('myChart_water');

  var water = [428, 420, 398.3, 386, 440, 450.4, 395];
  var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'zaterdag', 'zondag'];
  
  Chart.defaults.font.size = 16;
  Chart.defaults.color = "rgb(0,0,0);";
  var myChart_water = new Chart(ctx, {
      type: 'bar',     
      data: { 
          labels: frameworks,
          datasets: [{ 
              label: 'water verbruik',
              data: water,
              backgroundColor: 
              [  "rgb(0, 92, 173)", 
              ],
              borderColor: 
              [  "rgba(0,0,0)",
              ],
              borderWidth: 1,
              borderRadius: 2, 
          }]   
      }, 
  })


  var ctx = document.getElementById('zonnepanelen');

var energie = [75,25];
var frameworks = ['energie opwekking'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var alleKosten = new Chart(ctx, {
    type: 'doughnut',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'energie opwekking',
            data: energie,
            backgroundColor: 
            ["rgb(100, 214, 85)", 
            "#f2fe8e",
            
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
        }]   
    }, 
})

