"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { Label } from "@/components/ui/label";

export default function SoilAnalysisPage() {
  const [formData, setFormData] = useState({
    field_name: '', // Updated to match backend field names
    crop_type: '', 
    field_size: '', 
    issues: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('http://localhost:8000/api/soil-analysis/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Analysis request submitted successfully!' });
        setFormData({ field_name: '', crop_type: '', field_size: '', issues: '' }); // Clear form
      } else {
        const errorData = await response.json(); // Fetch error details from response
        setFeedback({ type: 'error', message: errorData.error || 'Submission failed. Please try again.' });
      }
    } catch (error) {
      setIsSubmitting(false);
      setFeedback({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Updated to set the correct keys in formData
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="container py-8">
        <div className="max-w-md space-y-6 pl-4">
          <div>
            <h1 className="text-4xl font-bold">Soil Analysis</h1>
            <p className="text-green-600 mt-2">Get started by providing basic field information</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="field_name">Field Name</Label>
              <Input
                id="field_name"
                name="field_name" // Match formData key
                value={formData.field_name}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crop_type">Crop Type</Label>
              <Input
                id="crop_type"
                name="crop_type" // Match formData key
                value={formData.crop_type}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="field_size">Field Size (Acres)</Label>
              <Input
                id="field_size"
                name="field_size" // Match formData key
                type="number"
                value={formData.field_size}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issues">Issues</Label>
              <Textarea
                id="issues"
                name="issues" // Match formData key
                value={formData.issues}
                onChange={handleChange}
                className="bg-green-50/50 min-h-[150px]"
                placeholder="Describe any issues or concerns with your field..."
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Recommendations'}
              </Button>
            </div>
          </form>

          {feedback && (
            <div
              className={`p-4 rounded-md ${
                feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {feedback.message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
