/*Import de la variable contenant les recettes*/
import {recipes} from "./recipes.js";

/***********************************************************************************************/
/*Déclaration des variables*********************************************************************/
/***********************************************************************************************/

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
const itemIng = document.getElementsByClassName('item-ingredient');

/*Variables recherche appareils*/
const devCtn = document.getElementById('device-ctn');
const devLabel = document.getElementById('device-label');
const devInput = document.getElementById('device-input');
const devArrDown = document.getElementById('device-arrow-down');
const devArrUp = document.getElementById('device-arrow-up');
const devList = document.getElementById('device-list');
const itemDev = document.getElementsByClassName('item-device');

/*Variables recherche ustensiles*/
const utCtn = document.getElementById('utensils-ctn');
const utLabel = document.getElementById('utensils-label');
const utInput = document.getElementById('utensils-input');
const utArrDown = document.getElementById('utensils-arrow-down');
const utArrUp = document.getElementById('utensils-arrow-up');
const utList = document.getElementById('utensils-list');
const itemUt = document.getElementsByClassName('item-utensils');

/*Variable item de recherche*/
const item = document.getElementsByClassName('item');
const msgListEmpty = document.getElementsByClassName('msg-list-empty');

/*Variable card*/
const allCardCtn = document.getElementById('all-card-ctn');
const recipeCtn = document.getElementsByClassName('recipe-ctn');
const msgNoRecipes = document.getElementById('msg-no-recipes');

/***********************************************************************************************/
/*Fonction ouverture/fermeture******************************************************************/
/***********************************************************************************************/

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

/***********************************************************************************************/
/*Implémentation du Dom*************************************************************************/
/***********************************************************************************************/

/*Implémentation de la liste d'ingrédients*/
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
        ingItem.className = 'item item-ingredient p-2';
        ingItem.id = 'ing-'+ ingArray[l];
        ingItem.innerHTML = ingArray[l];
        ingItem.addEventListener('click',openTag);
        listVar.appendChild(ingItem); 
    }    
}
listIngredientFactory(recipes,ingList);

/*Implémentation de la liste d'appareils*/
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
        devItem.className = 'item item-device p-2';
        devItem.id = 'dev-'+ devArray[l];
        devItem.innerHTML = devArray[l];
        devItem.addEventListener('click',openTag);
        listVar.appendChild(devItem); 
    } 
}
listDeviceFactory(recipes,devList);

/*Implémentation de la liste d'ustensils*/
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
        utItem.className = 'item item-utensils p-2';
        utItem.id = 'ut-'+ utArray[l];
        utItem.innerHTML = utArray[l];
        utItem.addEventListener('click',openTag);
        listVar.appendChild(utItem); 
    } 
}
listUtensilsFactory(recipes,utList);

/*Ouverture d'un tag lors du click sur un item de liste*/
var choiceTagArray = [];
function openTag(event){
    var itemClass = event.currentTarget.getAttribute("class");
    var itemClassArray = itemClass.split(' ');
    var itemType = itemClassArray[1];
    var itemContent = event.currentTarget.innerHTML;

    choiceTagArray.push(itemContent);
    
    if(itemType == "item-ingredient"){
        tagFactory(itemContent,'#3282f7');
    }else if(itemType == "item-device"){
        tagFactory(itemContent,'#68d9a4');
    }else if(itemType == "item-utensils"){
        tagFactory(itemContent,'#ed6454');
    }

    idCardArrayInitial = [];
    tagFilter(recipes,choiceTagArray);

    mainInput.value = '';
    ingInput.value = '';
    devInput.value = '';
    utInput.value = '';

    closeSearchIngredient();
    closeSearchDevice();
    closeSearchUtensils();    
}

/*implémentation du DOM d'un tag*/
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

/*Fermeture d'un tag lors du click sur la croix*/
function closeTag(event){
    var tagId = event.currentTarget.getAttribute('id');
    allTagCtn.removeChild(document.getElementById("tag-"+tagId));
      
    for(var i in choiceTagArray){
        if(tagId === choiceTagArray[i]){
            choiceTagArray.splice(i,1);            
        }
    }   
    
    idCardArrayInitial = [];
    idCardArrayFinal = [];    
    tagFilter(recipes,choiceTagArray);      
}

/*Implémentation du DOM des cartes de recettes*/
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

/***********************************************************************************************/
/*Fonctions filtre et recherche*****************************************************************/
/***********************************************************************************************/

/*Events lors du remplissage des champs de saisies*/
mainBtn.addEventListener("click",mainSearch);
mainInput.addEventListener("keyup",mainSearch);
ingInput.addEventListener("keyup",ingSearch);
devInput.addEventListener("keyup",devSearch);
utInput.addEventListener("keyup",utSearch);

/*Fonctions de recherche principale*/

function mainSearch(){    
    var contentSearch = mainInput.value; 
    var noMatch1 = 0;
    var noMatch2 = 0;     
    if(contentSearch.length >= 3){       
        for(var j in ingArray){
            if(ingArray[j].toLowerCase().startsWith(contentSearch) || ingArray[j].includes(contentSearch)){
                ingFilter(recipes,contentSearch);          
            }else{
                noMatch1 += 1;
            }
        }     
        for(var k in recipes){
            if(recipes[k].name.toLowerCase().startsWith(contentSearch)
             || recipes[k].name.includes(contentSearch)
             || recipes[k].description.includes(contentSearch)){
                 titleAndDescFilter(recipes,contentSearch);
             }else{
                 noMatch2 += 1;
             }
        }                      
    }
    if(contentSearch == '' && choiceTagArray.length == 0){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(item,el => el.style.display = 'block');
        msgNoRecipes.style.display = 'none'; 
    }else if(noMatch1 == 117 && noMatch2 == 50){
        msgNoRecipes.style.display = 'flex';
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'none');        
    }
         
}

