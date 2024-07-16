package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.StudentDTO;
import matsa.application.backend.mapper.StudentMapper;
import matsa.application.backend.model.Student;
import matsa.application.backend.repository.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository repository;

    public List<StudentDTO> findAll() {
        List<Student> students = repository.findAll();
    
        return students.stream()
        .map(StudentMapper.INSTANCE::studentToStudentDTO)
        .collect(Collectors.toList());
    }

    public StudentDTO findById(Long id) {
        Student student = repository.findById(id).orElseThrow();

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public StudentDTO create(Student obj) {
        Student student = repository.save(obj);

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public StudentDTO update(Student student) {
        //recebe o objeto atualizado, mas busca o antigo pelo id e o atualiza através do Student update
        Student update = repository.findById(student.getId()).orElseThrow();

        update.setFirstName(student.getFirstName());
        update.setLastName(student.getLastName());
        update.setBirthDate(student.getBirthDate());
        update.setCity(student.getCity());
        update.setAcademy(student.getAcademy());
        update.setDescription(student.getDescription());
        update.setUsername(student.getUsername());
        update.setPassword(student.getPassword());

        repository.save(update);

        return StudentMapper.INSTANCE.studentToStudentDTO(student);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
