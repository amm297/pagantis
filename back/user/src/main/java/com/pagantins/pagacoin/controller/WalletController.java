package com.pagantins.pagacoin.controller;

import com.pagantins.pagacoin.domain.Transaction;
import com.pagantins.pagacoin.domain.Wallet;
import com.pagantins.pagacoin.domain.exceptions.TransactionBalanceException;
import com.pagantins.pagacoin.service.wallet.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.net.HttpURLConnection.*;
import static java.util.Objects.isNull;

@Controller
@RequestMapping("/api/wallet")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping("/{userId}")
    ResponseEntity<List<Wallet>> walletsForUser(@PathVariable("userId") final String userId) {
        List<Wallet> wallets = walletService.find(userId);
        if (isNull(wallets)) {
            return ResponseEntity.status(HTTP_INTERNAL_ERROR).body(null);
        }
        if (wallets.isEmpty()) {
            return ResponseEntity.status(HTTP_NO_CONTENT).body(wallets);
        }
        return ResponseEntity.ok(wallets);
    }

    @PostMapping("/")
    ResponseEntity<Boolean> transaction(@RequestBody final Transaction transaction) {
        try {
            walletService.transaction(transaction);
            return ResponseEntity.ok(true);
        } catch (TransactionBalanceException e) {
            return ResponseEntity.status(HTTP_CONFLICT).body(null);
        }
    }
}