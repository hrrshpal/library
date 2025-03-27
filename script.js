let myLibrary = []

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, read)

    myLibrary = []
    myLibrary.push(book)
    displayBooks(myLibrary)
}


function displayBooks(arr){
    // Selecting Books Area
    const books = document.querySelector("#books");
    arr.forEach((book) => {
        // Creating Card 
        const card = document.createElement("div")
        card.setAttribute("id","card");

        // Delete Card Button and Object
        const deleteCard = document.createElement("button")
        deleteCard.setAttribute("id", "deleteCard")
        deleteCard.textContent = "x"
        deleteCard.addEventListener("click", () => {
            // Removing the Card
            books.removeChild(card)
            // Removing data from object
            const index = myLibrary.findIndex(book => book.id === title.dataset.bookid)
            if(index !== -1){
                myLibrary.splice(index,1)
            }
        })
        //Appending Delete Card Button into Card
        card.appendChild(deleteCard)

        // Creating Details div to put into Card
        const details = document.createElement("div")
        details.setAttribute("id", "details")
        
        // Setting Title & ID
        const title = document.createElement("h2")
        title.setAttribute("id", "title")
        title.setAttribute("data-bookid", `${book.id}`)
        title.textContent = book.title;
        title.style.color = "Black"
        // Setting Author
        const author  = document.createElement("h4")
        author.setAttribute("id", "author")
        author.textContent = `by ${book.author}`;
        author.style.color = "#2F4F4F";
        // Setting Pages
        const pages = document.createElement("p")
        pages.setAttribute("id", "pages")
        pages.textContent = `${book.pages} pages`
        pages.style.color = "grey"
        // Setting Reading Status
        const read = document.createElement("p")
        read.setAttribute("id", "read")
        read.textContent = `${(read === true ? "read" : "not read yet")}`;
        read.style.color = "grey"
        // Appending all the properties into details div
        details.appendChild(title)
        details.appendChild(author)
        details.appendChild(pages)
        details.appendChild(read)

        // Appending details into Card
        card.appendChild(details)

        // Appending card into Books Area
        books.appendChild(card)
    })
}


const dialog = document.querySelector("dialog")
const addBtn = document.querySelector("#addBtn")
const addBook = document.querySelector("#addBook")
const closeDialog = document.querySelector("#closeDialog")

addBtn.addEventListener(("click"), ()=>{
    dialog.showModal()
})

addBook.addEventListener(("click"), ()=>{
    dialog.close()
})

closeDialog.addEventListener(("click"), ()=>{
    dialog.close()
})

const form = document.querySelector("form")
form.addEventListener(("submit"), (e)=>{
    e.preventDefault();
    const name = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    addBookToLibrary(name,author,pages,read)
    form.reset();
})
