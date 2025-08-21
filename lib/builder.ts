/* lib/builder.ts */
import { builder } from '@builder.io/sdk';

if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  console.warn('[builder] NEXT_PUBLIC_BUILDER_API_KEY is missing. Event pages will show placeholder content.');
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || ''); // public key

export { builder };
