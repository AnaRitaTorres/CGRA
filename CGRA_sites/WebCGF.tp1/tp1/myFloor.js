function myFloor(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);
    this.cube.initBuffers();
};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function()
{
    this.scene.pushMatrix();
    
    this.scene.translate(0, 0, 0);
    this.scene.scale(8.0, 0.1, 6.0);
    this.cube.display();
}