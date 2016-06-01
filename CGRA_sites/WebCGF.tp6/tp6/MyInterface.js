/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	
	// add a group of controls (and open/expand by defult)
	
	//Clock
	this.gui.add(this.scene,'enableClock');
	
	//Lights
	var group=this.gui.addFolder("Lights");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'Light0');
	group.add(this.scene, 'Light1');
	group.add(this.scene, 'Light2');
	group.add(this.scene, 'Light3');
	group.add(this.scene, 'Light4');
	
	this.gui.add(this.scene, 'currDroneAppearance', this.scene.droneAppearanceList);
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', 0.1, 5);
	
	this.gui.add(this.scene, 'scale_rotors', 0.1, 2);
	
	this.button_a = false;
	this.button_s = false;
	this.button_d = false;
	this.button_w = false;
	this.button_i = false;
	this.button_j = false;
	
	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyDown.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (97)://a
		case (65)://A
			this.scene.key_a = true;
			break;
				
		case(68)://D
		case(100)://d
			this.scene.key_d = true;
			break;
					
		case(87)://W
		case(119)://w
			this.scene.key_w = true;
			break;
					
		case(83)://S
		case(115)://s
			this.scene.key_s = true;
			break;
			
		case(73)://I
		case(105)://i
			this.scene.key_i = true;
			break;
			
		case(74)://J
		case(106)://j
			this.scene.key_j = true;
			break;
		
		case(80)://P
		case(112)://p
			this.scene.key_p = true;
			break;
			
		case(76)://L
		case(108)://l
			this.scene.key_l = true;
			break;
	
			
	};
};

MyInterface.prototype.processKeyUp = function (event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyUp.call(this, event);

	switch (event.keyCode) 
	{
		case (97)://a
		case (65)://A
			this.scene.key_a = false;
			break;
				
		case(68)://D
		case(100)://d
			this.scene.key_d = false;
			break;
					
		case(87)://W
		case(119)://w
			this.scene.key_w = false;
			break;
					
		case(83)://S
		case(115)://s
			this.scene.key_s = false;
			break;
		
		case(73)://I
		case(105)://i
			this.scene.key_i = false;
			break;
			
		case(74)://J
		case(106)://j
			this.scene.key_j = false;
			break;
			
		case(80)://P
		case(112)://p
			this.scene.key_p = false;
			break;
			
		case(76)://L
		case(108)://l
			this.scene.key_l = false;
			break;
		
		
	};
};