# Verification Agent - Quick Reference Guide

## How the Verification Agent Uses Reference Folders

### 📁 Required Folder Structure

```
your-project/
├── reference/
│   ├── reference json/              ← JSON exported from Figma
│   │   ├── home.json                   (Technical specifications)
│   │   ├── about-us.json
│   │   ├── contact.json
│   │   └── [page-name].json
│   │
│   └── images/                      ← Screenshots from Figma design
│       ├── home/                       (Visual references)
│       │   ├── fold-1.png              (Hero section screenshot)
│       │   ├── fold-2.png              (Features section screenshot)
│       │   ├── fold-3.png              (Testimonials screenshot)
│       │   └── fold-4.png              (Footer screenshot)
│       │
│       ├── about-us/
│       │   ├── fold-1.png
│       │   ├── fold-2.png
│       │   └── fold-3.png
│       │
│       └── [page-name]/
│           ├── fold-1.png
│           ├── fold-2.png
│           └── ...
│
├── components/                      ← Your generated React components
│   ├── home/
│   │   └── HomePage.tsx
│   ├── about-us/
│   │   └── AboutUsPage.tsx
│   └── [page-name]/
│       └── [ComponentName].tsx
│
└── app/                            ← Your Next.js routes
    ├── home/
    │   └── page.tsx
    └── [page-name]/
        └── page.tsx
```

---

## 🔍 How Verification Works

### Step 1: Agent Locates Resources

When you say: **"Verify home page"**

The agent will:
1. ✅ Load `reference/reference json/home.json` (technical specs)
2. ✅ List `reference/images/home/` directory (visual references)
3. ✅ Read `components/home/HomePage.tsx` (code to verify)

### Step 2: Agent Identifies Folds

From JSON + Images, agent determines:
- **Fold 1**: Hero Section → `reference/images/home/fold-1.png`
- **Fold 2**: Features → `reference/images/home/fold-2.png`
- **Fold 3**: Testimonials → `reference/images/home/fold-3.png`
- **Fold 4**: Footer → `reference/images/home/fold-4.png`

### Step 3: Fold-by-Fold Verification

For **each fold** (e.g., Fold 1):

```
┌─────────────────────────────────────────────────────────────┐
│ FOLD 1 VERIFICATION                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 📄 JSON Source (Technical)                                 │
│    reference/reference json/home.json                       │
│    ↓                                                        │
│    Extracts: colors, spacing, typography, dimensions       │
│                                                             │
│ 🎨 Figma Reference (Visual)                                │
│    reference/images/home/fold-1.png                        │
│    ↓                                                        │
│    Shows: how it SHOULD look                               │
│    Agent displays this to you ↓                            │
│                                                             │
│    [Shows fold-1.png image]                                │
│                                                             │
│ 💻 Your Implementation (Current State)                     │
│    You provide: screenshot from browser                     │
│    ↓                                                        │
│    Agent compares YOUR screenshot against:                 │
│    - JSON specs (exact values)                             │
│    - Figma reference (visual appearance)                   │
│                                                             │
│ 🔍 Comparison Results:                                     │
│    ✗ Color: Expected #3B82F6, got #3B82F5                 │
│    ✗ Padding: Expected 32px, got 30px                     │
│    ✗ Font size: Expected 24px, got 22px                   │
│                                                             │
│ 🔧 Agent automatically fixes issues in code                │
│                                                             │
│ 📸 Agent asks for NEW screenshot to re-verify              │
│                                                             │
│ ✅ Iteration continues until PERFECT match                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 📸 Reference Image Naming

The agent is flexible with image naming. Any of these work:

### Option 1: By Fold Number
```
reference/images/home/
├── fold-1.png
├── fold-2.png
├── fold-3.png
└── fold-4.png
```

### Option 2: By Section Name
```
reference/images/home/
├── hero.png
├── features.png
├── testimonials.png
└── footer.png
```

### Option 3: Mixed
```
reference/images/home/
├── 01-hero-section.png
├── 02-features.png
├── 03-testimonials.png
└── 04-footer.png
```

**The agent will:**
- Analyze image content
- Match with JSON sections
- Map correctly to folds
- Ask for clarification if uncertain

---

## 🎯 What the Agent Checks

### From JSON (Technical Specs):
```json
{
  "backgroundColor": "#3B82F6",
  "fontSize": "24px",
  "padding": "32px 24px",
  "fontWeight": 600,
  "borderRadius": "8px"
}
```

### From Figma Images (Visual):
- How the design LOOKS
- Visual spacing and alignment
- Color appearance
- Overall composition
- Component positioning

### From Your Implementation:
- Screenshot of actual rendered component
- Current state in browser

### Triple Comparison:
```
JSON Says:     #3B82F6, 24px, 32px padding
Figma Shows:   Blue button, large text, spacious
Your Code:     #3B82F5, 22px, 30px padding
               ↓
Result:        ❌ MISMATCH - Needs fixing
```

---

## 🚀 Usage Example

### Starting Verification

```
You: "Verify home page"

Agent: 
🔍 VERIFICATION AGENT ACTIVATED

Loading resources...
✅ JSON: reference/reference json/home.json
✅ Images: reference/images/home/ (4 images found)
✅ Component: components/home/HomePage.tsx

