// src/components/DashboardOverview.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles.css';

export const KeyMetrics = ({ metrics }) => (
  <div>
    <h2>Key Metrics</h2>
    <div>Total Shipments: {metrics.totalShipments}</div>
    <div>Deliveries in Progress: {metrics.deliveriesInProgress}</div>
    <div>Successful Deliveries: {metrics.successfulDeliveries}</div>
    <div>Failed Deliveries: {metrics.failedDeliveries}</div>
    <div>Average Lead Time: {metrics.avgLeadTime.toFixed(2)} days</div>
  </div>
);

export const Filters = ({ options }) => (
  <div>
    <h2>Filters</h2>
    <select>
      {options.dateRange.map(date => <option key={date}>{date}</option>)}
    </select>
    <select>
      {options.shipmentStatus.map(status => <option key={status}>{status}</option>)}
    </select>
    <select>
      {options.distributionChannels.map(channel => <option key={channel}>{channel}</option>)}
    </select>
    <select>
      {options.carriers.map(carrier => <option key={carrier}>{carrier}</option>)}
    </select>
  </div>
);

export const ShipmentVolumeByRegion = ({ data }) => (
  <div>
    <h2>Shipment Volume by Region</h2>
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="region" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="volume" stroke="#8884d8" />
    </LineChart>
  </div>
);
