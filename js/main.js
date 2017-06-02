var iceCream = ['salted caramel', 'chocolate peanut butter cup', 'birthday cake'];

iceCream.push('cookies and cream');

var presidents = [

	{ firstName: 'Donald',
		lastName: 'Trump',
		termLength: '1 Term',
		party: 'Republican',
		yearsOfPresidency: '5 Months',
	},

	{ firstName: 'Barack',
		lastName: 'Obama',
		termLength: '2',
		party: 'Democrat',
		yearsOfPresidency: '8'
	},

	{ firstName: 'George W.',
		lastName: ' Bush',
		termLength: '2',
		party: 'Republican',
		yearsOfPresidency: '8'
	},

	{ firstName: 'Bill',
		lastName: 'Clinton',
		termLength: '2',
		party: 'Democrat',
		yearsOfPresidency: '8'
	},

	{ firstName: 'George H. W.',
		lastName: 'Bush',
		termLength: '2',
		party: 'Republican',
		yearsOfPresidency: '8'
	}
];

console.log(presidents[2].firstName + presidents[2].lastName);

function howdy() {
	console.log('Amy Wilson says hello!');
}
howdy();

var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	} else if (string.length > 7) {
		console.log("I'm sorry, but that's too many to count!");
	} else if (string.length == 7) {
		console.log('7, What a perfect choice!');
	}
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
	display(favMovie)
};


function movie(myMovie){
	console.log( myMovie + ' is a great movie.')
};

inception(movie, 'Harry Potter');
