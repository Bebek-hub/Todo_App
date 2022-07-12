let todoArray = [];


function todoElements() {
    const createButn = document.getElementById('js_submit');

    const form = document.getElementById('js_form');

    const addButn = document.getElementById('js_addButn');

    // let todoItems = new Map();
    // todoItems.set(form, "The form")
    // todoItems.set(date, "The date and time")
    // todoItems.set(description, "The description")





    createButn.addEventListener("click", createTodo);
    function createTodo() {
        form.style.display = "flex";
        createButn.style.display = "none";
    };

    addButn.addEventListener("click", addTodo);
    function addTodo() {
        form.preventDefault();
    };

    // todoArray.push(todoItems);
    // console.log(todoArray)
}

todoElements()
