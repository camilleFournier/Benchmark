package com.example.benchmark.controller.fragments;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import com.example.benchmark.R;


/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link Header.OnFragmentInteractionListener} interface
 * to handle interaction events.
 * Use the {@link Header#newInstance} factory method to
 * create an instance of this fragment.
 */
public class Header extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_TITLE = "title";

    // TODO: Rename and change types of parameters
    private boolean mShowPicture;
    private ImageButton mContentBtn;
    private ImageButton mHomeBtn;
    private TextView mTitle;
    private String mTitleText;

    private OnFragmentInteractionListener mListener;

    public Header() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param title Parameter 1.
     * @return A new instance of fragment Header.
     */
    // TODO: Rename and change types and number of parameters
    public static Header newInstance(String title) {
        Header fragment = new Header();
        Bundle args = new Bundle();
        args.putString(ARG_TITLE, title);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mTitleText = getArguments().getString(ARG_TITLE);
        }

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        final View view = inflater.inflate(R.layout.fragment_header, container, false);
        mTitle = view.findViewById(R.id.header_title);
        mHomeBtn = (ImageButton) view.findViewById(R.id.home_btn);
        mHomeBtn.setOnClickListener(new View.OnClickListener() {
            public  void onClick(View v) {
                /*Intent homeActivity = new Intent(getActivity(), MainActivity.class);
                startActivity(homeActivity);*/
                getActivity().finish();
            }
        });
        mContentBtn = (ImageButton) view.findViewById(R.id.content_btn);
        mContentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mShowPicture = !mShowPicture;
                if (mShowPicture) {
                    mContentBtn.setImageResource(R.drawable.ic_image_black_24dp);
                } else {
                    mContentBtn.setImageResource(R.drawable.ic_text_fields_black_24dp);
                }
                mListener.onChangingContent(mShowPicture);

            }
        });

        return view;
    }

    public void setTitle(String title) {
        mTitle.setText(title);
    }


    // TODO: Rename method, update argument and hook method into UI event
    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
            mListener.onFragmentInteraction(uri);
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnFragmentInteractionListener) {
            mListener = (OnFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        void onFragmentInteraction(Uri uri);
        void onChangingContent(boolean showPicture);
    }
}
