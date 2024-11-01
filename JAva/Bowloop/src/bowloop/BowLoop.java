package bowloop;

import java.util.Random;

import bowloop.LockFriends.Friend;

final class BowLoop implements Runnable{
    private Friend a;
    private Friend b;
    public BowLoop(Friend bower, Friend bowee){
               a = bower;
               b = bowee;
    }
    @Override
    public void run(){
               Random random = new Random();
               for(;;){
                   try {
                       Thread.sleep(random.nextInt(1)); 
		   } catch (InterruptedException ex) {
		   	//… обробка InterruptedException
		   }
                   b.bow(a);
               }
           }
    
    public static void main(String[] args){
        final Friend a = new Friend("A");
        final Friend b = new Friend("B");
        new Thread(new BowLoop(a,b)).start();
        new Thread(new BowLoop(b,a)).start();
    }
}
