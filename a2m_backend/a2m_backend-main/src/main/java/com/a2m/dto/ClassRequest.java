package com.a2m.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.a2m.domain.Teacher;

import lombok.Data;

@Data
public class ClassRequest {
	
	private Long id;
	
	@NotBlank(message = "Tên lớp học không được trống")
	private String className;
	
	@NotBlank(message = "Trạng thái không được trống")
	private String status;
	
	@Min(value = 1, message = "Số học sinh phải lớn hơn 0")
	@NotNull(message = "Số học sinh không được trống")
	private Integer totalStu;
	
	
	@NotNull(message = "Giáo viên không được trống")
	private Teacher objTeacher;
}
