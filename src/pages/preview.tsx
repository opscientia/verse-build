
import React from 'react';

import PreviewSection from '@/section/PreviewSection';

export default function Preview() {
  return (
    <div>
      <PreviewSection handleSubmit={() => console.log()} />
    </div>
  );
}
