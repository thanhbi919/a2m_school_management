package com.a2m.service.upload;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.apache.commons.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.a2m.domain.Images;
import com.a2m.domain.Parent;
import com.a2m.domain.Student;
import com.a2m.domain.Teacher;
import com.a2m.repository.image.ImageRepository;


@Service
public class UploadFileService {
	
	@Value("${education.upload.dir}")
    private String uploadPath;
	
	@Value("${server.port}")
	private String serverPort;
	
	@Value("${education.url.prefix}")
	private String urlPath;
	
	@Autowired
	private ImageRepository imageRepo;

    public Boolean save(MultipartFile file, Parent parent, Student stu, Teacher teacher, Long id) throws Exception {
    	String filename= id +""+UUID.randomUUID()+".jpg";
    	Images img = new Images();
    	img.setFilename(filename);
    	img.setFileType(file.getContentType());
    	img.setSize(file.getSize());
		img.setLocation(urlPath+"/"+filename);
		img.setObjParent(parent);
		img.setObjStu(stu);
		img.setObjTeacher(teacher);
		Images image= imageRepo.save(img);
		
        try {
            Path root = Paths.get(uploadPath);
            
            Path resolve = root.resolve(filename);
            if (resolve.toFile()
                       .exists()) {
                throw new FileUploadException("File already exists: " + filename);
            }else {
            	Files.createDirectories(root);
            }
            Files.copy(file.getInputStream(), resolve);
        } catch (Exception e) {
            throw new FileUploadException("Could not store the file. Error: " + e.getMessage());
        }
        return true;
    }
    
    public int deleteImageParent(Long parentId) {
    	return imageRepo.deleteByParentId(parentId);
    }
    
    public Images findByParent(Long id) {
    	return imageRepo.findByParentId(id);
    }
    
    public Images findByStuId(Long id) {
    	return imageRepo.findByStuId(id);
    }
    
    public int deleteImageStu(Long stuId) {
    	return imageRepo.deleteByStuId(stuId);
    }
    
}
