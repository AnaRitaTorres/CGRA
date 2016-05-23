/**
 * MyCompleteCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyCompleteCylinder(scene) {
	CGFobject.call(this,scene);
    
    this.cylinder = new MyCylinder(this.scene, 100, 1);
	this.circle = new MyCircle(this.scene, 100);
	
};

MyCompleteCylinder.prototype = Object.create(CGFobject.prototype);
MyCompleteCylinder.prototype.constructor=MyCompleteCylinder;


MyCompleteCylinder.prototype.display = function()
{
	this.cylinder.display();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1);
		this.circle.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.circle.display();
	this.scene.popMatrix();
	
	
	
}