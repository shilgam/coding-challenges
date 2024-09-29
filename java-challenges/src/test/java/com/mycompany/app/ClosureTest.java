package com.mycompany.app;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ClosureTest {
    /**
     * Note: Lambda expressions allow concise function definitions. However, they still require
     * a functional interface (an interface with a single abstract method).
     */
    @FunctionalInterface
    interface Counter {
        int next();
    }

    /**
     * Creates a counter function which returns the current count.
     */
    private Counter makeCounter() {
        final int[] count = {0}; /* Hack to give us a mutable variable */

        return () -> count[0]++; /* In Java, we can define a nested function using a lambda expression */

    }

    @Test
    public void testClosure() {
        Counter counter = makeCounter();

        assertEquals(0, counter.next());
        assertEquals(1, counter.next());
        assertEquals(2, counter.next());
    }
}
