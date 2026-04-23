export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[38rem] px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
      {children}
    </div>
  );
}
