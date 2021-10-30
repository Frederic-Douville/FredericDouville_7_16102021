import {recipes} from "./recipes.js";

//console.log(recipes);

/*Déclaration des variables*/

/*Variables recherche principale*/
const mainInput = document.getElementById('main-input');
const mainBtn = document.getElementById('main-search-btn');

/*Variable conteneur des tags*/
const allTagCtn = document.getElementById('all-tag-ctn');

/*Variables recherche ingrédient*/
const ingCtn = document.getElementById('ingredient-ctn');
const ingLabel = document.getElementById('ingredient-label');
const ingInput = document.getElementById('ingredient-input');
const ingArrDown = document.getElementById('ingredient-arrow-down');
const ingArrUp = document.getElementById('ingredient-arrow-up');
const ingList = document.getElementById('ingredient-list');

/*Variables recherche appareils*/
const devCtn = document.getElementById('device-ctn');
const devLabel = document.getElementById('device-label');
const devInput = document.getElementById('device-input');
const devArrDown = document.getElementById('device-arrow-down');
const devArrUp = document.getElementById('device-arrow-up');
const devList = document.getElementById('device-list');

/*Variables recherche ustensiles*/
const utCtn = document.getElementById('utensils-ctn');
const utLabel = document.getElementById('utensils-label');
const utInput = document.getElementById('utensils-input');
const utArrDown = document.getElementById('utensils-arrow-down');
const utArrUp = document.getElementById('utensils-arrow-up');
const utList = document.getElementById('utensils-list');

/*Variable item de recherche*/
const item = document.getElementsByClassName('item');

/*Variable card*/
const allCardCtn = document.getElementById('all-card-ctn');
const recipeCtn = document.getElementsByClassName('recipe-ctn');

/*Fonction ouverture/fermeture du champ de saisie ingrédient*/
ingLabel.addEventListener('click',openSearchIngredient);
ingArrDown.addEventListener('click',openSearchIngredient);
ingArrUp.addEventListener('click',closeSearchIngredient);

function openSearchIngredient(){
    ingCtn.style.width = '28.75rem';
    ingLabel.style.display = 'none';
    ingInput.style.display = 'block';
    ingArrDown.style.display = 'none';
    ingArrUp.style.display = 'block';
    ingList.style.display = 'grid';
    closeSearchDevice();
    closeSearchUtensils();
}

function closeSearchIngredient(){
    ingCtn.style.width = '20%';
    ingLabel.style.display = 'block';
    ingInput.style.display = 'none';
    ingArrDown.style.display = 'block';
    ingArrUp.style.display = 'none';
    ingList.style.display = 'none';
}

/*Fonction ouverture/fermeture du champ de saisie appareil*/
devLabel.addEventListener('click',openSearchDevice);
devArrDown.addEventListener('click',openSearchDevice);
devArrUp.addEventListener('click',closeSearchDevice);

function openSearchDevice(){
    devCtn.style.width = '28.75rem';
    devLabel.style.display = 'none';
    devInput.style.display = 'block';
    devArrDown.style.display = 'none';
    devArrUp.style.display = 'block';
    devList.style.display = 'grid';
    closeSearchIngredient();
    closeSearchUtensils();
}

function closeSearchDevice(){
    devCtn.style.width = '20%';
    devLabel.style.display = 'block';
    devInput.style.display = 'none';
    devArrDown.style.display = 'block';
    devArrUp.style.display = 'none';
    devList.style.display = 'none';
}

/*Fonction ouverture/fermeture du champ de saisie appareil*/
utLabel.addEventListener('click',openSearchUtensils);
utArrDown.addEventListener('click',openSearchUtensils);
utArrUp.addEventListener('click',closeSearchUtensils);

function openSearchUtensils(){
    utCtn.style.width = '28.75rem';
    utLabel.style.display = 'none';
    utInput.style.display = 'block';
    utArrDown.style.display = 'none';
    utArrUp.style.display = 'block';
    utList.style.display = 'grid';
    closeSearchIngredient();
    closeSearchDevice();
}

function closeSearchUtensils(){
    utCtn.style.width = '20%';
    utLabel.style.display = 'block';
    utInput.style.display = 'none';
    utArrDown.style.display = 'block';
    utArrUp.style.display = 'none';
    utList.style.display = 'none';
}

