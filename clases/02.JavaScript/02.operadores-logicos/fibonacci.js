

function fibonacci(num) {
    var a = 0;
    var b = 1;
    if (num <= 1) return 1;
    for (let index = 1; index < num; index++) {
        fibo = a + b;
        a = b;
        b = fibo;
        console.log(fibo);
    }
  }