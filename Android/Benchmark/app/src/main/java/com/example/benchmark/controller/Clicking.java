package com.example.benchmark.controller;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;

import com.example.benchmark.R;
import com.example.benchmark.controller.fragments.Header;
import com.example.benchmark.controller.fragments.PictureFragment;
import com.example.benchmark.controller.fragments.TextFragment;
import com.example.benchmark.model.PictureBank;
import com.example.benchmark.model.TextBank;

public class Clicking extends AppCompatActivity implements Header.OnFragmentInteractionListener, TextFragment.OnFragmentInteractionListener, PictureFragment.OnFragmentInteractionListener {
    private Header mHeaderFragment;
    private TextFragment mTextFragment;
    private PictureFragment mPictureFragment;
    private LinearLayout mContent;
    private TextBank mTextBank;
    private PictureBank mPictureBank;
    private FragmentManager mFragmentManager;

    private boolean mShowPicture = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_clicking);

        mTextBank = new TextBank();
        mPictureBank = new PictureBank();
        mFragmentManager = getSupportFragmentManager();
        mHeaderFragment = (Header) mFragmentManager.findFragmentById(R.id.clicking_header);
        mTextFragment = new TextFragment();
        mPictureFragment = new PictureFragment();
        mContent = (LinearLayout) findViewById(R.id.clicking_content_layout);

        mHeaderFragment.setTitle("Clicking");

        Bundle arg_content = new Bundle();
        arg_content.putString("text", mTextBank.next());
        mTextFragment.setArguments(arg_content);

        arg_content = new Bundle();
        arg_content.putString("name", mPictureBank.next());
        mPictureFragment.setArguments(arg_content);

        FragmentTransaction fragmentTransaction = mFragmentManager.beginTransaction();
        fragmentTransaction.add(R.id.clicking_content_layout, mTextFragment);
        fragmentTransaction.commit();

        mContent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mShowPicture) {
                    if (mPictureBank.end()) {
                        mPictureBank.reset();
                    }
                    mPictureFragment.setPicture(mPictureBank.next());
                } else {
                    if (mTextBank.end()) {
                        mTextBank.reset();
                    }
                    mTextFragment.setText(mTextBank.next());
                }
            }
        });


    }

    @Override
    public void onFragmentInteraction(Uri uri){
        //you can leave it empty
    }

    @Override
    public void onChangingContent(boolean showPicture) {
        mShowPicture = showPicture;
        FragmentTransaction fragmentTransaction = mFragmentManager.beginTransaction();
        Bundle arg_content = new Bundle();
        if (mShowPicture) {
            fragmentTransaction.replace(R.id.clicking_content_layout, mPictureFragment);
        } else {
            fragmentTransaction.replace(R.id.clicking_content_layout, mTextFragment);
        }
        fragmentTransaction.commit();
    }


}
