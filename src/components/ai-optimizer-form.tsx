
"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Bot, GitBranch, TrafficCone, Users, Plus, X } from "lucide-react";

import { getOptimizedRoutes } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialState = {
  message: "",
  data: null,
  fieldErrors: {},
};

// Default data
const defaultPassengerDemand = [
    { id: 1, stop: "Central Library", demand: 85 },
    { id: 2, stop: "Engineering Block", demand: 120 },
    { id: 3, stop: "Student Union", demand: 95 },
];

const defaultTrafficConditions = [
    { id: 1, route: "Library to Engineering", congestion: "high" },
    { id: 2, route: "Engineering to Union", congestion: "low" },
];

const defaultCurrentRoutes = [
    { id: 1, shuttleName: "Shuttle 1", route: "Central Library, Engineering Block, Student Union", frequency: 15 }
];


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full mt-6">
      {pending ? "Optimizing..." : "Optimize Routes"}
      {!pending && <Bot className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function AiOptimizerForm() {
  const [state, formAction] = useFormState(getOptimizedRoutes, initialState);

  const [passengerDemand, setPassengerDemand] = useState(defaultPassengerDemand);
  const [trafficConditions, setTrafficConditions] = useState(defaultTrafficConditions);
  const [currentRoutes, setCurrentRoutes] = useState(defaultCurrentRoutes);

  const handleFormAction = (formData: FormData) => {
    const passengerDemandJSON = JSON.stringify(
      passengerDemand.map(({ id, ...rest }) => rest)
    );
    const trafficConditionsJSON = JSON.stringify(
      trafficConditions.map(({ id, ...rest }) => rest)
    );
    const routesData = currentRoutes.reduce((acc, shuttle) => {
        acc[shuttle.shuttleName.toLowerCase().replace(/ /g, "_")] = {
            route: shuttle.route.split(',').map(s => s.trim()),
            frequency_minutes: shuttle.frequency
        };
        return acc;
    }, {} as Record<string, any>);
    const currentRoutesJSON = JSON.stringify(routesData, null, 2);

    formData.set("passengerDemand", passengerDemandJSON);
    formData.set("trafficConditions", trafficConditionsJSON);
    formData.set("currentRoutes", currentRoutesJSON);
    
    formAction(formData);
  };
  
  // Handlers for Passenger Demand
  const handleDemandChange = (id: number, field: 'stop' | 'demand', value: string | number) => {
    setPassengerDemand(passengerDemand.map(item => item.id === id ? {...item, [field]: value} : item));
  };
  const addDemandRow = () => {
    setPassengerDemand([...passengerDemand, {id: Date.now(), stop: "", demand: 0}]);
  };
  const removeDemandRow = (id: number) => {
    setPassengerDemand(passengerDemand.filter(item => item.id !== id));
  };

  // Handlers for Traffic Conditions
  const handleTrafficChange = (id: number, field: 'route' | 'congestion', value: string) => {
    setTrafficConditions(trafficConditions.map(item => item.id === id ? {...item, [field]: value} : item));
  };
  const addTrafficRow = () => {
    setTrafficConditions([...trafficConditions, {id: Date.now(), route: "", congestion: "low"}]);
  };
  const removeTrafficRow = (id: number) => {
    setTrafficConditions(trafficConditions.filter(item => item.id !== id));
  };

  // Handlers for Current Routes
  const handleRouteChange = (id: number, field: 'shuttleName' | 'route' | 'frequency', value: string | number) => {
    setCurrentRoutes(currentRoutes.map(item => item.id === id ? {...item, [field]: value} : item));
  };
  const addRouteRow = () => {
    setCurrentRoutes([...currentRoutes, {id: Date.now(), shuttleName: "", route: "", frequency: 15}]);
  };
  const removeRouteRow = (id: number) => {
    setCurrentRoutes(currentRoutes.filter(item => item.id !== id));
  };

  return (
    <form action={handleFormAction} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" /> Passenger Demand
            </CardTitle>
            <CardDescription>
              Add stops and set the number of waiting passengers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             {passengerDemand.map((item) => (
                <div key={item.id} className="flex items-center gap-2 p-3 border rounded-lg">
                    <Input placeholder="Stop Name" value={item.stop} onChange={(e) => handleDemandChange(item.id, 'stop', e.target.value)} />
                    <Input type="number" placeholder="Demand" value={item.demand} onChange={(e) => handleDemandChange(item.id, 'demand', parseInt(e.target.value) || 0)} className="w-28" />
                    <Button variant="ghost" size="icon" onClick={() => removeDemandRow(item.id)}><X className="h-4 w-4" /></Button>
                </div>
             ))}
             <Button variant="outline" size="sm" onClick={addDemandRow}><Plus className="mr-2 h-4 w-4" /> Add Stop</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrafficCone className="text-primary" /> Traffic Conditions
            </CardTitle>
            <CardDescription>
              Define routes and set their current traffic congestion.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {trafficConditions.map(item => (
                <div key={item.id} className="flex items-center gap-2 p-3 border rounded-lg">
                    <Input placeholder="Route (e.g., Stop A to Stop B)" value={item.route} onChange={(e) => handleTrafficChange(item.id, 'route', e.target.value)} />
                    <Select value={item.congestion} onValueChange={(value) => handleTrafficChange(item.id, 'congestion', value)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Congestion" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="ghost" size="icon" onClick={() => removeTrafficRow(item.id)}><X className="h-4 w-4" /></Button>
                </div>
            ))}
            <Button variant="outline" size="sm" onClick={addTrafficRow}><Plus className="mr-2 h-4 w-4" /> Add Route</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="text-primary" /> Current Routes
            </CardTitle>
            <CardDescription>
              Define current shuttle routes and their frequency.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentRoutes.map(item => (
                 <div key={item.id} className="p-3 border rounded-lg space-y-2">
                     <div className="flex items-center gap-2">
                        <Input placeholder="Shuttle Name (e.g., Shuttle 1)" value={item.shuttleName} onChange={(e) => handleRouteChange(item.id, 'shuttleName', e.target.value)} />
                        <Input type="number" placeholder="Frequency (mins)" value={item.frequency} onChange={(e) => handleRouteChange(item.id, 'frequency', parseInt(e.target.value) || 0)} className="w-[180px]" />
                        <Button variant="ghost" size="icon" onClick={() => removeRouteRow(item.id)}><X className="h-4 w-4" /></Button>
                     </div>
                     <Input placeholder="Route stops, comma-separated" value={item.route} onChange={(e) => handleRouteChange(item.id, 'route', e.target.value)}/>
                 </div>
            ))}
            <Button variant="outline" size="sm" onClick={addRouteRow}><Plus className="mr-2 h-4 w-4" /> Add Shuttle</Button>
          </CardContent>
        </Card>

        <SubmitButton />

        {state.message && state.data === null && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        )}
      </div>

      {/* Output Section */}
      <div className="space-y-6">
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle>AI-Optimized Results</CardTitle>
            <CardDescription>
              The AI will generate optimized routes and reasoning here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {state.data ? (
              <div className="space-y-6">
                <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                    <AlertTitle className="text-green-800 dark:text-green-300">Success!</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-400">{state.message}</AlertDescription>
                </Alert>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Optimized Routes</h3>
                  <pre className="p-4 bg-secondary rounded-md text-sm text-secondary-foreground overflow-x-auto">
                    {state.data.optimizedRoutes}
                  </pre>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reasoning</h3>
                  <div className="p-4 bg-secondary rounded-md text-sm text-secondary-foreground">
                    <p>{state.data.reasoning}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full min-h-96">
                <Bot className="h-16 w-16 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Results will appear here after optimization.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </form>
  );
}

    