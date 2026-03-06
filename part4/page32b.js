import { deposit, checkBalance, withdraw, showTransactions } from "./bank.js";

deposit(1, 2000);
checkBalance(1);
withdraw(1, 3000);
checkBalance(1);
showTransactions(1);
