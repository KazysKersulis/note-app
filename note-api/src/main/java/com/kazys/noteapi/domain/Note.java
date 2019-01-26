package com.kazys.noteapi.domain;

import lombok.Data;

import java.util.Date;

//@Data
public class Note {

    private long id;
    private String content;
    private boolean archived;
    private Date created;

    public Note() {
    }

    public Note(long id, String content, boolean archived, Date created) {
        this.id = id;
        this.content = content;
        this.archived = archived;
        this.created = created;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
