import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function SocialLinks() {
  const socialMedia = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aptlydressed/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/aptlydressed/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/aptlydressed' },
  ];

  return (
    <TooltipProvider>
      <div className="flex justify-center space-x-2">
        {socialMedia.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label={social.name}>
                  <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow on {social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
