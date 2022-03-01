package com.a2m.domain;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parent")

@Getter
@Setter
@NoArgsConstructor
public class Parent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "parent_name")
	private String parentName;
	
	@Column(name = "birthday")
	private LocalDate birthday;
	
	@Column(name ="gender")
	private String gender;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "telephone")
	private String telephone;
	
	@Column(name = "email")
	private String email;

	@JsonIgnore
	@ManyToMany(mappedBy = "listParent",cascade = CascadeType.ALL)
	private List<Student> listStu ;
	
	@OneToMany(mappedBy = "objParent")
	private List<Images> listImage;

}
