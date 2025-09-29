
'use client';

import { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { Post } from '@/lib/news-data';

type SocialShareButtonsProps = {
  post: Post;
};

export default function SocialShareButtons({ post }: SocialShareButtonsProps) {
  const [pageUrl, setPageUrl] = useState('');
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    // This ensures window is defined, preventing SSR errors.
    setPageUrl(window.location.origin + `/news-and-events/${post.slug}`);
  }, [post.slug]);

  if (!pageUrl) return null;

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodeURIComponent(post.excerpt)}&source=${encodeURIComponent(window.location.origin)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <TooltipProvider>
      <div className="flex items-center space-x-1">
        {socialLinks.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label={`Share on ${social.name}`}>
                  <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on {social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Copy link" onClick={copyToClipboard}>
              {hasCopied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <LinkIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{hasCopied ? 'Copied!' : 'Copy link'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

    