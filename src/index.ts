import IEGrimpan from "./grimpanType/IEGrimpan";

enum TGimpan {
  IE = "ie",
  CHROME = "chrome",
}

// Simple Factory
function grimpanFactory(type: TGimpan) {
  const canvas = document.getElementById("canvas") as HTMLElement;

  if (type === TGimpan.CHROME) {
    return ChromeGrimpan.getInstance(canvas);
  } else if (type === TGimpan.IE) {
    return IEGrimpan.getInstance(canvas);
  }
}

const chromGrimpan = grimpanFactory(TGimpan.CHROME);
