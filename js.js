// Function Of Add Item


$(document).ready ( function () {
    $("form").on ("click", "#bt", function (e) {
        let empName = document.getElementsByTagName('input')[0].value        
        $("ul").append(`<li> ${empName} </li>`)
        e.preventDefault()
        input.value = ''
    });
});

//Function Of Clear All
$(document).ready ( function () {
    
    $("form").on ("click", "#btC", function (e) {
        $("ul").remove(`<li> </li>`)
        e.preventDefault()
    });
});

//Function Of Number Of Items
$(document).ready ( function () {
    $("form").on ("click", "#btN", function (e) {
        var item = document.getElementsByTagName('li')
        var NumberOfItem = item.length;
        alert(`You Have ${NumberOfItem} Items`)
        e.preventDefault()
    });
});