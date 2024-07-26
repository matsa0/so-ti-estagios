package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.JobDTO;
import matsa.application.backend.exception.ResourceNotFoundException;
import matsa.application.backend.mapper.JobMapper;
import matsa.application.backend.model.Job;

import matsa.application.backend.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository repository;

    public List<JobDTO> findAll() {
        List<Job> jobs = repository.findAll();

        return jobs.stream()
        .map(JobMapper.INSTANCE::jobToJobDTO)
        .collect(Collectors.toList());
    }

    public JobDTO findById(Long id) {
        Job job = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));

        return JobMapper.INSTANCE.jobToJobDTO(job);
    }

    public JobDTO create(Job obj) {
        Job job = repository.save(obj);
        
        return JobMapper.INSTANCE.jobToJobDTO(job);
    }

    public JobDTO update(Job obj) {
        Job update = repository.findById(obj.getId()).orElseThrow(() -> new ResourceNotFoundException(obj.getId()));
    
        update.setTitle(obj.getTitle());
        update.setModality(obj.getModality());
        update.setLocation(obj.getLocation());
        update.setDescription(obj.getDescription());

        repository.save(update);

        return JobMapper.INSTANCE.jobToJobDTO(update);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch(Exception e) {
            throw new ResourceNotFoundException(id);
        }
    }
}
