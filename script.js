const myLibrary = []

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(read === true ? "read" : "not read yet")}`
    }
}

function addBookToLibrary(title, author, pages,read){
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, read)
    myLibrary.push(book)
}


let book1 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)
let book2 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)
let book3 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)
let book4 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)


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
        const title = document.createElement("h1")
        title.setAttribute("id", "title")
        title.setAttribute("data-bookid", `${book.id}`)
        title.textContent = book.title;
        // Setting Author
        const author  = document.createElement("h3")
        author.setAttribute("id", "author")
        author.textContent = book.author;
        // Setting Pages
        const pages = document.createElement("p")
        pages.setAttribute("id", "pages")
        pages.textContent = book.pages;
        // Setting Reading Status
        const read = document.createElement("p")
        read.setAttribute("id", "read")
        read.textContent = `${(read === true ? "read" : "not read yet")}`;
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


displayBooks(myLibrary);
console.log(myLibrary)
