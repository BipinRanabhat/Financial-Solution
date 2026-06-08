import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SERVICE_LABELS = {
  bookkeeping:   'Bookkeeping & Accounting',
  payroll:       'Payroll Processing',
  tax:           'Tax Planning & Filing',
  cfo:           'CFO Advisory',
  reporting:     'Financial Reporting',
  digital:       'Digital Presence Management',
  general:       'General Inquiry',
}

function buildHtml({ name, email, phone, service, message }) {
  const serviceLabel = SERVICE_LABELS[service] || service || 'Not specified'
  const phoneDisplay = phone || 'Not provided'
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const field = (label, value) => `
    <tr>
      <td style="padding:0 0 16px 0;">
        <div style="font-size:11px;font-weight:700;color:#64748B;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:5px;">${label}</div>
        <div style="font-size:14px;color:#0F172A;font-weight:500;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:10px 14px;line-height:1.6;">${value}</div>
      </td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Enquiry — Vanguard</title></head>
<body style="margin:0;padding:0;background:#EFF4FB;font-family:Inter,ui-sans-serif,system-ui,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#EFF4FB;padding:40px 16px;">
  <tr><td align="center">
    <table style="max-width:580px;width:100%;" cellpadding="0" cellspacing="0">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#1D4ED8 0%,#1E3A8A 100%);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
          <div style="font-size:24px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;margin-bottom:4px;">VANGUARD</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.65);letter-spacing:0.22em;text-transform:uppercase;">Financial Solutions</div>
          <div style="margin-top:20px;display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.22);border-radius:20px;padding:6px 18px;font-size:12px;font-weight:700;color:#fff;letter-spacing:0.06em;">
            🔔 New Client Enquiry
          </div>
        </td>
      </tr>

      <!-- Alert bar -->
      <tr>
        <td style="background:#059669;padding:10px 36px;text-align:center;">
          <span style="font-size:12px;font-weight:700;color:#fff;letter-spacing:0.06em;">ACTION REQUIRED — Respond within 1 hour</span>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#ffffff;padding:36px;border-left:1px solid #E2E8F0;border-right:1px solid #E2E8F0;">
          <div style="font-size:22px;font-weight:800;color:#0F172A;margin-bottom:4px;">Hello Manish,</div>
          <div style="font-size:14px;color:#64748B;margin-bottom:32px;line-height:1.6;">
            A new enquiry has been submitted through the Vanguard website. Here are the client's details:
          </div>

          <table width="100%" cellpadding="0" cellspacing="0">
            ${field('Full Name', name)}
            ${field('Email Address', `<a href="mailto:${email}" style="color:#1D4ED8;text-decoration:none;">${email}</a>`)}
            ${field('Phone Number', phoneDisplay)}
            ${field('Service Interested In', serviceLabel)}
            ${field('Message', message.replace(/\n/g, '<br>'))}
          </table>

          <!-- Reply CTA -->
          <div style="text-align:center;margin-top:24px;">
            <a href="mailto:${email}?subject=Re: Your Enquiry — Vanguard Financial Solutions"
               style="display:inline-block;background:linear-gradient(135deg,#1D4ED8,#1E3A8A);color:#fff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.02em;">
              Reply to ${name} →
            </a>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 16px 16px;padding:20px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size:11px;color:#94A3B8;">
                Submitted on ${now} (Nepal Time)
              </td>
              <td align="right" style="font-size:11px;color:#94A3B8;">
                vanguardfinancialsolution.com
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, service, message } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'Vanguard Website <noreply@vanguardfinancialsolution.com>',
      to:   'ManishWagle@vanguardfinancialsolution.com',
      replyTo: email,
      subject: `New Enquiry from ${name}${service ? ` — ${SERVICE_LABELS[service] || service}` : ''}`,
      html: buildHtml({ name, email, phone, service, message }),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
