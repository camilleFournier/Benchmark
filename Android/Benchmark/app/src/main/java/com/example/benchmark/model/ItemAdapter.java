package com.example.benchmark.model;

import android.content.Context;
import android.content.res.Resources;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.benchmark.R;

import java.util.List;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class ItemAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {
    public List<Item> mListData;

    public ItemAdapter(List<Item> list) {
        mListData = list;
    }

    public void setData(List<Item> list) {
        mListData = list;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        if (viewType == 1) {
            View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.fragment_text, parent, false);
            return new TextViewHolder(view);
        } else if (viewType == 2) {
            View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.fragment_picture, parent, false);
            return new PictureViewHolder(view);
        }
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        switch (holder.getItemViewType()) {
            case 1:
                initText((TextViewHolder) holder, position);
                break;
            case 2:
                initPicture((PictureViewHolder) holder, position);
                break;
             default: break;
        }
    }

    @Override
    public int getItemCount() {
        return mListData.size();
    }

    @Override
    public int getItemViewType(int position) {
        int type = mListData.get(position).mType;
        return type;
    }

    private void initPicture(PictureViewHolder holder, int position) {
        Context context =  holder.imageView.getContext();
        int picture_id = context.getResources().getIdentifier(mListData.get(position).mData, "drawable", context.getPackageName());
        holder.imageView.setImageDrawable(context.getResources().getDrawable(picture_id));
    }

    private void initText(TextViewHolder holder, int position) {
        holder.textView.setText(mListData.get(position).mData);
    }

    static class PictureViewHolder extends RecyclerView.ViewHolder {
        public ImageView imageView;
        public PictureViewHolder(View itemView) {
            super(itemView);
            imageView = itemView.findViewById(R.id.picturefragment_content);
        }
    }

    static class TextViewHolder extends RecyclerView.ViewHolder {
        public TextView textView;
        public TextViewHolder(View itemView) {
            super(itemView);
            textView = itemView.findViewById(R.id.textfragment_content);
        }
    }
}
