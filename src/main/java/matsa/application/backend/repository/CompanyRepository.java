package matsa.application.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import matsa.application.backend.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    
}
