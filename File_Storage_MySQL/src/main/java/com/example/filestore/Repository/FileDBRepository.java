package com.example.filestore.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.filestore.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {
    
}

