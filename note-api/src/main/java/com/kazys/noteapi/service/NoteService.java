package com.kazys.noteapi.service;

import com.kazys.noteapi.Tables;
import com.kazys.noteapi.domain.Note;
import com.kazys.noteapi.viewmodel.NoteViewModel;
import org.jooq.DSLContext;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    DSLContext dsl;

    public List<Note> getNotes() {
        return dsl
                .selectFrom(Tables.NOTES_)
                .fetch()
                .stream()
                .map(e -> mapper.map(e, Note.class))
                .collect(Collectors.toList());
    }

    public void createNote(NoteViewModel noteViewModel) {
        dsl.insertInto(Tables.NOTES_)
                .columns(Tables.NOTES_.CONTENT)
                .values(noteViewModel.getContent())
                .execute();
    }

    public void archive(Long id) {
        dsl.update(Tables.NOTES_)
                .set(Tables.NOTES_.ARCHIVED, true)
                .where(Tables.NOTES_.ID.equal(id.intValue()))
                .execute();
    }
}
