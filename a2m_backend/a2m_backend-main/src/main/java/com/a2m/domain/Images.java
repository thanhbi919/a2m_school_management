package com.a2m.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "images")
@Getter
@Setter
@NoArgsConstructor
public class Images {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "file_type")

	private String fileType;

	@Column(name = "size")
	private Long size;
	@Column(name = "filename")
	private String filename;
	@Column(name = "location")
	private String location;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "teacher_id",referencedColumnName = "id")
	private Teacher objTeacher;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "parent_id", referencedColumnName = "id")
	private Parent objParent;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "stu_id",referencedColumnName = "id")
	private Student objStu;
}
