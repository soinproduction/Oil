import { removeClassInArray,addCustomClass, removeCustomClass } from "../functions/customFunctions";

const filterBtns = document.querySelectorAll('.filter-buttons__btn');

if(filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
      removeClassInArray(filterBtns);
      addCustomClass(this)
    })
  })
}
