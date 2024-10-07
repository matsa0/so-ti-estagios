package matsa.application.backend.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "company")
public class Company implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 30)
    private String name;
    @Column(length = 20)
    private String cnpj;
    private String password;
    private String releaseYear;
    private String hqLocation;
    @Column
    private String about;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<Job> jobs = new ArrayList<>();

    public Company(Long id, String name, String cnpj, String password, String releaseYear, String hqLocation, String about, List<Job> jobs) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.password = password;
        this.releaseYear = releaseYear;
        this.hqLocation = hqLocation;
        this.about = about;
        this.jobs = jobs;
    }

    public Company() {
    }

    public Company(Long id, String name, String cnpj, String password, String releaseYear, String hqLocation, String about) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.password = password;
        this.releaseYear = releaseYear;
        this.hqLocation = hqLocation;
        this.about = about;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public String getReleaseYear() {
        return releaseYear;
    }
    public void setReleaseYear(String releaseYear) {
        this.releaseYear = releaseYear;
    }
    public String getHqLocation() {
        return hqLocation;
    }
    public void setHqLocation(String hqLocation) {
        this.hqLocation = hqLocation;
    }
    @JsonIgnore
    public List<Job> getJobs() {
        return jobs;
    }
    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getAbout() {
        return about;
    }
    public void setAbout(String about) {
        this.about = about;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Company other = (Company) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    
}
