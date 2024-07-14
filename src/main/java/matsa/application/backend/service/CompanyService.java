package matsa.application.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import matsa.application.backend.dto.CompanyDTO;
import matsa.application.backend.mapper.CompanyMapper;
import matsa.application.backend.model.Company;
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
        Company company = repository.findById(id).orElseThrow();

        return CompanyMapper.INSTANCE.companyToCompanyDTO(company);
    }
}
