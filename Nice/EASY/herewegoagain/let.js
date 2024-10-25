function timed(f) {
    
        return function(...arg) { // Collect args into a rest
            console.log(arg)
            console.log(`Entering function ${f.name}`);
            let startTime = Date.now();
            try {
                // Pass a
                return f(...arg); // Spread the args back out
            }
            finally {
                console.log(`Exiting ${f.name} after
                ${Date.now()-startTime}ms`);
            }
        };
    }
    // Compute the sum of the numbers between 1 and n by brute
    function benchmark(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) sum += i;
    return sum;
    }
    // Now invoke the timed version of that test function
    console.log((timed(benchmark))(1000))