import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/find-lab-logo.png"
                alt="FIND Lab logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif font-bold text-xl">FIND Lab</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Functional Innovations in Nano Devices Laboratory.
              Engineering the interface between condensed matter physics and nanoelectronics.
            </p>
            <div className="pt-2">
              <p className="text-sm font-medium">Dr. Akhil K. Ramesh</p>
              <p className="text-sm text-muted-foreground">Principal Investigator</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/research" className="text-muted-foreground hover:text-primary transition-colors text-sm">Research</Link></li>
              <li><Link href="/publications" className="text-muted-foreground hover:text-primary transition-colors text-sm">Research Contributions</Link></li>
              <li><Link href="/members" className="text-muted-foreground hover:text-primary transition-colors text-sm">Members</Link></li>
              <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors text-sm">Join Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>International College of Semiconductor Technology (ICST)</p>
              <p>National Yang Ming Chiao Tung University (NYCU)</p>
              <p>Taiwan</p>
              <div className="pt-2">
                <Link href="/contact" className="text-primary hover:underline">Get in touch →</Link>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FIND Lab, NYCU. All rights reserved.</p>
          <p>Designed for academic rigor and quiet discovery.</p>
        </div>
      </div>
    </footer>
  );
}
