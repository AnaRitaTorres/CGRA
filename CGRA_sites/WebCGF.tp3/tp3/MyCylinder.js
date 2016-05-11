/**
 * MyCylinder
 * @constructor
 */

function MyCylinder(scene, slices, stacks) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() 
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

 	//this.normals =[];

	var angle = 2*Math.PI/this.slices;
	
	for (var i=0; i <= this.stacks;i++)
	{
		for ( var j=0; j < this.slices;j++)
		{
			//vertices e normais
			this.vertices.push(Math.cos(angle*j),Math.sin(angle*j),i/this.stacks);
			//this.normals.push(Math.cos(angle*j),Math.sin(angle*j),0);
		}
	}
	
		
	for ( var j=0; j < this.slices;j++)
	{ 
			//indices
			this.indices.push(, n+this.slices+j+1,n+this.slices);
			this.indices.push(n+j,n+j+1, n+this.slices+1);
	}
	
			
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };