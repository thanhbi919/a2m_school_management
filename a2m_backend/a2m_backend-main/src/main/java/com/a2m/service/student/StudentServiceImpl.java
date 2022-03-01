package com.a2m.service.student;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a2m.domain.Student;
import com.a2m.domain.ClassSubject;
import com.a2m.domain.Classs;
import com.a2m.domain.SubclassDiary;
import com.a2m.domain.SubclassDiaryKey;
import com.a2m.domain.Subject;
import com.a2m.domain.Teacher;
import com.a2m.repository.student.StudentRepository;
import com.a2m.repository.subclassdiary.SubclassDiaryRepository;

@Service
@Transactional(rollbackFor = Exception.class)
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository stuRepository;

	@Autowired
	private SubclassDiaryRepository subClassRepo;
	
	@Override
	public List<Student> findAll() {
		// TODO Auto-generated method stub
		return stuRepository.findAll();
	}

	@Override
	public Optional<Student> findById(Long stuId) {
		// TODO Auto-generated method stub
		return stuRepository.findById(stuId);
	}

	@Override
	public Student createStudent(Map<Object, Object> obj) {
		// TODO Auto-generated method stub
		Student stu = new Student();
		stu.setStuName((String) obj.get("stuName"));
		stu.setGender((String) obj.get("gender"));
		String birthday =(String) obj.get("birthday");
		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
		stu.setBirthday(LocalDate.parse(birthday, inputFormatter));
		String admissionDate =(String) obj.get("admissionDate");	
		stu.setAdmissionDate(LocalDate.parse(admissionDate, inputFormatter));
		stu.setAddress((String) obj.get("address"));
		stu.setStatus("Đang học");
		Student s= stuRepository.save(stu);
		String classId=(String) obj.get("classId");
		long clsId =Long.parseLong(classId);
		if (s!= null) {
			SubclassDiary subClass = new SubclassDiary();
			subClass.setYear((String) obj.get("year"));
			subClass.setStatus(false);
			SubclassDiaryKey key = new SubclassDiaryKey();
			key.setStuId(s.getId());
			key.setClassId(clsId);
			subClass.setId(key);
			subClassRepo.save(subClass);
		}
		return s;
	}

	@Override
	public Boolean updateStatus(Long stuId) {
		// TODO Auto-generated method stub
		
		return stuRepository.updateStatusStu(stuId);
	}

	@Override
	public List<Student> searchStudent(Map<Object, Object> data) {
		String stuId = "";
		if (data.get("stuId")!=null) {
			stuId = data.get("stuId")+"";
		}
		String stuName = (String) data.get("stuName");
		if (data.get("classId")=="") {
			return stuRepository.searchStudentByNameAndId(stuId, stuName);
		}else {	
			Long classId= Long.valueOf(data.get("classId")+"");
			return stuRepository.searchStudent(stuId, classId, stuName);
		}
	}

	@Override
	public List<Student> findByStuNameLike(String stuName) {
		// TODO Auto-generated method stub
		return stuRepository.findByStuNameLike(stuName);
	}

	@Override
	public Student save(Student stu) {
		// TODO Auto-generated method stub
		return stuRepository.save(stu);
	}

	@Override
	public Boolean insertSubclassDiary(Map<Object, Object> data) {
		Long stuId = Long.parseLong(data.get("stuId")+"");
		Long classId = Long.parseLong(data.get("classId")+"");
		String year = (String) data.get("year");
		Boolean status = Boolean.parseBoolean(data.get("status")+"");
		SubclassDiary subClass = new SubclassDiary();
		subClass.setYear(year);
		subClass.setStatus(status);
		SubclassDiaryKey key = new SubclassDiaryKey();
		key.setStuId(stuId);
		key.setClassId(classId);
		subClass.setId(key);
		subClassRepo.save(subClass);	
		return true;
	}

	@Override
	public List<Teacher> findTeacherBySubjectId(Long id) {
		// TODO Auto-generated method stub
		return stuRepository.findTeacherBySubjectId(id);
	}


	@Override
	public long totalStudent() {
		// TODO Auto-generated method stub
		return stuRepository.count();
	}

	@Override
	public List<Student> findNewStudent() {
		// TODO Auto-generated method stub
		return stuRepository.findNewStudent();
	}

	@Override
	public List<Teacher> findNewTeacher() {
		// TODO Auto-generated method stub
		return stuRepository.findNewTeacher();
	}

}
