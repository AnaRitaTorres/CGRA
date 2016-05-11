/**
 * MyClockHand
 * @constructor
 */

function MyClockHand(scene, angle, size)
 {
 	CGFobject.call(this,scene);
	
	this.pointer = new MyUnitCubeQuad(this.scene);
	this.angle = angle;
	this.size = size;
};

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;
 
MyClockHand.prototype.setAngle = function(angle)
{
	this.scene.pushMatrix();
	this.scene.rotate(-this.angle, 0, 0, 1);
	this.angle = angle;
	this.scene.popMatrix();
}

MyClockHand.prototype.getAngle = function()
{
	return this.angle;
}
 
 MyClockHand.prototype.display = function()
{
	
    this.scene.pushMatrix();
	this.scene.rotate(this.angle, 0, 0, 1);
    this.scene.translate(0, this.size/2, 0);
    this.scene.scale(0.05, this.size, 0.05);
	
	this.pointer.display();
    this.scene.popMatrix();
}

