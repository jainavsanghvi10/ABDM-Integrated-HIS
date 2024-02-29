package HAD.project.backend.model;

import jakarta.persistence.*;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
@Table(name = "patient")
public class Patient 
{
    public enum Gender {
        MALE, FEMALE, OTHER
    }

    public Patient(){

    }

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(updatable = false, nullable = false )
    private UUID patientId;
    
    @Column(name = "Name", nullable = false )
    private String name;

    @Column(name = "DateOfBirth", nullable = false )
    private String dateOfBirth;

    @Column(name = "Gender", nullable = false )
    @Enumerated(EnumType.STRING)
    private Gender gender;

}
