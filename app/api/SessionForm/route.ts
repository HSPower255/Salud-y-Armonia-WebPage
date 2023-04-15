import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { first, last, email, phone, message } = await req.json()

  const user = process.env.user;
  const pass = process.env.pass;

  const data = {
    first,
    last,
    email,
    phone,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'saludyarmoniaas@gmail.com',
      replyTo: email,
      subject: `Nueva petición de Cita de: ${first} ${last}`,
      html: `
    <p><strong>Nombre:</strong> ${first} ${last}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Número de teléfono:</strong> ${phone}</p>
    <p><strong>Detalles de la Reserva:</strong> ${message}</p>
  `,
    });
    return NextResponse.json({data}, {status: 201})
  } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500})
  }
}
