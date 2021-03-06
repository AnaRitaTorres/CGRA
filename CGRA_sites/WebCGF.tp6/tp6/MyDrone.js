/**
 * MyDrone
 * @constructor
 */

var degToRad = Math.PI / 180.0;

 
function MyDrone(scene,x,y,z,angle) 
 {
 	CGFobject.call(this,scene);
	this.x=x;
	this.y=y;
	this.z=z;
	this.angle=angle;
	
	this.cylinder = new MyCompleteCylinder(this.scene,100,1);
	this.sphere = new myLamp(this.scene, 100, 100);
	this.circle = new MyCircle(this.scene, 100);
	this.halfc = new MyHalfCylinder(this.scene, 100, 100);
	this.cube = new MyUnitCubeQuad(this.scene);
	this.helix_front = new MyHelix(this.scene, 20, 1);
	this.helix_back = new MyHelix(this.scene, 20, 1);
	this.helix_left = new MyHelix(this.scene, 20, 1);
	this.helix_right = new MyHelix(this.scene, 20, 1);
	this.cable = new MyCable(this.scene);
	
	this.front_helix_speed = 1;
	this.back_helix_speed = 1;
	this.sides_helix_speed = -1;
	
	this.pitch_angle = 0;
	
	this.bodyTextures = {};
	this.frameTextures = {};
	
	this.doge = new CGFappearance(this.scene);
	this.doge.loadTexture("./images/dogev2.png");
	
	this.sonic = new CGFappearance(this.scene);
	this.sonic.loadTexture("./images/sonicv2.png");
	
	this.pepe = new CGFappearance(this.scene);
	this.pepe.loadTexture("./images/pepev2.png");
	
		
	this.green = new CGFappearance(this.scene);
	this.green.loadTexture("./images/verde.png");
	
	this.pink = new CGFappearance(this.scene);
	this.pink.loadTexture("./images/rosa.png");
	
	this.blue = new CGFappearance(this.scene);
	this.blue.loadTexture("./images/azul.png");
	
	this.bodyTextures[0] = this.doge;
	this.bodyTextures[1] = this.sonic;
	this.bodyTextures[2] = this.pepe;
	
	this.frameTextures[0] = this.green;
	this.frameTextures[1] = this.blue;
	this.frameTextures[2] = this.pink;
	
	

		
};


MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;


MyDrone.prototype.helix_moveUpdate = function(currTime)
{
	//foward
	if(this.scene.key_w == 1)
	{
		this.update_helix_speed(this.helix_front, 0.2);
		this.update_helix_speed(this.helix_back, 10);
		this.update_helix_speed(this.helix_left, -1);
		this.update_helix_speed(this.helix_right, -1);
	}
	
	//backwards
	if(this.scene.key_s == 1)
	{
		this.update_helix_speed(this.helix_front, 10);
		this.update_helix_speed(this.helix_back, 0.2);
		this.update_helix_speed(this.helix_left, -1);
		this.update_helix_speed(this.helix_right, -1);
	}
	
	//rotate left
	if(this.scene.key_a == 1)
	{
		this.update_helix_speed(this.helix_front, 0.2);
		this.update_helix_speed(this.helix_back, 0.2);
		this.update_helix_speed(this.helix_left, -10);
		this.update_helix_speed(this.helix_right, -10);
	}
	
	//rotate right
	if(this.scene.key_d == 1)
	{
		this.update_helix_speed(this.helix_front, 0.2);
		this.update_helix_speed(this.helix_back, 0.2);
		this.update_helix_speed(this.helix_left, -10);
		this.update_helix_speed(this.helix_right, -10);
	}
	
	//foward + rotate left
	if(this.scene.key_w == 1)
		if(this.scene.key_a == 1)
		{
			this.update_helix_speed(this.helix_front, 0.2);
			this.update_helix_speed(this.helix_back, 10);
			this.update_helix_speed(this.helix_left, -10);
			this.update_helix_speed(this.helix_right, -10);
		}
	
	//foward + rotate right
	if(this.scene.key_w == 1 && this.scene.key_d == 1)
	{
		this.update_helix_speed(this.helix_front, 0.2);
		this.update_helix_speed(this.helix_back, 10);
		this.update_helix_speed(this.helix_left, -10);
		this.update_helix_speed(this.helix_right, -10);
	}
	
	//backwards + rotate left
	if(this.scene.key_s == 1 && this.scene.key_a == 1)
	{
		this.update_helix_speed(this.helix_front, 10);
		this.update_helix_speed(this.helix_back, 0.2);
		this.update_helix_speed(this.helix_left, -10);
		this.update_helix_speed(this.helix_right, -10);
	}
	
	//backwards + rotate right
	if(this.scene.key_s == 1 && this.scene.key_d == 1)
	{
		this.update_helix_speed(this.helix_front, 10);
		this.update_helix_speed(this.helix_back, 0.2);
		this.update_helix_speed(this.helix_left, -10);
		this.update_helix_speed(this.helix_right, -10);
	}
	
	//idle
	if(this.scene.key_s == 0 && this.scene.key_d == 0 && this.scene.key_w == 0 && this.scene.key_a == 0)
	{
		this.update_helix_speed(this.helix_front, 1);
		this.update_helix_speed(this.helix_back, 1);
		this.update_helix_speed(this.helix_left, -1);
		this.update_helix_speed(this.helix_right, -1);
	}
	
	this.helix_back.updateMove(this.scene.scale_rotors, currTime);
	this.helix_front.updateMove(this.scene.scale_rotors, currTime);
	this.helix_left.updateMove(this.scene.scale_rotors, currTime);
	this.helix_right.updateMove(this.scene.scale_rotors, currTime);
};

