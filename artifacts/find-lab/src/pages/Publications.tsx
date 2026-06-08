import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Publications() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Publications</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          
          <div className="bg-secondary/50 border border-border rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <BookOpen className="text-primary w-6 h-6 mt-1 shrink-0" />
              <p className="text-muted-foreground">
                Publications will be updated as the lab is established. For current publication record, 
                please refer to Dr. Ramesh's Google Scholar profile.
              </p>
            </div>
            <Button variant="outline" className="shrink-0 flex items-center gap-2">
              Google Scholar <ExternalLink size={16} />
            </Button>
          </div>
        </motion.div>

        <div className="space-y-6 opacity-50 pointer-events-none">
          <h2 className="text-2xl font-serif font-semibold mb-6">Recent Work (Placeholder)</h2>
          
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Title of the Interface-Engineered Spintronic Device Publication {i}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">A. K. Ramesh</span>, Collaborator Two, Collaborator Three
                </p>
                <p className="text-sm font-medium text-primary">
                  <em>Nature Nanotechnology</em>, 18(4), 123-130 (2025)
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
