
class ListToDoItem  {
	constructor(textToDo){
		this.textToDo = textToDo;
	}
	render() {
		return`
		<li class="list-to-do-item">
		<span>${this.textToDo}</span>
		<input class="checkbox" type="checkbox">
		</li>
		`
	}
}

class ListToDo {
	constructor(){
		this.toDoItem = []
	}
	addToDoItem(text){
		this.toDoItem.push({textToDo: text})
	}
	fetchToDoItem(){
		this.toDoItem = [
			{textToDo: "Hallo World"},
			{textToDo: "Hallo World"},
			{textToDo: "Hallo World"},
		]
	}
	render(){
		let toDoHtml = ""
		this.toDoItem.forEach((textToDo) =>{
			const toDoItem = new ListToDoItem (textToDo.textToDo)
			toDoHtml += toDoItem.render()
		})
		document.querySelector('.list-to-do').innerHTML = toDoHtml
	}
}

class ListDone{
	constructor(){
		this.doneItem = []
	}
	
	fetchDone(){
		this.doneItem =[]
	}

	returnToToDoItem(){

	}
}

const runToDo = new ListToDo()
runToDo.fetchToDoItem()
runToDo.render()



//! уберает таск из inbox
	let addToDone = document.querySelectorAll('.checkbox')
	addToDone.forEach(elem => {
  	elem.addEventListener('click',function(e) {
    let currentItem = e.currentTarget
    console.log(currentItem)
	});
//runToDo.render()
});
	
//! Cоздает новый таск в inbox
let inputToDo = document.querySelector('.input-to-do')
    inputToDo.addEventListener('keydown', function (e) {
      if (e.keyCode === 13){
		runToDo.addToDoItem(inputToDo.value)
		console.log(inputToDo.value)
	  }
	  runToDo.render()
	});