import { useMemo, useState } from "react";
import { Search, ArrowRight, BookOpen, X } from "lucide-react";
import { categories } from "../../data/categories";

const popularSigns = [
  {
    word: "Hello",
    category: "Everyday Communication",
  },
  {
    word: "Family",
    category: "Everyday Communication",
  },
  {
    word: "Teacher",
    category: "Everyday Communication",
  },
  {
    word: "Help",
    category: "Public Communication",
  },
  {
    word: "School",
    category: "Everyday Communication",
  },
  {
    word: "Doctor",
    category: "Public Communication",
  },
  {
    word: "Yes",
    category: "Grammar",
  },
  {
    word: "Mother",
    category: "Everyday Communication",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  /*
   * Build one list of signs from the existing categories.js file.
   * This means we don't have to duplicate the vocabulary.
   */
  const allSigns = useMemo(() => {
    const signs = [];

    categories.forEach((category) => {
      category.lessons.forEach((lesson) => {
        lesson.signs.forEach((sign) => {
          const alreadyExists = signs.some(
            (item) => item.word.toLowerCase() === sign.toLowerCase()
          );

          if (!alreadyExists) {
            signs.push({
              word: sign,
              lesson: lesson.title,
              category: category.name,
              categoryId: category.id,
              lessonId: lesson.id,
            });
          }
        });
      });
    });

    return signs.sort((a, b) => a.word.localeCompare(b.word));
  }, []);

  /*
   * Search and alphabet filtering
   */
  const searchResults = allSigns.filter((sign) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      sign.word.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLetter =
      selectedLetter === "" ||
      sign.word.toUpperCase().startsWith(selectedLetter);

    return matchesSearch && matchesLetter;
  });

  const isSearching =
    searchTerm.trim() !== "" || selectedLetter !== "";

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedLetter("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* =========================
          HERO / SEARCH SECTION
      ========================== */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white">
            <BookOpen size={26} />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            UgSL Dictionary
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Search and explore Ugandan Sign Language signs.
            Find words, discover categories, and learn signs for
            everyday communication.
          </p>

          {/* Search box */}
          <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100">
            <Search
              size={21}
              className="shrink-0 text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setSelectedLetter("");
              }}
              placeholder="Search for a sign..."
              aria-label="Search for a sign"
              className="w-full border-none bg-transparent px-3 py-4 text-gray-800 outline-none placeholder:text-gray-400"
            />

            {searchTerm && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* =========================
            SEARCH RESULTS
        ========================== */}
        {isSearching ? (
          <section>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchTerm
                    ? `Results for "${searchTerm}"`
                    : `Signs starting with "${selectedLetter}"`}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {searchResults.length}{" "}
                  {searchResults.length === 1
                    ? "sign"
                    : "signs"}{" "}
                  found
                </p>
              </div>

              <button
                onClick={clearSearch}
                className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                <X size={16} />
                Clear search
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {searchResults.map((sign) => (
                  <SignCard
                    key={`${sign.word}-${sign.lessonId}`}
                    sign={sign}
                  />
                ))}
              </div>
            ) : (
              <EmptyResults />
            )}
          </section>
        ) : (
          <>
            {/* =========================
                POPULAR SIGNS
            ========================== */}
            <section className="mt-16">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900">
                  Popular Signs
                </h2>

                <p className="mt-2 text-gray-500">
                  Start learning some commonly used signs.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {popularSigns.map((sign) => (
                  <SignCard
                    key={sign.word}
                    sign={sign}
                  />
                ))}
              </div>
            </section>

            {/* =========================
                ALPHABET
            ========================== */}
            <section className="mt-16">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900">
                  Browse by Letter
                </h2>

                <p className="mt-2 text-gray-500">
                  Find signs alphabetically.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => {
                      setSelectedLetter(letter);
                      setSearchTerm("");

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

/* =================================
   SIGN CARD
================================= */

function SignCard({ sign }) {
  return (
    <button
      type="button"
      className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Temporary video placeholder */}
      <div className="flex h-40 items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
            🎥
          </div>

          <p className="text-xs font-medium text-gray-500">
            Sign video
          </p>

          <p className="mt-1 text-[11px] text-gray-400">
            Video coming from API
          </p>
        </div>
      </div>

      {/* Sign information */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">
          {sign.word}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {sign.category}
        </p>

        {sign.lesson && (
          <p className="mt-1 text-xs text-gray-400">
            {sign.lesson}
          </p>
        )}

        <div className="mt-4 flex items-center text-sm font-medium text-gray-900">
          View sign

          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </button>
  );
}

/* =================================
   EMPTY SEARCH RESULTS
================================= */

function EmptyResults() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <Search size={24} className="text-gray-400" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        No signs found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
        We couldn't find a sign matching your search.
        Try another word or browse the dictionary by category.
      </p>
    </div>
  );
}