MyDrone.prototype.update_helix_speed = function(helix, velocity)
{
	helix.velocity = velocity;
};

MyDrone.prototype.update_pitch_angle = function(angle)
{
	if(this.scene.key_w == 1)
		if(this.pitch_angle < 20)
			this.pitch_angle += angle;
		
	if(this.scene.key_w == 0)
		if(this.pitch_angle > 0)
			this.pitch_angle -= angle*3;
		
	if(this.scene.key_s == 1)
		if(this.pitch_angle > -20)
			this.pitch_angle -= angle;
		
	if(this.scene.key_s == 0)
		if(this.pitch_angle < 0)
			this.pitch_angle += angle*3;
		
};

MyDrone.prototype.update_rope = function(speed)
{
	if(this.scene.key_p == 1)
		if(this.cable.length -speed/50 > 1)
			if(this.cable.length -speed/50 < 5)
				this.cable.length -=  speed/50;
			
	if(this.scene.key_l == 1)
		if(this.cable.length +speed/50 > 1)
			if(this.cable.length + speed/50 < 5)
				this.cable.length +=  speed/50;
}

MyDrone.prototype.getHookPos = function()
{
	this.coords = {};
	//x
	this.coords[0] = this.x;
	//y
	this.coords[1] = this.y - this.cable.length - 0.25;
	//z
	this.coords[2] = this.z;
	
	return this.coords;
}

MyDrone.prototype.checkCollision = function()
{
	var hookPos = this.getHookPos();
	var bombPos = this.scene.bomb.getPos();
	
	if((bombPos[0] - 0.5) < hookPos[0])
		if((bombPos[0] + 0.5) > hookPos[0])
			if((bombPos[2] - 0.5) < hookPos[2])
				if((bombPos[2] + 0.5) > hookPos[2])
					if((bombPos[1] - 0.5) < hookPos[1])
						if(bombPos[1] + 0.2> hookPos[1])
							if(this.scene.bomb.attached == 0)
								this.scene.bomb.attached = 1;
					
}



MyDrone.prototype.moveBomb = function()
{
	var hookPos = this.getHookPos();
	var podPos = this.scene.pod.getPos();
	
	if(this.scene.bomb.attached == 1)
	{
		this.scene.bomb.x = hookPos[0];
		this.scene.bomb.y = hookPos[1];
		this.scene.bomb.z = hookPos[2];
	}
	
	if(this.scene.bomb.attached == 2)
	{
		this.scene.bomb.x = podPos[0];
		this.scene.bomb.y = podPos[1] + 1;
		this.scene.bomb.z = podPos[2];
	}	
}

