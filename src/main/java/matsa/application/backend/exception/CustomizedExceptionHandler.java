package matsa.application.backend.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionBody> handleGeneralExceptions(Exception ex, WebRequest wr) {
        ExceptionBody eBody = new ExceptionBody(LocalDateTime.now(), HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(), wr.getDescription(false));

        return new ResponseEntity<>(eBody, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public final ResponseEntity<ExceptionBody> handleResourceNotFoundException(Exception ex, WebRequest wr) {
        ExceptionBody eBody = new ExceptionBody(LocalDateTime.now(), HttpStatus.NOT_FOUND, ex.getMessage(), wr.getDescription(false));

        return new ResponseEntity<>(eBody, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(AlreadyAppliedException.class)
    public final ResponseEntity<ExceptionBody> handleAlreadyAppliedException(Exception ex, WebRequest wr) {
        ExceptionBody eBody = new ExceptionBody(LocalDateTime.now(), HttpStatus.CONFLICT, ex.getMessage(), wr.getDescription(false));

        return new ResponseEntity<>(eBody, HttpStatus.CONFLICT);
    }
}
