# Partners Section - How to Add Real Logos

## Current Setup
The partners section is now live with placeholder logos. Here's how to replace them with real partner logos:

## How to Add Real Partner Logos

### 1. Add Logo Images
Place your partner logo images in the `/public/` directory:
- `/public/partner-logo-1.png`
- `/public/partner-logo-2.png`
- `/public/partner-logo-3.png`
- etc.

### 2. Replace Placeholder Content
In `/src/app/page.tsx`, find the partners section and replace the placeholder divs:

**Current placeholder:**
```jsx
<div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-black/10 w-full h-24 sm:h-28 flex items-center justify-center">
  <span className="text-lg sm:text-xl font-bold text-black/60">Partner Logo 1</span>
</div>
```

**Replace with:**
```jsx
<div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-black/10 w-full h-24 sm:h-28 flex items-center justify-center">
  <Image
    src="/partner-logo-1.png"
    alt="Partner Company Name"
    width={120}
    height={60}
    className="max-w-full max-h-full object-contain"
  />
</div>
```

### 3. Add Links (Optional)
To make logos clickable, wrap them in anchor tags:
```jsx
<a href="https://partner-website.com" target="_blank" rel="noopener noreferrer">
  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-black/10 w-full h-24 sm:h-28 flex items-center justify-center hover:shadow-md transition-shadow">
    <Image
      src="/partner-logo-1.png"
      alt="Partner Company Name"
      width={120}
      height={60}
      className="max-w-full max-h-full object-contain"
    />
  </div>
</a>
```

## Features
- ✅ **Smooth scrolling animation** (30s loop)
- ✅ **Pause on hover** for better UX
- ✅ **Responsive design** works on all devices
- ✅ **Seamless loop** with duplicated logos
- ✅ **Consistent styling** with your brand
- ✅ **Navigation links** added to header and footer

## Customization
- **Speed**: Change `30s` in CSS to make it faster/slower
- **Direction**: Change `translateX(-50%)` to `translateX(50%)` for reverse
- **Colors**: Update background and border colors as needed
- **Size**: Adjust `min-w-[200px]` for different logo sizes