Found 4 folds to verify:
1. Fold 1 - Hero (fold-1.png)
2. Fold 2 - Features (fold-2.png)
3. Fold 3 - Testimonials (fold-3.png)
4. Fold 4 - Footer (fold-4.png)

Starting with Fold 1...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFERENCE DESIGN (From Figma)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Displays: reference/images/home/fold-1.png]

This is how Fold 1 SHOULD look ↑

Now please provide a screenshot of YOUR implementation
of this same fold (from your browser).
```

---

## ⚠️ Important Notes

### 1. Reference Images Are Required
Without reference images, the agent can only verify against JSON (technical specs only).

**Best Practice:** Always include Figma screenshots in `reference/images/`

### 2. One Image Per Fold
Each fold/section should have its own reference image:
- ✅ `fold-1.png` = Hero section only
- ✅ `fold-2.png` = Features section only
- ❌ `full-page.png` = Entire page (too much)

### 3. JSON Is the Technical Source of Truth
- Exact color values: `#3B82F6`
- Exact spacing: `32px`
- Exact dimensions: `400px`
- Font sizes: `24px`

### 4. Figma Images Are the Visual Source of Truth
- How it should LOOK overall
- Visual balance and composition
- Spacing appearance
- Color scheme appearance

### 5. Both Must Match
Your implementation must match:
- ✅ JSON specifications (exact values)
- ✅ Visual appearance (matches Figma image)

---

## 🔧 What the Agent Fixes

The agent automatically fixes:

✅ **Color mismatches**
```tsx
// Before (Wrong)
className="bg-blue-400"

// After (Fixed)
className="bg-blue-500"  // Matches JSON: #3B82F6
```

✅ **Spacing errors**
```tsx
// Before (Wrong)
className="py-7 px-6"  // 28px padding-y

// After (Fixed)
className="py-8 px-6"  // 32px padding-y (matches JSON)
```

✅ **Font size errors**
```tsx
// Before (Wrong)
className="text-xl"  // 20px

// After (Fixed)
className="text-2xl"  // 24px (matches JSON)
```

✅ **Missing components**
```tsx
// Before (Wrong)
<div className="container">
  <h1>Title</h1>
</div>

// After (Fixed)
<div className="container">
  <h1>Title</h1>
  <button className="...">CTA Button</button>  // Added from JSON
</div>
```

---

## 📊 Verification Flow Chart

```
START
  ↓
Load JSON + Reference Images + Component
  ↓
Identify Folds (1, 2, 3, 4...)
  ↓
┌─────────────────────────────┐
│ FOR EACH FOLD:              │
│                             │
│ 1. Show Figma Reference     │
│ 2. Request Your Screenshot  │
│ 3. Compare Triple Sources   │
│ 4. Find Discrepancies       │
│ 5. Fix Code Automatically   │
│ 6. Request New Screenshot   │
│ 7. Re-verify                │
│ 8. Repeat until perfect     │
│                             │
│ Fold Perfect? ─No→ Return to step 3
│       │                     │
│      Yes                    │
│       ↓                     │
│ Next Fold                   │
└─────────────────────────────┘
  ↓
All Folds Complete?
  ↓
Yes → Final Page Review
  ↓
🎉 VERIFICATION COMPLETE
```

---

## 💡 Tips for Best Results

### 1. Organize Reference Images Clearly
```
reference/images/home/
├── fold-1-hero.png          ← Clear naming
├── fold-2-features.png
├── fold-3-testimonials.png
└── fold-4-footer.png
```

### 2. Take Clear Screenshots
- Full fold visible (top to bottom)
- Good resolution (1920x1080 recommended)
- No browser dev tools visible
- Default state (no hover effects)

### 3. One Section at a Time
Don't try to verify the entire page at once. The agent does it fold-by-fold for maximum accuracy.

### 4. Trust the Process
The agent may find issues you didn't notice. Even 1-2px differences will be caught and fixed.

### 5. Multiple Iterations Are Normal
It's common to need 2-3 screenshots per fold to achieve perfect match. This is expected!

---

## ❓ FAQ

**Q: What if I don't have reference images?**
A: The agent will ask you to provide Figma screenshots. Alternatively, it can verify against JSON only (technical specs), but visual verification won't be possible.

**Q: Can the agent work with just JSON?**
A: Yes, but you'll miss visual verification. It's highly recommended to include reference images for complete verification.

**Q: What if my reference image names don't match folds?**
A: The agent will analyze the images and try to map them. If uncertain, it will ask for clarification.

**Q: How many images do I need per page?**
A: One image per fold/section. If your page has 4 major sections, you need 4 images.

**Q: Can I verify multiple pages at once?**
A: No, the agent verifies one page at a time, fold by fold. This ensures maximum accuracy.

**Q: What if the agent can't auto-fix something?**
A: It will provide detailed manual fix instructions and explain why it can't be automated.

---

## 🎓 Summary

The verification agent uses a **triple reference system**:

1. **📄 JSON** (`reference/reference json/`) - Technical specifications with exact values
2. **🎨 Figma Images** (`reference/images/`) - Visual design showing how it should look
3. **💻 Your Implementation** (your screenshots) - Current state to verify

By comparing all three, the agent ensures your React component is **pixel-perfect** in both technical accuracy and visual appearance.

---

**Ready to verify?** Just say: `"Verify [page-name]"`
