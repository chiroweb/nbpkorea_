"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C05010",
                marginBottom: "16px",
              }}
            >
              Critical Error
            </p>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#2d2a28",
                marginBottom: "24px",
              }}
            >
              오류 발생
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#8B95A1",
                lineHeight: 2,
                marginBottom: "32px",
              }}
            >
              예기치 못한 오류가 발생했습니다.
            </p>
            <button
              onClick={reset}
              style={{
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border: "1px solid #2d2a28",
                padding: "12px 24px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
