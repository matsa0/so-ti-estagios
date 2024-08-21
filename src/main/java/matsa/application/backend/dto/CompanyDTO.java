package matsa.application.backend.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"id", "name", "cnpj", "releaseYear", "hqLocation"})
public record CompanyDTO(
    Long id,
    String name,
    String cnpj,
    String password,
    String releaseYear,
    String hqLocation
) {
    
}
