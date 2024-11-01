package task4;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class Main {
	public static void main(String[] args)    {
		int NEl = 10000;
		int NumTask = 100;
		double sumEll = 0;
		
		List<Future<Double>> list = new ArrayList<Future<Double>>();
		ExecutorService pool = Executors.newFixedThreadPool(4);
		double[] arr = new double[NEl];
		
		for(int i =0; i < arr.length; i++) {
			arr[i] = Math.random();
		}
		
		for(int i = 0; i < NEl/NumTask; i++) {
			
			double[] tempArr = Arrays.copyOfRange(arr, i*(NEl/NumTask), (i+1)*NEl/NumTask);
			Future<Double> future  = pool.submit(new CreateTask(tempArr));

			list.add(future);
		}
		
		for(Future<Double> fut : list){
            	try {
            		sumEll += fut.get();
				} catch (InterruptedException e) {
					e.printStackTrace();
				} catch (ExecutionException e) {
					e.printStackTrace();
				}
		}
        pool.shutdown();
        try {
            if (!pool.awaitTermination(60, TimeUnit.SECONDS)) {
              pool.shutdownNow();
              if (!pool.awaitTermination(60, TimeUnit.SECONDS))
                  System.err.println("Pool did not terminate");
            }
          } catch (InterruptedException ie) {
            pool.shutdownNow();
            Thread.currentThread().interrupt();
          }
		System.out.println(sumEll);
    }
}
