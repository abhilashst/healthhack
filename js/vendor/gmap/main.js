$(function () {
	var map = new GMaps({
	el: "#map",
	lat: 8.556816,
        lng: 76.881755,
          zoom: 15, 
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false,
scrollwheel: false,
navigationControl: false,
mapTypeControl: false,
scaleControl: false,
draggable: false
      });
        
      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];
        
      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
      });
        
      map.setStyle("map_style");

      map.addMarker({
        lat: 8.556816,
        lng: 76.881755,
        icon: "images/marker1.png"
      });
});
