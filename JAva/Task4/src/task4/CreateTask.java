package task4;

import java.util.concurrent.Callable;

public class CreateTask implements Callable<Double> {
	double[] arr = new double[1000];
	double sum;
	public CreateTask(double arr[]) {
		this.sum = 0;
		this.arr = arr;
	}
	@Override
	public Double call() throws Exception {
		for(int i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		System.out.println(Thread.currentThread().getName());
		return sum;
	}

}
