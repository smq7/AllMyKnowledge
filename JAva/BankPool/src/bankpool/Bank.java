package bankpool;
class Bank implements Runnable{
//  public static final int NTEST = 10000;
  private final int[] accounts;
  private int nAccounts;
//  private long ntransacts = 0;

  public Bank(int n, int initialBalance) {
      accounts = new int[n];
      nAccounts = n;
      int i;
      for (i = 0; i < accounts.length; i++) {
          accounts[i] = initialBalance;
      }
//      ntransacts = 0;
  }

//synchronized
  public void run() {

      int toAccount = (int) (nAccounts * Math.random());
      int amount = (int) (1000 * Math.random()); 
      int a = (Math.random() <= 0.5) ? 1 : 2;
	  if(a == 1) {
		  transferIncrease(toAccount,amount);
	  } else {
		  transferDecrease(toAccount,amount);
	  }
  }
  
  public void transferIncrease(int nAcc,int amount) {

		  accounts[nAcc] += amount;
		  	System.out.println("it is work" + Thread.currentThread().getName());

  	
  }
  public void transferDecrease(int nAcc,int amount) {

  	accounts[nAcc] -= amount;
  	System.out.println("it is work 2" + Thread.currentThread().getName());
}
//  public  void  transfer(int from, int to, int amount) {
//      accounts[from] -= amount;
//      accounts[to] += amount;
//      ntransacts++;
//      if (ntransacts % NTEST == 0) {
//          test();
//      }
//  }
//
//  public void test() {
//      int sum = 0;
//      for (int i = 0; i < accounts.length; i++) {
//          sum += accounts[i];
//      }
//      System.out.println("Transactions:" + ntransacts+ " Sum: " + sum);
//  }
}