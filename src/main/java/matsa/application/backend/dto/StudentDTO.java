package matsa.application.backend.dto;

import java.util.Date;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;

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
    String password
) {
    
}
