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
	this.scene.pushMatrix();
		
		this.scene.scale(0.21,0.21,3.5);
		this.scene.translate(3.5/2, 0, 0);
		this.cylinder.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		
		this.scene.scale(0.21,0.21,3.5);
		this.scene.translate(3.5/2, 0, 0);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.cylinder.display();
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
