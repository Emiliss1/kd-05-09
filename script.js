const taskValue = document.getElementById('taskInput');
const addItem = document.getElementById('add');
const itemContainer = document.getElementById('itemcontainer');
const totalTasks = document.getElementById('totaltasks');
const checkedTasks = document.getElementById('checkedtasks');
const removeAll = document.getElementById('removeall');


addItem.addEventListener('click', ()=> {
    const item = document.createElement('li');
    item.classList.add('item');
    itemContainer.appendChild(item);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '✓';
    checkBtn.classList.add('check');
    let checked = false
    checkBtn.addEventListener('click', () => {
        if(checked == false) {
            checkBtn.style.backgroundColor = 'rgba(84, 233, 109, 0.849)'
            checkBtn.style.color = 'green'
            itemText.style.textDecoration = 'line-through';
            item.classList.add('checked');
            checked = true
            countTasks();
        }

        else if(checked == true) {
            checkBtn.style.color = 'white'
            checkBtn.style.backgroundColor = 'transparent'
            itemText.style.textDecoration = 'none';
            item.classList.remove('checked');
            checked = false
            countTasks();
        }

    });
    item.appendChild(checkBtn);

    const itemText = document.createElement('p');
    itemText.innerHTML = taskValue.value;
    item.appendChild(itemText);

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', () => {
        item.remove();
        countTasks();
    });
    item.appendChild(removeBtn);

    removeAll.addEventListener('click', () => {
        item.remove();
        countTasks();
    });

    taskValue.value = '';
    countTasks();
});

function countTasks() {
    let total = document.querySelectorAll(".item");
    let itemChecks = document.querySelectorAll('.checked')

    totalTasks.innerHTML = `Total tasks: ${total.length}`;
    checkedTasks.innerHTML = `Checked tasks: ${itemChecks.length}`;
}



