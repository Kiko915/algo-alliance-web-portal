import { Card, CardContent } from "../ui/card";
import { Sun, Moon, Sunset, Clock, IdCard } from "lucide-react";

export function WelcomeBanner({ name, memberId }) {
  // Function to get time-based greeting and icon
  const getGreetingData = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return { greeting: "Good morning", icon: Sun, color: "text-amber-500" };
    } else if (hour >= 12 && hour < 17) {
      return { greeting: "Good afternoon", icon: Sun, color: "text-orange-500" };
    } else if (hour >= 17 && hour < 21) {
      return { greeting: "Good evening", icon: Sunset, color: "text-orange-600" };
    } else {
      return { greeting: "Good night", icon: Moon, color: "text-blue-500" };
    }
  };

  const { greeting, icon: GreetingIcon, color } = getGreetingData();

  return (
    <Card className="rounded-xl shadow">
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GreetingIcon className={`h-5 w-5 ${color}`} />
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{greeting},</p>
          </div>
          
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <IdCard className="h-4 w-4" />
              <span>Member ID: <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">{memberId}</span></span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <Clock className="h-3 w-3" />
            <span>Last login: {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}