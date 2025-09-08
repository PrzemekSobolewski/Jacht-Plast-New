import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Tylko metoda POST jest dozwolona
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      message: 'Metoda nie jest dozwolona', 
      success: false 
    });
  }

  try {
    const { name, email, phone, company, subject, message } = req.body as ContactFormData;

    // Walidacja danych
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Imię, email i wiadomość są wymagane',
        success: false
      });
    }

    // Walidacja formatu email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Nieprawidłowy format adresu email',
        success: false
      });
    }

    // Konfiguracja nodemailer (używamy Gmail SMTP)
    // UWAGA: Dla produkcji należy użyć zmiennych środowiskowych
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.USER_EMAIL,
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN
        },
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    });

    // Szablon HTML dla wiadomości
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #1f4e79 0%, #2b9bba 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">Nowa wiadomość z formularza kontaktowego</h2>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Jacht-Plast - Formularz Kontaktowy</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h3 style="color: #1f4e79; margin-top: 0;">Dane kontaktowe:</h3>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="margin: 0 0 10px 0;"><strong>Imię i nazwisko:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2b9bba;">${email}</a></p>
            ${phone ? `<p style="margin: 0 0 10px 0;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #2b9bba;">${phone}</a></p>` : ''}
            ${company ? `<p style="margin: 0 0 10px 0;"><strong>Firma:</strong> ${company}</p>` : ''}
            <p style="margin: 0;"><strong>Temat:</strong> ${subject || 'Brak tematu'}</p>
          </div>
          
          <h3 style="color: #1f4e79;">Wiadomość:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); border-left: 4px solid #2b9bba;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        
        <div style="background: #1f4e79; color: white; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
          <p style="margin: 0; font-size: 14px; opacity: 0.9;">
            Ta wiadomość została wysłana z formularza kontaktowego na stronie <strong>Jacht-Plast</strong>
          </p>
          <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.7;">
            Data wysłania: ${new Date().toLocaleString('pl-PL')}
          </p>
        </div>
      </div>
    `;

    // Opcje wiadomości email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'jachtplast@gmail.com',
      subject: `Jacht-Plast - ${subject || 'Nowa wiadomość z formularza kontaktowego'}`,
      html: htmlTemplate,
      replyTo: email
    };

    // Wysłanie wiadomości
    await transporter.sendMail(mailOptions);

    // Opcjonalnie: wysłanie potwierdzenia do klienta
    const confirmationMailOptions = {
      from: 'jachtplast@gmail.com',
      to: email,
      subject: 'Potwierdzenie otrzymania wiadomości - Jacht-Plast',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1f4e79 0%, #2b9bba 100%); color: white; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="margin: 0;">Dziękujemy za kontakt!</h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Jacht-Plast</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 10px 10px;">
            <p>Szanowny/a ${name},</p>
            <p>Dziękujemy za wysłanie wiadomości przez nasz formularz kontaktowy. Otrzymaliśmy Państwa zapytanie i odpowiemy na nie w ciągu 24 godzin.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2b9bba;">
              <h4 style="margin: 0 0 10px 0; color: #1f4e79;">Dane Państwa zapytania:</h4>
              <p style="margin: 5px 0;"><strong>Temat:</strong> ${subject || 'Brak tematu'}</p>
              <p style="margin: 5px 0;"><strong>Data wysłania:</strong> ${new Date().toLocaleString('pl-PL')}</p>
            </div>
            
            <p>W razie pilnych spraw prosimy o kontakt telefoniczny:</p>
            <p><strong>Tel:</strong> <a href="tel:+48601256133" style="color: #2b9bba;">+48 601 256 133</a></p>

            <p style="margin-top: 30px;">
              Z poważaniem,<br>
              <strong>Zespół Jacht-Plast</strong>
            </p>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(confirmationMailOptions);
    } catch (confirmationError) {
      console.error('Błąd podczas wysyłania potwierdzenia:', confirmationError);
      // Nie przerywamy procesu, jeśli potwierdzenie się nie uda
    }

    return res.status(200).json({
      message: 'Wiadomość została wysłana pomyślnie!',
      success: true
    });

  } catch (error) {
    console.error('Błąd podczas wysyłania emaila:', error);

    const data = {
        user: process.env.USER_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    }
    
    return res.status(500).json({
      message: JSON.stringify(error) + JSON.stringify(data) || 'Wystąpił błąd podczas wysyłania wiadomości.',
      success: false
    });
  }
}
