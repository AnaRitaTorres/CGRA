/**
 * MyCircle
 * @constructor
 */

function MyCircle(scene, slices) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	
 	this.initBuffers();

};

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() 
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
	
	this.texCoords = [];


	var angle = 2*Math.PI/this.slices;
	
	this.vertices.push(0,0,0);
	this.normals.push(0,0,1);
	this.texCoords.push(0.5, 0.5);
	
	for ( var j=0; j < this.slices;j++)
	{
		//vertices e normais
		this.vertices.push(Math.cos(angle*j),Math.sin(angle*j),0);
		this.normals.push(Math.cos(angle*j),Math.sin(angle*j),1);
		this.texCoords.push(0.5 - Math.cos(angle*j)/2, 0.5 + Math.sin(angle*j)/2);
	}
	
	

	for (var j=1; j < this.slices + 1;j++)
	{ 
		if(j == this.slices)
		{
			this.indices.push(j,1,0);
		}
		else
		{
			this.indices.push(j,j+1,0);
		}
	}
			
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };