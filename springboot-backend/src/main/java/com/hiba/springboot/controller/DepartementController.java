package com.hiba.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hiba.springboot.exception.ResourceNotFoundException;
import com.hiba.springboot.model.Departement;
import com.hiba.springboot.repository.DepartementRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DepartementController {

	@Autowired
	private DepartementRepository depRepository;
	
	// get all departements
	@GetMapping("/departements")
	public List<Departement> getAllDepartements(){
		return depRepository.findAll();
	}		
	
	// create departement rest api
	@PostMapping("/departements")
	public Departement createDepartement(@RequestBody Departement departement) {
		return depRepository.save(departement);
	}
	
	// get departement by id rest api
	@GetMapping("/departements/{id}")
	public ResponseEntity<Departement> getDepartementById(@PathVariable Long id) {
		Departement departement = depRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id :" + id));
		return ResponseEntity.ok(departement);
	}
	
	// update Departement rest api
	
	@PutMapping("/departements/{id}")
	public ResponseEntity<Departement> updateDepartement(@PathVariable Long id, @RequestBody Departement departementDetails){
		Departement departement = depRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		departement.setDepName(departementDetails.getDepName());
		departement.setEmployees(departement.getEmployees());
		
		Departement updatedDepartement = depRepository.save(departement);
		return ResponseEntity.ok(updatedDepartement);
	}
	
	// delete Departement rest api
	@DeleteMapping("/departements/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Departement departement = depRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id :" + id));
		
		depRepository.delete(departement);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}