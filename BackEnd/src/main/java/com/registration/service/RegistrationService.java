package com.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registration.model.User;
import com.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo; 
        public User saveUser(User user)
        {
          return repo.save(user); 
        }
       public User fetchUserByEmailId(String email)
       {
    	 return repo.findByEmailId(email); 
       }
       public User fetchUserByEmailIdandPassword(String email, String pass)
       {
    	 return repo.findByEmailIdAndPassword(email, pass); 
       }
       
}
