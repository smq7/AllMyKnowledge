package deadLock;

public class Deadlock {
	 static class Friend {
	   private final String name;

	   public Friend(String name) {      this.name = name;      }
	   public String getName() {        return this.name;      }

	   public synchronized void bow(Friend other) {
	    System.out.format("%s: %s" + " has bowed to me!%n",name,other.getName());
		other.bowBack(this);
	   }
	   public synchronized void bowBack(Friend other) {
	    System.out.format("%s: %s" + " has bowed back to me!%n",name,other.getName());
	   }
	 }
	 public class Main {
			public static void main(String[] args) {
		        final Friend a = new Friend("A");
		        final Friend b = new Friend("B");
		        new Thread(new Runnable() {
		            public void run() { a.bow(b); }
		        }).start();
		        new Thread(new Runnable() {
		            public void run() { b.bow(a); }
		        }).start();
		    }
		}

		}
