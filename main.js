	let inputToDo = document.querySelector('.input-to-do')
        
    inputToDo.addEventListener('keydown', function (e) {
      if (e.keyCode === 13){
          console.log(inputToDo.value)
      }
    });