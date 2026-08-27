import catalogRaw from "../../data/catalog.json";
import fs from "fs";
import path from "path";

export type Product = {
  ref: string;
  name_vn: string;
  subcat: string;
  price: number;
  img: string;
  slug: string;
  category: string;
  categoryLabel: string;
};

export type Category = {
  key: string;
  label: string;
  count: number;
};

type RawCatalog = Record<
  string,
  {
    label: string;
    items: {
      ref: string;
      name_vn: string;
      subcat?: string;
      price: number;
      img: string;
      url: string;
    }[];
  }
>;

function slugFromUrl(url: string): string {
  // url looks like http://localhost:8080/some-slug/ -> "some-slug"
  const parts = url.replace(/^https?:\/\/[^/]+\//, "").split("/").filter(Boolean);
  return parts[0] ?? "";
}

const catalog = catalogRaw as unknown as RawCatalog;

let _products: Product[] | null = null;

export function getAllProducts(): Product[] {
  if (_products) return _products;
  const out: Product[] = [];
  for (const [catKey, cat] of Object.entries(catalog)) {
    for (const item of cat.items) {
      out.push({
        ref: item.ref,
        name_vn: item.name_vn,
        subcat: item.subcat ?? "",
        price: item.price,
        img: item.img,
        slug: slugFromUrl(item.url),
        category: catKey,
        categoryLabel: cat.label,
      });
    }
  }
  _products = out;
  return out;
}

export function getCategories(): Category[] {
  return Object.entries(catalog).map(([key, cat]) => ({
    key,
    label: cat.label,
    count: cat.items.length,
  }));
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductByRef(ref: string): Product | undefined {
  return getAllProducts().find((p) => p.ref === ref);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return getAllProducts()
    .filter((p) => p.category === product.category && p.ref !== product.ref)
    .slice(0, limit);
}

export function getTotalProductCount(): number {
  return getAllProducts().length;
}

export function getCategoryCount(): number {
  return getCategories().length;
}

// --- Specs ---

type SpecsMap = Record<string, Record<string, string>>;

let _specs: SpecsMap | null = null;

export function getAllSpecs(): SpecsMap {
  if (_specs) return _specs;
  const filePath = path.join(process.cwd(), "data", "specs-data.jsonl");
  const map: SpecsMap = {};
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      const row = JSON.parse(trimmed) as { ref: string; specs: Record<string, string> };
      if (row?.ref) map[row.ref] = row.specs;
    }
  } catch {
    // no specs file, ignore
  }
  _specs = map;
  return map;
}

const SPEC_LABEL_VN: Record<string, string> = {
  Series: "Dòng sản phẩm",
  hp: "Công suất",
  Watts: "Công suất (W)",
  "Air Inlet Thread": "Ren đầu nối khí",
  "Air Pressure [Bar]": "Áp suất khí (Bar)",
  "Air Pressure [PSIG]": "Áp suất khí (PSI)",
  "Exhaust Type": "Kiểu xả khí",
  "Height (in)": "Chiều cao (inch)",
  "Height (mm)": "Chiều cao (mm)",
  "Hose I.D.": "Đường kính ống dẫn khí",
  "Length (in)": "Chiều dài (inch)",
  "Length (mm)": "Chiều dài (mm)",
  "Max. RPM": "Tốc độ tối đa (RPM)",
  "Max. SFPM": "Tốc độ băng tối đa (SFPM)",
  "Motor Type": "Loại động cơ",
  "Sound Power dB[A]": "Độ ồn (dB)",
  "Tool Style": "Kiểu máy",
  "Vacuum Type": "Loại hút bụi",
  "Weight (kg)": "Khối lượng (kg)",
  "Weight (lb)": "Khối lượng (lb)",
  "Width (in)": "Chiều rộng (inch)",
  "Width (mm)": "Chiều rộng (mm)",
  "Pad Dia. (in)": "Đường kính đế (inch)",
  "Pad Dia. (mm)": "Đường kính đế (mm)",
  "Wheel Dia. (in)": "Đường kính đá (inch)",
  "Wheel Dia. (mm)": "Đường kính đá (mm)",
  "Accy. Max. Air Flow SCFM (LPM)": "Lưu lượng khí tối đa",
  "Chuck Size": "Cỡ đầu kẹp",
  "Collet Insert Size (in)": "Cỡ kẹp collet (inch)",
  "Collet Insert Size (mm)": "Cỡ kẹp collet (mm)",
  "Orbit Dia. (mm)": "Biên độ rung (mm)",
  "Orbit Dia. (fraction)": "Biên độ rung",
  "Stroke Length (in)": "Hành trình (inch)",
  "Stroke Length (mm)": "Hành trình (mm)",
  "Thread Size": "Cỡ ren",
  "Pad Thread Size": "Cỡ ren đế",
  "ESD Protection": "Chống tĩnh điện (ESD)",
};

export function specLabelVn(label: string): string {
  return SPEC_LABEL_VN[label] ?? label;
}

export function getSpecsForRef(ref: string): Record<string, string> {
  return getAllSpecs()[ref] ?? {};
}
