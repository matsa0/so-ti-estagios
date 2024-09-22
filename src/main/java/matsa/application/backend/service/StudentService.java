package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.StudentDTO;
import matsa.application.backend.exception.AlreadyAppliedException;
import matsa.application.backend.exception.ResourceNotFoundException;
import matsa.application.backend.mapper.StudentMapper;
import matsa.application.backend.model.Job;
import matsa.application.backend.model.Student;
import matsa.application.backend.repository.JobRepository;
import matsa.application.backend.repository.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository repository;
    @Autowired
    private JobRepository jobRepository;

    public List<StudentDTO> findAll() {
        List<Student> students = repository.findAll();
    
        return students.stream()
        .map(StudentMapper.INSTANCE::studentToStudentDTO)
        .collect(Collectors.toList());
    }

    public StudentDTO findById(Long id) {
        Student student = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public StudentDTO create(Student obj) {
        Student student = repository.save(obj);

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public StudentDTO applyForJob(Long studentId, Long jobId) {
        Student student = repository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException(studentId));
        Job job =  jobRepository.findById(jobId).orElseThrow(() -> new ResourceNotFoundException(jobId));

        if(student.getJobs().contains(job)) {
            throw new AlreadyAppliedException(jobId);
        }

        student.getJobs().add(job);
        repository.save(student);

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public StudentDTO update(Student student) {
        //recebe o objeto atualizado, mas busca o antigo pelo id e o atualiza através do Student update
        Student update = repository.findById(student.getId()).orElseThrow(() -> new ResourceNotFoundException(student.getId()));

        update.setFirstName(student.getFirstName());
        update.setLastName(student.getLastName());
        update.setBirthDate(student.getBirthDate());
        update.setCity(student.getCity());
        update.setAcademy(student.getAcademy());
        update.setDescription(student.getDescription());
        update.setEmail(student.getEmail());
        update.setPassword(student.getPassword());

        repository.save(update);

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch(Exception e) {
            throw new ResourceNotFoundException(id);
        }
    }
}
