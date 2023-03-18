---
slug: /css-in-js
sidebar_label: CSS in JS
---

# CSS in JS

- グローバルCSS
- プレーンCSS
- CSS モジュール
- Styled Component
- Emotion
- Tailwind CSS

## プレーンCSS

### 例

```css title="PlainCssSlider.css"
.slider {
  color: #20b2aa;
}

.slider:hover {
  color: #2e8b57;
}
```

```tsx title="PlainCssSlider.js"
import React from 'react';
import Slider from '@mui/material/Slider';
import './PlainCssSlider.css';

export default function PlainCssSlider() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="slider" />
    </div>
  );
}
```