/**
 * MyBomb
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyBomb(scene, x, y, z) {
	CGFobject.call(this,scene);
	
	this.cube = new MyUnitCubeQuad(this.scene);
	
	this.tnt = new CGFappearance(this.scene);
	this.tnt.loadTexture("./images/tnt.png");
	
	this.paper = new CGFappearance(this.scene);
	this.paper.loadTexture("./images/papel.png");
	
	this.bombTextures = {};
	
	this.bombTextures[0] = this.paper;
	this.bombTextures[1] = this.tnt;
	this.bombTextures[2] = this.tnt;
	
	
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.attached = 0;
	
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
		this.bombTextures[this.attached].apply();
		this.cube.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
}