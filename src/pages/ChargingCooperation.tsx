import { Download, FileText, Users, Printer, Share2, Zap } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChargingCooperation = () => {
  const flyers = [
    {
      title: "US Letter",
      subtitle: '8.5" × 11"',
      description: "Standard US paper size",
      file: "/flyers/US_Letter_EV_Charging_Cooperation_Fillable.pdf",
    },
    {
      title: "A4",
      subtitle: "210 × 297 mm",
      description: "International paper size",
      file: "/flyers/A4_EV_Charging_Cooperation_Fillable.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 ev-gradient text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Keep the electrons flowing</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              EV Charging Cooperation
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A simple way to help fellow EV drivers when you're done charging. 
              Leave your contact info so others can reach you if they need the charger.
            </p>
          </div>
        </section>

        {/* Flyer Preview & Download Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                Download Your Flyer
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Choose your paper size, fill in your phone number, and print it out for your dashboard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {flyers.map((flyer) => (
                <Card key={flyer.title} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-display text-xl text-card-foreground">{flyer.title}</CardTitle>
                    <CardDescription>{flyer.subtitle} — {flyer.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* PDF Preview */}
                    <div className="aspect-[8.5/11] bg-muted rounded-lg overflow-hidden border border-border">
                      <iframe
                        src={`${flyer.file}#view=FitH`}
                        className="w-full h-full"
                        title={`${flyer.title} Flyer Preview`}
                      />
                    </div>
                    
                    {/* Download Button */}
                    <Button 
                      asChild 
                      className="w-full ev-gradient text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <a href={flyer.file} download className="inline-flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download {flyer.title} PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 md:py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              How to Use Your Flyer
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">1. Fill It Out</h3>
                <p className="text-sm text-muted-foreground">
                  Add your phone number to the fillable PDF so other EV drivers can reach you
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">2. Print & Laminate</h3>
                <p className="text-sm text-muted-foreground">
                  Print it out and consider laminating for durability on your dashboard
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">3. Display It</h3>
                <p className="text-sm text-muted-foreground">
                  Place it on your dash when charging so others can text you if they need the spot
                </p>
              </div>
            </div>

            <div className="text-center p-8 rounded-xl ev-gradient text-primary-foreground">
              <div className="inline-flex p-3 rounded-full bg-primary-foreground/20 mb-4">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Spread the Word</h3>
              <p className="opacity-90 max-w-lg mx-auto">
                Share this page with your fellow EV drivers! The more people participate 
                in charging cooperation, the better the experience for the entire EV Calmunity.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} KrashlessKar.org — Keep the electrons flowing ⚡</p>
      </footer>
    </div>
  );
};

export default ChargingCooperation;
