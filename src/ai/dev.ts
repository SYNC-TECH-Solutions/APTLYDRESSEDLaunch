import { config } from 'dotenv';
config();

// Important: load dev-only flows here.
import '@/ai/flows/generate-background-image.ts';
