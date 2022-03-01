package com.a2m.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class SubclassDiaryKey implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "stu_id")
	private Long stuId;
	
	@Column(name = "class_id")
	private Long classId;
	
}
