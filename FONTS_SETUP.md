# Font Setup Instructions

## Why Fonts Might Not Be Displaying

The fonts won't display until the font files are properly downloaded, converted to web formats, and placed in the `public/fonts/` directory. This guide will help you set them up correctly.

## Step-by-Step Font Setup

### 1. Download the Font Files

#### SS Bruney Font (for titles)
- **Source**: https://www.1001fonts.com/ss-bruney-font.html
- **Download**: Click the download button (free for personal use)
- **Format**: Usually comes as `.otf` or `.ttf`

#### Joliet Font (for body text)
- **Source**: https://en.bestfonts.pro/font/joliet
- **Download**: Click the download button (may require sharing the link)
- **Format**: Usually comes as `.ttf`, `.otf`, or `.woff`

### 2. Convert Fonts to Web Formats (IMPORTANT)

Modern browsers work best with WOFF2 and WOFF formats. Convert your fonts using one of these methods:

#### Option A: Online Converter (Easiest)
1. Go to https://cloudconvert.com/ttf-to-woff2 or https://convertio.co/ttf-woff2/
2. Upload your `.ttf` or `.otf` font file
3. Convert to **WOFF2** (best compression and fastest)
4. Also convert to **WOFF** (backup for older browsers)
5. Download both formats

#### Option B: Command Line (if you have Node.js)
```bash
npm install -g ttf2woff2
ttf2woff2 SSBruney-Regular.ttf SSBruney-Regular.woff2
```

### 3. Place Font Files in Project

After converting, you should have:
- `SSBruney-Regular.woff2` ✅ (required - best format)
- `SSBruney-Regular.woff` ✅ (recommended - fallback)
- `SSBruney-Regular.ttf` or `.otf` (optional - backup)

- `Joliet-Regular.woff2` ✅ (required - best format)
- `Joliet-Regular.woff` ✅ (recommended - fallback)
- `Joliet-Regular.ttf` or `.otf` (optional - backup)

**Place all these files in**: `public/fonts/` directory

### 4. Verify File Structure

Your directory should look like:
```
public/
  fonts/
    SSBruney-Regular.woff2  ✅
    SSBruney-Regular.woff   ✅
    SSBruney-Regular.ttf    (optional)
    Joliet-Regular.woff2    ✅
    Joliet-Regular.woff     ✅
    Joliet-Regular.ttf      (optional)
```

### 5. Test the Fonts

1. Run `npm run dev`
2. Open browser DevTools (F12)
3. Go to Network tab and filter by "Font"
4. Refresh the page
5. Verify that font files are loading (status 200)
6. Check that fonts appear in the Elements tab under Computed styles

## Troubleshooting

### Fonts still not showing?
1. **Clear browser cache**: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. **Check browser console**: Look for 404 errors on font files
3. **Verify paths**: Ensure files are in `public/fonts/` not `src/fonts/`
4. **Check file names**: Names must match exactly (case-sensitive)
5. **Try hard refresh**: `Cmd+Shift+Delete` to clear cache

### Fallback Fonts

If custom fonts fail to load, the site will automatically use:
- **Titles**: Georgia → Times New Roman → serif
- **Body**: Georgia → Times New Roman → serif

This ensures the site remains readable even if fonts don't load.

## Browser Compatibility

- ✅ WOFF2: All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ WOFF: All modern browsers + IE9+
- ✅ TTF/OTF: Universal fallback

The CSS is configured to try formats in order (WOFF2 → WOFF → OTF/TTF), so fonts will work across all browsers automatically.

