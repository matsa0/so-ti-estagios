package matsa.application.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import matsa.application.backend.dto.JobDTO;
import matsa.application.backend.model.Job;

@Mapper
public interface JobMapper {
    JobMapper INSTANCE = Mappers.getMapper(JobMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "location", target = "location")
    @Mapping(source = "modality", target = "modality")
    @Mapping(source = "area", target = "area")
    @Mapping(source = "company", target = "company")
    @Mapping(source = "students", target = "students")
    JobDTO jobToJobDTO(Job job);
}
