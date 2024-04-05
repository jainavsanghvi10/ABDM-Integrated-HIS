package HAD.project.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import HAD.project.backend.model.Patient;

public interface patientRepository extends JpaRepository<Patient,UUID> {
    
}
