class Book {
    title: string;
    author: string;
    year: number;
    isBorrowed: boolean;

    constructor(
        title: string, 
        author: string, 
        year: number, 
        isBorrowed: boolean = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = isBorrowed;
    }

    borrow() {
        this.isBorrowed = false;
    }

    returnBook() {
        this.isBorrowed = false;
    }
}

class User {
    name: string;
    borrowedBooks: Book[];
    
    constructor(name: string) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book: Book) {
        if (!book.isBorrowed) {
            this.borrowedBooks.push(book);
            book.borrow();
        }
    }

    returnBook(book: Book) {
        if (book.isBorrowed) {
            this.borrowedBooks = this.borrowedBooks.filter(b => b != book);
            book.returnBook();
        }
    }
}

class Library {
    books: Book[];
    
    constructor() {
        this.books = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    listAvailableBooks(): Book[] {
        return this.books.filter(b => b.isBorrowed === false);
    }
}

const library = new Library();
const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book("Wiedźmin", "Andrzej Sapkowski", 1993);
const book4 = new Book("Lalka", "Bolesław Prus", 1890);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

const user = new User("Wojtek");

console.log("Dostępne książki przed wypożyczeniem:");
console.log(library.listAvailableBooks());

user.borrowBook(book2);

console.log("Dostępne książki po wypożyczeniu:");
console.log(library.listAvailableBooks());
