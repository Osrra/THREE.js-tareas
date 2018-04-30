var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var cube;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

init = function (){

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial ( {color : 0x00C600 } );
    cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    camera.position.z = 5;
    animate();

};

animate = function(){

    requestAnimationFrame( animate );

    cube.rotation.z += 0.05;
    cube.rotation.x += 0.01;

    renderer.render( scene , camera );
};