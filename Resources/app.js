// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    layout:"vertical"
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

  var platform = Ti.Platform.osname;



  var FuturaStd_Medium = 'Futura Std'; // use the friendly-name on iOS
  var FuturaStd_CondensedLight = 'Futura Std - Light Condensed'; // use the friendly-name on iOS
  var FuturaStd_CondensedMedium = 'Futura MdCn BT';
  var FuturaStd_Bold = 'Futura Std - Bold';
  if(platform == 'android') {
     FuturaStd_Medium = 'FuturaStd-Medium';
     FuturaStd_CondensedLight = 'FuturaStd-CondensedLight'; 
     FuturaStd_CondensedMedium = 'FuturaStd-CondensedMedium';
     FuturaStd_Bold = 'FuturaStd-Bold'
  }

var label0 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 0',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win1.add(label0);

var label1 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 0',
	font:{fontSize:20,fontFamily:FuturaStd_Medium},
	textAlign:'center',
	width:'auto'
});
win1.add(label1);

var label2 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 0',
	font:{fontSize:20,fontFamily:FuturaStd_CondensedLight},
	textAlign:'center',
	width:'auto'
});
win1.add(label2);

var label3 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 0',
	font:{fontSize:20,fontFamily:FuturaStd_CondensedMedium},
	textAlign:'center',
	width:'auto'
});
win1.add(label3);

var label4 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 0',
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win1.add(label4);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    layout:"vertical"
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
