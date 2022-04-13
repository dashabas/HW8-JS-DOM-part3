const wrapper = document.querySelector('.wrapper');
const taskInput = document.querySelector('#task_input');
const taskList = document.querySelector('.list');

function addTask() {
    let liTask = document.createElement('li');
    liTask.dataset.action = 'change-task-status';
    if (taskInput.value === '') {
        liTask = '';
    } else {
        liTask.innerHTML = `${taskInput.value} <button class="btn_delete" data-action="delete-task">Удалить</button>`;
    }
    taskInput.value = '';
    taskList.append(liTask);
}

function changeTaskStatus(element) {
    element.classList.toggle('done_task');
}

function deleteTask(element) {
    if (element.classList.contains('btn_delete')) {
        element.closest('li').remove();
    }
}

wrapper.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
    let item = event.target;
    switch (action) {
        case 'add-task':
            addTask();
            break;
        case 'change-task-status':
            changeTaskStatus(item)
            break;
        case 'delete-task':
            deleteTask(item);
            break;
    }
});






