from books import app
from books.controllers import books
from books.controllers import authors


if __name__ == "__main__":
    app.run(debug=True)