package bankpool;

import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class BankPool {
	private final ExecutorService pool;
	private Bank bank; 
	public BankPool(int poolSize, Bank bank) {
		pool = Executors.newFixedThreadPool(poolSize);
		this.bank = bank;
	}

	public void start() {
		for(int i =1; i < 1000;i++) {
			pool.execute(bank);
		}
//		System.out.println("SHUTDOWN");
		pool.shutdown();
		pool.shutdownNow();
	}
}
