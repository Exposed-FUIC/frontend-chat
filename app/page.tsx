import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_gray-800_10%,_white_90%)]">
      <div className="flex h-dvh items-center justify-center">
        <SearchBar/>
      </div>
    </div>
  );
}
