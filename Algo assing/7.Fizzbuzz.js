function fbfb() {
    for (let a = 0; a < 100; a++) {
        if (a % 3 == 0) {
            console.log("FIZZ");
        } else if (a % 5 == 0) {
            console.log("BUZZ");
        } else {
            console.log(a);
        }
    }
}
fbfb();