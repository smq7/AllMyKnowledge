package threadpoomMatrixmultiplication;

import java.util.concurrent.Callable;

public class TaskMultiple implements Callable<Matrix>{
    private Matrix one;
    private Matrix another;
    
    public TaskMultiple(Matrix one, Matrix another){
       this.one = one;
       this.another = another;
    }
    
    @Override
    public Matrix call() throws Exception {
        return MatrixMathematics.multiply(one, another);
    }
    
}
