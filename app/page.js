import Footer from '/components/Footer';
import Calculator from '/components/Calculator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}
