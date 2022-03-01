package com.a2m.repository.subclassdiary;

import java.util.List;

import com.a2m.domain.SubclassDiary;

public interface CustomSubclassDiaryRepository {
	public int deleteSubclassDiary(Long stuId, Long classId);
	public int updateSubclassDiary(Long stuId, Long classId, String year,Boolean status);
	public List<SubclassDiary> findByStuId(Long stuId);
	public SubclassDiary findByStuIdAndClassId(Long stuId, Long classId);
	public int countStudentByClassId(Long classId);
}
