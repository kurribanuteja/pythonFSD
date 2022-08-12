class Car:
    carCount = 0

def __init__{self, tiers, engine} -> None:
    self.tiers = tiers
    self.engine = engine
    Car.carCount += 1

@classmethod
def makeCar(cls):
    tiers = [Tier(43, "Rubber"), Tier(43, "Rubber"), Tier(43, "Rubber"), Tier(43, "Rubber")]
    return Car(tiers, Engine(50, 66))


class Engine:
    count = 0

    def __init__(self, strength: int, capacity: int) ->None:
        self.strength = strength
        self.capacity = capacity
        self.state = False
        self.power = 0
        Engine.count +=1

    def run(self,power):
        self.power = power
        self.state = True


class Tire:
    count = 0

    def __init__(self, radius: int, material: str) -> None:
        self.radius =radius
        self.material = material
        Tier.count += 1


temp =[]
for i in range(5):
    temp.append(Car.makeCar())

print(Engine.count)
print(Tier.count)
