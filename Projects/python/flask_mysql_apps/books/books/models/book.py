from books.config.mysqlconnection import connectToMySQL
from books.models import author

class Book:
    DB = 'books_schema';
    def __init__( self , data ):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.authors = []
    
    @classmethod
    def save(cls, data):
        query = """INSERT INTO books (title, num_of_pages)
    		    VALUES (%(title)s, %(num_of_pages)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    @classmethod
    def get_all_books(cls):
        query = """SELECT * FROM books;"""
        result = connectToMySQL(cls.DB).query_db(query)
        # print(result)
        all_books = []
        for row in result:
            all_books.append(cls(row))
        # print(all_books)
        return all_books
    
    @classmethod
    def get_author_faves_by_book_id(cls, data):
        query = """SELECT * FROM books
                    LEFT JOIN favorites ON favorites.book_id = books.id
                    LEFT JOIN authors ON favorites.author_id = authors.id
                    WHERE books.id = %(book_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query, data)
        author_faves_by_book_id = cls(result[0])
        # print(result)
        for row_from_db in result:
            author_data = {
                "id" : row_from_db["authors.id"],
                "name" : row_from_db["name"],
                "created_at" : row_from_db["authors.created_at"],
                "updated_at" : row_from_db["authors.updated_at"]
            }
            author_faves_by_book_id.authors.append(author.Author(author_data))
        # print(author_faves_by_author_id.books)
        return author_faves_by_book_id
    
    @classmethod
    def unfavorited_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN ( SELECT book_id FROM favorites WHERE author_id = %(author_id)s);"
        books = []
        results = connectToMySQL(cls.DB).query_db(query,data)
        for row in results:
            books.append(cls(row))
        return books
    
    @classmethod
    def get_book_by_id(cls, data):
        query = """SELECT * FROM books
            WHERE id = %(book_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def add_author_to_book_fave(cls, data):
        query = """INSERT INTO favorites (author_id, book_id)
                    VALUES (%(author_id)s, %(book_id)s);
        """
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    