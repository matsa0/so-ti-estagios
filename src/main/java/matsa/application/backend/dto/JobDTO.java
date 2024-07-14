package matsa.application.backend.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"id", "title", "description", "location", "modality"})
public record JobDTO(
    Long id,
    String title,
    String description,
    String modality,
    String location
) {
    
}
