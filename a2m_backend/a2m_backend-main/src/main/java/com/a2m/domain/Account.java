package com.a2m.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "account") 
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="username")
	private String username;

	@Column(name = "password")
	private String password;
	
	@Column(name ="status")
	private Integer status;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name ="account_role",
			joinColumns = @JoinColumn(name ="account_id"),
			inverseJoinColumns= @JoinColumn(name ="role_id"))
	private List<Role> listRole;

	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "teacher_id",referencedColumnName = "id")
	private Teacher objTeacher;

}
