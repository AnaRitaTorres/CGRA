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
	
	this.cylinder = new MyCompleteCylinder(this.scene);
	this.sphere = new myLamp(this.scene, 100, 100);
	this.circle = new MyCircle(this.scene, 100);
	this.halfc = new MyHalfCylinder(this.scene, 100, 100);
	this.cube = new MyUnitCubeQuad(this.scene);
	this.helix_front = new MyCompleteCylinder(this.scene, 20, 1);
	this.helix_back = new MyCompleteCylinder(this.scene, 20, 1);
	this.helix_sides = new MyCompleteCylinder(this.scene, 20, 1);
	
	this.dealwithdoge = new CGFappearance(this.scene);
	this.dealwithdoge.loadTexture("./images/doge.png");
	
};


MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.rotateRight = function(a)
{
	this.angle += a;
};

MyDrone.prototype.rotateLeft = function(a)
{
	this.angle -= a;
};

MyDrone.prototype.moveFoward = function(a)
{
	this.x += Math.sin(degToRad * this.angle)* (a/10);
	this.z +=  Math.cos(degToRad * this.angle)* (a/10);
};

MyDrone.prototype.moveBackwards= function(a)
{
	this.x -= Math.sin(degToRad * this.angle)* (a/10);
	this.z -=  Math.cos(degToRad * this.angle)*(a/10);
};

MyDrone.prototype.moveUp = function(a)
{
	this.y += (a/10);
};

MyDrone.prototype.moveDown = function(a)
{
	this.y -=(a/10);
};


MyDrone.prototype.display = function()
{
	this.scene.materialDefault.apply();
	//frame
	this.scene.pushMatrix();
		this.scene.translate(0, 0, -4.5/2);
		this.scene.scale(0.11,0.11,4.5);
		this.cylinder.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.scene.translate(0, 0, -4.5/2);
		this.scene.scale(0.11,0.11,4.5);
		this.cylinder.display();
	this.scene.popMatrix();
	
	//helice support
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(4/2, 0, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.cylinder.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(-4/2, 0, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, 4/2, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, -4/2, 0);
		this.scene.scale(0.2,0.2,0.3);
		this.cylinder.display();
	this.scene.popMatrix();
	
	//semi sphere
	this.scene.pushMatrix();
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.translate(0, 0, -0.2);
		this.scene.scale(0.75,0.75,0.75);
		this.dealwithdoge.apply();
		this.sphere.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	//bottom of semi sphere
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad, 1, 0, 0);
		this.scene.translate(0, 0, 0.2);
		this.scene.scale(0.75,0.75,1);
		this.circle.display();
	this.scene.popMatrix();
	
	//drone legs
	this.scene.pushMatrix();
		this.scene.translate(0, -0.8, 0.4);
		this.scene.scale(0.7,0.7,0.15);
		this.halfc.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, -0.8, -0.4-0.15);
		this.scene.scale(0.7,0.7,0.15);
		this.halfc.display();
	this.scene.popMatrix();
	
	//drone feet
	this.scene.pushMatrix();
		this.scene.translate(0.7, -0.8, 0);
		this.scene.scale(0.2,0.1,1.5);
		this.cube.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-0.7, -0.8, 0);
		this.scene.scale(0.2,0.1,1.5);
		this.cube.display();
	this.scene.popMatrix();
	
	//helix semi spheres
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3, 0);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.sphere.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3, 0);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.sphere.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3, 2);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.sphere.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3, -2);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(0.2,0.2,0.2);
		this.sphere.display();
	this.scene.popMatrix();
	
	//helix front
	this.scene.pushMatrix();
		this.scene.translate(0, 0.40, -2.8);
		this.scene.scale(0.09,0.03,1.6);
		this.helix_front.display();
	this.scene.popMatrix();
	
	//helix back
	this.scene.pushMatrix();
		this.scene.translate(0, 0.40, 2.8-1.6);
		this.scene.scale(0.09,0.03, 1.6);
		this.helix_back.display();
	this.scene.popMatrix();
	
	//helix sides
	this.scene.pushMatrix();
		this.scene.translate(2.8-1.6/2, 0.40, -1.6/2);
		this.scene.scale(0.09,0.03, 1.6);
		this.helix_sides.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2.8+1.6/2, 0.40, -1.6/2);
		this.scene.scale(0.09,0.03, 1.6);
		this.helix_sides.display();
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
