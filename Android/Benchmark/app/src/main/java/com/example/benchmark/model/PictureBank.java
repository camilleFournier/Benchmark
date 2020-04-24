package com.example.benchmark.model;

public class PictureBank {
    private int  mCurrent;
    private int mMaxIndex = 20;

    public PictureBank() {
        this.reset();
    }

    public void reset() {
        mCurrent = 0;
    }

    public String next() {
        mCurrent ++;
        return String.format("picture%d", mCurrent);
    }

    public boolean end() {
        return mCurrent >= mMaxIndex;
    }
}
