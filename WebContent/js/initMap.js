var map;

	function init() {
		map = new OpenLayers.Map('mapContent', {maxResolution:'auto',maxExtent:new OpenLayers.Bounds(73.44696044921875, 6.318641185760498, 135.08583068847656, 53.557926177978516),controls:[]});
		map.addControl(new OpenLayers.Control.PanZoomBar());//添加平移缩放工具条
		map.addControl(new OpenLayers.Control.LayerSwitcher({'ascending':false}));//添加图层切换工具
		map.addControl(new OpenLayers.Control.Permalink());
		map.addControl(new OpenLayers.Control.Permalink('permalink'));//永久链接
		map.addControl(new OpenLayers.Control.MousePosition());//鼠标经纬度
		map.addControl(new OpenLayers.Control.OverviewMap());//鹰眼图
		map.addControl(new OpenLayers.Control.KeyboardDefaults());
		map.addControl(new OpenLayers.Control.Navigation());
 //双击放大平移
		//map.addControl(new OpenLayers.Control.EditingToolbar(vector));
		map.addControl(new OpenLayers.Control.Scale());//获取地图比例尺
		//map.addControl(new OpenLayers.Control.ZoomBox());
		var zb =  new OpenLayers.Control.ZoomBox({out:true});
		var panel = new OpenLayers.Control.Panel({defaultControl:zb});
		map.addControl(panel);
		var wms = new OpenLayers.Layer.WMS('china','http://localhost:8090/geoserver/myTest/wms',{
layers:'myTest:china'},{isBaseLayer: true});

 
		map.addLayer(wms);
		var wms1 = new OpenLayers.Layer.WMS('railway','http://localhost:8090/geoserver/myTest/wms',{
layers:'myTest:railway',transparent:true},{isBaseLayer: false});

 
		map.addLayer(wms);
		var wms2 = new OpenLayers.Layer.WMS('china in gray','http://localhost:8090/geoserver/myTest/wms',{
layers:'myTest:bou2_4p',transparent:true},{opacity:0.3,isBaseLayer: false});

 
		map.addLayer(wms2);
		map.addLayer(wms1);
		map.addLayer(wms);

		if(!map.getCenter()){
		map.zoomToMaxExtent();//设置地图的中心
		}
		 
	var wfs = new OpenLayers.Protocol.WFS.fromWMSLayer(wms1,{});
	}