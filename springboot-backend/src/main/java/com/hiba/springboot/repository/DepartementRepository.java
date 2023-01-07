package com.hiba.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hiba.springboot.model.Departement;


@Repository
public interface DepartementRepository extends JpaRepository<Departement, Long>{

	

}