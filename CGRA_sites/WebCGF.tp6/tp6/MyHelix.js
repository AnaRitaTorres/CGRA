/**
 * MyHelix
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyHelix(scene,slices,stacks) {
	CGFobject.call(this,scene);
    
	this.angle =0;
	this.velocity = 1;
    this.helix = new MyCompleteCylinder(this.scene, slices,stacks);
	
	this.last_time = 0;
	this.delta_time = 0;
	this.first = 0;
};

MyHelix.prototype = Object.create(CGFobject.prototype);
MyHelix.prototype.constructor=MyHelix;


MyHelix.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.rotate(this.angle*degToRad,0,1,0);
		this.scene.translate(0, 0, -1.6/2);
		this.scene.scale(0.09,0.03, 1.6);
		this.helix.display();
	this.scene.popMatrix();
};


MyHelix.prototype.updateMove = function(scale, currTime)
{	
	this.delta_time = currTime-this.last_time;
	this.last_time = currTime;
	
	if (this.first == 0)
	{
		this.delta_time = 0;
		this.first = 1;
	}
	
	var v = 1 / this.velocity;
	this.angle = this.angle + degToRad*(360 / (v/scale/60) * (this.delta_time / 1000));
	//this.angle = this.angle + degToRad*(360 * (this.velocity/scale/60) * (this.delta_time / 1000));
}