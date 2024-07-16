package matsa.application.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import matsa.application.backend.dto.CompanyDTO;
import matsa.application.backend.model.Company;
import matsa.application.backend.service.CompanyService;

@RestController
@RequestMapping("/api/company/v1")
public class CompanyController {
    
    @Autowired
    private CompanyService service;

    @GetMapping
    public ResponseEntity<List<CompanyDTO>> findAll() {
        List<CompanyDTO> companies = service.findAll();

        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompanyDTO> findById(@PathVariable Long id) {
        CompanyDTO company = service.findById(id);

        return ResponseEntity.ok().body(company);
    }

    @PostMapping
    public ResponseEntity<CompanyDTO> create(@RequestBody Company obj) {
        CompanyDTO company = service.create(obj);

        return new ResponseEntity<>(company, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CompanyDTO> update(@RequestBody Company obj) {
        CompanyDTO company = service.update(obj);

        return new ResponseEntity<>(company, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
