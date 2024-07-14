package matsa.application.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matsa.application.backend.dto.JobDTO;
import matsa.application.backend.service.JobService;

@RestController
@RequestMapping("/api/job/v1")
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
}
