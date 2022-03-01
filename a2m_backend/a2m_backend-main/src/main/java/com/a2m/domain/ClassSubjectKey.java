package com.a2m.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Embeddable
@Getter
@Setter
@NoArgsConstructor
public class ClassSubjectKey implements Serializable{

	private static final long serialVersionUID = -693900512175124440L;
	
	@Column(name = "class_id")
	private Long ClassId;
	@Column(name = "subject_id")
	private Long subjectId;

}
