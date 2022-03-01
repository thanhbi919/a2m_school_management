package com.a2m.domain;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "class_has_subject")
@Getter
@Setter
@NoArgsConstructor
public class ClassSubject {
	@EmbeddedId 
	private ClassSubjectKey id;
	
	@MapsId("class_id")
	@ManyToOne
	@JoinColumn(name = "class_id",referencedColumnName = "id")
	private Classs objClass;
	
	@MapsId("subject_id")
	@ManyToOne
	@JoinColumn(name = "subject_id",referencedColumnName = "id")
	private Subject objSubject;
	
	@ManyToOne
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler","listClassSubject","objClass","objSubject"})
	@JoinColumn(name = "teacher_id",referencedColumnName = "id")
	private Teacher objTeacher;
	
}
