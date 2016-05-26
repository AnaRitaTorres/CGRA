/**
 * MyHelix
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyHelix(scene,slices,stacks) {
	CGFobject.call(this,scene);
    
	this.angle =0;
    this.helix = new MyCompleteCylinder(this.scene, slices,stacks);
};

MyHelix.prototype = Object.create(CGFobject.prototype);
MyHelix.prototype.constructor=MyHelix;


MyHelix.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.rotate(this.angle*degToRad,0,1,0);
		this.helix.display();
	this.scene.popMatrix();
};


MyHelix.prototype.updateMove = function(velocity,currTime)
{
	this.angle += 360/velocity;
}