import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentView, setCurrentView] = useState<'demo' | 'scheduled' | 'yet-to-schedule'>('demo');

  if (currentView === 'scheduled') {
    return <Dashboard isScheduled={true} studentName="Alex Johnson" />;
  }

  if (currentView === 'yet-to-schedule') {
    return <Dashboard isScheduled={false} studentName="Alex Johnson" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Internship Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the complete student dashboard with different states and beautiful design
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <Card className="bg-gradient-secondary border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Scheduled Batch</CardTitle>
              <CardDescription className="text-muted-foreground">
                View the full dashboard with active internship progress, completed classes, and project management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => setCurrentView('scheduled')}
              >
                View Scheduled Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary border-border shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Yet to Schedule</CardTitle>
              <CardDescription className="text-muted-foreground">
                See how the dashboard appears when the batch timing hasn't been scheduled yet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => setCurrentView('yet-to-schedule')}
              >
                View Pending Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('demo')}
            className="text-muted-foreground"
          >
            ← Back to Demo Selection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