/*Implémentation du Dom*/

/*Implémentatiion des listes ingrédients, appareils et ustensils*/
var ingArray = []; 
function listIngredientFactory(array,listVar){      
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array[i].ingredients.length;j++){
            ingArray.push(array[i].ingredients[j].ingredient);
        }
    }
    ingArray.sort((a,b) => a.localeCompare(b));
    for(var k=0;k<ingArray.length;k++){
        if(ingArray[k] === ingArray[k+1] || ingArray[k] === ingArray[k-1]){
            ingArray.splice(k,1);
            k=0;
        }        
    }
    for(var l=0;l<ingArray.length;l++){
        var ingItem = document.createElement('li');
        ingItem.className = 'item item-ingredient p-1';
        ingItem.id = 'ing-'+ ingArray[l];
        ingItem.innerHTML = ingArray[l];
        ingItem.addEventListener('click',openTag);
        listVar.appendChild(ingItem); 
    }    
}
listIngredientFactory(recipes,ingList);

var devArray = [];
function listDeviceFactory(array,listVar){    
    for(var i=0;i<array.length;i++){        
        devArray.push(array[i].appliance);        
    }
    devArray.sort((a,b) => a.localeCompare(b));
    for(var k=0;k<devArray.length;k++){
        if(devArray[k] === devArray[k+1] || devArray[k] === devArray[k-1]){
            devArray.splice(k,1);
            k=0;
        }        
    }
    for(var l=0;l<devArray.length;l++){
        var devItem = document.createElement('li');
        devItem.className = 'item item-device p-1';
        devItem.id = 'dev-'+ devArray[l];
        devItem.innerHTML = devArray[l];
        devItem.addEventListener('click',openTag);
        listVar.appendChild(devItem); 
    } 
}
listDeviceFactory(recipes,devList);

var utArray = []; 
function listUtensilsFactory(array,listVar){  
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array[i].ustensils.length;j++){
            utArray.push(array[i].ustensils[j]);
        }
    }
    utArray.sort((a,b) => a.localeCompare(b));
    for(var k=0;k<utArray.length;k++){
        if(utArray[k] === utArray[k+1] || utArray[k] === utArray[k-1]){
            utArray.splice(k,1);
            k=0;
        }        
    }
    for(var l=0;l<utArray.length;l++){
        var utItem = document.createElement('li');
        utItem.className = 'item item-utensils p-1';
        utItem.id = 'ut-'+ utArray[l];
        utItem.innerHTML = utArray[l];
        utItem.addEventListener('click',openTag);
        listVar.appendChild(utItem); 
    } 
}
listUtensilsFactory(recipes,utList);

var choiceTagArray = [];

function openTag(event){
    var itemClass = event.currentTarget.getAttribute("class");
    var itemClassArray = itemClass.split(' ');
    var itemType = itemClassArray[1];
    var itemContent = event.currentTarget.innerHTML;

    choiceTagArray.push(itemContent);
    console.log(choiceTagArray);
    if(itemType == "item-ingredient"){
        tagFactory(itemContent,'#3282f7');
        document.getElementById('ing-'+itemContent).style.display='none';
    }else if(itemType == "item-device"){
        tagFactory(itemContent,'#68d9a4');
        document.getElementById('dev-'+itemContent).style.display='none';
    }else if(itemType == "item-utensils"){
        tagFactory(itemContent,'#ed6454');
        document.getElementById('ut-'+itemContent).style.display='none';
    }
    idCardArrayInitial = [];
    tagFilter(recipes,choiceTagArray);
    
}

function tagFactory(content,color){
    var tagCtn = document.createElement('div');
    tagCtn.className = "rounded d-flex flex-row align-items-center justify-content-center me-2 my-2 tag";
    tagCtn.id = "tag-" + content;
    tagCtn.style.backgroundColor = color;
    allTagCtn.appendChild(tagCtn);

    var tagSpan = document.createElement('span');
    tagSpan.className = "ps-3 pe-2 py-2";
    tagSpan.innerHTML = content;
    tagCtn.appendChild(tagSpan);

    var tagBtn = document.createElement('button');
    tagBtn.className = "button rounded ps-2 pe-3 pb-1 close-cross";
    tagBtn.id = content;
    tagBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="white"/></svg>';
    tagCtn.appendChild(tagBtn);
    tagBtn.addEventListener('click',closeTag);
}

