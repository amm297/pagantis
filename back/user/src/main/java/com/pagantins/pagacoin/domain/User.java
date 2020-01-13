package com.pagantins.pagacoin.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Builder
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    private String surname;
    private String phone;
    private String address;
    private String gender;
    @Setter
    private List<Wallet> wallets;

    public boolean isEnoughBalance(final String walletId, final BigDecimal balanceToTransfer) {
        return this.getWallets().stream()
                .filter(wallet -> wallet.getHash().equalsIgnoreCase(walletId))
                .anyMatch(wallet -> wallet.isEnoughBalance(balanceToTransfer));
    }

    public void updateBalance(final String walletId, final BigDecimal balance) {
        this.wallets.forEach(wallet -> {
            if (wallet.getHash().equalsIgnoreCase(walletId)) {
                wallet.setBalance(wallet.getBalance().add(balance));
            }
        });
    }
}
