$('.setting2').click(function(){
    if ($('article').animate("left" , "-260px"))
    {
        $('article').toggleClass("active")
    }
})

// ////////


let input_search = document.querySelector('#input_search')
input_search.addEventListener("keyup" , getdata);
let row = document.getElementById("row");
let input_Letter = document.getElementById("input_Letter");
 let mealsarr = []
function getdata(){
    if(input_search.value != ""){
        let val = input_search.value;
        let xml = new XMLHttpRequest()
        xml.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
        xml.send()
        xml.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200){
                 mealsarr = JSON.parse(xml.response).meals;
                }
                display(mealsarr)
        })
    }
}

// getdata()

function display(mealsarr) {
   row.innerHTML = "";
    box = ``
    for (let i = 0; i < mealsarr.length; i++) {
        console.log(mealsarr);
        box += `
             <div class="col-md-3 gy-4">
            <img src="${mealsarr[i].strMealThumb}" alt="">
            </div>
        `
        row.innerHTML= box
    }

}




// --------------------------------


input_Letter.addEventListener("keyup" , myFun);

function myFun(){
    // input_Letter.value.length = 1;
    // input_Letter.setAttribute("readonly" , true);
    // let regex = /^[a-z][A-Z]{1}$/
    if(input_Letter.value.length == 1)
    {
        input_Letter.blur();
        
        // row.innerHTML = "";
        let val = input_Letter.value;
        let xml = new XMLHttpRequest()
        xml.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
        xml.send()
        xml.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200){
                 mealsarr = JSON.parse(xml.responseText).meals;
                 console.log(mealsarr);
                 display(mealsarr)
                }
        })
    }
}
