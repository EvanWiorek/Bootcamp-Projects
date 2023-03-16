from books import app
from flask import render_template,redirect,request,session,flash
from books.models.book import Book
from books.models.author import Author

@app.route('/')
def route_correction():
     return redirect('/authors')

@app.route('/books')
def display_book_page():
    all_books = Book.get_all_books()
    return render_template("books.html", all_books = all_books)

@app.route('/create_book', methods=['POST'])
def create_book():
    Book.save(request.form)
    # print(request.form)
    return redirect('/books')

# list all authors
# @app.route('/books/<int:id>')
# def show_one_book(id):
#     data = { 
#         "book_id": id
#     }
#     all_authors = Author.get_all_authors()
#     # print(all_authors)
#     author_faves_by_book_id = Book.get_author_faves_by_book_id(data)
#     return render_template("show_book.html", one_book = Book.get_book_by_id(data), author_faves_by_book_id = author_faves_by_book_id.authors, all_authors = all_authors)

# List only remaining authors
@app.route('/books/<int:id>')
def show_one_book(id):
    data = { 
        "book_id": id
    }
    remaining_authors = Author.unfavorited_authors(data)
    # print(remaining_authors)
    author_faves_by_book_id = Book.get_author_faves_by_book_id(data)
    return render_template("show_book.html", one_book = Book.get_book_by_id(data), author_faves_by_book_id = author_faves_by_book_id.authors, remaining_authors = remaining_authors)

@app.route('/add_author_to_book_fave', methods=['POST'])
def add_author_to_book_fave():
    Book.add_author_to_book_fave(request.form)
    return redirect(f'/books/{request.form["book_id"]}')

@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")