/**
 * MyBomb
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyBomb(scene) {
	CGFobject.call(this,scene);
	
	this.cube = new MyUnitCubeQuad(this.scene);
	
	this.tnt = new CGFappearance(this.scene);
	this.tnt.loadTexture("./images/tnt.png");
	
	this.x = 0;
	this.y = 0;
	this.z = 0;
	
};

MyBomb.prototype = Object.create(CGFobject.prototype);
MyBomb.prototype.constructor=MyBomb;

MyBomb.prototype.getPos = function()
{
	this.coords = {};
	//x
	this.coords[0] = this.x;
	//y
	this.coords[1] = this.y;
	//z
	this.coords[2] = this.z;
	
	return this.coords;
}
MyBomb.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.translate(this.x, this.y - 1/2, this.z);
		this.tnt.apply();
		this.cube.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
}