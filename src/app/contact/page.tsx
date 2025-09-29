import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;d love to hear from you. Whether you have a question, a suggestion, or a partnership proposal, we&apos;re here to help.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to us through any of the following channels. We strive to respond to all inquiries within 24-48 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <a href="mailto:contact@aptlydressed.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@aptlydressed.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">(353) 830682026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Based In</h3>
                  <p className="text-muted-foreground">Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
