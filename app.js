var userTask = document.querySelector("#userTask")
        var ol = document.querySelector("ol")
        var globalArr = []

        function addTask(){
            globalArr.push(userTask.value) 

            ol.innerHTML = "";
            for(var  i=0;i<globalArr.length;i++){
                ol.innerHTML += `
                <li>${globalArr[i]}
                    <button onclick="remove(${i})">delete</button>
                    <button onclick="edit(${i})">edit</button>
                    </li>
                `
            }
            userTask.value = ""
        }
        function remove(i){
            globalArr.splice(i, 1)

            ol.innerHTML = "";
            for(var  i=0;i<globalArr.length;i++){
                ol.innerHTML += `
                <li>${globalArr[i]}
                    <button onclick="remove(${i})">delete</button>
                    <button onclick="edit(${i})">edit</button>
                    </li>
                `
            }

        }
        function edit(i){
            var newTask = prompt("enter new task")
            globalArr[i]= newTask

            ol.innerHTML = "";
            for(var  i=0;i<globalArr.length;i++){
                ol.innerHTML += `
                <li>${globalArr[i]}
                    <button onclick="remove(${i})">delete</button>
                    <button onclick="edit(${i})">edit</button>
                    </li>
                `
            }
        }