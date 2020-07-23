export default function Resume() {
  return (
    <>
      <iframe
        className="display"
        src="/documents/resume.pdf"
        scrolling="no"
        frameBorder="0"
        longdesc="Resume"
        width="100%"
        height="100%"
      />
      <style jsx>{`
        .display {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
