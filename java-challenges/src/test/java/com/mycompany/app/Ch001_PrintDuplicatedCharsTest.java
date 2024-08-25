package com.mycompany.app;

import org.junit.Assert;
import org.junit.Test;

public class Ch001_PrintDuplicatedCharsTest {
    private final Ch001_PrintDuplicatedChars analyser = new Ch001_PrintDuplicatedChars();

    @Test
    public void printDuplicatedCharsTest() {
        System.out.println(">>> An example of using a production method:");
        analyser.printDuplicatedChars("gabcdecdddd");
        /*
         * (c, 2)
         * (d, 5)
         */
        Assert.assertTrue(true);

    }

    @Test
    public void getDuplicatedCharsTest() {
        Ch001_PrintDuplicatedChars.PairList pairList = analyser.getDuplicatedChars("gabcdec");

        Assert.assertEquals(pairList.getCountByValue('g'), null);
        Assert.assertEquals(pairList.getCountByValue('a'), null);
        Assert.assertEquals(pairList.getCountByValue('c'), 2);
    }

    @Test
    public void getDuplicatedCharsEmptyTest() {
        Ch001_PrintDuplicatedChars.PairList pairList = analyser.getDuplicatedChars("");

        Assert.assertEquals(pairList.getCountByValue('g'), null);
        Assert.assertEquals(pairList.getCountByValue('a'), null);
        Assert.assertEquals(pairList.getCountByValue('c'), null);
    }
}
