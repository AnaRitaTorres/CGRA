/**
 * MyPod
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
var degToRad = Math.PI / 180.0;
 
function MyPod(scene, slices,stacks, x, z) {
	CGFobject.call(this,scene);
    
	this.cylinder = new MyCylinder(this.scene, slices, stacks);
	this.circle = new MyCircle(this.scene, slices);
	
	this.shield = new CGFappearance(this.scene);
	this.shield.loadTexture("./images/shieldv2.png");
	
	
	this.hydra = new CGFappearance(this.scene);
	this.hydra.loadTexture("./images/hydra.png");
	
	this.podTextures = {};
	
	this.podTextures[0] = this.shield;
	this.podTextures[1] = this.shield;
	this.podTextures[2] = this.hydra;
	
	
	this.x = x;
	this.z = z;
	
};

MyPod.prototype = Object.create(CGFobject.prototype);
MyPod.prototype.constructor=MyPod;

MyPod.prototype.getPos = function()
{
	this.coords = {};
	//x
	this.coords[0] = this.x;
	//y
	this.coords[1] = 1;
	//z
	this.coords[2] = this.z;
	
	return this.coords;
}

MyPod.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.translate(this.x, 0, this.z);
		this.scene.rotate(-90*degToRad, 1, 0, 0);
		this.scene.scale(2, 2, 1);
		
		this.cylinder.display();
			
		this.scene.pushMatrix();
			this.scene.translate(0, 0, 1);
			this.scene.rotate (-90*degToRad, 0, 0, 1);
			this.podTextures[this.scene.bomb.attached].apply();
			this.circle.display();
			this.scene.materialDefault.apply();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.rotate(Math.PI, 0, 1, 0);
			this.circle.display();
		this.scene.popMatrix();
		
	this.scene.popMatrix();
}
