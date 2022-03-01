package com.a2m.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "subclass_diary")
@Getter
@Setter
@NoArgsConstructor
public class SubclassDiary {
	
	@EmbeddedId
	private SubclassDiaryKey id;
	
	@Column(name = "year")
	private String year;
	@Column(name = "status")
	private Boolean status;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("stu_id")
	@JoinColumn(name = "stu_id",referencedColumnName = "id")
	private Student objStu;
	
	@ManyToOne
	@MapsId("class_id")
	@JoinColumn(name = "class_id",referencedColumnName = "id")
	private Classs objClass;
	
}
