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
    var ingArrayRaw = [];
    array.forEach(function(el){
        el.ingredients.forEach(function(el2){
            ingArrayRaw.push(el2.ingredient);
        })
    })      
        
    ingArrayRaw.sort((a,b) => a.localeCompare(b));
    ingArray = ingArrayRaw.filter(function(ele,pos){
        return ingArrayRaw.indexOf(ele) == pos;
    })
    
    ingArray.forEach(function(el){
        var ingItem = document.createElement('li');
        ingItem.className = 'item item-ingredient p-2';
        ingItem.id = 'ing-'+ el;
        ingItem.innerHTML = el;
        ingItem.addEventListener('click',openTag);
        listVar.appendChild(ingItem); 
    })
      
}
listIngredientFactory(recipes,ingList);

/*Implémentation de la liste d'appareils*/
var devArray = [];
function listDeviceFactory(array,listVar){
    var devArrayRaw = [];
    array.forEach(function(el){
        devArrayRaw.push(el.appliance);
    })    
    
    devArrayRaw.sort((a,b) => a.localeCompare(b));
    devArray = devArrayRaw.filter(function(ele,pos){
        return devArrayRaw.indexOf(ele) == pos;
    })

    devArray.forEach(function(el){
        var devItem = document.createElement('li');
        devItem.className = 'item item-device p-2';
        devItem.id = 'dev-'+ el;
        devItem.innerHTML = el;
        devItem.addEventListener('click',openTag);
        listVar.appendChild(devItem); 
    })
    
}
listDeviceFactory(recipes,devList);

/*Implémentation de la liste d'ustensils*/
var utArray = []; 
function listUtensilsFactory(array,listVar){
    var utArrayRaw = [];
    array.forEach(function(el){
        el.ustensils.forEach(function(el2){
            utArrayRaw.push(el2);
        })
    })     
    
    utArrayRaw.sort((a,b) => a.localeCompare(b));
    utArray = utArrayRaw.filter(function(ele,pos){
        return utArrayRaw.indexOf(ele) == pos;
    })

    utArray.forEach(function(el){
        var utItem = document.createElement('li');
        utItem.className = 'item item-utensils p-2';
        utItem.id = 'ut-'+ el;
        utItem.innerHTML = el;
        utItem.addEventListener('click',openTag);
        listVar.appendChild(utItem); 
    })    
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
    
    choiceTagArray.forEach(function(el,pos){
        if(tagId === el){
            choiceTagArray.splice(pos,1)
        }
    })     
    
    idCardArrayInitial = [];
    idCardArrayFinal = [];
    idCardArrayFinal2 = [];
    idCardArrayFinal3 = [];    
    tagFilter(recipes,choiceTagArray);      
}

/*Implémentation du DOM des cartes de recettes*/
function cardFactory(array){
    array.forEach(function(el){
        var cardCtn = document.createElement('div');
        cardCtn.className = " col-md-6 col-lg-4 recipe-ctn";
        cardCtn.id = el.id;
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
        cardTitle.innerHTML = el.name;
        cardGroup1.appendChild(cardTitle);

        var cardTime = document.createElement('div');
        cardTime.className = "card-time col-4 ps-0 d-flex flex-row align-items-center justify-content-end";
        cardTime.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/></svg>';
        cardGroup1.appendChild(cardTime);

        var cardTimeSpan = document.createElement('span');
        cardTimeSpan.className = "card-duration ms-1";
        cardTimeSpan.innerHTML = '<b>' + el.time + ' min' + '</b>' ;
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

        el.ingredients.forEach(function(el2){
            var ingItem = document.createElement('li');
            if (el2.unit){
                ingItem.innerHTML = '<b>' + el2.ingredient + ':' + '</b>'+ ' ' + el2.quantity + el2.unit;
            }else if(el2.quantity){
                ingItem.innerHTML = '<b>' + el2.ingredient + ':' + '</b>'+ ' ' + el2.quantity;
            }else{
                ingItem.innerHTML = '<b>' + el2.ingredient  + '</b>';
            }           
            cardList.appendChild(ingItem);
        })        

        var cardText = document.createElement('div');
        cardText.className = "card-text col-6 recipe";
        cardText.innerHTML =  el.description ;
        cardGroup2.appendChild(cardText);
    })       
    
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
        ingArray.forEach(function(el){
            if(el.toLowerCase().startsWith(contentSearch) || el.includes(contentSearch)){
                ingFilter(recipes,contentSearch);          
            }else{
                noMatch1 += 1;
            }
        })       
        recipes.forEach(function(el){
            if(el.name.toLowerCase().startsWith(contentSearch)
             || el.name.includes(contentSearch)
             || el.description.includes(contentSearch)){
                 titleAndDescFilter(recipes,contentSearch);
             }else{
                 noMatch2 += 1;
             }
        })                             
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
        ingArray.forEach(function(el){
            if(el.toLowerCase().startsWith(contentSearch) || el.includes(contentSearch)){
                document.getElementById('ing-' + el).style.display='block';
            }
        });       
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
        devArray.forEach(function(el){
            if(el.toLowerCase().startsWith(contentSearch) || el.includes(contentSearch)){
                document.getElementById('dev-' + el).style.display='block';             
            }
        })        
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
        utArray.forEach(function(el){
            if(el.toLowerCase().startsWith(contentSearch) || el.includes(contentSearch)){
                document.getElementById('ut-' + el).style.display='block';             
            }
        }) 
    }
    if(contentSearch == '' && choiceTagArray.length == 0){       
        Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'block');
        Array.prototype.forEach.call(itemUt,el => el.style.display = 'block'); 
    } 
}

