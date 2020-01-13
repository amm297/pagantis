package com.pagantins.pagacoin.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Getter
@Builder
@Document
public class Wallet {
    private String hash;
    @Setter
    private BigDecimal balance;

    public boolean isEnoughBalance(final BigDecimal balanceToTransfer) {
        return balance.compareTo(balanceToTransfer) >= 0;
    }

}
