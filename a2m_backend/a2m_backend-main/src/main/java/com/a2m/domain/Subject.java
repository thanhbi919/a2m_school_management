package com.a2m.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "subject")

@Getter
@Setter
@NoArgsConstructor
public class Subject {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Tên môn học không được trống")
	@Column(name ="subject_name")
	private String subjectName;
	
	@NotBlank(message = "Status môn học không được trống")
	@Column(name ="status")
	private Boolean status;
	
	public Subject(Long id, String subjectName, Boolean status) {
		super();
		this.id = id;
		this.subjectName = subjectName;
		this.status = status;
	}

	@JsonIgnore
	@OneToMany(mappedBy = "objSubject")
	private List<Teacher> listTeacher;
	
	@JsonIgnore
	@OneToMany(mappedBy = "objSubject")
	private List<ClassSubject> listClassSubject;
}
