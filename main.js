const refs = {
    formEl: document.querySelector('#form'),
    inputEl: document.querySelector('#input'),
    listEl : document.querySelector('#list'),
    totalEl: document.querySelector('#total'),
    doneEl: document.querySelector('#done'),
}

refs.formEl.addEventListener('submit', onClickButton)
refs.listEl.addEventListener('click', onClickCross)

function onClickButton (event){
    event.preventDefault()
    const value = refs.inputEl.value.trim();
    const li = document.createElement('li')
    if (value === '') return;
    li.innerHTML = `<span>${value}</span> <button>✖</button>`;
    refs.listEl.append(li)
    refs.inputEl.value = ''
        updateCounters()

}
function onClickCross(event){
    if(event.target.tagName === 'BUTTON'){
        event.target.closest('li').remove()
        updateCounters()
    }else if (event.target.tagName === 'SPAN'){
        event.target.closest('li').classList.toggle('done')
        updateCounters()
    }
}

function updateCounters(){
    refs.totalEl.textContent = refs.listEl.children.length
    refs.doneEl.textContent = refs.listEl.querySelectorAll('.done').length

}