from dojos_and_ninjas.config.mysqlconnection import connectToMySQL

class Ninja:
    DB = 'dojos_and_ninjas_schema';
    def __init__( self , data ): #this needs to line up perfectly with our ninjas table, which is the only table in ninjas_schema
        self.id = data['id']
        # self.dojo_id = data['dojo_id'] # I guess you don't put this here?
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #create
    @classmethod
    def save(cls, data):
        query = """INSERT INTO ninjas (dojo_id, first_name,last_name,age)
    		VALUES (%(dojo_id)s, %(first_name)s,%(last_name)s,%(age)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    @classmethod
    def get_ninja_by_id(cls, data):
        query = """SELECT * FROM ninjas
            WHERE id = %(ninja_id)s"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return cls(result[0])
    