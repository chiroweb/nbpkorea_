import NewsForm from "@/components/admin/NewsForm";

export default function NewNewsPage() {
  return (
    <div>
      <h1 className="text-xl font-light tracking-[0.1em] text-[#2d2a28] mb-8">새 공지사항 작성</h1>
      <NewsForm />
    </div>
  );
}
