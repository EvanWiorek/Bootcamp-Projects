from books.config.mysqlconnection import connectToMySQL
from books.models import book

class Author:
    DB = 'books_schema';
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.books = []
    
    #create a new author
    @classmethod
    def save(cls, data):
        query = """INSERT INTO authors (name)
    		VALUES (%(name)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    @classmethod
    def get_all_authors(cls):
        query = """SELECT * FROM authors;"""
        result = connectToMySQL(cls.DB).query_db(query)
        all_authors = []
        for row in result:
            all_authors.append(cls(row))
        print(all_authors)
        return all_authors
    
    @classmethod
    def get_author_by_id(cls, data):
        query = """SELECT * FROM authors
            WHERE id = %(author_id)s"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return cls(result[0])
    
    #all the authors favorite books by id
    @classmethod
    def get_book_faves_by_author_id(cls, data):
        query = """SELECT * FROM authors
                    LEFT JOIN favorites ON favorites.author_id = authors.id
                    LEFT JOIN books ON favorites.book_id = books.id
                    WHERE authors.id = %(author_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query, data)
        book_faves_by_author_id = cls(result[0])
        # print(result)
        for row_from_db in result:
            book_data = {
                "id" : row_from_db["books.id"],
                "title" : row_from_db["title"],
                "num_of_pages" : row_from_db["num_of_pages"],
                "created_at" : row_from_db["books.created_at"],
                "updated_at" : row_from_db["books.updated_at"]
            }
            book_faves_by_author_id.books.append(book.Book(book_data))
        # print(author_faves_by_author_id.books)
        return book_faves_by_author_id
    
    # grabs all the remaining authors to be added to the books favorited list
    @classmethod
    def unfavorited_authors(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN ( SELECT author_id FROM favorites WHERE book_id = %(book_id)s );"
        authors = []
        results = connectToMySQL(cls.DB).query_db(query,data)
        for row in results:
            authors.append(cls(row))
        return authors
    
    #update authors faves
    @classmethod
    def add_book_to_author_fave(cls, data):
        query = """INSERT INTO favorites (author_id, book_id)
                    VALUES (%(author_id)s, %(book_id)s);
        """
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result