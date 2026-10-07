"""Development-only helper: extract the supplied PDF's original images and text."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / '.tmp-pdf'))
from pypdf import PdfReader

root = Path(__file__).resolve().parent
reader = PdfReader(root / 'LUMEN - Equipo Mati.pdf')
(root / 'source-text.txt').write_text('\n'.join(
    f'--- PDF PAGE {i + 1} ---\n{page.extract_text()}'
    for i, page in enumerate(reader.pages)), encoding='utf-8')
destination = root / 'assets' / 'pdf'
destination.mkdir(parents=True, exist_ok=True)
for page_number in [10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 28]:
    for index, item in enumerate(reader.pages[page_number - 1].images):
        target = destination / f'page-{page_number:02}-{index}.{item.name.split(".")[-1]}'
        target.write_bytes(item.data)
        print(target.name)
