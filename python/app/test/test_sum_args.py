# Написать функцию которая принимает аргументы списком/кортежем
# и произведет суммирование всех аргументов.

# Пример:
# >f(1, 2, 3)
# 6
#
# > f([1, 2, 3,])
# 6
#
# > f((3, 5, 6,))
# 14
#
# > f(3, (5, 6,))
# 14
#
# RELATED TO: Unpacking With the Asterisk Operator (*)


def sum_args(*args):
    acc = 0

    for arg in args:
        if isinstance(arg, (tuple, list)):
            acc = acc + sum(arg)
        else:
            acc = acc + arg

    return acc


class TestSumArgs:
    def test_with_plain_args(self):
        assert sum_args(1, 2, 3) == 6

    def test_with_nested_lists(self):
        assert sum_args(1, [2, 3]) == 6

    def test_with_nested_tuples(self):
        assert sum_args(1, (2, 3)) == 6
