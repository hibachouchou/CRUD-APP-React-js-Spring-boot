package com.hiba.springboot.model;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "departements")
public class Departement {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		@Column(name = "dep_name")
		private String depName;
		@JsonIgnore
		@OneToMany(mappedBy = "departement")
		private List<Employee> employees;

		
		public Departement() {
			
		}
		
		public Departement(String depName,List<Employee> employees) {
			super();
			this.depName = depName;
			this.employees=employees;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getDepName() {
			return depName;
		}
		public void setDepName(String depName) {
			this.depName = depName;
		}
		public List<Employee> getEmployees() {
			return employees;
			}
			public void setEmployees(List<Employee> employees) {
			this.employees = employees;
			}

	}
