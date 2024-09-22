package matsa.application.backend.dto;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import matsa.application.backend.model.Job;

@JsonPropertyOrder({"id", "firstName", "lastName", "birthDate", "academy", "description", "city", "email"})
public record StudentDTO(
    Long id,
    String firstName,
    String lastName,
    Date birthDate,
    String city,
    String academy,
    String description,
    String email,
    String password,
    Set<Job> jobs
) {
    
}
