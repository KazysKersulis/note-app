package com.kazys.noteapi.viewmodel;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class NoteViewModel {

    @NotNull
    @Min(5)
    private String content;

    public String getContent() {
        return content;
    }
}
