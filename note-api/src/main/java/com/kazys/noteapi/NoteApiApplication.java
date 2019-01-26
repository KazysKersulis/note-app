package com.kazys.noteapi;

import org.modelmapper.ModelMapper;
import org.modelmapper.jooq.RecordValueReader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NoteApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(NoteApiApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().addValueReader(new RecordValueReader());
        return mapper;
    }

}

