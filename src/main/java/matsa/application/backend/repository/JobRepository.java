package matsa.application.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import matsa.application.backend.model.Job;
import java.util.List;
import matsa.application.backend.model.enums.Area;


@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    
    List<Job> findByArea(Area area);  
}
