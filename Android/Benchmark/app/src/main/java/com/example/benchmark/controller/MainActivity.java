package com.example.benchmark.controller;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.benchmark.R;

public class MainActivity extends AppCompatActivity {
    private Button mScrollingBtn;
    private Button mClickingBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mScrollingBtn = findViewById(R.id.scrolling_btn);
        mClickingBtn = findViewById(R.id.clicking_btn);

        mScrollingBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent scrollingActivity = new Intent (MainActivity.this, Scrolling.class);
                startActivity(scrollingActivity);
            }
        });

        mClickingBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent clickingActivity = new Intent(MainActivity.this, Clicking.class);
                startActivity(clickingActivity);
            }
        });



    }
}
