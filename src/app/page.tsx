'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, MessageSquare } from "lucide-react";

export default function ApixaloLandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-white">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-[#1a9ff0]">Apixalo</h1>
        <p className="text-lg text-gray-400">
          AI Agents for Modern Operations. Automate insurance verification, client intake,
          and compliance tracking — without adding headcount.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <Card className="bg-[#121212] text-white">
            <CardContent className="p-6">
              <Mail className="mx-auto mb-4 text-[#1a9ff0]" />
              <h3 className="text-xl font-semibold">Insurance Automation</h3>
              <p className="text-sm text-gray-400">
                Real-time eligibility checks and verification for clinics.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#121212] text-white">
            <CardContent className="p-6">
              <MessageSquare className="mx-auto mb-4 text-[#1a9ff0]" />
              <h3 className="text-xl font-semibold">Client Intake</h3>
              <p className="text-sm text-gray-400">
                Branded portals for collecting documents and onboarding clients.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#121212] text-white">
            <CardContent className="p-6">
              <Calendar className="mx-auto mb-4 text-[#1a9ff0]" />
              <h3 className="text-xl font-semibold">Compliance Tracking</h3>
              <p className="text-sm text-gray-400">
                Auto-reminders for certifications, OSHA deadlines, and training.
              </p>
            </CardContent>
          </Card>
        </div>

        <form className="mt-10 space-y-4">
          <Input className="bg-[#1c1c1e] text-white" placeholder="Your email address" type="email" required />
          <Textarea className="bg-[#1c1c1e] text-white" placeholder="Tell us your biggest workflow headache…" rows={4} />
          <Button type="submit" className="w-full bg-[#1a9ff0] hover:bg-[#007acc] text-white">
            Request Early Access
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          No spam. Just one invite when we're live.
        </p>
      </div>
    </div>
  );
} 