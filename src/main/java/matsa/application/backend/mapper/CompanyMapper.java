package matsa.application.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import matsa.application.backend.dto.CompanyDTO;
import matsa.application.backend.model.Company;

@Mapper
public interface CompanyMapper {
    CompanyMapper INSTANCE = Mappers.getMapper(CompanyMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "cnpj", target = "cnpj")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "releaseYear", target = "releaseYear")
    @Mapping(source = "hqLocation", target = "hqLocation")
    @Mapping(source = "about", target = "about")
    CompanyDTO companyToCompanyDTO(Company company);
}
