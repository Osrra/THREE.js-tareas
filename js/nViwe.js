var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var cube;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2.5, window.innerHeight );
document.body.appendChild( renderer.domElement );


init = function (){

    var dirlight = new THREE.DirectionalLight();
    dirlight.position.set(0,5,3);
    scene.add(dirlight);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshPhongMaterial ( {color : 0xF0F066 } );
    cube = new THREE.Mesh(geometry,material);

    scene.add(cube);

    //scene.background = new THREE.MeshPhongMaterial({color : 0x0EEEEEE});

    var geometryBack = new THREE.PlaneBufferGeometry( 100, 100 );
	var materialBack = new THREE.MeshPhongMaterial( { color: 0xEEEEEE } );
	var background = new THREE.Mesh( geometryBack, materialBack );
	background.receiveShadow = true;
	background.position.set( 0, 0, - 1 );
    scene.add( background );
                
    camera.position.z = 5;
    animate();

};

animate = function(){

    requestAnimationFrame( animate );

    cube.rotation.z += 0.05;
    cube.rotation.x += 0.01;

    renderer.render( scene , camera );
};
