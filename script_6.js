function script_6() {
	const entrepreneurs = [
	  { first: 'Steve', last: 'Jobs', year: 1955 },
	  { first: 'Bill', last: 'Gates', year: 1955 },
	  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
	  { first: 'Jeff', last: 'Bezos', year: 1964 },
	  { first: 'Elon', last: 'Musk', year: 1971 },
	  { first: 'Larry', last: 'Page', year: 1973 },
	  { first: 'Jack', last: 'Dorsey', year: 1976 },
	  { first: 'Evan', last: 'Spiegel', year: 1990 },
	  { first: 'Brian', last: 'Chesky', year: 1981 },
	  { first: 'Travis', last: 'Kalanick', year: 1976 },
	  { first: 'Marc', last: 'Andreessen', year: 1971 },
	  { first: 'Peter', last: 'Thiel', year: 1967 }
	];

	let array70 = []
	let newArray = []
	entrepreneurs.forEach(row => {
		if (row.year >= 1970 && row.year < 1980) {
			array70.push(row);
		}
		newArray.push(`${row.first} ${row.last.toUpperCase()} would have ${2018 - row.year} yo.`)
	});
	console.log(array70)
	console.log(newArray)

    entrepreneurs.sort(
    	function (a, b) {
	        if (a.last < b.last) {
	            return -1;
	        } else if (a.last > b.last) {
	            return 1;
	        } else {
	        	return 0;
	        }
        }
    );
    console.log(entrepreneurs)
}