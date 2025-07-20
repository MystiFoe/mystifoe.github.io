import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Configure nodemailer (would use environment variables in production)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER || "giritharanmani1@gmail.com",
          pass: process.env.SMTP_PASS || "your-app-password"
        }
      });

      // Email to the portfolio owner
      await transporter.sendMail({
        from: process.env.SMTP_USER || "giritharanmani1@gmail.com",
        to: "giritharanmani1@gmail.com",
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `
      });

      // Auto-reply to the sender
      await transporter.sendMail({
        from: process.env.SMTP_USER || "giritharanmani1@gmail.com",
        to: validatedData.email,
        subject: "Thank you for reaching out!",
        html: `
          <h2>Thank you for your message, ${validatedData.firstName}!</h2>
          <p>I have received your message and will get back to you within 24 hours.</p>
          <p>Best regards,<br>Giritharan Mani</p>
        `
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  // Serve resume file
  app.get("/resume.pdf", (req, res) => {
    // In a real application, this would serve the actual resume file
    res.status(404).json({ message: "Resume file not found. Please upload resume.pdf to the public directory." });
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
