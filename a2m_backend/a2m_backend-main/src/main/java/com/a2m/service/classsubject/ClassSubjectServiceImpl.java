package com.a2m.service.classsubject;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.a2m.domain.ClassSubject;
import com.a2m.domain.ClassSubjectKey;
import com.a2m.repository.classsubject.ClassSubjectRepository;
import com.a2m.service.classs.ClassService;
import com.a2m.service.subject.SubjectService;
import com.a2m.service.teacher.TeacherService;

@Service
public class ClassSubjectServiceImpl implements ClassSubjectService{
	
	@Autowired
	private ClassSubjectRepository classSubjectRepo;
	@Autowired
	private ClassService classService;
	@Autowired
	private TeacherService teacherService;
	@Autowired
	private SubjectService subjectService;
	
	@Override
	public List<ClassSubject> findSubjectByClass(Long stuId) {
		// TODO Auto-generated method stub
		return classSubjectRepo.findSubjectByClass(stuId);
	}

	@Override
	public Long checkInsertSubject(Long classId, Long subjectId) {
		// TODO Auto-generated method stub
		return classSubjectRepo.checkInsertSubject(classId, subjectId);
	}

	@Override
	public ClassSubject save(Map<Object, Object> data) {
		Long classId=Long.valueOf(data.get("classId")+"");
		Long teacherId=Long.valueOf(data.get("teacherId")+"");
		Long subjectId=Long.valueOf(data.get("subjectId")+"");
		ClassSubject cs = new ClassSubject();
		ClassSubjectKey key = new ClassSubjectKey();
		key.setClassId(classId);
		key.setSubjectId(subjectId);
		cs.setId(key);
		cs.setObjTeacher(teacherService.findTeacherById(teacherId).get());
		return classSubjectRepo.save(cs);
	}
	
}
