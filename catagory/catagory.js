let category = document.querySelector(".category");
let category_item = document.querySelector(".category_item");

// www.themealdb.com/api/json/v1/1/categories.php


fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
.then(res => res.json())
.then(data => {
    let {categories} = data;
    category.style.display = "grid";
    console.log(categories);
    for(let i = 0; i < categories.length; i++){
        let x = categories[i].strCategoryDescription;
        let arr = x.split(" ");
        let sliceArr = arr.slice(0 , 12);
        let joinerDesc = sliceArr.join(" ");
        // ${categories[i].idCategory}
        let box = `
            <div onclick="showCategory(${i})" class="item">
                <img src="${categories[i].strCategoryThumb}" alt="">
                <div class="content">
                    <h3>${categories[i].strCategory}</h3>
                    <p>
                        ${joinerDesc}
                    </p>
                </div>
            </div>
        `
        category.innerHTML += box;
    }
})



// show category for products

function showCategory(index){
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(result => result.json())
    .then(data2 => {
        let {categories} = data2;
        let category_name = categories[index].strCategory;
        testNameFun(category_name);
    })
}

function testNameFun(categoryName){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then(result => result.json())
    .then(data2 => {
        let {meals} = data2;
        category.innerHTML = "";
        for(let i = 0; i < meals.length; i++){
            let box = `
                <div onclick="useId(${meals[i].idMeal})" class="item">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="content">
                        <h3>${meals[i].strMeal}</h3>
                    </div>
                </div>
            `
            category.innerHTML += box;
        }
    })
}


function useId(id){
    category.innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(results => results.json())
    .then(data3 => {
        let {meals} = data3;

        let boxs = `
        <div>
            <img src="${meals[0].strMealThumb}" alt="">
            <section>${meals[0].strMeal}</section>
        </div>

        <div>
            <h2>
                Instructions
            </h2>
            <p>
            ${meals[0].strInstructions}
            </p>
            <table>
                <tr>
                    <td>Area :</td>
                    <td>${meals[0].strArea}</td>
                </tr>
                <tr>
                    <td>Category :</td>
                    <td>${meals[0].strCategory}</td>
                </tr>
            </table>
            <div class="recipe">
                <h3>Recipes : </h3>
                <div class="recipe_flex">
                    <li>
                        ${meals[0].strIngredient1}
                    </li>
                    <li>
                        ${meals[0].strIngredient2}
                    </li>
                    <li>
                        ${meals[0].strIngredient3}
                    </li>
                    <li>
                        ${meals[0].strIngredient4}
                    </li>
                </div>
            </div>
            <div class="recipe">
                <h3>Tags :</h3>
                <div class="recipe_flex">
                    <li class="lista">
                        ${meals[0].strTags}
                    </li>
                </div>
            </div>

            <div>
                <a href="${meals[0].strSource}">Source</a>
                <a href="${meals[0].strYoutube}">Youtube</a>
            </div>
        </div>

        `
        category_item.innerHTML = boxs;
    })
}

$('.setting').click(function () {
    if ($('aside').animate("left", "-260px")) {
        $('aside').toggleClass("active")
    }
})

