# Define a class Person and its two child classes: Male and Female.
# All classes have a method "getGender" which can print "Male" for Male class
# and "Female" for Female class.


class Person:
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender


class Male(Person):
    def __init__(self, name):
        Person.__init__(self, name, "male")


class Female(Person):
    def __init__(self, name):
        Person.__init__(self, name, "female")


class TestPerson:
    def test_person(self):
        person = Person("John", "male")
        assert person.name == "John"
        assert person.gender == "male"

    def test_male(self):
        man = Male("John")
        assert man.name == "John"
        assert man.gender == "male"

    def test_female(self):
        woman = Female("Kate")
        assert woman.name == "Kate"
        assert woman.gender == "female"
