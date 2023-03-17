from dojo_survey.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    DB = 'dojo_survey_schema';
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #create a new author
    @classmethod
    def save(cls, data):
        query = """INSERT INTO dojos (name, location, language, comment)
    		VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    @staticmethod
    def validate_survey(dojo):
        is_valid = True

        if len(dojo['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if dojo['location'] == "--Select a Location--":
            flash("Must select a location.")
            is_valid = False
        if dojo['language'] == "--Select a Language--":
            flash("Must select a language.")
            is_valid = False
        if len(dojo['comment']) < 3:
            flash("Comment must be at least 3 characters.")
            is_valid = False
        return is_valid
    

    # @classmethod
    # def get_all_authors(cls):
    #     query = """SELECT * FROM authors;"""
    #     result = connectToMySQL(cls.DB).query_db(query)
    #     all_authors = []
    #     for row in result:
    #         all_authors.append(cls(row))
    #     print(all_authors)
    #     return all_authors