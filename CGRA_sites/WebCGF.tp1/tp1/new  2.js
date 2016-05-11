/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	this.vertices =[];

 	this.indices =[];

 	this.normals =[];

	var angle = 2*Math.PI/this.slices;
	
	this.vertices.push(0,0,0);
	
	for (var i=0; i < this.slices; i++)
	{
		this.vertices.push(Math.cos(angle*i),Math.sin(angle*i),0);
		this.vertices.push(Math.cos(angle*(i+1)),Math.sin(angle*(i+1)),0);
		this.normals.push(Math.cos(i* angle + angle / 2), Math.sin(i * angle + angle / 2),0);
		this.normals.push(Math.cos(i* angle + angle / 2), Math.sin(i* angle + angle / 2),0);

	}
	
	for (var j=0; j < this.slices;j++)
	{
		this.indices.push(j,j+1);
		this.indices.push(j,j+1);
	}
	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
