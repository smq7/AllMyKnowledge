package threadpoomMatrixmultiplication;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ThreadPoolMatrixMultiplication {
    public static void main(String[] args) throws InterruptedException, 								ExecutionException{
       Matrix a = new Matrix(1000,1000);
       Matrix b = new Matrix(1000,1000);
       a.setAllValues(1.0);
       b.setAllValues(1.0); 
       concurrencyMultiple(a,b,100).print();     
    }    
    public static Matrix concurrencyMultiple(Matrix a, Matrix b, int numTasks) 			       throws InterruptedException, ExecutionException {
       Matrix c = new Matrix(a.getNrows(),b.getNcols()); 
       int cols = a.getNcols();
       int rows = a.getNrows();
       int r = rows/numTasks;
       ExecutorService executor = Executors.newFixedThreadPool(2);
       List<TaskMultiply> tasks = new ArrayList<>();
       for(int j=0;j<numTasks; j++){
         tasks.add(j,new TaskMultiply(a.getFragment(r*j, r*j+r-1, 0, cols-1),b));
       }
       List<Future<Matrix>> result = executor.invokeAll(tasks);
       executor.shutdown();
       for (int j=0; j<numTasks; j++)        
          c.setFragment(result.get(num).get(), r*num, r*num+r-1, 0, cols-1);       
       return c;    
    }
 }
