function f(n) {
    if (n<=1){
        return 1;
    } else if (n%2 == 0) {
        return f(n/2);
    } else {
        return (f(n/2)+f((n/2)+1));
    }
}
console.log(f(11));