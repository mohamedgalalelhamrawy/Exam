//الواجهه الاولي

let row = document.querySelector('#row')
let mealsarr = []
let ingredientrow = document.querySelector('#ingredientrow')
function getdata() {
    let xml = new XMLHttpRequest()
    xml.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s')
    xml.send()
    xml.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            mealsarr = JSON.parse(xml.response).meals;
        }
        display(mealsarr);
    })
}

getdata()

function display(mealsarr) {
    box = ``
    for (let i = 0; i < mealsarr.length; i++) {
        console.log(mealsarr);
        box += `
             <div class="col-md-3 gy-4 image" onclick="getdatadetails(${mealsarr[i].idMeal})">
                <img src="${mealsarr[i].strMealThumb}" alt="">
            </div>
        `
    }

    row.innerHTML = box
}

//دوسه الكلك


$('.setting').click(function () {
    if ($('aside').animate("left", "-260px")) {
        $('aside').toggleClass("active")
    }
})


// //.............اما تضغط علي الصوره

let recepieObj =[];

function getdatadetails(id) {
    console.log(id);
    var xml = new XMLHttpRequest();
    xml.open('GET', `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    xml.send();
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            recepieObj = JSON.parse(xml.response).meals;
            displayDetails(recepieObj);
        }
    })
}
 
function displayDetails(recepieObj) {
    // let ingredientrow = document.getElementById("ingredientrow");
    box = ``
    box += `
    <div class="col-md-5 text-center mt-5 text-white">
        <img src="${recepieObj[0].strMealThumb}" alt="" class="w-60 ">
        <h3 class="text-center">${recepieObj[0].strMeal}</h3>
    </div>
    <div class="col-md-7 text-white mt-5">
        <h3>Instructions</h3>
        <p> ${recepieObj[0].strInstructions}</p>
        <p><span class="fw-bolder">Area:</span> ${recepieObj[0].strArea}</p>
        <p><span class="fw-bolder">catagory:</span> ${recepieObj[0].strCategory}</p>
        <div class="btn1 mb-4">
            <h3>recibe:</h3>
            <button>${recepieObj[0].strIngredient1}</button>
            <button>${recepieObj[0].strIngredient2}</button>
            <button> ${recepieObj[0].strIngredient3}</button>
            <button> ${recepieObj[0].strIngredient4}</button>
            <button> ${recepieObj[0].strIngredient5}</button>
            <button>${recepieObj[0].strIngredient6}</button>
            <button>${recepieObj[0].strIngredient7}</button>
        </div>
        <h3>Tags:</h3>
        <button class="source rounded" href="">source</button>
        <button class="youtube rounded" href="${recepieObj[0].strYoutube}">youtube</button>
    </div>
   
    `
    row.innerHTML = box
}

// $('img').click(function(){
//    $('#ingredientrow').css('display','block')
// })