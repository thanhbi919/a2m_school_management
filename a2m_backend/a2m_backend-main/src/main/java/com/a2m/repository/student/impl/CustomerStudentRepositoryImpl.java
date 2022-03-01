package com.a2m.repository.student.impl;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.transaction.annotation.Transactional;

import com.a2m.domain.Student;
import com.a2m.domain.Teacher;
import com.a2m.repository.student.CustomerStudentRepository;
@Transactional
public class CustomerStudentRepositoryImpl implements CustomerStudentRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Boolean updateStatusStu(Long stuId) {
		// TODO Auto-generated method stub
		Query query = em.createQuery("UPDATE Student SET status= :status WHERE id= :id")
				.setParameter("status", "Đã nghỉ học").setParameter("id", stuId);
		int n = query.executeUpdate();
		if (n > 0)
			return true;
		else
			return false;
	}

	@Override
	public List<Student> searchStudent(String stuId, Long classId, String stuName) {
		Query query = em.createNativeQuery(
				"SELECT *" +
				"FROM student s, subclass_diary sub, class c " +
				"WHERE s.id = sub.stu_id and sub.class_id = c.id "
				+ "and sub.status= :status "
				+ "and s.id like :stuId and upper(s.stu_name) like upper(:stuName) "
				+ "and c.id like :classId",Student.class)
				.setParameter("stuId", "%"+stuId+"%").setParameter("stuName","%"+ stuName+"%")
				.setParameter("classId", classId).setParameter("status", 0);
		List<Student> list= query.getResultList();
		return list;
	}

	@Override
	public List<Student> searchStudentByNameAndId(String stuId, String stuName) {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(
				"SELECT * " +
				"FROM student s " +
				"WHERE s.id like :stuId and upper(s.stu_name) like upper(:stuName) ",Student.class)
				.setParameter("stuId", "%"+stuId+"%").setParameter("stuName","%"+ stuName+"%");
		List<Student> list= query.getResultList();
		return list;
	}

	@Override
	public List<Teacher> findTeacherBySubjectId(Long id) {
		Query query = em.createNativeQuery(
				"SELECT *" +
				"FROM teacher t " +
				"WHERE t.subject_id = :id ",Teacher.class)
				.setParameter("id",id);
		List<Teacher> list= query.getResultList();
		return list;
	}

	@Override
	public List<Student> findNewStudent() {
		TypedQuery<Student> query = em.createQuery(
				"FROM Student WHERE YEAR(admission_date) = :year " +
				"ORDER BY admission_date DESC",Student.class)
				.setParameter("year",LocalDate.now().getYear()).setMaxResults(15);
		List<Student> list= query.getResultList();
		return list;
	}

	@Override
	public List<Teacher> findNewTeacher() {
		TypedQuery<Teacher> query = em.createQuery(
				"FROM Teacher WHERE YEAR(work_start_date) = :year " +
				"ORDER BY work_start_date DESC",Teacher.class)
				.setParameter("year",LocalDate.now().getYear()).setMaxResults(15);
		List<Teacher> list= query.getResultList();
		return list;
	}

}
