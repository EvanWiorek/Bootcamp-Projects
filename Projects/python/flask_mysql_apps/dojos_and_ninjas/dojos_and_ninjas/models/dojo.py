from dojos_and_ninjas.config.mysqlconnection import connectToMySQL
from dojos_and_ninjas.models import ninja

class Dojo:
    DB = 'dojos_and_ninjas_schema';
    def __init__( self , data ): #this needs to line up perfectly with our dojos table, which is the only table in dojos_schema
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []
    
    @classmethod
    def save(cls, data):
        query = """INSERT INTO dojos (name)
    		    VALUES (%(name)s);"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return result
    
    @classmethod
    def get_all(cls):
        query = """SELECT * FROM dojos;"""
        result = connectToMySQL(cls.DB).query_db(query)
        all_dojos = []
        for row in result:
            all_dojos.append(cls(row))
        print(all_dojos)
        return all_dojos
    
    @classmethod
    def get_all_ninjas_in_dojo(cls, data):
        query = """SELECT * FROM dojos
                    LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id
                    WHERE dojos.id = %(dojo_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query, data)
        ninjas_in_dojo = cls(result[0])
        # print(result)
        for row_from_db in result:
            ninja_data = {
                "id" : row_from_db["ninjas.id"],
                "first_name" : row_from_db["first_name"],
                "last_name" : row_from_db["last_name"],
                "age" : row_from_db["age"],
                "created_at" : row_from_db["ninjas.created_at"],
                "updated_at" : row_from_db["ninjas.updated_at"]
            }
            ninjas_in_dojo.ninjas.append(ninja.Ninja(ninja_data))
        print(ninjas_in_dojo.ninjas)
        return ninjas_in_dojo
    
    @classmethod
    def get_dojo_by_id(cls, data):
        query = """SELECT * FROM dojos
            WHERE id = %(dojo_id)s;"""
        result = connectToMySQL(cls.DB).query_db(query,data)
        return cls(result[0])
    