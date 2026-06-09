import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, BookOpen, Quote, Filter, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const OPENALEX_AUTHOR_ID = "A5041563408";
const GOOGLE_SCHOLAR_URL = "https://scholar.google.com/citations?user=AkhilKRamesh";

interface OpenAlexWork {
  id: string;
  title: string;
  publication_year: number;
  cited_by_count: number;
  doi: string | null;
  type: string;
  primary_location: {
    source?: {
      display_name: string;
      type: string;
    };
    landing_page_url?: string;
  } | null;
  authorships: Array<{
    author: { display_name: string };
    author_position: string;
  }>;
}

interface Publication {
  id: string;
  title: string;
  year: number;
  citations: number;
  doi: string | null;
  type: string;
  venue: string | null;
  url: string | null;
  authors: string[];
  isPI: boolean;
}

async function fetchPublications(): Promise<Publication[]> {
  const res = await fetch(
    `https://api.openalex.org/works?filter=author.id:${OPENALEX_AUTHOR_ID}&select=id,title,authorships,publication_year,primary_location,cited_by_count,doi,type&sort=publication_year:desc&per_page=50&mailto=findlab@nycu.edu.tw`
  );
  if (!res.ok) throw new Error("Failed to fetch publications");
  const data = await res.json();

  return (data.results as OpenAlexWork[]).map((w) => ({
    id: w.id,
    title: w.title,
    year: w.publication_year,
    citations: w.cited_by_count,
    doi: w.doi ?? null,
    type: w.type,
    venue: w.primary_location?.source?.display_name ?? null,
    url: w.doi ?? w.primary_location?.landing_page_url ?? null,
    authors: w.authorships?.map((a) => a.author?.display_name) ?? [],
    isPI: w.authorships?.some(
      (a) =>
        a.author?.display_name?.toLowerCase().includes("akhil") &&
        a.author?.display_name?.toLowerCase().includes("ramesh")
    ) ?? false,
  }));
}

function formatAuthors(authors: string[], highlight = "Akhil K. Ramesh"): string {
  return authors
    .map((name) => {
      const parts = name.split(" ");
      if (parts.length < 2) return name;
      const last = parts[parts.length - 1];
      const initials = parts
        .slice(0, -1)
        .map((p) => p[0] + ".")
        .join(" ");
      return `${initials} ${last}`;
    })
    .join(", ");
}

function typeLabel(type: string): string {
  switch (type) {
    case "article": return "Journal Article";
    case "preprint": return "Preprint";
    case "book-chapter": return "Book Chapter";
    case "conference-paper": return "Conference Paper";
    case "proceedings-article": return "Conference Paper";
    default: return type.charAt(0).toUpperCase() + type.slice(1);
  }
}

function typeBadgeVariant(type: string): "default" | "secondary" | "outline" {
  if (type === "article") return "default";
  if (type === "preprint") return "secondary";
  return "outline";
}

