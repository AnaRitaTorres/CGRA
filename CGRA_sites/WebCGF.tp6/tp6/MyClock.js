/**
 * MyClock
 * @constructor
 */
var degToRad = Math.PI / 180.0;
function MyClock(scene,slices) 
 {
 	CGFobject.call(this,scene);
	this.slices=slices;
	
	this.clock = new CGFappearance(this.scene);
	this.clock.loadTexture("./images/clock.png");
	this.clock.setDiffuse(0.2,0.2,0.2,1);
	this.clock.setSpecular(0.5,0.5,0.5,1);
	this.clock.setShininess(200);
	
	this.cylinder = new MyCylinder(scene,slices,1);
	this.circle = new MyCircle(scene,slices);
	
	this.hours_pointer = new MyClockHand(this.scene, 0*degToRad, 0.50);
	this.minutes_pointer = new MyClockHand(this.scene, 0*degToRad, 0.65);
	this.seconds_pointer = new MyClockHand(this.scene, 0*degToRad, 0.85);

	this.hours_pointer.setAngle(-90*degToRad);
	this.minutes_pointer.setAngle(-180*degToRad);
	this.seconds_pointer.setAngle(-270*degToRad);
	
	this.last_time = 0;
	this.delta_time = 0;
	this.first = 0;
	
	
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

MyClock.prototype.display = function ()
{
	//cilindro
	this.scene.pushMatrix();
    this.scene.rotate(Math.PI,0,0,1);
    this.scene.materialDefault.apply();
    this.cylinder.display();
	this.scene.popMatrix();

	//circulo
	this.scene.pushMatrix();
    this.scene.translate(0,0,1);
    this.scene.rotate(Math.PI,0,0,1);
    this.clock.apply();
    this.circle.display();
	this.scene.popMatrix();
	
	//pointers
	this.scene.pushMatrix();
	this.scene.translate(0,0,1.1);
	this.hours_pointer.display();
	this.minutes_pointer.display();
	this.seconds_pointer.display();
	this.scene.popMatrix();
}

MyClock.prototype.update = function(currTime) {
	
	this.delta_time = currTime-this.last_time;
	this.last_time = currTime;
	/*
	if (this.first == 0)
	{
		this.delta_time = 0;
		this.first = 1;
	}
	*/
	
	this.seconds_pointer.setAngle(this.seconds_pointer.angle - degToRad*(360 / 60 * (this.delta_time / 1000)));
	this.minutes_pointer.setAngle(this.minutes_pointer.angle - degToRad*(360 / (60*60) * (this.delta_time / 1000)));
	this.hours_pointer.setAngle(this.hours_pointer.angle - degToRad*(360 / (60*60*60) * (this.delta_time / 1000)));
 	

};