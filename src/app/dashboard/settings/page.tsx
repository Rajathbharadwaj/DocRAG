"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  const { user } = useUser();

  // Default to 'Free' tier if not set
  const userTier = user?.publicMetadata?.tier as string || "Free";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal information and subscription details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <p className="text-sm font-medium">{user?.fullName || "Not set"}</p>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <p className="text-sm font-medium">{user?.primaryEmailAddress?.emailAddress}</p>
          </div>

          {/* Subscription Tier */}
          <div className="space-y-2">
            <Label>Current Plan</Label>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={
                  userTier === "Ultra" 
                    ? "destructive" 
                    : userTier === "Pro" 
                    ? "default" 
                    : "secondary"
                }
              >
                {userTier}
              </Badge>
              {userTier === "Free" && (
                <span className="text-sm text-muted-foreground">
                  Upgrade to Pro for more features
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
