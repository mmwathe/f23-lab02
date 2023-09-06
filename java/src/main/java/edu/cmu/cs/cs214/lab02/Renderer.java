package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    private Rectangle rectangle;
    private double height;
    private double width;

    
    Renderer(double height, double width) {
        this.height = height;
        this.width = width;
        this.rectangle = new Rectangle(height, width);
    }

    void draw() {
        double area = rectangle.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
