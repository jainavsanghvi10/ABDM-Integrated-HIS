package HAD.project.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import HAD.project.backend.model.Employee;
import HAD.project.backend.model.HospitalStaff;
import HAD.project.backend.repository.employeeRepository;
import HAD.project.backend.repository.hospitalStaffRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Autowired
    employeeRepository employeeRep;

    @Autowired
    hospitalStaffRepository hospitalStaffRep;

    @Override
    public void run(String... args) throws Exception {
        // hospitalStaffRep.deleteAllInBatch();
        // employeeRep.deleteAllInBatch();

		Employee Rakshit = new Employee(1, "Rakshit", "234432", "Hehehe");
		employeeRep.save(Rakshit);

		HospitalStaff newStaff = new HospitalStaff("Doctor", 1);
		newStaff.setEmployee(Rakshit);

		hospitalStaffRep.save(newStaff);

		// hospitalStaffRep.delete(newStaff);
		// employeeRep.delete(Rakshit);
    }
}
