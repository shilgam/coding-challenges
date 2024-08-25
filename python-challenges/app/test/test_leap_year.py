# Define a method to determine whether a year is a leap year

# Правила:
# * если не делится без остатка на 4 - невисокосный;
# * если делится без остатка на 4 - високосный;
# * на 100 - невисокосный;
# * на 400 - високосный.


def leap(year):
    if (year % 400 == 0):
        return True

    if (year % 100 == 0):
        return False

    if (year % 4 == 0):
        return True

    return False


class TestLeapYear:
    def test_leap(self):
        assert leap(1600) is True
        assert leap(2000) is True

    def test_not_leap(self):
        assert leap(1700) is False
        assert leap(1800) is False
        assert leap(1801) is False
