from email_valid.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email:
    DB = 'email_valid_schema';
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #create a new author
    @classmethod
    def save(cls, data):
        query = """INSERT INTO emails (email)
    		VALUES (%(email)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result

    @classmethod
    def get_all(cls):
        query = """SELECT * FROM emails;"""
        result = connectToMySQL(cls.DB).query_db(query)
        all_emails = []
        for row in result:
            all_emails.append(cls(row))
        print(all_emails)
        return all_emails
    
    @staticmethod
    def validate_email(email):
        is_valid = True
        is_valid = True
        query = "SELECT * FROM emails WHERE email = %(email)s;"
        result = connectToMySQL(Email.DB).query_db(query,email)
        if len(result) >= 1:
            flash("Email already taken. Try again :)")
            is_valid=False
        if not EMAIL_REGEX.match(email['email']):
            flash("Invalid email address! Try again :)")
            is_valid = False
        return is_valid