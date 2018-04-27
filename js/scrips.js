var camera, scene, renderer;
var box, buttom;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = -3;
    camera.lookAt (0,0,0);
    
	scene = new THREE.Scene();

	var boxGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	var material = new THREE.MeshNormalMaterial();

	box = new THREE.Mesh(boxGeo, material);
    scene.add(box);

    var geometry = new THREE.Geometry();

    geometry.vertices.push(
        new THREE.Vector3( -10,  10, 0 ),
        new THREE.Vector3( -10, -10, 0 ),
        new THREE.Vector3(  10, -10, 0 )
    );
    
    geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
    
    geometry.computeBoundingSphere();
    var mat = new THREE.MeshBasicMaterial({color : 0xff0000})
    buttom = new THREE.Mesh(geometry,mat);
    scene.add(buttom);

    // var geometry = new THREE.Geometry();

    // geometry.vertices.push( new THREE.Vector3( 1, 1, 0 ) );
    // geometry.vertices.push( new THREE.Vector3( 4, 1, 0 ) );
    // geometry.vertices.push( new THREE.Vector3( 4, 4, 0 ) );
    // geometry.vertices.push( new THREE.Vector3( 1, 4, 0 ) );

    // geometry.faces.push( new THREE.Vector3(0,3,1) );
    // geometry.faces.push( new THREE.Vector3(1,3,2) );

    // var mat = new THREE.MeshBasicMaterial({color : 0xffffff})
    // console.log("JEEJJE",mat)

    // buttom = new THREE.Mesh(geometry,mat);
    // scene.add(buttom);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

}

function animate() {

	requestAnimationFrame(animate);

	box.rotation.x += 0.01;
	box.rotation.y += 0.02;

	renderer.render(scene, camera);

}

animate();