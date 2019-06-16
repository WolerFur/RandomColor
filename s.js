var caja = document.querySelector('#caja');

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "blue";

var cajas = document.querySelectorAll('.caja');

function colred(){
    var caja = document.querySelector('#caja');

    if(caja.style.background == 'gray'){
        caja.style.background = "blue";
       


    }else {
        caja = caja.style.background = "gray";
        
        
    }
    
     
     
     
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function aleatorio(){
    var colores = ['red','blue','gray','black','green'];
    var caja = document.querySelector('#caja');
    var i = Math.floor(Math.random()*5)

    caja.style.background = colores[i];

    console.log(colores[i]);
}

/* caruser 3d*/

function ale(){
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
          var caja = document.querySelector('#caja');
          var i = Math.floor(Math.random()*50)

          caja.style.background = colorArray[i];

          console.log(colorArray[i]);


       
          
          color.innerHTML = colorArray[i]; // imprimir en el dom
      
          

          

}