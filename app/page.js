import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Home() {

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Dark Mode App</h1>
      <ThemeToggle />
    </div>
  );
}
