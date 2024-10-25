package test;

import java.util.logging.Level;
import java.util.logging.Logger;


public class First extends Thread {

    @Override
    public void run(){
    	State state = Thread.currentThread().getState();
        System.out.println(state);
        try {
        	System.out.println("tic….+ "  );	
            Thread.sleep(4000);
        } catch (InterruptedException ex) {
            System.out.println("InterruptedException occured.");
	  Logger.getLogger(First.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}