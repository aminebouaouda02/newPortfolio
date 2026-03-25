export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        © {year} <span>Amine Bouaouda</span> — M1 Big Data &amp; IoT @ ENSAM
        Casablanca
      </p>
    </footer>
  );
}
