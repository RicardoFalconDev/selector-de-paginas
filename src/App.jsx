import { useCallback, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import DocumentViewer from './components/DocumentViewer.jsx';
import ConfigPanel from './components/ConfigPanel.jsx';
import PageSelectorModal from './components/PageSelectorModal.jsx';
import { TOTAL_PAGES } from './data.js';

export default function App() {
  const [selected, setSelected] = useState(() => new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [samePosition, setSamePosition] = useState(true);
  const openerRef = useRef(null);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const confirm = useCallback(
    (draft) => {
      setSelected(new Set(draft));
      closeModal();
    },
    [closeModal]
  );

  const removePage = (n) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(n);
      return next;
    });

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar currentPage={currentPage} onSelectPage={setCurrentPage} />
        <main className="workspace">
          <DocumentViewer
            zoom={zoom}
            onZoom={setZoom}
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onSelectPage={setCurrentPage}
          />
          <ConfigPanel
            pagesOpen={pagesOpen}
            onTogglePages={() => setPagesOpen((o) => !o)}
            selected={selected}
            openerRef={openerRef}
            onOpen={() => setModalOpen(true)}
            onRemove={removePage}
            onClear={() => setSelected(new Set())}
            samePosition={samePosition}
            onSamePositionChange={setSamePosition}
          />
        </main>
      </div>

      {modalOpen && <PageSelectorModal initialSelected={selected} onCancel={closeModal} onConfirm={confirm} />}
    </div>
  );
}
