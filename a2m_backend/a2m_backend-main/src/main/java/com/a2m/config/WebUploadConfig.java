package com.a2m.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan
public class WebUploadConfig implements WebMvcConfigurer {
	@Value("${education.upload.dir}")
	private String educationUploadDir;
	
	@Value("${education.url.prefix}")
	private String educationUrlPrefix;
	
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){ 
		registry.addResourceHandler("/" + educationUrlPrefix + "/**")
        .addResourceLocations("file:" + educationUploadDir + "/");
	}
}
