'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import GeneralVision from '@/components/GeneralVision';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function Home() {
    const queryClient = new QueryClient()

    const tabs = [
        { name: 'Visão Geral', component: <GeneralVision /> },
        { name: 'Demandas', component: 'Demandas' },
        { name: 'Gráficos', component: 'Gráficos' },
        { name: 'Roadmap', component: 'Roadmap' },
    ];

    const [activeTab, setActiveTab] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />

        <div className="flex flex-col justify-center my-6 mx-14 gap-10">
            <div role="tablist" className="tabs tabs-box bg-gray-200 flex gap-12">
                {tabs.map((tab, index) => (
                    <input
                    key={index}
                    type="radio"
                    name="my_tabs_6"
                    role="tab"
                    width={57}
                    className={`tab rounded-3xl flex-1 mx-0.5 ${index === activeTab ? 'tab-active [--tab-bg:#F5F5F5] [--tab-border-color:white]' : ''}`}
                    aria-label={tab.name}
                    defaultChecked={index === 0}
                    onChange={() => setActiveTab(index)}
                    />          
                ))}
            </div>
            {tabs[activeTab].component}
        </div>
    </QueryClientProvider>
  );
}
    