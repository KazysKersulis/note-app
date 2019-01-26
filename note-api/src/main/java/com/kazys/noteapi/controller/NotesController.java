package com.kazys.noteapi.controller;

import com.kazys.noteapi.domain.Note;
import com.kazys.noteapi.service.NoteService;
import com.kazys.noteapi.viewmodel.NoteViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class NotesController {

    @Autowired
    private NoteService noteService;

    @GetMapping(value = "/notes")
    @ResponseBody
    public List<Note> getAllNotes() {
        return noteService.getNotes();
    }

    @PostMapping(value = "/notes")
    public void createNote(@RequestBody NoteViewModel noteViewModel, BindingResult bindingResult) throws ValidationException {

        if (!bindingResult.hasErrors()) {
            noteService.createNote(noteViewModel);
        } else {
            throw new ValidationException("Note has errors!");
        }
    }

    @PostMapping(value = "/archive/{id}")
    public void archiveNote(@PathVariable Long id) {
        noteService.archive(id);
    }


}
