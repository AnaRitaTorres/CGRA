/**
 * myLamp
 * @constructor
 */

function myLamp(scene, slices, stacks) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	
 	this.initBuffers();
 };
 

 myLamp.prototype = Object.create(CGFobject.prototype);
 myLamp.prototype.constructor = myLamp;

 myLamp.prototype.initBuffers = function() 
 {
 	this.vertices =[];

 	this.indices =[];

 	this.normals =[];
	
	this.texCoords =[];
	
	var phi = Math.PI/2/this.stacks;
	var beta = 2*Math.PI/this.slices;
	//hpi = 90º
	var hpi = Math.PI/2;
	
	for (var i=0; i <= this.stacks;i++)
	{
		for ( var j=0; j < this.slices;j++)
		{
			//vertices e normais
			this.vertices.push(Math.sin(hpi-i*phi)*Math.cos(j*beta), Math.sin(hpi-i*phi)*Math.sin(j*beta), Math.cos(hpi-i*phi));
			this.normals.push(Math.sin(hpi-i*phi)*Math.cos(j*beta), Math.sin(hpi-i*phi)*Math.sin(j*beta), Math.cos(hpi-i*phi));
			
			this.texCoords.push(Math.sin(hpi - i * phi) * Math.cos(j * beta) * 0.5 + 0.5,Math.sin(hpi - i * phi) * Math.sin(j * beta) * 0.5 + 0.5);
			//this.texCoords.push((this.slices-j)/this.slices, (this.stacks-i)/this.stacks);
		}
	}
	

	for (var i=0; i < this.stacks;i++)
	{
		var n = this.slices*i;
		
		for ( var j=0; j < this.slices;j++)
		{ 
			if(j == this.slices -1)
			{
				this.indices.push(n+j, n+this.slices+j+1-this.slices,n+this.slices+j);
				this.indices.push(n+j,n+j+1-this.slices, n+this.slices+j+1-this.slices);
			}
			else
			{
				this.indices.push(n+j, n+this.slices+j+1,n+this.slices+j);
				this.indices.push(n+j,n+j+1, n+this.slices+j+1);
			}
		}
		
	}
	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
 