class Product:
    
    all_products = []
    
    def __init__(self, product_name, price, category):
        self.product_name = product_name
        self.price = price
        self.category = category
        Product.all_products.append(self)
    
    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price *= (1.00+percent_change)
        if is_increased == False:
            self.price *= (percent_change)
        return self
    
    def print_info(self):
        print(f"{self.product_name}, {self.category}, {self.price}")
        return self
    
    @classmethod
    def print_product_list(cls):
        for product in cls.all_products:
            print(f"Product Name: {product.product_name}\nPrice: {product.price}\nCategory: {product.category}\n")
        return cls


class Store():
    
    products_in_store = []

    def __init__(self, store_name, product_list):
        self.store_name = store_name
        self.product_list = product_list

    @classmethod
    def add_product(cls, new_product):
        cls.products_in_store.append(new_product)
        return cls
    
    # @classmethod #^using range(len())
    # def inflation(cls, percent_change, is_increased):
    #     for x in range(len(cls.products_in_store)):
    #         if is_increased == True:
    #             cls.products_in_store[x].price *= (1.00+percent_change)
    #         if is_increased == False:
    #             cls.products_in_store[x].price *= (percent_change)
    #     return cls
    
    @classmethod #^products in store is a list. Need to address it properly
    def inflation(cls, percent_change, is_increased):
        for x in cls.products_in_store:
            if is_increased == True:
                x.price *= (1.00+percent_change)
            if is_increased == False:
                x.price *= (percent_change)
        return cls
    
    @classmethod
    def sell_product(cls, id):
        cls.products_in_store.pop(id)
        return cls

    @classmethod
    def all_products_in_store(cls):
        product_count = 0
        for product in cls.products_in_store:
            product_count +=1
            print(f"Product Name: {product.product_name}\nPrice: {product.price}\nCategory: {product.category}\n")
        print(f"This store is currently selling {product_count} items.\n")
        return cls




example_store = Store("Example Store", [])

vans = Product("Vans", 59.99, "Shoe")
converse = Product("Converse", 39.99, "Shoe")
dress = Product("Dress Shoe", 99.99, "Shoe")

# example_store.add_product(vans).add_product(converse).all_products_in_store().sell_product(0).all_products_in_store()

example_store.add_product(vans).add_product(converse).add_product(dress)

example_store.inflation(.5, True).all_products_in_store()

# Product.print_product_list()

# example = ["Product 1", "Product 2", "Product 3"]