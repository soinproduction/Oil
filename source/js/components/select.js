import {addCustomClass, toggleCustomClass, removeCustomClass } from "../functions/customFunctions";

const closeSelect = function (selectBody, select, className = "active") {
  selectBody.style.height = 0;
  removeCustomClass(select, className);
};

const openSelect = function (selectBody, select, className = "active") {
  selectBody.style.height = selectBody.scrollHeight + "px";
  addCustomClass(select, className);
};

const checkIsSelectOpen = function (select) {
  return select.classList.contains('active');
};

const selects = document.querySelectorAll("[data-select]");
if (selects.length) {
  selects.forEach((select) => {
    const selectCurrent = select.querySelector(".select__current");
    const selectInput = select.querySelector(".select__input");
    const selectOptions = [...select.querySelectorAll("svg")];
    const selectBody = select.querySelector(".select__body");

    selectOptions.forEach((option) => {
      option.style.pointerEvents = "none";
    });

    if (selectInput) {
      const currentId = selectCurrent.getAttribute("data-id");
      selectInput.value = currentId;
    }

    select.addEventListener("click", (e) => {
      e.preventDefault();
      const isSelectOpen = checkIsSelectOpen(select);
      const target = e.target;
      const elementType = target.dataset.type;
      const innerSelect = target.innerHTML;
      const items = select.querySelectorAll(".select__list [data-id]");
      const currentItem = select.querySelector(`.select__list [data-id='${selectInput.value}']`);

      if (elementType === "option") {
        selectCurrent.innerHTML = innerSelect;
        selectInput.value = target.getAttribute("data-id");
        selectCurrent.setAttribute("data-id", target.getAttribute("data-id"));
      }

      items.forEach((item) => {
        item.style.display = "flex";
      });
      currentItem.style.display = "none";

      isSelectOpen ? closeSelect(selectBody, select) : openSelect(selectBody, select);
    });

    document.addEventListener("click", function (event) {
      if (!select.contains(event.target)) {
        closeSelect(selectBody, select);
      }
    });
  });
}



