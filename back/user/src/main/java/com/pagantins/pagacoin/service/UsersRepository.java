package com.pagantins.pagacoin.service;

import com.pagantins.pagacoin.domain.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepository extends MongoRepository<User, ObjectId> {
    @Query(value = "{}", fields = "{name: 1, surname: 1, phone: 1, address: 1, gender: 1}")
    List<User> findAllUsersWithoutWallet();
}

