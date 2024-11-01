package producercustomer;

import java.util.Random;
import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable {
    private BlockingQueue<String> drop;

    public Consumer(BlockingQueue<String> drop) {
        this.drop = drop;
    }

    public void run() {
        Random random = new Random();
        try {
            for (String message = drop.take();
                 	                        ! message.equals("DONE");
                 		                      message = drop.take()) {
            	
                	System.out.format("MESSAGE RECEIVED: %s%n", 					       message);
                       	Thread.sleep(1000);
            }
        } catch (InterruptedException e) {}
    }
}
