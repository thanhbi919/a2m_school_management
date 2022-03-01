package com.a2m.service.teacher;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import com.a2m.domain.Teacher;
import com.a2m.repository.teacher.TeacherRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class TeacherServiceImpl implements TeacherService{
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Override
	public Page<Teacher> getAllTeacher(HashMap<String, String> params) {
		
		Integer page = params.get("page")==null?0:Integer.valueOf(params.get("page")); 
		
		Integer size = params.get("size")==null?5:Integer.valueOf(params.get("size")); 
		
		
		String field = params.get("field")==null?"id":params.get("field");
		
		String sort = params.get("sort")==null?"ASC":params.get("sort");
		
		Sort sortable = null;
        if (sort.equals("ASC")) {
            sortable = Sort.by(field).ascending();
        }
        if (sort.equals("DESC")) {
            sortable = Sort.by(field).descending();
        }
        Pageable pageable = PageRequest.of(page,size,sortable);
		return teacherRepository.findAll(pageable);
	}
	
	@Override
	public Teacher saveOrUpdate(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherRepository.save(teacher);
	}

	@Override
	public List<Teacher> findAll() {
		// TODO Auto-generated method stub
		return teacherRepository.findAll();
	}

	@Override
	public Optional<Teacher> findTeacherById(Long id) {
		// TODO Auto-generated method stub
		return teacherRepository.findById(id);
	}

	@Override
	public void deleteTeacher(Long id) {
		// TODO Auto-generated method stub
		 teacherRepository.deleteById(id);
	}

	@Override
	public Page<Teacher> searchByNameOrPhone(HashMap<String, String> params) {
		String keyword = params.get("keyword");
		
		Integer page = params.get("page")==null?0:Integer.valueOf(params.get("page")); 
		
		Integer size = params.get("size")==null?5:Integer.valueOf(params.get("size")); 
		
		
		String field = params.get("field")==null?"id":params.get("field");
		
		String sort = params.get("sort")==null?"ASC":params.get("sort");
		
		Sort sortable = null;
        if (sort.equals("ASC")) {
            sortable = Sort.by(field).ascending();
        }
        if (sort.equals("DESC")) {
            sortable = Sort.by(field).descending();
        }
        Pageable pageable = PageRequest.of(page,size,sortable);
		
		return teacherRepository.findByTeacherNameContainingOrTelephoneContaining(keyword, pageable);
	}

	@Override
	public Long totalTeacher() {
		// TODO Auto-generated method stub
		return teacherRepository.count();
	}

	

}
