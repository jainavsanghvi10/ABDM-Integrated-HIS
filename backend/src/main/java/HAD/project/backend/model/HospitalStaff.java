    package HAD.project.backend.model;

    import jakarta.persistence.*;
    import java.util.UUID;

    import org.hibernate.annotations.GenericGenerator;
    import org.springframework.beans.factory.annotation.Autowired;

    import lombok.Getter;
    import lombok.Setter;
    import lombok.ToString;


    @Entity
    @Getter
    @Setter
    @ToString
    @Table(name = "HospitalStaff")
    public class HospitalStaff {

        @Id
        @GeneratedValue(generator = "uuid2")
        @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
        @Column(name="hospital_staff_id", updatable = false, nullable = false)
        private UUID hospitalStaffId;

        
        @OneToOne(fetch= FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
        @JoinColumn(name="staff_id")
        @MapsId
        private Employee employee;  // Change type to Employee

        @Column(name="role", nullable = false)
        private String role;

        @Column(name="department_id", nullable = false)
        private long departmentId;

        public HospitalStaff(String role, long departmentId){
            this.role = role;
            this.departmentId = departmentId;
        }

        public HospitalStaff(){
            
        }
        
    }