function closeTag(event){
    var tagId = event.currentTarget.getAttribute('id');
    allTagCtn.removeChild(document.getElementById("tag-"+tagId));
      
    for(var i in choiceTagArray){
        if(tagId === choiceTagArray[i]){
            choiceTagArray.splice(i,1);
            console.log(choiceTagArray);
        }
    }
    
    idCardArrayInitial = [];
    idCardArrayFinal = [];
    
    tagFilter(recipes,choiceTagArray);
      
}

function cardFactory(array){
    for(var i=0;i<array.length;i++){
        var cardCtn = document.createElement('div');
        cardCtn.className = " col-md-6 col-lg-4 recipe-ctn";
        cardCtn.id = array[i].id;
        allCardCtn.appendChild(cardCtn);

        var card = document.createElement('div');
        card.className = "card rounded mb-4";
        cardCtn.appendChild(card);

        var cardPict = document.createElement('div');
        cardPict.className = "card-picture rounded-top";
        card.appendChild(cardPict);

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        var cardGroup1 = document.createElement('div');
        cardGroup1.className = "card-group row mb-2";
        cardBody.appendChild(cardGroup1);

        var cardTitle = document.createElement('h2');
        cardTitle.className = "card-title col-8 my-auto";
        cardTitle.innerHTML = array[i].name;
        cardGroup1.appendChild(cardTitle);

        var cardTime = document.createElement('div');
        cardTime.className = "card-time col-4 ps-0 d-flex flex-row align-items-center justify-content-end";
        cardTime.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/></svg>';
        cardGroup1.appendChild(cardTime);

        var cardTimeSpan = document.createElement('span');
        cardTimeSpan.className = "card-duration ms-1";
        cardTimeSpan.innerHTML = '<b>' + array[i].time + ' min' + '</b>' ;
        cardTime.appendChild(cardTimeSpan);

        var cardGroup2 = document.createElement('div');
        cardGroup2.className = "card-group row";
        cardBody.appendChild(cardGroup2);

        var cardIng = document.createElement('div');
        cardIng.className = "card-ingredient col-6";
        cardGroup2.appendChild(cardIng);

        var cardList = document.createElement('ul');
        cardList.className = "card-list list-unstyled recipe";
        cardIng.appendChild(cardList);

        for(var j=0;j<array[i].ingredients.length;j++){
            var ingItem = document.createElement('li');
            if (array[i].ingredients[j].unit){
                ingItem.innerHTML = '<b>' + array[i].ingredients[j].ingredient + ':' + '</b>'+ ' ' + array[i].ingredients[j].quantity + array[i].ingredients[j].unit;
            }else if(array[i].ingredients[j].quantity){
                ingItem.innerHTML = '<b>' + array[i].ingredients[j].ingredient + ':' + '</b>'+ ' ' + array[i].ingredients[j].quantity;
            }else{
                ingItem.innerHTML = '<b>' + array[i].ingredients[j].ingredient  + '</b>';
            }
            
            cardList.appendChild(ingItem);
        }

        var cardText = document.createElement('div');
        cardText.className = "card-text col-6 recipe";
        cardText.innerHTML =  array[i].description ;
        cardGroup2.appendChild(cardText);
    }
}
cardFactory(recipes);

/*Fonctions filtre et recherche */

mainBtn.addEventListener("click",mainSearch);
mainInput.addEventListener("keyup",mainSearch);

function mainSearch(){
    
    var contentSearch = mainInput.value;        
    if(contentSearch.length >= 3){       
        for(var j in ingArray){
            if(ingArray[j].toLowerCase().startsWith(contentSearch) || ingArray[j].includes(contentSearch)){
                ingFilter(recipes,contentSearch);             
            }
        }
        for(var l in devArray){
            if(devArray[l].toLowerCase().startsWith(contentSearch) || devArray[l].includes(contentSearch)){
                utAndDevFilter(recipes,contentSearch);               
            }
        }
        for(var k in utArray){
            if(utArray[k].toLowerCase().startsWith(contentSearch) || utArray[k].includes(contentSearch)){
                utAndDevFilter(recipes,contentSearch);               
            }
        }              
    }
    if(contentSearch == '' ){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(item,el => el.style.display = 'block'); 
    }     
}

