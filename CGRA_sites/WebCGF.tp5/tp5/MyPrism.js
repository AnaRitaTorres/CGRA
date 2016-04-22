/**
 * MyPrism
 * @constructor
 */

function MyPrism(scene, slices, stacks) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() 
 {
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
	
	for (var i=0; i < this.stacks;i++)
	{
		for ( var j=0; j < this.slices;j++)
		{
			//vertices e normais
			this.vertices.push(Math.cos(angle*j),Math.sin(angle*j),i/this.stacks);
			this.normals.push(Math.cos(angle * (j+0.5)),Math.sin(angle* (j+0.5)),0);
			this.vertices.push(Math.cos(angle*(j+1)), Math.sin(angle*(j+1)),i/this.stacks);
			this.normals.push(Math.cos(angle * (j+1+0.5)),Math.sin(angle* (j+1+0.5)),0);
			this.vertices.push(Math.cos(angle*j),Math.sin(angle*j),(i+1)/this.stacks);
			this.normals.push(Math.cos(angle * (j+0.5)),Math.sin(angle* (j+0.5)),0);
			this.vertices.push(Math.cos(angle*(j+1)), Math.sin(angle*(j+1)),(i+1)/this.stacks);
			this.normals.push(Math.cos(angle * (j+1+0.5)),Math.sin(angle* (j+1+0.5)),0);
			

			}
	}
	
	for (var i=0; i < this.stacks;i++)
	{
		var n= 4*this.slices*i;
		
		for ( var j=0; j < this.slices;j++)
		{ 
			
			//indices
			this.indices.push(n+j*4+0,n+j*4+1, n+j*4+2);
			this.indices.push(n+j*4+3,n+j*4+2,n+j*4+1);
		}
	}
			
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };