import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 });
    }

    const typeLabels: Record<string, string> = {
      product: "제품 상담",
      as: "유지보수 / A/S",
      quote: "견적 요청",
      other: "기타 문의",
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NBPKOREA 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[홈페이지 문의] ${typeLabels[type] || type} — ${company || "개인"} ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #C05010; border-bottom: 2px solid #C05010; padding-bottom: 8px;">홈페이지 문의</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #888; width: 100px;">이름</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">회사명</td><td style="padding: 8px 0;">${company || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">이메일</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">문의 유형</td><td style="padding: 8px 0;">${typeLabels[type] || type || "-"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f9f9f9; border-left: 3px solid #C05010;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">이 메일은 NBPKOREA 홈페이지 문의 양식에서 자동 발송되었습니다.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "메일 전송에 실패했습니다." }, { status: 500 });
  }
}
