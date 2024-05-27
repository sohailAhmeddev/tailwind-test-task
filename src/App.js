import React from 'react';
import "./App.css";
import img from "./img/image.jpg";

function ProductCard({ title, price }) {
  return (
    <div className="flex flex-col space-y-3">
      <img src={img} alt={`Model ${title}`} className="rounded-md w-full max-w-xs" />
      <h3 className="text-sky-900 font-bold  text-xl font-sans">{title}</h3>
      <p className="text-sky-900 font-medium text-base font-sans">
        Queen <span className="line-through"> $0,000.00</span> <span className="text-blue-500">$0,000.00</span>
      </p>
      <p className="uppercase text-sm font-semibold text-green-700">
        up to $000 in savings
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="flex items-start flex-col gap-y-10 mx-auto p-10">
      <div className="flex justify-center gap-10 pt-10 flex-wrap">
        {['Model 1', 'Model 2', 'Model 3'].map((model) => (
          <ProductCard key={model} title={model} />
        ))}
      </div>
      <button className="px-6 py-4 rounded-lg bg-blue-500 text-white text-lg font-sans font-semibold max-w-fit">
        Shop collection
      </button>
    </div>
  );
}

export default App;