package com.pagantins.pagacoin.service.user;

import com.pagantins.pagacoin.domain.User;
import com.pagantins.pagacoin.service.UsersRepository;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Builder
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    public List<User> find() {
        return usersRepository.findAllUsersWithoutWallet();
    }
}