/*Fonction de filtre par ingrédient lors de la saisie de l'input principale*/
function ingFilter(array,content){
    var arrayFilter = [];
    array.forEach(function(el){
        el.ingredients.forEach(function(el2){
            if(el2.ingredient.toLowerCase().startsWith(content) 
            || el2.ingredient.includes(content)){                
                arrayFilter.push(el.id);
            }
        })
    })    
    listTagFilter(recipes,arrayFilter,choiceTagArray);
}

/*Fonction de filtre par titre et description lors de la saisie de l'input principale*/
function titleAndDescFilter(array,content){
    var arrayFilter = [];
    array.forEach(function(el){
        if(el.name.toLowerCase().startsWith(content) || el.name.includes(content)){                       
            arrayFilter.push(el.id);
        }        
        if(el.description.toLowerCase().startsWith(content) || el.description.includes(content)){                               
            arrayFilter.push(el.id);            
        }
    })   
    listTagFilter(recipes,arrayFilter,choiceTagArray);
};

/*Fonction de filtre lorsque des tags sont activés*/
var idCardArrayInitial = [];
var idCardArrayFinal = [];
var idCardArrayFinal2 = [];
var idCardArrayFinal3 = [];
function tagFilter(mainArray,tagArray){
    tagArray.forEach(function(el){
        mainArray.forEach(function(el2){
            if(el === el2.appliance){
                idCardArrayInitial.push(el2.id);                
            }
            el2.ingredients.forEach(function(el3){
                if(el === el3.ingredient){
                    idCardArrayInitial.push(el2.id);
                }
            })
            el2.ustensils.forEach(function(el4){
                if(el === el4){
                    idCardArrayInitial.push(el2.id);
                }
            })             
        })
    })   

    idCardArrayInitial.sort((a,b)=>a-b);        
    if(tagArray.length == 1){
        listTagFilter(recipes,idCardArrayInitial,choiceTagArray);
    }else if(tagArray.length > 1){        
        idCardArrayInitial.forEach(function(el,pos,array){
            if(el === array[pos+1]){
                idCardArrayFinal.push(el);
            }
            if(el === array[pos-1] && el === array[pos+1]){
                idCardArrayFinal2.push(el);
            }
            if(el === array[pos-1] && el === array[pos+1] && el === array[pos+2]){
                idCardArrayFinal3.push(el);
            }                                
        })        
        listTagFilter(recipes,idCardArrayFinal,choiceTagArray);
        if(idCardArrayFinal2.length > 0){
            listTagFilter(recipes,idCardArrayFinal2,choiceTagArray);
        }
        if(idCardArrayFinal3.length > 0){
            listTagFilter(recipes,idCardArrayFinal3,choiceTagArray);
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
    tagArray.forEach(function(el){
        newRecipes.push(mainArray[el-1]);
    })       
    
    Array.prototype.forEach.call(recipeCtn,el => el.style.display = 'none');
    Array.prototype.forEach.call(item,el => el.style.display = 'none');
    Array.prototype.forEach.call(msgListEmpty,el => el.style.display = 'none');      
    
    newRecipes.forEach(function(el){
        document.getElementById(el.id).style.display = 'block';
        document.getElementById('dev-'+ el.appliance).style.display = 'block';
        el.ingredients.forEach(function(el2){
            document.getElementById('ing-'+ el2.ingredient).style.display = 'block';
        })
        el.ustensils.forEach(function(el3){
            document.getElementById('ut-'+ el3).style.display = 'block';
        })
    })
    
    tagChoice.forEach(function(el){
        ingArray.forEach(function(el2){
            if(el2 === el){
                document.getElementById('ing-' + el).style.display='none';             
            }
        })
        devArray.forEach(function(el3){
            if(el3 === el){
                document.getElementById('dev-' + el).style.display='none';             
            }
        })
        utArray.forEach(function(el4){
            if(el4 === el){
                document.getElementById('ut-' + el).style.display='none';             
            }
        })
    })
    
        
    
    if(newRecipes.length == 1){
        Array.prototype.forEach.call(item,el => el.style.display = 'none');
        Array.prototype.forEach.call(msgListEmpty,el => el.style.display = 'block');  
    }    
}