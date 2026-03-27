"use client";

import { ContentBlock } from "@/lib/types";

interface Props {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

const BLOCK_LABELS: Record<string, string> = {
  h2: "제목 (H2)",
  h3: "소제목 (H3)",
  p: "단락 (P)",
  ul: "목록 (UL)",
};

export default function ContentEditor({ blocks, onChange }: Props) {
  function addBlock(type: ContentBlock["type"]) {
    const newBlock: ContentBlock =
      type === "ul"
        ? { type: "ul", items: [""] }
        : { type, text: "" } as ContentBlock;
    onChange([...blocks, newBlock]);
  }

  function removeBlock(index: number) {
    onChange(blocks.filter((_, i) => i !== index));
  }

  function moveBlock(index: number, direction: -1 | 1) {
    const arr = [...blocks];
    const target = index + direction;
    if (target < 0 || target >= arr.length) return;
    [arr[index], arr[target]] = [arr[target], arr[index]];
    onChange(arr);
  }

  function updateText(index: number, text: string) {
    const arr = [...blocks];
    const block = arr[index];
    if (block.type !== "ul") {
      arr[index] = { ...block, text } as ContentBlock;
    }
    onChange(arr);
  }

  function updateItem(blockIndex: number, itemIndex: number, value: string) {
    const arr = [...blocks];
    const block = arr[blockIndex];
    if (block.type === "ul") {
      const items = [...block.items];
      items[itemIndex] = value;
      arr[blockIndex] = { type: "ul", items };
    }
    onChange(arr);
  }

  function addItem(blockIndex: number) {
    const arr = [...blocks];
    const block = arr[blockIndex];
    if (block.type === "ul") {
      arr[blockIndex] = { type: "ul", items: [...block.items, ""] };
    }
    onChange(arr);
  }

  function removeItem(blockIndex: number, itemIndex: number) {
    const arr = [...blocks];
    const block = arr[blockIndex];
    if (block.type === "ul") {
      arr[blockIndex] = { type: "ul", items: block.items.filter((_, i) => i !== itemIndex) };
    }
    onChange(arr);
  }

  return (
    <div className="space-y-3">
      {blocks.map((block, i) => (
        <div key={i} className="border border-[#D4DAE2] rounded p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] tracking-[0.15em] text-[#C05010] uppercase font-medium">
              {BLOCK_LABELS[block.type]}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => moveBlock(i, -1)}
                disabled={i === 0}
                className="text-[#8B95A1] hover:text-[#2d2a28] disabled:opacity-30 text-xs px-1"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => moveBlock(i, 1)}
                disabled={i === blocks.length - 1}
                className="text-[#8B95A1] hover:text-[#2d2a28] disabled:opacity-30 text-xs px-1"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => removeBlock(i)}
                className="text-red-400 hover:text-red-600 text-xs px-1"
              >
                삭제
              </button>
            </div>
          </div>

          {block.type === "ul" ? (
            <div className="space-y-2">
              {block.items.map((item, j) => (
                <div key={j} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateItem(i, j, e.target.value)}
                    className="flex-1 border border-[#D4DAE2] px-3 py-1.5 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010]"
                    placeholder={`항목 ${j + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(i, j)}
                    className="text-red-400 hover:text-red-600 text-xs px-2"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addItem(i)}
                className="text-xs text-[#8B95A1] hover:text-[#C05010] tracking-wide"
              >
                + 항목 추가
              </button>
            </div>
          ) : block.type === "p" ? (
            <textarea
              value={block.text ?? ""}
              onChange={(e) => updateText(i, e.target.value)}
              rows={3}
              className="w-full border border-[#D4DAE2] px-3 py-2 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010] resize-y"
              placeholder="본문 내용 입력..."
            />
          ) : (
            <input
              type="text"
              value={"text" in block ? (block.text ?? "") : ""}
              onChange={(e) => updateText(i, e.target.value)}
              className="w-full border border-[#D4DAE2] px-3 py-1.5 text-sm text-[#2d2a28] focus:outline-none focus:border-[#C05010]"
              placeholder={block.type === "h2" ? "제목 입력..." : "소제목 입력..."}
            />
          )}
        </div>
      ))}

      {/* Add block buttons */}
      <div className="flex flex-wrap gap-2 pt-2">
        {(["h2", "h3", "p", "ul"] as ContentBlock["type"][]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => addBlock(type)}
            className="border border-dashed border-[#D4DAE2] text-[11px] tracking-[0.1em] text-[#8B95A1] px-3 py-1.5 hover:border-[#C05010] hover:text-[#C05010] transition-colors"
          >
            + {BLOCK_LABELS[type]}
          </button>
        ))}
      </div>
    </div>
  );
}
