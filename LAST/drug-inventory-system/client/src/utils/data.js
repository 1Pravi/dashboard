// src/utils/data.js
export const sampleMetricsData = {
  totalShipments: 1200,
  deliveriesInProgress: 300,
  successfulDeliveries: 800,
  failedDeliveries: 100,
  avgLeadTime: 4.5,
  shipmentVolumeByRegion: [
    { region: 'North', volume: 300 },
    { region: 'South', volume: 500 },
    { region: 'East', volume: 200 },
    { region: 'West', volume: 200 }
  ]
};

export const sampleShipmentsData = [
  { id: '1', status: 'In Transit', latitude: 51.505, longitude: -0.09, estimatedDeliveryTime: '2024-09-10' },
  { id: '2', status: 'Delivered', latitude: 51.515, longitude: -0.1, estimatedDeliveryTime: '2024-09-09' }
];

export const samplePerformanceData = {
  onTimeVsLate: [
    { type: 'On Time', count: 800 },
    { type: 'Late', count: 100 }
  ],
  leadTimeAnalysis: [
    { channel: 'Air', averageLeadTime: 3.5 },
    { channel: 'Ground', averageLeadTime: 5.0 }
  ],
  carrierPerformance: [
    { carrier: 'FedEx', successRate: 95 },
    { carrier: 'DHL', successRate: 90 }
  ]
};

export const sampleTrendData = {
  trendAnalysis: [
    { date: '2024-01', volume: 100 },
    { date: '2024-02', volume: 150 }
  ],
  predictiveAnalytics: [
    { date: '2024-09', forecast: 200 }
  ]
};
