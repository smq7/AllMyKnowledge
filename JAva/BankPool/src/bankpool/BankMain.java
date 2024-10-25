package bankpool;


public class BankMain {
	public static final int NACCOUNTS = 10;
    public static final int INITIAL_BALANCE = 10000;
   
    public static void main(String[] args) {
        Bank b = new Bank(NACCOUNTS, INITIAL_BALANCE);
        BankPool bankpool = new BankPool(1000,b);
        bankpool.start();
    }
}