/*Fonction de recherche par ingrédient*/
function ingSearch(){
    var contentSearch = ingInput.value;
    if(contentSearch.length >= 3){ 
        Array.prototype.forEach.call(itemIng,el => el.style.display = 'none');      
        for(var j in ingArray){
            if(ingArray[j].toLowerCase().startsWith(contentSearch) || ingArray[j].includes(contentSearch)){
                document.getElementById('ing-' + ingArray[j]).style.display='block';             
            }
        }
    }
    if(contentSearch == '' && choiceTagArray.length == 0){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(itemIng,el => el.style.display = 'block'); 
    } 
}

/*Fonction de recherche par appareil*/
function devSearch(){
    var contentSearch = devInput.value;
    if(contentSearch.length >= 3){ 
        Array.prototype.forEach.call(itemDev,el => el.style.display = 'none');      
        for(var j in devArray){
            if(devArray[j].toLowerCase().startsWith(contentSearch) || devArray[j].includes(contentSearch)){
                document.getElementById('dev-' + devArray[j]).style.display='block';             
            }
        }
    }
    if(contentSearch == '' && choiceTagArray.length == 0){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(itemDev,el => el.style.display = 'block'); 
    } 
}

/*Fonction de recherche par ustensils*/
function utSearch(){
    var contentSearch = utInput.value;
    if(contentSearch.length >= 3){ 
        Array.prototype.forEach.call(itemUt,el => el.style.display = 'none');      
        for(var j in utArray){
            if(utArray[j].toLowerCase().startsWith(contentSearch) || utArray[j].includes(contentSearch)){
                document.getElementById('ut-' + utArray[j]).style.display='block';             
            }
        }
    }
    if(contentSearch == '' && choiceTagArray.length == 0){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(itemUt,el => el.style.display = 'block'); 
    } 
}

/*Fonction de filtre par ingrédient lors de la saisie de l'input principale*/
function ingFilter(array,content){
    var array1 = [];
    var array2 = [];
    for(var i=0;i<array.length;i++){
        array2.push(array[i].id);
        for(var j=0;j<array[i].ingredients.length;j++){
            var ingVar = array[i].ingredients[j].ingredient;           
            if(ingVar.toLowerCase().startsWith(content) || ingVar.includes(content)){                
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

/*Fonction de filtre par titre et description lors de la saisie de l'input principale*/
function titleAndDescFilter(array,content){
    var array1 = [];
    var array2 = [];
    for(var i=0;i<array.length;i++){
        array2.push(array[i].id);
        if(array[i].name.toLowerCase().startsWith(content) || array[i].name.includes(content)){                       
            array1.push(array[i].id);
        }        
        if(array[i].description.toLowerCase().startsWith(content) || array[i].description.includes(content)){                               
            array1.push(array[i].id);
            
        }
    }    
    var n=0;
    for(var k in array1){
        n+=1;
        array2.splice(array1[k]-n,1);        
    }
    listTagFilter(recipes,array1);
};

/*Fonction de filtre lorsque des tags sont activés*/
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
    idCardArrayFinal2 = [];
    
    if(tagArray.length == 1){
        listTagFilter(recipes,idCardArrayInitial,choiceTagArray);
    }else if(tagArray.length > 1){
        for(var m=0;m<idCardArrayInitial.length;m++){                
            if(idCardArrayInitial[m] === idCardArrayInitial[m+1]){
                idCardArrayFinal.push(idCardArrayInitial[m]);                                    
            }
            if(idCardArrayInitial[m] === idCardArrayInitial[m+1] && idCardArrayInitial[m] === idCardArrayInitial[m-1]){                
                idCardArrayFinal2.push(idCardArrayInitial[m]);                 
            }              
        }
        listTagFilter(recipes,idCardArrayFinal,choiceTagArray);
        if(idCardArrayFinal2.length > 0){
            listTagFilter(recipes,idCardArrayFinal2,choiceTagArray);
        }        
    }else if(tagArray.length == 0){
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(item,el => el.style.display = 'block');
    }    
}

/*Fonction qui crée une nouvelle liste de recette en fonction des tags activés
et qui réimplémente le DOM des cartes recettes et des listes*/
function listTagFilter(mainArray,tagArray,tagChoice){
    var newRecipes = [];
    for(var i=0;i<tagArray.length;i++){        
        newRecipes.push(mainArray[tagArray[i]-1]);        
    }    
    
    Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'none');
    Array.prototype.forEach.call(item,el => el.style.display = 'none');
    Array.prototype.forEach.call(msgListEmpty,el => el.style.display = 'none');      
    
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
    
    for(var o in tagChoice){
        for(var p in ingArray){
            if(ingArray[p].toLowerCase().startsWith(tagChoice[o]) && ingArray[p].includes(tagChoice[o])){
                document.getElementById('ing-' + tagChoice[o]).style.display='none';             
            }
        }
        for(var q in devArray){
            if(devArray[q].toLowerCase().startsWith(tagChoice[o]) && devArray[q].includes(tagChoice[o])){
                document.getElementById('dev-' + tagChoice[o]).style.display='none';             
            }
        }
        for(var r in utArray){
            if(utArray[r].toLowerCase().startsWith(tagChoice[o]) && utArray[r].includes(tagChoice[o])){
                document.getElementById('ut-' + tagChoice[o]).style.display='none';             
            }
        }
    }
    
    if(newRecipes.length == 1){
        Array.prototype.forEach.call(item,el => el.style.display = 'none');
        Array.prototype.forEach.call(msgListEmpty,el => el.style.display = 'block');  
    }
    
}