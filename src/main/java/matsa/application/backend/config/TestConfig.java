package matsa.application.backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;

import matsa.application.backend.model.Company;
import matsa.application.backend.model.Job;
import matsa.application.backend.model.Student;
import matsa.application.backend.model.enums.Area;
import matsa.application.backend.model.enums.JobModality;
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

    @Autowired
    private Environment env;
    
    @Override
    public void run(String... args) throws Exception {   
        if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
            System.out.println("Running tests...");
            System.out.println("Running tests...");
            System.out.println("Running tests...");
            System.out.println("Running tests...");
            Student st1 = new Student(null, "Matheus", "Azevedo", null, "João Monlevade", "Sistemas de Informação", "Universidade Federal de Ouro Preto", "Hello! I'm looking for a job. Hire me!", "matsa@gmail.com", "12345");
            studentRepository.save(st1);
            
            Student st2 = new Student(null, "Gabriel", "Silva", null, "João Monlevade", "Sistemas de Informação", "Universidade Federal de Ouro Preto", "Hello! I'm looking for a job. Hire me!", "gab@gmail.com", "12345");
            studentRepository.save(st2);
    
            Company company = new Company(null, "Solartec", "12345678914561","1234", "2010", "São Paulo, Brasil.", "Solartec, uma empresa de tecnologia solar.");
            companyRepository.save(company);
    
            Job job = new Job(null, "Java full-stack developer", "Spring Boot and React Java full-stack developer.", JobModality.REMOTE, "Xique-Xique - Bahia", Area.SOFTWARE_DEVELOPMENT, company);
            jobRepository.save(job);
        }
    }
}
