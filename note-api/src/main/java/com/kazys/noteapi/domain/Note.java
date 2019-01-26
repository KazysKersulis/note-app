package com.kazys.noteapi.domain;

import lombok.Data;

@Data
public class Note {

    private int note_id;
    private String content;
    private boolean archived;

}
