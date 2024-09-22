package matsa.application.backend.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import matsa.application.backend.model.Company;
import matsa.application.backend.model.enums.Area;
import matsa.application.backend.model.enums.JobModality;

@JsonPropertyOrder({"id", "title", "description", "location", "modality", "company", "area"})
public record JobDTO(
    Long id,
    String title,
    String description,
    JobModality modality,
    String location,
    Company company,
    Area area
) {
    
}
