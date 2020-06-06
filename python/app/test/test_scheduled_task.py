# Name #1: Implement a job scheduler which takes in a function f and
# an integer n, and calls f after n milliseconds.
#
# Name #2: Call a Function Repeatedly after Fixed Time Interval
#
from time import sleep


def print_hello():
    return "do some work!"


def scheduler(func, delay):
    delay_in_ms = delay / 1000
    sleep(delay_in_ms)
    return func()


class TestScheduler:
    def test_scheduler(self):
        assert scheduler(print_hello, 0) == "do some work!"
