function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.button-group > button')[i].removeAttribute('class');
    }
}

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

const bsCollapse = new bootstrap.Collapse('#myCollapse', {
  toggle: false
})

