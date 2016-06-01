var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;


LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();
	
	this.enableClock= true;	
	
	this.Light0=true;
	this.Light1=true;
	this.Light2=true;
	this.Light3=true;
	this.Light4=true;
	
	this.speed = 3;
	this.scale_rotors = 1;
	
	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	//Drone Appearance
	var droneAppearances = [];//colocar no array as diversas appearances que o drone poderá ter
	
	//Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.floor = new MyQuad(this, 0, 1.5*10, 0, 1.0*12);
	this.lwall = new MyQuad(this,1.5,-0.5,-0.5,1.5);
	this.clock = new MyClock(this,12);
	this.drone = new MyDrone(this,7.5,6,7.5,180);
	this.bomb = new MyBomb(this, 3, 1, 3);
	this.pod = new MyPod(this, 100, 1, 10, 3);
	
	//Appearances
	//Drone
	this.droneAppearanceList={};
	this.droneAppearanceList['1.Doge'] = 0;
	this.droneAppearanceList['2.Sonic'] = 1;
	this.droneAppearanceList['3.Pepe'] = 2;
	
	this.currDroneAppearance= 0;
	
	
	//Table
	this.tableAppearance = new CGFappearance(this);
	this.tableAppearance.loadTexture("./images/table.png");
	//Floor
	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.loadTexture("./images/floor.png");
	
	//Window
	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.loadTexture("./images/window.png");
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE','CLAMP_TO_EDGE');
	
	//Slides
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.slidesAppearance.loadTexture("./images/slides.png");
	
	//Boards
	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.loadTexture("./images/board.png");
	
	this.boardA = new Plane(this,-0.18, 1.28, 0.09, 0.8, BOARD_A_DIVISIONS);
	this.boardB = new Plane(this, 0, 1, 0, 1, BOARD_B_DIVISIONS);

	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0.2,0.8,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);
	
	this.enableTextures(true);
		
	this.key_a = false;
	this.key_s = false;
	this.key_d = false;
	this.key_w = false;
	this.key_i = false;
	this.key_j = false;
	this.key_l = false;
	this.key_p = false;
	
	this.setUpdatePeriod(10);
};


LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	//Positions for lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0,1.0,0,1.0);
	this.lights[0].enable();
	
	
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)
	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();
	

	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[2].setVisible(true);
	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setSpecular(1.0,1.0,1.0,1.0);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);  
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1.0);
	this.lights[2].setQuadraticAttenuation(1.0);
	this.lights[2].enable();
	

	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[3].setVisible(true); // show marker on light position (different from enabled)
	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0,1.0,0,1.0);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0.2);
	this.lights[3].enable();
	
	
	this.lights[4].setPosition(0.1, 4, 7.5, 1.0);
	this.lights[4].setVisible(true);
	this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].enable();
	
};

LightingScene.prototype.updateLights = function(){
	
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
	
	if(this.Light0 == true)
	{
		this.lights[0].enable();
	}
	else this.lights[0].disable();
	
	if(this.Light1 == true)
	{
		this.lights[1].enable();
	}
	else this.lights[1].disable();	
	
	if(this.Light2 == true)
	{
		this.lights[2].enable();
	}
	else this.lights[2].disable();
	
	if(this.Light3 == true)
	{
		this.lights[3].enable();
	}
	else this.lights[3].disable();
	
	if(this.Light4 == true)
	{
		this.lights[4].enable();
	}
	else this.lights[4].disable();
}

LightingScene.prototype.checkLanding = function()
{
	var podPos = this.pod.getPos();
	var bombPos = this.bomb.getPos();
	
	//width of square inside pod surface
	var w = Math.sqrt(2);
	
	if(podPos[0] - w < bombPos[0])
		if(podPos[0] + w > bombPos[0])
			if(podPos[2] - w < bombPos[2])
				if(podPos[2] + w > bombPos[2])
					if(podPos[1] - 0.2 < bombPos[1] -1)
						if(podPos[1] + 0.2 > bombPos[1] -1)
							this.bomb.attached = 2;
					
}

LightingScene.prototype.update = function(currTime) 
{
	if(this.enableClock == true)
	{
		this.clock.update(currTime);
	}
	
	//this.drone.moveUpdate(currTime);
	
	this.drone.updateMove(currTime);
	
	this.drone.checkCollision();
	
	this.drone.moveBomb();
	
	this.checkLanding();
	
	
}


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	//Geometric Tranformations	
	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.windowAppearance.apply();
		this.lwall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();	
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH,BOARD_HEIGHT,1);
		
		this.materialA.apply();
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.materialB.apply();
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();
	
	//Clock
	this.pushMatrix();
		this.translate(7,7.3,0);
		this.scale(0.6,0.6,0.2);
		this.clock.display();
	this.popMatrix();
	
	
	
	//Drone
	this.pushMatrix();
		this.translate(this.drone.x, this.drone.y, this.drone.z);
		this.rotate(this.drone.angle * degToRad,0,1,0);
		this.drone.display();
	this.popMatrix();
	
	//Bomb
	this.pushMatrix();
		this.bomb.display();
	this.popMatrix();
	
	//Landing Pod
	this.pushMatrix();
		this.pod.display();
	this.popMatrix();
	
};
