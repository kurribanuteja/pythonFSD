from Car import car
class Employee:
    def __init__(self, name, dpt, empCode) -> None:
        self.employee_name = name
        self.employee_department = dpt
        self.employee_code = empCode
        self.things = []

    def addThing(self, obj):
            self.things.append(obj)

    def __str__(self) -> str:
        return f"{ self.employee_name} - { self.employee_department} : - {self.employee_code}"


emp_1 = Employee("Banu Teja", "IT", "fe555")
arr = []
for i in range(1):
    arr.append(Employee(input("Name :"), input("Department :"), input("Code :")))
    
for emp in arr:
    print(emp)

arr[0].addThing(car("kia", "xlv"))
print(arr[0].things[0])