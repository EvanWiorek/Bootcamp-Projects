class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, *nums):
        for a in nums:
            self.result += a
        return self

    def subtract(self, *nums):
        for a in nums:
            self.result -= a
        return self
    
    def display_result(self):
        print(self.result)
        return self

md = MathDojo()

md.add(2).display_result()
md.add(2,5,1).display_result()
md.subtract(3,2).display_result()

