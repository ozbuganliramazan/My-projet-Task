import { useState } from 'react';
import Header from './components/Header';
import Inbox from './components/Inbox';
import SideNav from './components/sideNav';
import RightPanel from './components/RightPanel';

const App = () => {
  const [showRightPanel, setShowRightPanel] = useState(false);
  return (
    <div className="flex bg-gray-100 h-[100vh]">
      <SideNav />
      <div className="w-full min-h-[100vh]">
        <Header
          setShowRightPanel={setShowRightPanel}
          showRightPanel={showRightPanel}
        />
        <div className="flex h-[calc(100%-100px)]">
          <Inbox />
          {showRightPanel && (
            <RightPanel setShowRightPanel={setShowRightPanel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
