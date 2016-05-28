/**
 * MyHook
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyHook(scene) {
	CGFobject.call(this,scene);
	
	this.cylinder = new MyCompleteCylinder(this.scene, 6, 6);
	
};

MyHook.prototype = Object.create(CGFobject.prototype);
MyHook.prototype.constructor=MyHook;


MyHook.prototype.display = function()
{
	//top part
	this.scene.pushMatrix();
		this.scene.translate(-0.5/2, 0, 0);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.scene.scale(0.1, 0.1, 1/2);
		this.cylinder.display();
	this.scene.popMatrix();
	
	//side part n1
	this.scene.pushMatrix();
		this.scene.translate(0.15, 0, 0);
		this.scene.rotate(90*degToRad, 1, 0, 0);
		this.scene.scale(0.1, 0.1, 1/2);
		this.cylinder.display();
	this.scene.popMatrix();
	
	//bottom part
	this.scene.pushMatrix();
		this.scene.translate(-0.5/2, -1/2, 0);
		this.scene.rotate(90*degToRad, 0, 1, 0);
		this.scene.scale(0.1, 0.1, 1/2);
		this.cylinder.display()
	this.scene.popMatrix();
	
	//side part n2
	this.scene.pushMatrix();
		this.scene.translate(-0.15, -0.5/2, 0);
		this.scene.rotate(90*degToRad, 1, 0, 0);
		this.scene.scale(0.1, 0.1, 0.5/2);
		this.cylinder.display()
	this.scene.popMatrix();
}