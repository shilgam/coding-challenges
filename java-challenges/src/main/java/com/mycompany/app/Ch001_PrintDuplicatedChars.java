package com.mycompany.app;

import java.util.ArrayList;
import java.util.List;

public class Ch001_PrintDuplicatedChars {

    /**
     * Finds duplicate characters in the string ("gabcdec"), and print them with their count
     */
    public void printDuplicatedChars(String inputString) {
        getDuplicatedChars(inputString).printPairs();
    }

    public PairList getDuplicatedChars(String inputString) {
        PairList pairList = new PairList();

        for (int i = 0; i < inputString.length(); i++) {
            int counter = 0;
            char firstChar = 0;

            for (int j = 0; j < inputString.length(); j++) {
                firstChar = inputString.charAt(i);
                char currentChar = inputString.charAt(j);
                if (firstChar == currentChar) {
                    counter = counter + 1;
                }
            }
            if (counter > 1) {
                if (!pairList.containsKey(firstChar)) {
                    pairList.addPair(firstChar, counter);
                }
            }
        }

        return pairList;
    }


public static class PairList {
    private List<Pair> pairs;

    public PairList() {
        pairs = new ArrayList<>();
    }

    public void addPair(char key, int value) {
        pairs.add(new Pair(key, value));
    }

    public boolean containsKey(char key) {
        for (Pair pair : pairs) {
            if (pair.getKey() == key) {
                return true;
            }
        }
        return false;
    }

    public Object getCountByValue(char key) {
        for (Pair pair : pairs) {
            if (pair.getKey() == key) {
                return pair.getValue();
            }
        }
        return null;
    }

    public void printPairs() {
        for (Pair pair : pairs) {
            System.out.println(pair);
        }
    }

    class Pair {
        char key;
        int value;

        public Pair(char key, int value) {
            this.key = key;
            this.value = value;
        }

        public char getKey() {
            return key;
        }

        public int getValue() {
            return value;
        }

        @Override
        public String toString() {
            return "(" + key + ", " + value + ")";
        }
    }
}
}
