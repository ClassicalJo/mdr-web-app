export function ComingSoonMark() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-7 -top-3 grid size-7 rotate-12 place-items-center rounded-full bg-primary text-center shadow-sm ring-2 ring-background"
      >
        <span className="font-kick text-[6.5px] font-semibold uppercase leading-[1.15] text-primary-foreground">
          Coming
          <br />
          soon
        </span>
      </span>
      <span className="sr-only">(coming soon)</span>
    </>
  );
}
