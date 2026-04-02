export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#C05010] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-[0.2em] uppercase text-[#5C6470]">
          Loading
        </p>
      </div>
    </div>
  );
}
