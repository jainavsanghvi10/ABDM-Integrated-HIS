package HAD.project.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import HAD.project.backend.model.Patient;
import HAD.project.backend.model.Patient.Gender;
import HAD.project.backend.repository.patientRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Autowired
	patientRepository patientRep;
	@Override
	public void run(String... args) throws Exception {
		Patient patient=new Patient();
		patient.setDateOfBirth("121212");
		patient.setGender(Gender.MALE);
		patient.setName("ef");
		patientRep.save(patient);
		// patientRep.delete(patient);
		Patient patient2 = patientRep.findById(patient.getPatientId()).orElseThrow();
		System.out.println(patient2.getName());
	}

}
