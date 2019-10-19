var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function month() {
    var a = document.getElementById("month-table-id")
    for (let i = 0; i < 7; i++) {
        var row = a.insertRow(i)
        if (i < 1) {
            for (let j = 0; j < 7; j++) {
                var cell = row.insertCell(j)
                cell.innerHTML = days[j]
            }
        } else {
            for (let j = 0; j < 7; j++) {
                var cell = row.insertCell(j)
            }
        }
    }
}
month()

function deletetable() {
    for (var i = document.getElementById("month-table-id").rows.length; i > 0; i--) {
        document.getElementById("month-table-id").deleteRow(i - 1);
    }
}

var D = new Date(),
    a = D.getMonth(),
    b = D.getFullYear()

function generate() {
    var x = Number(document.getElementById("month-select").value);
    var y = Number(document.getElementById("year-select").value);
    if (x != document.getElementById("none-1").value && y != document.getElementById("none-2").value) {
        a = x;
        b = y;
    }
    var D1 = new Date(b, a, 1)
    var a1 = D1.getDay()
    document.getElementById("month-heading").innerHTML = months[a]
    document.getElementById("year-heading").innerHTML = b
    var q = 1
    if (a == 1 && b % 4 == 0) {
        for (let i = 0; i < 29; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a == 1) {
        for (let i = 0; i < 28; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a == 7) {
        for (let i = 0; i < 31; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a > 7 && a % 2 == 0) {
        for (let i = 0; i < 30; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a > 7 && a % 2 != 0) {
        for (let i = 0; i < 31; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a < 7 && a % 2 == 0) {
        for (let i = 0; i < 31; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    } else if (a < 7 && a % 2 != 0) {
        for (let i = 0; i < 30; i++) {
            if (a1 == 7) {
                q++
                a1 = 0
            }
            document.getElementById("month-table-id").rows[q].cells[a1].innerHTML = i + 1;
            a1++
        }
    }
}
generate()

function onclicknext() {
    a++
    if (a > 11) {
        b++
        a = 0
    }
    deletetable()
    month()
    generate()
}

function onclickprev() {
    a--
    if (a < 0) {
        b--
        a = 11
    }
    deletetable()
    month()
    generate()
}