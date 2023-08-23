// Este adiciona as constantes ou seja, ele da valor as ações que serão realizadas
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
// aqui cria o espaço para escrever a tarefa e tambem o botão para adicionar
addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="completeButton">Concluir</button>`;
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
// esta parte faaz o botão de concluido, que faz a ação de riscar o nome da tarefa 
        const completeButton = taskItem.querySelector(".completeButton");
        completeButton.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });
    }
});