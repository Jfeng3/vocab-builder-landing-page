import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Brain,
  Heart,
  X,
  Check,
  Zap,
  BookOpen,
  Volume2,
  FolderOpen,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url(/watercolor-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 text-sm">
                Zero-friction vocabulary capture and practice
              </Badge>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Stop Losing Vocabulary to Forgotten Screenshots
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Build a living vocabulary library where every word has context, every sentence has sound, and your
                learning stays organized.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Building Your Vocabulary
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground">
                  See How It Works
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-12">
                <Card className="overflow-hidden border-2">
                  <div className="bg-muted p-8">
                    <img
                      src="/hero-vocabulary-highlight.png"
                      alt="Vocabulary Builder showing highlighted word 'lexaprotok' with context sentence and action toolbar"
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The Vocabulary Learning Problem
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every English learner faces the same frustrating cycle
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Time Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Switching apps wastes <strong className="text-foreground">5-10 minutes</strong> per session
                    </li>
                    <li>• Re-encountering unknown words you forgot to save</li>
                    <li>• Reorganizing scattered notes across multiple apps</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Learning Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vocabulary stays passive instead of active</li>
                    <li>• Loss of context means poor recall</li>
                    <li>
                      • Broken flow reduces retention by <strong className="text-foreground">up to 50%</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Emotional Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frustration from slow progress despite effort</li>
                    <li>• Guilt over abandoned vocabulary lists</li>
                    <li>• Lost confidence when you can't recall studied words</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-muted px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why Current Solutions Fail
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">They all add friction between discovery and practice</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Physical Notebooks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Can't hear pronunciation</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>No organization or searchability</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Requires carrying notebook everywhere</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Flashcard Apps (Anki, Quizlet)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Isolated words without context</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Requires manual card creation (friction)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Doesn't capture the moment of discovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="h-5 w-5" />
                    Note-taking Apps (Notion, Evernote)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>No pronunciation support</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Over-engineered with features you don't need</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Requires switching apps and breaking flow</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Screenshots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Disorganized gallery of images</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>Can't practice or review effectively</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>No text-to-speech functionality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-medium text-foreground">
                None offers instant capture + context + pronunciation + organization in one seamless flow.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                The Solution
              </Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How Vocabulary Builder Works
              </h2>
              <p className="mt-4 text-xl text-primary">Mark → Hear → Save. In seconds. Right where you read.</p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Flow 1 */}
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-semibold">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Mark Sentences for Later Use</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    Highlight a well-constructed sentence while reading. The system instantly saves the complete
                    sentence with context preserved.
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm text-foreground">
                      <strong>Value:</strong> Build a personal library of real-world language examples
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden">
                  <img
                    src="/highlighted-sentence-in-reading-app-with-save-butt.jpg"
                    alt="Mark sentences feature"
                    className="h-full w-full object-cover"
                  />
                </Card>
              </div>

              {/* Flow 2 */}
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <Card className="overflow-hidden sm:order-2">
                  <img
                    src="/vocabulary-word-highlighted-with-context-sentence.jpg"
                    alt="Mark words with context"
                    className="h-full w-full object-cover"
                  />
                </Card>
                <div className="sm:order-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-semibold">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Mark Specific Words with Context</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    Highlight a new vocabulary word. The system saves the word while keeping its full sentence for
                    context.
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm text-foreground">
                      <strong>Value:</strong> Track words within their authentic linguistic environment to understand
                      natural usage
                    </p>
                  </div>
                </div>
              </div>

              {/* Flow 3 */}
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-semibold">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Practice Pronunciation</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    Click to hear any saved sentence or word. Text-to-speech reads the content aloud with correct
                    pronunciation.
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm text-foreground">
                      <strong>Value:</strong> Build confidence through repetition with real example sentences
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden">
                  <img
                    src="/text-to-speech-pronunciation-button-with-audio-wav.jpg"
                    alt="Pronunciation practice"
                    className="h-full w-full object-cover"
                  />
                </Card>
              </div>

              {/* Flow 4 */}
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <Card className="overflow-hidden sm:order-2">
                  <img
                    src="/organized-vocabulary-notes-by-weekly-tags-and-them.jpg"
                    alt="Organized notes"
                    className="h-full w-full object-cover"
                  />
                </Card>
                <div className="sm:order-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-semibold">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Save to Organized Notes</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    All marked items are automatically saved. The system organizes notes by weekly tags and themes
                    (300-word limit per note).
                  </p>
                  <div className="mt-6 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm text-foreground">
                      <strong>Value:</strong> Move mastered vocabulary from Draft to Ready to Use; review organized by
                      topic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why This Works
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                    <Zap className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Zero Friction Between Discovery and Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You don't lose the learning moment. Mark → Hear → Save happens in seconds, right where you're
                    reading.
                  </p>
                  <div className="mt-4 rounded-lg bg-background p-3">
                    <p className="text-sm font-medium text-foreground">5 seconds vs 5 minutes per word</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                    <Brain className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Context Makes Vocabulary Stick</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your brain remembers words better when connected to real sentences and situations, not isolated
                    definitions.
                  </p>
                  <div className="mt-4 rounded-lg bg-background p-3">
                    <p className="text-sm font-medium text-foreground">Context-based learning improves retention</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                    <Volume2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Turn Passive Vocabulary Into Active Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn words in context with pronunciation to move from recognition to actual usage.
                  </p>
                  <div className="mt-4 rounded-lg bg-background p-3">
                    <p className="text-sm font-medium text-foreground">Build speaking confidence without a tutor</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What English Learners Say
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      MK
                    </div>
                    <div>
                      <CardTitle className="text-base">Maria Kim</CardTitle>
                      <CardDescription>Intermediate Learner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I used to take screenshots of everything. Now I have an actual organized library I can review. Game
                    changer for my vocabulary growth."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      JC
                    </div>
                    <div>
                      <CardTitle className="text-base">James Chen</CardTitle>
                      <CardDescription>Advanced Learner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The context preservation is brilliant. I finally understand how to use words naturally instead of
                    just memorizing definitions."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      SP
                    </div>
                    <div>
                      <CardTitle className="text-base">Sarah Park</CardTitle>
                      <CardDescription>Busy Professional</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "5 seconds instead of 5 minutes. That's the difference. I actually save words now because there's
                    zero friction."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How is this different from Anki?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anki requires manual flashcard creation and shows isolated words. Vocabulary Builder captures words
                    instantly with full context preserved, and includes pronunciation practice. No manual card creation
                    needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need to install anything?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No installation required. Vocabulary Builder works directly in your browser. Just highlight text,
                    and it's saved to your library instantly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I use this on mobile?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Vocabulary Builder is fully responsive and works on all devices. Capture vocabulary on your
                    phone while reading, then review on your desktop.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How does pronunciation practice work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Click any saved word or sentence to hear it read aloud using text-to-speech technology. Practice as
                    many times as you need to build confidence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's the 300-word limit?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each note can contain up to 300 words to keep your vocabulary organized by theme or topic. This
                    prevents overwhelming lists and encourages focused review sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Start Building Your Vocabulary Library Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Turn every reading session into vocabulary gains. Because fluency comes from the words you actually
              remember.
            </p>
            <div className="mt-10">
              <Button size="lg" className="text-lg">
                Start Building Your Vocabulary
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>50 notes free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                <span>Export your data anytime</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
