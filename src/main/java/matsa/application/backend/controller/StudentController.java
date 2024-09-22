package matsa.application.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matsa.application.backend.dto.StudentDTO;
import matsa.application.backend.model.Student;
import matsa.application.backend.service.StudentService;

@RestController
@RequestMapping("/api/v1/student")
@CrossOrigin("http://localhost:3000")
public class StudentController {
    
    @Autowired
    private StudentService service;

    @GetMapping
    public ResponseEntity<List<StudentDTO>> findAll() {
        List<StudentDTO> students = service.findAll();

        return new ResponseEntity<>(students, HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> findById(@PathVariable Long id) {
        StudentDTO student = service.findById(id);

        return ResponseEntity.ok().body(student);
    }

    @PostMapping
    public ResponseEntity<StudentDTO> create(@RequestBody Student obj) {
        StudentDTO student = service.create(obj);

        return ResponseEntity.status(HttpStatus.CREATED).body(student);
    }

    @PostMapping("/{id}/apply/{jobId}")
    public ResponseEntity<StudentDTO> applyForJob(@PathVariable("id") Long studentId, @PathVariable Long jobId) {
        StudentDTO student = service.applyForJob(studentId, jobId);

        return ResponseEntity.status(HttpStatus.CREATED).body(student);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentDTO> update(@RequestBody Student obj) {
        StudentDTO student = service.update(obj);

        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }
}
