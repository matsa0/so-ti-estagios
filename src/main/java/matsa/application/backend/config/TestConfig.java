package matsa.application.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import matsa.application.backend.model.Company;
import matsa.application.backend.model.Job;
import matsa.application.backend.model.Student;
import matsa.application.backend.repository.CompanyRepository;
import matsa.application.backend.repository.JobRepository;
import matsa.application.backend.repository.StudentRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired 
    CompanyRepository companyRepository;

    @Override
    public void run(String... args) throws Exception {   
        System.out.println("Running tests...");
        System.out.println("Running tests...");
        System.out.println("Running tests...");
        System.out.println("Running tests...");
        Student st1 = new Student(null, "Matheus", "Azevedo", null, "João Monlevade", "Sistemas de Informação", "Hello! I'm looking for a job. Hire me!", "matsa", "12345");
        studentRepository.save(st1);
        
        Student st2 = new Student(null, "Gabriel", "Silva", null, "João Monlevade", "Sistemas de Informação", "Hello! I'm looking for a job. Hire me!", "matsa", "12345");
        studentRepository.save(st2);

        Job job = new Job(null, "Java full-stack developer", "Spring Boot and React Java full-stack developer.", "Remote", "Xique-Xique - Bahia");
        jobRepository.save(job);

        Company company = new Company(null, "Solartec", "12345678914561", "2010", "São Paulo, Brasil.");
        companyRepository.save(company);
    }
}
