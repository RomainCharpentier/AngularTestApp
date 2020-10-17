package com.test.AngularTestApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.test.AngularTestApp.model.User;

@RepositoryRestResource()
public interface UserRepository
		extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User>, QuerydslPredicateExecutor<User> {
}