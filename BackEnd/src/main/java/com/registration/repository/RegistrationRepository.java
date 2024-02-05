package com.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.registration.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

	public User findByEmailId(String email);

	public User findByEmailIdAndPassword(String emailId, String password);

}
