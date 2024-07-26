package matsa.application.backend.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import matsa.application.backend.model.enums.JobModality;

@JsonPropertyOrder({"id", "title", "description", "location", "modality"})
public record JobDTO(
    Long id,
    String title,
    String description,
    JobModality modality,
    String location
) {
    
}
