var camera, scene, renderer;


init();
animate();
//asdasdasdasdasd
function init() {
    camera.position.z = 1;
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);

	scene = new THREE.Scene();

	var boxGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	var material = new THREE.MeshNormalMaterial();

	var box = new THREE.Mesh(boxGeo, material);
    scene.add(box);

    /*var geometry = new THREE.Geometry();

    geometry.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 7, 3, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 7, 7, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 3, 7, 0 ) );

    geometry.faces.push( new THREE.Vector3(0,1,2) );
    geometry.faces.push( new THREE.Vector3(3,0,1) );

    buttom = new THREE.Mesh(geometry,material);
    scene.add(buttom);*/

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

}

function animate() {

	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render(scene, camera);

}

animate();