package wut;

public class aThread extends Thread{
	int i;	
	public aThread(int i) {
		this.i = i;
	}
	
	public void run(){
		this.i += 1; 
	}
	public int getI() {
		return this.i;
	}
}
