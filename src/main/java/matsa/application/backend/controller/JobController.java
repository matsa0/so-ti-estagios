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

import matsa.application.backend.dto.JobDTO;
import matsa.application.backend.model.Job;
import matsa.application.backend.service.JobService;

@RestController
@RequestMapping("/api/v1/job")
@CrossOrigin("http://localhost:3000")
public class JobController {
    
    @Autowired
    private JobService service;

    @GetMapping
    public ResponseEntity<List<JobDTO>> findAll() {
        List<JobDTO> jobs = service.findAll();
        
        return new ResponseEntity<>(jobs, HttpStatus.OK); 
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobDTO> findById(@PathVariable Long id) {
        JobDTO job = service.findById(id);

        return ResponseEntity.ok().body(job);
    }

    @PostMapping
    public ResponseEntity<JobDTO> create(@RequestBody Job obj) {
        JobDTO job = service.create(obj);

        return new ResponseEntity<>(job, HttpStatus.CREATED);
    }       

    @PutMapping("/{id}")
    public ResponseEntity<JobDTO> update(@RequestBody Job obj) {
        JobDTO job = service.update(obj);

        return ResponseEntity.ok().body(job);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
