
import { NextResponse } from "next/server"
const { EmailTemplate } = require('../../../components/email-template');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function POST(req,res) {
    const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'pcodes<onboarding@resend.dev>',
      to: ['patash248@gmail.com'],
      subject: 'Hello worldddd',
      react: EmailTemplate({ firstName: 'Jake' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

module.exports = { POST };
