<%@ page contentType="text/html;charset=gb2312" language="java" import="java.sql.*,java.io.*"%>
<html>
<head>
<meta http-equiv="Access-Control-Allow-Origin" content="*">  
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>海底管道探测数据交换平台</title>
<link rel="stylesheet" href="./css/style2.css" type="text/css" media="screen">
<script type='text/javascript' src='./js/OpenLayers.js'></script>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>	
<script src="./js/config.js"type="text/javascript"></script>
</head>
<body onload="init()">
   
<div class="header"><h1 id="head-title">海底管道探测数据交换平台（子任务五）</h1></div>
<div class="container">

<div class="navigator">
	<ul>
		<li><a href="#home">首页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">关于我们</a></li>
		<li><a href="#about">联系我们</a></li>
	</ul>
</div>
    <div class="mapContent" id="mapContent">
	</div>
	<div class="queryContent">
<%

	String driverName="oracle.jdbc.driver.OracleDriver";
	String url="jdbc:oracle:thin:@127.0.0.1:1521:orcl";
try{
	Class.forName(driverName);
}catch(ClassNotFoundException e){
out.println("driver loading failed!");
out.println(e.getMessage());
}
	String user="SHMTU";
 	String password="shmtu";
try{
 	Connection conn= DriverManager.getConnection(url,user,password);
	Statement stmt=conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
  	String sql="select * from 管道线 ";
  	ResultSet rs=stmt.executeQuery(sql);
  	while(rs.next())
  	{
  		out.println(rs.getString(1));
		out.println(rs.getString(2));

  	}
  	out.print("数据库操作成功!");

 	rs.close();
 	stmt.close();
  	conn.close();
}catch(Exception e){
System.out.println(e.getMessage());
}

%>
	</div>
 </div>
 <div class="show">
</div>
<div class="footer-top">
	 <a class="footer-font">技术支持：</a>
     <a class="footer-font" href="http://geoserver.org/" target="_blank">GeoServer</a>  
		|
     <a class="footer-font" href="http://www.openlayers.org/" target="_blank">OpenLayers</a>  
 </div>
 <div class="footer-bottom">
      
		<p>版权所有&copy 上海海事大学信息工程学院  All Rights Reserved</p>
      
		<p>Copyright &copy2014-2015</p>
    
</div>



</body>
</html>