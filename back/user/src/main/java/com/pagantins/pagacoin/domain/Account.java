package com.pagantins.pagacoin.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Account {
    private String userId;
    private String walletId;
}
