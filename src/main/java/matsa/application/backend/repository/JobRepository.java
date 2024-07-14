package matsa.application.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import matsa.application.backend.model.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    
}
