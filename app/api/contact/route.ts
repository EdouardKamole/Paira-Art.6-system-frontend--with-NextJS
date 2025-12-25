// app/api/contact/route.ts
// ALTERNATIVE SOLUTION: Use Gmail SMTP (no domain needed!)
// This will send emails directly from your Gmail account

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import nodemailer from 'nodemailer';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail: peterpaira43@gmail.com
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your regular password!)
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      contactMethod,
      contactInfo,
      photoshootType,
      location,
      needServices,
      budget,
      message,
    } = body;

    if (!name || !contactMethod || !contactInfo || !photoshootType || !location || !needServices || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create document in Sanity
    const result = await client.create({
      _type: 'contact',
      name,
      preferredContact: contactMethod,
      contactInfo,
      photoshootType,
      location,
      additionalServices: needServices,
      budget,
      detailedRequest: message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    });

    console.log('✅ Contact form submitted to Sanity:', result._id);

    // Send notification email to YOU
    try {
      await transporter.sendMail({
        from: `"Paira Art Contact Form" <${process.env.GMAIL_USER}>`,
        to: 'peterpaira43@gmail.com',
        replyTo: contactInfo,
        subject: `🔔 New Inquiry from ${name} - ${photoshootType}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎉 New Contact Form Submission!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Someone wants to work with Paira Art</p>
            </div>
            
            <div style="background-color: #fff; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-left: 5px solid #11998e;">
              <h2 style="color: #2c3e50; margin-top: 0; margin-bottom: 20px; font-size: 22px;">👤 Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600; width: 40%;">Name:</td>
                  <td style="padding: 12px 10px; color: #2c3e50; font-weight: 600; font-size: 16px;">${name}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600;">Preferred Contact:</td>
                  <td style="padding: 12px 10px; color: #2c3e50;">${contactMethod}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600;">Contact Info:</td>
                  <td style="padding: 12px 10px; color: #2c3e50;"><a href="mailto:${contactInfo}" style="color: #667eea; text-decoration: none;">${contactInfo}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fff; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); border-left: 5px solid #667eea;">
              <h2 style="color: #2c3e50; margin-top: 0; margin-bottom: 20px; font-size: 22px;">📸 Project Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600; width: 40%;">Photoshoot Type:</td>
                  <td style="padding: 12px 10px; color: #2c3e50; font-weight: 600;">${photoshootType}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600;">Location:</td>
                  <td style="padding: 12px 10px; color: #2c3e50;">${location}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600;">Additional Services:</td>
                  <td style="padding: 12px 10px; color: #2c3e50;">${needServices}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 12px 10px; color: #7f8c8d; font-weight: 600;">Budget:</td>
                  <td style="padding: 12px 10px; color: #2c3e50; font-weight: 600;">${budget}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #ffc107;">
              <h3 style="color: #856404; margin-top: 0; margin-bottom: 15px;">💬 Client's Message:</h3>
              <div style="background: white; padding: 20px; border-radius: 5px; color: #2c3e50; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${message}</div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
              <p style="color: #2c3e50; margin: 0 0 10px 0; font-size: 15px;">
                <strong>⚡ Click "Reply" to respond directly to ${name}</strong>
              </p>
            </div>
          </div>
        `,
      });
      console.log('✅ Admin notification sent to Gmail!');
    } catch (emailError) {
      console.error('❌ Admin email error:', emailError);
    }

    // Send confirmation to client
    if (contactMethod.toLowerCase() === 'email') {
      try {
        await transporter.sendMail({
          from: `"Paira Art" <${process.env.GMAIL_USER}>`,
          to: contactInfo,
          replyTo: 'peterpaira43@gmail.com',
          subject: 'Thank You for Contacting Paira Art! 📸',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2c3e50;">Hello ${name}! 👋</h1>
              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to <strong>Paira Art</strong>! We've received your inquiry about <strong>${photoshootType}</strong> and are excited to work with you.
              </p>
              <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #2e7d32; font-size: 16px; margin: 0; line-height: 1.6;">
                  <strong>📅 What's Next?</strong><br>
                  I'll personally review your request and get back to you within 24-48 hours. 
                  We'll discuss your vision and how we can bring it to life!
                </p>
              </div>
              <p style="margin-top: 30px;">
                Looking forward to working with you!<br><br>
                Best regards,<br>
                <strong>Paira Art Team</strong> 📸
              </p>
            </div>
          `,
        });
        console.log('✅ Client confirmation sent!');
      } catch (emailError) {
        console.error('❌ Client email error:', emailError);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been submitted successfully!',
        id: result._id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}