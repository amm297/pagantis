package com.pagantins.pagacoin.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class Transaction {
    private Account from;
    private Account to;
    private BigDecimal amount;
}
