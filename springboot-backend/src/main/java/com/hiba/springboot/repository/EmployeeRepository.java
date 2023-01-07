package com.hiba.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hiba.springboot.model.Departement;
import com.hiba.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	//List<Employee> findByNomEmployee(String nom);
//	@Query("select e from employees e where e.departement = ?1")
	//List<Employee> findByDepartement (Departement departement);
//	List<Employee> findByDepartementIdDep(Long id);


}
