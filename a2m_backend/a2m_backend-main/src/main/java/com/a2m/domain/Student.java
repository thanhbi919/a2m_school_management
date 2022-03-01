package com.a2m.domain;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student")

@Getter
@Setter
@NoArgsConstructor
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column( name ="stu_name")
	private String stuName;
	
	@Column( name ="birthday")
	private LocalDate birthday;
	
	@Column( name ="gender")
	private String gender;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "admission_date")
	private LocalDate admissionDate;
	
	@Column(name = "status")
	private String status;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name ="student_has_parent",
			joinColumns = @JoinColumn(name ="stu_id",referencedColumnName = "id"),
			inverseJoinColumns= @JoinColumn(name ="parent_id",referencedColumnName = "id"))
	private List<Parent> listParent;
	
	@JsonIgnore
	@OneToMany(mappedBy = "objStu")
	private List<SubclassDiary> listSubclassDiary;
	
	@OneToMany(mappedBy = "objStu")
	private List<Images> listImage;
	
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name ="subclass_diary",
			joinColumns = @JoinColumn(name ="stu_id",referencedColumnName = "id"),
			inverseJoinColumns= @JoinColumn(name ="class_id",referencedColumnName = "id"))
	private List<Student> listClass;
}
