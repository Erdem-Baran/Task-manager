export default function Header() {
  return (
    <div className="header p-3 border-bottom d-flex justify-content-center position-relative top-0 start-50 translate-middle-x w-90">
      <h1
        className="h2 text-center animated-heading"
        style={{
          textShadow: "1px 1px 1px rgba(0, 123, 255, 0.5)",
          fontFamily: "emily",
        }}
      >
        Task Manager
      </h1>
    </div>
  );
}
