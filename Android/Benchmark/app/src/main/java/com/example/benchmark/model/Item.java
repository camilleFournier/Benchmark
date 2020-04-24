package com.example.benchmark.model;

public class Item {
    public String mData;
    //1 for text, 2 for pictures
    public int mType;

    public Item(String data, boolean picture) {
        mData = data;
        mType = picture ? 2 : 1;
    }
}
