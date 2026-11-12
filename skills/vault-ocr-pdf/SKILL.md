---
name: vault-ocr-pdf
version: 1.0.0
owner: File Vault
status: approved
source: issue #9
description: "Makes scanned or image-only PDFs searchable by adding a text layer, without changing the original. Use on new intake files and any PDF that search can't read."
---

# vault-ocr-pdf

## 1. Find PDFs without text
A PDF needs OCR if you can't select or search its text. Check new intake files first, then older ones in batches.

## 2. Keep the original
- Run OCR on a copy. Never overwrite the master file.
- The searchable copy keeps the same plain name. Record both files in the catalog with their sha256 hashes (`records-manifest-sync`).

## 3. Check the result
- Spot-check names, dates, and amounts against the image.
- If the text is poor (handwriting, faded copy), mark it **OCR-LOW** in the catalog. Don't rely on it for facts.

## 4. Sensitive files
If OCR shows a full SSN, account number, or medical detail, move the file to `vault-pii-quarantine` before doing anything else.

## 5. Report
One line per batch to Mission Control: files checked, files OCR'd, how many marked OCR-LOW, how many quarantined.

Follows `core-guardrails`.
