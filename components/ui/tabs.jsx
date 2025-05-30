import React, { useState, useContext, createContext } from "react";


// Optional: Utility function to conditionally join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Context to share active tab state
const TabsContext = createContext();

export function Tabs({ defaultValue, className, children, ...props }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within <Tabs>");
  }
  return context;
}

export function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, value, children, ...props }) {
  const { value: activeTab, setValue } = useTabsContext();

  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
        activeTab === value
          ? "bg-background text-foreground shadow-sm"
          : "hover:text-foreground/80",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children, ...props }) {
  const { value: activeTab } = useTabsContext();

  return activeTab === value ? (
    <div
      className={cn("mt-2 focus-visible:outline-none", className)}
      {...props}
    >
      {children}
    </div>
  ) : null;
}
