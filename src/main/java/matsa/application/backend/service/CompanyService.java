package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.CompanyDTO;
import matsa.application.backend.dto.JobDTO;
import matsa.application.backend.exception.ResourceNotFoundException;
import matsa.application.backend.mapper.CompanyMapper;
import matsa.application.backend.mapper.JobMapper;
import matsa.application.backend.model.Company;
import matsa.application.backend.model.Job;
import matsa.application.backend.repository.CompanyRepository;

@Service
public class CompanyService {
    
    @Autowired
    private CompanyRepository repository;

    public List<CompanyDTO> findAll() {
        List<Company> companies = repository.findAll();
        
        //converte a lista de company para uma stream de company e a cada elemento, é aplicado o método companyToCompanyDTO
        return companies.stream()
        .map(CompanyMapper.INSTANCE::companyToCompanyDTO)
        .collect(Collectors.toList());
    }

    public CompanyDTO findById(Long id) {
        Company company = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));

        return CompanyMapper.INSTANCE.companyToCompanyDTO(company);
    }

    public CompanyDTO create(Company obj) {
        Company company = repository.save(obj);

        return CompanyMapper.INSTANCE.companyToCompanyDTO(company);
    }

    public JobDTO publishJob(Long companyId, Job obj) {
        Company company = repository.findById(companyId)
        .orElseThrow(() -> new ResourceNotFoundException(companyId));

        obj.setCompany(company);
        company.getJobs().add(obj);

        repository.save(company);

        return JobMapper.INSTANCE.jobToJobDTO(obj);
    }

    public CompanyDTO update(Company obj) {
        Company update = repository.findById(obj.getId()).orElseThrow(() -> new ResourceNotFoundException(obj.getId()));

        update.setName(obj.getName());
        update.setCnpj(obj.getCnpj());
        update.setReleaseYear(obj.getReleaseYear());
        update.setHqLocation(obj.getHqLocation());
        update.setAbout(obj.getAbout());
        
        repository.save(update);

        return CompanyMapper.INSTANCE.companyToCompanyDTO(update);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch(Exception e) {
            throw new ResourceNotFoundException(id);
        }
    }
}
