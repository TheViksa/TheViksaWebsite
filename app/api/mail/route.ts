import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from "date-fns";
export const POST = async (req: Request, res: Response) => {
  try {
    const data = await req.json();
    const { name, email, date, message, numberOfPeople, occasion } = data;

    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
    let emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          color: #333;
      }
      .email-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
      }
      .email-header {
          font-size: 20px;
          margin-bottom: 20px;
      }
      .email-body {
          margin-bottom: 20px;
      }
      .email-footer {
          font-size: 16px;
      }
  </style>
</head>
<body>
  <div class="email-container">
      <div class="email-header">You've got a new message!</div>
      <div class="email-body">
          <p><strong>Od:</strong> ${email}</p>
         
          <p><strong>Ime:</strong> ${name}</p>
      </div>
      <div class="email-message">
      <p><strong>Broj Osoba:</strong></p>
      <p>${numberOfPeople}</p>
      <p><strong>Vrsta Eventa:</strong></p>
      <p>${occasion}</p>
      <p><strong>Zeljeni Datum:</strong></p>
        <p>${date.from ? `od ${format(date.from, "dd-MM-yyyy")} ` : ""} - ${
      date.to ? `do ${format(date.to, "dd-MM-yyyy")}` : ""
    }</p>
          <p><strong>Poruka:</strong></p>
          <p>${message}</p>
      </div>
      
  </div>
</body>
</html>
`;
    const mailOption = {
      from: process.env.SEND_FROM_EMAIL,
      to: process.env.SEND_TO_EMAIL,
      subject: `Poruka od ${name} - ${email}`,
      html: emailHTML,
    };
    await transporter.sendMail(mailOption);
    return NextResponse.json({ success: true, message: data });
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
