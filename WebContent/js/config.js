var map;
var tiled;
var untiled;
function init(){
	format = 'image/png';
	var bounds = new OpenLayers.Bounds(119.0,26.0,124.0,28.0);
	var options = { 
			controls:[],
			projection: new OpenLayers.Projection("EPSG:900913"),
			displayProjection: new OpenLayers.Projection("EPSG:4326"),
			units: "m",
			maxResolution: 156543.0339,
			maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34,
 20037508.34, 20037508.34)
		};
	map = new OpenLayers.Map('mapContent',options);

	var ghyb = new OpenLayers.Layer.Google(
"谷歌混合图层",
 {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22}
);
 
	map.addLayer(ghyb);
/*
	var railway = new OpenLayers.Layer.WMS('铁路图层','http://localhost:8888/geoserver/myTest/wms',{
layers:'myTest:railway'
,STYLES: '',
        	
tiled: true,
transparent: "true",
}, {
opacity: 0.7,
isBaseLayer: false
});


	map.addLayer(railway);
*/
	var donghaiguandao = new OpenLayers.Layer.WMS('东海管道','http://localhost:8888/geoserver/myTest/wms',{
layers:'myTest:Donghaiguandao'
,STYLES: '',
        	
tiled: true,
transparent: "true",
}, {
opacity: 0.7,
isBaseLayer: false
});


	map.addLayer(donghaiguandao);

	var vector = new OpenLayers.Layer.Vector("编辑");
	map.addLayer(vector);

	
	var wfs = new OpenLayers.Layer.Vector("WFS",{
		strategies: [new OpenLayers.Strategy.Fixed()],
		projection: new OpenLayers.Projection("EPSG:4326"),
		protocol: new OpenLayers.Protocol.WFS({
		version: "1.1.0",
		url: "http://localhost:8888/geoserver/wfs",
		featureType: "railway",                     //geoserver layer name 
		featurePrefix : "myTest",                    //geoserver workspace name
		featureNS: "localhost:8888/geoserver/myTest",//edit workspace namespace URI
	})
	});

	map.addLayer(wfs);




	// build up all controls
    

	map.addControl(new OpenLayers.Control.PanZoomBar({
position: new OpenLayers.Pixel(2, 15)
}));
    
	map.addControl(new OpenLayers.Control.Navigation());
    
	map.addControl(new OpenLayers.Control.Scale());
    
	map.addControl(new OpenLayers.Control.MousePosition());
    
	map.addControl(new OpenLayers.Control.LayerSwitcher());
    
	map.addControl(new OpenLayers.Control.EditingToolbar(vector));

    
	var fromProjection = new OpenLayers.Projection("EPSG:4326");   
	// Transform from WGS 1984
    
	var toProjection   = new OpenLayers.Projection("EPSG:900913"); 
	// to Spherical Mercator Projection
    
	map.zoomToExtent(bounds.transform(fromProjection, toProjection)); 
}	
	


	