from mysqlconnection import connectToMySQL

class User:
    DB = 'users_schema';
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #create
    @classmethod
    def save(cls, data):
        query = """INSERT INTO users (first_name,last_name,email)
    		VALUES (%(first_name)s,%(last_name)s,%(email)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    #read
    @classmethod
    def get_all(cls):
        query = """SELECT * FROM users;"""
        result = connectToMySQL(cls.DB).query_db(query)
        all_users = []
        for row in result:
            all_users.append(cls(row))
        return all_users
    
    #read
    @classmethod
    def get_user_by_id(cls, data):
        query = """SELECT * FROM users
            WHERE id = %(user_id)s"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return cls(result[0])
    
    #update
    @classmethod
    def update_user(cls, data):
        query = """UPDATE users
            SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s
            WHERE id = %(user_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query, data) # data is coming from hidden input on update form, where %(user_id)s lines up with name="user_id"
        return result
    
    #delete
    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id = %(user_id)s;"
        result = connectToMySQL(cls.DB).query_db(query, data)
        return result