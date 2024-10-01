package matsa.application.backend.dto;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import matsa.application.backend.model.Company;
import matsa.application.backend.model.enums.Area;
import matsa.application.backend.model.enums.JobModality;

@JsonPropertyOrder({"id", "title", "description", "location", "modality", "area", "company"})
public record JobDTO(
    Long id,
    String title,
    String description,
    JobModality modality,
    String location,
    Area area,
    Company company,
    Set<StudentIdDTO> students
) {
    
}
