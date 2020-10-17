package com.test.AngularTestApp;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.test.AngularTestApp.model.User;
import com.test.AngularTestApp.repository.UserRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private UserRepository userRepository;

	@Test
	public void testFindAll() {
		// cleaning
		entityManager.clear();
		userRepository.deleteAll();
		
		// given
		User user = new User();
		user.setEmail("email");
		user.setPassword("password");
		entityManager.persist(user);
		entityManager.flush();
		
		// when
		List<User> found = userRepository.findAll();
		
		// then
		Assert.assertNotNull(found);
		Assert.assertEquals(1, found.size());
		User userFound = found.get(0);
		Assert.assertNotNull(userFound);
		Assert.assertEquals(user.getEmail(), userFound.getEmail());
		Assert.assertEquals(user.getPassword(), userFound.getPassword());
	}

}