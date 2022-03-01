package com.a2m.service.subclassdiary;

import java.util.List;

import com.a2m.domain.SubclassDiary;

public interface SubclassDiaryService {
	public int deleteSubclassDiary(Long stuId, Long classId);
	public int updateSubclassDiary(Long stuId, Long classId, String year,Boolean status);
	public List<SubclassDiary> findByStuId(Long stuId);
	public SubclassDiary findByStuIdAndClassId(Long stuId, Long classId);
	public int countStudentByClassId(Long classId);
}
