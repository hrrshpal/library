const myLibrary = []

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(read === false ? "not read yet" : "read")}`
    }
}

function addBookToLibrary(title, author, pages,read){
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, pages, read)
    myLibrary.push(book)
}


let book1 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)
let book2 = addBookToLibrary("Harry Potter", "Ryan Gosling", 500, false)


function displayBooks(arr){
    const books = document.querySelector("#books");
    arr.forEach((book) => {
        const card = document.createElement("div")
        card.setAttribute("id","card");

        const details = document.createElement("div")
        details.setAttribute("id", "details")

        const title = document.createElement("h1")
        title.setAttribute("id", "title")
        title.textContent = book.title;

        const author  = document.createElement("h3")
        author.setAttribute("id", "author")
        author.textContent = book.author;

        const pages = document.createElement("p")
        pages.setAttribute("id", "pages")
        pages.textContent = book.pages;

        const read = document.createElement("p")
        read.setAttribute("id", "read")
        read.textContent = book.read;

        details.appendChild(title)
        details.appendChild(author)
        details.appendChild(pages)
        details.appendChild(read)

        card.appendChild(details)

        books.appendChild(card)
    })
}


displayBooks(myLibrary);
