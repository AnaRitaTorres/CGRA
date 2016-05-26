/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);
    this.cube.initBuffers();
	
	//this.tableAppearance = new CGFappearance(this.scene);
	//this.tableAppearance.loadTexture("./images/table.png");
	
	this.materialDefault = new CGFappearance(this.scene);
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function()
{
	
    this.scene.pushMatrix();
    //tampo
    this.scene.translate(0, 3.5, 0);
    this.scene.scale(5, 0.3, 3);
	this.scene.tableAppearance.apply();
    this.cube.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

	this.materialDefault.apply();
	
	//pernas
    this.scene.translate(2.35, 1.75, 1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.cube.display();

	this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-2.35, 1.75, -1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.cube.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(2.35, 1.75, -1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.cube.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    this.scene.translate(-2.35, 1.75, 1.35);
    this.scene.scale(0.3, 3.5, 0.3);
    this.cube.display();

    this.scene.popMatrix();

}