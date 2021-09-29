// 1. figure the elements that needs function
// 2. create the function

// traversing DOM (child -> parent)

const goBtn = document.querySelector('.first-btn');
const backBtn = document.querySelector('.second-btn');

goBtn.addEventListener('click', function(x){
    const go = x.currentTarget.parentElement.parentElement;
    go.classList.toggle('show-action');
});

backBtn.addEventListener('click', function(y){
    const back = y.currentTarget.parentElement.parentElement;
    back.classList.remove('show-action');
});