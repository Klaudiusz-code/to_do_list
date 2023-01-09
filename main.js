const inputTask = document.querySelector('.input');
const addBtn = document.querySelector('.btn-add');
const task = document.querySelector('.tasks');

inputTask.addEventListener('keyup', ()=>{
    if(inputTask.value.trim() !== 0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})
addBtn.addEventListener('click', () =>{
    if(inputTask.value.trim() !=0){
        const newTask = document.createElement('div');
        newTask.classList.add('list');
        newTask.innerHTML = `
    <input type="checkbox" id="btn_completed">
    <span>${inputTask.value}</span>
`;
        task.appendChild(newTask)
    }
})

task.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox' && e.target.checked) {
        e.target.parentElement.remove();
    }
});