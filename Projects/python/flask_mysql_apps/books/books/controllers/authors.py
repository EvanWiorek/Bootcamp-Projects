from books import app
from flask import render_template,redirect,request,session,flash
from books.models.book import Book
from books.models.author import Author

@app.route('/create_author', methods=['POST'])
def create_author():
    Author.save(request.form)
    # print(request.form)
    return redirect('/authors')

@app.route('/authors')
def index():
    all_authors = Author.get_all_authors()
    # print(all_authors)
    return render_template("authors.html", all_authors = all_authors)

# Show all books
# @app.route('/authors/<int:id>')
# def show_one_author(id):
#     data = { 
#         "author_id": id
#     }
#     all_books = Book.get_all_books()
#     print(all_books)
#     book_faves_by_author_id = Author.get_book_faves_by_author_id(data)
#     return render_template("show_author.html", one_author = Author.get_author_by_id(data), book_faves_by_author_id = book_faves_by_author_id.books, all_books = all_books)

# Show remaining books
@app.route('/authors/<int:id>')
def show_one_author(id):
    data = { 
        "author_id": id
    }
    remaining_books = Book.unfavorited_books(data)
    # print(remaining_books)
    book_faves_by_author_id = Author.get_book_faves_by_author_id(data)
    return render_template("show_author.html", one_author = Author.get_author_by_id(data), book_faves_by_author_id = book_faves_by_author_id.books, remaining_books = remaining_books)

@app.route('/create_author', methods=['POST'])
def create():
    # print(request.form)
    Author.save(request.form)
    return redirect('/authors')

@app.route('/add_book_to_author_faves', methods=['POST'])
def add_to_authors_fave():
    Author.add_book_to_author_fave(request.form)
    return redirect(f'/authors/{request.form["author_id"]}')
