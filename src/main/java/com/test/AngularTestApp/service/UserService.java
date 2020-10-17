package com.test.AngularTestApp.service;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.test.AngularTestApp.model.User;

@Component
public class UserService {
	public static final String COL_NAME = "users";

	public List<User> getUsers() throws InterruptedException, ExecutionException {
		System.err.println("ENTRY");
		Firestore dbFirestore = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		return documents.stream().map(entry -> entry.toObject(User.class)).collect(Collectors.toList());
	}

	public String saveUser(User user) throws InterruptedException, ExecutionException {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		ApiFuture<WriteResult> future = dbFirestore.collection(COL_NAME).document("email")
				.set(user);
		return future.get().getUpdateTime().toString();
	}

}
