




function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            0.5, 0.5, 0.5, //A 0
            0.5, 0.5, -0.5, //B 1
            0.5, -0.5, -0.5, //C 2
            0.5, -0.5, 0.5, //D 3
            -0.5, -0.5, 0.5, //E 4
            -0.5, 0.5, 0.5, //F 5
            -0.5, 0.5, -0.5, // G 6
            -0.5, -0.5, -0.5, // H 7

			];


	this.indices = [
            3, 2, 1,//x+
            1, 0, 3,
            7, 6, 1,//z-
            1, 2, 7,
            4, 7, 2,//y-
            2, 3, 4,
            4, 5, 6,//x-
            6, 7, 4,
            0, 5, 4,//z+
            4, 3, 0,
            0, 1, 6,//y+
            6, 5, 0


        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
