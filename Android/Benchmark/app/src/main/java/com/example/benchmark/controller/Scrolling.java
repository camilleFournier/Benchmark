package com.example.benchmark.controller;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.net.Uri;
import android.os.Bundle;

import com.example.benchmark.R;
import com.example.benchmark.controller.fragments.Header;
import com.example.benchmark.model.Item;
import com.example.benchmark.model.ItemAdapter;
import com.example.benchmark.model.PictureBank;
import com.example.benchmark.model.TextBank;

import java.util.ArrayList;
import java.util.List;

public class Scrolling extends AppCompatActivity implements Header.OnFragmentInteractionListener{
    private Header mHeader;
    private TextBank mTextBank = new TextBank();
    private PictureBank mPictureBank = new PictureBank();
    private boolean mShowPicture = false;
    private RecyclerView mRecyclerView;
    private ItemAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scrolling);

        mHeader = (Header) getSupportFragmentManager().findFragmentById(R.id.scrolling_header);
        mHeader.setTitle("Scrolling");

        mRecyclerView = findViewById(R.id.scrolling_recyclerview);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(layoutManager);

        mAdapter = new ItemAdapter(createTextList());
        mRecyclerView.setAdapter(mAdapter);

    }

    private List<Item> createTextList() {
        mTextBank.reset();
        List<Item> list = new ArrayList();
        while(!mTextBank.end()) {
            list.add(new Item(mTextBank.next(), false));
        }
        mTextBank.reset();
        return list;
    }

    private List<Item> createPictureList() {
        mPictureBank.reset();
        List<Item> list = new ArrayList();
        while(!mPictureBank.end()) {
            list.add(new Item(mPictureBank.next(), true));
        }
        mPictureBank.reset();
        return list;
    }

    @Override
    public void onFragmentInteraction(Uri uri){
        //you can leave it empty
    }

    public void onChangingContent(boolean showPicture) {
        mShowPicture = showPicture;
        List<Item> list = showPicture ? createPictureList() : createTextList();
        mAdapter.setData(list);
    }
}
