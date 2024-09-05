export default function CountingButton({ countMinus, countPlus, count }) {
  //------------------------------------------------
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="bg-primary px-3 py-1 [border-radius:4px_0_0_4px] font-bold text-white "
        onClick={countMinus}
      >
        -
      </button>
      <div className="w-4 font-bold">{count}</div>
      <button
        className="bg-primary px-3 py-1 [border-radius:0_4px_4px_0] font-bold text-white "
        onClick={countPlus}
      >
        +
      </button>
    </div>
  );
}