MyDrone.prototype.updateMove = function(currTime)
{
	var a = this.scene.speed/2;
	
	if(this.scene.key_w == 1)
	{
		this.x += Math.sin(degToRad * this.angle)* (a/10);
		this.z +=  Math.cos(degToRad * this.angle)* (a/10);
	}
	
	if(this.scene.key_s == 1)
	{
		this.x -= Math.sin(degToRad * this.angle)* (a/10);
		this.z -=  Math.cos(degToRad * this.angle)* (a/10);
	}
		
	if(this.scene.key_a == 1)
		this.angle += a*2;
	
	if(this.scene.key_d == 1)
		this.angle -= a*2;
	
	if(this.scene.key_i == 1)
		this.y += a/10;
	
	if(this.scene.key_j == 1)
		this.y -= a/10;
	
	this.update_pitch_angle(1);
	this.update_rope(this.scene.speed);
	this.helix_moveUpdate(currTime);
}

MyDrone.prototype.changeColor = function(currDroneAppearance)
{
	if (currDroneAppearance == 0)
	{
		this.frameTextures[1].apply();
	}
	
	else if (currDroneAppearance == 1)
	{
		this.frameTextures[2].apply();
	}
	else
	{
		this.frameTextures[0].apply();
	}
};


MyDrone.prototype.display = function()
{

	this.scene.materialDefault.apply();
	
	//cable hook
	this.scene.pushMatrix();
		this.cable.display();
	this.scene.popMatrix();
	
	this.scene.rotate(this.pitch_angle*degToRad, 1, 0, 0);
	
	
	//frame
	this.scene.pushMatrix();
		this.scene.translate(0, 0, -4.5/2);
		this.scene.scale(0.11,0.11,4.5);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.scene.translate(0, 0, -4.5/2);
		this.scene.scale(0.11,0.11,4.5);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//helice support
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(4/2, 0, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(-4/2, 0, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, 4/2, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, -4/2, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.cylinder.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//semi sphere
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, 0, -0.2);
		this.scene.scale(0.75,0.75,0.75);
		this.bodyTextures[this.scene.currDroneAppearance].apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//bottom of semi sphere
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad, 1, 0, 0);
		this.scene.translate(0, 0, 0.2);
		this.scene.scale(0.75,0.75,1);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.circle.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//drone legs
	this.scene.pushMatrix();
		this.scene.translate(0, -0.8, 0.4);
		this.scene.scale(0.7,0.7,0.15);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.halfc.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, -0.8, -0.4-0.15);
		this.scene.scale(0.7,0.7,0.15);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.halfc.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//drone feet
	this.scene.pushMatrix();
		this.scene.translate(0.7, -0.8, 0);
		this.scene.scale(0.2,0.1,1.5);
		this.changeColor(this.scene.currDroneAppearance);
		this.cube.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-0.7, -0.8, 0);
		this.scene.scale(0.2,0.1,1.5);
		this.changeColor(this.scene.currDroneAppearance);
		this.cube.display();
	this.scene.popMatrix();
	
	//helix semi spheres
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3, 0);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3, 0);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3, 2);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3, -2);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.frameTextures[this.scene.currDroneAppearance].apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//helix back
	this.scene.pushMatrix();
		this.scene.translate(0, 0.40, -2.8 +1.6/2);
		//this.scene.scale(0.09,0.03,1.6);
		this.changeColor(this.scene.currDroneAppearance);
		this.helix_back.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//helix front
	this.scene.pushMatrix();
		this.scene.translate(0, 0.40, 2.8-1.6 +1.6/2);
		//this.scene.scale(0.09,0.03, 1.6);
		this.changeColor(this.scene.currDroneAppearance);
		this.helix_front.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//helix left
	this.scene.pushMatrix();
		this.scene.translate(2.8-1.6/2, 0.40, 0);
		//this.scene.scale(0.09,0.03, 1.6);
		this.changeColor(this.scene.currDroneAppearance);
		this.helix_left.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//helix right
	this.scene.pushMatrix();
		this.scene.translate(-2.8+1.6/2, 0.40, 0);
		//this.scene.scale(0.09,0.03, 1.6);
		this.changeColor(this.scene.currDroneAppearance);
		this.helix_right.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
}



/*
MyDrone.prototype.initBuffers = function ()
 {
	this.vertices = [
            0.5, 0.3, 0,
            -0.5, 0.3, 0,
            0, 0.3, 2,
            ];

	this.indices = [
            0, 1, 2, 
			2,1,0,
			];
		
	this.primitiveType=this.scene.gl.TRIANGLES*/
	
	/*this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
			];*/
	
	
	/*		
	this.initGLBuffers();
};*/
