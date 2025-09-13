const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


let tasks = [
    { id: 1, text: 'Пример: купить продукты', done: false },
    { id: 2, text: 'Пример: отправить отчёт', done: true },
];


function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.done ? ' done' : '');


        const cb = document.createElement('div');
        cb.className = 'checkbox';
        cb.innerHTML = task.done ? '✓' : '';
        cb.title = task.done ? 'Отметка: выполнено' : 'Отметить как выполненное';
        cb.addEventListener('click', () => { task.done = !task.done; renderTasks(); });


        const txt = document.createElement('div');
        txt.className = 'text';
        txt.textContent = task.text;


        li.appendChild(cb);
        li.appendChild(txt);
        taskList.appendChild(li);
    });
}


function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
// короткая визуальная подсказка: подсветить поле
        taskInput.classList.add('invalid');
        setTimeout(()=>taskInput.classList.remove('invalid'), 700);
        return;
    }
    const id = Date.now();
    tasks.unshift({ id, text, done: false });
    taskInput.value = '';
    renderTasks();
}


addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') addTask(); });


// initial render
renderTasks();