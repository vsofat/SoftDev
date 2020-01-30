//Team SDU - Joseph Lee & Vishwaa Sofat
//SoftDev1 pd1
//K27 -- Sequential Progression
//2019-12-10


var fact = function(n){
    if (n < 2){
        return 1;}
    else {
        return (n * (fact(n - 1)));}

}

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

var gcd = function (a,b){
    var small;
    if (a < b){
        small = a;
    }
    else{
        small = b;
    }
    var i;
		var ans;
    for (i = 0; i < b; i++){
		 		if (a%i == 0 && b%i == 0){
						ans = i;
				}
		}
		return ans;
}

var randStudent = function (list){
		return list[Math.floor(Math.random()*list.length)];
}
console.log(fib(6));
console.log(gcd(12,9));
var cars = ["Saab", "Volvo", "BMW
