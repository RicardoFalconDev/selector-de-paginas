/** Chip "Pág N ×" del resumen de páginas seleccionadas. */
export default function PageChip({ page, onRemove }) {
  return (
    <span className="chip">
      Pág {page}
      <button className="chip__remove" type="button" aria-label={`Quitar página ${page}`} onClick={() => onRemove(page)}>
        <img src="/assets/close-small.svg" alt="" />
      </button>
    </span>
  );
}
