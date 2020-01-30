var fib = function(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}

function gcd(a,b) {
    while(b) {
        var x = b;
        b = a % b;
          a = x;
    }

    return a;
}

var randStudent = function (list){
		return list[Math.floor(Math.random()*list.length)];
}

var fibH = document.getElementById('1');
fibH.addEventListener('click', fib(3));
