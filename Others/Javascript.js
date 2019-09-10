function f(n){
    if (n == 0 || n == 1) {
        return n;
    } else if(n%3 != 0) {
        return 0;
    } else {
        return f(n/3);
    }
}
console.log(f(9));