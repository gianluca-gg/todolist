const inpuText = document.querySelector(".inputText");
const addButton = document.querySelector(".buttonNewTask");
const taskParagraph = document.querySelector(".taskDone");
const label = document.querySelector(".checkboxLabel");
const dot = document.querySelector(".dot");
const taskDescription = document.querySelector(".taskDescription");
const notCompleted = document.querySelector(".notCompleted");
const completed = document.querySelector(".completed");
const checkboxInput = document.querySelector(".priorityCheck");
const imgTrash = document.querySelector(".trashicon");
const addTaskMobile = document.querySelector(".addTaskMobile");
const addClass = document.querySelector(".addClass");
const cross = document.querySelector(".cross");
const todolist = document.querySelector(".todolist");
const navigation = document.querySelector(".navigation");

addButton.addEventListener("click", addList);

function addList(e) {
  const newLi = document.createElement("li");
  newLi.classList.add("newContent");
  notCompleted.appendChild(newLi);
  const newDiv = document.createElement("div");
  newDiv.classList.add("modalTask");
  newLi.appendChild(newDiv);
  const checkDiv = document.createElement("div");
  checkDiv.classList.add("checkDiv");
  newDiv.appendChild(checkDiv);
  const newCheck = document.createElement("label");
  newCheck.classList.add("checkboxLabel");
  checkDiv.appendChild(newCheck);
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newCheck.appendChild(newInput);
  const newSpan = document.createElement("span");
  newSpan.classList.add("checkbox-custom");
  newCheck.appendChild(newSpan);
  const circleDiv = document.createElement("div");
  circleDiv.classList.add("circleDiv");
  newDiv.appendChild(circleDiv);

  if (checkboxInput.checked) {
    const newCircle = document.createElement("img");
    newCircle.setAttribute("src", "circlepriority.svg");
    newCircle.classList.add("dotPriority");
    circleDiv.appendChild(newCircle);
    notCompleted.prepend(newLi);
  } else {
    const newCircle = document.createElement("img");
    newCircle.setAttribute("src", "circle.svg");
    newCircle.classList.add("dot");
    circleDiv.appendChild(newCircle);
  }

  const taskTitle = document.createElement("p");
  taskTitle.classList.add("taskTitle");
  circleDiv.appendChild(taskTitle);
  taskTitle.innerHTML = "Task";
  const crossDiv = document.createElement("div");
  crossDiv.classList.add("crossDiv");
  newDiv.appendChild(crossDiv);
  const crossModal = document.createElement("img");
  crossModal.setAttribute("src", "cross.svg");
  crossModal.classList.add(".cross");
  crossDiv.appendChild(crossModal);

  const paragraphDiv = document.createElement("div");
  paragraphDiv.classList.add("paragraphDiv");
  newDiv.appendChild(paragraphDiv);
  const newParagraph = document.createElement("p");
  newParagraph.innerText = inpuText.value;
  paragraphDiv.appendChild(newParagraph);
  newParagraph.classList.add("taskDescription");
  const trashDiv = document.createElement("div");
  trashDiv.classList.add("trashDiv");
  newDiv.appendChild(trashDiv);
  const newTrash = document.createElement("img");
  newTrash.setAttribute("src", "TestWebDesigner_assets/icon-trash.svg");
  newTrash.classList.add("trashicon");
  trashDiv.appendChild(newTrash);
  const newButtonModalDiv = document.createElement("div");
  newButtonModalDiv.classList.add("newButtonModalDiv");
  newDiv.appendChild(newButtonModalDiv);
  const newButtonModal = document.createElement("button");
  newButtonModal.classList.add("newButtonModal");
  newButtonModalDiv.appendChild(newButtonModal);
  newButtonModal.innerHTML = "COMPLETE";

  newCheck.addEventListener("click", function () {
    const parent = newLi;
    parent.remove();
    completed.appendChild(parent);
    newParagraph.classList.remove("taskDescription");
    newParagraph.classList.add("taskDone");
    newInput.setAttribute("disabled", "disabled");
    newInput.setAttribute("checked", "checked");
    newCheck.classList.remove("input:hover");
    newCheck.classList.remove("checkbox-custom:hover");
    newCheck.classList.remove("checkbox-custom::after");
  });

  newTrash.addEventListener("click", function () {
    const parent = newLi;
    parent.remove();
  });

  newLi.style.display = "block";

  crossModal.addEventListener("click", function () {
    newLi.style.display = "none";
  });

  newButtonModalDiv.addEventListener("click", function () {
    newLi.classList.remove("newContentAlternative");
    newLi.classList.add("newContent");
    const parent = newLi;
    parent.remove();
    completed.appendChild(newLi);
    newParagraph.classList.remove("taskDescription");
    newParagraph.classList.add("taskDone");
    newLi.style.position = "unset";
    trashDiv.style.display = "none";
    taskTitle.style.display = "none";
    crossDiv.style.display = "none";
    newCheck.style.display = "block";
    newButtonModalDiv.style.display = "none";
    newDiv.classList.remove("modalTaskMobile");
    newDiv.classList.add("modalTask");
    addClass.style.display = "block";
  });

  var mq = window.matchMedia("(max-width: 640px)");
  if (mq.matches) {
    addClass.style.display = "none";
    newLi.addEventListener("click", function () {
      addClass.style.display = "none";
      newLi.classList.remove("newContent");
      newLi.classList.add("newContentAlternative");
      newCheck.style.display = "none";
      trashDiv.style.display = "block";
      taskTitle.style.display = "inline";
      crossDiv.style.display = "block";
      newButtonModalDiv.style.display = "block";
      newDiv.classList.remove("modalTask");
      newDiv.classList.add("modalTaskMobile");
    });
  } else {
    return;
  }
}

inpuText.addEventListener("keyup", function () {
  if (inpuText.value == null || inpuText.value == "") {
    addButton.classList.remove("buttonNewTaskEnabled");
    addButton.classList.add("buttonNewTask");
  } else {
    addButton.classList.remove("buttonNewTask");
    addButton.classList.add("buttonNewTaskEnabled");
  }
  return;
});

addTaskMobile.addEventListener("click", function () {
  addClass.style.display = "block";
});

cross.addEventListener("click", function () {
  addClass.style.display = "none";
});
