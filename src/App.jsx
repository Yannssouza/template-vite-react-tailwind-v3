function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-amber-300">
      <nav>
        <div className="fixed flex h-16 min-w-full justify-between bg-amber-100 shadow-2xl">
          <div className="flex items-center p-5 text-2xl font-bold text-neutral-900">
            <h1>New Site</h1>
          </div>
          <ul className="flex cursor-pointer flex-row items-center font-bold text-neutral-900">
            <li className="p-5 hover:text-neutral-50">Articles</li>
            <li className="p-5 hover:text-neutral-50">Contact</li>
            <li className="p-5 hover:text-neutral-50">Products</li>
          </ul>
        </div>
      </nav>
      <div className="flex h-header flex-col items-center justify-center bg-[url('mountains-55067.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="p-5 text-9xl font-bold text-amber-100">Hello World!</h1>
        <p className="p-5 text-2xl text-center font-bold text-amber-100">
          This is a React, Vite and Tailwind Website.
        </p>
      </div>
      <div className="h-header"></div>
    </div>
  );
}

export default App;
