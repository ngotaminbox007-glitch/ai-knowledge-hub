---
name: photo-privacy-check
version: 1.0.0
owner: Photo Design & Creation
status: approved
source: issue #20
description: "Checklist before any image leaves the library (PDF, newsletter, post, upload, attachment): work on a copy, strip location and device data, verify it is gone, and blur identifying details in the picture. Use every time an image is shared."
---

# photo-privacy-check

Phone photos carry hidden GPS coordinates, the device model and the exact time. The picture itself can show a house number, a street sign or a name tag. Once a copy is shared, it can't be taken back.

## 1. Work on a copy
Never edit the original in the library. Make a share copy and work on that.

## 2. Strip the metadata
- `exiftool -all= -overwrite_original share_copy.jpg` removes EXIF, GPS and XMP data.
- Without exiftool, save only the pixels again (Python Pillow: open the image, copy the pixels into a new image, save it without the `exif=` argument).
- HEIC, PNG and WebP files carry metadata too. Convert them to JPG or PNG, then strip.
- Resize share copies to 2000 px or less on the long edge.

## 3. Verify, don't assume
- `exiftool -gps:all -a share_copy.jpg` should print nothing.
- For a finished PDF, pull the images back out (`pdfimages -all file.pdf out/`) and check them, then search the PDF for `GPS` and `Exif`. Some design tools put the original file back into the PDF.

## 4. Check what the picture shows
- Look at the full-size image, not just the thumbnail.
- Blur house and street numbers, street signs near home, license plates, name tapes and badges, school logos and uniforms, mail, screens, documents, and the faces of strangers.
- Blur only the spot itself, not the whole photo.

## 5. Kids and documents
- Photos of kids stay in family-only work. Nothing with a child goes outside the family without the owner's yes.
- A photo of an ID, card, letter or form is a document, not a photo. Hand it to File Vault and keep it out of designs.

## 6. Log it
For each image, record what you stripped, what you blurred and how you verified it, so the next office can trust the copy without redoing the check.

Follows `core-guardrails`.
