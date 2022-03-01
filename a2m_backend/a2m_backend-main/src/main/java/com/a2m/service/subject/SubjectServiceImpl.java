package com.a2m.service.subject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.a2m.domain.Subject;
import com.a2m.repository.subject.SubjectRepository;

@Service
public class SubjectServiceImpl implements SubjectService{
	
	@Autowired
	private SubjectRepository subjectRepository;
	@Override
	public List<Subject> findAll(){
		return subjectRepository.findAll();
	}
    @Override
	public Subject findById(long id) {
    	return subjectRepository.findById(id).get();
    }
    
    @Override
	public void editSubject(Subject c){
         subjectRepository.save(c);
	}     
	@Override
	public void addSubject(Subject c) {
		subjectRepository.save(c);
	}

	@Override
	public void saveOrUpdate(Subject subject) {
		subjectRepository.save(subject);
		
	}
	@Override
	public void deleteSubject(Long id) {
		subjectRepository.deleteById(id);
		
	}
	@Override
	public Optional<Subject> getSubjectById(Long id) {

		return subjectRepository.findById(id);
	}
	@Override
	public List<Subject> searchByName(String name) {
		
		return subjectRepository.findBySubjectNameContaining(name);
	}

}

