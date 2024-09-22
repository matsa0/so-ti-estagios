package matsa.application.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class AlreadyAppliedException extends RuntimeException {
    
    public AlreadyAppliedException(Long id) {
        super("Student already applied for job with id: " + id);
    }
}
