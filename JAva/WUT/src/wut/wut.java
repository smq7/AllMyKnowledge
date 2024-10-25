package wut;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.swing.JFrame;


public class wut {
	public static void main(String[] args) {
		 	Runnable task = new String('|');
	        Runnable taskOther = new Symbol('-');
	        Future<String> res;
	        Future<?> result;

	        ExecutorService executor = Executors.newFixedThreadPool(2);
	                
	        res = executor.submit(task,"done"); // submits with 2 arguments
	        result = executor.submit(taskOther);  // submits with 1 argument 
	        executor.shutdown();
	        try {
	            System.out.println("\n"+res.get()+"   "+result.get());
	        } catch (InterruptedException | ExecutionException ex) {
	            // print exception info 
	        }       

	}
}
