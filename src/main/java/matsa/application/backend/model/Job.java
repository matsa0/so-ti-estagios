package matsa.application.backend.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import matsa.application.backend.model.enums.JobModality;

@Entity
@Table(name = "job")
public class Job implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String title;
    @Column(nullable = false, length = 1000)
    private String description;
    @Column(nullable = false)
    private JobModality modality;
    private String location;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToMany(mappedBy = "jobs")
    private Set<Student> students = new HashSet<>();

    public Job(Long id, String title, String description, JobModality modality, String location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.modality = modality;
        this.location = location;
    }

    public Job(Long id, String title, String description, JobModality modality, String location, Company company,
            Set<Student> students) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.modality = modality;
        this.location = location;
        this.company = company;
        this.students = students;
    }

    public Job() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public JobModality getModality() {
        return modality;
    }
    public void setModality(JobModality modality) {
        this.modality = modality;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public Company getCompany() {
        return company;
    }
    public void setCompany(Company company) {
        this.company = company;
    }
    public Set<Student> getStudents() {
        return students;
    }
    public void setStudents(Set<Student> students) {
        this.students = students;
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
        Job other = (Job) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }



}
