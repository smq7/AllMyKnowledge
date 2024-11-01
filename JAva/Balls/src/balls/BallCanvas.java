package balls;

import java.awt.Color;
import java.awt.Graphics; 
import java.awt.Graphics2D; 
import java.util.ArrayList; 
import javax.swing.JPanel;
import balls.Ball;



public class BallCanvas extends JPanel {
	  private ArrayList<Ball> balls = new ArrayList<Ball>();	  
	  public void add(Ball b){
		this.balls.add(b);
	  }
	  
	  @Override
	  public void paintComponent(Graphics g){ 
	    super.paintComponent(g);
	    Graphics2D g2 = (Graphics2D)g; 
	    for(int i=0; i<balls.size();i++) { 
	    		Ball b = balls.get(i);
	    		b.draw(g2);
	    }
	  }
}