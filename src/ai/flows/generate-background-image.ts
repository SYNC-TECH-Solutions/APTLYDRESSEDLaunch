'use server';

/**
 * @fileOverview This flow generates a background image URL based on the brand's aesthetic.
 *
 * @function generateBackgroundImage - Generates a background image URL.
 * @typedef GenerateBackgroundImageInput - The input type for the generateBackgroundImage function.
 * @typedef GenerateBackgroundImageOutput - The output type for the generateBackgroundImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBackgroundImageInputSchema = z.object({
  brandAesthetic: z
    .string()
    .default('minimalist fashion')
    .describe('The brand aesthetic to generate an image for.'),
});
export type GenerateBackgroundImageInput = z.infer<
  typeof GenerateBackgroundImageInputSchema
>;

const GenerateBackgroundImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      'The URL of the generated background image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type GenerateBackgroundImageOutput = z.infer<
  typeof GenerateBackgroundImageOutputSchema
>;

export async function generateBackgroundImage(
  input: GenerateBackgroundImageInput
): Promise<GenerateBackgroundImageOutput> {
  return generateBackgroundImageFlow(input);
}

const generateBackgroundImagePrompt = ai.definePrompt({
  name: 'generateBackgroundImagePrompt',
  input: {schema: GenerateBackgroundImageInputSchema},
  output: {schema: GenerateBackgroundImageOutputSchema},
  prompt: `Generate a background image URL that matches the following brand aesthetic: {{{brandAesthetic}}}. The image should be suitable for a fashion website landing page. Return the image as a data URI.`,
});

const generateBackgroundImageFlow = ai.defineFlow(
  {
    name: 'generateBackgroundImageFlow',
    inputSchema: GenerateBackgroundImageInputSchema,
    outputSchema: GenerateBackgroundImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: `Generate a background image that matches the following brand aesthetic: ${input.brandAesthetic}. The image should be suitable for a fashion website landing page. The style should be minimalist and elegant.`,
      model: 'googleai/imagen-4.0-fast-generate-001',
    });

    return {
      imageUrl: media.url,
    };
  }
);
