let arr = [41,22,46,0,-2,-3,41,0,-17,-1];

for(let i = 0; i< arr.length; i++) {
	let lp = arr[i];
	for(let o = i+1;o<arr.length;o++) {
		let next = arr[o];
		if (lp == next) {
			console.log(`${lp}|${next}`)
		}
	}
}