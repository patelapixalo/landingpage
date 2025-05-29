'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeClosedIcon, ChatBubbleIcon, CalendarIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Logo and Tagline */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#1976D2]">
              Apixalo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI Agents for Modern Operations. Automate insurance verification, client intake, and compliance tracking — without adding headcount.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-[#111] border-[#222] p-8 flex flex-col items-center text-center space-y-4 hover:border-[#2196F3]/50 transition-colors">
            <div className="p-3 bg-[#2196F3]/10 rounded-xl">
              <EnvelopeClosedIcon className="w-8 h-8 text-[#2196F3]" />
            </div>
            <h3 className="text-xl font-semibold">Insurance Automation</h3>
            <p className="text-gray-400">Real-time eligibility checks and verification for clinics.</p>
          </Card>

          <Card className="bg-[#111] border-[#222] p-8 flex flex-col items-center text-center space-y-4 hover:border-[#2196F3]/50 transition-colors">
            <div className="p-3 bg-[#2196F3]/10 rounded-xl">
              <ChatBubbleIcon className="w-8 h-8 text-[#2196F3]" />
            </div>
            <h3 className="text-xl font-semibold">Client Intake</h3>
            <p className="text-gray-400">Branded portals for collecting documents and onboarding clients.</p>
          </Card>

          <Card className="bg-[#111] border-[#222] p-8 flex flex-col items-center text-center space-y-4 hover:border-[#2196F3]/50 transition-colors">
            <div className="p-3 bg-[#2196F3]/10 rounded-xl">
              <CalendarIcon className="w-8 h-8 text-[#2196F3]" />
            </div>
            <h3 className="text-xl font-semibold">Compliance Tracking</h3>
            <p className="text-gray-400">Auto-reminders for certifications, OSHA deadlines, and training.</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto w-full space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-[#111] border-[#222] text-white placeholder:text-gray-500 h-12"
          />
          <Textarea
            placeholder="Tell us your biggest workflow headache..."
            className="bg-[#111] border-[#222] text-white placeholder:text-gray-500 min-h-[120px] resize-none"
          />
          <Button className="w-full bg-[#2196F3] hover:bg-[#1976D2] text-white h-12 text-lg font-medium transition-colors">
            Request Early Access
          </Button>
        </div>
      </div>
    </main>
  );
} 