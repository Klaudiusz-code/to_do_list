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
        <span>${inputTask.value}</span>
        <div class="btn-del">
        <input type="checkbox" id="btn_completed">
       
     </div>
        `;
        task.appendChild(newTask)
        inputTask.value = '';
    }
})

task.addEventListener('click', (e) =>{
    if(document.getElementById('btn_completed').checked){
        e.target.parentElement.parentElement.remove();

    }
})
