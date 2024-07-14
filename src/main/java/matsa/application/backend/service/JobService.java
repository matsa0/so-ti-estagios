package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.JobDTO;
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
        Job job = repository.findById(id).orElseThrow();

        return JobMapper.INSTANCE.jobToJobDTO(job);
    }
}