export default function Publications() {
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);

  const { data: publications, isLoading, isError } = useQuery({
    queryKey: ["publications", OPENALEX_AUTHOR_ID],
    queryFn: fetchPublications,
  });

  const years = useMemo(() => {
    if (!publications) return [];
    return [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  }, [publications]);

  const types = useMemo(() => {
    if (!publications) return [];
    return [...new Set(publications.map((p) => p.type))];
  }, [publications]);

  const filtered = useMemo(() => {
    if (!publications) return [];
    return publications.filter((p) => {
      if (yearFilter && p.year !== yearFilter) return false;
      if (typeFilter && p.type !== typeFilter) return false;
      return true;
    });
  }, [publications, yearFilter, typeFilter]);

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const p of filtered) {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year)!.push(p);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const totalCitations = useMemo(
    () => publications?.reduce((sum, p) => sum + p.citations, 0) ?? 0,
    [publications]
  );

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Publications</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>

          {/* Stats + Scholar link */}
          {!isLoading && !isError && publications && (
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">{publications.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Publications</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">{totalCitations}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Total Citations</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block"></div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">
                  {Math.max(...publications.map((p) => p.year))}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Latest Work</p>
              </div>
              <div className="ml-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                  data-testid="button-google-scholar"
                >
                  <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                    <BookOpen size={15} />
                    Google Scholar
                    <ExternalLink size={13} />
                  </a>
                </Button>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            Publication data sourced live from{" "}
            <a
              href={`https://openalex.org/authors/${OPENALEX_AUTHOR_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OpenAlex
            </a>
            . For the full up-to-date record, see Dr. Ramesh's Google Scholar profile.
          </p>
        </motion.div>

        {/* Loading */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm">Fetching publications from OpenAlex…</p>
          </div>
        )}

        {/* Error */}
        {isError && (
          <Card className="border-destructive/50 bg-destructive/5">
            <CardContent className="p-6 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Could not load publications</p>
                <p className="text-sm text-muted-foreground mb-4">
                  The OpenAlex API may be temporarily unavailable. Please check Dr. Ramesh's Google Scholar
                  for the current publication list.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                    Google Scholar <ExternalLink size={13} className="ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        {!isLoading && !isError && publications && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter size={15} className="text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Filter</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={yearFilter === null && typeFilter === null ? "default" : "outline"}
                size="sm"
                onClick={() => { setYearFilter(null); setTypeFilter(null); }}
                data-testid="filter-all"
              >
                All ({publications.length})
              </Button>
              <div className="w-px h-8 bg-border mx-1 self-center hidden sm:block"></div>
              {years.map((year) => (
                <Button
                  key={year}
                  variant={yearFilter === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setYearFilter(yearFilter === year ? null : year); setTypeFilter(null); }}
                  data-testid={`filter-year-${year}`}
                >
                  {year}
                </Button>
              ))}
              <div className="w-px h-8 bg-border mx-1 self-center hidden sm:block"></div>
              {types.filter(t => t !== "article").map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setTypeFilter(typeFilter === type ? null : type); setYearFilter(null); }}
                  data-testid={`filter-type-${type}`}
                >
                  {typeLabel(type)}
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Publication List grouped by year */}
        {!isLoading && !isError && grouped.length > 0 && (
          <div className="space-y-12">
            {grouped.map(([year, pubs], gi) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground">{year}</h2>
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-xs text-muted-foreground">{pubs.length} paper{pubs.length !== 1 ? "s" : ""}</span>
                </div>

                <div className="space-y-4">
                  {pubs.map((pub, pi) => (
                    <motion.div
                      key={pub.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: pi * 0.05 }}
                      data-testid={`publication-card-${pub.id.split("/").pop()}`}
                    >
                      <Card className="border-border/50 hover:border-primary/30 hover:shadow-sm transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge variant={typeBadgeVariant(pub.type)} className="text-xs font-normal">
                                  {typeLabel(pub.type)}
                                </Badge>
                                {pub.citations > 0 && (
                                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Quote size={11} />
                                    {pub.citations} citation{pub.citations !== 1 ? "s" : ""}
                                  </span>
                                )}
                              </div>

                              <h3 className="font-semibold text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                                {pub.url ? (
                                  <a
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                    data-testid={`link-publication-${pub.id.split("/").pop()}`}
                                  >
                                    {pub.title}
                                  </a>
                                ) : (
                                  pub.title
                                )}
                              </h3>

                              <p className="text-sm text-muted-foreground mb-1 leading-relaxed">
                                {pub.authors.map((name, i) => {
                                  const isPI =
                                    name.toLowerCase().includes("akhil") &&
                                    name.toLowerCase().includes("ramesh");
                                  return (
                                    <span key={i}>
                                      {i > 0 && ", "}
                                      {isPI ? (
                                        <strong className="text-foreground font-semibold">{name}</strong>
                                      ) : (
                                        name
                                      )}
                                    </span>
                                  );
                                })}
                              </p>

                              {pub.venue && (
                                <p className="text-sm font-medium text-primary/80 italic">{pub.venue}</p>
                              )}
                            </div>

                            {pub.url && (
                              <a
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-muted-foreground hover:text-primary transition-colors mt-1"
                                aria-label="Open publication"
                                data-testid={`icon-link-${pub.id.split("/").pop()}`}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!isLoading && !isError && filtered.length === 0 && publications && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No publications match the selected filter.</p>
            <Button variant="link" onClick={() => { setYearFilter(null); setTypeFilter(null); }} className="mt-2">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
