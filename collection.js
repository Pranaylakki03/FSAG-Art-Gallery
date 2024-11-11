
var collectionList = document.querySelectorAll(".painting-item")
var search = document.getElementById("search")


search.addEventListener("keyup",  function(){

    var enteredValue = event.target.value.toUpperCase()

    for(count=0; count<collectionList.length; count=count+1){
           
        var collectionName = collectionList[count].querySelector("p").textContent

        if(collectionName.toUpperCase().indexOf(enteredValue)<0){
            collectionList[count].style.display ="none"

        }
        else{
            collectionList[count].style.display ="block"

        }

    }

    

})
