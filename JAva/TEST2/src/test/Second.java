package test;

import java.util.logging.Level;
import java.util.logging.Logger;


public class Second extends Thread{
    private Thread thread;
    public Second(Thread t){
        this.thread = t;
    }
    
    @Override
    public void run(){
        try {
            Thread.sleep(1000);
	  System.out.println("isInterrupted = " +thread.isInterrupted());   
            thread.interrupt();
	  thread.join();
	  System.out.println("isInterrupted = " +thread.isInterrupted());
        } catch (InterruptedException ex) {
            Logger.getLogger(Second.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
