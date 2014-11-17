var map;

	function init() {
		map = new OpenLayers.Map('mapContent', {maxResolution:'auto',maxExtent:new OpenLayers.Bounds(73.44696044921875, 6.318641185760498, 135.08583068847656, 53.557926177978516),controls:[]});
		map.addControl(new OpenLayers.Control.PanZoomBar());//���ƽ�����Ź�����
		map.addControl(new OpenLayers.Control.LayerSwitcher({'ascending':false}));//���ͼ���л�����
		map.addControl(new OpenLayers.Control.Permalink());
		map.addControl(new OpenLayers.Control.Permalink('permalink'));//��������
		map.addControl(new OpenLayers.Control.MousePosition());//��꾭γ��
		map.addControl(new OpenLayers.Control.OverviewMap());//ӥ��ͼ
		map.addControl(new OpenLayers.Control.KeyboardDefaults());
		map.addControl(new OpenLayers.Control.Navigation());
 //˫���Ŵ�ƽ��
		//map.addControl(new OpenLayers.Control.EditingToolbar(vector));
		map.addControl(new OpenLayers.Control.Scale());//��ȡ��ͼ������
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
		map.zoomToMaxExtent();//���õ�ͼ������
		}
		 
	var wfs = new OpenLayers.Protocol.WFS.fromWMSLayer(wms1,{});
	}