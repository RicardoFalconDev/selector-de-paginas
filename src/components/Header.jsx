/** Barra superior del flujo "Configurar firma". */
export default function Header() {
  return (
    <header className="header">
      <div className="fid-logo" role="img" aria-label="FID by Lakaut">
        <span className="fid-logo__top"><img src="/assets/logo-1.svg" alt="" /></span>
        <span className="fid-logo__by"><img src="/assets/logo-2.svg" alt="" /></span>
        <span className="fid-logo__lakaut"><img src="/assets/logo-3.svg" alt="" /></span>
      </div>
      <button className="icon-btn" type="button" aria-label="Volver">
        <img src="/assets/arrow-back.svg" alt="" />
      </button>
      <h1 className="header__title">Configurar firma</h1>
      <div className="header__actions">
        <button className="btn btn--primary btn--sm" type="button">
          Continuar
        </button>
        <button className="icon-btn" type="button" aria-label="Cerrar">
          <img src="/assets/close.svg" alt="" />
        </button>
      </div>
    </header>
  );
}
