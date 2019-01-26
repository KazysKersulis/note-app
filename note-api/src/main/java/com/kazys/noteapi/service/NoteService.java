package com.kazys.noteapi.service;

import com.kazys.noteapi.domain.Note;
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

//    public List<Note> getNotes() {
//        return dsl
//                .selectFrom(Tables.NOTES)
//                .fetch()
//                .stream()
//                .map(e -> mapper.map(e, Note.class))
//                .collect(Collectors.toList());
//    }
}
