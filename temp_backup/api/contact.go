package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"os"
	"regexp"
	"strings"
)

// ContactRequest represents the structure of incoming contact form data
type ContactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

// ContactResponse represents the API response
type ContactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// Contact handles contact form submissions
func Contact(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	// Handle preflight OPTIONS request
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Only allow POST requests
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse JSON request body
	var contactReq ContactRequest
	if err := json.NewDecoder(r.Body).Decode(&contactReq); err != nil {
		respondWithError(w, "Invalid JSON format", http.StatusBadRequest)
		return
	}

	// Validate input
	if err := validateContactRequest(contactReq); err != nil {
		respondWithError(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Send email
	if err := sendEmail(contactReq); err != nil {
		respondWithError(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	// Success response
	response := ContactResponse{
		Success: true,
		Message: "Message sent successfully! I'll get back to you soon.",
	}

	json.NewEncoder(w).Encode(response)
}

// validateContactRequest validates the contact form data
func validateContactRequest(req ContactRequest) error {
	// Check required fields
	if strings.TrimSpace(req.Name) == "" {
		return fmt.Errorf("name is required")
	}
	if strings.TrimSpace(req.Email) == "" {
		return fmt.Errorf("email is required")
	}
	if strings.TrimSpace(req.Message) == "" {
		return fmt.Errorf("message is required")
	}

	// Validate email format
	emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
	if !emailRegex.MatchString(req.Email) {
		return fmt.Errorf("invalid email format")
	}

	// Check length limits
	if len(req.Name) > 100 {
		return fmt.Errorf("name must be less than 100 characters")
	}
	if len(req.Subject) > 200 {
		return fmt.Errorf("subject must be less than 200 characters")
	}
	if len(req.Message) > 2000 {
		return fmt.Errorf("message must be less than 2000 characters")
	}

	return nil
}

// sendEmail sends the contact form email
func sendEmail(req ContactRequest) error {
	// Get environment variables
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")
	toEmail := os.Getenv("TO_EMAIL")

	// Use Gmail SMTP as default for development
	if smtpHost == "" {
		smtpHost = "smtp.gmail.com"
		smtpPort = "587"
	}

	// Default recipient email
	if toEmail == "" {
		toEmail = "conniexu444@gmail.com"
	}

	// Create email content
	subject := req.Subject
	if subject == "" {
		subject = "New Contact Form Submission"
	}

	body := fmt.Sprintf(`
New contact form submission from your portfolio:

Name: %s
Email: %s
Subject: %s

Message:
%s

---
Sent from your portfolio website
`, req.Name, req.Email, subject, req.Message)

	// Create email message
	message := []byte(fmt.Sprintf(
		"To: %s\r\nSubject: Portfolio Contact: %s\r\n\r\n%s",
		toEmail, subject, body,
	))

	// Only send email if SMTP credentials are configured
	if smtpUser != "" && smtpPass != "" {
		// Set up authentication
		auth := smtp.PlainAuth("", smtpUser, smtpPass, smtpHost)

		// Send email
		err := smtp.SendMail(
			smtpHost+":"+smtpPort,
			auth,
			smtpUser,
			[]string{toEmail},
			message,
		)
		if err != nil {
			return fmt.Errorf("failed to send email: %v", err)
		}
	}

	// For development/demo purposes, log the message
	fmt.Printf("Contact form submission received:\nName: %s\nEmail: %s\nSubject: %s\nMessage: %s\n",
		req.Name, req.Email, subject, req.Message)

	return nil
}

// respondWithError sends an error response
func respondWithError(w http.ResponseWriter, message string, statusCode int) {
	w.WriteHeader(statusCode)
	response := ContactResponse{
		Success: false,
		Message: message,
	}
	json.NewEncoder(w).Encode(response)
}