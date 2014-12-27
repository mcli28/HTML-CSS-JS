// too tighly coupled
var word = library.shelves[0].books[0].pages[0].words[10];

// loolely coupled
var shelf = library.getShelfAt(0);
var book = shelf.getBookAt(0);
var page = book.getPageAt(0);
var word = page.getWordAt(10);
