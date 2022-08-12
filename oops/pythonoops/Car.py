
class car:
    def __init__(self, name, model) -> None:
        self.name = name
        self.model = model
        self.speed = 0
        self.dt=0


    def __str__(self) -> str:
        return f"car name is {self.name} of model {self.model} moving with the speed {self.speed} and dt is{self.dt}"