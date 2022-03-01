package com.a2m.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "class")

@Getter
@Setter
@NoArgsConstructor
public class Classs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Tên lớp học không được trống")
	@Column(name = "class_name")
	private String className;
	
	@Min(value = 1, message = "Số học sinh phải lớn hơn 0")
	@NotNull(message = "Số học sinh không được trống")
	@Column(name ="total_stu")
	private Integer totalStu;
	
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler","listClassSubject","objClass","objSubject"})
	@OneToOne
	@JoinColumn(name="teacher_id",referencedColumnName = "id")
	private Teacher objTeacher;
	
	@JsonIgnore
	@OneToMany(mappedBy = "objClass")
	private List<SubclassDiary> listSubclassDiary;
	
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler","objClass","objTeacher"})
	@JsonIgnore
	@OneToMany(mappedBy = "objClass")
	private List<ClassSubject> listClassSubject;
	
//	@JsonIgnoreProperties({"listParent", "listImage"})
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name ="subclass_diary",
			joinColumns = @JoinColumn(name ="class_id",referencedColumnName = "id"),
			inverseJoinColumns= @JoinColumn(name ="stu_id",referencedColumnName = "id"))
	private List<Student> listStudent;
	
}