function ingFilter(array,content){
    var array1 = [];
    var array2 = [];
    for(var i=0;i<array.length;i++){
        array2.push(array[i].id);
        for(var j=0;j<array[i].ingredients.length;j++){
            var ingVar = array[i].ingredients[j].ingredient;           
            if(ingVar.toLowerCase().startsWith(content) || ingVar.includes(content)){
                console.log(array[i].id,array[i].ingredients[j].ingredient);
                array1.push(array[i].id);
                break;
            }
        }
    }
    var n=0;
    for(var k in array1){
        n+=1;
        array2.splice(array1[k]-n,1);
    }
    listTagFilter(recipes,array1);
}

function utAndDevFilter(array,content){
    var array1 = [];
    var array2 = [];
    for(var i=0;i<array.length;i++){
        array2.push(array[i].id);
        var devVar = array[i].appliance;
        if(devVar.toLowerCase().startsWith(content) || devVar.includes(content)){
            console.log(array[i].id,array[i].appliance);            
            array1.push(array[i].id);
        } 
        for(var k=0;k<array[i].ustensils.length;k++){
            var utVar = array[i].ustensils[k];
            if(utVar.toLowerCase().startsWith(content) || utVar.includes(content)){
                console.log(array[i].id,array[i].ustensils[k]);                
                array1.push(array[i].id);
                break;
            }
        }
    }
    var n=0;
    for(var k in array1){
        n+=1;
        array2.splice(array1[k]-n,1);        
    }
    listTagFilter(recipes,array1);
}

var idCardArrayInitial = [];
var idCardArrayFinal = [];
var idCardArrayFinal2 = [];

function tagFilter(mainArray,tagArray){       
    for(var j=0;j<tagArray.length;j++){        
        for(var i=0;i<mainArray.length;i++){
            if(tagArray[j] === mainArray[i].appliance){
                idCardArrayInitial.push(mainArray[i].id);                
            }
            for(var k=0;k<mainArray[i].ingredients.length;k++){
                if(tagArray[j] === mainArray[i].ingredients[k].ingredient){
                    idCardArrayInitial.push(mainArray[i].id);
                }
            }
            for(var l=0;l<mainArray[i].ustensils.length;l++){
                if(tagArray[j] === mainArray[i].ustensils[l]){
                    idCardArrayInitial.push(mainArray[i].id);
                }
            }
        } 
    }
    

    idCardArrayInitial.sort((a,b)=>a-b);
    idCardArrayFinal = [];
    for(var m=0;m<idCardArrayInitial.length;m++){
        if(idCardArrayInitial !== []){
            idCardArrayFinal.push(idCardArrayInitial[m]);
        }        
        if(idCardArrayInitial[m] === idCardArrayInitial[m+1]){
            idCardArrayFinal2.push(idCardArrayInitial[m]);
            idCardArrayFinal = [];            
        }              
    }

    console.log('initial: ', idCardArrayInitial);    
    console.log('final: ' ,idCardArrayFinal);
    console.log('final2: ', idCardArrayFinal2);
    
    
    if(idCardArrayFinal != []){
        listTagFilter(recipes,idCardArrayFinal);
    }else if(idCardArrayFinal2 != []){
        listTagFilter(recipes,idCardArrayFinal2);
    }  
}


function listTagFilter(mainArray,tagArray){
    var newRecipes = [];
    for(var i=0;i<tagArray.length;i++){        
        newRecipes.push(mainArray[tagArray[i]-1]);        
    }    
    
    Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'none');
    Array.prototype.forEach.call(item,el => el.style.display = 'none');
    
    for(var l in newRecipes){
        document.getElementById(newRecipes[l].id).style.display = 'block';
        document.getElementById('dev-'+ newRecipes[l].appliance).style.display = 'block';
        for(var m in newRecipes[l].ustensils){
            document.getElementById('ut-'+newRecipes[l].ustensils[m]).style.display = 'block';
        }
        for(var n in newRecipes[l].ingredients){
            document.getElementById('ing-'+newRecipes[l].ingredients[n].ingredient).style.display = 'block';
        }
    }
}