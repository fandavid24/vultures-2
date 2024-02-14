
export default function Home() {
  return (
    <main>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-red-500 py-6 sm:py-12">
        <div className="max-w-screen-lg mx-auto py-4">
          <h2 className="font-bold text-center text-6xl text-slate-700">
              Happy Valentines Day!!
          </h2>
          <div className="flex gap-6 mt-20">
            <a className="bg-purple-400 w-1/3 shadow rounded-lg overflow-hidden" href="/us">
              <div className="p-6">
                <h3 className="mt-3 font-bold text-4xl pb-4 border-b border-slate-300 text-center text-slate-700">
                  us</h3>
              </div>
            </a>
            <a className="bg-purple-400 w-1/3 shadow rounded-lg overflow-hidden" href="/flowers">
              <div className="p-6">
                <h3 className="mt-3 font-bold text-4xl pb-4 border-b border-slate-300 text-center text-slate-700">
                  flower&#40;s&#41;</h3>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </main>
  );
}
