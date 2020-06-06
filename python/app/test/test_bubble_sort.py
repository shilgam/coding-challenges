# implement Bubble Sort


def buble_sort(list):
    size = len(list)
    sorted = list.copy()

    for j in range(size - 1):
        for i in range(size - 1 - j):
            if (sorted[i] > sorted[i + 1]):
                temp = sorted[i]
                sorted[i] = sorted[i + 1]
                sorted[i + 1] = temp

    return sorted


class TestBubleSort:
    def test_buble_sort(self):
        input = [5, 4, 2, 3, 1]
        sorted = [1, 2, 3, 4, 5]
        assert buble_sort(input) == sorted

        # input data not changed
        assert input == [5, 4, 2, 3, 1]
