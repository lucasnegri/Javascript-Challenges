    // credit card //

//credit card number//
new Cleave('#cardNum', {
    blocks: [4, 4, 4, 4],
    delimiters: [' ', ' ', ' ']
});

//credit card exp//
new Cleave('#cardExp', {
    date: true,
    dateMin: '22-01',
    dateMax: '30-12',
    datePattern: ['m', 'y']
});

//credit card cv//
new Cleave('#cardCvv', {
    blocks: [3]
});


