"use client";

import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { FertilizerCard } from "@/components/fertilizer-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = [
  { name: "All", count: "2,000+" },
  { name: "Granular", count: "1,000+" },
  { name: "Liquid", count: "1,000+" },
  { name: "Organic", count: "200+" },
  { name: "Synthetic", count: "400+" },
  { name: "Custom", count: "100+" },
];

export default function FertilizersPage() {
  const [fertilizers, setFertilizers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/fertilizers/")
      .then((response) => response.json())
      .then((data) => setFertilizers(data))
      .catch((error) => console.error("Error fetching fertilizers:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Fertilizers</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="secondary"
              className="bg-green-50 hover:bg-green-100"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for product" className="pl-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fertilizers.map((fertilizer) => (
            <FertilizerCard
              key={fertilizer.id}
              name={fertilizer.name}
              composition={fertilizer.composition}
              imagePath={fertilizer.image_path}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
