import nodemailer from "nodemailer";
import { AdmissionEnquiryInput } from "@/types/admissions";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.zoho.in",
  port: parseInt(process.env.EMAIL_PORT || "465", 10),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendAdminNotification = async (enquiry: AdmissionEnquiryInput & { created_at?: string | Date }) => {
  try {
    const adminEmail = process.env.ADMIN_RECEIVER_EMAIL || "admissions@skylinecyber.in";
    const dateSubmitted = enquiry.created_at ? new Date(enquiry.created_at).toLocaleString() : new Date().toLocaleString();

    const mailOptions = {
      from: `Skyline Admissions <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: "🎓 New Admission Enquiry Received",
      text: `A new admission enquiry has been submitted.

Student Details:
Name: ${enquiry.fullName}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Program: ${enquiry.program}
Lead Source: ${enquiry.leadSource || "N/A"}

Submitted On:
${dateSubmitted}

Please login to the Admin Dashboard to review and follow up.`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Admin notification email sent successfully.");
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    // Don't throw the error - we want the form submission to succeed even if email fails
  }
};

export const sendStudentConfirmation = async (enquiry: AdmissionEnquiryInput) => {
  try {
    const mailOptions = {
      from: `Skyline Admissions <${process.env.EMAIL_USER}>`,
      to: enquiry.email,
      subject: "Thank You for Your Admission Enquiry | Skyline Cyber Security",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p>Dear ${enquiry.fullName},</p>

          <p>Thank you for showing interest in Skyline Cyber Security Solutions & Forensic Consultancy Services.</p>

          <p>We have successfully received your admission enquiry for:</p>
          
          <p><strong>Program:</strong><br/>
          ${enquiry.program}</p>

          <p>Our admissions team will review your details and contact you shortly regarding:</p>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Course Information</li>
            <li>Career Guidance</li>
            <li>Certification Details</li>
            <li>Batch Schedule</li>
            <li>Fee Structure</li>
          </ul>

          <p>If you have any urgent questions, feel free to contact us.</p>

          <p>Best Regards,<br/>
          <strong>Admissions Team</strong><br/>
          Skyline Cyber Security Solutions & Forensic Consultancy Services</p>

          <p>Email: <a href="mailto:admissions@skylinecyber.in">admissions@skylinecyber.in</a><br/>
          Website: <a href="https://yourdomain.com">https://yourdomain.com</a></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Student confirmation email sent successfully.");
  } catch (error) {
    console.error("Failed to send student confirmation email:", error);
    // Don't throw the error - we want the form submission to succeed even if email fails
  }
};
