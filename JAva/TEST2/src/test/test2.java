package test;

import java.net.*;
import java.util.logging.*; 

public class test2 {

	public static void main(String[] args){
        First first = new First();
        Second second = new Second(first);
        first.start();
        second.start();
    }

}
