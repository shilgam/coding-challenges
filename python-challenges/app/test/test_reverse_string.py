# Write a function that reverses a string


def reverse_string(string):
    reversed = []

    for letter in string:
        reversed.insert(0, letter)

    return ''.join(reversed)


class TestReverseString:
    def test_normal(self):
        assert reverse_string("hello") == "olleh"

    def test_empty(self):
        assert reverse_string("") == ""
