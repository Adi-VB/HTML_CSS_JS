function generate1() {
    var y = 1;
    var a = document.getElementById("ten-table-id")
    for (let i = 0; i < 10; i++) {
        var row = a.insertRow(i)
        for (let j = 0; j < 10; j++) {
            var cell = row.insertCell(j)
            cell.innerHTML = y;
            y++
        }
    }
}
generate1()

function onclickten() {
    var c = Number(document.getElementById("input-num").value);
    if (c < 0) {
        alert("Enter natural numbers from 1 to 100: ")
    }else{
        deleteEle()
        var y = 1;
        var a = document.getElementById("ten-table-id")
        for (let i = 0; i < 10; i++) {
            var row = a.insertRow(i)
            for (let j = 0; j < 10; j++) {
                var cell = row.insertCell(j)
                if (y % c == 0) {
                    cell.innerHTML = "**"
                    y++
                }else{
                    cell.innerHTML = y
                    y++
                }
            }
        }
    }
}

function deleteEle() {
    for (var i = document.getElementById("ten-table-id").rows.length; i > 0; i--) {
        document.getElementById("ten-table-id").deleteRow(i - 1);
    }
}

// function generate() {
//     var a = document.getElementById("ten-table-id")
//     var y = 0,
//         x = 0,
//         z = 0
//     do {
//         var row = document.createElement("tr")
//         a.appendChild(row)
//         y++
//         x = 0;
//         do {
//             var button = document.createElement("button")
//             button.innerHTML = z + 1;
//             var cell = document.createElement("td")
//             cell.appendChild(button);
//             row.appendChild(cell)
//             x++
//             z++
//         } while (x < 10);
//     } while (y < 10);
// }
// generate()