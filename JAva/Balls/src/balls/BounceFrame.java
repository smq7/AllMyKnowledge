package balls;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton; 
import javax.swing.JFrame; 
import javax.swing.JPanel; 

public class BounceFrame extends JFrame {
  private BallCanvas canvas;
  public static final int WIDTH = 450;
  public static final int HEIGHT = 350;

  public BounceFrame() {
     this.setSize(WIDTH, HEIGHT); 
     this.setTitle("Bounce program");

     this.canvas = new BallCanvas();
     System.out.println("In Frame Thread name = " + Thread.currentThread().getName()); 
     Container content = this.getContentPane();
     content.add(this.canvas, BorderLayout.CENTER);

     JPanel buttonPanel = new JPanel(); 
     buttonPanel.setBackground(Color.lightGray);

     JButton buttonStart = new JButton("Start"); 
     JButton buttonStop = new JButton("Stop");
     JButton buttonRed = new JButton("Red");

     buttonStart.addActionListener(new ActionListener() { 
         @Override
         public void actionPerformed(ActionEvent e) {

           Ball b = new Ball(canvas,Color.DARK_GRAY);
           canvas.add(b);
           BallThread thread = new BallThread(b);
           thread.setPriority(Thread.MIN_PRIORITY);
           thread.start();
           System.out.println("Thread name = " + thread.getName());
    	}
        });
     buttonRed.addActionListener(new ActionListener() { 
         @Override
         public void actionPerformed(ActionEvent e) {

           Ball b = new Ball(canvas, Color.RED);
           canvas.add(b);
           BallThread thread = new BallThread(b);
           thread.setPriority(Thread.MAX_PRIORITY);
           thread.start();
           System.out.println("Thread name = " + thread.getName());
    	}
        });

       buttonStop.addActionListener(new ActionListener() { 
         @Override
         public void actionPerformed(ActionEvent e) { 
        	 System.exit(0);
         } 
       });
       buttonPanel.add(buttonStart); 
       buttonPanel.add(buttonStop);
       buttonPanel.add(buttonRed);

      content.add(buttonPanel, BorderLayout.SOUTH);
    }
   }
