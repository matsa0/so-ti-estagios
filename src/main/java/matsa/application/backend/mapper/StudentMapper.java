package matsa.application.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import matsa.application.backend.dto.StudentDTO;
import matsa.application.backend.dto.StudentIdDTO;
import matsa.application.backend.model.Student;

@Mapper
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);
    
    @Mapping(source = "id", target = "id")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(source = "birthDate", target = "birthDate")
    @Mapping(source = "city", target = "city")
    @Mapping(source = "college", target = "college")
    @Mapping(source = "academy", target = "academy")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "jobs", target = "jobs")
    StudentDTO studentToStudentDTO(Student student);

    @Mapping(source = "id", target = "id")
    StudentIdDTO studentToStudentIdDTO(Student student);
}
