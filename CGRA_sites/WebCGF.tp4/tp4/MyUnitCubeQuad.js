/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
    
    this.quad = new MyQuad(this.scene, -0.5, 1.5, -1.0, 1.0);
    this.quad.initBuffers();
	
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;


MyUnitCubeQuad.prototype.display = function()
{
    this.scene.pushMatrix();
    //z+
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();
    //z-
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();
	//x+
    this.scene.rotate(Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();
	//x-
    this.scene.rotate(3*Math.PI/2, 0, 1, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();
	//y-
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();
	//y+
    this.scene.rotate(3*Math.PI/2, 1, 0, 0);
    this.scene.translate(0, 0, 0.5);
    this.quad.display();

   	this.scene.popMatrix();
	
}