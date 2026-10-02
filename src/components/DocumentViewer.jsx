const ZOOM_STEP = 10;
const ZOOM_MIN = 50;
const ZOOM_MAX = 200;

/** Documento con la estampa de firma y la barra de zoom/paginación. */
export default function DocumentViewer({ zoom, onZoom, currentPage, totalPages, onSelectPage }) {
  const scale = zoom / 100;

  return (
    <section className="viewer" aria-label="Vista previa del documento">
      <div className="viewer__stage" style={{ height: 653.788 * scale }}>
        <div className="doc" style={{ transform: `scale(${scale})` }}>
          <img className="doc__img" src="/assets/doc-b.png" alt="Autorización para retiro de pertenencias" />
          <div className="stamp" aria-label="Firma">
            <div className="stamp__box">
              <p className="stamp__title">Firmado digitalmente por:</p>
              <div className="stamp__lines">
                <p className="stamp__name">Isaac Cristian Meneses</p>
                <p>CUI: 20960814352</p>
                <p>Fecha: 16/4/26, 12:41 p. m.</p>
                <p>Emisor: AC-LAKAUT2</p>
              </div>
            </div>
            <span className="stamp__handle stamp__handle--tl" />
            <span className="stamp__handle stamp__handle--tr" />
            <span className="stamp__handle stamp__handle--bl" />
            <span className="stamp__handle stamp__handle--br" />
          </div>
        </div>
      </div>

      <div className="zoombar">
        <div className="zoombar__group">
          <button
            className="zoombar__icon"
            type="button"
            aria-label="Alejar"
            disabled={zoom <= ZOOM_MIN}
            onClick={() => onZoom(Math.max(ZOOM_MIN, zoom - ZOOM_STEP))}
          >
            <img src="/assets/zoom-remove.svg" alt="" />
          </button>
          <span className="zoombar__value zoombar__value--zoom">{zoom}%</span>
          <button
            className="zoombar__icon"
            type="button"
            aria-label="Acercar"
            disabled={zoom >= ZOOM_MAX}
            onClick={() => onZoom(Math.min(ZOOM_MAX, zoom + ZOOM_STEP))}
          >
            <img src="/assets/zoom-add.svg" alt="" />
          </button>
        </div>
        <span className="zoombar__divider" />
        <div className="zoombar__group">
          <button
            className="zoombar__icon"
            type="button"
            aria-label="Página anterior"
            disabled={currentPage <= 1}
            onClick={() => onSelectPage(currentPage - 1)}
          >
            <img src="/assets/arrow-left.svg" alt="" />
          </button>
          <span className="zoombar__value">
            <b>{currentPage}</b>/{totalPages}
          </span>
          <button
            className="zoombar__icon"
            type="button"
            aria-label="Página siguiente"
            disabled={currentPage >= totalPages}
            onClick={() => onSelectPage(currentPage + 1)}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
