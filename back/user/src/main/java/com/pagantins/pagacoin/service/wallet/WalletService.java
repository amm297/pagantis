package com.pagantins.pagacoin.service.wallet;

import com.pagantins.pagacoin.domain.Transaction;
import com.pagantins.pagacoin.domain.User;
import com.pagantins.pagacoin.domain.Wallet;
import com.pagantins.pagacoin.domain.exceptions.TransactionBalanceException;
import com.pagantins.pagacoin.service.UsersRepository;
import lombok.Builder;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static java.util.Arrays.asList;

@Builder
public class WalletService {

    @Autowired
    private UsersRepository usersRepository;


    public List<Wallet> find(String userId) {
        return findUser(userId).getWallets();
    }

    public void transaction(Transaction transaction) throws TransactionBalanceException {
        User from = findUser(transaction.getFrom().getUserId());
        User to = findUser(transaction.getTo().getUserId());
        if (from.isEnoughBalance(transaction.getFrom().getWalletId(), transaction.getAmount())) {
            from.updateBalance(transaction.getFrom().getWalletId(), transaction.getAmount().negate());
            to.updateBalance(transaction.getTo().getWalletId(), transaction.getAmount());
            usersRepository.saveAll(asList(from, to));
        } else {
            throw new TransactionBalanceException();
        }
    }

    private User findUser(final String userId) {
        return usersRepository.findById(new ObjectId(userId))
                .get();
    }
}
