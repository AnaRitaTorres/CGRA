/**
 * MyDrone
 * @constructor
 */

function MyDrone(scene,x,y,z,angle) 
 {
 	CGFobject.call(this,scene);
	
	this.x=x;
	this.y=y;
	this.z=z;
	this.angle=angle;
	
	this.initBuffers();

};

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor=MyDrone;

MyDrone.prototype.updatePosition = function(x,y,z,a)
{
	this.x = this.x + x;
	this.y = this.y + y;
	this.z = this.z + z;
	this.angle = this.angle + a;
};

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
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	
	/*this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
			];*/
	
	
			
	this.initGLBuffers();
};