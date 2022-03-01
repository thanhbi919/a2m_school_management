package com.a2m.service.subclassdiary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.a2m.domain.SubclassDiary;
import com.a2m.repository.subclassdiary.SubclassDiaryRepository;

@Service
public class SubclasDiaryServiceImpl implements SubclassDiaryService{
	
	@Autowired
	private SubclassDiaryRepository subClassDiaryRepo;
	
	@Override
	public int deleteSubclassDiary(Long stuId, Long classId) {
		// TODO Auto-generated method stub
		return subClassDiaryRepo.deleteSubclassDiary(stuId, classId);
	}

	@Override
	public int updateSubclassDiary(Long stuId, Long classId, String year, Boolean status) {
		// TODO Auto-generated method stub
		return subClassDiaryRepo.updateSubclassDiary(stuId, classId, year, status);
	}

	@Override
	public List<SubclassDiary> findByStuId(Long stuId) {
		// TODO Auto-generated method stub
		return subClassDiaryRepo.findByStuId(stuId);
	}

	@Override
	public SubclassDiary findByStuIdAndClassId(Long stuId, Long classId) {
		// TODO Auto-generated method stub
		return subClassDiaryRepo.findByStuIdAndClassId(stuId, classId);
	}

	@Override
	public int countStudentByClassId(Long classId) {
		// TODO Auto-generated method stub
		return subClassDiaryRepo.countStudentByClassId(classId);
	}
}
