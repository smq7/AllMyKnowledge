package balls;


import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Bounce
{
	public static void main(String[] args) {
		BounceFrame frame = new BounceFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		frame.setVisible(true);
		System.out.println("Truead name = " + Thread.currentThread().getName());
	}
}

