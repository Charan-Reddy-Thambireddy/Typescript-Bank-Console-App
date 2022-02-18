"use strict";
exports.__esModule = true;
exports.validateWithdrawAmount = exports.WithdrawAmount = exports.Withdraw = exports.Deposit = exports.Transaction = exports.ShowBalance = exports.DisplayDetails = exports.validateEmail = exports.GetEmailID = exports.NewAccount = exports.transactionTypeOptions = exports.accountTypeOptions = exports.BackOptons = exports.startApp = exports.MainMenuOptions = exports.WelcomNote = exports.Accountdetails = void 0;
var readline_sync_1 = require("readline-sync");
var Account_1 = require("./Account");
var CurrentAccount_1 = require("./CurrentAccount");
var SavingsAccount_1 = require("./SavingsAccount");
exports.Accountdetails = new Account_1.Account();
var EmailIDG = "";
var back = false;
WelcomNote();
function WelcomNote() {
    console.log('\x1b[33m%s\x1b[0m', "...........Dear Customer, Welcome to Our Bank!.............");
    console.log('\x1b[33m%s\x1b[0m', "Below are the services providing at our desk!");
    MainMenuOptions();
}
exports.WelcomNote = WelcomNote;
function MainMenuOptions() {
    console.log('\x1b[36m%s\x1b[0m', "New Account  -N  Account Details - D");
    console.log('\x1b[36m%s\x1b[0m', "View Balnace -B  Transaction     - T");
    console.log('\x1b[36m%s\x1b[0m', "Exit - X");
    startApp();
}
exports.MainMenuOptions = MainMenuOptions;
function startApp() {
    var mainMenu = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if (mainMenu == 'N') {
        console.log('\x1b[34m%s\x1b[0m', "New Account Creation");
        NewAccount();
    }
    else if (mainMenu == 'D') {
        console.log('\x1b[34m%s\x1b[0m', "Account details!");
        DisplayDetails();
    }
    else if (mainMenu == 'B') {
        console.log('\x1b[34m%s\x1b[0m', "View Balance");
        ShowBalance();
    }
    else if (mainMenu == 'T') {
        console.log('\x1b[34m%s\x1b[0m', "Transaction");
        Transaction();
    }
    else if (mainMenu == 'X') {
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "Invalid Input. Please try again!");
        MainMenuOptions();
    }
}
exports.startApp = startApp;
function BackOptons() {
    console.log('\x1b[36m%s\x1b[0m', "Retry - R  Back - B");
    var selected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if (selected == "R") {
        back = false;
    }
    else if (selected == "B") {
        back = true;
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "Invalid Input. Try again!");
        BackOptons();
    }
}
exports.BackOptons = BackOptons;
function accountTypeOptions() {
    console.log('\x1b[36m%s\x1b[0m', "Savings Account - S  Current Account - C");
}
exports.accountTypeOptions = accountTypeOptions;
function transactionTypeOptions() {
    console.log('\x1b[36m%s\x1b[0m', "Deposit - D  Withdraw - W");
}
exports.transactionTypeOptions = transactionTypeOptions;
function NewAccount() {
    accountTypeOptions();
    var accountTypeSelected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if (accountTypeSelected == "S") {
        var newsavingsAccount = new SavingsAccount_1.SavingsAccount();
        newsavingsAccount.name = (0, readline_sync_1.question)('Enter Your Name:');
        newsavingsAccount.age = Number((0, readline_sync_1.question)("Enter your Age:"));
        if (newsavingsAccount.age > 68) {
            console.log('\x1b[31m%s\x1b[0m', "As your age is greater than 68, You are not eligible to create account.");
            MainMenuOptions();
        }
        else {
            newsavingsAccount.location = (0, readline_sync_1.question)('Enter Your Location: ');
            newsavingsAccount.state = (0, readline_sync_1.question)('Enter Your state: ');
            newsavingsAccount.country = (0, readline_sync_1.question)('Enter Your Country: ');
            GetEmailID();
            newsavingsAccount.emailID = EmailIDG;
            console.log('\x1b[32m%s\x1b[0m', 'Savings Account Created Succesfully with Account Number :' + newsavingsAccount.accountNumber);
            exports.Accountdetails = newsavingsAccount;
            //console.log(Accountdetails);
            MainMenuOptions();
        }
    }
    else if (accountTypeSelected == "C") {
        var newcurrentccount = new CurrentAccount_1.CurrentAccount();
        newcurrentccount.name = (0, readline_sync_1.question)('Enter Your Name:');
        newcurrentccount.age = Number((0, readline_sync_1.question)("Enter your Age:"));
        if (newcurrentccount.age > 68) {
            console.log('\x1b[31m%s\x1b[0m', "As your age is greater than 68, You are not eligible to create account.");
            MainMenuOptions();
        }
        else {
            newcurrentccount.location = (0, readline_sync_1.question)('Enter Your Location: ');
            newcurrentccount.state = (0, readline_sync_1.question)('Enter Your state: ');
            newcurrentccount.country = (0, readline_sync_1.question)('Enter Your Country: ');
            GetEmailID();
            newcurrentccount.emailID = EmailIDG;
            console.log('\x1b[32m%s\x1b[0m', 'Current Account Created Succesfully with Account Number :' + newcurrentccount.accountNumber);
            exports.Accountdetails = newcurrentccount;
            //console.log(Accountdetails);
            MainMenuOptions();
        }
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "Invalid input. Try again!");
        NewAccount();
    }
}
exports.NewAccount = NewAccount;
function GetEmailID() {
    var email = (0, readline_sync_1.question)('Enter Your EmailID: ');
    if (!validateEmail(email)) {
        console.log('\x1b[31m%s\x1b[0m', "Invalid Email!");
        GetEmailID();
    }
    else {
        EmailIDG = email;
    }
}
exports.GetEmailID = GetEmailID;
function validateEmail(Email) {
    if (Email.search('[^ @]*@[^ @]*') == 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateEmail = validateEmail;
function DisplayDetails() {
    if (exports.Accountdetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please an create Account.");
        MainMenuOptions();
    }
    else {
        var accno = (0, readline_sync_1.question)("Please enter the Account Number:");
        if (accno == exports.Accountdetails.accountNumber) {
            //console.log(Accountdetails);
            console.log('\x1b[33m%s\x1b[0m', "Account Number:", exports.Accountdetails.accountNumber);
            console.log('\x1b[33m%s\x1b[0m', "Account Type:", exports.Accountdetails.accountType);
            console.log('\x1b[33m%s\x1b[0m', "Customer Name:", exports.Accountdetails.name);
            console.log('\x1b[33m%s\x1b[0m', "Address:", exports.Accountdetails.location + "," + exports.Accountdetails.state + "," + exports.Accountdetails.country);
            console.log('\x1b[33m%s\x1b[0m', "EmailID:", exports.Accountdetails.emailID);
            console.log('\x1b[33m%s\x1b[0m', "Total Balance:", exports.Accountdetails.balance);
            MainMenuOptions();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
            BackOptons();
            var retry = !back;
            if (retry)
                DisplayDetails();
            else
                MainMenuOptions();
        }
    }
}
exports.DisplayDetails = DisplayDetails;
function ShowBalance() {
    if (exports.Accountdetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please create an Account.");
        MainMenuOptions();
    }
    else {
        var tmpname = (0, readline_sync_1.question)("Please enter the Account Holder Name:");
        if (tmpname == exports.Accountdetails.name) {
            console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.Accountdetails.balance);
            MainMenuOptions();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "In correct Account Holder Name !");
            BackOptons();
            var retry = !back;
            if (retry)
                ShowBalance();
            else
                MainMenuOptions();
        }
    }
}
exports.ShowBalance = ShowBalance;
function Transaction() {
    if (exports.Accountdetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please create an Account.");
        MainMenuOptions();
    }
    else {
        transactionTypeOptions();
        var selected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
        if (selected == "D") {
            Deposit();
        }
        else if (selected == "W") {
            Withdraw();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "Invalid Input!");
            Transaction();
        }
    }
}
exports.Transaction = Transaction;
function Deposit() {
    var accno = (0, readline_sync_1.question)("Please enter the Account Number:");
    if (accno == exports.Accountdetails.accountNumber) {
        console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.Accountdetails.balance);
        var amountdepositing = Number((0, readline_sync_1.question)("Please Enter the Amount to be deposited: "));
        exports.Accountdetails.balance += amountdepositing;
        console.log('\x1b[32m%s\x1b[0m', "Deposit of " + amountdepositing + " is Successfull!");
        console.log('\x1b[33m%s\x1b[0m', "Available Balance: " + exports.Accountdetails.balance);
        MainMenuOptions();
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
        BackOptons();
        var retry = !back;
        if (retry)
            Deposit();
        else
            MainMenuOptions();
    }
}
exports.Deposit = Deposit;
function Withdraw() {
    var accno = (0, readline_sync_1.question)("Please enter the Account Number:");
    if (accno == exports.Accountdetails.accountNumber) {
        console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.Accountdetails.balance);
        if (exports.Accountdetails.balance > exports.Accountdetails.minimumBalance) {
            console.log('\x1b[33m%s\x1b[0m', "Withdrawble Balance: " + (exports.Accountdetails.balance - exports.Accountdetails.minimumBalance));
            WithdrawAmount();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "Not Eligible to withdraw as balance is less than Minimum balance");
            MainMenuOptions();
        }
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
        BackOptons();
        var retry = !back;
        if (retry)
            Withdraw();
        else
            MainMenuOptions();
    }
}
exports.Withdraw = Withdraw;
function WithdrawAmount() {
    var amountwithdrawing = Number((0, readline_sync_1.question)("Please Enter the Amount to be withdraw: "));
    if (!validateWithdrawAmount(amountwithdrawing)) {
        console.log('\x1b[31m%s\x1b[0m', "Insufficient Amount! please enter the amount less than withdrawable amount ");
        BackOptons();
        var retry = !back;
        if (retry)
            WithdrawAmount();
        else
            MainMenuOptions();
    }
    else {
        exports.Accountdetails.balance -= amountwithdrawing;
        console.log('\x1b[32m%s\x1b[0m', "Withdrawal of " + amountwithdrawing + " is Successfull!");
        console.log('\x1b[33m%s\x1b[0m', "Available Balance: " + exports.Accountdetails.balance);
        MainMenuOptions();
    }
}
exports.WithdrawAmount = WithdrawAmount;
function validateWithdrawAmount(amountwithdrawing) {
    if (exports.Accountdetails.balance - amountwithdrawing >= exports.Accountdetails.minimumBalance) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateWithdrawAmount = validateWithdrawAmount;
