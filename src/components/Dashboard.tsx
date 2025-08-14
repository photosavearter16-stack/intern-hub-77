import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, BookOpen, Users, Github, ExternalLink, Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  isCompleted: boolean;
}

interface DashboardProps {
  isScheduled?: boolean;
  studentName?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  isScheduled = true, 
  studentName = "John Doe" 
}) => {
  const [projectUrl, setProjectUrl] = useState('');
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [submittedProjects, setSubmittedProjects] = useState<string[]>([]);

  const totalClasses = 12;
  const completedClasses = 5;
  const classProgress = (completedClasses / totalClasses) * 100;

  const projects: Project[] = [
    {
      id: 1,
      name: "E-commerce Website",
      description: "Build a full-stack e-commerce platform with React and Node.js",
      githubUrl: "https://github.com/internship-program/ecommerce-project",
      isCompleted: false
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Create a collaborative task management application",
      githubUrl: "https://github.com/internship-program/task-manager",
      isCompleted: false
    }
  ];

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectUrl.trim()) {
      setSubmittedProjects([...submittedProjects, projectUrl]);
      setProjectUrl('');
    }
  };

  const completedProjectsCount = submittedProjects.length;

  if (!isScheduled) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              Welcome back, {studentName}! 👋
            </h1>
            <p className="text-muted-foreground text-lg">Track your internship progress and access resources</p>
          </div>

          {/* Yet to Schedule Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-secondary border-border shadow-elegant">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">Schedule Coming Soon</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Your internship batch is being prepared
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-card/50 rounded-lg p-6 mb-6">
                  <AlertCircle className="w-12 h-12 text-warning mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Batch Scheduling in Progress</h3>
                  <p className="text-muted-foreground">
                    We're organizing your batch timings and lecture schedule. 
                    You'll receive detailed information about class timings, dates, and resources very soon.
                  </p>
                </div>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Estimated: Within 2-3 business days
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
            Welcome back, {studentName}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">Track your internship progress and access resources</p>
        </div>

        {/* Batch Information */}
        <Card className="bg-gradient-secondary border-border shadow-elegant mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-primary" />
              Batch Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Schedule:</span>
                  <span className="text-muted-foreground">Mon, Wed, Fri</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Time:</span>
                  <span className="text-muted-foreground">7:00 PM - 9:00 PM</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">Duration:</span>
                  <span className="text-muted-foreground">8 weeks</span>
                </div>
                <Badge variant="outline" className="w-fit">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active Batch
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Classes */}
          <Card className="bg-gradient-secondary border-border shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <BookOpen className="w-5 h-5 text-primary" />
                Total Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">{totalClasses}</div>
              <p className="text-sm text-muted-foreground">Complete curriculum</p>
            </CardContent>
          </Card>

          {/* Classes Completed */}
          <Card className="bg-gradient-secondary border-border shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-success" />
                Classes Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">{completedClasses}</div>
              <div className="space-y-2">
                <Progress value={classProgress} className="h-2" />
                <p className="text-sm text-muted-foreground">{Math.round(classProgress)}% completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="bg-gradient-secondary border-border shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <Github className="w-5 h-5 text-primary" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">
                {completedProjectsCount}/{projects.length}
              </div>
              <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-foreground">Project Portfolio</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Access project resources and submit your work
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Project Resources */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-foreground">Project Resources</h3>
                      <div className="grid gap-4">
                        {projects.map((project) => (
                          <Card key={project.id} className="bg-gradient-secondary border-border">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-foreground mb-1">{project.name}</h4>
                                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                      <Github className="w-4 h-4 mr-2" />
                                      View Source Code
                                    </a>
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Student Submissions */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-foreground">Submit Your Project</h3>
                      <Card className="bg-gradient-secondary border-border">
                        <CardContent className="p-4">
                          <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <div>
                              <Label htmlFor="github-url" className="text-foreground">GitHub Repository URL</Label>
                              <Input
                                id="github-url"
                                type="url"
                                placeholder="https://github.com/yourusername/your-project"
                                value={projectUrl}
                                onChange={(e) => setProjectUrl(e.target.value)}
                                className="bg-card border-border text-foreground"
                              />
                            </div>
                            <Button type="submit" variant="hero" size="sm">
                              <Upload className="w-4 h-4 mr-2" />
                              Submit Project
                            </Button>
                          </form>
                          
                          {submittedProjects.length > 0 && (
                            <div className="mt-6">
                              <h4 className="font-medium mb-3 text-foreground">Your Submissions</h4>
                              <div className="space-y-2">
                                {submittedProjects.map((url, index) => (
                                  <div key={index} className="flex items-center gap-2 p-2 bg-card rounded-md">
                                    <CheckCircle className="w-4 h-4 text-success" />
                                    <a href={url} target="_blank" rel="noopener noreferrer" 
                                       className="text-sm text-primary hover:underline truncate">
                                      {url}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Student Submit Project Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Submit Your Projects
            </CardTitle>
            <CardDescription className="text-blue-600 dark:text-blue-300">
              Upload your completed projects by providing your GitHub repository links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-3">
                <Label htmlFor="project1-github" className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Project 1: E-commerce Website
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="project1-github"
                    placeholder="https://github.com/yourusername/ecommerce-project"
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Submit
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Status: <span className="text-amber-600 font-medium">Pending Submission</span>
                </p>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="project2-github" className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Project 2: Task Management App
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="project2-github"
                    placeholder="https://github.com/yourusername/task-manager"
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Submit
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Status: <span className="text-amber-600 font-medium">Pending Submission</span>
                </p>
              </div>
            </div>
            
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Submission Guidelines:</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                <li>• Ensure your repository is public</li>
                <li>• Include a detailed README.md file</li>
                <li>• Add proper commit messages</li>
                <li>• Test your project before submission</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="bg-gradient-secondary border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Links</CardTitle>
            <CardDescription className="text-muted-foreground">
              Access additional resources and support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-sm">Course Materials</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-sm">Study Group</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Github className="w-6 h-6 text-primary" />
                <span className="text-sm">Code Reviews</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                <span className="text-sm">External Resources</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;