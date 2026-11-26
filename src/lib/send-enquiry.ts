import { createServerFn } from "@tanstack/react-start";

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  subject?: string | undefined;
  solution?: string | undefined;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendEnquiryEmail = createServerFn({ method: "POST" })
  .validator((data: unknown): ContactFormData => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request payload");
    }
    const d = data as Record<string, unknown>;

    const name = String(d["name"] || "").trim();
    const email = String(d["email"] || "").trim();
    const mobile = String(d["mobile"] || "").trim();
    const message = String(d["message"] || "").trim();
    const subject = d["subject"] ? String(d["subject"]).trim() : undefined;
    const solution = d["solution"] ? String(d["solution"]).trim() : undefined;

    if (!name || name.length < 2) {
      throw new Error("Please enter a valid full name.");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      throw new Error("Please enter a valid email address.");
    }
    if (!mobile || mobile.replace(/\D/g, "").length < 10) {
      throw new Error("Please enter a valid 10-digit mobile number.");
    }
    if (!message || message.length < 5) {
      throw new Error("Please enter an enquiry message.");
    }

    return { name, email, mobile, subject, solution, message };
  })
  .handler(async ({ data }): Promise<SendEmailResponse> => {
    try {
      console.log("[sendEnquiryEmail] Processing enquiry from:", data.name, data.email);
      const nodemailerModule = await import("nodemailer");
      const nodemailer = nodemailerModule.default || nodemailerModule;

      const host = process.env["SMTP_HOST"] || "smtp.gmail.com";
      const port = Number(process.env["SMTP_PORT"] || 465);
      const secure = process.env["SMTP_SECURE"] === "false" ? false : true;
      const user = process.env["SMTP_USER"] || "contact@suyog.net";
      const pass = (process.env["SMTP_PASS"] || "zpkb jjji wiqs ztzl").replace(/\s+/g, "");
      const to = process.env["MAIL_TO"] || "preet.kalsi@suyog.net";
      const from = process.env["MAIL_FROM"] || `"SUYOG Enquiries" <${user}>`;

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      const enquiryTitle = data.subject || data.solution || "General Enquiry";
      const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      });

      const cleanName = escapeHtml(data.name);
      const cleanEmail = escapeHtml(data.email);
      const cleanMobile = escapeHtml(data.mobile);
      const cleanTitle = escapeHtml(enquiryTitle);
      const cleanMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");

      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); padding: 32px 28px; text-align: left;">
        <span style="display: inline-block; padding: 4px 12px; background: rgba(255, 255, 255, 0.2); border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ffffff; margin-bottom: 8px;">
          SUYOG Website Lead
        </span>
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
          New Customer Enquiry Received
        </h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #bfdbfe;">
          Received on ${timestamp} (IST)
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <tr style="background: #f8fafc;">
            <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; width: 35%; border-bottom: 1px solid #e2e8f0;">
              Customer Name
            </td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
              ${cleanName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
              Mobile Number
            </td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #1e40af; border-bottom: 1px solid #e2e8f0;">
              <a href="tel:${cleanMobile}" style="color: #2563eb; text-decoration: none; font-weight: 700;">${cleanMobile}</a>
            </td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0;">
              Email Address
            </td>
            <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
              <a href="mailto:${cleanEmail}" style="color: #2563eb; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">
              Subject / Solution
            </td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0f172a;">
              ${cleanTitle}
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-bottom: 24px;">
          <h3 style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">
            Customer Message:
          </h3>
          <div style="background: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155;">
            ${cleanMessage}
          </div>
        </div>

        <!-- Quick Action Buttons -->
        <div style="text-align: center; padding-top: 12px; border-top: 1px solid #f1f5f9;">
          <a href="mailto:${cleanEmail}?subject=Re:%20Enquiry%20regarding%20${encodeURIComponent(enquiryTitle)}%20-%20SUYOG" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 700; margin: 4px;">
            Reply to ${cleanName}
          </a>
          <a href="tel:${cleanMobile}" style="display: inline-block; padding: 12px 24px; background: #059669; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 700; margin: 4px;">
            Call ${cleanMobile}
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background: #f8fafc; padding: 16px 28px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
        This notification was automatically sent by the SUYOG Website Lead System via contact@suyog.net.
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      const textContent = `
New Website Enquiry Received
----------------------------------------
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email}
Subject / Solution: ${enquiryTitle}
Date: ${timestamp}

Message:
${data.message}

----------------------------------------
Sent via contact@suyog.net to ${to}
      `.trim();

      const info = await transporter.sendMail({
        from,
        to,
        replyTo: data.email,
        subject: `[SUYOG Lead] ${enquiryTitle} - ${data.name}`,
        text: textContent,
        html: htmlContent,
      });

      console.log("[sendEnquiryEmail] Email delivered successfully! MessageId:", info.messageId);

      return {
        success: true,
        message: "Thank you! Your enquiry has been sent successfully. We will get back to you shortly.",
      };
    } catch (err: unknown) {
      console.error("Failed to send enquiry email:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to send email";
      throw new Error(`Unable to deliver enquiry: ${errorMessage}`);
    }
  });
