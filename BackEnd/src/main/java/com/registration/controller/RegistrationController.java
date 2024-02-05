package com.registration.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.registration.model.User;
import com.registration.service.RegistrationService;

@RestController
public class RegistrationController {
@Autowired
private RegistrationService service;
@PostMapping("/register")
@CrossOrigin(origins = "http://localhost:4200")
public User registerUser(@RequestBody User user) throws Exception {
    String tempEmailId = user.getEmailId();
    if (tempEmailId != null && !"".equals(tempEmailId)) {
        User userObj = service.fetchUserByEmailId(tempEmailId);
        if (userObj != null) {
            throw new IllegalArgumentException("User with " + tempEmailId + " already exists");
        }
    }
    User savedUser = service.saveUser(user);
    return savedUser;
}

@PostMapping("/login")
@CrossOrigin(origins = "http://localhost:4200")
public User loginUser(@RequestBody User user) throws Exception
{
	String tempE=user.getEmailId(); 
	String tempP=user.getPassword(); 
	User userObj=null; 
	if(tempE !=null && tempP!=null)
	{
		userObj=service.fetchUserByEmailIdandPassword(tempE, tempP); 
	}
	if(userObj==null)
	{
		throw new Exception("Bad credentials !"); 
	}
	return userObj; 
}

}