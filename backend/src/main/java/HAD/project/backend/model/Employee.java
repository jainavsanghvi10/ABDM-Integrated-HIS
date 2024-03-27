package HAD.project.backend.model;

import jakarta.persistence.*;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@ToString
@Table(name = "Employee")

public class Employee {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name="employee_id", updatable = false, nullable = false)
    private UUID employeeId;

    @Column(name="employee_public_id", nullable = false)
    private long employeePublicId; 

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="DOB", nullable = false)
    private String dateOfBirth;

    @Column(name="password", nullable = false)
    private String password;


    public Employee(long publicId, String name, String dateOfBirth, String password){
        this.dateOfBirth = dateOfBirth;
        this.name = name;
        this.password = password;
        this.employeePublicId = publicId;
    }

    public Employee(){
        
    }
    
}
