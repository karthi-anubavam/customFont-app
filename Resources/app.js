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


  var FuturaStd_Medium = 'FuturaStd-Medium'; // use the friendly-name on iOS
  var FuturaStd_CondensedLight = 'FuturaStd-CondensedLight';
  var FuturaStd_CondensedMedium = 'Futura MdCn BT';
  var FuturaStd_Bold = 'FuturaStd-Bold';
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
	text:'I am Label 1',
	font:{fontSize:20,fontFamily:FuturaStd_Medium},
	textAlign:'center',
	width:'auto'
});
win1.add(label1);

var label2 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 2',
	font:{fontSize:20,fontFamily:FuturaStd_CondensedLight},
	textAlign:'center',
	width:'auto'
});
win1.add(label2);

var label3 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 3',
	font:{fontSize:20,fontFamily:FuturaStd_CondensedMedium},
	textAlign:'center',
	width:'auto'
});
win1.add(label3);

var label4 = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'I am Label 4',
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

var ln = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:'Here I am checking i18n',
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win2.add(ln);

var forgetPass = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:L('forgot_your_password'),
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win2.add(forgetPass);

var uName = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:L('user_name'),
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win2.add(uName);

var pass = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:L('password'),
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win2.add(pass);

var login = Titanium.UI.createLabel({
	top:20,
	color:'#000',
	text:L('login'),
	font:{fontSize:20,fontFamily:FuturaStd_Bold},
	textAlign:'center',
	width:'auto'
});
win2.add(login);





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
