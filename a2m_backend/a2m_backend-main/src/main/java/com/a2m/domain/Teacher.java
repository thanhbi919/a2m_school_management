package com.a2m.domain;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "teacher")

@Getter
@Setter
@NoArgsConstructor
public class Teacher {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column(name = "teacher_name")
	private String teacherName;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "birthday")
	private LocalDate birthday;
	
	@Column(name ="gender")
	private String gender;
	
	@Column(name ="level")
	private String level;
	
	@Column(name = "graduation_year")
	private String graduationYear;
	
	
	@Column(name = "address")
	private String address;
	
	
	@Column(name = "telephone")
	private String telephone;
	
	@Email(message = "phải là email")
	@Column(name = "email")
	private String email;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "work_start_date")
	private LocalDate workStartDate;
	
	@Column(name = "status")
	private String status;
	
	@JsonIgnoreProperties(value = {"listSubclassDiary", "objTeacher","listClassSubject"})
	@OneToOne(mappedBy = "objTeacher")
	private Classs objClass;
	
	@JsonIgnoreProperties(value = {"listStuSubject"})
	@ManyToOne
	@JoinColumn(name = "subject_id",referencedColumnName = "id")
	private Subject objSubject;
	
	@JsonIgnore
	@OneToOne(mappedBy = "objTeacher",fetch = FetchType.LAZY)
	private Account objAccount;
	
	@JsonIgnoreProperties(value = {"objSubject", "objTeacher", "id"})
	@JsonIgnore
	@OneToMany(mappedBy = "objTeacher", fetch = FetchType.LAZY)
	private List<ClassSubject> listStuSubject;
	
	@JsonIgnore
	@OneToMany(mappedBy = "objTeacher")
	private List<ClassSubject> listClassSubject;

	
	@OneToMany(mappedBy = "objTeacher", cascade = CascadeType.ALL)
	private List<Images> listImage;
}
