/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import DashboardView from './views/DashboardView';
import CoursesView from './views/CoursesView';
import InventoryView from './views/InventoryView';
import WorkshopsView from './views/WorkshopsView';
import GalleryView from './views/GalleryView';
import SettingsView from './views/SettingsView';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {currentView === 'dashboard' && <DashboardView />}
      {currentView === 'inventory' && <InventoryView />}
      {currentView === 'courses' && <CoursesView />}
      {currentView === 'workshops' && <WorkshopsView />}
      {currentView === 'gallery' && <GalleryView />}
      {currentView === 'settings' && <SettingsView />}
    </Layout>
  );
}
