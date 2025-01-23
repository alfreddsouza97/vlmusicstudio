// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, service, message } = body;

//     const data = await resend.emails.send({
//       from: 'VL Studios <onboarding@resend.dev>',
//       to: ['alfreddsouza97@gmail.com'],
//       subject: 'New Contact Form Submission - VL Studios',
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
//   }
// }


// //working only locally

// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     // Parse the JSON body
//     const body = await request.json();
//     const { name, email, phone, service, message } = body;

//     if (!name || !email || !service || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields: name, email, service, and message are mandatory.' },
//         { status: 400 }
//       );
//     }

//     // Send email using Resend
//     const data = await resend.emails.send({
//       from: 'VL Studios <onboarding@resend.dev>',
//       to: ['vlmusicstudio@gmail.com'], // Replace with your email address to who you want to send to
//       subject: 'New Contact Form Submission - VL Studios',
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     // Respond with success
//     return NextResponse.json({ success: true, data });
//   } catch (error: any) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: error.message || 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, and message are mandatory.' },
        { status: 400 }
      );
    }

    // Prepare email payload
    const emailData = {
      from: 'VL Studios <onboarding@resend.dev>',
      to: ['alfreddsouza97@gmail.com'], // Replace with your email address to who you want to send to
      subject: 'New Contact Form Submission - VL Studios',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email via the Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Ensure this key is set in your environment variables
      },
      body: JSON.stringify(emailData),
    });

    // Check for errors
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from Resend API:', errorData);
      return NextResponse.json(
        { error: errorData.message || 'Failed to send email' },
        { status: response.status }
      );
    }

    const responseData = await response.json();

    // Respond with success
    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
