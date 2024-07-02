
// const inputBox = document.getElementById("input-box");
// const datePicker = document.getElementById("date-picker");
// const listContainer = document.getElementById("list-container");



// // Set the date input to the current date
// function setCurrentDate() {
//     const today = new Date().toISOString().split('T')[0];
//     datePicker.value = today;
// }

// function addTask() {
//     if (inputBox.value === '') {
//         alert("Please enter a task");
//     } else {
//         let li = document.createElement("li");
//         const taskDate = datePicker.value;
//         li.innerHTML = `${inputBox.value} (Due: ${taskDate})`;
//         listContainer.appendChild(li);

//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);

//         // Reset input and date to current date
//         inputBox.value = '';
//         setCurrentDate();
//     }
//     saveData();
// }

// listContainer.addEventListener("click", function(e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// document.addEventListener('DOMContentLoaded', function() {
//     setCurrentDate();
//     showTask();
// Add event listener for the Enter key
// const inputBox = document.getElementById("input-box");
// inputBox.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Prevent the default form submission
//         addTask();
//     }
// });

// // Event listeners for modal
// document.getElementById('login-btn').addEventListener('click', openModal);
// document.querySelector('.close').addEventListener('click', closeModal);

// });



// function openModal() {
//     document.getElementById('modal').style.display = 'block';
// }

// function closeModal() {
//     document.getElementById('modal').style.display = 'none';
// }



document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    showTasks();

    // Add event listener for the Enter key
    const inputBox = document.getElementById("input-box");
    inputBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            addTask();
        }
    });

    // Event listeners for modal
    document.getElementById('login-btn').addEventListener('click', openModal);
    document.querySelector('.close').addEventListener('click', closeModal);
});

function setCurrentDate() {
    const datePicker = document.getElementById("datePicker");
    if (datePicker) {
        const today = new Date().toISOString().split('T')[0];
        datePicker.value = today;
    }
}

function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value === '') {
        alert("Please enter a task");
    } else {
        const datePicker = document.getElementById("datePicker");
        const task = {
            description: inputBox.value,
            date: datePicker ? datePicker.value : new Date().toISOString().split('T')[0]
        };

        // Add task to list (LI)
        let li = document.createElement("li");
        li.innerHTML = `${task.description} (Due: ${task.date})`;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.onclick = function() {
            li.remove();
            saveData();
        };

        inputBox.value = '';
        setCurrentDate(); // Reset the date picker to today's date
        saveData();
    }
}

const listContainer = document.getElementById("list-container");
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = localStorage.getItem("data") || '';
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}




