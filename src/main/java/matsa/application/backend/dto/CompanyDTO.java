package matsa.application.backend.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import matsa.application.backend.model.Job;

@JsonPropertyOrder({"id", "name", "cnpj", "releaseYear", "hqLocation", "about", "jobs"})
public record CompanyDTO(
    Long id,
    String name,
    String cnpj,
    String password,
    String releaseYear,
    String hqLocation,
    String about,
    List<Job> jobs
) {
    
}
