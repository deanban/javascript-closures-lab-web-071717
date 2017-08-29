function bumpCounter(){
	let counter = 0;
	function addBump(){counter += 1};
	function getBumps(){return counter};
	return {addBump, getBumps}
}

function createAnimal(animalType){
	return function (deadly_device){
		return {animalType: animalType, deadlyDevice: deadly_device}
	}
}

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');



