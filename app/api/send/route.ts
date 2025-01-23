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


// working only locally

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



// using resend api instead of local

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request): Promise<Response> {
  try {
    // Parse the JSON body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields: name, email, service, and message are mandatory.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Make the API request to Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Access-Control-Allow-Origin': '*', // Update this to restrict origins as needed
      },
      body: JSON.stringify({
        from: 'VL Studios <onboarding@resend.dev>',
        to: ['vlmusicstudio@gmail.com'], // Replace with your recipient email
        subject: 'New Contact Form Submission - VL Studios',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorDetails = await res.text();
      console.error('Resend API Error:', errorDetails);
      return new Response(
        JSON.stringify({ error: 'Failed to send email through Resend.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await res.json();

    // Respond with success
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Unexpected error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
