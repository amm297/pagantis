package com.pagantins.pagacoin.configuration;

import com.pagantins.pagacoin.service.user.UserService;
import com.pagantins.pagacoin.service.wallet.WalletService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public UserService userService() {
        return UserService.builder()
                .build();
    }

    @Bean
    public WalletService walletService() {
        return WalletService.builder()
                .build();
    }
}
